import ReactDOM from "react-dom";
import React, {useState, Component} from "react";
import axios from "axios";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../../css/app.css'
import ChangeData from "./ChangeData";





class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: [],
            Table: ''
        }
    }

    DeleteData = (id) => {
        axios.post('/DeleteWorker', {
            id: id,
        }).then(() => {
            this.GetData()
        })
    }


    GetData = () => {


        axios.get('/GetData').then(r => {


            let Temp = r.data.map(i =>
                <tr key={i.id}>
                    <th scope="row">{i.id ==null?'Нет Данных': i.id }</th>
                    <td>{i.FullName==null?'Нет Данных':i.FullName}</td>
                    <td>{i.Age==null?'Нет Данных':i.Age}</td>
                    <td>{i.Email==null?'Нет Данных':i.Email}</td>
                    <td>{i.PhoneNumber==null?'Нет Данных':i.PhoneNumber}</td>

                    <td>
                        <Popup trigger={<button className="btn btn-success"> Дополнительные данные</button>} modal >
                           <div className='w-100 h-100'>
                               <div >
                                   <h1>Основные данные</h1>
                                   <hr/>
                                   <p>Имя, Фамилия, отчество - {i.FullName==null?'Нет Данных':i.FullName}</p>
                                   <p>Возраст - {i.Age==null?'Нет Данных':i.Age}</p>
                                   <p>Email - {i.Email==null?'Нет Данных':i.Email}</p>
                                   <p>Телефонный номер - {i.PhoneNumber==null?'Нет Данных':i.PhoneNumber}</p>
                                   <p>Страна - {i.Country==null?'Нет Данных':i.Country}</p>
                                   <p>Специализация - {i.JobTitle==null?'Нет Данных':i.JobTitle}</p>
                               </div>

                           </div>
                        </Popup>
                    </td>
                    <td>

                            <Popup trigger={<button className="btn btn-primary">Изменить Данные</button>} modal >
                            <ChangeData Data={i}/>
                            </Popup>


                    </td>
                    <td>
                        <button className="btn btn-danger" onClick={() => {
                            this.DeleteData(i.id)
                        }}>Удалить Данные
                        </button>
                    </td>
                </tr>)
            this.setState({
                Data: [r.data],
                Table: Temp
            });
        })

    }


    componentDidMount() {
        this.GetData();
    }

    render() {
        return (
            <div>


                <div className="mx-lg-4 p-3 card">
                    <div className="d-flex  items-center justify-content-between">
                        <h1 className='w-auto'>Добро пожаловать</h1>
                        <a href="/Worker/Create">
                            <button className=' btn flex  btn-primary'> Создать нового юзера</button>
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
                            <tbody>{this.state.Table}</tbody>
                        </table>

                    </div>
                </div>
            </div>
        );
    }
}

export default Table;


if (document.getElementById('TableStart')) {
    ReactDOM.render(<Table/>, document.getElementById('TableStart'));
}
