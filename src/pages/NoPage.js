import TopBar from "../components/TopBar";
import BotBar from "../components/BotBar";
import "../stylesheets/styles.css";
import { Link } from "react-router-dom";

function NoPage() {
  return (
    <>
    <TopBar subpage={false}/>
    <h1 className="home">Error 404</h1>
    <h2 className="home">Seems that you're lost, why don't you try to find yourself?</h2>
    <Link to="/UniTools/home" className="home">Back home</Link>
    <div style={{height:"40vh"}}/>
    <div style={{display: "flex",justifyContent: "center", alignContent: "center", alignItems: "center"}}>
      <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3EzYTl1M3hxNTZ1YnBzZzVqZWMzZXliNjFzM2RzcXh4eGhrbGpxbiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/26FxrH3l4kLYR7O3C/giphy.gif" alt="lost cat"/>
    </div>
    <div style={{height:"10vh"}}/>
    <div style={{width: "100%", position: "fixed", bottom: "0"}}>
      <BotBar/>
    </div>
    </>
  );
}

export default NoPage;
