import {Button, Card, FormControl, InputGroup} from "react-bootstrap";
import React from "react";

function SimpleForm() {
   return(
       <div>
           <div style={{marginBottom:"1vw"}}><Card.Title>Fill in information</Card.Title></div>
           <InputGroup className="mb-3" style={{marginTop:"2vw"}}>
               <FormControl
                   placeholder="Username"
                   aria-label="Username"
                   aria-describedby="basic-addon1"
               />
           </InputGroup>
           <InputGroup className="mb-3" style={{marginTop:"2vw"}}>
               <FormControl
                   placeholder="UserEmail"
                   aria-label="UserEmail"
                   aria-describedby="basic-addon1"
               />
           </InputGroup>
           <InputGroup className="mb-3" style={{marginTop:"2vw"}}>
               <FormControl
                   placeholder="WhatsApp/Telegram"
                   aria-label="WhatsApp/Telegram"
                   aria-describedby="basic-addon1"
               />
           </InputGroup>

           <div style={{textAlign:"center",}}>
               <Button className="col-lg-3 col-md-3 col-5" variant="primary" style={{marginTop:'1vw',backgroundColor:"lightblue",border:"none",padding:"10px 10px"}}>Submit</Button>
           </div>
       </div>
   )
}
export default SimpleForm