<template>
    <div id="profile">
        <app-empty-page title="Profile Page" :subtitle="email"></app-empty-page>
    </div>
</template>

<script>
import EmptyPage from '@/components/EmptyPage.vue'

export default {
    name: 'profile',
    components: {
        appEmptyPage: EmptyPage
    },
    computed: {
        email: function () {
            return this.$store.getters.getEmail
        }
    }
}
</script>