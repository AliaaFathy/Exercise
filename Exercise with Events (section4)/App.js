import React from 'react';

function App() {
    const handleClick=()=>{
        console.log("Hello there!")
    }
    return (
        <div>
            <button onClick={handleClick}>Click Me!</button>          
        </div>
    );
}

export default App;
