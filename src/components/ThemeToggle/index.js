import { FaMoon, FaSun } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from 'store/reducers/app'

import { ThemeToggleWrapper } from './styles'


export default function ThemeToggle() {
    const dispatch = useDispatch();
    const { theme } = useSelector((state) => state.app)
    const isLightTheme = theme === 'light'
    
    function handleClick() {
        var targetTheme = isLightTheme ? 'dark' : 'light';
        dispatch(setTheme(targetTheme))
    }

    return (
        <ThemeToggleWrapper onClick={() => handleClick()}>{
            isLightTheme ?
                <FaMoon /> :
                <FaSun />
        }
        </ThemeToggleWrapper>
    )
}