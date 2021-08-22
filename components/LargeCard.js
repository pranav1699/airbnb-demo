import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
    return (
        <section className="relative py-16 cursor-pointer">
            <div className="relative h-96 min-w-[300px]">
                <Image src={img} layout="fill" className="rounded-2xl" />
            </div>
            <div className="absolute top-32 left-12">
                <h1 className="text-4xl w-60">{title}</h1>
                <p className="mt-3">{description}</p>
                <button className="text-sm bg-gray-900 py-2 px-4 text-white rounded-lg mt-5 ">{buttonText}</button>
            </div>
        </section>
    )
}

export default LargeCard
