import * as Switch from '@radix-ui/react-switch'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 45px;
  }
  nav {
    display: flex;
    gap: 0.5rem;
    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      align-items: center;
      justify-content: center;

      color: ${(props) => props.theme['gray-100']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }
      &.active {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`
export const SwitchThemeContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0.2rem auto;
  padding: 0 3.2rem;

  display: flex;
  align-items: center;
  justify-content: end;
`
export const SwitchThemeRoot = styled(Switch.Root)`
  width: 42px;
  height: 25px;
  background-color: ${(props) => props.theme['gray-700']};
  border-radius: 9999px;
  position: relative;
  border: 0;
  margin-left: 0.5rem;
  box-shadow: 0 2px 10px ${(props) => props.theme['gray-500']};
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme['gray-300']};
  }
  &[data-state='checked'] {
    background-color: ${(props) => props.theme['gray-500']};
  }
`
export const SwitchThemeThumb = styled(Switch.Thumb)`
  display: block;
  width: 21px;
  height: 21px;
  background-color: white;
  border-radius: 9999px;
  box-shadow: 0 2px 2px var(--black-a7);
  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;

  &[data-state='checked'] {
    transform: translateX(19px);
  }
`
