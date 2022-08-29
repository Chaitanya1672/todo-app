import React, { useState, useEffect } from 'react';
import StatusList from './StatusList';

const Todo = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('localTasks')) {
            const storedList = JSON.parse(localStorage.getItem('localTasks'));
            setTasks(storedList);
        }
    }, [])

    const addTask = (e) => {
        if (task) {
            const newTask = { id: new Date().getTime().toString(), title: task, status: 'pending' };
            setTasks([...tasks, newTask]);
            let taskssss = [...tasks, newTask]
            localStorage.setItem('localTasks', JSON.stringify(taskssss));
            setTask('');
        }
    };
    const deleteHandler = (task) => {
        const deleted = tasks.filter((t) => t.id !== task.id);
        setTasks(deleted);
        localStorage.setItem('localTasks', JSON.stringify(deleted));
    };
    const clearHandler = () => {
        setTasks([]);
        localStorage.removeItem('localTasks');
    }
    const doneHandler = (task) => {
        let index = tasks.indexOf(task)
        let obj = {
            id: task.id,
            title: task.title,
            status: 'completed'
        }
        let arr = [...tasks]
        arr[index] = obj
        setTasks(arr)
        localStorage.setItem('localTasks', JSON.stringify(arr));
    }
    return (
        <div className='form-group row '>
            <div className='col-10'>
                <input
                    name='task'
                    type='text'
                    value={task}
                    placeholder='Add Your Task...'
                    className='form-control'
                    onChange={(e) => setTask(e.target.value)}
                />
            </div>
            <div className=' col-2'>
                <button className='btn btn-primary form-control material-icons '
                    onClick={addTask}>
                    add
                </button>
            </div>

            <div className='row gx-5 justify-content-around'>
                <div className='col-md-6'>
                    <StatusList tasks={tasks} deleteHandler={deleteHandler} status={'pending'} doneHandler={doneHandler} />
                </div>
                <div className='col-md-6'>
                    <StatusList tasks={tasks} deleteHandler={deleteHandler} status={'completed'} />
                </div>
            </div>
            {/* <StatusList tasks={tasks.filter((task) => task.status === 'pending')} deleteHandler={deleteHandler} doneHandler={doneHandler} /> */}

            {!tasks.length ? null : (
                <div>
                    <button className='btn btn-secondary mt-4 mb-4' onClick={() => clearHandler()}>
                        clear
                    </button>
                </div>
            )}
        </div>
    )
}

export default Todo;