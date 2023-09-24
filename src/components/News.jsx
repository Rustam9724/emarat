import Header from "./Header";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { SiteContext } from "../context";

export default function News() {
    const { popupSwitcher, scrollingToTop } = useContext(SiteContext);
    const [newsBodyCount, setNewsBodyCount] = useState(1);

    const result = [];
    for (let i = 1; i <= newsBodyCount; i++) {
        result.push(
            <div className="news__main__body" key={i}>
                <Link className='news__item' to="/news/news-page" onClick={scrollingToTop}>
                    <div className="news__item__image _ibg">
                        <img src="./assets/images/news/news_1.jpg" alt="" />    
                    </div>
                    <h3 className="news__item__title text">
                        "Революция в мире промышленных смазочных материалов: Нанотехнологии выходят на новый уровень"
                    </h3>
                    <p className="news__item__text">
                        Сегодня было объявлено о грандиозном прорыве в области промышленных смазочных материалов, который может перевернуть представление об их эффективности и долговечности...
                    </p>
                    <p className="news__item__date">14 Июня 2015</p>
                </Link>
                <Link className='news__item' to="/news/news-page" onClick={scrollingToTop}>
                    <div className="news__item__image _ibg">
                        <img src="./assets/images/news/news_2.jpg" alt="" />    
                    </div>
                    <h3 className="news__item__title text">
                        "ОАЭ: Новый центр промышленности и технологического развития"
                    </h3>
                    <p className="news__item__text">
                        В ОАЭ, одной из ведущих стран Персидского залива, сегодня была объявлена о запуске амбициозного проекта по развитию промышленности и технологий. Этот проект нацелен на создание инновационного центра, который...
                    </p>
                    <p className="news__item__date">23 Сентября 2020</p>
                </Link>
                <Link className='news__item' to="/news/news-page" onClick={scrollingToTop}>
                    <div className="news__item__image _ibg">
                        <img src="./assets/images/news/news_3.jpg" alt="" />    
                    </div>
                    <h3 className="news__item__title text">
                        "Новый партнер промышленных поставок гарантирует качество и непрерывность"
                    </h3>
                    <p className="news__item__text">
                            Ведущий поставщик смазочных материалов объявил о заключении стратегического партнерства с крупным промышленным предприятием для обеспечения устойчивых и надежных поставок смазочных материалов...
                    </p>
                    <p className="news__item__date">18 Марта 2023</p>
                </Link>
                <Link className='news__item' to="/news/news-page" onClick={scrollingToTop}>
                    <div className="news__item__image _ibg">
                        <img src="./assets/images/news/news_4.jpg" alt="" />    
                    </div>
                    <h3 className="news__item__title text">
                        "Революция в мире промышленных смазочных материалов: Нанотехнологии выходят на новый уровень"
                    </h3>
                    <p className="news__item__text">
                        Сегодня было объявлено о грандиозном прорыве в области промышленных смазочных материалов, который может перевернуть представление об их эффективности и долговечности...
                    </p>
                    <p className="news__item__date">14 Июня 2015</p>
                </Link>
                <Link className='news__item' to="/news/news-page" onClick={scrollingToTop}>
                    <div className="news__item__image _ibg">
                        <img src="./assets/images/news/news_5.jpg" alt="" />    
                    </div>
                    <h3 className="news__item__title text">
                        "ОАЭ: Новый центр промышленности и технологического развития"
                    </h3>
                    <p className="news__item__text">
                        В ОАЭ, одной из ведущих стран Персидского залива, сегодня была объявлена о запуске амбициозного проекта по развитию промышленности и технологий. Этот проект нацелен на создание инновационного центра, который...
                    </p>
                    <p className="news__item__date">23 Сентября 2020</p>
                </Link>
                <Link className='news__item' to="/news/news-page" onClick={scrollingToTop}>
                    <div className="news__item__image _ibg">
                        <img src="./assets/images/news/news_6.jpg" alt="" />    
                    </div>
                    <h3 className="news__item__title text">
                        "Новый партнер промышленных поставок гарантирует качество и непрерывность"
                    </h3>
                    <p className="news__item__text">
                        Ведущий поставщик смазочных материалов объявил о заключении стратегического партнерства с крупным промышленным предприятием для обеспечения устойчивых и надежных поставок смазочных материалов...
                    </p>
                    <p className="news__item__date">18 Марта 2023</p>
                </Link>
            </div>)
    }

    return (
        <section className="news">
            <div className="news__header header">
                <Header />
                <div className="news__header__background header__background"></div>
            </div>
            <div className="news__main">
                <div className="news__main__container _container">
                    <div className="news_undertitle undertitle">
                        <Link className="undertitle__link" to="/">Главная</Link>/
                        <a className="undertitle__link">Новости</a>
                    </div>
                    <div className="news__title-block">
                        <h2 className="news__title title">Новости</h2>
                        <button className="news__button button" onClick={() => popupSwitcher('form-open')}>Свяжитесь с нами</button>
                    </div>
                    <hr />
                    {result}
                    <a className="news__blind blind" onClick={() => setNewsBodyCount(newsBodyCount + 1)}>Ещё новости</a>
                </div>
            </div>
        </section>
    )
}