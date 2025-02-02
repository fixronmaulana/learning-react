type HeaderProps  = {
    header: string;
}

function Header(props: HeaderProps) {
    return (
        <div>
            <h1>JUDUL: {props.header}</h1>
        </div>
    )
}

export default Header;