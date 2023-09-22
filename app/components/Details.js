"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from "next/navigation";
import Link from 'next/link';
import Image from 'next/image';

const Details= () => {

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

  // const cross = document.querySelector(".ri-heart-line");
  // const Detail = document.querySelector(".Detail");

  return (

    <div>
      <div className='Detail'>
      <Image
            src={url.full}
            height={100}
            width={100}
            className="img"
            alt='image'

          />
        <div className='item'>
        <Image
            src={usrr.small}
            height={100}
            width={100}
            className="img"
            alt='image'

          />
          <span>@{usr.username}</span>
          <Link href="#" >
            <i className="ri-arrow-down-line"></i>
          </Link>

        </div>
        <div className='fav'>
        <i className="ri-add-fill"></i>
        <i className="ri-heart-line"></i>
        </div>
      </div>
    </div>
  )
}

export default Details