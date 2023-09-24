import './App.css';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import AllTips from './components/AllTips';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen text-center bg-gradient-to-br from-yellow-50 to-green-100 overflow-x-hidden">
      <Navbar />
      <Hero />
      <AllTips />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
