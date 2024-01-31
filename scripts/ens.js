// это для 5 версии
const { ethers } = require("hardhat");

async function main() {
  const Ens = await ethers.getContractFactory("ENS");
  const ens = await Ens.deploy();
  await ens.address;

  console.log("contract address,", ens.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
