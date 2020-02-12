<template>
    <div class="elements-section-more">
        <a href="#" class="btn btn-transparent">Показать еще</a>
        <a href="#" class="top"><SvgTop /></a>
    </div>
</template>

<script>
    import SvgTop from "../components/svg/SvgTop";
    export default {
        data(){
            return{

            }
        },
        components: {
            SvgTop,
        },
        methods: {
            visibleChecketPages: function(){
                // this.$event
            }
        }
    }
</script>

<style scoped lang="less">
    .elements-section-more{
        display: flex;
        margin: 0;
        padding: 1px;
        text-align: center;
        align-items: center;
        justify-content: center;
        .btn{
            width: 220px;
            margin: 0;
        }
        .top{
            overflow: hidden;
            display: flex;
            width: 50px;
            height: 50px;
            margin: 0 0 0 30px;
            border-radius: 50%;
            background: #E0E0E0;
            svg{
                margin: auto;
            }
            &:hover{
                background: #00ACDC;
            }
        }
    }
</style>