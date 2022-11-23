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
            ]
        }
    },
    methods: {
        removeTask(index) {
            this.tasks.splice(index, 1)
        }
    }
}).mount("#app")