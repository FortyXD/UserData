import ReactDOM from "react-dom";
import React, {useState} from "react";
import axios from "axios";





 function Table() {



    const [Data,Setdata]=useState()

    // axios.get('/GetData').then(r=>{
    //     Setdata(r)
    // })
    //
    //
    // const Table = Data.map(r=>
    // <tr>
    //     <th scope="row">{r.id}</th>
    //     <td>{r.FullName}</td>
    //     <td>{r.Age}</td>
    //     <td>{r.Email}</td>
    //     <td>{r.PhoneNumber}</td>
    //     <td>Доп Инфо</td>
    //     <td>Изменить Данные</td>
    //     <td>Удалить данные</td>
    //
    // </tr>)
    return (
        <div>
                    <div className="mx-lg-4 p-3 card">
                        <div className="d-flex  items-center justify-content-between">
                            <h1 className='w-auto'>Добро пожаловать</h1>
                            <a href="/Worker/Create">
                                <button className=' btn flex  btn-primary' > Создать нового юзера</button>
                            </a>

                        </div>

                        <div className="card-body">

                            <table className="table">
                                <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">Полное Имя</th>
                                    <th scope="col">Возраст</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Номер телефона</th>
                                    <th scope="col">Дополнительная информация</th>
                                    <th scope="col">Изменить данные</th>
                                    <th scope='col'>удалить данные</th>

                                </tr>
                                </thead>
                                <tbody>
                                {/*{Table}*/}
                                </tbody>
                            </table>

                        </div>
                    </div>
        </div>
    );
}

export default Table;

if (document.getElementById('TableStart')) {
    ReactDOM.render(<Table />, document.getElementById('TableStart'));
}
