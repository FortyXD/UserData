import ReactDOM from "react-dom";
import React from "react";

function CreateUser() {
    return (
       <div className='content mx-lg-4'>
           <div className="mb-3">
               <label htmlFor="exampleInputEmail1" className="form-label">Фамилия, Имя, Отчество</label>
               <input type="text" className="form-control" aria-describedby="emailHelp"/>

           </div>
           <div className="mb-3">
               <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
               <input type="text" className="form-control" id="exampleInputPassword1"/>
           </div>
           <div className="mb-3">
               <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
               <input type="text" className="form-control" id="exampleInputPassword1"/>
           </div>
           <button type="submit" className="btn btn-primary">Submit</button>
       </div>
    );
}

export default CreateUser;

if (document.getElementById('CreateUser')) {
    ReactDOM.render(<CreateUser />, document.getElementById('CreateUser'));
}
