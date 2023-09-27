import Header from "../Header";
import Form from "../Form";
import { Link } from "react-router-dom";

export default function Purchase() {
    return (
        <section className="coop-page coop-page_purchase">
            <div className="purchase__header header">
                <Header />
                <div className="purchase__header__background header__background"></div>
            </div>
            <div className="coop-page__main">
                <div className="coop-page__main__info">
                    <div class="coop-page__main__info__container _container">
                        <div className="coop-page__undertitle undertitle">
                            <Link className="undertitle__link" to="/">Главная</Link>/
                            <Link className="undertitle__link" to="/cooperation">Сотрудничество</Link>/
                            <a className="undertitle__link">Закупка смазочных материалов</a>
                        </div>
                        <h2 className="coop-page__title title">Закупка смазочных материалов</h2>
                        <hr />
                        <div className="coop-page__main__info__body coop-page__body">
                            <img className="coop-page__image" src="../assets/images/cooperation/purchase.jpg" alt=""/>
                            <div className="coop-page__body__right">
                                <div className="coop-page__text-block">
                                    <p className="coop-page__text text">Компания ”Гольфстрим Сервис Д” предлагает высококачественные смазочные материалы Emarat в соответствии с потребностями российского рынка. Наши партнеры - компании из различных секторов бизнеса, а также физические лица.</p>
                                    <p className="coop-page__text text">Для оформления заявки на закупку или подбор смазочного материала, предлагаем Вам заполнить форму или связаться с нашим представителем по телефону</p>
                                </div>
                                <Link className="coop-page__body__button button" to="/catalog">В каталог</Link>
                            </div>
                        </div>
                        <h2 className="coop-page__title title">Оставить заявку</h2>
                        <hr />
                        <Form />
                    </div>
                </div>
            </div>
        </section>
    )
}