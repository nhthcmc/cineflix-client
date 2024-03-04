import { Chat, socketChat } from '@/chatSocket'
import './chatbox.scss'
import { User } from '@slices/user.slice'

export default function ChatBox({ data, user }: {
    data: Chat[],
    user: User
}) {
    console.log("dsd", Date.now())
    return (
        <div className="page-content page-container" id="page-content">
            <div className="padding">
                <div className="row container d-flex justify-content-center">
                    <div className="col-md-6">
                        <div className="card card-bordered">
                            <div
                                className="ps-container ps-theme-default ps-active-y"
                                id="chat-content"
                            >
                                {
                                    data?.map((item) => {
                                        return (
                                            item.adminId ? (
                                                <div className="media media-chat">
                                                    <img
                                                        className="avatar"
                                                        src="https://img.icons8.com/color/36/000000/administrator-male.png"
                                                        alt="..."
                                                    />
                                                    <div className="media-body">
                                                        <p>{item.content}</p>
                                                        <p className="meta">
                                                            <p>{new Date(Number(item.createAt)).getHours()}</p>
                                                        </p>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="media media-chat media-chat-reverse">
                                                    <div className="media-body">
                                                        <p>{item.content}</p>
                                                        <p className="meta">
                                                            <p>{new Date(Number(item.createAt)).getHours()}</p>
                                                        </p>
                                                    </div>
                                                </div>
                                            )
                                        )
                                    })
                                }
                                <div className="ps-scrollbar-x-rail" style={{ left: 0, bottom: 0 }}>
                                    <div
                                        className="ps-scrollbar-x"
                                        tabIndex={0}
                                        style={{ left: 0, width: 0 }}
                                    />
                                </div>
                                <div
                                    className="ps-scrollbar-y-rail"
                                    style={{ top: 0, height: 0, right: 2 }}
                                >
                                    <div
                                        className="ps-scrollbar-y"
                                        tabIndex={0}
                                        style={{ top: 0, height: 2 }}
                                    />
                                </div>
                            </div>
                            <div className="publisher bt-1 border-light">
                                <img
                                    className="avatar avatar-xs"
                                    src="https://img.icons8.com/color/36/000000/administrator-male.png"
                                    alt="..."
                                />
                                <input
                                    className="publisher-input"
                                    type="text"
                                    placeholder="Write something"
                                    onKeyDown={(e) => {
                                        if (e.code == "Enter") {
                                            let value = (e.target as any).value;
                                            socketChat.sendMessage(user.id, value)
                                        }
                                    }}
                                />
                                <span className="publisher-btn file-group">
                                    <i className="fa fa-paperclip file-browser" />
                                    <input type="file" />
                                </span>
                                <a className="publisher-btn" href="#" data-abc="true">
                                    <i className="fa fa-smile" />
                                </a>
                                <a className="publisher-btn text-info" href="#" data-abc="true">
                                    <i className="fa fa-paper-plane" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
