import logo from './logo.svg';
import Header from "./components/header/header";
import Icons from "./pages/home/icons/icons";
import Information from "./pages/home/information/information";
import Button from "./pages/home/button/button";



function App() {
  return (
    <div>
      <Header/>
      <Icons/>
      <Information/>
      <Button/>
      <Information/>
      <Information/>
    </div>
  );
}

export default App;
