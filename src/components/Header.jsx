import styled from 'styled-components'
import { useTaskStore } from '../stores/useTaskStore'

const HeaderContainer = styled.header`
  text-align: center;
  padding: 20px;
`

const Title = styled.h1`
  font-size: 2rem;
  color: var(--color-text);
  margin-bottom: 10px;
`

const Counter = styled.p`
  color: var(--color-text-light);
  font-size: 1rem;
  margin-bottom: 15px;
`

const CompleteAllButton = styled.button`
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 0.9rem;
  background: var(--color-secondary);
  color: white;
  transition: all 0.2s;

  &:hover {
    background: var(--color-primary-dark);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const Header = () => {
  const tasks = useTaskStore((state) => state.tasks)
  const completeAll = useTaskStore((state) => state.completeAll)

  const totalTasks = tasks.length
  const completedTasks = tasks.filter((task) => task.done).length
  const allDone = totalTasks > 0 && completedTasks === totalTasks

  return (
    <HeaderContainer>
      <Title>My Tasks</Title>
      <Counter>
        {completedTasks} of {totalTasks} tasks completed
      </Counter>
      {totalTasks > 0 && (
        <CompleteAllButton onClick={completeAll} disabled={allDone}>
          Complete All
        </CompleteAllButton>
      )}
    </HeaderContainer>
  )
}
