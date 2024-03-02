
import "./Navbar.css";

export default function Navbar(){

    return(
        <div className='Navbar'>
            <div className="Navbar-top">
                <p className="Navbar-top-text">Sitemizi ziyaret ettiğiniz için teşekkür ederiz</p>
            </div>
            <div className="Navbar-main">
                <section className='Navbar-left'>
                    <div className="Navbar-left-text">
                    <h1 className='Navbar-left-Header-up'>Ecem Bale</h1>
                    <h2 className='Navbar-left-Header-down'>MEB'e bağlı ruhsatlı bir eğitim kurumudur</h2>
                    </div>
                </section>

                <section className='Navbar-right'>
                    <a href="/" className='Navbar-right-link'>Ana Sayfa</a>
                    <a href="#background" className='Navbar-right-link'>Hakkımızda</a>
                    {/* <a href="/" className='Navbar-right-link'>Kurslarımız</a>
                    <a href="/" className='Navbar-right-link'>Gösterilerimiz</a> */}
                    <a href="/" className='Navbar-right-link'>İletişim</a>
                </section>
            </div>
        </div>
    )
}