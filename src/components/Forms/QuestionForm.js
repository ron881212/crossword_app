import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const QuestionForm = (props) => {
  return (
    <Form className='ml-3'>
      <FormGroup>
        <Label for="exampleText">Question</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label for="answer">Answer</Label>
        <Input id="answer" placeholder="answer" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Across or Down</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>Across</option>
          <option>Down</option>
        </Input>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default QuestionForm;