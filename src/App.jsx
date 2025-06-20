import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";

function App() {
  return (
    <>
      <div className="h-full w-full bg-gray-800 text-white px-[10%]">
        <Navbar/>
        <Mainroutes/>
      </div>
    </>
  );
}

export default App;
