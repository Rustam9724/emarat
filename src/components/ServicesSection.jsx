import Header from "./Header";
import ServicesBlock from "./ServicesBlock";
import { Link } from "react-router-dom";

export default function ServicesSection() {
    
    return (
        <section className="services-section">
            <div className="services-section__header header">
                <Header />
                <div className="services-section__header__background header__background"></div>
            </div>
            <div className="services-section__main">
                <div className="services-section__main__container _container">
                    <div className="services-section_undertitle undertitle">
                        <Link className="undertitle__link" to="/">Главная</Link> /
                        <a className="undertitle__link">Сервисы</a>
                    </div>
                    <h2 className="services__section__title title">Сервисы</h2>
                    <ServicesBlock />
                </div>
            </div>
        </section>
    )
}