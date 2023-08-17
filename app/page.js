import React from 'react';
import Home from './components/Home';

function page(props) {
  return (
    <div>
      <Home/>
    </div>
  );
}

export default page;


























































// "use client"
// import axios from "axios";
// import Link from "next/link";
// import React, { useContext } from "react";
// import { CentralData } from "./context";
// import { useRouter } from "next/navigation";
// const Home = ()=> {
  

//   const[first,setFirst,search,setSearch] = useContext(CentralData);
//   const router = useRouter(null);


//   const getImages = async ()=>{
//     let {data} = await axios.get(
//       `https://api.unsplash.com/photos?client_id=Xo1JuuXtZeFM3ke9eGQ1EoI7AV8PwnNUVE_WaVPmyqI&page=1`
//     );
//     setFirst(data);
//     router.push("/List");
//   }


//   return (
//     <>
//     <div className="container">
//       <h1 className="m-2">Welcome this is the Home Page of this App...</h1>
//       <br></br>
//       <button className="btn btn-primary" onClick={getImages}>Get Images</button>
//       <br></br>
//       <br></br>

//       <Link className="btn btn-primary" href="/Search">Search Images</Link>
//     </div>
//     </>
//   )
// }
// export default Home;