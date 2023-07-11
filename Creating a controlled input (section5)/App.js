import React from 'react';
// Udemy's code editor is a little weird... We do *not* need an 'import {useState}' line

function App() {
    const[term,setTerm]=useState('')
    const handleEvent=(event)=>{
        setTerm(event.target.value)
    }
    return (
        <div>
          <div>
            Enter some text
          </div>
          <input value={term} onChange={handleEvent}/>
          <h3>Your Text</h3>
          <p>
            {term}
          </p>
        </div>
    );
}

const useState = React.useState;
export default App;
