import { useCallback, useRef, useEffect, useState } from "react";

function App() {

  const [length, setLength]= useState(8);
  const [nums, setNums]= useState(false);
  const [chars, setChars]= useState(false);
  const [pwd, setPwd]= useState("");

  const pwdRef= useRef(null)


  const pwdGenerator= useCallback(()=>{
    let pass= "";
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(nums) str+= "0123456789";
    if(chars) str+= "!@#$%^&*?+=-_";

    for (let i = 1; i < length; i++) 
      pass+= str.charAt(Math.floor(Math.random()* str.length+1));

    setPwd(pass);

  }, [length, nums, chars, setPwd])


  const copyPwd= useCallback(()=>{
    pwdRef.current?.select();
    window.navigator.clipboard.writeText(pwd);
  }, [pwd])


  useEffect(()=>{
    pwdGenerator();
  },[length, nums, chars, pwdGenerator])


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 pb-1 text-orange bg-gray-500">
        <h1 className="text-white text-center my-3 pt-3 font-serif font-bold text-2xl">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
            type="text"
            value={pwd}
            placeholder="password"
            className="outline-none w-full py-1 px-3"
            readOnly
            ref={pwdRef}/>

          <button
            className="outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 rounded-0"
            onClick={copyPwd}
          >Copy</button>
        </div>
        
        <div className="flex items-center gap-x-4">
          <div className="flex items-center gap-x-1">
            <input 
              type="range" 
              min={8}
              max={12}
              value={length}
              className="cursor-pointer"
              onChange={(e)=>{setLength(e.target.value)}}  
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={nums}
              id="numberInput"
              onChange={()=>{ setNums((prev)=> !prev) }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={chars}
              id="charInput"
              onChange={()=>{ setChars((prev)=> !prev) }}
            />
            <label htmlFor="charInput">Chars</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
