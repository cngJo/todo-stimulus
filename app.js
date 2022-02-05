import { Application } from './lib/stimulus.js'
import { ToDoController } from "./src/ToDoController.js";

// Start up the stimulus application
window.Stimulus = Application.start();

// Register all needed controllers
Stimulus.register("todo", ToDoController);
