import React, { useRef } from 'react'

function Events() {
  let firstNameInputRef=useRef();
  let lastNameInputRef=useRef();
  let engInputRef = useRef();
  let telInputRef = useRef();
  let hinInputRef = useRef();
  let mathInputRef = useRef();
  let sciInputRef = useRef();
  let socInputRef = useRef();
  let resultParaRef=useRef();
   
  return (

  <form className="fm">

    <div className="frm">

        <div>
        <label className="abc">FirstName</label>
        <input type="text" ref={firstNameInputRef}></input>
        </div>

        <div>
         <label className="abc">LastName</label>
         <input type="text" ref={lastNameInputRef}></input>
        </div>

        <div>
            <label className="abc">English</label>
            <input type="number" ref={engInputRef}></input>
        </div>

        <div>
            <label className="abc">Telugu</label>
            <input type="number" ref={telInputRef}></input>
        </div>

        <div>
        <label className="abc">Hindi</label>
        <input type="number" ref={hinInputRef}></input>
        </div>

        <div>
        <label className="abc">Maths</label>
        <input type="number" ref={mathInputRef}></input>
        </div>

        <div>
        <label className="abc">Science</label>
        <input type="number" ref={sciInputRef}></input>
        </div>

        <div>
        <label className="abc">Social</label>
        <input type="number" ref={socInputRef}></input>
        </div>

        <div>

          <button type="button" onClick={()=>{
                  
                  let firstName = firstNameInputRef.current.value;
                   let lastName= lastNameInputRef.current.value;
                  let engMarks=Number(engInputRef.current.value);
                  let telMarks=Number(telInputRef.current.value); 
                  let hinMarks=Number(hinInputRef.current.value);
                  let mathMarks=Number(mathInputRef.current.value);
                  let sciMarks=Number(sciInputRef.current.value);
                  let socMarks=Number(socInputRef.current.value);
                  let totalMarks= engMarks+telMarks+hinMarks+mathMarks+sciMarks+socMarks

                  alert(`TotalMarks are ${totalMarks}`);
                   resultParaRef.current.innerHTML= `${firstName}${lastName} got totalMarks are ${totalMarks}`;
    
            
          }}>Calculate Result</button>

        </div>
        
        <p ref={resultParaRef}>Please Enter Value and Click Calculate</p>
    </div>
  
  </form>     
  )
}
export default Events

