
import './App.css';
import Card from './Components/organis/card/card';
import { Numbers } from './Components/atoms/numbers/numbers';
import SearchBar from './Components/organis/search-bar/search-bar';


const App = () => {

  return (
    <>
      <SearchBar />
      <Card />
      <Numbers numero={10} />
    </>
  )
}


export default App;

