import "./App.css";
import Header from "./Components/Header";
import Hero1 from "./Components/Hero1";
import Hero2 from "./Components/Hero2";
import yellowEggSm from "./images/mobile/image-transform.jpg";
import yellowEggMd from "./images/desktop/image-transform.jpg";
import pinkGlassSm from "./images/mobile/image-stand-out.jpg";
import pinkGlassMd from "./images/desktop/image-stand-out.jpg";

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

function App() {
  return (
    <div className="App">
      <Header />
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

      <Hero2 />
    </div>
  );
}

export default App;
