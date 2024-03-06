import React from 'react'
import './setting.scss'
import images from '@/images'
import { IonIcon } from '@ionic/react';
import { settings } from 'ionicons/icons';

export default function Setting() {
  return (
    <div className='setting'>
      <IonIcon icon={settings} />
      <div className='avatar'>
        {/* <img src={userStore.data.avatar} /> */}
        <input type='file'>
        </input>
      </div>
      <div className='name'>
        <label>Name</label>
        {/* <span>{isNaN(Number(userStore.data.userName)) ? userStore.data.userName : userStore.data.email.split('@')[0]}</span> */}
        <button>Edit</button>
      </div>
      <div className='email'>
        <label>Email</label>
        {/* <span>{userStore.data.email}</span> */}
        <button>Edit</button>
      </div>
    </div>
  )
}