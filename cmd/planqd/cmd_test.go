package main_test

import (
	"fmt"
	"testing"

	"github.com/stretchr/testify/require"

	"github.com/cosmos/cosmos-sdk/client/flags"
	svrcmd "github.com/cosmos/cosmos-sdk/server/cmd"
	"github.com/cosmos/cosmos-sdk/x/genutil/client/cli"

	"github.com/planq-network/planq/v2/app"
	planqd "github.com/planq-network/planq/v2/cmd/planqd"
)

func TestInitCmd(t *testing.T) {
	rootCmd, _ := planqd.NewRootCmd()
	rootCmd.SetArgs([]string{
		"init",      // Test the init cmd
		"planqtest", // Moniker
		fmt.Sprintf("--%s=%s", cli.FlagOverwrite, "true"), // Overwrite genesis.json, in case it already exists
		fmt.Sprintf("--%s=%s", flags.FlagChainID, "planq_7000-1"),
	})

	err := svrcmd.Execute(rootCmd, "", app.DefaultNodeHome)
	require.NoError(t, err)
}
