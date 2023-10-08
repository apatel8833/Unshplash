"use client"
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Blue(props) {

    const [images, setImages] = useState([]);
    const [load, setLoad] = useState(1);

    useEffect(() => {
        try {

            async function fetchData() {
                const { data } = await axios.get(`https://api.unsplash.com/search/photos?client_id=Xo1JuuXtZeFM3ke9eGQ1EoI7AV8PwnNUVE_WaVPmyqI&query=Blue&page=${load}`)
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
                <Image
                    src="https://source.unsplash.com/600x900/?blue"
                    className='img'
                    height={100}
                    width={100}
                    alt='image'
                />
                <div className='content'>
                    <h1>Blue</h1>
                    <p>In a colorful world, sometimes monochrome is the most striking of all. Colors convey so much and choosing a single one can pack a powerful punch. We chose blue—maybe you can guess why? We hope this collection inspires your most colorful ideas!
                        Learn more here.</p>
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
            <button onClick={() => setLoad(load + 1)} className='w-75 btn btn-primary '>Click here for more images..</button>
        </div >

    );
}

export default Blue;