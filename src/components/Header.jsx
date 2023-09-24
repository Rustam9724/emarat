import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SiteContext } from '../context';

function Header() {
    const {
        isBurgerOpen, 
        burgerMenuSwitcher,
        popupSwitcher,
    } = useContext(SiteContext);

    const navigate = useNavigate();

    function navigateFunc(event, link) {
        if (!event.target.classList.contains('navigata__clue_link')) {
            navigate(link)
        }
    }

    return (
        <>
            <div className="header__container _container">
                <div className="header__logo"></div>
                <div className="header__body">
                    <div className="header__body__top">
                        <div className="header__description">
                            <h1 className="header__title">Гольфстрим Сервис Д</h1>
                            <p className="header__text">Эксклюзивный представитель</p>
                        </div>
                        <div className="header__phone">
                            <div className="header__phone__logo"></div>
                            <p className="header__phone__text">8 927 000 00 00</p>
                        </div>
                    </div>
                    <nav className="header__body__nav navigate">
                        <ul>
                            <div className="navigate__link">
                                <li className="navigate__main" onClick={(event) => navigateFunc(event, '/')}>
                                    <span>Главная</span>
                                    <div className="navigate__clue">
                                        <div className="navigate__clue__links">
                                            <Link className="navigata__clue_link" to="/about-company">О компании</Link>
                                            <Link className="navigata__clue_link" to="/catalog">Каталог</Link>
                                            <Link className="navigata__clue_link" to="/cooperation">Сотрудничество</Link>
                                            <Link className="navigata__clue_link" to="/services">Сервисы</Link>
                                            <Link className="navigata__clue_link" to="/news">Последние новости</Link>
                                            <Link className="navigata__clue_link" to="/vacancies">Вакансии</Link>
                                        </div>
                                        <div className="navigate__clue__image"></div>
                                    </div>
                                </li>
                            </div>
                            <div className="navigate__link" onClick={(event => navigateFunc(event, "/about-company"))}>
                                <li className="navigate__about-cmp">
                                    <span>О компании</span>
                                    <div className="navigate__clue">
                                        <div className="navigate__clue__links">
                                            <Link className="navigata__clue_link" to="/about-company">О компании</Link>
                                            <Link className="navigata__clue_link" to="/mission">Миссия компании</Link>
                                        </div>
                                    </div>
                                </li>
                            </div>
                            <div className="navigate__link" onClick={(event => navigateFunc(event, "/catalog"))}>
                                <li className="navigate__catalog">
                                    <span>Каталог</span>
                                    <div className="navigate__clue">
                                        <div className="navigate__clue__links">
                                            <Link className="navigata__clue_link" to="/catalog/catalog-item">Моторное масло</Link>
                                            <Link className="navigata__clue_link" to="/catalog/catalog-item">Транс. масло</Link>
                                            <Link className="navigata__clue_link" to="/catalog/catalog-item">Спец. продукты</Link>
                                            <Link className="navigata__clue_link" to="/catalog/catalog-item">Гидрав. масло</Link>
                                            <Link className="navigata__clue_link" to="/catalog/catalog-item">Смазки</Link>
                                            <Link className="navigata__clue_link" to="/catalog/catalog-item">Охладители</Link>
                                            <Link className="navigata__clue_link" to="/catalog/catalog-item">Тормоз. жидкость</Link>
                                        </div>
                                        <div className="navigate__clue__image"></div>
                                    </div>
                                </li>
                            </div>
                            <div className="navigate__link" onClick={(event => navigateFunc(event, "/cooperation"))}>
                                <li className="navigate__cooperation">
                                    <span>Сотрудничество</span>
                                    <div className="navigate__clue">
                                        <div className="navigate__clue__links">
                                            <Link className="navigata__clue_link" to="/cooperation/purchase">Закупка</Link>
                                            <Link className="navigata__clue_link" to="/cooperation/distribution">Дистрибуция</Link>
                                        </div>
                                        <div className="navigate__clue__image"></div>
                                    </div>
                                </li>
                            </div>
                            <div className="navigate__link" onClick={(event => navigateFunc(event, "/services"))}>
                                <li className="navigate__services">
                                    <span>Сервисы</span>
                                    <div className="navigate__clue">
                                        <div className="navigate__clue__links">
                                            <Link className="navigata__clue_link" to="/services/lube-assistant" >LubeAssistant</Link>
                                            <Link className="navigata__clue_link" to="/services/lube-support">LubeSupport</Link>
                                            <Link className="navigata__clue_link" to="/services/lube-trainer">LubeTrainer</Link>
                                            <Link className="navigata__clue_link" to="/services/video-check">Video-Check</Link>
                                        </div>
                                        <div className="navigate__clue__image"></div>
                                    </div>
                                </li>
                            </div>
                            <div className="navigate__link" onClick={(event => navigateFunc(event, "/contacts"))}>
                                <li><span>Контакты</span></li>
                            </div>
                            <div className="navigate__link" onClick={(event => navigateFunc(event, "/news"))}>
                                <li><span>Новости</span></li>
                            </div>
                        </ul>
                    </nav>
                </div>
                <div className="header__right">
                    <button className="header__phone-button phone-button" onClick={() => popupSwitcher('form-open')}>Заказать звонок</button>
                    <input type="text" className="header__search" placeholder="Найти..."/>
                    <div className={`header__burger-btn ${isBurgerOpen ? 'open' : null}`} onClick={burgerMenuSwitcher}>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;