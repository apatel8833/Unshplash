"use client"
import axios from 'axios';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
// import { CentralData } from '../ContextApis/context';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { CentralData } from './Context';
import Image from 'next/image';

function Home(props) {
    const [images, setImages] = useState([]);
    const [search,setSearch,input,setInput,load, setLoad] = useContext(CentralData);
    const router = useRouter(null)
    

    const handleSubmit = async(event)=>{
        event.preventDefault();

            try {
                const {data}   = await axios.get(`
                https://api.unsplash.com/search/photos?client_id=Xo1JuuXtZeFM3ke9eGQ1EoI7AV8PwnNUVE_WaVPmyqI&query=${input}&page=${load}
                `)
                // setSearch(data.results);
                setSearch((prev) => [...prev, ...data.results]);
                console.log("search",search);
                
                router.push("/Search");
            } catch (error) {
                console.log(error);
            }

    }

 
    useEffect(() => {
        try {
            async function fetchData() {
                const { data } = await axios.get(`https://api.unsplash.com/photos?client_id=Xo1JuuXtZeFM3ke9eGQ1EoI7AV8PwnNUVE_WaVPmyqI&page=${load}`)

                console.log(data);
                setImages((prev) => [...prev, ...data]);

            }
            fetchData();

        } catch (error) {
            console.log(error);
        }
    }, [load]);



    return (
        <div>
            {/* <ToastContainer/> */}
            <div className='poster'>
            <Image
                    src="https://source.unsplash.com/600x900/?Dark"
                    className='img'
                    height={100}
                    width={100}
                    alt='image'
                />
                <div className='content'>
                    <h1>Unsplash</h1>
                    <p>The internet’s source for visuals.</p>
                    <p>Powered by creators everywhere.</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type='search'
                            placeholder='Search high-resolutio images'
                            value={input}
                            onChange={(e)=>setInput(e.target.value)}
                        ></input>
                    </form>
                    <small className='pt-2'>Trending : flower, wallpapers, backgrounds, happy, love</small>

                </div>

            </div>


            <div className='grid'>
                {images.map((elm, i) => {

                    return (
                        <>
                            <Link  className='contentt' href={`/details/${elm.id}`}>
                                {/* <div  className='contentt' key={i}> */}
                                <div height="auto" width="auto" className='layer'>
                                </div>
                                <div className='item'>
                                {/* <Image
                                        src={elm.user.profile_image.small}
                                        height={100}
                                        width={100}
                                        className="img"
                                        alt='image'

                                    /> */}
                                    <img
                                     src={elm.user.profile_image.small}
                                     className="img"
                                     alt='image'
                                    >
                                    </img>
                                    <span>@{elm.user.username}</span>
                                    <Link href={elm.urls.small_s3}>
                                        <i className="ri-arrow-down-line"></i>
                                    </Link>

                                </div>

                               
                                <Image
                                    src={elm.urls.small}
                                    height={0}
                                    width={1000}
                                    className='img'
                                    alt='image'

                                />
                                {/* </div> */}
                            </Link>

                        </>
                    )

                })}
            </div>
            <button onClick={() => setLoad(load + 1)} className='w-75 btn btn-primary '> Click here for more images..</button>
        </div >
    );
}
export default Home;