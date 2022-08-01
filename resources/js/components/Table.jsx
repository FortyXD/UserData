import ReactDOM from "react-dom";
import React from "react";

function Table() {
    return (
        <div>
                    <div className="mx-lg-4 p-3 card">
                        <div className="d-flex  items-center justify-content-between">
                            <h1 className='w-auto'>Добро пожаловать</h1>
                            <a href="/Worker/Create">
                                <button className=' btn flex  btn-primary' > Создать нового юзера</button>
                            </a>

                        </div>

                        <div className="card-body">Будущая таблица</div>
                    </div>
        </div>
    );
}

export default Table;

if (document.getElementById('TableStart')) {
    ReactDOM.render(<Table />, document.getElementById('TableStart'));
}
