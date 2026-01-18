import styled from "styled-components";
import { useTaskStore } from "../stores/useTaskStore";

const Container = styled.div`
  text-align: center;
  padding: 60px 20px;
  max-width: 400px;
  margin: 0 auto;
`;

const Icon = styled.div`
  font-size: 4rem;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  color: var(--color-text);
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Message = styled.p`
  color: var(--color-text-light);
  font-size: 1rem;
`;

const emptyStateContent = {
  light: {
    icon: "☕",
    title: "No tasks yet",
    message: "Time to grab a coffee and add your first task!"
  },
  dark: {
    icon: "🌙",
    title: "Nothing to do tonight",
    message: "Add some tasks and conquer the night!"
  },
  banana: {
    icon: "🍌",
    title: "Go bananas!",
    message: "Add your first task and go wild!"
  },
  sky: {
    icon: "🪐",
    title: "Empty space",
    message: "Fill your universe with tasks!"
  }
};

export const EmptyState = () => {
  const theme = useTaskStore((state) => state.theme);
  const content = emptyStateContent[theme] || emptyStateContent.light;

  return (
    <Container>
      <Icon>{content.icon}</Icon>
      <Title>{content.title}</Title>
      <Message>{content.message}</Message>
    </Container>
  );
};
