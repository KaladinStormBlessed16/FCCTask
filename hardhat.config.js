require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.7",
  networks: {
    hardhat: {},
    arbitrum_rinkeby: {
      chainId: 421611,
      url: process.env.ALCHEMY_ARBITRUM_RINKEBY_URL,
      accounts: [process.env.PRIVATE_KEY_TEST],
    },
    arbitrum: {
      chainId: 42161,
      url: process.env.ALCHEMY_ARBITRUM_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
