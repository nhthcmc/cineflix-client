
import { Modal, message } from "antd";
import { api } from "@/apis";
import { useSelector } from 'react-redux'
import { StoreType } from "@/store/index";

import ChatBox from "@/components/chatbox/Chatbox";
import { socketChat } from "@/chatSocket";
export default function App() {
    const userStore = useSelector((store: StoreType) => store.userStore)
    const chatStore = useSelector((store: StoreType) => store.chatStore)
    console.log('chatStore', chatStore)
    return (
        <div>
            {
                !userStore.data ? (
                    <form onSubmit={(e: React.FormEvent) => {
                        e.preventDefault();
                        let data = {
                            userName: (e.target as any).userName.value,
                            password: (e.target as any).password.value
                        }
                        api.authen.getToken(data)
                            .then(res => {
                                localStorage.setItem("token", res.data.data)
                                message.success("ok")
                            })
                            .catch(err => {
                                Modal.error({
                                    title: "Thông báo",
                                    content: `${err?.response?.data?.message.join(' ') || "Lỗi không xác định!"}`
                                })
                            })
                    }}>
                        <input type="text" placeholder="user name" name="userName" />
                        <input type="text" placeholder="password" name="password" />
                        <button type="submit">sign in</button>
                    </form>
                ) : (
                    <>
                        Chào: {userStore.data?.userName}
                        <button onClick={async () => {
                            let connect = await socketChat.connect();
                            console.log("connect", connect)
                            if (connect?.status) {
                                alert("Open chatbox" + connect.message)
                            } else {
                                alert("Cannot connect to chatbox")
                            }
                        }}>Open chatbox</button>
                        {
                            chatStore.data && (
                                <div style={{
                                    width: 500,
                                }}>
                                    <ChatBox data={chatStore.data || []} user={userStore.data} />
                                </div>
                            )
                        }
                    </>
                )
            }
        </div>
    )
}
