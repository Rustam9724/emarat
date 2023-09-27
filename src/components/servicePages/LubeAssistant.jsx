import Header from "../Header";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SiteContext } from "../../context";

export default function LubeAssistant() {
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
                        <Link className="undertitle__link" to="/services/">Сервисы</Link>/
                        <a className="undertitle__link">LubeAssistant</a>
                    </div>
                    <div className="service-page__title-block">
                        <h2 className="service-page__title title">LubeAssistant</h2>
                        <Link className="service-page__title-button button" to="/catalog">В каталог</Link>
                    </div>
                    <hr />
                    <div className="service-page__content">
                        <div className="service-page__text-block">
                            <p className="service-page__text">В рамках LubeAssistant мы:</p>
                            <p className="service-page__text service-page__text_check-mark">произведем экспертный подбор смазочных материалов для увеличения эффективности процессов, связанных с применением смазочных материалов</p>
                            <p className="service-page__text service-page__text_check-mark">проконсультируем по сокращению непроизводственных потерь смазочных материалов</p>
                            <p className="service-page__text service-page__text_check-mark">предложим варианты решений по сокращению временных затрат на проведение технического обслуживания и ремонтов транспортных средств</p>
                            <p className="service-page__text">Результат:</p>
                            <p className="service-page__text service-page__text_point">повышение эффективности производственных процессов, связанных с использованием смазочных материалов на оборудовании или в вашем автопарке</p>
                            <p className="service-page__text service-page__text_point">продуктивная корректировка межсервисных интервалов вашего автопарка, как результат точной проработки всех процессов, связанных с применением смазочных материалов.</p>
                        </div>
                        <img className="service-page__image" src="../assets/images/services/LubeAssistant.jpg" alt=""/>
                    </div>
                    <div className="service-page__button button" onClick={() => popupSwitcher('form-open')}>Свяжитесь с нами</div>
                </div>
            </div>
        </section>
    )
}