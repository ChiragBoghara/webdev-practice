import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd ,onCancel}) {
  const modal = useRef();
  const title = useRef();
  const desc = useRef();
  const duedate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDesc = desc.current.value;
    const enteredDueDate = duedate.current.value;

    //validation
    if (enteredTitle === "" || enteredDesc === "" || enteredDueDate === "") {
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      desc: enteredDesc,
      duedate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops. Looks like you forgot to enter a value
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
          <div>
            <Input ref={title} label="Title" />
            <Input ref={desc} label="Description" textarea />
            <Input type="date" ref={duedate} label="Due Date" />
          </div>
        </menu>
      </div>
    </>
  );
}
