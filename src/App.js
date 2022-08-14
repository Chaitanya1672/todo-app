import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo'

function App() {
  return (
    <div className='container border border-primary rounded mt-5'
      style={{
        background: `lightblue`,
        backgroundSize: 'cover'
      }}
    >
      <Todo />
    </div>
  );
}

export default App;
