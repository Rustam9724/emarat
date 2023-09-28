import Header from "./Header";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SiteContext } from "../context";

export default function NewsPage() {
    const { popupSwitcher } = useContext(SiteContext);
    
    return (
        <section className="news-page">
            <div className="news__header header">
                <Header />
                <div className="news__header__background header__background"></div>
            </div>
            <div className="news-page__main">
                <div className="news-page__main__container _container">
                    <div className="news-page__undertitle undertitle">
                        <Link className="undertitle__link" to="/">Главная</Link> /
                        <Link className="undertitle__link" to="/news">Новости</Link> /
                        <a className="undertitle__link">Прорыв в промышленности смазочных материалов</a>
                    </div>
                    <div className="news-page__title-block">
                        <h2 className="news-page__title title">Прорыв в промышленности смазочных материалов</h2>
                        <button className="news-page__button button" onClick={() => popupSwitcher('form-open')}>Свяжитесь с нами</button>
                    </div>
                    <hr />
                    <div className="news-page__main__body news-body">
                        <img className="news-page__image_main" src="/assets/images/news/main.jpg" alt=""/>
                        <div className="news-body__text-block">
                            <h3 className="news-body__title text_graphite">"Прорыв в промышленности смазочных материалов: новая формула обещает длительную защиту и улучшенную производительность"</h3>
                            <p className="news-body__text text_graphite">Ведущая компания, специализирующаяся на производстве смазочных материалов, объявила о своем последнем прорыве в инновационной формуле, которая обещает революционизировать промышленность смазки и смазочных материалов.</p>
                            <p className="news-body__text text_graphite">Новая формула, разработанная командой ученых и инженеров компании, обеспечивает длительную защиту механизмов и улучшенную производительность в широком спектре применений.</p>
                            <p className="news-body__text text_graphite">Основные особенности новой формулы включают улучшенную термическую стабильность, экстремальную сопротивляемость высоким и низким температурам, а также повышенную стойкость к износу и окислительному разложению. Эти характеристики делают новый смазочный материал идеальным выбором для широкого спектра отраслей, включая автомобильную, авиационную, машиностроительную и энергетическую промышленность.</p>
                            <p className="news-body__text text_graphite">Ведущая компания, специализирующаяся на производстве смазочных материалов, объявила о своем последнем прорыве в инновационной формуле, которая обещает революционизировать промышленность смазки и смазочных материалов.</p>
                            <p className="news-body__text text_graphite">Новая формула, разработанная командой ученых и инженеров компании, обеспечивает длительную защиту механизмов и улучшенную производительность в широком спектре применений.</p>
                            <p className="news-body__text text_graphite">Основные особенности новой формулы включают улучшенную термическую стабильность, экстремальную сопротивляемость высоким и низким температурам, а также повышенную стойкость к износу и окислительному разложению. Эти характеристики делают новый смазочный материал идеальным выбором для широкого спектра отраслей, включая автомобильную, авиационную, машиностроительную и энергетическую промышленность.</p>
                        </div>
                    </div>
                    <div className="news-page__main__images">
                        <img className="news-page__image_second" src="../assets/images/news/second.jpg" alt=""/>
                        <img className="news-page__image_second" src="../assets/images/news/second.jpg" alt=""/>
                        <img className="news-page__image_second" src="../assets/images/news/second.jpg" alt=""/>
                        <img className="news-page__image_second" src="../assets/images/news/second.jpg" alt=""/>
                        <img className="news-page__image_second" src="../assets/images/news/second.jpg" alt=""/>
                        <img className="news-page__image_second" src="../assets/images/news/second.jpg" alt=""/>
                        <img className="news-page__image_second" src="../assets/images/news/second.jpg" alt=""/>
                        <img className="news-page__image_second" src="../assets/images/news/second.jpg" alt=""/>
                    </div>
                    <h2 className="news-page__title news-page__title_secondary title">Прорыв в промышленности смазочных материалов</h2>
                    <div className="news-page__video">
                        <iframe 
                            width="853" 
                            height="480" 
                            src="https://www.youtube.com/embed/VuSyUBuHDi8" 
                            title="Emarat Misr Profile" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen> 
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}