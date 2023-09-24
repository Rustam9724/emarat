import Header from "./Header";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SiteContext } from "../context";

export default function AboutCompany() {
    const { popupSwitcher } = useContext(SiteContext);

    return (
        <section className="about-cmp">
            <div className="about-cmp__header header">
                <Header />
                <div className="about-cmp__header__background header__background"></div>
            </div>
            <div className="about-cmp__main">
                <div className="about-cmp__container _container">
                    <div className="about-cmp__undertitle undertitle">
                        <Link className="undertitle__link" to="/">Главная</Link>/
                        <a className="undertitle__link">О компании</a>
                    </div>
                    <h2 className="about-cmp__title title">О компании Emarat</h2>
                    <div className="about-cmp__info">
                        {/* <img className="about-cmp__image" src="/assets/images/about-company/office.jpg" alt=""/> */}
                        <div className="about-cmp__image"></div>
                        <div className="about-cmp__info__right">
                            <div className="about-cmp__text-block">
                                <p className="about-cmp__text text">Развитие компании Emarat продолжается на протяжении более 30 лет. В настоящее время Emarat является ведущим национальным нефтяным брендом ОАЭ. Компания, основанная правительством ОАЭ в 1981 году для сбыта и дистрибуции нефтепродуктов, в настоящее</p>
                                <p className="about-cmp__text text">Компания стремится сделать жизнь своих клиентов лучше, предоставляя продукты и услуги самого высокого качества.</p>
                            </div>
                            <div className="about-cmp__buttons">
                                <Link className="about-cmp__button button" to="/catalog">Каталог</Link>
                                <button className="about-cmp__button button" onClick={() => popupSwitcher('form-open')}>Свяжитесь с нами</button>
                            </div>
                        </div>
                    </div>
                    <div className="about-cmp__video">
                    <iframe 
                        width="853" 
                        height="480" 
                        src="https://www.youtube.com/embed/VuSyUBuHDi8" 
                        title="Emarat Misr Profile" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen> 
                    </iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}