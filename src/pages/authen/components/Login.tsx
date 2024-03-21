import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { loginWithGoogle } from "../../../firebase"
import apis from "@/apis";
import { useSelector } from "react-redux";
import { StoreType } from "@/store";

export default function Login() {
    const [load, setLoad] = useState(false);
    const userStore = useSelector((store: StoreType) => { return store.userStore })
    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        let data = {
            userName: (e.target as any).loginId.value,
            password: (e.target as any).password.value
        };
        apis.authen.getToken(data)
            .then(res => {
                localStorage.setItem('token', res.data.data)
                console.log("login", res)
                Modal.success({
                    title: "Welcome",
                    onOk: () => {
                        window.location.href = "/"
                    }
                })
            })
            .catch(err => {
                console.log("err", err)
                Modal.error({
                    title: "Wrong username or password",
                    okText: "Try again"
                })
            });
    }

    async function handleLoginWithGoogle() {

    }
    return (
        <div className="form-container sign-in-container">
            <form onSubmit={(e) => {
                handleLogin(e)
            }}>
                <h1 className="signIn">Sign in</h1>
                <div className="social-container">
                    <span>with</span>
                    <a style={{ cursor: "pointer" }} onClick={() => {
                        handleLoginWithGoogle()
                    }} className="social"> <i className="fab fa-google"></i>
                    </a>
                    {/* <a href="#" className="social"> <i className="fab fa-github"></i>
                    </a>
                    <a href="#" className="social"> <i className="fab fa-facebook-f"></i>
                    </a> */}
                </div>
                <span>or with your email</span>
                <label>
                    <input type="text" name="loginId" placeholder="Username" />
                </label>
                <label>
                    <input type="password" name="password" placeholder="Password" />
                </label>
                <a href="#">Forgot your password</a>
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}