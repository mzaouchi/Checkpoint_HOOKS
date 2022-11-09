import {Card,Button} from 'react-bootstrap'
import Rating from '@mui/material/Rating';
import EditMovie from './EditMovie';
const CardMovie=({el,movies,setMovies})=>{
  const handleDelete=(a)=> setMovies(movies.filter(el => el.id != a))
    return(
        <div  className='rami'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={el.posterURL} />
        <Card.Body>
          <Card.Title>{el.title}</Card.Title>
          <Card.Text>
            {el.description}
          </Card.Text>
          <Card.Text>
          <Rating name="read-only" value={el.rating} readOnly />
            {/* {el.rating} */}
          </Card.Text>
          <EditMovie el={el} movies={movies} setMovies={setMovies}/>
          <Button onClick={()=>handleDelete(el.id)} variant="primary">Delete</Button>
        </Card.Body>
      </Card>
      </div>
    )
}

export default CardMovie