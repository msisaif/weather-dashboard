import ApplicationLogo from "../assets/logo.svg";

function Logo() {
  return (
    <>
      <a href="/">
        <img className="h-9" src={ApplicationLogo} alt="Weather App" />
      </a>
    </>
  );
}

export default Logo;
