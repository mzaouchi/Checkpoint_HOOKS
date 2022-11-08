import {Card,Button} from 'react-bootstrap'
import Rating from '@mui/material/Rating';
const CardMovie=({el})=>{
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
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </div>
    )
}

export default CardMovie