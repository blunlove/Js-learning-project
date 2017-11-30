<template>
    <div class="good_module" is="router-link" :to="{ path:'/detail', query: good }">
        <div class="good_module_image" :style="{backgroundImage: `url(${good.icon})`}">
        </div>
        <div class="good_module_title">
            <div class="good_module_title_chinese">
                <div>{{ good.name }}</div>
                <div>{{ good.name2 }}</div>
            </div>
            <div class="good_module_title_line"></div>
            <div class="good_module_title_english">
                <div>{{ good.english1 }}</div>
                <div>{{ good.english2 }}</div>
            </div>
        </div>
        <div class="good_module_shadow"></div>
    </div>
</template>

<script>
export default {
    name: 'good_module',
    props: ['good'],
}
</script>