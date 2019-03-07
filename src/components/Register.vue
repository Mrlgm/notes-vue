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
            <span>
                <input ref="inputImg" style="display:none"
                       name="imgLocal" type='file'
                       accept="image/*" @change="selectImg">
                <vi-button @click="update" isRipple>
                    上传头像
                </vi-button>
            </span>
            <vi-input v-model="avatar" readonly></vi-input>
        </div>
        <div class="register-button">
            <router-link to="/">有账号了吗？赶紧登录吧</router-link>
            <vi-button>注册</vi-button>
        </div>
    </div>
</template>

<script>
    import auth from '../api/auth'

    export default {
        name: "Register",
        data() {
            return {
                avatar: 'http://api.wwnight.cn/img/1551924112601.jpeg'
            }
        },
        methods: {
            selectImg(e) {
                let file = e.target.files[0];
                let param = new FormData(); //创建form对象
                param.append('file', file, file.name);//通过append向form对象添加数据
                auth.postAvatar({param}).then((e) => {
                    this.avatar = e.data
                })
            },
            update() {
                this.$refs.inputImg.click()
            }
        }
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
                width: 150px;
                margin-right: 10px;
                display: flex;
                justify-content: center;
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