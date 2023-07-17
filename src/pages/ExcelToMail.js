import TopBar from "../components/TopBar";
import BotBar from "../components/BotBar";
import ListChanger from "../components/ListChanger";

function ExcelToMail() {
  return (
    <>
    <TopBar subpage={true} subpageClass="fa-solid fa-envelope-open-text" subpageName="Excel to mail" />
    <div className="container-to-transition">
        <ListChanger/>
    </div>
    <div style={{width: "100%", position: "fixed", bottom: "0"}}>
      <BotBar/>
    </div>
    </>
  );
}

export default ExcelToMail;
