import React, { useState, useEffect } from 'react';
import StatusListStyles from './StatusList.module.css';
const StatusList = (props) => {
    // const [tasks, setTask] = useState([]);
    // useEffect((
    // ) => {
    //     setTask(props.list)

    // }, [props.list])


    return (
        <div className='row mt-4'>
            {props.status == 'pending' ? <h2>Pending List</h2 > : <h2>Completed List</h2>}
            <div className={StatusListStyles.exp}
            // style={{
            //     background: `lightblue`,
            //     backgroundSize: 'cover'
            // }}
            >

                {props.list.map((task) => (

                    props.status == task.status &&
                    < React.Fragment key={task.id} >
                        <div className='row'>
                            <div className='col-md-8'>
                                <span className='form-control bg-white btn mt-2 mb-2'
                                    style={{ textAlign: 'left', fontWeight: 'bold' }}>
                                    {task.title}
                                </span>
                            </div>
                            {props.status == "pending" &&
                                <div className='col-md-2'>
                                    <button className='mt-2 btn btn-warning material-icons'
                                        onClick={() => props.doneHandler(task)}>
                                        done
                                    </button>
                                </div>}

                            < div className='col-md-2' >
                                <button className='mt-2 btn btn-warning material-icons'
                                    onClick={() => props.deleteHandler(task)}>
                                    delete
                                </button>
                            </div>
                        </div>
                    </React.Fragment>
                ))
                }
            </div >
        </div >
    )
}

export default StatusList;