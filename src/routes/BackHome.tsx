import { Modal } from 'antd';

export default function BackHome() {
    Modal.error({
        content: "Permission denied",
        okText: "Back home",
        onOk: () => {
            window.location.href = "/"
        }
    })
    return (
        <></>
    )
}