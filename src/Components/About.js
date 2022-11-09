import React,{useState} from 'react'

const About = () => {
    const [name,setName] = useState("");
  return (
    <div>
        <center>
      <h1>Hello Dude</h1>
      Name : {name} name
      <br></br>
      <input  type="text" name="name" onChange={(e)=>{setName(e.target.value)}} />
    </center>
    </div>
  )
}

export default About