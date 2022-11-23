const { createApp } = Vue

createApp({
    data() {
        return {
            tasks: [
                {
                    text: "task di prova",
                    done: false,
                }
            ]
        }
    },
    methods: {

    }
}).mount("#app")