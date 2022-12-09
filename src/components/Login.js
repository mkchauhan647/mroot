import {useState} from "react"

function Login({setUser}) {

    const [username,setUsername] = useState("");

    const handleOnChange =(ev) =>{
    setUsername(ev.target.value);
    console.log(ev.target.value);
    }
  
    function handleOnSubmit(e){
     e.preventDefault();
     setUser(username);


    }



 return(
    <div>
        <h2>Login</h2>
        <form onSubmit={handleOnSubmit}>
            <input onChange={handleOnChange} placeholder="Input Username"></input>
            <button type="submit">Submit</button>
            <p>{username}</p>
        </form>
    </div>
 )
}

export default Login;