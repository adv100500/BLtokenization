// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

contract BLNFT is ERC721URIStorage, AccessControl {
  using ECDSA for bytes32;    
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
  bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");  


    constructor() ERC721("BL", "oBL") {
      _setupRole(MINTER_ROLE, msg.sender);
      _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    function grantRoleMint(address payable _account) public onlyRole(DEFAULT_ADMIN_ROLE) {
    grantRole(MINTER_ROLE, _account);
    }

    function revokeRoleMint(address payable _account) public onlyRole(DEFAULT_ADMIN_ROLE) {
  
    revokeRole(MINTER_ROLE, _account);
    }


    function awardItem(address player, string memory tokenURI) onlyRole(MINTER_ROLE)
        public
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }  
}