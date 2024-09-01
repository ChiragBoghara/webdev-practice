import { useState } from "react";

export default function NewTask({ onSave }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleTaskChange(e) {
    setEnteredTask(e.target.value);
  }

  function handleTaskSave() {
    if(enteredTask.trim()===''){
      return;
    }
    onSave(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handleTaskChange}
        value={enteredTask}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        required
      />
      <button
        onClick={handleTaskSave}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}
