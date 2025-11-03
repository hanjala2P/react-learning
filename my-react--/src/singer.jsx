export default function Singer({singer}){
    console.log(singer)
    return(
        <div className="border">
            {/* <h2>ID : {singer.id}</h2> */}
            <h3>Name : {singer.name}</h3>
            <p>Age : {singer.age}</p>
        </div>

    )
}