import Image from "next/image";

function SmallCard({ img, location, distance }) {
    return (
        <div className="flex items-center space-x-4 m-2 mt-5 rounded-lg cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-150 ease-out">
            <div className="relative h-16 w-16 flex ">
                <Image
                    src={img}
                    layout="fill"
                    className="rounded-lg"
                />
            </div>
            <div>
                <h2 className="font-semibold">{location}</h2>
                <h3 className="font-semibold text-gray-600">{distance}</h3>
            </div>
        </div>
    )
}

export default SmallCard
