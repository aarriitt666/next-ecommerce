"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
    {
        id: 1,
        url: "https://images.pexels.com/photos/27126850/pexels-photo-27126850/free-photo-of-a-glass-of-red-liquid-with-ice-cubes.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
    },
    {
        id: 2,
        url: "https://images.pexels.com/photos/27596665/pexels-photo-27596665/free-photo-of-a-woman-in-a-white-dress-and-sunglasses-is-standing-next-to-a-bike.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
    },
    {
        id: 3,
        url: "https://images.pexels.com/photos/27349262/pexels-photo-27349262/free-photo-of-a-counter-with-a-variety-of-drinks-and-a-menu.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
    },
    {
        id: 4,
        url: "https://images.pexels.com/photos/8850666/pexels-photo-8850666.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
    }
]

const ProductImages = () => {
    const [index, setIndex] = useState(0);
    return (
        <div className=''>
            <div className='h-[500px] relative'>
                <Image src={images[index].url} alt="" fill sizes="50vw" className="object-cover rounded-md" />
            </div>
            <div className='flex justify-between gap-4 mt-8'>
                {images.map((img, i) => (
                    <div className='w-1/4 h-32 relative gap-4 mt-8 cursor-pointer' key={img.id} onClick={() => setIndex(i)}>
                        <Image src={img.url} alt="" fill sizes="30vw" className="object-cover rounded-md" />
                    </div>
                )
                )}
            </div>
        </div>
    );
};

export default ProductImages;