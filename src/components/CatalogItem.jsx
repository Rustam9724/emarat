import Header from "./Header";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SiteContext } from "../context";

export default function CatalogItem() {
    const { scrollingToTop } = useContext(SiteContext);
    
    return (
        <section className="catalog-item">
            <div className="catalog__header header">
                <Header />
                <div className="catalog__header__background header__background"></div>
            </div>
            <div className="catalog-item__body">
                <div className="catalog-item__body__container _container">
                    <div className="catalog-item__undertitle undertitle">
                        <Link className="undertitle__link" to="/" >Главная</Link> /
                        <Link className="undertitle__link" to="/catalog">Наш каталог</Link> /
                        <a className="undertitle__link">Мотороное масло</a>
                    </div>
                    <div className="catalog-item__title-block">
                        <h2 className="catalog-item__title title">Моторное масло</h2>
                        <p>Получите максимальную производительность вашего автомобиля с высококачественным моторным маслом Emarat</p>
                    </div>
                    <hr />
                    <div className="catalog-item__description">
                        <div className="catalog-item__text">
                            <p>
                                Произведенное с использованием передовых мировых технологий, протестированное в различных условиях моторное масло Emarat гарантированно обеспечит мощность, надежность и долговечность работы двигателя.
                            </p>    
                            <p>
                                Моторное масло Emarat обладает уникальной формулой, которая обеспечивает эффективную защиту от износа и коррозии. Создано, чтобы работать при экстремальных условиях, поддерживая стабильную работу двигателя даже при высоких температурах и интенсивных нагрузках.
                            </p>
                            <p>
                                Мы предлагаем широкий выбор масел различной вязкости и спецификаций. Будь то легковой автомобиль, грузовик или спортивный автомобиль, в линейке моторных масел Emarat есть продукты для различных типов двигателей.
                            </p>
                        </div>
                        <div className="catalog-item__image _ibg">
                            <img src="../assets/images/catalog-item/oils.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="catalog-item__cooperation-block cooperation-block">
                    <div className="_container cooperation-block__container">
                        <h2 className="cooperation-block__title title">Моторное масло Emarat</h2>
                        <div className="cooperation-block__body">
                            <Link className="cooperation-block__item" to="/catalog/catalog-item/for-commercial-vehicles" onClick={scrollingToTop}>
                                <div className="cooperation-block__item__image _ibg">
                                    <img src="../assets/images/catalog-item/car_1.jpg" alt="" />
                                </div>
                                <div className="cooperation-block__item__body">
                                    <h3 className="cooperation-block__item__title">Для коммерческой техники</h3>
                                    <div className="cooperation-block__text">
                                        <p className="text">Моторное масло для коммерческой техники обладает особой вязкостью, содержит специальные присадки. Это позволяет обеспечивать работу при высоких нагрузках и надежную смазку двигателя.</p>
                                        <p className="text">Разработано для длительной эксплуатации. Обладает высокой термической стабильностью, стойкостью к окислению. Содержит дополнительные присадки, позволяющие справиться с интенсивной работой двигателя в тяжелых условиях.</p>    
                                    </div>
                                    <div className="cooperation-block__footnote"></div>
                                </div>  
                            </Link>
                            <Link className="cooperation-block__item" to="/catalog/catalog-item/for-commercial-vehicles" onClick={scrollingToTop}>
                                <div className="cooperation-block__item__image _ibg">
                                    <img src="../assets/images/catalog-item/car_2.jpg" alt="" />
                                </div>
                                <div className="cooperation-block__item__body">
                                    <h3 className="cooperation-block__item__title">Для легковой техники</h3>
                                    <div className="cooperation-block__text">
                                        <p className="text">Моторное масло для легковой техники обладает особыми свойствами. Это обеспечивает высокую степень смазки и защиты двигателя от износа, окисления и образования отложений.</p>
                                        <p className="text">Моторные масла для легковой техники разработаны с целью снижения трения внутри двигателя. Это приводит к более эффективному расходу топлива и повышению экономичности.</p>
                                    </div>
                                    <div className="cooperation-block__footnote"></div>
                                </div>     
                            </Link>
                        </div>
                    </div>
                </div>
        </section>
    )
}