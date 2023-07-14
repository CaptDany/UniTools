import TopBar from "./components/TopBar";
import ListChanger from "./components/ListChanger";
import BotBar from "./components/BotBar";

function App() {
  return (
    <>
    <TopBar/>
    <ListChanger/>
    <div style={{width: "100%", position: "fixed", bottom: "0"}}>
      <BotBar/>
    </div>
    </>
  );
}

export default App;
