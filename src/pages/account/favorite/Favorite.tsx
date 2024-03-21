import React from 'react'
import './favorite.scss'
import { IonIcon } from '@ionic/react';
import { heart } from 'ionicons/icons';

export default function Favorite() {
  return (
    <div className='favorite'>
      <div className='fav-title'>
        <span className='name'>Favorites</span>
        <IonIcon icon={heart} />
      </div>

    </div>
  )
}
