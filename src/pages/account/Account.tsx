// import './account.scss'
// import images from '@/images'
// import Header from '../home/components/header/Header'
// import Setting from './setting/Setting'
// import Sub from './sub/Sub'
// import Payment from './payment/Payment'
// import Watching from './watching/Watching'
// import Favorite from './favorite/Favorite'
// import { useTranslation } from "react-i18next";

// export default function Account() {
//     const { t } = useTranslation();
//     return (
//         <div className='account'>
//             <Header />
//             <div className='container'>
//                 <div className='title'>
//                     <span>{t('sidebar.about')}</span>
//                 </div>
//                 <div className='title-border'></div>
//                 <Setting />
//                 <Watching />
//                 <Favorite />
//                 <Sub />
//                 <Payment />
//             </div>
//         </div>
//     )
// }


import React, { Component } from 'react';

interface Page {
    id: string;
    name: string;
    icon: string;
    children: any[];
}

interface SidebarProps {
    children: React.ReactNode;
}

interface PageViewProps {
    page: Page;
}

interface MenuItemProps {
    title: string;
    icon: string;
}

interface MenuProps {
    pages: Page[];
}

interface TitleProps {
    text: string;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    const sidebarStyle: React.CSSProperties = {
        position: 'absolute',
        width: '230px',
        height: '100%',
        background: '#2A3F54',
        zIndex: 9999,
        display: 'flex'
    };

    return (
        <div className="sidebar col-md-3" style={sidebarStyle}>
            {children}
        </div>
    );
};

const PageView: React.FC<PageViewProps> = ({ page }) => {
    const viewStyles: React.CSSProperties = {
        marginLeft: '230px',
        padding: '10px 20px 0'
    };

    return <Title text="Hello World" />;
};

const MenuItem: React.FC<MenuItemProps> = ({ title, icon }) => {
    const menuItemStyle: React.CSSProperties = {
        display: 'block',
        padding: '10px',
        color: '#fdfdfd',
        margin: '0 -15px',
        borderBottom: '1px solid rgb(35, 50, 66)'
    };

    const iconStyle: React.CSSProperties = {
        marginRight: '10px'
    };

    return (
        <a href="#" style={menuItemStyle}>
            <i className={'fa fa-fw fa-' + icon} style={iconStyle}></i>
            {title}
        </a>
    );
};

const Menu: React.FC<MenuProps> = ({ pages }) => {
    const navStyle: React.CSSProperties = {
        display: 'block',
        width: '100%'
    };

    return (
        <nav style={navStyle}>
            {pages.map((page) => {
                return <MenuItem key={page.id} title={page.name} icon={page.icon} />;
            })}
        </nav>
    );
};

const Title: React.FC<TitleProps> = ({ text }) => {
    return <div className="text-center page-header">{text}</div>;
};

class Dashboard extends Component {
    apiUrl: string;
    state: { pages: Page[] };

    constructor(props: any) {
        super(props);

        this.state = {
            pages: [
                {
                    id: '1',
                    name: 'name 1',
                    icon: 'file',
                    children: []
                },
                {
                    id: '2',
                    name: 'name 2',
                    icon: 'home',
                    children: []
                },
                {
                    id: '3',
                    name: 'name 3',
                    icon: 'clipboard',
                    children: []
                },
                {
                    id: '4',
                    name: 'name 4',
                    icon: 'code-fork',
                    children: []
                },
                {
                    id: '5',
                    name: 'name 5',
                    icon: 'database',
                    children: []
                }
            ]
        };
        this.apiUrl = 'http://57d7e44b553f1b1100113a26.mockapi.io/api/v1';
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Sidebar>
                        <Menu pages={this.state.pages} />
                    </Sidebar>
                    <PageView page={this.state.pages[0]} />
                </div>
            </div>
        );
    }
}

export default Dashboard;
