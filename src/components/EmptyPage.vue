<template>
    <div class="hero is-success is-fullheight" id="emptypage">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    {{ title }}
                </h1>
                <h1 class="subtitle">
                    {{ subtitle }}
                </h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'emptypage',
    props: ['title', 'subtitle']
}
</script>

<style scoped>
.hero {
    background-color: transparent;
}
</style>
