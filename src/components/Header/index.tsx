import { Palette, Scroll, Timer } from 'phosphor-react'
import pomodoroLogo from '../../assets/pomodoroLogo.svg'

import {
  HeaderContainer,
  SwitchThemeContainer,
  SwitchThemeRoot,
  SwitchThemeThumb,
} from './styles'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext, ThemeType } from '../../contexts/ThemeContext'

export function Header() {
  const { toggleTheme, theme } = useContext(ThemeContext)

  const isLightMode = theme === ThemeType.light

  return (
    <HeaderContainer>
      <img src={pomodoroLogo} alt="" />
      <nav>
        <SwitchThemeContainer>
          <Palette size={26} />
          <label>Tema</label>
          <SwitchThemeRoot checked={isLightMode} onCheckedChange={toggleTheme}>
            <SwitchThemeThumb />
          </SwitchThemeRoot>
        </SwitchThemeContainer>
        <NavLink to="/" title="Timer">
          <Timer size={28} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={28} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
