import React from 'react'
import banner from '../pics/banner.png';

const Hero = () => {
    return (
        <section className='mix-w-screen'>
            <img src={banner} className='w-full' alt="banner in which i mention that give me some ethers" />

            <div className='w-11/12 md:w-9/12 border-6 my-10 border-black'>
                <h2>Donate Ethers</h2>
                <p>please connect sepolia testnet to fetch data</p>
                <form action="">
                    <input type="text" placeholder='Name' /> <br />
                    <input type="text" placeholder='Massage' /><br />
                    <input type="text" placeholder='Amount of ether you want to donate' /> <br />
                    <button className='button_light'>Donate</button>
                </form>
            </div>

        </section>
    )
}

export default Hero