"use client"
import axios from 'axios';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CentralData } from '../ContextApis/context';



function Nav(props) {

  const [search,setSearch,input,setInput,load, setLoad] = useContext(CentralData);
  const router = useRouter(null);
  const handleSubmitt = async(event)=>{
    event.preventDefault();

        try {
            const {data}   = await axios.get(`
            https://api.unsplash.com/search/photos?client_id=Xo1JuuXtZeFM3ke9eGQ1EoI7AV8PwnNUVE_WaVPmyqI&query=${input}&page=${load}
            `)
            setSearch(data.results);
            console.log("Nav search",search);
            router.push("/Search");
            
        } catch (error) {
            console.log(error);
        }

}
  return (
    <div>
      <div className='navbar'>
        <div className='navtop'>
          <Link href="/"><img style={{ height: "2.5vw", width: '2.5vw' }} src='https://w7.pngwing.com/pngs/981/688/png-transparent-unsplash-font-awesome-brands-vol-icon-thumbnail.png' alt='not found'></img></Link>
          <form onSubmit={handleSubmitt}>
            <input
              type='search'
              placeholder='Search high-resolutio images'
              value={input}
              onChange={(e)=>setInput(e.target.value)}
            ></input>
            {/* <button type='submit'>Search</button> */}
          </form>
        </div>
        <div className='navbot'>
          <div className='slide'>
          <ul>
            <li><Link href="/Blue">Blue</Link></li>
            <li><Link href="/Onthelake">On the Lake</Link></li>
            <li><Link href="/wallpaper">wallpaper</Link></li>
            <li><Link href="/3drander">3D Rander</Link></li>
            <li><Link href="/Nature">Nature</Link></li>
            <li><Link href="/Architecture">Architecture</Link></li>
            <li><Link href="/film">Film</Link></li>
            <li><Link href="/streetphoto">Street Photography</Link></li>
            <li><Link href="/experimental">Experimental</Link></li>
            <li><Link href="/animal">Animals</Link></li>
            <li><Link href="/fasion&beuty">Fashion & Beuty</Link></li>
            <li><Link href="/food&drink">Food & Drink</Link></li>
            <li><Link href="/travel">Travels</Link></li>
            <li><Link href="/people">Peoples</Link></li>
            <li><Link href="/art">Art</Link></li>
            <li><Link href="/bussiness&work">Bussiness</Link></li>
            <li><Link href="/athletics">Athletics</Link></li>
            <li><Link href="/currentEvents">Current Events</Link></li>
            <li><Link href="/health&wellness">Health  & Wellness</Link></li>
          </ul>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Nav;