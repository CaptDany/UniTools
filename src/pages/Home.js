import TopBar from "../components/TopBar";
import BotBar from "../components/BotBar";
import "../stylesheets/styles.css";
import ItemList from "../components/ItemList";

function Home() {
  return (
    <>
    <TopBar subpage={false} subpageClass="fa-solid fa-envelope-open-text" subpageName="Excel to mail"/>
    <div className="home">
      <h2 className="container-to-transition">Welcome to</h2>
      <h1 className="container-to-transition">Uni Tools</h1>
    </div>
    <div className="container-to-transition" style={{marginLeft: "auto", marginRight: "auto", width:"50%"}}>
      <ItemList></ItemList>
    </div>
    <div style={{width: "100%", position: "fixed", bottom: "0"}}>
      <BotBar/>
    </div>
    </>
  );
}

export default Home;
