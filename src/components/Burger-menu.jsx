import { useContext } from "react";
import { SiteContext } from "../context";
import { Link } from "react-router-dom";

export default function BurgerMenu() {
    const { setSubBurgerItem, burgerMenuSwitcher } = useContext(SiteContext);

    function subBurgerMenuSwitcher(openedItem) {
        burgerMenuSwitcher();
        setSubBurgerItem(openedItem);
    }

    return (
        <div className="burger-menu">
            <div className="burger-menu__burger-close burger-close" onClick={burgerMenuSwitcher}>Закрыть</div>
            <div className="burger-menu__nav">
                <ul>
                    <li className="burger-menu__link"><a onClick={() => subBurgerMenuSwitcher('main')}>Главная</a></li>
                    <li className="burger-menu__link"><a onClick={() => subBurgerMenuSwitcher('aboutCompany')}>О компании</a></li>
                    <li className="burger-menu__link"><a onClick={() => subBurgerMenuSwitcher('catalog')}>Каталог</a></li>
                    <li className="burger-menu__link"><a onClick={() => subBurgerMenuSwitcher('cooperation')}>Сотрудничество</a></li>
                    <li className="burger-menu__link"><a onClick={() => subBurgerMenuSwitcher('services')}>Сервисы</a></li>
                    <li className="burger-menu__link"><Link to="/contacts" onClick={burgerMenuSwitcher}>Контакты</Link></li>
                    <li className="burger-menu__link"><Link to="/news" onClick={burgerMenuSwitcher}>Новости</Link></li>
                </ul>
            </div>
        </div>
    )
}