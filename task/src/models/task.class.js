import { LEVELS } from "./levels.enum";

//este fichero tene una clase tipo tarea (class Task) con name, description, completed y level
export class Task {
    name = '';
    description = '';
    completed = false;
    level = LEVELS.NORMAL

    //constructor con nicializacion de todas las propiedade (props)
    constructor(name, description, completed, level) {
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.level = level
    }
}