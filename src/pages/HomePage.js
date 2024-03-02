import Background from "../components/background/Background";
import Contact from "../components/contact/Contact";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import "./HomePage.css";
function HomePage() {
    return (
      <div className="HomePage">
        <Navbar/>
        <Header/>
        <Background/>
        <Contact/>
      </div>
    );
  }
  
  export default HomePage;