import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Authentication = () => {

 const navigate = useNavigate(); //Navigate is used to redirect people to a url 

const [formData, setFormData] = useState({
  email:"",
  password:""
})
 

const setInputValue = (e) =>{
  var name = e.target.name;
  var value = e.target.value;

  setFormData({...formData,[name]:value}) //This is how you assign value when useState variable is an object
}

  const loginFunction = async(e) => {
    e.preventDefault();
    const {email , password} = formData;

    const response = await fetch('/api/auth/login',{
      method:"POST",
      mode: 'no-cors',
      headers:{
        ContentType:"application/json"
      },
      body: JSON.stringify({email,password}) //Server doesn't understand JSON hence we need to pass data as a simple string
      //also rather than writing email: email and password:password, we can directly write email as per ECMA script 6
    });

    const data = await response.json();//we undrestand data as json so converting the string back into JSON
    console.log(data)
    if(data.status === 200)
    {
      alert("Login Success")
      navigate("/notes")
    }
    else
    {
      alert("Login failed")
    }
}

  return (
    <section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 class="title-font font-medium text-3xl text-white">Log In To Unlock The Safe To Your Dreams 💡</h1>
      <p class="leading-relaxed mt-4">Your password is protected with 256-bit encryption and even we can't access your notes🔒</p>
    </div>

    <div class="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 class="text-white text-lg font-medium title-font mb-5">Login</h2>
      <form action="post">
      <div class="relative mb-4">

        <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
        <input type="email" autoComplete="true" id="email" name="email" value={formData.email} class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={setInputValue}/>
      </div>
      <div class="relative mb-4">
        <label for="password" class="leading-7 text-sm text-gray-400">Password</label>
        <input type="password" autoComplete="true" value={formData.password} onChange={setInputValue} id="password" name="password" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button type="submit" onClick={(e)=>{loginFunction(e)}} class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
      </form>
      <p className="text-white mt-4 text-xs ml-auto cursor-pointer"><Link to="/register">Register &rarr;</Link></p>
    </div>
  </div>
</section>
  );
};

export default Authentication;
