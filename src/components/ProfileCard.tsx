type ProfileCardProps = {
    name?: string;
    year: number;
    job: string;
    addr?: string;
}

const ProfileCard = (props: ProfileCardProps) => {

    const {name =  "Anonymous", year, job} = props;
    // type script kod umum
    return (
        <div className="card">
            <p>Name: {name}</p>
            <p>Birth Year: {year}</p>
            <p>Job: {job}</p>

            {
                //if ternary -> kode umum
                // props.addr ? <p>Addr: {props.addr}</p> : null

                //lebih sederhana Advance
                props.addr && <p>Addr: {props.addr}</p>

            }
        </div>
    );


     // javascript umum, bisa kasih default value di cons property valuenya tetapi dibikin nullable dulu attribut di atas
    //  const {name, year, job, addr} = props;
    //  return (
    //     <div className="card">
    //         <p>Name: {name}</p>
    //         <p>Birth Year: {year}</p>
    //         <p>Job: {job}</p>

    //         {
    //             //if ternary -> kode umum
    //             // props.addr ? <p>Addr: {props.addr}</p> : null

    //             //lebih sederhana Advance
    //             props.addr && <p>Addr: {props.addr}</p>

    //         }
    //     </div>
    // );
};

export default ProfileCard;