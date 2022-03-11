// import logo from "./logo.svg";
// import "./App.css";
// import React, { useState, useEffect } from "react";

// function App() {
//   let [v,sV]=useState(0);
//  async  function ak()
//   {
//     let response=await fetch("https://newsapi.org/v2/everything?q=tesla&from=2021-10-10&sortBy=publishedAt&apiKey=046d2e14e65b4d88acbaaa64c353139b");
//     let res=await response.json();
//     console.log(res);
//     let p=res.articles.map((n)=>{return <div  id="rowak">  
//     <div class="max-w-sm rounded overflow-hidden shadow-lg">
//       <img class="w-full" src={n.urlToImage} alt="Mountain"/>
//       <div class="px-6 py-4">
//         <div class="font-bold text-xl mb-2">{n.title}</div>
//         <p class="text-gray-700 text-base">
//         {n.content}
//         </p>
//         <button class="font-bold text-xl mb-2 " id="read"> <a href={n.url}>Read More</a> </button>
//       </div>
      
//       <div class="px-6 pt-4 pb-2">
//         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
//         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
//         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
//       </div>
//     </div>
//   </div>
//   });
//     sV(p);
//   }
//   useEffect(ak,[]);
// return (<div>{v} </div>);
// }
  
// export default App