package keeper_test

import (
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	"github.com/cosmos/cosmos-sdk/testutil"
	sdk "github.com/cosmos/cosmos-sdk/types"
	authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"
	govtypes "github.com/cosmos/cosmos-sdk/x/gov/types"
	paramtypes "github.com/cosmos/cosmos-sdk/x/params/types"
	"github.com/planq-network/planq/v2/app"
	"github.com/planq-network/planq/v2/encoding"
	erc20keeper "github.com/planq-network/planq/v2/x/erc20/keeper"
	v2types "github.com/planq-network/planq/v2/x/erc20/migrations/v2/types"
	"github.com/planq-network/planq/v2/x/erc20/types"
)

type mockSubspace struct {
	ps           v2types.V2Params
	storeKey     storetypes.StoreKey
	transientKey storetypes.StoreKey
}

func newMockSubspace(ps v2types.V2Params, storeKey, transientKey storetypes.StoreKey) mockSubspace {
	return mockSubspace{ps: ps, storeKey: storeKey, transientKey: transientKey}
}

func (ms mockSubspace) GetParamSet(_ sdk.Context, ps types.LegacyParams) {
	*ps.(*v2types.V2Params) = ms.ps
}

func (ms mockSubspace) WithKeyTable(keyTable paramtypes.KeyTable) paramtypes.Subspace {
	encCfg := encoding.MakeConfig(app.ModuleBasics)
	cdc := encCfg.Codec
	return paramtypes.NewSubspace(cdc, encCfg.Amino, ms.storeKey, ms.transientKey, "test").WithKeyTable(keyTable)
}

func (suite *KeeperTestSuite) TestMigrations() {
	storeKey := sdk.NewKVStoreKey(types.ModuleName)
	tKey := sdk.NewTransientStoreKey("transient_test")
	ctx := testutil.DefaultContext(storeKey, tKey)

	var outputParams v2types.V2Params
	inputParams := v2types.DefaultParams()
	legacySubspace := newMockSubspace(v2types.DefaultParams(), storeKey, tKey).WithKeyTable(v2types.ParamKeyTable())
	legacySubspace.SetParamSet(ctx, &inputParams)
	legacySubspace.GetParamSetIfExists(ctx, &outputParams)

	// Added dummy keeper in order to use the test store and store key
	mockKeeper := erc20keeper.NewKeeper(storeKey, nil, authtypes.NewModuleAddress(govtypes.ModuleName), nil, nil, nil, nil)
	mockSubspace := newMockSubspace(v2types.DefaultParams(), storeKey, tKey)
	migrator := erc20keeper.NewMigrator(mockKeeper, mockSubspace)

	testCases := []struct {
		name        string
		migrateFunc func(ctx sdk.Context) error
	}{
		{
			"Run Migrate1to2",
			migrator.Migrate1to2,
		},
	}

	for _, tc := range testCases {
		suite.Run(tc.name, func() {
			err := tc.migrateFunc(ctx)
			suite.Require().NoError(err)
		})
	}
}