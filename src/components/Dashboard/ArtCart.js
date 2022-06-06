import { HeartIcon } from '@heroicons/react/solid';
import React from 'react';
import History from './History';
import dinosaur from '../../Image/dinosaur.jpg'
import Crypto from '../../Image/Crypto.jpg'
import wolf from '../../Image/wolf.png'

const ArtCart = () => {

    const arts = [
        {
            id: 1,
            name: "Diamond Dinosaur",
            artist: "by Johnson Moss",
            bid: "0.42 ETH",
            img:dinosaur
        },
        {
            id: 2,
            name: "Crypto Art Concept",
            artist: "by Ricky",
            bid: "0.15 ETH",
            img:Crypto
        },
        {
            id: 3,
            name: "Colorful Wolf",
            artist: "by Johnson Moss",
            bid: "0.25 ETH",
            img:wolf
        }
    ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-1 gap-4 w-10/12 ml-24 lg:mx-auto my-5'>
            {
                arts.map(art => <div
                    key={art.id}
                    className="card card-compact w-64 bg-secondary shadow-xl">
                    <div className='relative'>
                        <HeartIcon className='w-5 h-5 text-base-100 absolute right-3 top-2' />
                        <figure className="p-1">
                            <img src={art.img} alt="Shoes" className="h-36 w-full rounded-xl" />
                        </figure>
                    </div>

                    <div className="card-body">
                        <h2 className="card-title font-bold">{art.name}</h2>
                        <p>{art.artist}</p>
                        <div className="card-actions justify-between">
                            <div>
                                <h1>Current Bid</h1>
                                <h1 className='text-xl text-yellow-500'>{art.bid}</h1>
                            </div>
                            <button className="p-2 bg-primary rounded-lg">View Artwork</button>
                        </div>
                    </div>
                </div>)
            }

            <History/>
        </div>
    );
};

export default ArtCart;