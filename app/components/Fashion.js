"use client"
import axios from 'axios';
import React, { useState ,useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Fashion(props) {

    const [images, setImages] = useState([]);
    const [load, setLoad] = useState(1);

    useEffect(() => {
        try {
            
            async function fetchData() {
                const { data } = await axios.get(`https://api.unsplash.com/search/photos?client_id=Xo1JuuXtZeFM3ke9eGQ1EoI7AV8PwnNUVE_WaVPmyqI&query=fasion&beuty&page=${load}`)
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
                    src="https://source.unsplash.com/600x900/?Fashion&beauty"
                    className='img'
                    height={100}
                    width={100}
                    alt='image'
                /> */}
                   <img
                  src="https://source.unsplash.com/600x900/?fashion&beauty"
                  className='img'
                  alt='image'
                ></img>
                <div className='content'>
                    <h1>Fashion & Beuty</h1>
                    <p>Fashion and Beauty are a powerful form of self-expression. This category documents style through inspiring shots of street fashion, skincare products, avant-garde editorial photographs, and more...</p>
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

export default Fashion;