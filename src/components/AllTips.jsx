import React from 'react'

const AllTips = () => {
    return (
        <div className='mt-40 min-w-screen pb-40'>
            <h2 className='text-2xl font_poppins capitalize mb-4'> Recent Donators</h2>
            {/* mid and large screen */}
            <div class="w-11/12 hidden md:block md:w-9/12 mx-auto my-0">
                <table class="table-auto border-collapse border-slate-400 border w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <thead>
                        <tr >
                            <th className='table_field '>Name</th>
                            <th className='table_field'>massage</th>
                            <th className='table_field'>from</th>
                            <th className='table_field'>date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='table_field'>Aamir khan</td>
                            <td className='table_field'>your DApps are amazing i love it</td>
                            <td className='table_field'>0x0000....00000</td>
                            <td className='table_field'>28/8/2023 12:00 </td>
                        </tr>
                    </tbody>
                </table>
            </div>


            {/* ======== mobile only ======= */}
            <div className='w-11/12 md:hidden  md:w-9/12 mx-auto my-0'>

                <div className='w-full border my-4 border-collapse border-slate-400 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>
                    <p className='flex justify-left'>
                        <p className='table_field_nb font-bold'>Name:</p>
                        <p className='table_field_nb'>Aamir khan</p>
                    </p>
                    <p className='flex justify-left'>
                        <p className='table_field_nb font-bold'>massage:</p>
                        <p className='table_field_nb'>your DApps are amazing i love it</p>
                    </p>
                    <p className='flex justify-left'>
                        <p className='table_field_nb font-bold'>from:</p>
                        <p className='table_field_nb'>0x0000....00000</p>

                    </p>
                    <p className='flex justify-left'>
                        <p className='table_field_nb font-bold'>date:</p>
                        <p className='table_field_nb'>28/8/2023 12:00 </p>
                    </p>

                </div>

            </div>

        </div >
    )
}

export default AllTips