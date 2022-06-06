import React from 'react';
import { NavLink } from 'react-router-dom';
import bighead from '../../Image/user/bighead-10.svg';
const Menubar = () => {

    const menuItem = <>
        <li className='bg-secondary rounded-lg'><NavLink to='collectibles'>Collectibles</NavLink></li>
        <li className='bg-secondary rounded-lg'><NavLink to='art'>Art</NavLink></li>
        <li className='bg-secondary rounded-lg'><NavLink to='Sports'>Sports</NavLink></li>
        <li className='bg-secondary rounded-lg'><NavLink to='gaming'>Gaming</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 w-11/12 mx-auto sticky top-0 z-40">
            <div className="navbar-start lg:justify-center">
                <div className="form-control hidden lg:block">
                    <input type="text" placeholder="Search" className="input input-bordered bg-secondary" />
                </div>

                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 gap-3 bg-secondary">
                    <div className="form-control lg:hidden">
                        <input type="text" placeholder="Search" className="input input-bordered bg-secondary" />
                    </div>
                        {menuItem}
                    </ul>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 gap-4">
                    {menuItem}
                </ul>
            </div>


            <div className="navbar-end gap-3">

                {/* ETH  */}
                <div className='border-2 border-violet-900 rounded-md p-2'>
                    <h1>1.42ETH</h1>
                </div>

                {/* message  */}
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost btn-circle">

                        <div className='border-2 border-violet-900 rounded-full p-1'>
                            <div className="indicator">
                                <svg className='w-6 h-6 fill-gray-400' width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 24.75C17.555 24.75 17.12 24.882 16.75 25.1292C16.38 25.3764 16.0916 25.7278 15.9213 26.139C15.751 26.5501 15.7064 27.0025 15.7932 27.439C15.8801 27.8754 16.0943 28.2763 16.409 28.591C16.7237 28.9057 17.1246 29.12 17.5611 29.2068C17.9975 29.2936 18.4499 29.249 18.861 29.0787C19.2722 28.9084 19.6236 28.62 19.8708 28.25C20.118 27.88 20.25 27.445 20.25 27C20.25 26.4033 20.013 25.831 19.591 25.409C19.169 24.9871 18.5967 24.75 18 24.75V24.75ZM27 24.75C26.555 24.75 26.12 24.882 25.75 25.1292C25.38 25.3764 25.0916 25.7278 24.9213 26.139C24.751 26.5501 24.7064 27.0025 24.7932 27.439C24.8801 27.8754 25.0943 28.2763 25.409 28.591C25.7237 28.9057 26.1246 29.12 26.5611 29.2068C26.9975 29.2936 27.4499 29.249 27.861 29.0787C28.2722 28.9084 28.6236 28.62 28.8708 28.25C29.118 27.88 29.25 27.445 29.25 27C29.25 26.4033 29.013 25.831 28.591 25.409C28.169 24.9871 27.5967 24.75 27 24.75ZM36 24.75C35.555 24.75 35.12 24.882 34.75 25.1292C34.38 25.3764 34.0916 25.7278 33.9213 26.139C33.751 26.5501 33.7064 27.0025 33.7932 27.439C33.8801 27.8754 34.0943 28.2763 34.409 28.591C34.7237 28.9057 35.1246 29.12 35.5611 29.2068C35.9975 29.2936 36.4499 29.249 36.861 29.0787C37.2722 28.9084 37.6236 28.62 37.8708 28.25C38.118 27.88 38.25 27.445 38.25 27C38.25 26.4033 38.013 25.831 37.591 25.409C37.169 24.9871 36.5967 24.75 36 24.75ZM27 4.5C24.0453 4.5 21.1195 5.08198 18.3896 6.21271C15.6598 7.34344 13.1794 9.00078 11.0901 11.0901C6.87053 15.3097 4.5 21.0326 4.5 27C4.48033 32.1956 6.27929 37.2342 9.585 41.2425L5.085 45.7425C4.7728 46.0589 4.56131 46.4607 4.47722 46.8972C4.39312 47.3336 4.4402 47.7853 4.6125 48.195C4.79938 48.5998 5.10234 48.94 5.48291 49.1724C5.86348 49.4047 6.30451 49.5188 6.75 49.5H27C32.9674 49.5 38.6903 47.1295 42.9099 42.9099C47.1295 38.6903 49.5 32.9674 49.5 27C49.5 21.0326 47.1295 15.3097 42.9099 11.0901C38.6903 6.87053 32.9674 4.5 27 4.5V4.5ZM27 45H12.1725L14.265 42.9075C14.6841 42.4859 14.9193 41.9157 14.9193 41.3212C14.9193 40.7268 14.6841 40.1566 14.265 39.735C11.3188 36.7921 9.48415 32.9187 9.07356 28.7748C8.66297 24.6309 9.70187 20.4728 12.0133 17.0089C14.3247 13.5451 17.7655 10.9898 21.7497 9.77844C25.7338 8.56707 30.0147 8.77456 33.863 10.3656C37.7113 11.9566 40.8889 14.8326 42.8545 18.5038C44.8201 22.1749 45.452 26.414 44.6425 30.4988C43.8331 34.5836 41.6324 38.2614 38.4155 40.9055C35.1985 43.5497 31.1642 44.9967 27 45V45Z" />
                                </svg>
                                <span className="indicator-item">4</span>
                            </div>
                        </div>

                    </label>
                    <div tabIndex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body bg-secondary">
                            <span className="text-info">message 1</span>
                            <span className="text-info">message 2</span>
                            <span className="text-info">message 3</span>
                            <span className="text-info">message 4</span>

                        </div>
                    </div>
                </div>
                {/* Notification */}
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost btn-circle">

                        <div className='border-2 border-violet-900 rounded-full p-1'>
                            <div className="indicator">
                                <svg className='w-6 h-6 fill-gray-400' width="59" height="74" viewBox="0 0 59 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M44.8869 5.64711C45.4312 3.61581 44.2257 1.52789 42.1944 0.983603C40.1631 0.439318 38.0752 1.64478 37.5309 3.67608L36.7918 6.43457L34.7416 5.88523C26.5578 3.69239 18.0795 8.24044 15.3801 16.2714L11.0849 29.0496C9.44735 33.9216 6.50439 38.2508 2.57656 41.5658C-0.972389 44.5611 -0.0537773 50.2575 4.25681 51.9853L16.3853 56.8469L15.3262 60.7993C13.8294 66.3854 17.1445 72.1272 22.7305 73.624C28.3166 75.1207 34.0584 71.8057 35.5552 66.2196L36.6142 62.2672L49.5485 64.1212C54.1455 64.7801 57.7892 60.3062 56.2134 55.9378C54.4693 51.1029 54.0852 45.8822 55.103 40.8442L57.7724 27.6304C59.4502 19.3257 54.3817 11.1478 46.1979 8.95494L44.1478 8.4056L44.8869 5.64711ZM33.2634 11.4022C27.9928 9.98997 22.5325 12.919 20.794 18.0912L16.4989 30.8694C14.5283 36.732 10.9869 41.9415 6.26042 45.9307C6.00391 46.1471 6.0703 46.5589 6.38187 46.6838L19.6869 52.0169C24.9856 54.1408 30.5191 55.6235 36.1698 56.4335L50.3589 58.4674C50.6912 58.515 50.9546 58.1916 50.8407 57.8759C48.7419 52.0579 48.2798 45.7757 49.5045 39.7132L52.1739 26.4994C53.2544 21.1509 49.9902 15.8842 44.7197 14.4719L33.2634 11.4022ZM24.2088 68.107C21.6697 67.4266 20.1628 64.8167 20.8432 62.2776L21.5823 59.5191L30.7773 61.9829L30.0382 64.7414C29.3578 67.2805 26.7479 68.7873 24.2088 68.107Z" />
                                </svg>
                                <span className="indicator-item">4</span>
                            </div>

                        </div>
                    </label>
                    <div tabIndex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body bg-secondary">
                            <span className="text-info">Notification 1</span>
                            <span className="text-info">Notification 2</span>
                            <span className="text-info">Notification 3</span>
                            <span className="text-info">Notification 4</span>

                        </div>
                    </div>
                </div>

                {/* profile  */}
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={bighead} />
                        </div>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-secondary">
                        <li>Profile</li>
                        <li>Settings</li>
                        <li>Logout</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Menubar;