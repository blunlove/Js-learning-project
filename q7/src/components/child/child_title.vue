<template>
    <div class="child_title">
        <div class="child_title_title">{{ headerData.chinese }}</div>
        <div class="child_title_line"></div>
        <div class="child_title_title2">{{ headerData.english }}</div>
    </div>
</template>

<script>
export default {
    name: 'child_title',
    props: ['headerData'],
}
</script>