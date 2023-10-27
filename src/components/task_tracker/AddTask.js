import { useState } from "react";

const AddTask = ({ addTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add Text");
      return;
    }
    addTask({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label htmlFor='Task'>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label htmlFor='Day & Time'>Day & Time</label>
        <input
          type='text'
          placeholder='Add Day Time'
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label htmlFor='Set Reminder'>Set Reminder</label>
        <input type='checkbox' value={reminder} onChange={(e) => setReminder(!reminder)} />
      </div>
      <input type='submit' className='btn btn-block' value='Save Task' />
    </form>
  );
};

export default AddTask;
