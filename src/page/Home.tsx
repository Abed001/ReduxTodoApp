import InputElement from "../component/InputElement";
import LowerSection from "../component/LowerSection";
import ToggleDarkMode from "../component/ToggleDarkMode";
import UpperSection from "../component/UpperSection";

function Home() {
  return (
    <div className={`flex flex-col h-[100vh] w-full`}>
      <section className={`px-10 pb-10 h-[50vh] `}>
        <div className="flex flex-col ">
          <div className="flex justify-between mx-5 lg:mx-0 lg:justify-center items-center gap-x-40 ">
            <UpperSection />
            <ToggleDarkMode />
          </div>
          <div className="flex justify-center">
            <InputElement />
          </div>
        </div>
      </section>
      <LowerSection />
    </div>
  );
}

export default Home;
