import React from 'react';
import nftRobot from '../../Image/nft_robort.jpg'
import { StarIcon } from '@heroicons/react/solid'
import Time from './Time';
import TopCreators from './TopCreators';
import ArtCart from './ArtCart';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {

    return (
        <div className="">
            <Sidebar />

            <div className="">
                <div className='w-10/12 mx-auto flex flex-col lg:flex-row justify-between gap-3'>

                    {/* center conten  */}
                    <div className='w-10/12 lg:w-11/12 ml-16 lg:mx-auto'>
                        <div className="card bg-secondary lg:card-side shadow-xl">
                            <figure><img className='h-full p-2 rounded' src={nftRobot} alt="Album" /></figure>
                            <div className="card-body">
                                <div>
                                    <h2 className="text-2xl lg:text-4xl py-2 font-semibold text-white">Sculpture of Human <br />
                                        Face In a Pop Art style</h2>
                                    <p className='p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cupiditate soluta labore aliquid vel, assumenda illum fuga in non aut fugit aliquam itaque, </p>
                                </div>

                                {/* post user id rating  */}
                                <div className='flex gap-2 py-5 items-center'>
                                    <div className="avatar">
                                        <div className="w-16 rounded">
                                            <img src="https://api.lorem.space/image/face?hash=92048" />
                                        </div>
                                    </div>
                                    <div>
                                        <h2>Abid Hasan Jibon</h2>
                                        <div className='flex gap-2'>
                                            <StarIcon className="h-5 w-5 text-blue-500" />
                                            <StarIcon className="h-5 w-5 text-blue-500" />
                                            <StarIcon className="h-5 w-5 text-blue-500" />
                                            <StarIcon className="h-5 w-5 text-blue-500" />
                                            <StarIcon className="h-5 w-5 text-blue-500" />
                                        </div>
                                    </div>
                                </div>

                                {/* time */}
                                <Time />

                                {/* button  */}
                                <div className='flex flex-col lg:flex-row justify-evenly gap-2 pt-5'>
                                    <button className='btn btn-primary'>View Artwork</button>
                                    <button className='btn btn-outline btn-primary '>Place A Bid</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* top creators */}
                    <TopCreators />


                </div>

                {/* other art cart  */}
                <ArtCart />

            </div>

        </div>
    );
};

export default Dashboard;