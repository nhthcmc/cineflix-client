import React from 'react'
import './payment.scss'
import { IonIcon } from '@ionic/react';
import { wallet } from 'ionicons/icons';
export default function Payment() {
  return (
    <div>Payment
      <IonIcon icon={wallet} />
    </div>
  )
}
