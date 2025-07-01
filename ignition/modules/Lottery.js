const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

// (deployer) - función callback
const LotteryModule = buildModule("LotteryModule", (deployer) => {
  // generamos la instancia del contrato
  // "Lottery" = nombre del contrato
  const lottery = deployer.contract("Lottery");

  return { lottery };
});

module.exports = LotteryModule;