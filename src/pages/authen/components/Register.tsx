import React from "react";
import { Modal } from 'antd'
import apis from "@/apis";

export default function Register({ containerRef }: {
    containerRef: any
}) {
    async function handleRegister(e: React.FormEvent) {
        e.preventDefault();
        try {
            let newUser = {
                userName: (e.target as any).userName.value,
                email: (e.target as any).email.value,
                password: (e.target as any).password.value
            };
            await apis.authen.createUser(newUser)
            Modal.success({
                title: "Thành công",
                onOk: () => {
                    containerRef.current.classList.remove("right-panel-active");
                }
            })
        } catch (err) {
            console.log("err", err)
            Modal.error({
                title: "Đăng kí không thành công",
                okText: "Thử lại"
            })
        }
    }
    return (
        <div className="form-container sign-up-container">
            <form onSubmit={(e) => {
                handleRegister(e)
            }}>
                <h1 className="signUp">Sign Up</h1>
                {/* <div className="social-container">
                    <a href="#" className="social">
                        <i className="fab fa-google" />
                    </a>
                    <a href="#" className="social">
                        <i className="fab fa-github" />
                    </a>
                    <a href="#" className="social">
                        <i className="fab fa-facebook-f" />
                    </a>
                </div> */}
                <span>Register with your email
                    <label>
                        <input required type="text" name="userName" placeholder="Username" />
                    </label>
                    <label>
                        <input required type="email" name="email" placeholder="Email" />
                    </label>
                    <label>
                        <input required type="password" name="password" placeholder="Password" />
                    </label>
                    <button type="submit" style={{ marginTop: '9px' }}>Sign Up</button>
                </span>
            </form>
        </div>
    )
}