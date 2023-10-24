import Accordion from 'react-bootstrap/Accordion';
const texts = [
    {title: "text item 1", text: "some text for item 1"},
    {title: "text item 2", text: "some text for item 2"},
    {title: "text item 3", text: "some text for item 2"}
]

function TextTask() {
  return (
    <Accordion defaultActiveKey="0">
      {texts.map(item => 
        <Accordion.Item eventKey={item.title}>
            <Accordion.Header>{item.title}</Accordion.Header>
            <Accordion.Body>{item.text}</Accordion.Body>
        </Accordion.Item>
      )}
    </Accordion>

    // <Accordion defaultActiveKey="0">
    //   <Accordion.Item eventKey="0">
    //     <Accordion.Header>Accordion Item #1</Accordion.Header>
    //     <Accordion.Body>
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //       minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //       aliquip ex ea commodo consequat. Duis aute irure dolor in
    //       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //       pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //       culpa qui officia deserunt mollit anim id est laborum.
    //     </Accordion.Body>
    //   </Accordion.Item>
    //   <Accordion.Item eventKey="1">
    //     <Accordion.Header>Accordion Item #2</Accordion.Header>
    //     <Accordion.Body>
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //       minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //       aliquip ex ea commodo consequat. Duis aute irure dolor in
    //       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //       pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //       culpa qui officia deserunt mollit anim id est laborum.
    //     </Accordion.Body>
    //   </Accordion.Item>
    // </Accordion>
  );
}

export default TextTask;