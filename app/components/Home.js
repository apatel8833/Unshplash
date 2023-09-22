"use client"
import axios from 'axios';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { CentralData } from '../ContextApis/context';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

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

  useEffect(()=>{
        window.addEventListener("scroll",(e)=>{
            if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
                console.log(e);

                setLoad((prev) => prev+1);
            }
        });
        return()=>{
            window.removeEventListener('scroll',()=>{
                console.log('removed');
            })
        }
    },[]);


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
                <img src='https://source.unsplash.com/600x900/?Dark'></img>
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
                                    <img src={elm.user.profile_image.small}></img>
                                    <span>@{elm.user.username}</span>
                                    <Link href={elm.urls.small_s3}>
                                        <i className="ri-arrow-down-line"></i>
                                    </Link>

                                </div>

                                <img src={elm.urls.small} className="card-img" alt="..." />
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