import React, { useContext, useRef } from 'react'
import banner from '../pics/banner.png';
import { allContexts } from '../App';
import { donateEth } from '../utils/web3Functions';

const Hero = () => {
    const nam = useRef(null);
    const msg = useRef(null);
    const val = useRef(null);
    const { web3Api, setAllTips } = useContext(allContexts);

    const donate = async (e) => {
        e.preventDefault();
        let name = nam.current.value;
        let value = val.current.value;
        let massage = msg.current.value;
        await donateEth({ web3Api, massage, name, value, setAllTips });
    }
    return (
        <section className='mix-w-screen'>
            <img src={banner} className='w-full' alt="banner in which i mention that give me some ethers" />

            <div className='w-11/12 md:w-7/12 border-6 my-10 border-black mx-auto shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-md'>
                <h2 className='font_cursive lg:text-6xl md:text-5xl text-3xl'>Donate <span className='text-yellow-600'>Eth</span>ers</h2>
                <p className='font-poppins text-lg capitalize my-6 mx-6'>please connect sepolia testnet to fetch data.</p>
                <form action="" onSubmit={async (e) => { await donate(e) }}>
                    <input ref={nam} required className='py-2 px-4 w-10/12 md:w-6/12 focus:outline-black  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]' type="text" placeholder='Name' /> <br />
                    <input ref={msg} required className='my-4 py-2 px-4 w-10/12 md:w-6/12 focus:outline-black shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]' type="text" placeholder='massage' /> <br />
                    <input ref={val} required className='py-2 px-4 w-10/12 md:w-6/12 focus:outline-black shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]' type="text" placeholder='Amount of Eth' /> <br />
                    <button className='button_light my-6 tracking-wider focus:outline-black shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>Donate</button>
                </form>
            </div>
        </section>
    )
}

export default Hero