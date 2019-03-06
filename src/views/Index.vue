<template>
    <div class="note-index">
        <router-view></router-view>
    </div>
</template>


<script>
    import Login from '../components/Login'

    export default {
        components: {
            Login
        },
        data() {
            return {}
        }
    }

</script>

<style lang="scss" scoped>
    .note-index {
        position: absolute;
        display: flex;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        justify-content: center;
        align-items: center;
    }
</style>