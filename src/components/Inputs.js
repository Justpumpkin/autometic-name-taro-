import React from "react";

function Inputs({ textIndex, letterIndex, nameIndex }) {
     return (
         <input type="text"
                placeholder="please fill out the form"
                className={`${nameIndex}_${textIndex}_${letterIndex}`} />
     ); 
}

export default Inputs;