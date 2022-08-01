import ReactDOM from "react-dom";
import React, {useMemo, useState} from "react";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import Select from 'react-select'
import countryList from 'react-select-country-list'

function CreateUser() {

    const [FullName, SetFullName] = useState('')
    const [Age, SetAge] = useState(0)
    const [Email, SetEmail]=useState('')
    const [PhoneNumber, SetPhoneNumber] = useState('')
    const [Country, SetCountry] = useState('')
    const [JobTitle, SetJobTitle] = useState('')

    const options = useMemo(() => countryList().getData(), [])


    async function Check(Name, Age,Email,Phone, Country, Job) {

        axios.post('/CreateWorker', {
            FullName: Name,
            Age: Age,
            Email: Email,
            PhoneNumber: Phone,
            Country: Country.label,
            JobTitle:Job,
        }).then(r=>{
            console.log('fdsfsd')
            }
        )
}

   const CountryStyle = {
       option: (provided, state) => ({
           ...provided,
           color: state.isSelected ? 'red' : 'blue',
           padding: 10,
       }),

       control: (provided,state) => ({
           ...provided,
           background:'#f8fafc',
           // none of react-select's styles are passed to <Control />

       }),
   }

    const changeHandler = Country => {
        SetCountry(Country)
    }

    return (
       <div className='content mx-lg-4'>
           <div className="mb-3">
               <label  className="form-label">Фамилия, Имя, Отчество</label>
               <input type="text" value={FullName} onChange={event => SetFullName(event.target.value)} className="form-control"/>

           </div>
           <div className="mb-3">
               <label  className="form-label">Возраст</label>
               <input type="number" value={Age} onChange={event => SetAge(event.target.value)}  className="form-control"/>
           </div>

           <div className="mb-3">
               <label  className="form-label">Email</label>
               <input type="email" value={Email} onChange={event => SetEmail(event.target.value)} className="form-control" aria-describedby="emailHelp"/>

           </div>

           <div className="mb-3">
               <label  className="form-label">Номер Телефона</label>
               <PhoneInput
                   placeholder="Введите телефонный номер"
                   value={PhoneNumber}

                   onChange={SetPhoneNumber}/>
           </div>

           <div className="mb-3">
               <label  className="form-label">Страна</label>
               <Select styles={CountryStyle} options={options} value={Country} placeholder={'Выбрать'} onChange={changeHandler} />
           </div>
           <div className="mb-3">
               <label  className="form-label">Должность</label>
               <input type="text" value={JobTitle} onChange={event => SetJobTitle(event.target.value)} className="form-control"/>
           </div>


           <button type="submit" onClick={()=>{
           Check(FullName,Age,Email,PhoneNumber,Country,JobTitle)
           }} className="btn btn-primary">Submit</button>
       </div>
    );
}

export default CreateUser;

if (document.getElementById('CreateUser')) {
    ReactDOM.render(<CreateUser />, document.getElementById('CreateUser'));
}
