"use client"
import axios from 'axios';
import React, { useState ,useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Film(props) {

    const [images, setImages] = useState([]);
    const [load, setLoad] = useState(1);

    useEffect(() => {
        try {
            
            async function fetchData() {
                const { data } = await axios.get(`https://api.unsplash.com/search/photos?client_id=Xo1JuuXtZeFM3ke9eGQ1EoI7AV8PwnNUVE_WaVPmyqI&query=film&page=${load}`)
                console.log(data);
                setImages((prev) => [...prev, ...data.results]);
    
            }
            fetchData();
        } catch (error) {
           console.log(error);         
        }
    }, [load]);
    


    return (
        <div>
              <div className='poster'>
              {/* <Image
                    src="https://source.unsplash.com/600x900/?Film"
                    className='img'
                    height={100}
                    width={100}
                    alt='image'
                /> */}
                   <img
                  src="https://source.unsplash.com/600x900/?film"
                  className='img'
                  alt='image'
                ></img>
                <div className='content'>
                    <h1>Film</h1>
                    <p>Let’s honor the beginnings of photography by celebrating analog from the past and present day. From vintage polaroids to mesmerizing 35mm shots — this category examines the best of what film photography has to offer...</p>
                    <p>Powered by creators everywhere.</p>
                    
                    <small className='pt-2'>Trending : flower, wallpapers, backgrounds, happy, love</small>

                </div>

            </div>
            <div className='grid'>
                {images.map((elm, i) => {
                    return (
                        <>
                           <Link className='contentt' href={`/details/${elm.id}`}>
                                {/* <div  className='contentt' key={i}> */}
                                <div className='layer'>
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
                                    ></img>
                                    <span>@{elm.user.username}</span>
                                    <Link href={elm.urls.small_s3}>
                                        <i className="ri-arrow-down-line"></i>
                                    </Link>

                                </div>

                                {/* <Image
                                    src={elm.urls.small}
                                    height={0}
                                    width={1000}
                                    className='img'
                                    alt='image'

                                /> */}
                                   <img
                                  src={elm.urls.small}
                                  className='img'
                                  alt='image'
                                >
                                </img>
                                {/* </div> */}
                            </Link>
                        </>
            )

                })}
        </div>
                <button onClick={()=>setLoad(load+1)} className= 'w-75 btn btn-primary '>Click here for more images..</button>
        </div >
        
    );
}

export default Film