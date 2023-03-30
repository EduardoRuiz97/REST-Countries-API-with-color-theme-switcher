import Header from "./Components/Header/Header";
import Main from "./Components/Layout/Main";
import CountriesProvider from "./Components/Store/CountriesProvider";




function App() {



  return (
    <CountriesProvider className="App">
      <Header></Header>
      <Main></Main>
    </CountriesProvider>
  );
}

export default App;
