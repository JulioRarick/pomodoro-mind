import { Scroll, Timer } from 'phosphor-react';
import pomodoroLogo from '../../assets/pomodoroLogo.svg';

import { HeaderContainer } from './styles';
import { NavLink } from 'react-router-dom';

export function Header() {
   return (
      <HeaderContainer>
         <img src={pomodoroLogo} alt='' />
         <nav>
            <NavLink to='/' title='Timer'>
               <Timer size={28} />
            </NavLink>
            <NavLink to='/history' title='History'>
               <Scroll size={28} />
            </NavLink>
         </nav>
      </HeaderContainer>
   );
}
