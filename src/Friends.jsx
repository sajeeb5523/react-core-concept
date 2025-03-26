import { use } from "react"

export default function Friends({friendsPromise}){
    const freinds = use(friendsPromise);
    console.log(freinds)
    return(
        <div className="card">
            <h3>Friends: {freinds.length} </h3>
        </div>
    )
}