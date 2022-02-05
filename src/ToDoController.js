import { Controller } from "../lib/stimulus.js"

/**
 * @typedef {Object} Task
 * @property {string} value
 * @property {boolean} done
 */
export class ToDoController extends Controller {
    // Targets we defined in HTML with data-todo-target="<name>"
    static targets = [ "input", "list" ];

    /**
     * Form-Submit handler to add a new task to the list
     * @param {SubmitEvent} event
     */
    add(event) {
        event.preventDefault();
        let value = this.inputTarget.value;
        let task = {
            value: value,
            done: false
        };
        this.addTaskToList(task);
        this.inputTarget.value = "";
    }

    /**
     * Delete the task from the list
     * @param {Event} event
     */
    delete(event) {
        event.target.parentElement.remove();
    }

    /**
     * Adds the given task to the list
     *
     * @param {Task} task
     */
    addTaskToList(task) {
        let element = document.createElement("DIV")
        element.innerText = task.value;

        let deleteButton = document.createElement("BUTTON");
        deleteButton.innerText = "X";
        deleteButton.setAttribute("data-action", "click->todo#delete");

        element.appendChild(deleteButton);
        this.listTarget.appendChild(element);
    }

}
