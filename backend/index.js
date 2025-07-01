const { ethers } = require("ethers");

// Conexión al nodo local
//const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
const provider = new ethers.JsonRpcProvider("https://sepolia.infura.io/v3/deafb2026f8e495e808236ceae9c3ef3");

// Dirección del contrato
// const contractAddress = "0x0f55F7Dc7a6050DFA730fbFEAe7a918Dc6736402";
// address contrato deployado
// ahora en sepolia
const contractAddress = "0x2b04829E2Bd9242Ee2ef85C568Ccea5e2FA100C8";


// ABI del contrato (asegúrate de incluir el ABI correcto)
const abi = [
    // Agrega aquí la definición del evento VRFAsk
    "event VRF()"
];

async function main() {
    const contract = new ethers.Contract(contractAddress, abi, provider);

    // Escucha el evento VRFAsk
    contract.on("VRF", () => {
        console.log("recibi un evento");
    });

    console.log("estoy escuchando evento");
}

// Ejecutar el programa
main().catch((error) => {
    console.error(error);
    process.exit(1);
});