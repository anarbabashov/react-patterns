# React Design Patterns

This repository contains examples of common React design patterns that help in building maintainable and scalable applications. Each pattern demonstrates a specific approach to solving common React development challenges.

## Table of Contents

1. [Compound Components Pattern](#compound-components-pattern)
2. [Function as a Child Pattern](#function-as-a-child-pattern)
3. [Higher-Order Component (HOC) Pattern](#higher-order-component-pattern)
4. [Proxy Component Pattern](#proxy-component-pattern)
5. [Render Prop Pattern](#render-prop-pattern)
6. [Slot Pattern (Component Injection)](#slot-pattern)

## Compound Components Pattern

**Location**: `/Compound Components/Accordion.jsx`

The Compound Components pattern allows you to create components that work together to form a cohesive unit while maintaining flexibility and control over their rendering. This pattern is particularly useful when you have components that share related state and logic.

Example use case:
```jsx
<Accordion>
  <Accordion.Item>
    <Accordion.Header>Section 1</Accordion.Header>
    <Accordion.Content>Content for section 1</Accordion.Content>
  </Accordion.Item>
</Accordion>
```

## Function as a Child Pattern

**Location**: 
- `/Function as a Child/Counter.jsx`
- `/Function as a Child/Paginator.jsx`
- `/Function as a Child/UserFilter.jsx`

Also known as Render Props with Functions, this pattern involves passing a function as the child of a component. This pattern provides maximum flexibility for rendering and data handling.

Example use case:
```jsx
<Counter>
  {(count, increment) => (
    <button onClick={increment}>
      Clicked {count} times
    </button>
  )}
</Counter>
```

## Higher-Order Component Pattern

**Location**: `/HOC Pattern/withFetchData.jsx`

HOCs are functions that take a component and return a new component with additional props or behavior. This pattern is excellent for reusing component logic across multiple components.

Example use case:
```jsx
const UserListWithData = withFetchData(UserList, '/api/users');
```

## Proxy Component Pattern

**Location**: 
- `/Proxy Component/createReactiveState.jsx`
- `/Proxy Component/WithPropsProxy.jsx`

The Proxy Component pattern involves creating a component that acts as an intermediary, controlling access to another component's props or behavior. This pattern is useful for adding additional functionality or validation to existing components.

Example use case:
```jsx
const EnhancedButton = WithPropsProxy(Button, {
  onClick: (originalOnClick) => (...args) => {
    console.log('Button clicked');
    originalOnClick(...args);
  }
});
```

## Render Prop Pattern

**Location**: 
- `/Render Prop/DataFetcher.jsx`
- `/Render Prop/ListRenderer.jsx`
- `/Render Prop/TableRenderer.jsx`

The Render Prop pattern involves passing a prop that tells a component what to render. This pattern provides excellent separation of concerns and reusability.

Example use case:
```jsx
<DataFetcher
  url="/api/data"
  render={data => (
    <div>
      {data.map(item => <Item key={item.id} {...item} />)}
    </div>
  )}
/>
```

## Slot Pattern

**Location**: `/Slot Pattern (Component Injection)/CardSlot.jsx`

The Slot Pattern, also known as Component Injection, allows you to create components with predefined "slots" where other components can be injected. This pattern is great for creating flexible, reusable layouts.

Example use case:
```jsx
<Card>
  <Card.Header>
    <h2>Card Title</h2>
  </Card.Header>
  <Card.Body>
    <p>Card content goes here</p>
  </Card.Body>
  <Card.Footer>
    <Button>Action</Button>
  </Card.Footer>
</Card>
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/anarbabashov/react-patterns.git
```

2. Install dependencies:
```bash
cd react-patterns
npm install
```

3. Explore the patterns in their respective directories.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.