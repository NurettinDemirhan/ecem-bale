import "./Header.css";
import baleImage from './bale.jpg';
export default function Header(){

    return(
        <div className='Header'>
            <img className="Header-img" src={baleImage} alt="Bale" />
            <div className="Header-text">
                <h2 className="Header-line">Sağlıklı Bir Aktivite, Güzel Bir Sanat: Bale Derslerine Yönlendirin!</h2>
                <a href="/" className="Header-link">Bizimle İletişime Geçin</a>
            </div>
        </div>
    )
}