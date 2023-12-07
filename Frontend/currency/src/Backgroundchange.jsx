import React from "react";
import { useState } from "react";

function Backgroundchange(){
    const [color,setcolor]=useState("Pink");
    return(
        <>
 <div className=" h-screen w-screen  duration-200" style={{backgroundColor:color}}> 
 <div className="  fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-3 m-5 ">
    <div className="bg-white flex flex-wrap w-auto rounded-xl p-3 ">
    <button className="m-3 bg-red-600 outline-none" onClick={() => setcolor("red")}>Red</button>
    <button className="m-3 bg-blue-600 outline-none" onClick={() => setcolor("blue")}>Blue</button>
    <button className="m-3 bg-green-400 outline-none" onClick={() => setcolor("Green")}>Green</button>
    <button className="m-3 bg-orange-600 outline-none" onClick={() => setcolor("orange")}>orange</button>
    <button className="m-3 bg-black outline-none" onClick={() => setcolor("black")}>black</button>
    <button className="m-3 bg-yellow-400 outline-none" onClick={() => setcolor("yellow")}>yellow</button>
    <button className="m-3 bg-teal-100 outline-none" onClick={() => setcolor("Teal")}>Teal</button>
    <button className="m-3 bg-indigo-300 outline-none" onClick={() => setcolor("Indigo")}>Indigo</button>
    </div>
 </div>
 </div>
        </>
    )
}
export default Backgroundchange
