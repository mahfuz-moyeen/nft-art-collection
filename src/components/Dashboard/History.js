import React from 'react';
import bighead5 from '../../Image/user/bighead-5.svg';
import bighead6 from '../../Image/user/bighead-6.svg';
const History = () => {
    const histories = [
        {
            id: 1,
            img:bighead5,
            name: "Abid620",
            text: 'Has been sold 1.32 ETH',
            time: "18 Mar. 2022, 07:30 pm",
        },
        {
            id: 2,
            img:bighead6,
            name: "BBrett lee",
            text: 'Has been sold 4.02 ETH',
            time: "17 Mar. 2022, 08:30 pm",
        }
    ]
    return (
        <div className="card ml-1 w-10/12 mx-auto  lg:max-w-md bg-secondary shadow-xl">
            <div className="card-body">
                <div className='flex flex-row justify-between'>
                    <h2 className="card-title">History</h2>
                    <h3>Monthly</h3>
                </div>

                {
                    histories.map(history => <div key={history.id}>
                        <div className='flex justify-between'>
                            <div className='flex'>
                                <div className="avatar">
                                    <div className="w-16 rounded-full">
                                        <img src={history.img} alt='user' className='bg-white' />
                                    </div>
                                </div>
                                <div>
                                    <h1>{history.name}</h1>
                                    <p className='text-sm'>{history.text}</p>
                                    <p className='text-sm'>{history.time}</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>)
                }


            </div>
        </div>
    );
};

export default History;