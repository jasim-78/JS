import { useState } from "react";
export default function Form()
{
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[submitted,setSubmitted]=useState(false);

    const handleName =(e)=>{
        setName(e.target.value);

    };
    const handleEmail =(e)=>{
        setEmail(e.target.value);
    };
    const handlePassword =(e)=>{
        setPassword(e.target.value);
    };
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(name===''||email===''||password==='')
        {
            alert("fill")
        }else{
            setSubmitted(true);
        }
    };
    const successmessage=()=>{
        if(submitted)
        return(
    <div className="success">
        <h1>user{name}registration successfull</h1>

    </div>
    );
    };
    return(
    <div className="form">
        <div>
            <h1>user registration</h1>
        </div>
        {/* Calling to the methods */}
        <div className="message">
            {successmessage()}
        </div>
        <form>
            <fieldset>
            <label className="lable">name</label>
            <input onChange={handleName} className="input" value={name} type="text"/><br></br>
            <label className="=lable">email</label>
            <input type="email" onChange={handleEmail} className="input" value={email} /><br></br>
            <label className="lable">password</label>
            <input type="password" onChange={handlePassword} className="input" value={password}/><br></br>
            <button onClick={handleSubmit} className="btn" type="submit">
                submit
                </button>
            </fieldset>
        </form>
        </div>
    
    




        
    );

}

