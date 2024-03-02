import Background from "../components/background/Background";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import "./HomePage.css";
function HomePage() {
    return (
      <div className="HomePage">
        <Navbar/>
        <Header/>
        <Background/>
      </div>
    );
  }
  
  export default HomePage;