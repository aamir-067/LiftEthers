import React from 'react'

const AllTips = () => {
    return (
        <div className='mt-40 min-w-screen pb-40'>
            <div class="w-11/12 md:w-9/12 mx-auto my-0">
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
                        <tr>
                            <td className='table_field'>Aamir khan</td>
                            <td className='table_field'>your DApps are amazing i love it</td>
                            <td className='table_field'>0x0000....00000</td>
                            <td className='table_field'>28/8/2023 12:00 </td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default AllTips