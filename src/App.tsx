import "./App.css";
import { HorizontalScrollCarousel } from "./HorizontalScrollCarousel";

function App() {
  return (
    <>
      <div className="bg-neutral-800">
        <div className="flex h-screen items-center justify-center">
          <span className="font-semibold uppercase text-neutral-500">
            Scroll down
          </span>
        </div>
        <HorizontalScrollCarousel />
        <div className="flex h-screen items-center justify-center">
          <span className="font-semibold uppercase text-neutral-500">
            Scroll up
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
