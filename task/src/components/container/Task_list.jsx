import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/Task";

//importamos la hoja de stylos de task.scss

import "../../styles/task.scss";
import TaskForm from "../pure/forms/TaskForm";

const TaskListComponent = () => {
  //lo que va entre parentesis es lo que hay en el constructor de task.class.js (constructor(name, description, completed, level))
  const defaultTask1 = new Task(
    "Example1",
    "Description1",
    true,
    LEVELS.NORMAL
  );
  const defaultTask2 = new Task(
    "Example2",
    "Description2",
    false,
    LEVELS.URGENT
  );
  const defaultTask3 = new Task(
    "Example3",
    "Description3",
    false,
    LEVELS.BLOCKING
  );
  // esto de arriba es una tarea por defecto para hacer el ejemplo de que funciona correctamente
  const [tasks, setTask] = useState([defaultTask1, defaultTask2, defaultTask3]);
  const [loading, setlLoading] = useState(true);

  useEffect(() => {
    console.log("odificacion de tarea");
    setlLoading(false);

    return () => {
      console.log("TaskList component is ging to unount");
    };
  }, [tasks]);

  function completeTask (task) {
    console.log('complete this task:', task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;
    setTask(tempTasks);
  }

  function deleteTask(task){
    console.log('Detele this Task:', task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index,1);
    setTask(tempTasks);
}

function addTask(task){
    console.log('Detele this Task:', task);
    const tempTasks = [...tasks];
    tempTasks.push(task);
    setTask(tempTasks);
}



  return (
    //configurar que nuestro componente TaskListComponent devuelva un componente de tipo tarea
    //dentro del div pintamos TaskComponent(pintamos dentro de la lista el cmponente tarea) y le pasamos por pros la tarea que quiero que pinte(defaultTask)
    <div>
      <div className="col-12">
        <div className="card">
          {/**card header (title) */}
          <div className="card-header p-3">
            <h5>Your Tasks:</h5>
          </div>
          {/**card body (cntent) */}
          <div
            className="card-body"
            data-mdbperfect-scrollbar="true"
            style={{ position: "relative, height:400px" }}
          >
            <table>
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">description</th>
                  <th scope="col">Priority</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/**itera sobre una lista para poder mostrar varias filas */}
                {/* <TaskComponent task = {defaultTask}></TaskComponent> */}
                {tasks.map((task, index) => {
                  return (
                    <TaskComponent 
                      key={index} 
                      task={task}
                      complete={completeTask}
                      remove={deleteTask}
                      >
                      
                    </TaskComponent>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <TaskForm add={addTask}></TaskForm>
    </div>
  );
};

export default TaskListComponent;
