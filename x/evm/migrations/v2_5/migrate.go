package v2_5

import (
	"github.com/cosmos/cosmos-sdk/codec"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/planq-network/planq/v2/x/evm/types"

	v2_5types "github.com/planq-network/planq/v2/x/evm/migrations/v2_5/types"
)

// MigrateStore migrates the x/evm module state from the consensus version 4 to
// version 5. Specifically, it takes the parameters that are currently stored
// in separate keys and stores them directly into the x/evm module state using
// a single params key.
func MigrateStore(
	ctx sdk.Context,
	storeKey storetypes.StoreKey,
	cdc codec.BinaryCodec,
) error {
	var (
		extraEIPs   v2_5types.V2_5ExtraEIPs
		chainConfig types.ChainConfig
		params      types.Params
	)

	store := ctx.KVStore(storeKey)

	denom := string(store.Get(types.ParamStoreKeyEVMDenom))

	extraEIPsBz := store.Get(types.ParamStoreKeyExtraEIPs)
	cdc.MustUnmarshal(extraEIPsBz, &extraEIPs)

	chainCfgBz := store.Get(types.ParamStoreKeyChainConfig)
	cdc.MustUnmarshal(chainCfgBz, &chainConfig)

	params.EvmDenom = denom
	params.ExtraEIPs = extraEIPs.EIPs
	params.ChainConfig = chainConfig
	params.EnableCreate = store.Has(types.ParamStoreKeyEnableCreate)
	params.EnableCall = store.Has(types.ParamStoreKeyEnableCall)
	params.AllowUnprotectedTxs = store.Has(types.ParamStoreKeyAllowUnprotectedTxs)

	store.Delete(types.ParamStoreKeyChainConfig)
	store.Delete(types.ParamStoreKeyExtraEIPs)
	store.Delete(types.ParamStoreKeyEVMDenom)
	store.Delete(types.ParamStoreKeyEnableCreate)
	store.Delete(types.ParamStoreKeyEnableCall)
	store.Delete(types.ParamStoreKeyAllowUnprotectedTxs)

	if err := params.Validate(); err != nil {
		return err
	}

	bz := cdc.MustMarshal(&params)

	store.Set(types.KeyPrefixParams, bz)
	return nil
}
