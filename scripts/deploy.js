const hre = require("hardhat");

async function main() {
  const FCCTaskContract = await hre.ethers.getContractFactory("FCCTask");
  const fccTask = await FCCTaskContract.deploy();
  await fccTask.deployed();
  console.log("Contract deployed to address:", fccTask.address);
  const selector = await fccTask.getSelector();
  console.log(selector.toString());
  // 0x54fc2cb2;
  // console.log("-----------------------------------------------");

  // const VulnerableContract = await hre.ethers.getContractFactory(
  //   "VulnerableContract"
  // );
  // const vulnerableContract = await VulnerableContract.deploy();
  // await vulnerableContract.deployed();
  // console.log("Contract deployed to address:", vulnerableContract.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
