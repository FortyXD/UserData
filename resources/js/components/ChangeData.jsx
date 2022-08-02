import React from 'react';
import {useState, useMemo} from "react";
import PhoneInput from "react-phone-number-input";
import Select from "react-select";
import countryList from "react-select-country-list";
import axios from "axios";

function ChangeData(props) {


    const [FullName, SetFullName] = useState(props.Data.FullName)
    const [Age, SetAge] = useState(props.Data.Age)
    const [Email, SetEmail] = useState(props.Data.Email)
    const [PhoneNumber, SetPhoneNumber] = useState(props.Data.PhoneNumber)

    const [Country, SetCountry] = useState(props.Data.Country)
    const [JobTitle, SetJobTitle] = useState(props.Data.JobTitle)

    const [IsChange, SetIschange] = useState(true)

    function ChangeData() {

        axios.post('/GetDataById', {
            id: props.Data.id
        }).then(r => {


            if (JSON.stringify(props.Data) === JSON.stringify(r.data[0])) {
                axios.post('/UpdateData',{
                    id: props.Data.id,
                    FullName: FullName,
                    Age: Age,
                    Email: Email,
                    PhoneNumber: PhoneNumber,
                    Country: Country,
                    JobTitle:JobTitle,
                }).then(()=>{
                    alert('ok')
                })
            } else {
                SetIschange(false)

                alert('Not Ok')
            }
        })
    }

    return (
        <div className='content mx-lg-4'>
            {IsChange ?
                <div>
                    <div className="mb-3">
                        <label className="form-label">Фамилия, Имя, Отчество</label>
                        <input type="text" value={FullName} onChange={event => SetFullName(event.target.value)}
                               className="form-control"/>

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Возраст</label>
                        <input type="number" value={Age} onChange={event => SetAge(event.target.value)}
                               className="form-control"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" value={Email} onChange={event => SetEmail(event.target.value)}
                               className="form-control" aria-describedby="emailHelp"/>

                    </div>

                    <div className="mb-3">
                        <label className="form-label">Номер Телефона</label>
                        <PhoneInput
                            placeholder="Введите телефонный номер"
                            value={PhoneNumber}

                            onChange={SetPhoneNumber}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Страна</label>
                        <input value={Country} placeholder={'Выбрать'} className='form-control'
                               onChange={event => SetCountry(event.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Должность</label>
                        <input type="text" value={JobTitle} onChange={event => SetJobTitle(event.target.value)}
                               className="form-control"/>
                    </div>

                    <button type="submit" onClick={() => {
                        ChangeData()
                    }} className="btn btn-primary">Изменить данные
                    </button>
                </div>
                :
                <div>
                    <h1>Внимание - Данные изменились</h1>
                    <h1>Новые данные</h1>
                    <hr/>
                </div>


            }


        </div>
    );
}

export default ChangeData;
