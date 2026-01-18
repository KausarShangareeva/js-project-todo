import styled from 'styled-components'
import { formatDistanceToNow } from 'date-fns'
import { useTaskStore } from '../stores/useTaskStore'

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 20px;
  background: var(--color-card);
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`

const Checkbox = styled.input`
  width: 22px;
  height: 22px;
  accent-color: var(--color-primary);
  cursor: pointer;
`

const Content = styled.div`
  flex: 1;
`

const Text = styled.p`
  color: ${(props) => (props.$done ? 'var(--color-text-light)' : 'var(--color-text)')};
  text-decoration: ${(props) => (props.$done ? 'line-through' : 'none')};
  font-size: 1rem;
  margin: 0;
`

const Time = styled.span`
  font-size: 0.75rem;
  color: var(--color-text-light);
`

const DeleteButton = styled.button`
  color: var(--color-text-light);
  font-size: 1.2rem;
  padding: 5px 10px;
  border-radius: 8px;
  transition: all 0.2s;

  &:hover {
    color: #e74c3c;
    background: rgba(231, 76, 60, 0.1);
  }
`

export const TaskItem = ({ task }) => {
  const toggleTask = useTaskStore((state) => state.toggleTask)
  const removeTask = useTaskStore((state) => state.removeTask)

  // Format date as "2 hours ago"
  const timeAgo = formatDistanceToNow(new Date(task.createdAt), { addSuffix: true })

  return (
    <Item>
      <Checkbox
        type="checkbox"
        checked={task.done}
        onChange={() => toggleTask(task.id)}
        aria-label={`Mark ${task.text} as ${task.done ? 'incomplete' : 'complete'}`}
      />
      <Content>
        <Text $done={task.done}>{task.text}</Text>
        <Time>{timeAgo}</Time>
      </Content>
      <DeleteButton
        onClick={() => removeTask(task.id)}
        aria-label={`Delete ${task.text}`}
      >
        ✕
      </DeleteButton>
    </Item>
  )
}
