//este componente task.jsx es de orden inferior tiene una prop que es task y un div con h2, h3, h4, h5 que es lo que va a pintar y6 por ultimo un propType que va a tener las diferentes instancias de nuestros props en este caso so es una que es task que nos queremos asegurar que es e tipo Task

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class';
import '../../styles/task.scss';
import { LEVELS } from '../../models/levels.enum';

const TaskComponent = ({task, complete, remove}) => {
    useEffect(() => {
      console.log('Created Task');
      return () => {
        console.log(`Task: ${task.name} is goingo to unmount`);
      }
    }, [task]);

    // la idea de esta funcion es ver si se trata de un nivel u otro

    function taskLevelBadge () {
        switch ( task.level) {
            case LEVELS.NORMAL:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {task.level}
                        </span>
                    </h6>
                )
            
            case LEVELS.URGENT:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            {task.level}
                        </span>
                    </h6>
                )
            
            case LEVELS.BLOCKING:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            {task.level}
                        </span>
                    </h6>
                )

            default:
                break;
        }
    }

    function taskCompleteIcon () {
        if (task.completed) {
            return (<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color:'green'}} ></i>)  
        } else {
            return (<i onClick={() => complete(task)} className='bi-toggle-off task-action' style={{color:'grey'}}></i>)
        }
    }

    const taskCompleted = {
        color: 'gray',
        fontWeight: 'bold',
        textDecoration: 'line-through'
    }

    const taskPending = {
        fontWeight: 'bold',
        color: 'tomato'
    }

    
  return (
    // la idea es que el componente pinte el nombre, descripcion, level y si esta completo o no

    <tr className='fw-normal' style={task.completed ? taskCompleted : taskPending} >
        <th>
            <span className='ms-2'> { task.name } </span>
        </th>
        <td className='align-middle'>
            <span>{task.description}</span>
        </td>
        <td className='align-middle'>
        {/** llamamos a la funcion y la ejecutamos */}
            {taskLevelBadge()}
        </td>
        <td className='align-middle'>
            {taskCompleteIcon()}
            <i className='bi-trash task-action' onClick={() => remove(task)} style={{color:'tomato'}}></i>

        </td>
    </tr>

  );
};

TaskComponent.propTypes = {
    //definimos que task es una instancia, nuestro task es una tarea(el padre (task_list le va a tener que pasar una tarea y lo hacemos con instaceOf))
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};

export default TaskComponent;
