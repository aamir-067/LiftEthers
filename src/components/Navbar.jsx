import React from 'react'
import logo from '../pics/logo.png';

const Navbar = () => {
    let web3Api = true;
    return (
        <nav className='w-screen h-24 border-3 border-black'>
            <div className='w-full h-full flex justify-between items-center'>
                <div className='h-full w-2/6 gap-6 ml-4 md:ml-10 flex justify-center items-center'>
                    <img src={logo} className='object-cover my-4 w-16 h-16 md:w-20 md:h-20' alt=" bodybuilder portrait illustrator in a position ziz pose" />
                    <h2 className='text-4xl hidden md:block font_cursive'><span className='text-yellow-600'>Lift</span>Ethers</h2>
                </div>


                <div className='h-full flex justify-center items-center mr-4 md:mr-10'>
                    {!web3Api ? <button className='button_fill font_poppins tracking-wide capitalize'> Connect wallet</button> :
                        <div className='flex justify-center items-center gap-4 bg-center'>
                            <p className='font_poppins'>0x0000....00000</p>
                            <button className='button_light tracking-wide font_poppins capitalize'>logout</button>
                        </div>}
                </div>
            </div>
        </nav>

    )
}

export default Navbar