<template>
    <div class="login">
        <div class="login-input">
            <span>账号：</span>
            <vi-input v-model="username" placeholder="请输入用户名"></vi-input>
        </div>
        <div class="login-input">
            <span>密码：</span>
            <vi-input v-model="password" placeholder="请输入密码"></vi-input>
        </div>
        <div class="login-button">
            <router-link to="/register">还没注册吧，赶紧注册一个</router-link>
            <vi-button @click="onClick">登录</vi-button>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "Login",
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            ...mapActions(['login']),
            onClick() {
                if (this.username === '') {
                    return this.$toast('请输入账号', {position: 'middle'})
                }
                if (this.password === '') {
                    return this.$toast('请输入密码', {position: 'middle'})
                }
                this.login({username: this.username, password: this.password})
                    .then(() => {
                        this.$router.push({path: '/home'})
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .login {
        display: flex;
        flex-direction: column;

        .login-input {
            display: flex;
            align-items: center;

            > span {
                width: 70px;
            }

            margin-bottom: 10px;
        }

        .login-button {
            display: flex;
            align-items: center;
            justify-content: space-between;

            > a {
                align-self: flex-end;
                color: #4DB4E7;
                text-decoration: none;
                font: 12px/1.5 Tahoma, Helvetica, Arial, '宋体', sans-serif;
                font-style: italic;

                &:visited {
                    color: #4DB4E7;
                }
            }
        }
    }
</style>