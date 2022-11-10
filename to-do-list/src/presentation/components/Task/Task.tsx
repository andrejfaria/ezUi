import { Task, taskValue } from "../../../application/models/Task";
import { useTaskDispatch, useTaskSelector } from "../../../application/store/hooks";
import { Props } from "./Task.types";
import { removeTask } from "../../../application/models/Task";

export function Task({ task, onToggle, onClick }: Props) {

  const tasks = useTaskSelector(taskValue)
  const dispatch = useTaskDispatch()


  return (
    <div>
      <h3>
        {task?.description}
        <button onClick={() => dispatch(removeTask(task?.id))}>delete</button>

      </h3>

    </div>)
}