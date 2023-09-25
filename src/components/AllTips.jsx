import React, { useContext } from 'react'
import { allContexts } from '../App'

const AllTips = () => {
    const { allTips } = useContext(allContexts);
    function formatUnixTimestamp(unixTimestamp) {
        const date = new Date(unixTimestamp * 1000);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${day}/${month}/${year} ${hours}:${minutes}`;
    }

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
                        {allTips && (allTips.slice(-10).map((tip, index) => {
                            return <tr key={index}>
                                <td className='table_field'>{tip[3]}</td>
                                <td className='table_field'>{tip[4]}</td>
                                <td className='table_field'>{`${[...tip[0]].slice(0, 5).join("")}....${[...tip[0]].slice(38, 42).join("")}`}</td>
                                <td className='table_field'>{formatUnixTimestamp(Number(tip[1]))}</td>
                            </tr>
                        }))}
                    </tbody>
                </table>
            </div>


            {/* ======== mobile only ======= */}
            <div className='w-11/12 md:hidden  md:w-9/12 mx-auto my-0'>

                {allTips && (allTips.slice(-5).map((tip, index) => {
                    return (<div key={index} className='w-full border my-4 border-collapse border-slate-400 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>
                        <p className='flex justify-left'>
                            <p className='table_field_nb font-bold'>Name:</p>
                            <p className='table_field_nb'>{tip[3]}</p>
                        </p>
                        <p className='flex justify-left'>
                            <p className='table_field_nb font-bold'>massage:</p>
                            <p className='table_field_nb'>{tip[4]}</p>
                        </p>
                        <p className='flex justify-left'>
                            <p className='table_field_nb font-bold'>from:</p>
                            <p className='table_field_nb'>{`${[...tip[0]].slice(0, 5).join("")}....${[...tip[0]].slice(38, 42).join("")}`}</p>

                        </p>
                        <p className='flex justify-left'>
                            <p className='table_field_nb font-bold'>date:</p>
                            <p className='table_field_nb'>{formatUnixTimestamp(Number(tip[1]))}</p>
                        </p>
                    </div>)
                }))}

            </div>

        </div >
    )
}

export default AllTips