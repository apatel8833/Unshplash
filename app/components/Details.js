"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from "next/navigation";
import Link from 'next/link';
import Image from 'next/image';



//  const cross = document.querySelector(".ri-close-line");
//   const Detail = document.querySelector(".Detail");
//   cross.addEventListener("onclick",function(){
//     Detail.style.display = "none"
//   })


const Details= () => {

  const { id } = useParams();
  const [first, setFirst] = useState([]);
  const [url, setUrl] = useState([]);
  const [usr, setUsr] = useState([]);
  const [usrr, setUsrr] = useState([]);
  const router = useRouter()



  async function fetchData() {
    const { data } = await axios.get(`https://api.unsplash.com/photos/${id}?client_id=Xo1JuuXtZeFM3ke9eGQ1EoI7AV8PwnNUVE_WaVPmyqI`)
    setFirst(data);
    setUrl(data.urls);
    setUsr(data.user);
    setUsrr(data.user.profile_image);
  }
  fetchData();

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
        <i onClick={()=>router.back()} style={{position:"absolute",top:"0",right:"0",fontSize:"3vw",cursor:"pointer"}} className="ri-close-line"></i>
      </div>
    </div>
  )
}

export default Details