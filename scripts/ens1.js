//для версии 6
//import hre, { ethers } from "hardhat";
const { ethers } = require("hardhat");

async function main() {
  /* 1-st way: const provider = ethers.provider;
  const signer = await provider.getSigner(); */
  // 2-nd way
  const url = "http://127.0.0.1:8545/";
  const provider = new ethers.JsonRpcProvider(url);
  const signer = await provider.getSigner();
  console.log(signer);
  const addr = await signer.getAddress();
  console.log(`address: ${addr}`);
  const receiver = "0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f";
  const amountInWei = ethers.parseEther("2.0");
  const txData = {
    to: receiver,
    value: amountInWei,
  };

  const tx = await signer.sendTransaction(txData);
  await tx.wait();
  console.log(tx);

  const balance = await provider.getBalance(addr);
  console.log(`signer balance: ${ethers.formatEther(balance)} ETH`);
  console.log(
    `Receiver balance: ${ethers.formatEther(
      await provider.getBalance(receiver)
    )} ETH`
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
