<template>
    <tr>
        <td><a href="#">Для онлайн-школы</a></td>
        <td>Форма 3</td>
        <td class="td-phone">+7 932 849-89-95</td>
        <td>13:02:34:35   <span>11.01.2018</span></td>
        <td><SvgTelegram />Telegram</td>
    </tr>
</template>

<script>
    import SvgTelegram from '@/components/svg/SvgTelegram'

    export default {
        components: {
            SvgTelegram
        }
    }
</script>

<style scoped>
    .table td{
        height: 40px;
        vertical-align: middle;
        padding: 0 5px 0 15px;
        text-align: left;
        border: 1px solid #E5E5E5;
        font-family: "PT_Root_UI_Bold", sans-serif;
        font-size: 13px;
        color: #444;
    }
    .table tr:hover,
    .table tr:hover td{
        background: #F1F1F1 !important;
    }
    .table td span{
        display: inline-block;
        margin-left: 10px;
        font-family: "PT_Root_UI_Regular", sans-serif;
        color: #B6B6B6;
    }
    .table td svg{
        float: left;
        margin: 4px 5px 0 0;
    }
    @media only screen and (max-width: 767px){
        .table td {min-width: 70px;padding-left: 10px;}
        .table td:first-child{
            min-width: 135px;
        }
        .table td.td-phone{min-width: 115px;font-size: 12px;}
        .table td span{display: block; margin: 0;}
    }
</style>