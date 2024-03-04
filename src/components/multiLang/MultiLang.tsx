import './multiLang.scss'

export default function MultiLang() {
    return (
        <div className="switch">
            <input id="language-toggle" className="check-toggle check-toggle-round-flat" type="checkbox" />
            <label htmlFor="language-toggle"></label>
            <span className="on">VI</span>
            <span className="off">EN</span>
        </div>
    )
}
