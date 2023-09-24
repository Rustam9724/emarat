import { subBurgerItems } from "./sub-burger-items";
import { useContext,} from "react";
import { SiteContext } from "../context";
import { Link } from "react-router-dom";

function SubBurgerMenu() {
    const {setSubBurgerItem, subBurgerItem, burgerMenuSwitcher } = useContext(SiteContext);

    function closeSubBurger(isBack) {
        const subBurgerMenu = document.querySelector('.sub-burger-menu');
        subBurgerMenu.style.animation = 'closeAnimation 0.75s ease';
        setTimeout(() => {
            setSubBurgerItem(null);
        }, 751)
        if (isBack) {
            setTimeout(() => {
                burgerMenuSwitcher();
            }, 749)
        }
    }

    let result = '';
    let title = '';
    let headerLink = '';
    if (subBurgerItem) {
        result = subBurgerItems[subBurgerItem].items.map(item => {
            return <Link className="sub-burger-menu__item" to={item.link} key={item.name} onClick={() => closeSubBurger(false)}>{item.name}</Link>
        });
        title = subBurgerItems[subBurgerItem].header;
        headerLink = subBurgerItems[subBurgerItem].headerLink;
    }
    
    return (
        <div className="sub-burger-menu">
            <div className="sub-burger-menu__navigation">
                <div className="sub-burger-menu__back" onClick={() => closeSubBurger(true)}>Назад</div>
                <div className="sub-burger-menu__burger-close burger-close" onClick={() => closeSubBurger(false)}>Закрыть</div>
            </div>
            <div className="sub-burger-menu__header">
                <Link to={headerLink} onClick={() => closeSubBurger(false)}>{title}</Link>
                <div className="sub-burger-menu__footnote"></div>
            </div>
            <ul className="sub-burger-menu__list">
                {result}
            </ul>
        </div>
    )
}

export default SubBurgerMenu;