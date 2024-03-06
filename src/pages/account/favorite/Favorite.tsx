import React from 'react'
import './favorite.scss'
import { IonIcon } from '@ionic/react';
import { heart } from 'ionicons/icons';

export default function Favorite() {
  return (
    <div>Favorite
      <IonIcon icon={heart} />
    </div>
  )
}
