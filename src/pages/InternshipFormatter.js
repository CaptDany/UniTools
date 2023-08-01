import TopBar from "../components/TopBar";
import BotBar from "../components/BotBar";
import DocFormatApp from "../components/DocFormatApp";

function InternshipFormatter() {
  return (
    <>
    <TopBar subpage={true} subpageClass="fa-solid fa-align-left" subpageName="Internship report formatter"/>
    <div className="container-to-transition maintc">
      <DocFormatApp/>
    </div>
    <div style={{width: "100%", position: "fixed", bottom: "0"}}>
      <BotBar/>
    </div>
    </>
  );
}

export default InternshipFormatter;
