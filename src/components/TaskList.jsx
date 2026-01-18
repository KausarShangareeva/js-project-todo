import styled from 'styled-components'
import { useTaskStore } from '../stores/useTaskStore'
import { TaskItem } from './TaskItem'
import { EmptyState } from './EmptyState'

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
`

export const TaskList = () => {
  const tasks = useTaskStore((state) => state.tasks)
  const filter = useTaskStore((state) => state.filter)

  // Filter tasks based on current filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.done
    if (filter === 'completed') return task.done
    return true
  })

  // Show empty state if no tasks
  if (tasks.length === 0) {
    return <EmptyState />
  }

  return (
    <List>
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </List>
  )
}
