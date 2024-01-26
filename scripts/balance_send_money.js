const { ethers } = require("hardhat");

async function main() {
  const provider = ethers.getDefaultProvider();

  //let [sender] = await ethers.getSigners();
  let sender = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
  //let signer = provider.getSigner(sender);

  const balance = await provider.getBalance(sender);
  console.log(balance);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
