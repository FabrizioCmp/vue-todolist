const { createApp } = Vue

createApp({
    data() {
        return {
            tasks: [
                {
                    text: "task di prova",
                    done: ""
                },
                {
                    text: "task di prova2",
                    done: ""
                }
            ],
            newTask: {
                text: "",
                done: ""
            }

        }
    },
    methods: {
        removeTask(index) {
            this.tasks.splice(index, 1)
        },
        onSubmit(){
            this.tasks.push({
                text: this.newTask.text,
                done: ""
            })
            this.newTask.text = ""
        }
    }
}).mount("#app")