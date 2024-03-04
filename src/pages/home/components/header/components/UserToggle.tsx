import React, { useState } from 'react'
import './userToggle.scss'
export default function UserToggle() {
    const [isActive, setIsActive] = useState(false);
    const toggleMenu = () => {
        setIsActive(!isActive);
    };
    return (
        <div className="action">
            <div className="profile" onClick={toggleMenu}>
                {/* <img src="./assets/avatar.jpg" /> */}
            </div>
            <div className="menu">
                {/* <button onClick={toggleMenu}>Toggle Menu</button> */}
                {/* <div className={isActive ? 'menu active' : 'menu'}> */}
                {/* <h3>Someone Famous<br />
                    <span>Website Designer</span>
                </h3> */}
                <ul>
                    <li>
                        {/* <img src="./assets/icons/user.png" /> */}
                        <a href="#">My profile</a>
                    </li>
                    <li>
                        {/* <img src="./assets/icons/edit.png" /> */}
                        <a href="#">Edit profile</a>
                    </li>
                    <li>
                        {/* <img src="./assets/icons/envelope.png" /> */}
                        <a href="#">Inbox</a>
                    </li>
                    <li>
                        {/* <img src="./assets/icons/settings.png" /> */}
                        <a href="#">Setting</a>
                    </li>
                    <li>
                        {/* <img src="./assets/icons/question.png" /> */}
                        <a href="#">Help</a></li>
                    <li>
                        {/* <img src="./assets/icons/log-out.png" /> */}
                        <a href="#">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
