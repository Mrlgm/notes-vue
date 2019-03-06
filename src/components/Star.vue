<template>
    <div class="wrapper">
        <Icon class="star" v-for="n in 5" @click.native="onClick(n)" :key="n" name="xingxing-false"></Icon>
        <div class="star-wrapper">
            <Icon v-for="n in num" :key="n" @click.native="onClick(n)"  class="star" name="xingxing-true"></Icon>
        </div>
    </div>
</template>

<script>
    import Icon from './Icon'

    export default {
        name: "Star",
        components: {
            Icon
        },
        props: {
            num: {
                type: Number,
                default: 0
            }
        },
        methods: {
            onClick(n) {
               this.$emit('update:num', n)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper {
        display: flex;
        align-items: center;
        position: relative;
        color: #EAEAEA;

        .star {
            margin-right: 5px;
        }

        .star-wrapper {
            position: absolute;
        }
    }
</style>