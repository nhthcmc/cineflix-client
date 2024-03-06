import React from 'react'
import './watching.scss'
import { IonIcon } from '@ionic/react';
import { playCircle } from 'ionicons/icons';
export default function Watching() {
  return (
    <div>Watching
      <IonIcon icon={playCircle} />
    </div>
  )
}