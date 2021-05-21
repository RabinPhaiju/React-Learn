import { useState } from "react";
import Header from "../task_tracker/Header";
import Tasks from "../task_tracker/Tasks";
import AddTask from "../task_tracker/AddTask";

function TaskTracker() {
  const [tasks, setTask] = useState([
    {
      id: 0,
      text: "Doctor Appointment",
      day: "Feb 5th 2:30pm",
      reminder: true,
    },
    {
      id: 1,
      text: "Dance Class",
      day: "Feb 5th 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Dating",
      day: "Feb 5th 2:30pm",
      reminder: true,
    },
  ]);
  const [addButton, setAddButton] = useState(false);

  // Delete Task
  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };
  const setReminder = (id) => {
    setTask(
      tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : { ...task }))
    );
  };
  // Add Task
  const addTask = (task) => {
    // console.log(task);
    const id = Math.floor(Math.random() * 1000) + 2;
    const newTask = { id, ...task };
    setTask([...tasks, newTask]);
  };

  return (
    <div style={appStyle} className='container'>
      <Header
        title='Task Tasker'
        text={addButton ? "Close" : "Add"}
        color={addButton ? "red" : "green"}
        toggleAddButton={() => setAddButton(!addButton)}
      />
      {addButton && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} setReminder={setReminder} />
      ) : (
        <p>No Tasks</p>
      )}
    </div>
  );
}

const appStyle = {
  // textAlign: "center",
};

export default TaskTracker;
