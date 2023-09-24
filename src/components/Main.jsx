import { useState, useContext } from 'react';
import CooperationBlock from './CooperationBlock';
import Header from './Header';
import ServicesBlock from './ServicesBlock';
import { Link } from 'react-router-dom';
import { SiteContext } from '../context';

export default function Main() {
    const [carouselState, setCarouselState] = useState('left');
    const { popupSwitcher } = useContext(SiteContext);

    return (
        <>
            <header className="main__header header">
                <Header />
                <div className="main__header__background header__background"></div>
            </header>
            <section className="main__body">
                <div className="main__about-company">
                    <div className="main__about-company__container _container">
                        <h2 className="main__about-company__title title">О компании Emarat</h2>
                        <div className="main__about-company__body">
                            <div className="main__about-company__image"></div>
                            <div className="main__about-company__body__right main-right">
                                <p className="main__right__description text_graphite">Вот уже более 30 лет Emarat производит  и реализует качественные смазочные материалы, как в ОАЭ, так и на мировом рынке</p>
                                <div className="main__right__text">
                                    <p className="text">
                                        Смазочные материалы Emarat разработаны в соответствии со стандартами API, ILSAC, GSO, ACEA, ASTM и JASO. Они производятся на заводе, сертифицированном по стандартам ISO 9001:2015, ISO 14001:2015, OHSAS 18001:2007 и IATF 16949:2016, также получили сертификат ESMA.
                                    </p>
                                    <p className="text">
                                        Объединив усилия, используя общие ресурсы и передовые технологии компания Emarat вместе со своими партнерами, компаниями ExxonMobil и BP, сформировала мощную и эффективную команду на заводе Melubco в Джебель-Али (Дубай, ОАЭ), которая работает над созданием и производством высококачественных смазочных материалов, предлагая рынку продукт с широким спектром конкурентных преимуществ.
                                    </p>
                                </div>
                                <div className="main__right__buttons">
                                    <Link className="main__right__button button" to="/catalog">Каталог</Link>
                                    <button className="main__right__button button" onClick={() => popupSwitcher('form-open')}>Свяжитесь с нами</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main__catalog">
                    <div className="main__catalog__container _container">
                        <h2 className="main__catalog__title title">Наш каталог</h2>
                        <hr />
                        <p className="main__catalog__description text">Открой для себя качественные смазочные материалы</p>
                        <div className="main__catalog__body">
                            <ul className="main__catalog__list">
                                <li>
                                    <Link className="main__catalog__list__link" to="/catalog/catalog-item">Моторное масло</Link>
                                    <ul className="main__catalog__list__clue">
                                        <li><Link className="main__catalog__list__link" to="/catalog/catalog-item/for-commercial-vehicles">Для коммерческой техники</Link></li>
                                        <li><Link className="main__catalog__list__link" to="/catalog/catalog-item/for-commercial-vehicles">Для легковой техники</Link></li>
                                    </ul>
                                </li>
                                <li><Link className="main__catalog__list__link" to="/catalog/catalog-item">Трансмисионное масло</Link></li>
                                <li><Link className="main__catalog__list__link" to="/catalog/catalog-item">Спец.продукты для трансмиссий внедорожной техники</Link></li>
                                <li><Link className="main__catalog__list__link" to="/catalog/catalog-item">Гидравлическое масло</Link></li>
                                <li><Link className="main__catalog__list__link" to="/catalog/catalog-item">Пластичные смазки</Link></li>
                                <li><Link className="main__catalog__list__link" to="/catalog/catalog-item">Охлаждающие жидкости</Link></li>
                                <li><Link className="main__catalog__list__link" to="/catalog/catalog-item">Тормозные жидкости</Link></li>
                            </ul>
                            <div className="main__catalog__image _ibg">
                                <img src="./assets/images/main/catalog.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <CooperationBlock />
                <div className="main__services">
                    <div className="main__services__container _container">
                        <h2 className="main__services__title title">Сервисы</h2>
                        <hr />
                        <ServicesBlock />
                    </div>
                </div>
                <div className="main__news">
                    <div className="main__news__arrow main__news__arrow_left" onClick={() => setCarouselState('left')}></div>
                    <div className="main__news__arrow main__news__arrow_right" onClick={() => setCarouselState('right')}></div>
                    <div className="main__news__container _container">
                        <h2 className="main__news__title title">Новости</h2>
                        <hr />
                        <div className="main__news__body">
                            <div className={`main__news__item news__item ${carouselState === 'right' ? 'main__news__item_moved' : null}`}>
                                <div className="main__news__item__image news__item__image _ibg">
                                    <img src="./assets/images/news/news_4.jpg" alt="" />    
                                </div>
                                <h3 className="main__news__item__title news__item__title text">
                                    "Инновации в нефтяной промышленности: разработка экологически чистых технологий добычи"
                                </h3>
                                <p className="main__news__item__text news__item__text">
                                    "Инновации в нефтяной промышленности: разработка экологически чистых технологий добычи..."
                                </p>
                                <p className="main__news__item__date news__item__date">14 Июня 2015</p>
                            </div>
                            <div className="main__news__item news__item">
                                <div className="main__news__item__image news__item__image _ibg">
                                    <img src="./assets/images/news/news_5.jpg" alt="" />    
                                </div>
                                <h3 className="main__news__item__title news__item__title text">
                                    "Мировые цены на нефть достигли нового рекорда за последние пять лет"
                                </h3>
                                <p className="main__news__item__text news__item__text">
                                    В данной новости описывается, как цены на нефть достигли самого высокого уровня за последние пять лет в связи с увеличением спроса и сокращением запасов нефти.
                                </p>
                                <p className="main__news__item__date news__item__date">23 Сентября 2020</p>
                            </div>
                            <div className="main__news__item news__item">
                                <div className="main__news__item__image news__item__image _ibg">
                                    <img src="./assets/images/news/news_6.jpg" alt="" />    
                                </div>
                                <h3 className="main__news__item__title news__item__title text">
                                    "Нефтяные компании расширяют свою присутствие на международных рынках"
                                </h3>
                                <p className="main__news__item__text news__item__text text">
                                    В данной новости описывается активное расширение деятельности нефтяных компаний на международных рынках...
                                </p>
                                <p className="main__news__item__date news__item__date">18 Марта 2023</p>
                            </div>
                            <div className="main__news__item news__item">
                                <div className="main__news__item__image news__item__image _ibg">
                                    <img src="./assets/images/news/news_1.jpg" alt="" />    
                                </div>
                                <h3 className="main__news__item__title news__item__title text">
                                    "Революция в мире промышленных смазочных материалов: Нанотехнологии выходят на новый уровень"
                                </h3>
                                <p className="main__news__item__text news__item__text text">
                                    Сегодня было объявлено о грандиозном прорыве в области промышленных смазочных материалов, который может перевернуть представление об их эффективности и долговечности...
                                </p>
                                <p className="main__news__item__date news__item__date">14 Июня 2015</p>
                            </div>
                            <div className="main__news__item news__item">
                                <div className="main__news__item__image news__item__image _ibg">
                                    <img src="./assets/images/news/news_2.jpg" alt="" />    
                                </div>
                                <h3 className="main__news__item__title news__item__title text">
                                    "ОАЭ: Новый центр промышленности и технологического развития"
                                </h3>
                                <p className="main__news__item__text news__item__text">
                                    В ОАЭ, одной из ведущих стран Персидского залива, сегодня была объявлена о запуске амбициозного проекта по развитию промышленности и технологий. Этот проект нацелен на создание инновационного центра, который...
                                </p>
                                <p className="main__news__item__date news__item__date">23 Сентября 2020</p>
                            </div>
                            <div className="main__news__item news__item">
                                <div className="main__news__item__image news__item__image _ibg">
                                    <img src="./assets/images/news/news_3.jpg" alt="" />    
                                </div>
                                <h3 className="main__news__item__title news__item__title text">
                                    "Новый партнер промышленных поставок гарантирует качество и непрерывность"
                                </h3>
                                <p className="main__news__item__text news__item__text">
                                    Ведущий поставщик смазочных материалов объявил о заключении стратегического партнерства с крупным промышленным предприятием для обеспечения устойчивых и надежных поставок смазочных материалов...
                                </p>
                                <p className="main__news__item__date news__item__date">18 Марта 2023</p>
                            </div>
                        </div>
                    </div>
                </div>  
        </section>
        </>
    )
}