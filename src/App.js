import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [messageText, setMessageText] = useState("");
  const [subtext, setSubtext] = useState("");
  useEffect(()=>{
    setMessageText("joeegan.dev");
    setSubtext("coming soon");
  },[]);
  
  return (
    <div className='App full-height'>
      <div className='container-fluid bg-dark'>
          <div className='row'>
            <div className='col-md-2'></div>
            <div class="col-md-8 ">
                <div className='my-4 display-1 text-center'>
                  {messageText}
                  
                </div>
                <hr/>
                <div className='mt-3 display-5 text-center pb-5'>
                  {subtext}

              </div>
            </div>
            <div className='col-md-2'></div>
          </div>
        </div>
    </div>
  );
}

export default App;
