<template>
    <div>
        <button @click="eClick()">事件</button>
    </div>
</template>

<script>
export default {
    name: 'indexP',
    data() {
        return {
            todos: [
                { text: 'Learn JavaScript' },
                { text: 'Learn Vue' },
                { text: 'Build something awesome' }
            ]
        }
    },
    methods: {
        eClick() {
            console.log(9999);
        }
    }
}
</script>