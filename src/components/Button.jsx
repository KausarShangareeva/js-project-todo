import styled from 'styled-components'

const StyledButton = styled.button`
  background: var(--color-primary);
  color: white;
  padding: 14px 32px;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(196, 164, 132, 0.3);

  &:hover {
    background: var(--color-primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(166, 123, 91, 0.4);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 10px rgba(196, 164, 132, 0.3);
  }

  &:disabled {
    background: var(--color-border);
    color: var(--color-text-light);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`

export const Button = ({ children, onClick, disabled, type = 'button' }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} type={type}>
      {children}
    </StyledButton>
  )
}
