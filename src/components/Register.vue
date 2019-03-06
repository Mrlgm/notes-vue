<template>
    <div class="register">
        <div class="register-input">
            <span>账号：</span>
            <vi-input placeholder="请输入用户名"></vi-input>
        </div>
        <div class="register-input">
            <span>密码：</span>
            <vi-input placeholder="请输入密码"></vi-input>
        </div>
        <div class="register-input">
            <span>头像：</span>
            <vi-input placeholder="请输入头像链接"></vi-input>
        </div>
        <div class="register-button">
            <router-link to="/">有账号了吗？赶紧登录吧</router-link>
            <vi-button>注册</vi-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Register"
    }
</script>

<style lang="scss" scoped>
    .register {
        display: flex;
        flex-direction: column;

        .register-input {
            display: flex;
            align-items: center;

            > span {
                width: 70px;
            }

            margin-bottom: 10px;
        }

        .register-button {
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