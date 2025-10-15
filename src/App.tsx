import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyChoose } from './components/WhyChoose';
import { Capabilities } from './components/Capabilities';
import { Integrations } from './components/Integrations';
import { IdealFor } from './components/IdealFor';
import { Glance } from './components/Glance';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhyChoose />
      <Capabilities />
      <Integrations />
      <IdealFor />
      <Glance />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
