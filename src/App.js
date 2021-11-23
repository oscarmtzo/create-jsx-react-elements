
import './App.css';

/** */
import logo from './logo.svg'

function App() {
  const name = "Oscar"
  const justUpperCase = (anyName)=> {
    const setOfLetters = []
    for (let i = 0; i < anyName.length; i++) {
      setOfLetters.push(anyName[i]);
    }

    const upperLetters = setOfLetters.filter(
      (letter) => {
        if(letter == letter.toUpperCase()) {
          return letter
        }
      }
    )
    return upperLetters;
  }
  return (
    <div className="App">
      {name}
      <div>{name.toUpperCase()}</div>
      <div>{justUpperCase(name)}</div>
      <img src={logo} alt="logo image"></img>
    </div>
  );
}

export default App;
