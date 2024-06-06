
import './App.css';
import Navbar from './components/navbar/navbar';
import { Tpost, Post } from './types.ts/commontypes';
import { useEffect, useState } from 'react';
import { AppContext } from './context/AppContext';
import Content from './components/content/content';
import TextArea from './components/textarea';



function App() {

  const [jsonData, setJsonData] = useState<Post[] | undefined>();
  const [checked, setChecked] = useState(true)
  const propTypes = { jsonData, setJsonData, checked, setChecked };
  
  

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then(response => response.json())
      .then(json => setJsonData((json as Tpost).posts))

  }, [])
  


  return (
    <div>
    <AppContext.Provider value={propTypes}>
    <Navbar></Navbar>
    {checked && <Content></Content>}
    {!checked && <TextArea></TextArea>}
    </AppContext.Provider>
    </div>
  );
}

export default App;
