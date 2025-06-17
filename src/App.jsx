import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";

function App() {
  return (
    <>
      <div className="h-screen w-screen bg-gray-800 text-white px-[10%]">
        <Navbar/>
        <Mainroutes/>
      </div>
    </>
  );
}

export default App;
