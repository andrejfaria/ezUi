import { MouseEventHandler } from "react";
import { Task } from "../../../application/models/Task";

export interface Props {
  task: Task
  onToggle?: MouseEventHandler<Element>,
  onClick?: MouseEventHandler<Element>

}