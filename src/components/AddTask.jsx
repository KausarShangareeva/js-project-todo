import { useState } from 'react'
import styled from 'styled-components'
import { useTaskStore } from '../stores/useTaskStore'
import { Button } from './Button'

const Form = styled.form`
  display: flex;
  gap: 10px;
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

const Input = styled.input`
  flex: 1;
  padding: 14px 20px;
  border: 2px solid var(--color-border);
  border-radius: 25px;
  background: var(--color-card);
  color: var(--color-text);
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }

  &::placeholder {
    color: var(--color-text-light);
  }
`

export const AddTask = () => {
  const [text, setText] = useState('')
  const addTask = useTaskStore((state) => state.addTask)

  const handleSubmit = (e) => {
    e.preventDefault()

    // Don't add empty tasks
    if (text.trim() === '') return

    addTask(text)
    setText('')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit">Add</Button>
    </Form>
  )
}
