const FooterButton = ({className, text, Active, id}) => {

    return (
        <button onClick={() => Active(id)} className={className}>{text}</button>
    )
}

export default FooterButton