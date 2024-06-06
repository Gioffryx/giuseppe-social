import './Style.css'
import { AppContext, IAppContext } from "../../context/AppContext";
import React, { useContext, useState } from "react";

function Navbar() {
  const [contData, setContData] = useState<string>('');
  const [contTitle, setContTitle] = useState<string>('');
  const context = useContext(AppContext)

  function clickManger(){
    if(context?.checked == false){
      context?.setChecked(true)
    }else{
      context?.setChecked(false)
    }
  }

  return (
     <div className='navbar'>   
     <h1> Gioffryx </h1>
     <button className='pulsante' onClick={clickManger} >Aggiungi post</button>
     </div>
    );
  }
  
  export default Navbar;