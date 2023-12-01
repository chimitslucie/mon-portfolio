function Title({ title, subtitle, className }) {
    return (
        <div className={`titleContent ${className}`}>
            <h1 className="title">{title}</h1>
            <h2 className="subtitle">{subtitle}</h2>
        </div>
    )
}

export default Title