import { Rating } from "@mui/material";
import { useState } from "react";
import { Button,Modal,Form } from "react-bootstrap";

const AddMovie=({movies,setMovies})=>{
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const [titre,setTitre]= useState('')
    const [desc,setDesc] = useState('')
    const [pic,setPic] = useState('')
    const [rate,setRate] = useState(0)
    const handleAdd=()=> setMovies([...movies,{title : titre, description :desc,posterURL:pic,rating : rate, id : Math.random()}])
    return(
        <>
        <Button variant="primary" onClick={handleShow}>
          Add Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control onChange={(e)=>setTitre(e.target.value)} type="text" placeholder="Enter title" />       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control onChange={(e)=>setDesc(e.target.value)} type="text" placeholder="Enter description" />       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Picture</Form.Label>
        <Form.Control onChange={(e)=>setPic(e.target.value)} type="text" placeholder="Enter picture" />       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rate</Form.Label>
        <Rating name="simple-controlled"onChange={(e)=>setRate(e.target.value)}/>
        {/* <Form.Control onChange={(e)=>setRate(e.target.value)} type="text" placeholder="Enter title" />        */}
      </Form.Group>

      
    </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{handleAdd();handleClose()}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default AddMovie