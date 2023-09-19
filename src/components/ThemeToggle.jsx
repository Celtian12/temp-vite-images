import { useContext } from 'react';
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs';
import { appContext } from '../context/Context';
export const ThemeToggle = () => {
    const {isDarkTheme ,toggleDarkTheme} = useContext(appContext);
  return (
    <section className="toggle-container">
        <button className="dark-toggle">
            {isDarkTheme ? <BsFillMoonFill className='toggle-icon' onClick={toggleDarkTheme}/>
            : <BsFillSunFill className='toggle-icon' onClick={toggleDarkTheme}/>}
        </button>
    </section>
  )
}
