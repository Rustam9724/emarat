import CooperationBlock from "./CooperationBlock"
import Header from "./Header";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SiteContext } from "../context";

export default function Catalog() {
    const { scrollingToTop } = useContext(SiteContext);

    return (

        <section className="catalog-section">
            <div className="catalog__header header">
                <Header />
                <div className="catalog__header__background header__background"></div>
            </div>
            <div className="catalog__body">
                <div className="catalog__container _container">
                    <p className="catalog__undertitle undertitle">
                        <Link className="undertitle__link" to="/">Главная</Link>/
                        <a className="undertitle__link">Наш каталог</a>
                    </p>
                    <h2 className="catalog__title title">Наш каталог</h2>
                    <hr />
                    <div className="catalog__main">
                        <Link className="catalog__item _item" to="/catalog/catalog-item" onClick={scrollingToTop}>
                                <div className="catalog__item__image _item__image _ibg">
                                    <img src="./assets/images/catalog/catalog_1.jpg" alt="" />
                                </div>
                                <div className="catalog__item__body _item__body">
                                    <h3 className="catalog__item__title _item__title">Моторное масло</h3>
                                    <div className="catalog__item__footnote _item__footnote"></div>
                                </div>
                        </Link>
                        <Link className="catalog__item _item _item_reverse" to="/catalog/catalog-item" onClick={scrollingToTop}>
                            <div className="catalog__item__image _item__image _ibg">
                                <img src="./assets/images/catalog/catalog_2.jpg" alt="" />
                            </div>
                            <div className="catalog__item__body _item__body">
                                <h3 className="catalog__item__title _item__title">Трансмиссионное масло</h3>
                                <div className="catalog__item__footnote _item__footnote"></div>
                            </div>
                        </Link>
                        <Link className="catalog__item _item" to="/catalog/catalog-item" onClick={scrollingToTop}>
                            <div className="catalog__item__image _item__image _ibg">
                                <img src="./assets/images/catalog/catalog_3.jpg" alt="" />
                            </div>
                            <div className="catalog__item__body _item__body">
                                <h3 className="catalog__item__title _item__title">Спец. продукты для трансмиссий внедорожной техники</h3>
                                <div className="catalog__item__footnote _item__footnote"></div>
                            </div>
                        </Link>
                        <Link className="catalog__item _item _item_reverse" to="/catalog/catalog-item" onClick={scrollingToTop}>
                            <div className="catalog__item__image _item__image _ibg">
                                <img src="./assets/images/catalog/catalog_4.jpg" alt="" />
                            </div>
                            <div className="catalog__item__body _item__body">
                                <h3 className="catalog__item__title _item__title">Гидравлическое масло</h3>
                                <div className="catalog__item__footnote _item__footnote"></div>
                            </div>
                        </Link>
                        <Link className="catalog__item _item" to="/catalog/catalog-item" onClick={scrollingToTop}>
                            <div className="catalog__item__image _item__image _ibg">
                                <img src="./assets/images/catalog/catalog_5.jpg" alt="" />
                            </div>
                            <div className="catalog__item__body _item__body">
                                <h3 className="catalog__item__title _item__title">Пластичные смазки</h3>
                                <div className="catalog__item__footnote _item__footnote"></div>
                            </div>
                        </Link>
                        <Link className="catalog__item _item _item_reverse" to="/catalog/catalog-item" onClick={scrollingToTop}>
                            <div className="catalog__item__image _item__image _ibg">
                                <img src="./assets/images/catalog/catalog_6.jpg" alt="" />
                            </div>
                            <div className="catalog__item__body _item__body">
                                <h3 className="catalog__item__title _item__title">Охлаждающие жидкости</h3>
                                <div className="catalog__item__footnote _item__footnote"></div>
                            </div>
                        </Link>
                        <Link className="catalog__item _item" to="/catalog/catalog-item" onClick={scrollingToTop}>
                            <div className="catalog__item__image _item__image _ibg">
                                <img src="./assets/images/catalog/catalog_7.jpg" alt="" />
                            </div>
                            <div className="catalog__item__body _item__body">
                                <h3 className="catalog__item__title _item__title">Тормозные жидкости</h3>
                                <div className="catalog__item__footnote _item__footnote"></div>
                            </div>
                        </Link>
                    </div>  
                </div>
            </div>
            <CooperationBlock />
        </section>
    )
}