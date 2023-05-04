import ReactSwitch from "react-switch";
import { useRecoilState } from "recoil";
import { isDarkThemeAtom } from "../../common_helpers/atoms";
import "../../css/LightDarkSwitch.css";

function LightDarkSwitch() {
  const [isDarkTheme, setIsDarkTheme] = useRecoilState(isDarkThemeAtom);
  return (
    <div className={"light-dark-switch-wrapper"}>
      <div style={{ visibility: isDarkTheme !== true ? "visible" : "hidden" }}>
        <i className="fas fa-sun text-signal-warning-default" />
      </div>
      <ReactSwitch
        onChange={() => {
          setIsDarkTheme(isDarkTheme !== true);
        }}
        checked={isDarkTheme ?? false}
      />
      <div style={{ visibility: isDarkTheme === true ? "visible" : "hidden" }}>
        <i className="fas fa-moon" />
      </div>
    </div>
  );
}

export default LightDarkSwitch;
