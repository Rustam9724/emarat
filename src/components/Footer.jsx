import { Link } from "react-router-dom"
import { useContext } from "react"
import { SiteContext } from "../context"

export default function Footer() {
    const { scrollingToTop, popupSwitcher } = useContext(SiteContext);

    return (
        <section className="footer">
            <div className="footer__background"></div>
            <div className="footer__container _container">
                <div className="footer__top">
                    <div className="footer__logo-section">
                        <div className="footer__logo"></div>
                        <div className="footer__title-section">
                            <h2 className="footer__title">Гольфстрим Сервис Д</h2>
                            <p className="footer__subtitle">Эксклюзивный представитель</p>
                        </div>
                    </div>
                    <div className="footer__nav">
                        <ul>
                            <li><Link to="/" onClick={scrollingToTop}>Главная</Link></li>
                            <li><Link to="/about-company" onClick={scrollingToTop}>О компании</Link></li>
                            <li><Link to="/catalog" onClick={scrollingToTop}>Каталог</Link></li>
                            <li><Link to="/cooperation" onClick={scrollingToTop}>Сотрудничество</Link></li>
                            <li><Link to="/services" onClick={scrollingToTop}>Сервисы</Link></li>
                            <li><Link to="/contacts" onClick={scrollingToTop}>Контакты</Link></li>
                            <li><Link to="/news" onClick={scrollingToTop}>Новости</Link></li>
                            <li><Link to="/vacancies" onClick={scrollingToTop}>Вакансии</Link></li>
                        </ul>
                        <ul>
                            <li><Link to="/catalog/catalog-item" onClick={scrollingToTop}>Моторные масла</Link></li>
                            <li><Link to="/catalog/catalog-item" onClick={scrollingToTop}>Трансмиссионные масла</Link></li>
                            <li><Link to="/catalog/catalog-item" onClick={scrollingToTop}>Спец. продукты для внедорожной техники</Link></li>
                            <li><Link to="/catalog/catalog-item" onClick={scrollingToTop}>Охлаждающие жидкости</Link></li>
                            <li><Link to="/catalog/catalog-item" onClick={scrollingToTop}>Гидравлические масла</Link></li>
                            <li><Link to="/catalog/catalog-item" onClick={scrollingToTop}>Пластичные смазки</Link></li>
                            <li><Link to="/catalog/catalog-item" onClick={scrollingToTop}>Тормозная жидкость</Link></li>
                        </ul>
                    </div>
                    <div className="footer__contacts">
                        <p className="footer__email">Email: Emaratcompany@gmail.com</p>
                        <p className="footer__phone">Тел.: 8 927 000 00 00 </p>
                        <div className="footer__phone-button phone-button" onClick={() => popupSwitcher('form-open')}>Заказать звонок</div>
                        <p className="footer__address"></p>
                    </div>
                </div>
                <div className="footer__bottom">
                    <p>Карта сайта</p>
                    <p>Политика конфиденциальности</p>
                    <p>2023 Гольфстрим Сервис Д</p>
                </div>
            </div>
        </section>
    )
}