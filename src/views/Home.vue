<template>
    <div class="home">
        <header class="home-bar">
            <div class="title-note">
                <Icon name="note"></Icon>
                <span class="title">在线便签</span>
            </div>
            <div class="avatar">
                <img :src="user !== null && user.avatar" :alt="user !== null && user.username">
                <span>{{user !== null && user.username}}</span>
            </div>
        </header>
        <main class="main">
            <Note v-for="n in 10" :key="n" class="box"></Note>
        </main>
        <div @click="isWrite=!isWrite" class="add-note">
            <Icon name="add"></Icon>
        </div>
        <div class="logout">
            <Icon name="logout"></Icon>
        </div>
        <div v-if="isWrite" class="note-form-wrapper">
            <div class="note-form">
                <div class="title">
                    <h3>添加新标签</h3>
                    <Icon class="close" @click.native="isWrite=!isWrite" name="close"></Icon>
                </div>
                <div class="input">
                    <textarea placeholder="输入内容" class="textarea"></textarea>
                </div>
                <div class="grade">
                    <span>重要星级：</span>
                    <Star :num.sync="grade"></Star>
                </div>
                <div class="button">
                    <span class="add">添加</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Icon from '../components/Icon'
    import Note from '../components/Note'
    import Star from '../components/Star'
    import {mapGetters, mapActions} from 'vuex'
    import Notes from '../api/notes'

    export default {
        name: 'home',
        components: {
            Icon,
            Note,
            Star
        },
        data() {
            return {
                isWrite: false,
                grade: 0
            }
        },
        computed: {
            ...mapGetters(['user', 'isLogin'])
        },
        methods: {
            ...mapActions(['checkLogin'])
        },
        created() {
            this.checkLogin()

        }
    }
</script>

<style lang="scss" scoped>
    .home {
        .home-bar {
            border-bottom: 1px solid #EDEEEE;
            height: 70px;
            padding: 0 100px;
            display: flex;
            justify-content: space-between;

            .title-note {
                font-family: "webfont1", serif;
                font-size: 40px;
                display: flex;
                align-items: center;
            }

            .avatar {
                display: flex;
                align-items: center;

                > img {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    margin-right: 20px;
                }

                > span {
                    font-family: "webfont2", serif;
                }
            }
        }

        .main {
            position: absolute;
            top: 100px;
            left: 50%;
            transform: translateX(-50%);
            column-count: 4;
            column-gap: 10px;

            .box {
                margin-top: 10px;
                break-inside: avoid;

                &:nth-of-type(1) {
                    margin-top: 0;
                }
            }
        }

        .add-note {
            position: fixed;
            right: 200px;
            bottom: 100px;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #00D3AA;
            font-size: 30px;
            box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);
            cursor: pointer;
        }

        .logout {
            position: fixed;
            right: 200px;
            bottom: 20px;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #fff;
            font-size: 30px;
            box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);
            cursor: pointer;
        }

        .note-form-wrapper {
            position: fixed;
            top: 0;
            height: 100vh;
            width: 100vw;
            background-color: rgba(0, 211, 170, .5);
            display: flex;
            align-items: center;
            justify-content: center;

            .note-form {
                padding: 10px 15px;
                border-radius: 4px;
                width: 500px;
                background-color: #fff;

                .title {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    margin-bottom: 10px;

                    .close {
                        position: absolute;
                        right: 0;
                        top: 50%;
                        transform: translateY(-50%);
                        color: #D8D8D8;
                        font-size: 14px;
                        cursor: pointer;
                    }
                }

                .input {
                    height: 300px;

                    .textarea {
                        outline: none;
                        border: 1px solid #ECECEC;
                        background-color: #F5F5F5;
                        border-radius: 4px;
                        padding: 10px;
                        font-size: 16px;
                        resize: none;
                        width: 100%;
                        height: 100%;
                    }
                }

                .grade {
                    display: flex;
                    margin: 20px 0;
                    align-items: center;
                }

                .button {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 10px;
                    cursor: pointer;

                    .add {
                        color: #fff;
                        padding: 10px 20px;
                        height: 30px;
                        width: 100px;
                        display: flex;
                        border-radius: 15px;
                        align-items: center;
                        justify-content: center;
                        background-color: #00D3AA;
                    }
                }
            }
        }
    }

    @font-face {
        font-family: 'webfont1';
        src: url('//at.alicdn.com/t/webfont_yk3pn2a2s8i.eot'); /* IE9*/
        src: url('//at.alicdn.com/t/webfont_yk3pn2a2s8i.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('//at.alicdn.com/t/webfont_yk3pn2a2s8i.woff') format('woff'), /* chrome、firefox */
        url('//at.alicdn.com/t/webfont_yk3pn2a2s8i.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
        url('//at.alicdn.com/t/webfont_yk3pn2a2s8i.svg#杨任东竹石体-Bold') format('svg'); /* iOS 4.1- */
    }

    @font-face {
        font-family: 'webfont2';
        src: url('//at.alicdn.com/t/webfont_zvrsrk6yyta.eot'); /* IE9*/
        src: url('//at.alicdn.com/t/webfont_zvrsrk6yyta.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('//at.alicdn.com/t/webfont_zvrsrk6yyta.woff') format('woff'), /* chrome、firefox */
        url('//at.alicdn.com/t/webfont_zvrsrk6yyta.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
        url('//at.alicdn.com/t/webfont_zvrsrk6yyta.svg#站酷小薇体') format('svg'); /* iOS 4.1- */
    }
</style>