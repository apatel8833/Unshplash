"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from "next/navigation";
import Link from 'next/link';

const page = () => {

  const { id } = useParams();
  const [first, setFirst] = useState([]);
  const [url, setUrl] = useState([]);
  const [usr, setUsr] = useState([]);

  const [usrr, setUsrr] = useState([]);





  async function fetchData() {
    const { data } = await axios.get(`https://api.unsplash.com/photos/${id}?client_id=Xo1JuuXtZeFM3ke9eGQ1EoI7AV8PwnNUVE_WaVPmyqI`)
    setFirst(data);
    setUrl(data.urls);
    setUsr(data.user);
    setUsrr(data.user.profile_image);



    // console.log(first.id);

  }
  fetchData();
  // console.log(first.id);
  return (

    <div>
      <div className='Detail'>
        <img src={url.small}></img>
        <div className='item'>
          <img src={usrr.small}></img>
          <span>@{usr.username}</span>
          <Link href="#" >
            <i className="ri-arrow-down-line"></i>
          </Link>

        </div>
        <div className='fav'>
        <i class="ri-add-fill"></i>
        <i class="ri-heart-line"></i>
        </div>
      </div>
    </div>
  )
}

export default page