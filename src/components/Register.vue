<template>
    <div class="register">
        <div class="register-input">
            <span>账号：</span>
            <vi-input v-model="username" placeholder="请输入用户名"></vi-input>
        </div>
        <div class="register-input">
            <span>密码：</span>
            <vi-input v-model="password" placeholder="请输入密码"></vi-input>
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
            <img :src="avatar" alt="">
        </div>
        <div class="register-button">
            <router-link to="/">有账号了吗？赶紧登录吧</router-link>
            <vi-button @click="onClick">注册</vi-button>
        </div>
    </div>
</template>

<script>
    import auth from '../api/auth'
    import {mapActions} from 'vuex'

    export default {
        name: "Register",
        data() {
            return {
                username: '',
                password: '',
                avatar: 'http://api.wwnight.cn/img/1551924112601.jpeg'
            }
        },
        computed: {
            formatUsername() {
                return this.username.replace(/^\s* | \s*$/g, '')
            },
            formatPassword() {
                return this.password.replace(/^\s* | \s*$/g, '')
            }
        },
        methods: {
            ...mapActions(["register"]),
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
            },
            onClick() {
                if (this.formatUsername === '') {
                    return this.$toast('请输入正常的账号', {position: 'middle'})
                }
                if (this.formatPassword === '' || this.formatPassword.length < 6) {
                    return this.$toast('请输入最少六位数的密码', {position: 'middle'})
                }
                this.register({username: this.username, password: this.password, avatar: this.avatar})
                    .then((e) => {
                        this.$toast('注册成功，请登录')
                        this.$router.push({path: '/'})
                    }, (e) => {
                        this.$toast(e.msg)
                    })
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

            > img {
                height: 40px;
                width: 40px;
                border-radius: 50%;
                box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.75);
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