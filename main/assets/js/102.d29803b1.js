(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{646:function(t,e,a){"use strict";a.r(e);var o=a(0),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"testnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testnet"}},[t._v("#")]),t._v(" Testnet")]),t._v(" "),a("p",{attrs:{synopsis:""}},[t._v("Learn how to deploy a local testnet or connect to an existing public one")]),t._v(" "),a("h2",{attrs:{id:"pre-requisite-readings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[t._v("#")]),t._v(" Pre-requisite Readings")]),t._v(" "),a("ul",[a("li",{attrs:{prereq:""}},[a("RouterLink",{attrs:{to:"/quickstart/installation.html"}},[t._v("Install Planq")])],1),t._v(" "),a("li",{attrs:{prereq:""}},[a("a",{attrs:{href:"https://docs.docker.com/engine/installation/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install Docker"),a("OutboundLink")],1)]),t._v(" "),a("li",{attrs:{prereq:""}},[a("a",{attrs:{href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install docker-compose"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"single-node-local-manual-testnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#single-node-local-manual-testnet"}},[t._v("#")]),t._v(" Single-node, Local, Manual Testnet")]),t._v(" "),a("p",[t._v("This guide helps you create a single validator node that runs a network locally for testing and other development related uses.")]),t._v(" "),a("h3",{attrs:{id:"initialize-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initialize-node"}},[t._v("#")]),t._v(" Initialize node")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JE1PTklLRVI9dGVzdGluZwokS0VZPW15a2V5CiRDSEFJTklEPSZxdW90O2V0aGVybWludC0xJnF1b3Q7CgpldGhlcm1pbnRkIGluaXQgJE1PTklLRVIgLS1jaGFpbi1pZD0kQ0hBSU5JRAo="}}),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",[t._v("Monikers can contain only ASCII characters. Using Unicode characters will render your node unreachable.")])]),t._v(" "),a("p",[t._v("You can edit this "),a("code",[t._v("moniker")]),t._v(" later, in the "),a("code",[t._v("$(HOME)/.planqd/config/config.toml")]),t._v(" file:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"IyBBIGN1c3RvbSBodW1hbiByZWFkYWJsZSBuYW1lIGZvciB0aGlzIG5vZGUKbW9uaWtlciA9ICZxdW90OyZsdDt5b3VyX2N1c3RvbV9tb25pa2VyJmd0OyZxdW90Owo="}}),t._v(" "),a("p",[t._v("You can edit the "),a("code",[t._v("$HOME/.planqd/config/app.toml")]),t._v(" file in order to enable the anti spam mechanism and reject incoming transactions with less than the minimum gas prices:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"IyBUaGlzIGlzIGEgVE9NTCBjb25maWcgZmlsZS4KIyBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90b21sLWxhbmcvdG9tbAoKIyMjIyMgbWFpbiBiYXNlIGNvbmZpZyBvcHRpb25zICMjIyMjCgojIFRoZSBtaW5pbXVtIGdhcyBwcmljZXMgYSB2YWxpZGF0b3IgaXMgd2lsbGluZyB0byBhY2NlcHQgZm9yIHByb2Nlc3NpbmcgYQojIHRyYW5zYWN0aW9uLiBBIHRyYW5zYWN0aW9uJ3MgZmVlcyBtdXN0IG1lZXQgdGhlIG1pbmltdW0gb2YgYW55IGRlbm9taW5hdGlvbgojIHNwZWNpZmllZCBpbiB0aGlzIGNvbmZpZyAoZS5nLiAxMGFwaG90b24pLgoKbWluaW11bS1nYXMtcHJpY2VzID0gJnF1b3Q7JnF1b3Q7Cg=="}}),t._v(" "),a("h3",{attrs:{id:"genesis-procedure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#genesis-procedure"}},[t._v("#")]),t._v(" Genesis Procedure")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBDcmVhdGUgYSBrZXkgdG8gaG9sZCB5b3VyIGFjY291bnQKZXRoZXJtaW50ZCBrZXlzIGFkZCAkS0VZCgojIEFkZCB0aGF0IGtleSBpbnRvIHRoZSBnZW5lc2lzLmFwcF9zdGF0ZS5hY2NvdW50cyBhcnJheSBpbiB0aGUgZ2VuZXNpcyBmaWxlCiMgTk9URTogdGhpcyBjb21tYW5kIGxldHMgeW91IHNldCB0aGUgbnVtYmVyIG9mIGNvaW5zLiBNYWtlIHN1cmUgdGhpcyBhY2NvdW50IGhhcyBzb21lIGNvaW5zCiMgd2l0aCB0aGUgZ2VuZXNpcy5hcHBfc3RhdGUuc3Rha2luZy5wYXJhbXMuYm9uZF9kZW5vbSBkZW5vbSwgdGhlIGRlZmF1bHQgaXMgc3Rha2luZwpldGhlcm1pbnRkIGFkZC1nZW5lc2lzLWFjY291bnQgJChldGhlcm1pbnRkIGtleXMgc2hvdyB2YWxpZGF0b3IgLWEpIDEwMDAwMDAwMDBzdGFrZSwxMDAwMDAwMDAwMGFwaG90b24KCiMgR2VuZXJhdGUgdGhlIHRyYW5zYWN0aW9uIHRoYXQgY3JlYXRlcyB5b3VyIHZhbGlkYXRvcgpldGhlcm1pbnRkIGdlbnR4IC0tbmFtZSAkS0VZCgojIEFkZCB0aGUgZ2VuZXJhdGVkIGJvbmRpbmcgdHJhbnNhY3Rpb24gdG8gdGhlIGdlbmVzaXMgZmlsZQpldGhlcm1pbnRkIGNvbGxlY3QtZ2VudHhzCgojIEZpbmFsbHksIGNoZWNrIHRoZSBjb3JyZWN0bmVzcyBvZiB0aGUgZ2VuZXNpcy5qc29uIGZpbGUKZXRoZXJtaW50ZCB2YWxpZGF0ZS1nZW5lc2lzCg=="}}),t._v(" "),a("h3",{attrs:{id:"run-testnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-testnet"}},[t._v("#")]),t._v(" Run Testnet")]),t._v(" "),a("p",[t._v("Now its safe to start the daemon:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZXRoZXJtaW50ZCBzdGFydAo="}}),t._v(" "),a("p",[t._v("You can then stop the node using Ctrl+C.")]),t._v(" "),a("h2",{attrs:{id:"multi-node-local-automated-testnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multi-node-local-automated-testnet"}},[t._v("#")]),t._v(" Multi-node, Local, Automated Testnet")]),t._v(" "),a("h3",{attrs:{id:"build-testnet-start-testnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-testnet-start-testnet"}},[t._v("#")]),t._v(" Build Testnet & Start Testnet")]),t._v(" "),a("p",[t._v("To build start a 4 node testnet run:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bWFrZSBsb2NhbG5ldC1zdGFydAo="}}),t._v(" "),a("p",[t._v("This command creates a 4-node network using the "),a("code",[t._v("planqdnode")]),t._v(" Docker image.\nThe ports for each node are found in this table:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Node ID")]),t._v(" "),a("th",[t._v("P2P Port")]),t._v(" "),a("th",[t._v("Tendermint RPC Port")]),t._v(" "),a("th",[t._v("REST/ Ethereum JSON-RPC Port")]),t._v(" "),a("th",[t._v("WebSocket Port")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("planqnode0")])]),t._v(" "),a("td",[a("code",[t._v("26656")])]),t._v(" "),a("td",[a("code",[t._v("26657")])]),t._v(" "),a("td",[a("code",[t._v("8545")])]),t._v(" "),a("td",[a("code",[t._v("8546")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("planqnode1")])]),t._v(" "),a("td",[a("code",[t._v("26659")])]),t._v(" "),a("td",[a("code",[t._v("26660")])]),t._v(" "),a("td",[a("code",[t._v("8547")])]),t._v(" "),a("td",[a("code",[t._v("8548")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("planqnode2")])]),t._v(" "),a("td",[a("code",[t._v("26661")])]),t._v(" "),a("td",[a("code",[t._v("26662")])]),t._v(" "),a("td",[a("code",[t._v("8549")])]),t._v(" "),a("td",[a("code",[t._v("8550")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("planqnode3")])]),t._v(" "),a("td",[a("code",[t._v("26663")])]),t._v(" "),a("td",[a("code",[t._v("26664")])]),t._v(" "),a("td",[a("code",[t._v("8551")])]),t._v(" "),a("td",[a("code",[t._v("8552")])])])])]),t._v(" "),a("p",[t._v("To update the binary, just rebuild it and restart the nodes")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bWFrZSBsb2NhbG5ldC1zdGFydAo="}}),t._v(" "),a("p",[t._v("The command above  command will run containers in the background using Docker compose. You will see the network being created:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Li4uCkNyZWF0aW5nIG5ldHdvcmsgJnF1b3Q7ZXRoZXJtaW50X2xvY2FsbmV0JnF1b3Q7IHdpdGggZHJpdmVyICZxdW90O2JyaWRnZSZxdW90OwpDcmVhdGluZyBldGhlcm1pbnRkbm9kZTAgLi4uIGRvbmUKQ3JlYXRpbmcgZXRoZXJtaW50ZG5vZGUyIC4uLiBkb25lCkNyZWF0aW5nIGV0aGVybWludGRub2RlMSAuLi4gZG9uZQpDcmVhdGluZyBldGhlcm1pbnRkbm9kZTMgLi4uIGRvbmUK"}}),t._v(" "),a("h3",{attrs:{id:"stop-testnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stop-testnet"}},[t._v("#")]),t._v(" Stop Testnet")]),t._v(" "),a("p",[t._v("Once you are done, execute:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bWFrZSBsb2NhbG5ldC1zdG9wCg=="}}),t._v(" "),a("h3",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("make localnet-start")]),t._v(" creates files for a 4-node testnet in "),a("code",[t._v("./build")]),t._v(" by\ncalling the "),a("code",[t._v("planqd testnet")]),t._v(" command. This outputs a handful of files in the\n"),a("code",[t._v("./build")]),t._v(" directory:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"dHJlZSAtTCAzIGJ1aWxkLwoKYnVpbGQvCuKUnOKUgOKUgCBldGhlcm1pbnRkCuKUnOKUgOKUgCBldGhlcm1pbnRkCuKUnOKUgOKUgCBnZW50eHMK4pSCwqDCoCDilJzilIDilIAgbm9kZTAuanNvbgrilILCoMKgIOKUnOKUgOKUgCBub2RlMS5qc29uCuKUgsKgwqAg4pSc4pSA4pSAIG5vZGUyLmpzb24K4pSCwqDCoCDilJTilIDilIAgbm9kZTMuanNvbgrilJzilIDilIAgbm9kZTAK4pSCwqDCoCDilJzilIDilIAgZXRoZXJtaW50ZArilILCoMKgIOKUgsKgwqAg4pSc4pSA4pSAIGtleV9zZWVkLmpzb24K4pSCwqDCoCDilILCoMKgIOKUlOKUgOKUgCBrZXlyaW5nLXRlc3QtY29zbW9zCuKUgsKgwqAg4pSU4pSA4pSAIGV0aGVybWludGQK4pSCwqDCoCAgICAg4pSc4pSA4pSAIGNvbmZpZwrilILCoMKgICAgICDilJzilIDilIAgZGF0YQrilILCoMKgICAgICDilJTilIDilIAgZXRoZXJtaW50ZC5sb2cK4pSc4pSA4pSAIG5vZGUxCuKUgsKgwqAg4pSc4pSA4pSAIGV0aGVybWludGQK4pSCwqDCoCDilILCoMKgIOKUnOKUgOKUgCBrZXlfc2VlZC5qc29uCuKUgsKgwqAg4pSCwqDCoCDilJTilIDilIAga2V5cmluZy10ZXN0LWNvc21vcwrilILCoMKgIOKUlOKUgOKUgCBldGhlcm1pbnRkCuKUgsKgwqAgICAgIOKUnOKUgOKUgCBjb25maWcK4pSCwqDCoCAgICAg4pSc4pSA4pSAIGRhdGEK4pSCwqDCoCAgICAg4pSU4pSA4pSAIGV0aGVybWludGQubG9nCuKUnOKUgOKUgCBub2RlMgrilILCoMKgIOKUnOKUgOKUgCBldGhlcm1pbnRkCuKUgsKgwqAg4pSCwqDCoCDilJzilIDilIAga2V5X3NlZWQuanNvbgrilILCoMKgIOKUgsKgwqAg4pSU4pSA4pSAIGtleXJpbmctdGVzdC1jb3Ntb3MK4pSCwqDCoCDilJTilIDilIAgZXRoZXJtaW50ZArilILCoMKgICAgICDilJzilIDilIAgY29uZmlnCuKUgsKgwqAgICAgIOKUnOKUgOKUgCBkYXRhCuKUgsKgwqAgICAgIOKUlOKUgOKUgCBldGhlcm1pbnRkLmxvZwrilJTilIDilIAgbm9kZTMKICAgIOKUnOKUgOKUgCBldGhlcm1pbnRkCiAgICDilILCoMKgIOKUnOKUgOKUgCBrZXlfc2VlZC5qc29uCiAgICDilILCoMKgIOKUlOKUgOKUgCBrZXlyaW5nLXRlc3QtY29zbW9zCiAgICDilJTilIDilIAgZXRoZXJtaW50ZAogICAgICAgIOKUnOKUgOKUgCBjb25maWcKICAgICAgICDilJzilIDilIAgZGF0YQogICAgICAgIOKUlOKUgOKUgCBldGhlcm1pbnRkLmxvZwo="}}),t._v(" "),a("p",[t._v("Each "),a("code",[t._v("./build/nodeN")]),t._v(" directory is mounted to the "),a("code",[t._v("/planqd")]),t._v(" directory in each container.")]),t._v(" "),a("h3",{attrs:{id:"logging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logging"}},[t._v("#")]),t._v(" Logging")]),t._v(" "),a("p",[t._v("In order to see the logs of a particular node you can use the following command:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBub2RlIDA6IGRhZW1vbiBsb2dzCmRvY2tlciBleGVjIGV0aGVybWludGRub2RlMCB0YWlsIGV0aGVybWludGQubG9nCgojIG5vZGUgMDogUkVTVCAmYW1wOyBSUEMgbG9ncwpkb2NrZXIgZXhlYyBldGhlcm1pbnRkbm9kZTAgdGFpbCBldGhlcm1pbnRkLmxvZwo="}}),t._v(" "),a("p",[t._v("The logs for the daemon will look like:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"SVsyMDIwLTA3LTI5fDE3OjMzOjUyLjQ1Ml0gc3RhcnRpbmcgQUJDSSB3aXRoIFRlbmRlcm1pbnQgICAgICAgICAgICAgICAgbW9kdWxlPW1haW4KRVsyMDIwLTA3LTI5fDE3OjMzOjUzLjM5NF0gQ2FuJ3QgYWRkIHBlZXIncyBhZGRyZXNzIHRvIGFkZHJib29rICAgICAgICAgbW9kdWxlPXAycCBlcnI9JnF1b3Q7Q2Fubm90IGFkZCBub24tcm91dGFibGUgYWRkcmVzcyAyNzJhMjQ3YjgzNzY1M2NmMDY4ZDM5ZWZkNGM0MDdmZmJkOWEwZTZmQDE5Mi4xNjguMTAuNToyNjY1NiZxdW90OwpFWzIwMjAtMDctMjl8MTc6MzM6NTMuMzk0XSBDYW4ndCBhZGQgcGVlcidzIGFkZHJlc3MgdG8gYWRkcmJvb2sgICAgICAgICBtb2R1bGU9cDJwIGVycj0mcXVvdDtDYW5ub3QgYWRkIG5vbi1yb3V0YWJsZSBhZGRyZXNzIDNlMDVkMzYzN2I3ZWJmNGZjMDk0OGJiZWYwMWI1NGQ2NzBhYTgxMGFAMTkyLjE2OC4xMC40OjI2NjU2JnF1b3Q7CkVbMjAyMC0wNy0yOXwxNzozMzo1My4zOTRdIENhbid0IGFkZCBwZWVyJ3MgYWRkcmVzcyB0byBhZGRyYm9vayAgICAgICAgIG1vZHVsZT1wMnAgZXJyPSZxdW90O0Nhbm5vdCBhZGQgbm9uLXJvdXRhYmxlIGFkZHJlc3MgNjg5Zjg2MDZlZGUwYjI2YWQ1Yjc5YWUyNDRjMTRjYzY3YWI0ZWZlN0AxOTIuMTY4LjEwLjM6MjY2NTYmcXVvdDsKSVsyMDIwLTA3LTI5fDE3OjMzOjU4LjgyOF0gRXhlY3V0ZWQgYmxvY2sgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlPXN0YXRlIGhlaWdodD04OCB2YWxpZFR4cz0wIGludmFsaWRUeHM9MApJWzIwMjAtMDctMjl8MTc6MzM6NTguODMwXSBDb21taXR0ZWQgc3RhdGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU9c3RhdGUgaGVpZ2h0PTg4IHR4cz0wIGFwcEhhc2g9OTBDQzVGQTUzQ0Y4QjVFQzQ5NjUzQTE0REEyMDg4OEFEODFDOTJGQ0Y2NDZGMDRENTAxNDUzRkQ4OUZDQzc5MQpJWzIwMjAtMDctMjl8MTc6MzQ6MDQuMDMyXSBFeGVjdXRlZCBibG9jayAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU9c3RhdGUgaGVpZ2h0PTg5IHZhbGlkVHhzPTAgaW52YWxpZFR4cz0wCklbMjAyMC0wNy0yOXwxNzozNDowNC4wMzRdIENvbW1pdHRlZCBzdGF0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZT1zdGF0ZSBoZWlnaHQ9ODkgdHhzPTAgYXBwSGFzaD0wQjU0QzREQjFBMERBQ0IxRUVEQ0Q2NjJCMjIxQzA0OEM4MjZEMzA5RkQyQTJGMzFGRjI2QkFFOEQyRDdEOEQ3CklbMjAyMC0wNy0yOXwxNzozNDowOS4zODFdIEV4ZWN1dGVkIGJsb2NrICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZT1zdGF0ZSBoZWlnaHQ9OTAgdmFsaWRUeHM9MCBpbnZhbGlkVHhzPTAKSVsyMDIwLTA3LTI5fDE3OjM0OjA5LjM4M10gQ29tbWl0dGVkIHN0YXRlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlPXN0YXRlIGhlaWdodD05MCB0eHM9MCBhcHBIYXNoPTc1RkQxRUU4MzRGMDY2OUQ1RTcxN0M4MTJGMzZCMjFENUYyMEIzQ0NCQjQ1RThCOEQ0MTVDQjlDNDUxM0RFNTEKSVsyMDIwLTA3LTI5fDE3OjM0OjE0LjcwMF0gRXhlY3V0ZWQgYmxvY2sgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlPXN0YXRlIGhlaWdodD05MSB2YWxpZFR4cz0wIGludmFsaWRUeHM9MAo="}}),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("You can disregard the "),a("code",[t._v("Can't add peer's address to addrbook")]),t._v(" warning. As long as the blocks are\nbeing produced and the app hashes are the same for each node, there should not be any issues.")])]),t._v(" "),a("p",[t._v("Whereas the logs for the REST & RPC server would look like:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"SVsyMDIwLTA3LTMwfDA5OjM5OjE3LjQ4OF0gU3RhcnRpbmcgYXBwbGljYXRpb24gUkVTVCBzZXJ2aWNlIChjaGFpbi1pZDogJnF1b3Q7NzMwNTY2MTYxNDkzMzE2OTc5MiZxdW90OykuLi4gbW9kdWxlPXJlc3Qtc2VydmVyCklbMjAyMC0wNy0zMHwwOTozOToxNy40ODhdIFN0YXJ0aW5nIFJQQyBIVFRQIHNlcnZlciBvbiAxMjcuMC4wLjE6ODU0NSAgIG1vZHVsZT1yZXN0LXNlcnZlcgouLi4K"}}),t._v(" "),a("h4",{attrs:{id:"follow-logs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#follow-logs"}},[t._v("#")]),t._v(" Follow Logs")]),t._v(" "),a("p",[t._v("You can also watch logs as they are produced via Docker with the "),a("code",[t._v("--follow")]),t._v(" ("),a("code",[t._v("-f")]),t._v(") flag, for\nexample:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZG9ja2VyIGxvZ3MgLWYgZXRoZXJtaW50ZG5vZGUwCg=="}}),t._v(" "),a("h3",{attrs:{id:"interact-with-the-testnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interact-with-the-testnet"}},[t._v("#")]),t._v(" Interact With the Testnet")]),t._v(" "),a("h4",{attrs:{id:"ethereum-json-rpc-websocket-ports"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ethereum-json-rpc-websocket-ports"}},[t._v("#")]),t._v(" Ethereum JSON RPC & Websocket Ports")]),t._v(" "),a("p",[t._v("To interact with the testnet via WebSockets or RPC/API, you will send your request to the corresponding ports:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("EVM JSON-RPC")]),t._v(" "),a("th",[t._v("Eth Websocket")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("8545")])]),t._v(" "),a("td",[a("code",[t._v("8546")])])])])]),t._v(" "),a("p",[t._v("You can send a curl command such as:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3VybCAtWCBQT1NUIC0tZGF0YSAneyZxdW90O2pzb25ycGMmcXVvdDs6JnF1b3Q7Mi4wJnF1b3Q7LCZxdW90O21ldGhvZCZxdW90OzomcXVvdDtldGhfYWNjb3VudHMmcXVvdDssJnF1b3Q7cGFyYW1zJnF1b3Q7OltdLCZxdW90O2lkJnF1b3Q7OjF9JyAtSCAmcXVvdDtDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb24mcXVvdDsgMTkyLjE2Mi4xMC4xOjg1NDUK"}}),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("The IP address will be the public IP of the docker container.")])]),t._v(" "),a("p",[t._v("Additional instructions on how to interact with the WebSocket can be found on the "),a("RouterLink",{attrs:{to:"/quickstart/events.html#ethereum-websocket"}},[t._v("events documentation")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"keys-accounts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keys-accounts"}},[t._v("#")]),t._v(" Keys & Accounts")]),t._v(" "),a("p",[t._v("To interact with "),a("code",[t._v("planqd")]),t._v(" and start querying state or creating txs, you use the\n"),a("code",[t._v("planqd")]),t._v(" directory of any given node as your "),a("code",[t._v("home")]),t._v(", for example:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZXRoZXJtaW50ZCBrZXlzIGxpc3QgLS1ob21lIC4vYnVpbGQvbm9kZTAvZXRoZXJtaW50ZAo="}}),t._v(" "),a("p",[t._v("Now that accounts exists, you may create new accounts and send those accounts\nfunds!")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[a("strong",[t._v("Note")]),t._v(": Each node's seed is located at "),a("code",[t._v("./build/nodeN/planqd/key_seed.json")]),t._v(" and can be restored to the CLI using the "),a("code",[t._v("planqd keys add --restore")]),t._v(" command")])]),t._v(" "),a("h3",{attrs:{id:"special-binaries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#special-binaries"}},[t._v("#")]),t._v(" Special Binaries")]),t._v(" "),a("p",[t._v("If you have multiple binaries with different names, you can specify which one to run with the BINARY environment variable. The path of the binary is relative to the attached volume. For example:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBSdW4gd2l0aCBjdXN0b20gYmluYXJ5CkJJTkFSWT1ldGhlcm1pbnQgbWFrZSBsb2NhbG5ldC1zdGFydAo="}}),t._v(" "),a("h2",{attrs:{id:"multi-node-public-manual-testnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multi-node-public-manual-testnet"}},[t._v("#")]),t._v(" Multi-node, Public, Manual Testnet")]),t._v(" "),a("p",[t._v("If you are looking to connect to a persistent public testnet. You will need to manually configure your node.")]),t._v(" "),a("h3",{attrs:{id:"genesis-and-seeds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#genesis-and-seeds"}},[t._v("#")]),t._v(" Genesis and Seeds")]),t._v(" "),a("h4",{attrs:{id:"copy-the-genesis-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copy-the-genesis-file"}},[t._v("#")]),t._v(" Copy the Genesis File")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("If you want to start a network from scratch, you will need to start the "),a("a",{attrs:{href:"#genesis-procedure"}},[t._v("genesis procedure")]),t._v(" by creating a "),a("code",[t._v("genesis.json")]),t._v(" and submit + collect the genesis transactions from the "),a("RouterLink",{attrs:{to:"/quickstart/validator-setup.html"}},[t._v("validators")]),t._v(".")],1)]),t._v(" "),a("p",[t._v("If you want to connect to an existing testnet, fetch the testnet's "),a("code",[t._v("genesis.json")]),t._v(" file and copy it into the "),a("code",[t._v("planqd")]),t._v("'s config directory (i.e "),a("code",[t._v("$HOME/.planqd/config/genesis.json")]),t._v(").")]),t._v(" "),a("p",[t._v("Then verify the correctness of the genesis configuration file:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZXRoZXJtaW50ZCB2YWxpZGF0ZS1nZW5lc2lzCg=="}}),t._v(" "),a("h4",{attrs:{id:"add-seed-nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-seed-nodes"}},[t._v("#")]),t._v(" Add Seed Nodes")]),t._v(" "),a("p",[t._v("Your node needs to know how to find peers. You'll need to add healthy seed nodes to "),a("code",[t._v("$HOME/.planqd/config/config.toml")]),t._v(". If those seeds aren't working, you can find more seeds and persistent peers on an existing explorer.")]),t._v(" "),a("p",[t._v("For more information on seeds and peers, you can the Tendermint "),a("a",{attrs:{href:"https://docs.tendermint.com/master/spec/p2p/peer.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("P2P documentation"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h4",{attrs:{id:"start-testnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-testnet"}},[t._v("#")]),t._v(" Start testnet")]),t._v(" "),a("p",[t._v("The final step is to "),a("RouterLink",{attrs:{to:"/quickstart/run_node.html#start-node"}},[t._v("start the nodes")]),t._v(". Once enough voting power (+2/3) from the genesis validators is up-and-running, the testnet will start producing blocks.")],1),t._v(" "),a("h2",{attrs:{hide:"",id:"next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[t._v("#")]),t._v(" Next")]),t._v(" "),a("p",{attrs:{hide:""}},[t._v("Learn about how to setup a "),a("RouterLink",{attrs:{to:"/quickstart/validator-setup.html"}},[t._v("validator")]),t._v(" node on Planq")],1)],1)}),[],!1,null,null,null);e.default=s.exports}}]);