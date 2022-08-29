import React from 'react';
import StatusListStyles from './StatusList.module.css';
const StatusList = (props) => {

    return (
        <div className='row mt-4 scroll'>
            {props.status == 'pending' ? <h2>Pending List</h2 > : <h2>Completed List</h2>}
            <div className={`${StatusListStyles.exp} `}>

                {props.tasks.map((task, i) => (

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
                                        onClick={() => props.doneHandler(task, i)}>
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