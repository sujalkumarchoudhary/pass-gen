import { useState , useCallback, useEffect,useRef} from 'react'
import './App.css'


function App() {
  const [length, setlength] = useState(8)
  const [numberalloed, setnumberallowed] = useState(false)
  const [characterallowed, setcharacterallowed] = useState(false)
  const [password, setpassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numberalloed) {
      str += "0123456789"
    }
    if(characterallowed) {
      str += "!@#"
    }
    for(let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)
  
  },[length, numberalloed, characterallowed,setpassword])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])


useEffect(() => {passwordGenerator()}, [length, numberalloed, characterallowed, passwordGenerator])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-52 text-orange-500 bg-gray-700 '>
      <h1 className='text-white text-center'>Password Genrator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" 
        value={password}
        className="outline-none w-full py-2 px-3 bg-white text-black"
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button 
        onClick={copyPassword}
         className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={8}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setlength(e.target.value)}} />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numberalloed}
          onChange={()=>{setnumberallowed((prev)=>!prev);
            }}
          className='cursor-pointer' />
          <label>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={characterallowed}
          onChange={()=>{setcharacterallowed((prev)=>!prev);
            }}
          className='cursor-pointer' />
          <label>Characters</label> 
        </div>

      </div>
    </div>
    </>
  )
}

export default App
