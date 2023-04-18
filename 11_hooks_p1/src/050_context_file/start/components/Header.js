import { useTheme } from "../context/ThemeContext"

const Header = () => {
  const THEMES = ['light', 'dark', 'red'];
  const changeTheme = (e) => setTheme(e.target.value)
  const [theme, setTheme] = useTheme();
  return (
    <header className={`content-${theme}`}>
    {THEMES.map((_thema) => {
      return (
        <label>
          <input type="radio" key={_thema} value={_thema} checked={theme === _thema } onChange={changeTheme}/>
          {_thema}
        </label>
      )
    })}
    </header>
  )
};

export default Header;
