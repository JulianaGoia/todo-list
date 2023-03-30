import './global.css';
import trash from './assets/trash.svg'
import trashwt from './assets/trash-white.svg'
import checkwt from './assets/check-white.svg'
import check from './assets/check.svg'
import { Button, Container, Flex, Input, Item, Spacer } from "./styles/GlobalStyle";
import { useState } from "react";
import { toast } from 'react-toastify';

function App() {
  const [task, setTask] = useState("");
  const [listTask, setListTask] = useState([]);

  const addTask = () => {
    if (!task) {
      return toast("Type a task!");
    }
    const newTask = {
      id: Math.random(),
      task: task,
      checked: false,
    };
    setListTask([...listTask, newTask]);
    setTask("");
  };

  const removeTask = (id) => {
    const newList = listTask.filter((task) => task.id !== id);
    setListTask(newList);
  };

  const toggleChecked = (id, checked) => {
    const index = listTask.findIndex((task) => task.id === id);
    const newList = listTask;
    newList[index].checked = !checked;
    setListTask([...newList]);
  };

  return (
    <Container>
      <h1 className="title">Todo List</h1>
      <Spacer />

      <Flex direction="row" justify="space-between">
        
          <Input
            value={task}
            placeholder="Add task"
            onChange={(e) => setTask(e.target.value)}
          />
          <Button onClick={addTask}>Adicionar</Button>
      </Flex>
      <Spacer margin="16px" />

      <ul className='list'>
        {listTask.map((task) => (
          <>
            <Item Item checked={task.checked} key={task.id}>
              <p>{task.task}</p>
              <Flex direction="row" className='task-actions'>
                <button onClick={() => toggleChecked(task.id, task.checked)}>
                  {/* <box-icon name='check' ></box-icon> */}
                  <img src={task.checked ? checkwt : check } />
                </button>
                <button onClick={() => removeTask(task.id)}>
                  {/* <box-icon name='trash' ></box-icon> */}
                  <img src={task.checked ? trashwt : trash } />
                </button>
              </Flex>
            </Item>
            <Spacer margin="1rem" />
          </>
        ))}
      </ul>
    </Container>
  );
}

export default App;
