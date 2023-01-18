# Bill of Lading tokenization with ERC721

This is a simple example of tokenization of bill of lading with ERC721 token standard.

Please insert your API key of NFT storage:

https://github.com/adv100500/BLtokenization/blob/5d3013c4271b1e698f6dd01a9f6ee65e7fa4a8b0/scripts/StoreDeploy.js#L4

Next, the script will store scanned bill of lading with NFT storage on IPFS:

https://github.com/adv100500/BLtokenization/blob/5d3013c4271b1e698f6dd01a9f6ee65e7fa4a8b0/scripts/StoreDeploy.js#L9

the script will upload the bill of lading metadata on IPFS. The metadata is generated directly in the deployment script and looks like this:

https://github.com/adv100500/BLtokenization/blob/5d3013c4271b1e698f6dd01a9f6ee65e7fa4a8b0/scripts/StoreDeploy.js#L38-L69

finally, the script will deploy the BL smart contract:

https://github.com/adv100500/BLtokenization/blob/5d3013c4271b1e698f6dd01a9f6ee65e7fa4a8b0/contracts/SimpleNFT.sol#L10

and mint the tokenized BL to the deployer address with the function awardItem:

https://github.com/adv100500/BLtokenization/blob/5d3013c4271b1e698f6dd01a9f6ee65e7fa4a8b0/contracts/SimpleNFT.sol#L32

As you might have seen, the deployer of the contract is the only authorized account for minting:

https://github.com/adv100500/BLtokenization/blob/5d3013c4271b1e698f6dd01a9f6ee65e7fa4a8b0/contracts/SimpleNFT.sol#L17-L20

therefore, two additional functions were added to grant / revoke minter roles:

https://github.com/adv100500/BLtokenization/blob/118b7f092d00ff67602a91a68a8c416ce658cb1a/contracts/SimpleNFT.sol#L21-L27

Once the script is deployed, we connect the wallet of the minter account on openSea to see the result:

![BLosea](https://user-images.githubusercontent.com/121932525/213199823-1ed15ae0-5c04-4a73-bf54-c1661317fd48.png)


