import Careers from "../components/Careers";
import Footer from "../components/Footer";
import Hero from "../components/hero";
import Navbar from "../components/Navbar";
import Urgent from "../components/Urgent";
import herovideo from "../assets/yandros-loop-animation.mp4";
import ExpandableComponent from "../components/ExpandableComponent";
import IntroductionComponent from "../components/IntroductionComponent";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName=".hero"
        heroVideo={herovideo} // 注意这里，我已经更改了属性名称为heroVideo
        title="你好 Hello!"
        //text="Explore Career Opportunities"
        //buttonText="Try For Free"
        url="/"
        btnClass="off"
      />
      {/* <Careers /> */}
      <IntroductionComponent />
      <Urgent />
      <div className="App">
        <ExpandableComponent />
      </div>
      <Footer />
    </>
  );
}

export default Home;
