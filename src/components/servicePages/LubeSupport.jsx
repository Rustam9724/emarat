import Header from "../Header";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SiteContext } from "../../context";

export default function LubeSupport() {
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
                        <Link className="undertitle__link" to="/">Главная</Link> /
                        <Link className="undertitle__link" to="/services">Сервисы</Link> /
                        <a className="undertitle__link">LubeSupport</a>
                    </div>
                    <div className="service-page__title-block">
                        <h2 className="service-page__title title">LubeSupport</h2>
                        <Link className="service-page__title-button button" to="/catalog">В каталог</Link>
                    </div>
                    <hr />
                    <div className="service-page__content">
                        <div className="service-page__text-block">
                            <p className="service-page__text">Благодаря LubeSupport вы можете как испытать смазочные материалы Emarat на собственной технике, так и в дальнейшем контролировать результат применения смазочных материалов:</p>
                            <p className="service-page__text service-page__text_check-mark">разработаем индивидуальный перечень параметров, которые необходимо держать под контролем для необходимого результата</p>
                            <p className="service-page__text service-page__text_check-mark">подготовим индивидуальные рекомендации по мощностям вашего автопарка, необходимых для проведения испытания</p>
                            <p className="service-page__text service-page__text_check-mark">по результатам испытаний разработаем аналитический отчет с рекомендациями по дальнейшему эффективному применению смазочных материалов Emarat</p>
                        </div>
                        <img className="service-page__image" src="../assets/images/services/LubeSupport.jpg" alt=""/>
                    </div>
                    <div className="service-page__button button" onClick={() => popupSwitcher('form-open')}>Свяжитесь с нами</div>
                </div>
            </div>
        </section>
    )
}