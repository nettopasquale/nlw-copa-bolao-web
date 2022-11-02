export function Tweet(props: any){
    return(
        <div>
            <h1>Tweet</h1>
            <p>{props.text}</p>
            <button>Curtir</button>
        </div>
    )
}