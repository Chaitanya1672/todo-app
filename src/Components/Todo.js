import React, { useState, useEffect } from 'react';
import StatusList from './StausList';

const Todo = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('localTasks')) {
            const storedList = JSON.parse(localStorage.getItem('localTasks'));
            setTasks(storedList);
        }
    }, [])

    // useEffect(() => {
    //     if (localStorage.getItem('localTasks')) {
    //         const storedList = JSON.parse(localStorage.getItem('localTasks'));
    //         setTasks(storedList);
    //     }
    // }, [tasks])



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
    // const clearHandler = () => {
    //     setTasks([]);
    //     localStorage.removeItem('localTasks');
    // }
    const doneHandler = (task) => {
        let index = tasks.indexOf(task)
        console.log(index);
        let obj = {
            id: task.id,
            title: task.title,
            status: 'completed'
        }
        let arr = tasks
        arr[index] = obj
        console.log(arr);
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
            {/* <div className="badge text-black">
                You have
                {!tasks.length
                    ? " no tasks"
                    : tasks.length === 1
                        ? " 1 task"
                        : tasks.length > 1
                            ? ` ${tasks.length} tasks`
                            : null}
            </div> */}

            {/* {!tasks.length ? null : (
                <div>
                    <button className='btn btn-secondary mt-4 mb-4' onClick={() => clearHandler()}>
                        clear
                    </button>
                </div>
            )} */}
            <div className='row justify-content-around'>
                <div className='col-md-5'>
                    <StatusList list={tasks} deleteHandler={deleteHandler} status={'pending'} doneHandler={doneHandler} />
                </div>
                <div className='col-md-5'>
                    <StatusList list={tasks} deleteHandler={deleteHandler} status={'completed'} />
                </div>
            </div>

        </div>
    )
}

export default Todo;