import styled from 'styled-components'
import { useTaskStore } from '../stores/useTaskStore'

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px 20px;
`

const FilterButton = styled.button`
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  background: ${(props) => (props.$active ? 'var(--color-primary)' : 'var(--color-card)')};
  color: ${(props) => (props.$active ? 'white' : 'var(--color-text)')};
  border: 2px solid ${(props) => (props.$active ? 'var(--color-primary)' : 'var(--color-border)')};
  transition: all 0.2s;

  &:hover {
    border-color: var(--color-primary);
  }
`

export const Filter = () => {
  const filter = useTaskStore((state) => state.filter)
  const setFilter = useTaskStore((state) => state.setFilter)

  return (
    <FilterContainer>
      <FilterButton $active={filter === 'all'} onClick={() => setFilter('all')}>
        All
      </FilterButton>
      <FilterButton $active={filter === 'active'} onClick={() => setFilter('active')}>
        Active
      </FilterButton>
      <FilterButton $active={filter === 'completed'} onClick={() => setFilter('completed')}>
        Completed
      </FilterButton>
    </FilterContainer>
  )
}
