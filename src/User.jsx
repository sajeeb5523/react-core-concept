export default function User({user}){
    const {name, username, email, address} = user;
    return(
        <div className="card">
            <h3>Name: {name} </h3>
            <p>Username: {username} </p>
            <p>Email: {email} </p>
            <p>City: {address.city} </p>
            <p>Zipcode: {address.zipcode} </p>
            <p></p>
        </div>
    )
}