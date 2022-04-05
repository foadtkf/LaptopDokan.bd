import React from 'react';
import CustomReview from '../CustomReview/CustomReview';
import './Home.css';

const Home = () => {
    return (
      <div className="mt-10 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
          <div className="p-5 lg:mt-10">
            <h1 className="text-6xl font-bold px-10">Laptop<span className='text-fuchsia-900'>Dokan</span><span className='text-green-700 font-bold'>.bd</span></h1>
            <h1 className="text-3xl pt-5 px-10 font-bold text-indigo-600">
              Buy your dream laptop
            </h1>
            <p className="flex justify-center text-justify px-10 pt-5">
              Hello there, Visit our shop to learn about latest laptops and other accessories. Stay updated and aware about your beloved products.
            </p>
            <button className="mt-5 mx-10 bg-indigo-200 rounded p-3 font-bold">
              Buy Laptop
            </button>
          </div>
          <div>
            <img
              className="mx-10 img-size hover:w-screen"
              src="https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <CustomReview />
        </div>
      </div>
    );
};

export default Home;