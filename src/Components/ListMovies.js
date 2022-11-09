import CardMovie from "./CardMovie"

const ListMovies=({movies,setMovies})=>{
    return(
        <div className="brahim">
            {
                movies.map(el => <CardMovie el={el} movies={movies} setMovies={setMovies}/>)
            }
        </div>
    )
}
export default ListMovies