import React from 'react';
import bigHead1 from '../../Image/user/bighead.svg'
import bigHead2 from '../../Image/user/bighead-1.svg'
import bigHead3 from '../../Image/user/bighead-2.svg'
import bigHead4 from '../../Image/user/bighead-3.svg'
import bigHead5 from '../../Image/user/bighead-4.svg'
const TopCreators = () => {
    const creator = [
        {
            id: 1,
            name: "Riadul Raq",
            user: '@rakib',
            img: bigHead1,
            follow: false
        },
        {
            id: 2,
            name: "Jonshon",
            user: '@Jonshon',
            img: bigHead2,
            follow: false
        },
        {
            id: 3,
            name: "Afridi",
            user: '@afridi',
            img: bigHead3,
            follow: true
        },
        {
            id: 4,
            name: "Ricky Ponting",
            user: '@ponting42',
            img: bigHead4,
            follow: false
        },
        {
            id: 1,
            name: "Sakib Al",
            user: '@skib75',
            img: bigHead5,
            follow: true
        },
    ]
    return (
        <div className="card w-10/12 ml-16 lg:w-4/12 lg:mx-auto bg-secondary shadow-xl">
            <div className="card-body">
                <div className='flex justify-between'>
                    <h2 className="card-title">Top Creators</h2>
                    <h3>Weekly</h3>
                </div>

                {
                    creator.map(person => <div key={person.id}>
                        <div className='flex justify-between'>
                            <div className='flex gap-1'>
                                <div className="avatar">
                                    <div className="w-16 rounded-full">
                                        <img src={person.img} alt='user' className='bg-white' />
                                    </div>
                                </div>
                                <div>
                                    <h1>{person.name}</h1>
                                    <p>{person.user}</p>
                                </div>
                            </div>
                            {
                                person.follow ? <button className='btn btn-sm btn-outline btn-primary'>Following</button>
                                :
                                <button className='btn btn-sm btn-primary'>Follow</button>
                            }
                        </div>
                        <hr/>
                    </div>)
                }


            </div>
        </div>
    );
};

export default TopCreators;