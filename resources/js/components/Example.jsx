import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Внимание</div>

                        <div className="card-body">Войдите на сайт, чтобы пользоваться приложением</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
