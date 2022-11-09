import { useEffect, useState } from "react"
import { Button,Modal,Form } from "react-bootstrap";
import { Rating } from "@mui/material";

const EditMovie=({el,movies,setMovies})=>{
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const [titre,setTitre]= useState(el.title)
    const [desc,setDesc] = useState(el.description)
    const [pic,setPic] = useState(el.posterURL)
    const [rate,setRate] = useState(el.rating)

    useEffect(()=>{
      setTitre(el.title)
      setPic(el.posterURL)
      setDesc(el.description)
      setRate(el.rating)
    },[el])

    const handleEdit=(a)=>setMovies( movies.map(el=> el.id ==a ? {...el,title : titre, description :desc,posterURL:pic,rating : rate}:el)) 
    return(
        <>
        <Button variant="primary" onClick={handleShow}>
          Edit Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control value={titre} onChange={(e)=>setTitre(e.target.value)} type="text" placeholder="Enter title" />       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control value={desc} onChange={(e)=>setDesc(e.target.value)} type="text" placeholder="Enter description" />       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Picture</Form.Label>
        <Form.Control value={pic} onChange={(e)=>setPic(e.target.value)} type="text" placeholder="Enter picture" />       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rate</Form.Label>
        <br/>    
        <Rating value={rate} name="simple-controlled"onChange={(e)=>setRate(e.target.value)}/>
        {/* <Form.Control onChange={(e)=>setRate(e.target.value)} type="text" placeholder="Enter title" />        */}
      </Form.Group>

      
    </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{handleEdit(el.id);handleClose()}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default EditMovie