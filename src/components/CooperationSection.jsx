import Header from "./Header";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SiteContext } from "../context";

export default function CooperationSection() {
    const { scrollingToTop } = useContext(SiteContext);
    
    return (
        <section className="coop-section">
            <div className="coop-section__header header">
                <Header />
                <div className="coop-section__header__background header__background"></div>
            </div>
            <div className="coop-section__main">
                <div className="coop-section__main__container _container">
                    <div className="coop-section__undertitle undertitle">
                        <Link className="undertitle__link" to="/">Главная</Link>/
                        <a className="undertitle__link">Сотрудничество</a>
                    </div>
                    <h2 className="coop-section__title title">Сотрудничество</h2>
                    <hr />
                    <Link className="coop-section__item _item" to="/cooperation/purchase" onClick={scrollingToTop}>
                        <div className="coop-section__item__image _item__image _ibg">
                            <img src="./assets/images/cooperation/purchase.jpg" alt="" />
                        </div>
                        <div className="coop-section__item__body _item__body">
                            <h3 className="coop-section__item__title _item__title">Закупка смазочных материалов</h3>
                            <p className="coop-section__item__text _item__text text">Компания ”Гольфстрим Сервис Д” предлагает высококачественные смазочные материалы Emarat в соответствии с потребностями российского рынка. Наши партнеры - компании из различных секторов бизнеса, а также физические лица.</p>
                            <p className="coop-section__item__text _item__text text">Для оформления заявки на закупку или подбор смазочного материала, предлагаем Вам заполнить форму или связаться с нашим представителем по телефону</p>
                            <div className="coop-section__item__footnote _item__footnote"></div>
                        </div>
                    </Link>
                    <Link className="coop-section__item coop-section__item_reverse _item _item_reverse" to="/cooperation/distribution" onClick={scrollingToTop}>
                        <div className="coop-section__item__image _item__image _ibg">
                            <img src="./assets/images/cooperation/distribution.jpg" alt=""/>
                        </div>
                        <div className="coop-section__item__body _item__body">
                            <h3 className="coop-section__item__title _item__title">Дистрибуция смазочных материалов</h3>
                            <p className="coop-section__item__text _item__text text">Компания ”Гольфстрим Сервис Д” предлагает Вам возможности долгосрочного сотрудничества в области дистрибуции смазочных материалов Emarat на территории Российской Федерации и готова предложить индивидуальные условия в соответствии с вашим запросом.</p>
                            <p className="coop-section__item__text _item__text text">Для получения подробной информации мы предлагаем Вам заполнить форму или связаться с нашим представителем по телефону</p>
                            <div className="coop-section__item__footnote _item__footnote"></div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}