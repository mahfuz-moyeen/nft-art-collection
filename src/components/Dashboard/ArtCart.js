import { HeartIcon } from '@heroicons/react/solid';
import React from 'react';
import History from './History';

const ArtCart = () => {

    const arts = [
        {
            id: 1,
            name: "Diamond Dinosaur",
            artist: "by Johnson Moss",
            bid: "0.42 ETH",
        },
        {
            id: 2,
            name: "Crypto Art Concept",
            artist: "by Ricky",
            bid: "0.15 ETH",
        },
        {
            id: 3,
            name: "Colorful Wolf",
            artist: "by Johnson Moss",
            bid: "0.25 ETH",
        }
    ]

    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 w-10/12 mx-auto my-5'>
            {
                arts.map(art => <div
                    key={art.id}
                    class="card card-compact w-64 bg-secondary shadow-xl">
                    <div className='relative'>
                        <HeartIcon className='w-5 h-5 text-base-100 absolute right-3 top-2' />
                        <figure class="p-1">
                            <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl" />
                        </figure>
                    </div>
                    <div class="card-body">
                        <h2 class="card-title font-bold">{art.name}</h2>
                        <p>{art.artist}</p>
                        <div class="card-actions justify-between">
                            <div>
                                <h1>Current Bid</h1>
                                <h1 className='text-xl text-yellow-500'>{art.bid}</h1>
                            </div>
                            <button class="p-2 bg-primary rounded-lg">View Artwork</button>
                        </div>
                    </div>
                </div>)
            }

            <History/>
        </div>
    );
};

export default ArtCart;