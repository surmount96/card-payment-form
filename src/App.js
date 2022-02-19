import { FormInput } from './lib';
import './App.css';

function App() {
  const handleInput = (value) => {
    console.log(value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="h-40 my-4 bg-white rounded-md">
          <FormInput attr="cpf-input" placeholder="5399 9089 1234 1970" handleInputValue={handleInput} />
        </div>
      </header>
    </div>
  );
}

export default App;
