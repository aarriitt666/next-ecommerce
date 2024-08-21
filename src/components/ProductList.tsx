import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
    return (
        <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className='relative w-full h-80'>
                    <Image src="https://images.pexels.com/photos/21550488/pexels-photo-21550488/free-photo-of-blue-scooter-parked-by-a-wall.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500" />
                    <Image src="https://images.pexels.com/photos/26347702/pexels-photo-26347702/free-photo-of-a-woman-leaning-against-a-wall-with-a-clock-tower-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" fill sizes="25vw" className="absolute object-cover rounded-md" />
                </div>
                <div className='flex justify-between'>
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className='text-sm text-gray-500'> My description</div>
                <button className="rounded-2xl ring-1 ring-haodepink text-haodepink py-2 px-4 text-xs hover:bg-haodepink hover:text-white w-max">Add to Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className='relative w-full h-80'>
                    <Image src="https://images.pexels.com/photos/21550492/pexels-photo-21550492/free-photo-of-blue-scooter-parked-by-a-wall.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500" />
                    <Image src="https://images.pexels.com/photos/26347702/pexels-photo-26347702/free-photo-of-a-woman-leaning-against-a-wall-with-a-clock-tower-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" fill sizes="25vw" className="absolute object-cover rounded-md" />
                </div>
                <div className='flex justify-between'>
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className='text-sm text-gray-500'> My description</div>
                <button className="rounded-2xl ring-1 ring-haodepink text-haodepink py-2 px-4 text-xs hover:bg-haodepink hover:text-white w-max">Add to Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className='relative w-full h-80'>
                    <Image src="https://images.pexels.com/photos/19120462/pexels-photo-19120462/free-photo-of-blonde-woman-on-a-balcony-in-sunlight.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500" />
                    <Image src="https://images.pexels.com/photos/26347702/pexels-photo-26347702/free-photo-of-a-woman-leaning-against-a-wall-with-a-clock-tower-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" fill sizes="25vw" className="absolute object-cover rounded-md" />
                </div>
                <div className='flex justify-between'>
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className='text-sm text-gray-500'> My description</div>
                <button className="rounded-2xl ring-1 ring-haodepink text-haodepink py-2 px-4 text-xs hover:bg-haodepink hover:text-white w-max">Add to Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className='relative w-full h-80'>
                    <Image src="https://images.pexels.com/photos/27330605/pexels-photo-27330605/free-photo-of-a-gold-car-is-parked-on-the-track.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500" />
                    <Image src="https://images.pexels.com/photos/26347702/pexels-photo-26347702/free-photo-of-a-woman-leaning-against-a-wall-with-a-clock-tower-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" fill sizes="25vw" className="absolute object-cover rounded-md" />
                </div>
                <div className='flex justify-between'>
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className='text-sm text-gray-500'> My description</div>
                <button className="rounded-2xl ring-1 ring-haodepink text-haodepink py-2 px-4 text-xs hover:bg-haodepink hover:text-white w-max">Add to Cart</button>
            </Link>
        </div>
    );
};

export default ProductList;