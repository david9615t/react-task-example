import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
	const [descripcion, setDescripcion] = useState("")
  const form = document.getElementById("form");
  const {createTask} = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
			title,
			descripcion
		});
    form.reset();
    setTitle("")
    setDescripcion("")
  };

  return (
    <div className="max-w-fit mx-auto mb-4">
      <form id="form" className="bg-neutral-800 p-10" onSubmit={handleSubmit}>
        <h1 className="font-bold text-center mb-4 text-2xl text-white">Crea tu tarea</h1>
        <input
          className="p-2 w-full mb-4 bg-gray-300"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
					autoFocus
        />
        <textarea
          className="p-2 w-full mb-2 bg-gray-300"
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescripcion(e.target.value)}
        ></textarea>
				<button className="bg-sky-400 p-2 rounded-lg hover:bg-sky-600">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
