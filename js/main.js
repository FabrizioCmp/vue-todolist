const { createApp } = Vue

createApp({
    data() {
        return {
            tasks: [
                {
                    text: "Comprare il pane",
                    done: false
                },
                {
                    text: "conquistare il mondo",
                    done: false
                }
            ],
            newTask: {
                text: "",
                done: false
            }

        }
    },
    methods: {

        //elimina il singolo task dall'array tasks
        removeTask(index) {
            this.tasks.splice(index, 1)
        },

        // al submit del from crea un nuovo oggetto Task e lo aggiunge all'array taks
        onSubmit() {
            this.tasks.push({
                text: this.newTask.text,
                done: false
            })
            this.newTask.text = ""
        },

        // al click sul testo del singolo taks cambia il valore di done
        clickTextTask(index) {
            if (this.tasks[index].done === true) {
                this.tasks[index].done = false;
            } else {
                this.tasks[index].done = true;
            }
        }
    }
}).mount("#app")