import Image from "next/image";


function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] lg:-mt-32">
            <Image src="https://links.papareact.com/0fm" layout="fill" objectFit="cover" />
            <div className="absolute top-1/2 w-full text-center">
                <p className="font-semibold">Not sure where to go? Perfect.</p>
                <button className="text-transparent bg-clip-text bg-gradient-to-br from-purple-800 to-red-400 bg-gray-100 px-10 py-4 rounded-full shadow-md font-bold my-3 
                    hover:shadow-lg active:scale-90 transition duration-150">I'm Flexible</button>
            </div>

        </div>
    )
}

export default Banner
