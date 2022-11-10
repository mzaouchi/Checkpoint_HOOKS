import { Rating } from "@mui/material";
import { Button } from "react-bootstrap";
const FilterMovie=({setTextP,setBrahimP,textP,brahimP})=>{
    const handleReset=()=>{
        setTextP('')
        setBrahimP(0)
    } 
    return(
        <>
            <input value={textP} type='text' onChange={(e)=>setTextP(e.target.value)}/>
            <Rating value={brahimP} name="simple-controlled" onChange={(e)=>setBrahimP(e.target.value)}/>
            <Button onClick={handleReset} variant="warning">Reset</Button>
        </>
    )
}

export default FilterMovie