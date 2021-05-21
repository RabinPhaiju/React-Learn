import { useState, useEffect } from "react";
import Header from "../task_tracker/Header";
import Tasks from "../task_tracker/Tasks";
import AddTask from "../task_tracker/AddTask";

function TaskTrackerWithApi() {
  const [tasks, setTask] = useState([]);
  const [addButton, setAddButton] = useState(false);

  useEffect(() => {
    const getTask = async () => {
      const taskJson = await fetchTasks();
      setTask(taskJson);
    };
    getTask();
  }, []);

  // Fetch data
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTask(tasks.filter((task) => task.id !== id));
  };
  const setReminder = async (id) => {
    const curTask = await fetchTask(id);
    const updTask = { ...curTask, reminder: !curTask.reminder };
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });
    setTask(
      tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : { ...task }))
    );
  };
  // Add Task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTask([...tasks, data]);
  };
  return (
    <div style={appStyle} className='container'>
      <Header
        title='Task Tasker'
        text={addButton ? "Close" : "Add"}
        color={addButton ? "red" : "green"}
        toggleAddButton={() => setAddButton(!addButton)}
      />
    </div>
  );
}

const appStyle = {
  // textAlign: "center",
};

export default TaskTrackerWithApi;
