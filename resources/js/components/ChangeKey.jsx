import React, {useState} from 'react';
import axios from "axios";

function ChangeKey(props) {
    const [input,SetInput]= useState(props.Country)
    const Propdata = props.Country
    const Table = props.Table
    const id = props.id
    const [IsChange, SetIsChange]=useState(true)
    const [NewData, SetNewData]=useState();
  async  function Change(){

        await axios.post('/CheckIfIsNew',{
            id:id,
            Old:Propdata,
            Table:Table,
        }).then(r=>{
            if (r.data===1){
                axios.post('/ChangeKey',{
                    id:id,
                    New:input,
                    Table:Table,
                }).then(()=>{
                    location.reload()
                    // props.ChangeData();
                    // props.Getkeys();
                })
            }
            else {
                SetNewData(r.data);
               SetIsChange(false)
            }
        })

    }
   function ForseChange(){
       axios.post('/ChangeKey',{
            id:id,
            New:input,
           Table:Table,
       }).then(()=>{
           location.reload()

       })
    }

    return (
        <div>
            {  IsChange ?
                <div className='d-flex mx-3'>
                    <input type='text' className='form-control mx-3' onChange={event =>SetInput(event.target.value)} value={input}/>
                    <button className='btn btn-primary' onClick={()=>Change(input,Propdata)}>Изменить</button>
                </div>
                :
                <div>
                    <h3>Внимание, новые данные </h3>
                    <p className='text-center'>{NewData}</p>
                    <div className='d-flex justify-content-between'>
                        <button className='btn btn-danger' onClick={()=>ForseChange()}>Изменить</button>
                        <button className='btn btn-primary' onClick={()=>location.reload()}>Оставить</button>
                    </div>


                </div>
            }
        </div>




    );
}

export default ChangeKey;
