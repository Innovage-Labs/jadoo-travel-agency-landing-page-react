import Decore from "./assets/decore.svg?component";
import Ellipse from "./assets/ellipse.svg?component";
import Logo from "./assets/logo.svg?component";
import ChrevronDown from "./assets/chevron-down.svg?component";
import HeroImg from "./assets/hr.png";
import PlayBtn from "./assets/play-btn.svg?component";

function App() {
  return (
    <div className="bg-white">
      <div>
        <div className="relative bg-transparent">
          <Decore className="absolute right-0" />
          <Ellipse className="absolute left-0" />
          <div className="absolute flex justify-center pt-12 w-full">
            <div className="w-3/4">
              <div className="grid grid-cols-4">
                <div className="col-span-1">
                  <Logo />
                </div>
                <div className="col-span-3 flex items-center justify-end space-x-16 text-base text-gunmetal">
                  <span>Destinations</span>
                  <span>Hotels</span>
                  <span>Flights</span>
                  <span>Bookings</span>
                  <span>Login</span>
                  <button className="border border-solid border-1 border-gunmetal px-3 py-1 rounded-md">
                    Sign Up
                  </button>
                  <button className="flex items-center space-x-1">
                    <span>EN</span>
                    <div>
                      <ChrevronDown width={12} height={12} />
                    </div>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 mt-5">
                <div className="mt-16">
                  <p className="font-poppins font-bold text-lg text-terracotta">
                    Best Destinations around the world
                  </p>
                  <p className="mt-6 text-spacecadet font-volkhov font-bold text-7xl">
                    Travel, enjoy and live a new and full life
                  </p>
                  <p className="font-poppins font-medium text-base [line-height:30px] text-gray-darkblue mt-8">
                    Built Wicket longer admire do barton vanity itself do in it.
                    Preferred to sportsmen it engrossed listening. Park gate
                    sell they west hard for the.
                  </p>
                  <div className="flex h-14 mt-8 items-center space-x-10">
                    <button className="bg-marigold px-5 py-4 rounded-lg text-xs text-white drop-shadow-[0_20px_35px_rgba(241,165,1,0.15)]">
                      Find out more
                    </button>
                    <button className="flex items-center space-x-2">
                      <PlayBtn className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]" />
                      <span className="font-poppins font-medium text-base text-gray-dim">
                        Play Demo
                      </span>
                    </button>
                  </div>
                </div>
                <img className="object-fill" src={HeroImg} alt="Hero Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
