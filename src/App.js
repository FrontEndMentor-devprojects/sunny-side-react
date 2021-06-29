import "./App.css";
import Header from "./Components/Header";
import Hero1 from "./Components/Hero1";
import Hero2 from "./Components/Hero2";
import Testimonial from './Components/Testimonial'
import yellowEggSm from "./images/mobile/image-transform.jpg";
import yellowEggMd from "./images/desktop/image-transform.jpg";
import pinkGlassSm from "./images/mobile/image-stand-out.jpg";
import pinkGlassMd from "./images/desktop/image-stand-out.jpg";
import cherrySm from "./images/mobile/image-graphic-design.jpg";
import cherryMd from "./images/desktop/image-graphic-design.jpg";
import clementineSm from "./images/mobile/image-photography.jpg";
import clementineMd from "./images/desktop/image-photography.jpg";
import emily from './images/image-emily.jpg'
import jennie from './images/image-jennie.jpg'
import thomas from './images/image-thomas.jpg'



const hero1Info = [
  {
    imageSm: yellowEggSm,
    imageMd: yellowEggMd,
    header: "Transform your brand",
    text: "We are a full-service creative agency specializing in helping brands grow fast.Engage your clients through compelling visuals that do most of the marketing for you.",
    moreRef: "/more",
    color: "main-yellow",
  },
  {
    imageSm: pinkGlassSm,
    imageMd: pinkGlassMd,
    header: "Stand out to the right audience",
    text: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.",
    moreRef: "/more",
    color: "main-red",
  },
];

const hero2Info = [
  {
    imageSm: cherrySm ,
    imageMd: cherryMd,
    header: "Graphic design",
    text: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
    color: "dark-sat-cyan",
  },
  {
    imageSm: clementineSm,
    imageMd: clementineMd,
    header: "Photography",
    text: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
    color: "dark-blue",
  },
];

const testimonials = [
{
  avatar:emily,
  text:"We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
  name: "Emily R.",
  job:"Marketing Director"
},
{
  avatar:thomas,
  text:"Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
  name:"Thomas S.",
  job:"Chief Operating Officer"
},
{
  avatar:jennie,
  text:"Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
  name:"Jennie F.",
  job:"Business Owner"
}


]

function App() {
  return (
    <div className="App">
      <Header />
      <section>

      {hero1Info.map((info, i) => {
        return (
          <Hero1
          imageSm={info.imageSm}
          imageMd={info.imageMd}
          header={info.header}
          text={info.text}
          moreRef={info.moreRef}
          color={info.color}
          key={i}
          order={i}
          />
          );
        })}
        </section>
      <section className="md:flex">
        {hero2Info.map((info,i)=>{
          return <Hero2 
          imageSm={info.imageSm}
          imageMd={info.imageMd}
          header={info.header}
          text={info.text}
          color={info.color}
          key={i}
          /> 
        })}
        </section>
        <section className="md:p-10">
          <h2 className="font-fraunces pt-14 pb-10 text-grayish-blue tracking-widest text-lg uppercase">Client testimonials</h2>
          <div className="md:flex">
            {testimonials.map((test,i)=>{
              return <Testimonial 
              key={i}
              avatar={test.avatar}
              text={test.text}
              name={test.name}
              job={test.job}
              />

            })}
        
          </div>
        </section>
        
    </div>
  );
}

export default App;
