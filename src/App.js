import logo from './logo.svg';
import './App.css';
import {Home, Welcome, Pricing, Services, Testimonials, Footer,Timings, Gallery} from './components';
function App() {
  return (
    <div className="spa__app">
      <Home />
      <Welcome/>
      {/* <Pricing/> */}
      <Gallery/>
      <Testimonials/>
      <Services/>
      <Timings/>
      <Footer/>
    </div>
  );
}

export default App;
