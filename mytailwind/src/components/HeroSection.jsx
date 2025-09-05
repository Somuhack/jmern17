import { useState } from "react";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";
export const HeroSection = () => {
    const images = [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1756672146911-d9925093e726?w=600&auto=format&fit=crop&q=60",
            title: "Image One",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, unde.",
        },
        {
            id: 2,
            src: "https://plus.unsplash.com/premium_photo-1703389454028-f53d91316e58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
            title: "Image Two",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minu, unde.",
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1755519371418-2e0737bbfc9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D",
            title: "Image Three",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, unde.",
        },
        {
            id: 4,
            src: "https://images.unsplash.com/photo-1756310331722-31901b1bafc1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5OHx8fGVufDB8fHx8fA%3D%3D",
            title: "Image Four",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, unde.",
        },
        {
            id: 5,
            src: "https://images.unsplash.com/photo-1746310712275-c80c0f2dab27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDl8fHxlbnwwfHx8fHw%3D",
            title: "Image Five",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, unde.",
        },
        {
            id: 6,
            src: "https://plus.unsplash.com/premium_photo-1756125732995-fbf54843cad6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTF8fHxlbnwwfHx8fHw%3D",
            title: "Image Six",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, unde.",
        },
        {
            id: 7,
            src: "https://images.unsplash.com/photo-1755398104324-c22a39900c96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
            title: "Image Five",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, unde.",
        },
        {
            id: 8,
            src: "https://images.unsplash.com/photo-1754709310216-70237df10af4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
            title: "Image Six",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, unde.",
        },
        {
            id: 9,
            src: "https://images.unsplash.com/photo-1749936336802-29c1d8fd40a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
            title: "Image Six",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, unde.",
        },
    ];
    const [index,setIndex]=useState(0)
    const IMG_LENGTH=images.length
    const handlePrevious=()=>{
        if (index - 3 >= 0) {
      setIndex(index - 3);
    }
    }
    const handleNext=()=>{
        if(index+3<IMG_LENGTH){
            setIndex(index+3)
        }
    }
    return (
        <>
            <div className="bg-blue-950 max-w-full min-w-[350px] h-[350px] p-10 flex justify-center flex-col items-center">
                <BsArrowLeftCircleFill className="text-blue-200 text-xl absolute left-45 top-60 cursor-pointer" onClick={handlePrevious}/>
                <div className=" flex g-2 justify-around items-center mb-5 relative w-[800px]">
                    {/* <div className="w-[230px] h-[270px] bg-blue-900 flex flex-col justify-baseline items-center text-center p-1.5 rounded-[10px] text-white ">
                        <img className="w-[215px] rounded-[5px] " src={images[0].src} alt="" />
                        <p className="text-xl font-semibold">Image One</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, unde.</p>
                    </div> */}
                        {images.slice(index,index+3).map((data)=>(
                            <div key={data.id} className="w-[230px] h-[270px] bg-blue-900 flex flex-col justify-baseline items-center text-center p-1.5 rounded-[10px] text-white ">
                                <img src={data.src} className="w-[215px] rounded-[5px] "/>
                                <p className="text-xl font-semibold">{data.title}</p>
                                <p className=" ">{data.desc}</p>
                            </div>
                        ))}
                </div>
                <BsArrowRightCircleFill className="text-blue-200 text-xl absolute right-45 top-60 cursor-pointer" onClick={handleNext} />
            </div>
            <div className="px-10 bg-blue-950">
                <hr className="text-gray-600" />
            </div>
        </>
    )
}