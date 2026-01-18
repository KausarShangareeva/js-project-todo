import styled from 'styled-components'
import { useTaskStore } from '../stores/useTaskStore'

const ToggleButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--color-card);
  border: 2px solid var(--color-border);
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.1);
  }
`

export const DarkModeToggle = () => {
  const theme = useTaskStore((state) => state.theme)
  const nextTheme = useTaskStore((state) => state.nextTheme)

  // Show icon based on current theme
  const getIcon = () => {
    if (theme === 'light') return '☕'
    if (theme === 'dark') return '🌙'
    if (theme === 'banana') return '🍌'
    if (theme === 'sky') return '🪐'
  }

  return (
    <ToggleButton onClick={nextTheme} aria-label="Change theme">
      {getIcon()}
    </ToggleButton>
  )
}
