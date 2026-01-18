import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useTaskStore = create(
  persist(
    (set) => ({
      // Array of tasks
      tasks: [],

      // Filter: 'all', 'active', 'completed'
      filter: 'all',

      // Theme: 'light', 'dark', 'banana', 'sky'
      theme: 'light',

      // Add a new task
      addTask: (text) => {
        const newTask = {
          id: Date.now(),
          text: text,
          done: false,
          createdAt: new Date().toISOString()
        }
        set((state) => ({
          tasks: [...state.tasks, newTask]
        }))
      },

      // Remove a task by id
      removeTask: (id) => {
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id)
        }))
      },

      // Toggle task done/undone
      toggleTask: (id) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, done: !task.done } : task
          )
        }))
      },

      // Complete all tasks
      completeAll: () => {
        set((state) => ({
          tasks: state.tasks.map((task) => ({ ...task, done: true }))
        }))
      },

      // Set filter
      setFilter: (filter) => {
        set({ filter })
      },

      // Cycle through themes: light -> dark -> banana -> light
      nextTheme: () => {
        set((state) => {
          const themes = ['light', 'dark', 'banana', 'sky']
          const currentIndex = themes.indexOf(state.theme)
          const nextIndex = (currentIndex + 1) % themes.length
          return { theme: themes[nextIndex] }
        })
      }
    }),
    {
      name: 'todo-storage'
    }
  )
)
