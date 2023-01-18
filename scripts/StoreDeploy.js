const { NFTStorage, Blob } = require('nft.storage');
const fs = require('fs');
const { ethers } = require('hardhat');
const APIKEYNFTSTORAGE="[YOUR NFT STORAGE API KEY]";
const client = new NFTStorage({ token: APIKEYNFTSTORAGE });

async function main() {

    fs.readFile('image/BL.png', async (err, data) => {
        if (err) throw err;

        const url = await store(data);

        const [deployer] = await ethers.getSigners();

        // Initialize contract factories
        const NFTfactory = await ethers.getContractFactory('BLNFT', deployer);
        
        // Deploy contract
        this.nft = await NFTfactory.deploy();    
        await this.nft.deployed()

        //Mint ERC721
        await this.nft.connect(deployer).awardItem(deployer.address, url)

        console.log("Stored NFT successfully!\nMetadata URL: ", url);
        console.log("Bill of Lading smart contract deployed at: ", this.nft.address);
    });
}

async function store(data) {
    
    const fileCid = await client.storeBlob(new Blob([data]));
    const fileUrl = "https://ipfs.io/ipfs/" + fileCid;

    // BL details
    const obj = {
        name: "BILL OF LADING",
        description: "Bill of Lading",
        image: fileUrl,
        attributes:[
        {
            trait_type: "SHIPPER",
            value: "XYZ Export company"        
        },
        {
            trait_type: "CONSIGNEE",
            value: "TO ORDER"        
        },
        {
            trait_type: "Port of loading",
            value: "Random port XYZ"        
        },
        {
            trait_type: "Port of discharge",
            value: "Random port AAA"        
        },
        {
            trait_type: "Vessel",
            value: "MSC Random"        
        },
        {
            trait_type: "Description of goods",
            value: "Random goods"        
        },
        {
        trait_type: "Gross weight cargo (MT)",
        display_type: "number", 
        value: 32000
    }     
    ]       
    };

    // Store ERC721 metadata
    const metadata = new Blob([JSON.stringify(obj)], { type: 'application/json' });
    const metadataCid = await client.storeBlob(metadata);
    const metadataUrl = "https://ipfs.io/ipfs/" + metadataCid;
    
    return metadataUrl;
}

main();
