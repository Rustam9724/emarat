export const subBurgerItems = {
    main: {
        header: 'Главная',
        headerLink: '/',
        items: [
            {
                name: 'О компании',
                link: '/about-company'
            },
            {
                name: 'Каталог',
                link: '/catalog',
            },
            {
                name: 'Сотрудничество',
                link: '/cooperation',
            },
            {
                name: 'Сервисы',
                link: '/services',
            },
            {
                name: 'Новости',
                link: '/news',
            },
            {
                name: 'Вакансии',
                link: '/vacancies',
            }
        ] 
    },
    catalog: {
        header: 'Каталог',
        headerLink: '/catalog',
        items: [
            {
                name: 'Мотороное масло',
                link: '/catalog/catalog-item',
            },
            {
                name: 'Транс. масло',
                link: '/catalog/catalog-item',   
            },
            {
                name: 'Спец. продукты',
                link: '/catalog/catalog-item',   
            },
            {
                name: 'Гидрав. масло',
                link: '/catalog/catalog-item',   
            },
            {
                name: 'Смазки',
                link: '/catalog/catalog-item',   
            },
            {
                name: 'Охладители',
                link: '/catalog/catalog-item',   
            },
            {
                name: 'Тормоз. жидкость',
                link: '/catalog/catalog-item',   
            }
        ]
    },
    aboutCompany: {
        header: 'О компании',
        headerLink: '/about-company',
        items: [
            {
                name: 'О компании',
                link: '/about-company',
            },
            {
                name: 'Миссия компании',
                link: '/mission'
            }
        ]
    },
    cooperation: {
        header: 'Сотрудничество',
        headerLink: '/cooperation',
        items: [
            {
                name: 'Закупка',
                link: '/cooperation/purchase',
            },
            {
                name: 'Дистрибуция',
                link: '/cooperation/distribution'
            }
        ]
    },
    services: {
        header: 'Сервисы',
        headerLink: '/services',
        items: [
            {
                name: 'LubeAssistant',
                link: '/services/lube-assistant'
            },
            {
                name: 'LubeSupport',
                link: '/services/lube-support',
            },
            {
                name: 'LubeTrainer',
                link: '/services/lube-trainer',    
            },
            {
                name: 'Video-Check',  
                link: '/services/video-check',
            }
        ]
    }
}