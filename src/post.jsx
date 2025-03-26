export default function Post({post}){
    const {title, body} = post;
    return(
        <div className="card">
            <p>Body: {title}</p>
            <p>Title: {title}</p>
        </div>
    )
}