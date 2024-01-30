const { ethers } = require("hardhat");

async function main() {
  //const provider = ethers.getDefaultProvider();
  const url = "http://127.0.0.1:8545/";
  const provider = new ethers.JsonRpcProvider(url);
  //let [sender] = await ethers.getSigners();
  let sender = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
  //let signer = provider.getSigner(sender);
  //const balance = await provider.getBalance(address);
  const balance = await provider.getBalance(sender);
  console.log(ethers.formatEther(balance));
  let amount = ethers.parseEther("10.0");

  let receiver = "0x71bE63f3384f5fb98995898A86B02Fb2426c5788";
  let tx = {
    to: receiver,
    value: amount,
  };
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
