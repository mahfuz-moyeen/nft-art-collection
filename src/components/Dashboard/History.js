import React from 'react';

const History = () => {
    const histories = [
        {
            id: 1,
            name: "Abid620",
            text: 'Has been sold 1.32 ETH',
            time: "18 Mar. 2022, 07:30 pm",
        },
        {
            id: 2,
            name: "BBrett lee",
            text: 'Has been sold 4.02 ETH',
            time: "17 Mar. 2022, 08:30 pm",
        }
    ]
    return (
        <div class="card max-w-sm mx-auto lg:max-w-md bg-secondary shadow-xl">
            <div class="card-body">
                <div className='flex flex-row justify-between'>
                    <h2 class="card-title">History</h2>
                    <h3>Monthly</h3>
                </div>

                {
                    histories.map(history => <div key={history.id}>
                        <div className='flex justify-between'>
                            <div className='flex gap-1'>
                                <div class="avatar">
                                    <div class="w-16 rounded-full">
                                        <img src="https://api.lorem.space/image/face?hash=92310" />
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