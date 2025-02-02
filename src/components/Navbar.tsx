type NavbarCardProps = {
    about?: string;
    stack?: string;
    service?: string;
    contact?: number;
}

const NavbarCard = (props: NavbarCardProps) => {
    
    return (
        <div className="navbar">
            <ul>
                <li>About {props.about}</li>
                <li>Stack {props.stack}</li>
                <li>Service {props.service}</li>
                <li>Contact {props.contact}</li>
            </ul>
        </div>
    )
};

export default NavbarCard;