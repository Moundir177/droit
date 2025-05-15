import Hero from '../components/Hero';
import Stats from '../components/Stats';
import NewsSection from '../components/NewsSection';
import Objectives from '../components/Objectives';
import Mission from '../components/Mission';
import Programs from '../components/Programs';
import Gallery from '../components/Gallery';
import Newsletter from '../components/Newsletter';
import { getMissionData } from '../lib/tina';

export default async function Home() {
  // Fetch mission data from TinaCMS
  let missionData = null;
  try {
    missionData = await getMissionData();
  } catch (error) {
    console.error('Error fetching mission data:', error);
  }

  return (
    <>
      <Hero />
      <Stats />
      <NewsSection />
      <Objectives />
      <Mission data={missionData} />
      <Programs />
      <Gallery />
      <Newsletter />
    </>
  );
}
