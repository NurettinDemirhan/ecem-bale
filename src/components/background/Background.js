import "./Background.css";
import backgroundImg from './bale-kursu.jpg';

export default function Background(){

    return(
        <div className='Background'>
            <div className="Background-top">
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className="Background-bottom">
                <section className="Background-bottom-card">
                    <img className="Background-card-img" src={backgroundImg} alt="Bale" />
                    <h1 className="Background-card-header">Lorem ipsum dolor sit </h1>
                    <p className="Background-card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim 
                    </p>
                </section>
                <section className="Background-bottom-card">
                    <img className="Background-card-img" src={backgroundImg} alt="Bale" />
                    <h1 className="Background-card-header">Lorem ipsum dolor sit </h1>
                    <p className="Background-card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim 
                    </p>
                </section>
                <section className="Background-bottom-card">
                    <img className="Background-card-img" src={backgroundImg} alt="Bale" />
                    <h1 className="Background-card-header">Lorem ipsum dolor sit </h1>
                    <p className="Background-card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim 
                    </p>
                </section>
            </div>
        </div>
    )
}