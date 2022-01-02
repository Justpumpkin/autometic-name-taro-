import React from "react";

function InputForms({ index }) {
    return (
        <>
            <div id={`${index}Name`}>
                <span>{index} Name</span>
                <div class="firstText">
                    <Inputs textIndex={1} letterIndex={1} nameIndex={index} />
                    <Inputs textIndex={1} letterIndex={2} nameIndex={index} />
                    <Inputs textIndex={1} letterIndex={3} nameIndex={index} />
                </div>

                <div class="secondText">
                    <Inputs textIndex={2} letterIndex={1} nameIndex={index} />
                    <Inputs textIndex={2} letterIndex={2} nameIndex={index} />
                    <Inputs textIndex={2} letterIndex={3} nameIndex={index} />
                </div>

                <div class="thirdText">
                    <Inputs textIndex={3} letterIndex={1} nameIndex={index} />
                    <Inputs textIndex={3} letterIndex={2} nameIndex={index} />
                    <Inputs textIndex={3} letterIndex={3} nameIndex={index} />
                </div>
            </div>
        </>
    );
}

export default InputForms();