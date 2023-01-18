# Bill of Lading tokenization with ERC721

This is a simple example of tokenization of bill of lading with ERC721 token standard.

First we will store scanned bill of lading (image/BL.png) with NFT storage on IPFS, then we will upload the bill of lading metadata on IPFS. 

The NFT metadata is generated directly in the deployment script (scripts/StoreDeploy.js) and looks like this:

![BLdetails](https://user-images.githubusercontent.com/121932525/213190232-f0a3134f-28e1-4197-bebd-f79dfbe1af3f.png)

1) replace the API key of NFT storage with your API key in line 4 of the deployment script:

![code](https://user-images.githubusercontent.com/121932525/213191410-69fe87ba-f67d-41c3-b7ca-a6e2a444533a.png)

2) Launch the deployment script on your preferred network (goerli testnet used in this case) with the command "npx hardhat run test/StoreDeploy.js --network testnet"
