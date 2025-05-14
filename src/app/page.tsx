import Hero from '../components/Hero';
import Stats from '../components/Stats';
import NewsSection from '../components/NewsSection';
import Objectives from '../components/Objectives';
import Mission from '../components/Mission';
import Programs from '../components/Programs';
import Gallery from '../components/Gallery';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <NewsSection />
      <Objectives />
      <Mission />
      <Programs />
      <Gallery />
      <Newsletter />
    </>
  );
}
