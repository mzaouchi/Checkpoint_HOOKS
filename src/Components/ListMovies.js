import CardMovie from "./CardMovie"

const ListMovies=({movies,setMovies,textP,brahimP})=>{
    var x = movies.filter(el=> el.title.toUpperCase().includes(textP.toUpperCase()) && el.rating >= brahimP)
    return(
        <div className="brahim">
            {
                
                x.length == 0 ? <h1>Mouch mawjoud</h1> : x.map(el => <CardMovie el={el} movies={movies} setMovies={setMovies}/>)
                
                // .map(el => <CardMovie el={el} movies={movies} setMovies={setMovies}/>)
            }
        </div>
    )
}
export default ListMovies