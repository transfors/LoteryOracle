const { ethers } = require("hardhat");

async function main() {
    _addr = "0x2b04829E2Bd9242Ee2ef85C568Ccea5e2FA100C8";
    Lottery = await ethers.getContractFactory("Lottery");
    lottery = Lottery.attach(_addr);
    owner = await lottery.owner();
    console.log("El owner es: " + owner);
}

main();