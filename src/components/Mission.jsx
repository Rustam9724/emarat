import Header from "./Header";
import CooperationBlock from "./CooperationBlock";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SiteContext } from "../context";

export default function Mission() {
    const { popupSwitcher, scrollingToTop } = useContext(SiteContext);

    return (
        <section className="about-cmp">
            <div className="about-cmp__header header">
                <Header />
                <div className="about-cmp__header__background_mission header__background"></div>
            </div>
            <div className="about-cmp__main">
                <div className="about-cmp__container _container">
                    <div className="about-cmp__undertitle undertitle">
                        <Link className="undertitle__link" to="/">Главная</Link>/
                        <a className="undertitle__link">Миссия компании</a>
                    </div>
                    <h2 className="about-cmp__title title">Миссия компании</h2>
                    <div className="about-cmp__info">
                        <div className="about-cmp__image about-cmp__image_missioner"></div>
                        <div className="about-cmp__info__right about-cmp__info__right_mission">
                            <div className="about-cmp__text-block">
                                <p className="about-cmp__text text">Наша миссия - предоставлять высококачественные и инновационные смазочные материалы, которые обеспечивают надежную и эффективную работу механизмов и оборудования в различных отраслях.</p>
                                <p className="about-cmp__text text">Мы стремимся повысить производительность и продлить срок службы оборудования наших клиентов, снизить износ и трение, улучшить энергоэффективность и снизить экологическое воздействие нашей продукции.</p>
                                <p className="about-cmp__text text">Мы нацелены на инновации и постоянное развитие наших продуктов, основываясь на передовых технологиях и научных исследованиях. Наша компания стремится быть лидером в области смазочных материалов, предлагая клиентам широкий спектр продуктов, отвечающих самым высоким стандартам качества.<br />Наша миссия - помочь нашим клиентам достичь успеха и устойчивого развития, предоставляя им смазочные материалы, которые повышают надежность и эффективность их оборудования.</p>
                            </div>
                            <div className="about-cmp__buttons">
                                <Link className="about-cmp__button button" to="/catalog" onClick={scrollingToTop}>Каталог</Link>
                                <button className="about-cmp__button button" onClick={() => popupSwitcher('form-open')}>Свяжитесь с нами</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CooperationBlock />
        </section>
    )
}