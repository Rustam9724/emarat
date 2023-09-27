import Header from "../Header";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SiteContext } from "../../context";

export default function VideoCheck() {
    const { popupSwitcher } = useContext(SiteContext);

    return (
        <section className="service-page">
            <div className="services-section__header header">
                <Header />
                <div className="services-section__header__background header__background"></div>
            </div>
            <div className="service-page__main">
                <div className="service-page__container _container">
                    <div className="service-page__undertitle undertitle">
                        <Link className="undertitle__link" to="/">Главная</Link>/
                        <Link className="undertitle__link" to="/services">Сервисы</Link>/
                        <a className="undertitle__link">Video-Check</a>
                    </div>
                    <div className="service-page__title-block">
                        <h2 className="service-page__title title">Video-Check</h2>
                        <Link className="service-page__title-button button" to="/catalog">В каталог</Link>
                    </div>
                    <hr />
                    <div className="service-page__content">
                        <div className="service-page__text-block">
                            <p className="service-page__text">Эндоскопическое исследование состояния ДВС.</p>
                        </div>
                        <img className="service-page__image" src="../assets/images/services/Video-Check.jpg" alt=""/>
                    </div>
                    <div className="service-page__button button" onClick={() => popupSwitcher('form-open')}>Свяжитесь с нами</div>
                </div>
            </div>
        </section>
    )
}