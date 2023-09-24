import React from 'react'
import banner from '../pics/banner.png';

const Hero = () => {
    return (
        <section>
            <img src={banner} className='min-w-screen' alt="banner in which i mention that give me some ethers" />

            <div className='w-11/12 md:w-9/12 border-3 border-dashed my-10 border-black'>
                <h2>Donate Ethers</h2>
                <p>please connect sepolia testnet to fetch data</p>
            </div>

        </section>
    )
}

export default Hero