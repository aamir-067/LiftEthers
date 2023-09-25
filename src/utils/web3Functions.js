import { ethers } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';
import artifacts from '../contracts/LiftEthers.json';


// ========= ethers.js   =============================

const ContractAddress = "0xa198945c76F8Ed1a34E6A3a13B5B012D784E0255";


const initializeWeb3 = async () => {
    try {
        const provider = await detectEthereumProvider();
        if (provider) {
            const web3 = new ethers.BrowserProvider(provider);

            const signer = await web3.getSigner();

            let cont = new ethers.Contract(ContractAddress, artifacts.abi, signer);
            provider.on('chainChanged', async () => {
                await initializeWeb3();
            })
            provider.on('accountsChanged', async () => {
                await initializeWeb3();
            })

            return { provider: web3, contract: cont, signer: signer };

        }
        console.error('Please install metamask');
    } catch (e) {
        console.error(e);
    }
}


const getAllTips = async ({ web3Api, setAllTips }) => {

    if (!web3Api.signer) {
        console.log('wallet is not connected');
        return false;
    }
    try {
        const res = await web3Api.contract.allTips()

        // console.log('response of all donations', res);
        setAllTips(res);
        // return res;
    } catch (e) {
        console.error(e);
        return false;
    }
}

const donateEth = async ({ web3Api, name, massage, value, setAllTips }) => {
    if (massage && value > 0) {
        try {
            if (!web3Api.signer) {
                console.error('connect wallet first ..');
                return false;
            }
            // console.log(ethers.parseEther(value))
            const res = await web3Api.contract.giveTip(name, massage, { value: ethers.parseEther(value) });
            await res.wait();
            // console.log('testing response =>', res);
            await getAllTips({ web3Api, setAllTips });
            // return res;

        } catch (e) {
            console.error(e);
            return false;
        }
    }
}



export { initializeWeb3, donateEth, getAllTips };