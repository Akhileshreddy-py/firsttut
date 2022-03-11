import React, { useEffect, useState } from "react";
function Akku() {
  let [va, setVa] = useState(0);
  async function ak() {
    let A = "AIzaSyBeVVdpOo4bOMpIjWSU4xfg8ta_kQ9F3gU";
    let c = "UC-ACBipnr7f00_87e0Z8ZZg";
    let u = "https://www.googleapis.com/youtube/v3/search";
    let fu = `${u}?key=${A}&channelId=${c}&part=snippet,id&order=date&maxResults=30`;
    console.log(fu);
    let response = await fetch(fu);
    let res = await response.json();
    console.log(res);
    console.log(res.items[0].id.videoId);
    let v = res.items.map((arr) => {
      let yu = "https://www.youtube.com/embed/" + arr.id.videoId;
      return (
        <>
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            {/* <img class="w-full" src="" alt="Mountain"/> */}
            <iframe
              class="w-full"
              width="560"
              height="315"
              src={yu}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2"> {arr.snippet.title}</div>
              <p class="text-gray-700 text-base">{arr.snippet.description}</p>
              {/* <button class="font-bold text-xl mb-2 " id="read"> <a href="#">Read More</a> </button> */}
            </div>

            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Akhilesh reddy
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #AI
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #physics
              </span>
            </div>
          </div>{" "}
        </>
      );
    });
    setVa(v);
  }
  useEffect(ak, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {va}
    </div>
  );
}
export default Akku;
