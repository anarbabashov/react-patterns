const ToggleContext = createContext();

export const Accordion = ({ children, ...restProps }) => {
  return (
    <Container {...restProps}>
      <Inner>
        {children}
      </Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return (
    <Title {...restProps}>{children}</Title>
  );
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(true);
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.ItemHeader = function AccordionHeader({ children, ...restProps }) {
  const { isShown, toggleIsShown } = useContext(ToggleContext);
  return (
    <Header onClick={() => toggleIsShown(!isShown)} {...restProps}>
      {children}
    </Header>
  );
};

Accordion.Body = function AccordionHeader({ children, ...restProps }) {
  const { isShown } = useContext(ToggleContext);
  return (
    <Body className={isShown ? "open" : "close"}>
      <span>{children}</span>
    </Body>
  );
};


/**
 * Usage:
 * <Accordion>
 *   <Accordion.Title>Frequently Asked Questions</Accordion.Title>
 *   <Accordion.Frame>
 *     {faqData.map((item) => (
 *       <Accordion.Item key={item.id}>
 *         <Accordion.Header>{item.header}</Accordion.Header>
 *         <Accordion.Body>{item.body}</Accordion.Body>
 *       </Accordion.Item>
 *     ))}
 *   </Accordion.Frame>
 * </Accordion>
 */