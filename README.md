## Getting Started with Card Payment Form

Powerful, lightweight and fully customizable card payment component for React apps.


### Available props 
`container, attr,placeholder,handleInputValue`

### DEMO
Link coming soon

### Installing as a package
`npm install card-payment-form`


### Usage
```ruby
import { FormInput } from 'card-payment-form';

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

```

### Props
| Name | Value | Description |
| --- | --- | --- |
| container | string |  className for outer div styling |
| attr | string | className for input styling |
| placeholder | string | An example of what you expect from the user |
| handleInputValue | function | listening to event on the component |

### Customizing

By default, `cpf-input` is available as a default styling, it's optional.
