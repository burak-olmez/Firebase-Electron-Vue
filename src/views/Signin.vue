<template>
    <div class="hero is-fullheight" id="signin">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-6 form">
                        <form @submit.prevent="signin">
                            <div class="control has-icons-left">
                                <input class="input is-rounded" type="email" placeholder="Email" v-model="email" required autofocus>
                                <span class="icon is-left">
                                    <i class="fa fa-user-o" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div class="control has-icons-left">
                                <input class="input is-rounded" type="password" placeholder="Password" v-model="password" required>
                                <span class="icon is-left">
                                    <i class="fa fa-lock"></i>
                                </span>
                            </div>
                            <button class="button is-rounded" type="submit"><i class="fa fa-sign-in" aria-hidden="true"></i> Sign in</button>
                            <a @click="signupPage">Sign up</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'signin',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        signin: function () {
            if (this.email != '' && this.password != '') {
                this.$store.dispatch('signin', {email: this.email, password: this.password})
                .then(() => {
                    this.$router.push('/')
                })
            }
        },
        signupPage: function () {
           this.$router.push('/signup')
        }
    }
}
</script>

<style scoped>
.hero {
    position: fixed !important;
    width: 100%;
    height: 100%;
    top: 0;
    left: -50px;
    background-color: var(--black);
}

.form {
    padding: 30px 50px;
    background-color: var(--dark);
    border-radius: 25px;
    border: 1px solid var(--border)
}

.form .control {
    margin-bottom: 10px;
}

.form .control input {
    background-color: transparent;
    color: var(--blurple) !important;
    border-color: var(--border);
}

.form button {
    margin: 20px 0;
    background-color: var(--blurple);
    border-color: var(--border);
    color: white;
    transition: all .5s ease-out;
}

.form button:hover,
.form button:focus {
    background-color: white;
    color: var(--blurple);
}

.form button > i {
    margin-right: 10px;
}

.form a {
    display: block;
    color: var(--greyple);
}

::-webkit-input-placeholder {
    color: #b6b6b6;
}

</style>
