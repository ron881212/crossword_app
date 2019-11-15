import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const BylineForm = (props) => {
  return (
    <Form className='ml-3'>
      <FormGroup>
        <Label for="answer">Theme</Label>
        <Input id="answer" placeholder="answer" />
      </FormGroup>
      <FormGroup>
        <Label for="answer">Author</Label>
        <Input id="answer" placeholder="answer" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Difficulty</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </Input>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default BylineForm