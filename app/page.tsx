import Hero from '@/components/Hero';
import Navbar from '../components/Navbar';
import Values from '@/components/Values';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      {/* Add other components here */}
      <Hero />
      <Values />
      <Footer />
    </div>
  );
};

export default Home;
