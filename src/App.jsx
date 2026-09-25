import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Gallery from './components/Gallery.jsx'
import Flavours from './components/Flavours.jsx'
import Process from './components/Process.jsx'
import InquiryForm from './components/InquiryForm.jsx'
import Footer from './components/Footer.jsx'
import PipedDivider from './components/PipedDivider.jsx'

export default function App() {
  return (
    <div className="font-body bg-cream text-espresso">
      <Navbar />
      <main>
        <Hero />
        <PipedDivider color="#FAF3E7" bg="#FAF3E7" />
        <Gallery />
        <PipedDivider color="#FAF3E7" bg="#F1E3C9" />
        <Flavours />
        <PipedDivider color="#F1E3C9" bg="#FAF3E7" />
        <Process />
        <PipedDivider color="#FAF3E7" bg="#F1E3C9" />
        <InquiryForm />
      </main>
      <Footer />
    </div>
  )
}
