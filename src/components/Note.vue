<template>
    <div class="note-wrapper">
        <div class="header">
            <span class="time">2019年03月08日</span>
            <Icon name="close"></Icon>
        </div>
        <div class="content">
            我是哈哈哈哈，还有哈哈哈哈哈哈哈哈，还有哈哈哈哈哈
        </div>
        <div class="grade">
            <Star :num="grade"></Star>
        </div>
        <div class="complete">
            <div v-if="complete" class="finish">
                已完成
            </div>
            <div v-if="!complete" class="yes">
                <img style="height: 16px;width: 16px;" src="../assets/yes.png" alt="yes">
            </div>
        </div>
    </div>
</template>

<script>
    import Icon from './Icon'
    import Star from './Star'

    export default {
        name: "note",
        components: {
            Icon,
            Star
        },
        props: {
            grade: {
                type: Number,
                default: 3
            },
            complete: {
                type: Boolean,
                default: false
            },
            content: {
                type: String
            }
        },
        methods: {
            onClick(e) {
                console.log(e)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .note-wrapper {
        width: 250px;
        border: 1px solid #EDEDED;
        border-radius: 4px;
        padding: 16px;
        background: #fff;

        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 10px;
            border-bottom: 1px solid #EAEAEA;
            color: #D8D8D8;
            font-size: 14px;

            .time {
                color: #898989;
            }
        }

        .content {
            padding: 10px 0;
            border-bottom: 1px solid #EAEAEA;
        }

        .grade {
            padding: 20px 0;
        }

        .complete {
            font-size: 12px;
            color: #fff;
            display: flex;

            .finish {
                background-color: #4DB4E7;
                padding: 5px 12px;
                border-radius: 14px;

            }

            .yes {
                padding: 5px 12px;
                border-radius: 14px;
                width: 60px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 16px;
                background-color: #00D3AA;
            }
        }
    }
</style>