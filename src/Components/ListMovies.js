import CardMovie from "./CardMovie"

const ListMovies=({movies})=>{
    return(
        <div className="brahim">
            {
                movies.map(el => <CardMovie el={el}/>)
            }
        </div>
    )
}
export default ListMovies