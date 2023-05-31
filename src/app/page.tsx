import Carousel from "~/components/carousels/home";
import Map from "~/components/map";

export default function Home() {
  return (
    <main>
      <div
        className="h-[75vh]  text-white"
        style={{
          backgroundImage: "url('/assets/img/home-bg-2.jpg')",
        }}
      >
        <div className="bubbles">
          <div className="bubble x1"></div>
          <div className="bubble x2"></div>
          <div className="bubble x3"></div>
          <div className="bubble x4"></div>
          <div className="bubble x5"></div>
          <div className="bubble x6"></div>
          <div className="bubble x7"></div>
          <div className="bubble x8"></div>
          <div className="bubble x9"></div>
          <div className="bubble x10"></div>
        </div>
        <div className="flex items-center justify-center h-full">
          <h1 className="flex flex-col text-center drop-shadow-md">
            <span className="text-2xl">Welcome to</span>
            <span className="font-bold text-8xl">Mabuhay Dumaguete</span>
            <span className="mt-2 text-6xl">Dive Center</span>
          </h1>
        </div>
      </div>
      <Carousel />
      <div className="relative h-[50vh] bg-white">
        <div className="flex items-center h-full px-8 py-12 mx-auto">
          <p className="flex flex-col w-full text-2xl text-center">
            <span>
              Your ultimate destination for diving adventure and culinary
              delights!
            </span>
            <span>
              Our shop offers a unique blend of thrilling underwater experiences
              and mouthwatering cuisine.
            </span>
          </p>
        </div>
      </div>
      <div className="flex w-full">
        <div
          className="relative h-[75vh] p-12 overflow-hidden text-center bg-no-repeat bg-cover w-full"
          style={{
            backgroundImage: "url('/assets/img/scuba.jpeg')",
          }}
        >
          <div
            className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden bg-fixed"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            }}
          >
            <div className="flex items-center justify-center h-full">
              <div className="text-white">
                <h2 className="mb-4 text-4xl font-semibold">Scuba</h2>
                <h4 className="mb-6 text-xl font-semibold">Subheading</h4>
                <button
                  type="button"
                  className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Call to action
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative h-[75vh] p-12 overflow-hidden text-center bg-no-repeat bg-cover w-full"
          style={{
            backgroundImage: "url('/assets/img/freedive.png')",
          }}
        >
          <div
            className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden bg-fixed"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            }}
          >
            <div className="flex items-center justify-center h-full">
              <div className="text-white">
                <h2 className="mb-4 text-4xl font-semibold">Freediving</h2>
                <h4 className="mb-6 text-xl font-semibold">Subheading</h4>
                <button
                  type="button"
                  className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Call to action
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-white">
        <div className="flex items-center h-full px-8 py-12 mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center p-12">
              <p className="flex flex-col w-full text-2xl text-center">
                Located just 15 kilometers south of the city in the charming
                town of Dauin, our shop is strategically positioned to provide
                easy access to renowned dive sites. Dive into the crystal-clear
                waters and discover the hidden wonders of Dumaguete&lsquo;s underwater
                realm.
              </p>
            </div>
            <div>
              <Map />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
