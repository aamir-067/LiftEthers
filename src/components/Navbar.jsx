import React, { useContext } from 'react'
import logo from '../pics/logo.png';
import { allContexts } from '../App';
import { initializeWeb3, getAllTips } from '../utils/web3Functions';


const Navbar = () => {
    const { web3Api, setWeb3Api, setAllTips } = useContext(allContexts);
    return (
        <nav className='w-screen h-24 border-3 border-black'>
            <div className='w-full h-full flex justify-between items-center'>
                <div className='h-full w-2/6 gap-6 ml-4 md:ml-10 flex justify-center items-center'>
                    <img src={logo} className='object-cover my-4 w-16 h-16 md:w-20 md:h-20' alt=" bodybuilder portrait illustrator in a position ziz pose" />
                    <h2 className='text-4xl hidden md:block font_cursive'><span className='text-yellow-600'>Lift</span>Ethers</h2>
                </div>


                <div className='h-full flex justify-center items-center mr-4 md:mr-10'>
                    {!web3Api.signer ? <button onClick={async () => {
                        const res = await initializeWeb3();
                        setWeb3Api({ provider: res.provider, contract: res.contract, signer: res.signer });

                        await getAllTips({ web3Api: { provider: res.provider, contract: res.contract, signer: res.signer }, setAllTips });

                    }} className='button_fill font_poppins tracking-wide capitalize'> Connect wallet</button> :
                        <div className='flex justify-center items-center gap-4 bg-center'>
                            <p className='font_poppins'>{`${[...web3Api.signer.address].slice(0, 5).join("")}....${[...web3Api.signer.address].slice(38, 42).join("")}`}</p>
                            <button onClick={() => {
                                setWeb3Api({ provider: null, signer: null, contract: null })
                                setAllTips(null)
                            }} className='button_light tracking-wide font_poppins capitalize'>logout</button>
                        </div>}
                </div>
            </div>
        </nav>

    )
}

export default Navbar