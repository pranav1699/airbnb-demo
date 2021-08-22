import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import LargeCard from '../components/LargeCard';
import Mediumcard from '../components/Mediumcard';
import SmallCard from '../components/SmallCard';

export default function Home({ exploreData, cardData }) {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-6xl mx-auto  px-6 sm:px-16">
        <section className="pt-6">
          <h1 className="text-4xl font-semibold pb-5">Explore Nearby</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {exploreData?.map((item) => (
              <SmallCard
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>
        <section className="pt-6">
          <h1 className="text-4xl font-semibold pb-5">Live Anywhere</h1>
          <div className="flex items-center overflow-scroll space-x-3 scrollbar-hide p-3 -ml-3 ">
            {cardData?.map((item) => (
              <Mediumcard
                img={item.img}
                title={item.title}
              />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
    </div>
  )
}
export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").
    then(
      (res) => res.json()
    );
  const cardData = await fetch("https://links.papareact.com/zp1").
    then(
      (res) => res.json()
    );
  return {
    props: {
      exploreData: exploreData,
      cardData: cardData,
    }
  }
}
