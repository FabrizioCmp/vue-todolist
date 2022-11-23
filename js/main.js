const { createApp } = Vue

createApp({
    data() {
        return {
            tasks: [
                {
                    text: "task di prova",
                    done: false,
                },
                {
                    text: "task di prova2",
                    done: false,
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