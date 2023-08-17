"use client"
import axios from 'axios';
import React, { useState ,useEffect} from 'react';
import Link from 'next/link';

function page(props) {

    const [images, setImages] = useState([]);
    const [load, setLoad] = useState(1);

    useEffect(() => {
        try {
            
            async function fetchData() {
                const { data } = await axios.get(`https://api.unsplash.com/search/photos?client_id=Xo1JuuXtZeFM3ke9eGQ1EoI7AV8PwnNUVE_WaVPmyqI&query=Lake&page=${load}`)
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
                <img src='https://source.unsplash.com/600x900/?lake'></img>
                <div className='content'>
                    <h1>On the Lake</h1>
                    <p>Step into the serene world of lakeside living with our latest topic: On the lake. Show us your eclectic family cottages, lazy summer days by the water, crackling fireplaces during chilly evenings, and breathtaking sunrises and sunsets. Celebrate the simplicity and serenity of life on the lake, where one can escape the urban bustle and immerse in nature's wonders.</p>
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
                <button onClick={()=>setLoad(load+1)} className= 'w-75 btn btn-primary '>Click here for more images..</button>
        </div >
        
    );
}

export default page;