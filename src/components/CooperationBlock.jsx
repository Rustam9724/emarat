import { Link } from "react-router-dom";
import { useContext } from "react";
import { SiteContext } from "../context";

export default function CooperationBlock() {
    const { scrollingToTop } = useContext(SiteContext);
    
    return (
        <div className="cooperation-block">
                    <div className="_container cooperation-block__container">
                        <h2 className="cooperation-block__title title">Сотрудничество</h2>
                        <div className="cooperation-block__body">
                            <Link className="cooperation-block__item" to="/cooperation/purchase" onClick={scrollingToTop}>
                                <div className="cooperation-block__item__image _ibg">
                                    <img src="../assets/images/main/cooperation_1.jpg" alt="" />
                                </div>
                                <div className="cooperation-block__item__body">
                                    <h3 className="cooperation-block__item__title">Закупка смазочных материалов</h3>
                                    <div className="cooperation-block__text">
                                        <p className="text">Компания ”Гольфстрим Сервис Д” предлагает высококачественные смазочные материалы Emarat в соответствии с потребностями российского рынка. Наши партнеры - компании из различных секторов бизнеса, а также физические лица.</p>
                                        <p className="text">Для оформления заявки на закупку или подбор смазочного материала, предлагаем Вам заполнить форму или связаться с нашим представителем по телефону</p>
                                    </div>
                                    <div className="cooperation-block__footnote"></div>
                                </div>  
                            </Link>
                            <Link className="cooperation-block__item" to="/cooperation/distribution" onClick={scrollingToTop}>
                                <div className="cooperation-block__item__image _ibg">
                                    <img src="../assets/images/main/cooperation_2.jpg" alt="" />
                                </div>
                                <div className="cooperation-block__item__body">
                                    <h3 className="cooperation-block__item__title">Дистрибуция смазочных материалов</h3>
                                    <div className="cooperation-block__text">
                                        <p className="text">Компания ”Гольфстрим Сервис Д” предлагает Вам возможности долгосрочного сотрудничества в области дистрибуции смазочных материалов Emarat на территории РФ и готова предложить индивидуальные условия в соответствии с вашим запросом.</p>
                                        <p className="text">Для получения подробной информации мы предлагаем Вам заполнить форму или связаться с нашим представителем по телефону</p>
                                    </div>
                                    <div className="cooperation-block__footnote"></div>
                                </div>     
                            </Link>
                        </div>
                    </div>
                </div>
    )
}