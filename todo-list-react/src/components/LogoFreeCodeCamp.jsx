import freeCodeCampLogo from "../images/freecodecamp-logo.png";
import "../stylesheets/LogoFreeCodeCamp.css";
const logoFreeCodeCamp = () => {
  return (
    <div className="freecodecamp-logo-contenedor">
      <img src={freeCodeCampLogo} alt="" className="freecodecamp-logo" />
    </div>
  );
};

export default logoFreeCodeCamp;
