import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo'
import StatusList from './Components/StausList';

function App() {
  return (
    <div>
      <div className="container">
        <h1 className='mt-3 text-black'>ToDo List App</h1>
        <div className='row align-items-center mr-2'>
          <div
            style={{
              backgroundSize: 'cover'
            }}
          >
            <Todo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
