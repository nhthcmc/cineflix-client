import './account.scss'
import images from '@/images'
import Header from '../home/components/header/Header'
import Setting from './setting/Setting'
import Sub from './sub/Sub'
import Payment from './payment/Payment'
import Watching from './watching/Watching'
import Favorite from './favorite/Favorite'
import { useTranslation } from "react-i18next";

export default function Account() {
    // const { t } = useTranslation();
    return (
        <div className='account'>
            <Header />
            <div className='container'>
                {/* <div className='title'> */}
                {/* <span> */}
                {/* {t('sidebar.about')} */}
                {/* </span> */}
                {/* </div> */}
                <div className='title-border'></div>
                <div className='content'>
                    {/* <Setting /> */}
                    {/* <Watching /> */}
                    <Favorite />
                    {/* <Sub /> */}
                    {/* <Payment /> */}
                </div>
            </div>
        </div>
    )
}
