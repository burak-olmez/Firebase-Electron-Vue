<template>
    <div id="app">
        <div class="columns">
            <div class="column has-text-centered" id="nav" v-if="login">
                <router-link tag="li" to="/">
                    <i class="fa fa-home fa-lg" aria-hidden="true"></i>
                </router-link>
                <router-link tag="li" to="/profile">
                    <i class="fa fa-user fa-lg" aria-hidden="true"></i>
                </router-link>
                <router-link tag="li" to="/settings">
                    <i class="fa fa-user fa-cog" aria-hidden="true"></i>
                </router-link>
                <li @click="github">
                    <i class="fa fa-github fa-lg" aria-hidden="true"></i>
                </li>
                <li @click="logout">
                    <i class="fa fa-sign-out fa-lg" aria-hidden="true"></i>
                </li>
            </div>
            <transition name="fade"> 
                <router-view class="column has-text-centered" id="main"/>
            </transition>
        </div>
    </div>
</template>

<script>
import { shell } from 'electron'

export default {
    name: 'app',
    data() {
        return {
        }
    },
    computed: {
        login: function () {
            return this.$store.getters.getLogin
        }
    },
    methods: {
        github: function () {
            shell.openExternal('https://github.com/burak-olmez')
            shell.beep()
        },
        logout: function () {
            this.$store.dispatch('logout')
                .then(() => {
                    this.$router.push('/signin')
                })
        }
    }
}
</script>


<style>
@import url('./assets/css/bulma.min.css');
@import url('./assets/icons/css/font-awesome.min.css');

:root {
    --blurple: #7289DA;
    --greyple: #99AAB5;
    --dark: #2C2F33;
    --black: #23272A;
    --border: #7289DA49;
}

html, body, #app {
    height: 100%;
    width: 100%;
    overflow-x: auto !important;
    overflow-y: auto !important;
    background-color: var(--dark);
    user-select: none;
}

.fade-enter { opacity: 0; }
.fade-enter-active{ transition: opacity .3s ease-out; transition-delay: .3s}
.fade-leave-active { transition: opacity 0s ease-out; opacity: 0; }

::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 5px;
}
::-webkit-scrollbar-thumb {
    background-color: var(--blurple);
    border-radius: 5px;
}

#app > .columns {
    margin: 0 !important;
}

#nav {
    position: fixed;
    height: 100%;
    width: 50px;
    background-color: var(--black);
    color: white;
    border-right: 1px solid var(--border);
}

#nav > li {
    position: relative;
    list-style: none;
    cursor: pointer;
    padding: 5px 0;
    width: 100%;
}

#nav > li:last-child {
    position: absolute;
    bottom: 10px;
    transform: translateX(-25%)
}

#nav > li:hover {
    color: var(--greyple);
}

#nav .router-link-exact-active > i{
    color: var(--blurple)
}

#main {
    margin-left: 50px;
    padding: 0;
    color: white;
}

</style>
