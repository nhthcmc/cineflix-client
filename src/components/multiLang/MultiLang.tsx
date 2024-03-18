import './multiLang.scss'
import { useTranslation } from 'react-i18next'
// import React from 'react'
import langVI from './vi.png'
import langEN from './en.png'
import { Button, Dropdown } from 'antd';
import React, { useState, ChangeEvent } from 'react';

// const itemMain = [
//     {
//         key: 'vi-VI',
//         label: (
//             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                 <img style={{ width: "30px", height: "30px", borderRadius: "50%" }} src={langVI} /> <pre>Tiếng Việt</pre>
//             </div>
//         ),
//         title: "Tiếng Việt",
//         icon: langVI
//     },
//     {
//         key: 'en-EN',
//         label: (
//             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                 <img style={{ width: "29px", height: "29px", borderRadius: "50%" }} src={langEN} />  <span>English</span>
//             </div>
//         ),
//         title: "English",
//         icon: langEN
//     }
// ];

export default function MultiLang() {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState('vi-VN');

    const handleChangeLanguage = (evt: ChangeEvent<HTMLSelectElement>) => {
        const lang = evt.target.value;
        setLanguage(lang);
        i18n.changeLanguage(lang);
    };

    //     const handleGetNowLanguage = () => {
    //         let language = itemMain.find(item => item.key == i18n.language);
    //         return language
    //     }

    //     const handleChangeLanguage = (lng) => {
    //         i18n.changeLanguage(lng)
    //         localStorage.setItem("locales", lng)
    //     }
    //     const items = [
    //         {
    //             key: 'vi-VN',
    //             label: (
    //                 <div onClick={() => {
    //                     handleChangeLanguage("vi-VN")
    //                 }} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    //                     <img style={{ width: "30px", height: "30px", borderRadius: "50%" }} src={langVI} /> <pre>    Tiếng Việt</pre>
    //                 </div>
    //             )
    //         },
    //         {
    //             key: 'en-EN',
    //             label: (
    //                 <div onClick={() => {
    //                     handleChangeLanguage("en-EN")
    //                 }} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    //                     <img style={{ width: "29px", height: "29px", borderRadius: "50%" }} src={langEN} />  <span>English</span>
    //                 </div>
    //             )
    //         }
    //     ];
    return (
        //         <Dropdown
        //             menu={{
        //                 items,
        //             }}
        //             placement="bottomLeft"
        //             arrow
        //         >
        //             <Button>
        //                 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        //                     <img style={{ width: "20px", height: "20px", borderRadius: "50%" }} src={handleGetNowLanguage().icon} /> <pre>    {handleGetNowLanguage().title}</pre>
        //                 </div>
        //             </Button>
        //         </Dropdown>
        <div className="switch">
            <input id="language-toggle" className="check-toggle check-toggle-round-flat" type="checkbox" />
            <label htmlFor="language-toggle"></label>
            <span className="on">VI</span>
            <span className="off">EN</span>
        </div>
    )
}