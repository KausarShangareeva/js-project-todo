import { useEffect } from 'react'
import styled from 'styled-components'
import { GlobalStyles } from './GlobalStyles'
import { useTaskStore } from './stores/useTaskStore'
import { Header } from './components/Header'
import { AddTask } from './components/AddTask'
import { Filter } from './components/Filter'
import { TaskList } from './components/TaskList'
import { DarkModeToggle } from './components/DarkModeToggle'

const AppContainer = styled.div`
  min-height: 100vh;
  padding: 40px 20px;

  @media (max-width: 480px) {
    padding: 20px 10px;
  }
`

export const App = () => {
  const theme = useTaskStore((state) => state.theme)

  // Add theme class on body
  useEffect(() => {
    document.body.classList.remove('dark-mode', 'banana-mode', 'sky-mode')
    if (theme === 'dark') {
      document.body.classList.add('dark-mode')
    } else if (theme === 'banana') {
      document.body.classList.add('banana-mode')
    } else if (theme === 'sky') {
      document.body.classList.add('sky-mode')
    }
  }, [theme])

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <DarkModeToggle />
        <Header />
        <AddTask />
        <Filter />
        <TaskList />
      </AppContainer>
    </>
  )
}
