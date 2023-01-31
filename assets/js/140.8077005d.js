(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{583:function(e,o,t){"use strict";t.r(o);var n=t(1),s=Object(n.a)({},(function(){var e=this,o=e._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"state-transitions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#state-transitions"}},[e._v("#")]),e._v(" State Transitions")]),e._v(" "),o("p",[e._v("The erc20 modules allows for two types of registration state transitions.\nDepending on how token pairs are registered, with "),o("code",[e._v("RegisterCoinProposal")]),e._v(" or "),o("code",[e._v("RegisterERC20Proposal")]),e._v(",\nthere are four possible conversion state transitions.")]),e._v(" "),o("h2",{attrs:{id:"token-pair-registration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#token-pair-registration"}},[e._v("#")]),e._v(" Token Pair Registration")]),e._v(" "),o("p",[e._v("Both the Cosmos coin and the ERC20 token registration allow for registering several token pairs with one proposal.\nFor simplicity, the following description describes the registration of only one token pair per proposal.")]),e._v(" "),o("h3",{attrs:{id:"_1-register-coin"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-register-coin"}},[e._v("#")]),e._v(" 1. Register Coin")]),e._v(" "),o("p",[e._v('A user registers a native Cosmos Coin.\nOnce the proposal passes (i.e is approved by governance),\nthe ERC20 module uses a factory pattern to deploy an ERC20 token contract representation of the Cosmos Coin.\nNote that the native Evmos coin cannot be registered,\nas any coin including "evm" in its denomination cannot be registered.\nInstead, the Evmos token can be converted by Nomand\'s wrapped Evmos (WEVMOS) contract.')]),e._v(" "),o("ol",[o("li",[e._v("User submits a "),o("code",[e._v("RegisterCoinProposal")])]),e._v(" "),o("li",[e._v("Validators of the Evmos Hub vote on the proposal using "),o("code",[e._v("MsgVote")]),e._v(" and proposal passes")]),e._v(" "),o("li",[e._v("If Cosmos coin or IBC voucher exist on the bank module supply,\ncreate the "),o("a",{attrs:{href:"https://github.com/evmos/evmos/blob/main/contracts/ERC20MinterBurnerDecimals.sol",target:"_blank",rel:"noopener noreferrer"}},[e._v("ERC20 token contract"),o("OutboundLink")],1),e._v("\non the EVM based on the ERC20Mintable\n("),o("a",{attrs:{href:"https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC20",target:"_blank",rel:"noopener noreferrer"}},[e._v("ERC20Mintable by openzeppelin"),o("OutboundLink")],1),e._v(")\ninterface\n"),o("ul",[o("li",[e._v("Initial supply: 0")]),e._v(" "),o("li",[e._v("Token details (Name, Symbol, Decimals, etc) are derived\nfrom the bank module "),o("code",[e._v("Metadata")]),e._v(" field on the proposal content.")])])])]),e._v(" "),o("h3",{attrs:{id:"_2-register-erc20"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-register-erc20"}},[e._v("#")]),e._v(" 2. Register ERC20")]),e._v(" "),o("p",[e._v("A user registers a ERC20 token contract that is already deployed on the EVM module.\nOnce the proposal passes (i.e. is approved by governance),\nthe ERC20 module creates a Cosmos coin representation of the ERC20 token.")]),e._v(" "),o("ol",[o("li",[e._v("User submits a "),o("code",[e._v("RegisterERC20Proposal")])]),e._v(" "),o("li",[e._v("Validators of the EVMOS chain vote on the proposal using "),o("code",[e._v("MsgVote")]),e._v(" and proposal passes")]),e._v(" "),o("li",[e._v("If ERC-20 contract is deployed on the EVM module, create a bank coin "),o("code",[e._v("Metadata")]),e._v(" from the ERC20 details.")])]),e._v(" "),o("h2",{attrs:{id:"token-pair-conversion"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#token-pair-conversion"}},[e._v("#")]),e._v(" Token Pair Conversion")]),e._v(" "),o("p",[e._v("Conversion of a registered "),o("code",[e._v("TokenPair")]),e._v(" can be done via:")]),e._v(" "),o("ul",[o("li",[e._v("Cosmos transaction ("),o("code",[e._v("ConvertCoin")]),e._v(" and "),o("code",[e._v("ConvertERC20)")])]),e._v(" "),o("li",[e._v("Ethereum transaction (i.e sending a "),o("code",[e._v("MsgEthereumTx")]),e._v(" that leverages the EVM hook)")])]),e._v(" "),o("h3",{attrs:{id:"_1-registered-coin"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-registered-coin"}},[e._v("#")]),e._v(" 1. Registered Coin")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",[e._v("👉 "),o("strong",[e._v("Context:")]),e._v(" A "),o("code",[e._v("TokenPair")]),e._v(" has been created through a "),o("code",[e._v("RegisterCoinProposal")]),e._v(" governance proposal.\nThe proposal created an "),o("code",[e._v("ERC20")]),e._v(" contract\n("),o("a",{attrs:{href:"https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC20",target:"_blank",rel:"noopener noreferrer"}},[e._v("ERC20Mintable by openzeppelin"),o("OutboundLink")],1),e._v(")\nof the ERC20 token representation of the Coin from the "),o("code",[e._v("ModuleAccount")]),e._v(",\nassigning it as the "),o("code",[e._v("owner")]),e._v(" of the contract\nand thus granting it the permission to call the "),o("code",[e._v("mint()")]),e._v(" and "),o("code",[e._v("burnFrom()")]),e._v(" methods of the ERC20.")])]),e._v(" "),o("h4",{attrs:{id:"invariants"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#invariants"}},[e._v("#")]),e._v(" Invariants")]),e._v(" "),o("ul",[o("li",[e._v("Only the "),o("code",[e._v("ModuleAccount")]),e._v(" should have the Minter Role on the ERC20. Otherwise,\nthe user could unilaterally mint an infinite supply of the ERC20 token and\nthen convert them to the native Coin")]),e._v(" "),o("li",[e._v("The user and the "),o("code",[e._v("ModuleAccount")]),e._v(" (owner) should be the only ones that have the\nBurn Role for a Cosmos Coin")]),e._v(" "),o("li",[e._v("There shouldn't exist any native Cosmos Coin ERC20 Contract (eg Evmos, Atom,\nOsmo ERC20 contracts) that is not owned by the governance")]),e._v(" "),o("li",[e._v("Token/Coin supply is maintained at all times:\n"),o("ul",[o("li",[e._v("Total Coin supply = Coins + Escrowed Coins")]),e._v(" "),o("li",[e._v("Total Token supply = Escrowed Coins = Minted Tokens")])])])]),e._v(" "),o("h4",{attrs:{id:"_1-1-coin-to-erc20"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-coin-to-erc20"}},[e._v("#")]),e._v(" 1.1 Coin to ERC20")]),e._v(" "),o("ol",[o("li",[e._v("User submits "),o("code",[e._v("ConvertCoin")]),e._v(" Tx")]),e._v(" "),o("li",[e._v("Check if conversion is allowed for the pair, sender and recipient\n"),o("ul",[o("li",[e._v("global parameter is enabled")]),e._v(" "),o("li",[e._v("token pair is enabled")]),e._v(" "),o("li",[e._v("sender tokens are not vesting (checked in the bank module)")]),e._v(" "),o("li",[e._v("recipient address is not blacklisted")])])]),e._v(" "),o("li",[e._v("If Coin is a native Cosmos Coin and Token Owner is "),o("code",[e._v("ModuleAccount")]),e._v(" "),o("ol",[o("li",[e._v("Escrow Cosmos coin by sending them to the erc20 module account")]),e._v(" "),o("li",[e._v("Call "),o("code",[e._v("mint()")]),e._v(" ERC20 tokens from the "),o("code",[e._v("ModuleAccount")]),e._v(" address and send minted tokens to recipient address")])])]),e._v(" "),o("li",[e._v("Check if token balance increased by amount")])]),e._v(" "),o("h4",{attrs:{id:"_1-2-erc20-to-coin"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-erc20-to-coin"}},[e._v("#")]),e._v(" 1.2 ERC20 to Coin")]),e._v(" "),o("ol",[o("li",[e._v("User submits a "),o("code",[e._v("ConvertERC20")]),e._v(" Tx")]),e._v(" "),o("li",[e._v("Check if conversion is allowed for the pair, sender and recipient (see "),o("a",{attrs:{href:"#11-coin-to-erc20"}},[e._v("1.1 Coin to ERC20")]),e._v(")")]),e._v(" "),o("li",[e._v("If token is a ERC20 and Token Owner is "),o("code",[e._v("ModuleAccount")]),e._v(" "),o("ol",[o("li",[e._v("Call "),o("code",[e._v("burnCoins()")]),e._v(" on ERC20 to burn ERC20 tokens from the user balance")]),e._v(" "),o("li",[e._v("Send Coins (previously escrowed, see "),o("a",{attrs:{href:"#11-coin-to-erc20"}},[e._v("1.1 Coin to ERC20")]),e._v(")\nfrom module to the recipient address.")])])]),e._v(" "),o("li",[e._v("Check if\n"),o("ul",[o("li",[e._v("Coin balance increased by amount")]),e._v(" "),o("li",[e._v("Token balance decreased by amount")])])])]),e._v(" "),o("h3",{attrs:{id:"_2-registered-erc20"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-registered-erc20"}},[e._v("#")]),e._v(" 2. Registered ERC20")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",[e._v("👉 "),o("strong",[e._v("Context:")]),e._v(" A "),o("code",[e._v("TokenPair")]),e._v(" has been created through a "),o("code",[e._v("RegisterERC20Proposal")]),e._v(" governance proposal.\nThe "),o("code",[e._v("ModuleAccount")]),e._v(" is not the owner of the contract, so it can't mint new tokens or burn on behalf of the user.\nThe mechanism described below follows the same model as the ICS20 standard,\nby using escrow & mint / burn & unescrow logic.")])]),e._v(" "),o("h4",{attrs:{id:"invariants-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#invariants-2"}},[e._v("#")]),e._v(" Invariants")]),e._v(" "),o("ul",[o("li",[e._v("ERC20 Token supply on the EVM runtime is maintained at all times:\n"),o("ul",[o("li",[e._v("Escrowed ERC20 + Minted Cosmos Coin representation of ERC20 = Burned Cosmos Coin representation of ERC20 +\nUnescrowed ERC20\n"),o("ul",[o("li",[e._v("Convert 10 ERC20 → Coin, the total supply increases by 10. Mint on Cosmos side, no changes on EVM")]),e._v(" "),o("li",[e._v("Convert 10 Coin → ERC20, the total supply decreases by 10. Burn on Cosmos side , no changes of supply on EVM")])])]),e._v(" "),o("li",[e._v("Total ERC20 token supply = Non Escrowed Tokens + Escrowed Tokens (on Module account address)")]),e._v(" "),o("li",[e._v("Total Coin supply for the native ERC20 = Escrowed ERC20 Tokens on module account  (i.e balance) = Minted Coins")])])])]),e._v(" "),o("h4",{attrs:{id:"_2-1-erc20-to-coin"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-erc20-to-coin"}},[e._v("#")]),e._v(" 2.1 ERC20 to Coin")]),e._v(" "),o("ol",[o("li",[e._v("User submits a "),o("code",[e._v("ConvertERC20")]),e._v(" Tx")]),e._v(" "),o("li",[e._v("Check if conversion is allowed for the pair, sender and recipient (See "),o("a",{attrs:{href:"#11-coin-to-erc20"}},[e._v("1.1 Coin to ERC20")]),e._v(")")]),e._v(" "),o("li",[e._v("If token is a ERC20 and Token Owner is "),o("strong",[e._v("not")]),e._v(" "),o("code",[e._v("ModuleAccount")]),e._v(" "),o("ol",[o("li",[e._v("Escrow ERC20 token by sending them to the erc20 module account")]),e._v(" "),o("li",[e._v("Mint Cosmos coins of the corresponding token pair denomination and send coins to the recipient address")])])]),e._v(" "),o("li",[e._v("Check if\n"),o("ul",[o("li",[e._v("Coin balance increased by amount")]),e._v(" "),o("li",[e._v("Token balance decreased by amount")])])]),e._v(" "),o("li",[e._v("Fail if unexpected "),o("code",[e._v("Approval")]),e._v(" event found in logs to prevent malicious contract behaviour")])]),e._v(" "),o("h4",{attrs:{id:"_2-2-coin-to-erc20"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-coin-to-erc20"}},[e._v("#")]),e._v(" 2.2 Coin to ERC20")]),e._v(" "),o("ol",[o("li",[e._v("User submits "),o("code",[e._v("ConvertCoin")]),e._v(" Tx")]),e._v(" "),o("li",[e._v("Check if conversion is allowed for the pair, sender and recipient")]),e._v(" "),o("li",[e._v("If coin is a native Cosmos coin and Token Owner is "),o("strong",[e._v("not")]),e._v(" "),o("code",[e._v("ModuleAccount")]),e._v(" "),o("ol",[o("li",[e._v("Escrow Cosmos Coins by sending them to the erc20 module account")]),e._v(" "),o("li",[e._v("Unlock escrowed ERC20 from the module address by sending it to the recipient")]),e._v(" "),o("li",[e._v("Burn escrowed Cosmos coins")])])]),e._v(" "),o("li",[e._v("Check if token balance increased by amount")]),e._v(" "),o("li",[e._v("Fail if unexpected "),o("code",[e._v("Approval")]),e._v(" event found in logs to prevent malicious contract behaviour")])])])}),[],!1,null,null,null);o.default=s.exports}}]);