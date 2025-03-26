import { use } from "react"
import Friend from "./Friend";

export default function Friends({friendsPromise}){
    const freinds = use(friendsPromise);
    console.log(freinds)
    return(
        <div className="card">
            <h3>Friends: {freinds.length} </h3>
            {
                freinds.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    )
}