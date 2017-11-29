<template>
    <div class="standard">
        <div class="standard_title">{{ standard }}</div>
        <div class="standard_image"></div>
    </div>
</template>

<script>
let standard = 'EN817GB18145-2003国家标准试验'

export default {
    name: 'standard',
    data() {
        return {
            standard: standard,
        }
    },
}
</script>