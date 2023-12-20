import { useState,useMemo, useEffect } from "react"

export default function DoubleCard(){
    const [number,setNumber] = useState(0);
    const [dark,setDark]=useState(true);



    const doubleData = ()=>{
        for (let i = 0; i < 1000000000; i++) {}
        return number**2
    }
    
    const handleTheme = ()=>{
        setDark((prev)=>{
            return !prev;   
        })
    }
    let newData=useMemo(() =>{
        return doubleData();
    } 
    , [number])
    const style = useMemo(()=>{
        return {
            backgroundColor:dark?"white":"black",
    
            color:!dark?"white":"black"
        }
    },[dark])
    useEffect(()=>{
        console.log("style");
    },[style])

    return (
        <div style={style} className="vh-100">
            <input type='number' value={number} onChange={(e)=>{setNumber(e.target.value)}} />
            <h1 >{number}</h1>
            <h1 >{newData}</h1>
            <button onClick={handleTheme}>Change Theme</button>
        </div>
    )
}