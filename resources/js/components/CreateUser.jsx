import ReactDOM from "react-dom";
import React, {useState} from "react";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

function CreateUser() {
    const [PhoneNumber, SetPhoneNumber] = useState()
    const [FullName, SetFullName] = useState()
    const [Age, SetAge] = useState()
    const [PhoneNumber, SetPhoneNumber] = useState()
    return (
       <div className='content mx-lg-4'>
           <div className="mb-3">
               <label htmlFor="exampleInputEmail1" className="form-label">Фамилия, Имя, Отчество</label>
               <input type="text" className="form-control" aria-describedby="emailHelp"/>

           </div>
           <div className="mb-3">
               <label htmlFor="exampleInputPassword1" className="form-label">Возраст</label>
               <input type="number" className="form-control"/>
           </div>
           <div className="mb-3">
               <label htmlFor="exampleInputPassword1" className="form-label">Номер Телефона</label>
               <PhoneInput
                   placeholder="Enter phone number"
                   value={PhoneNumber}
                   onChange={SetPhoneNumber}/>
           </div>
           <button type="submit" className="btn btn-primary">Submit</button>
       </div>
    );
}

export default CreateUser;

if (document.getElementById('CreateUser')) {
    ReactDOM.render(<CreateUser />, document.getElementById('CreateUser'));
}
