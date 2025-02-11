import { useState } from "react";

function App() {
  let getTask = () => {
    let todolist = localStorage.getItem('todo');
    if (todolist) {
      return JSON.parse(todolist);
    } else {
      return [];
    }
  };

  const [record, setRecord] = useState(getTask());
  const [task, setTask] = useState("");
  const [editid, setEditId] = useState("");

  const addTask = (event) => {
    event.preventDefault();
    let obj = {
      taskid: Math.floor(Math.random() * 1000000),
      taskname: task
    };

    if (editid) {
      let up = record.map((val) => {
        if (val.taskid === editid) {
          val.taskname = task;
        }
        return val;
      });
      setRecord(up);
      localStorage.setItem('todo', JSON.stringify(up));
      alert("Task updated");
      setEditId("");
      setTask("");
    } else {
      let dup = record.find(val => val.taskname === task);
      if (dup) {
        alert("Task already exists");
        setTask("");
        return false;
      }
      let newdata = [...record, obj];
      setRecord(newdata);
      localStorage.setItem('todo', JSON.stringify(newdata));
      alert("Task added");
      setTask("");
    }
  };

  const deleteTask = (id) => {
    let deleterecord = record.filter(val => val.taskid !== id);
    localStorage.setItem('todo', JSON.stringify(deleterecord));
    setRecord(deleterecord);
    alert("Task deleted");
  };

  const editTask = (id) => {
    setEditId(id);
    let single = record.find(val => val.taskid === id);
    setTask(single.taskname);
  };

  const clearAll = () => {
    setRecord([]);
    localStorage.setItem('todo', JSON.stringify([]));
    alert("All tasks deleted");
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-6">
      <h2 className="text-2xl font-semibold">Add Task</h2>
      <form onSubmit={addTask} className="w-full max-w-sm bg-white p-4 shadow-lg rounded-lg">
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="task">Task:</label>
          <input
            type="text"
            id="task"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setTask(e.target.value)}
            value={task}
            placeholder="Enter your task"
          />
        </div>
        <div className="flex justify-center">
          {editid ? (
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
              Edit Task
            </button>
          ) : (
            <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
              Add Task
            </button>
          )}
        </div>
      </form>

      <h2 className="text-2xl font-semibold">View Tasks</h2>
      <div className="flex flex-wrap justify-center gap-6 w-full">
        {record.length === 0 ? (
          <p className="text-gray-500">No tasks available</p>
        ) : (
          record.map((val) => (
            <div
              key={val.taskid}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center w-64"
            >
              <div className="mb-2 text-lg font-medium">{val.taskname}</div>
              <div className="flex space-x-4">
                <button
                  onClick={() => deleteTask(val.taskid)}
                  className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
                <button
                  onClick={() => editTask(val.taskid)}
                  className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600"
                >
                  Edit
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      {record.length > 0 && (
        <button
          onClick={clearAll}
          className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
        >
          Clear All
        </button>
      )}
    </div>
  );
}

export default App;
