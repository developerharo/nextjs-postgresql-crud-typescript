// minuto 1:41:08

import { Button, Card, Form, Icon } from 'semantic-ui-react';
import {ChangeEvent, FormEvent, useState} from 'react';
import { Task } from 'src/interfaces/Task';

export default function newPage() {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const createTask = async (task: Task) => {
    await fetch('http://localhost:3000/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
  }

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => setTask({ ...task, [name]: value });


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      await createTask(task);
    } catch (error) {
      console.log(error);
    }

    
  };

  return (
    <div>
      <Card>
        <Card.Content>
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <label htmlFor="title">Title:</label>
              <input type="text" placeholder="Write your title" name="title" onChange={handleChange}/>
            </Form.Field>
            <Form.Field>
              <label htmlFor="description">Description:</label>
              <textarea 
                name="description" 
                rows={2} 
                placeholder="Write a description"
                onChange={handleChange}
              ></textarea>
            </Form.Field>
            <Button>
              <Icon name="save" />
              Save
            </Button>
          </Form>
        </Card.Content>
      </Card>
    </div>
  );
}