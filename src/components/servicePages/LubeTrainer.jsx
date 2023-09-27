import Header from "../Header";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SiteContext } from "../../context";

export default function LubeTrainer() {
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
                        <a className="undertitle__link">LubeTrainer</a>
                    </div>
                    <div className="service-page__title-block">
                        <h2 className="service-page__title title">LubeTrainer</h2>
                        <Link className="service-page__title-button button" to="/catalog">В каталог</Link>
                    </div>
                    <hr />
                    <div className="service-page__content">
                        <div className="service-page__text-block">
                            <p className="service-page__text">В процессе обучения сотрудники вашей компании получат полную информацию и смогут задать интересующие вопросы по таким направлениям, как:</p>
                            <p className="service-page__text service-page__text_check-mark">особенности эксплуатации и обслуживания оборудования, используемого вашими сотрудниками, при применении смазочных материалов Emarat</p>
                            <p className="service-page__text service-page__text_check-mark">варианты эффективного применяемых смазочных материалов для повышения технической готовности оборудования и сокращения затрат</p>
                            <p className="service-page__text service-page__text_check-mark">влияние условий хранения смазочных материалов на эффективность работы оборудования</p>
                            <p className="service-page__text">Результат:</p>
                            <p className="service-page__text service-page__text_point">повышение технической готовности оборудования при сокращении затрат на обслуживание при применении смазочных материалов Emarat</p>
                        </div>
                        <img className="service-page__image" src="../assets/images/services/LubeTrainer.jpg" alt=""/>
                    </div>
                    <div className="service-page__button button" onClick={() => popupSwitcher('form-open')}>Свяжитесь с нами</div>
                </div>
            </div>
        </section>
    )
}