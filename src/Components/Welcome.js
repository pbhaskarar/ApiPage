import React,{useState}from 'react'

const Welcome = () => {
    const [data,setData]= useState({
        email : "",
        password : ""
    });
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e =>{
        e.preventDefault();
       if(data.password.length <5){
        alert("password too small")
       }
       else{
        console.log(data)
       }
    }

  return (
    <div>
        <center><h1>Here is the form to login</h1></center>
        <center>
            <form onSubmit={submitHandler}>
                <label style={{color :"red"}}> Email</label>
                <input  type="text" name="email" onChange={changeHandler} /><br></br>
                <label> password</label>
                <input type="password" name="password"  onChange={changeHandler} /><br></br>
                <input type="submit" value="login" />
            </form>
        </center>
    </div>
  )
}

export default Welcome