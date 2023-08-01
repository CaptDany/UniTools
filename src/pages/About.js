import TopBar from "../components/TopBar";
import BotBar from "../components/BotBar";
import "../stylesheets/styles.css";
import flag from '../assets/images/pink-flag.png';

function About() {
    return (
      <>
    <TopBar subpage={true} subpageClass="fa-solid fa-pencil" subpageName="About"/>
    <div className="about container-to-transition">
          <h1>Set sale!</h1>
          <img src={ flag } alt="Our flag"/>
          <p>
            Welcome to Uni Tools, a project about making a contribution to our school society and making our student life less annoying. The mission of this site is to empower users and provide a centralized platform (that, of course, the school ain't gonna give us) for automating tasks, spreading information and, overall, making uni easier.
          </p>
          <h2>What do I want?</h2>
          <p>
            My vision in creating Uni Tools is to create an inclusive and collaborative environment that supports students and teachers throughout their educational journey. That and making a couple bucks for coffe and gas. Student life is rough, man. Most of all, I want this site to carry ya'll through uni, so contributing is accepted and encouraged.
          </p>
          <h2>Key Features</h2>
          <ol>
            <li>
              <strong>Excel list to mail recipients converter:</strong> Getting a list of students ready for mass mailing is a tedious task. Use this to make your teacher salary more bearable.
            </li>
            <li>
              <strong>Internship report generator:</strong> No, this does not make your job for you, but it does make it less painful. Paste your internship report in plain text and convert it to the official format in a couple of seconds. Don't let your internship adviser get on your a.
            </li>
          </ol>
          <h2>Future Developments</h2>
          <p>
            I'm very committed to continuous improvement and development. Hell, no one asked me to do this. If you need a tool, and I mean any tool (dream big), I'll commit to making it happen. Your feedback is most important, after all, this helps you as much as everyone else.
          </p>
          <img src="https://media.tenor.com/SoDUzpGFxZ8AAAAM/avax-avalanche.gif" alt="literally me"/>
          <h2>Join the crew!</h2>
          <p>
            I know, all students want is to sleep and party in their free time. But if you have a pinch of curiosity and a sense of community, You're more than invited to fly the flag. Teachers are welcome, too! Just make sure not to be too nosy about students lives, pirates have a code. Together, we can make our uni actually "technological".
          </p>
          <h2>Let's Connect</h2>
          <p>
            Have a question, suggestion, or want to contribute to the project? Write an email to st3796@utr.edu.mx or find me at school, I guess(?). If the community gets big enough, I'll make a discord server. Maybe I'll get pizzas for people, who knows.
          </p>
          <div style={{height: "700px"}}/>
          <img src="https://m.media-amazon.com/images/I/61Z457HM55L.jpg" alt="Nothing to see here" style={{height:"50px"}}/>
          <div style={{height: "80px"}}/>
        </div>
    <div style={{width: "100%", position: "fixed", bottom: "0"}}>
      <BotBar/>
    </div>
    </>
      );
    };

export default About;