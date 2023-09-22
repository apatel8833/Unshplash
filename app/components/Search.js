"use client"
import React, { useContext, useState } from 'react'
// import { CentralData } from '../ContextApis/context'
import { CentralData } from './Context'
import Link from 'next/link'
import Image from 'next/image'

const Search = () => {
    const [search, setSearch, input, setInput, load, setLoad] = useContext(CentralData);
    console.log("search page", search);
    console.log("input", input);
    
    return (
        <div>
            <div className='poster'>
            <Image
                    src={`https://source.unsplash.com/600x900/?${input}`}
                    className='img'
                    height={100}
                    width={100}
                    alt='image'
                />
                <img ></img>
                <div className='content'>
                    <h1 style={{ textTransform: "capitalize" }} >{input}</h1>
                    <p>Exotic wildlife, pet kittens — and everything in between. Uncover the beauty of the animal kingdom through your screen...</p>
                    <p>Powered by creators everywhere.</p>

                    <small className='pt-2'>Trending : flower, wallpapers, backgrounds, happy, love</small>

                </div>

            </div>
            <div className='grid'>
                {
                   (search.length>0) ?search.map((elm, i) => {
                        return (
                            <>
                                <Link className='contentt' href={`/details/${elm.id}`}>
                                    {/* <div  className='contentt' key={i}> */}
                                    <div className='layer'>
                                    </div>
                                    <div className='item'>
                                    <Image
                                        src={elm.user.profile_image.small}
                                        height={100}
                                        width={100}
                                        className="img"
                                        alt='image'

                                    />
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
                    }):<h1>Images Not Found...</h1>
                    
                }
            </div>
            <button onClick={() => setLoad(load + 1)} className='w-75 btn btn-primary '>Click here for more images..</button>
        </div >

    );
}

export default Search