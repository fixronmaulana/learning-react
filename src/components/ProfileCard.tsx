
const ProfileCard = () => {
    const name = "Lana";
    const year = 2003;
    const job = "Programmer";
    const address = "Kalibaru City";

    return (
        <div className="card">
            <p>Name: {name}</p>
            <p>Birth Year: {year}</p>
            <p>Job: {job}</p>
            <p>Iam living on {address} </p>
        </div>
    );
};

export default ProfileCard;