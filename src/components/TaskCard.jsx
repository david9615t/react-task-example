import { useContext } from "react";
import {TaskContext} from '../context/TaskContext';

function TaskCard({ task}) {

  const {deleteTask} = useContext(TaskContext);


  return (
    <div className="bg-neutral-800 text-zinc-300 p-4 shadow-2xl rounded-md">
      <h1 className="text-sky-300 text-center text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500">{task.descripcion}</p>
      <button className="text-zinc-50 bg-rose-600 p-1 rounded-lg hover:bg-rose-800 mt-6" onClick={() => deleteTask(task.id)}>Eliminar tarea</button>
    </div>
  );
}

export default TaskCard;
