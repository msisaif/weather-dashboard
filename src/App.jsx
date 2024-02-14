import Page from "./Page";
import BodyBgImage from "./assets/body-bg.png";

function App() {
  return (
    <div
      style={{ backgroundImage: `url('${BodyBgImage}')` }}
      className="bg-body font-[Roboto] text-light bg-no-repeat bg-cover h-screen grid place-items-center"
    >
      <Page />
    </div>
  );
}

export default App;
