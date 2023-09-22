"use client"
import React, { useContext, useState } from 'react'
import { CentralData } from '../ContextApis/context'
import Link from 'next/link'

const Search = () => {
    const [search, setSearch, input, setInput, load, setLoad] = useContext(CentralData);
    console.log("search page", search);
    console.log("input", input);
    
    return (
        <div>
            <div className='poster'>
                <img src={`https://source.unsplash.com/600x900/?${input}`}></img>
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
                    }):<h1>Images Not Found...</h1>
                    
                }
            </div>
            <button onClick={() => setLoad(load + 1)} className='w-75 btn btn-primary '>Click here for more images..</button>
        </div >

    );
}

export default Search