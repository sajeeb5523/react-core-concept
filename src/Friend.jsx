export default function Friend( {friend} ) {
    console.log(friend); 
    const {name, username, email, phone} = friend;
    return(
        <div className="card">
            <h4>Name: {name} </h4>
            <p>Username: {username} </p>
            <p>Email: {email} </p>
            <p>Phone: {phone} </p>
        </div>
    )
}