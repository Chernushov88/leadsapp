<template>
    <main class="main">
        <!-- Заголовок страницы -->
        <header class="main-header">
            <div class="row">
                <div class="col col-9 col-hd-desktop-8 col-mob-12">
                    <div class="page-header-info">
                        <!-- Тайтл страницы -->
                        <div class="page-title page-title-inner">
                            <h1 class="text text-arrow">
                                <div class="arrow"><svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.26624 9.00381L11 2.26976C11.1854 2.08478 11.2874 1.83746 11.2874 1.57376C11.2874 1.3099 11.1854 1.06273 11 0.877463L10.4099 0.287707C10.2248 0.102146 9.97736 0 9.71365 0C9.44994 0 9.20277 0.102146 9.0175 0.287707L0.999894 8.30517C0.813894 8.49102 0.712041 8.73937 0.712772 9.00337C0.712041 9.26854 0.813748 9.51659 0.999894 9.70259L9.01004 17.7123C9.19531 17.8979 9.44248 18 9.70633 18C9.97004 18 10.2172 17.8979 10.4026 17.7123L10.9925 17.1225C11.3764 16.7387 11.3764 16.1138 10.9925 15.7301L4.26624 9.00381Z" fill="#D3D3D3"/>
                                </svg></div>
                                <div class="h1-text">Статистика</div>
                                <a href="#" @click="isActive = !isActive">Clothing page</a><a href="#">Форма 3</a>
                            </h1>
                            <div class="modal" :class="{'active': isActive}">
                                <div class="modal-in">
                                    <div class="select-pages">Выберите страницу</div>
                                    <ul class="list">
                                        <li><a href="#" class="active">Clothing page</a></li>
                                        <li><a href="#">Тестовая страница</a></li>
                                        <li><a href="#">Test 2</a></li>
                                        <li><a href="#">Для online-школы</a></li>
                                        <li><a href="#">Новая страница</a></li>
                                        <li><a href="#">Без названия</a></li>
                                        <li><a href="#">Новый проект</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div><!-- page-title -->
                    </div>
                </div><!-- total-result -->
                <div class="col col-3 col-hd-desktop-4 col-mob-12">
                    <div class="catalog-view">
                        <ul class="catalog-view-in">
                            <li :class="{active: activeLink === 1}">
                                <a @click.prevent="activeLink = 1, currentTab = 'Tab'" class="catalog-view__button" >
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="8" height="8" rx="1" />
                                        <rect x="10" width="8" height="8" rx="1" />
                                        <rect x="10" y="10" width="8" height="8" rx="1" />
                                        <rect y="10" width="8" height="8" rx="1" />
                                    </svg>
                                </a>
                            </li>
                            <li :class="{active: activeLink === 2}">
                                <a @click.prevent="activeLink = 2, currentTab = 'Tab2'" class="catalog-view__button" >
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.735235 15.2209C0.32918 15.2209 0 15.5501 0 15.9562V18.3203C0 18.7264 0.32918 19.0556 0.735235 19.0556H9.19621V15.2209H0.735235Z"/>
                                        <path d="M19.2648 15.2209H10.8179V19.0556H19.2648C19.6708 19.0556 20 18.7264 20 18.3203V15.9562C20 15.5501 19.6708 15.2209 19.2648 15.2209Z"/>
                                        <path d="M19.2648 9.76538H10.8179V13.5994H19.2648C19.6708 13.5994 20 13.2702 20 12.8642V10.5006C20 10.0946 19.6708 9.76538 19.2648 9.76538Z"/>
                                        <path d="M0.735235 9.76538C0.32918 9.76538 0 10.0946 0 10.5006V12.8642C0 13.2702 0.32918 13.5994 0.735235 13.5994H9.19621V9.76538H0.735235Z"/>
                                        <path d="M19.2648 0.94458C18.6497 0.94458 1.63875 0.94458 0.735234 0.94458C0.32918 0.94458 0 1.27376 0 1.67981V7.26895C0 7.67501 0.32918 8.00419 0.735234 8.00419C1.5432 8.00419 18.4522 8.00419 19.2648 8.00419C19.6708 8.00419 20 7.67501 20 7.26895V1.67981C20 1.27376 19.6708 0.94458 19.2648 0.94458Z"/>
                                    </svg>
                                </a>
                            </li>

                        </ul>
                        <div class="generat-report">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.67188 8.4375C3.09732 8.4375 3.48239 8.2668 3.76694 7.99269L5.32796 8.77313C5.32013 8.83672 5.30859 8.8992 5.30859 8.96484C5.30859 9.83716 6.01831 10.5469 6.89062 10.5469C7.76294 10.5469 8.47266 9.83716 8.47266 8.96484C8.47266 8.72136 8.41278 8.49339 8.31404 8.28712L10.4317 6.16951C10.6379 6.26825 10.8659 6.32812 11.1094 6.32812C11.9817 6.32812 12.6914 5.61841 12.6914 4.74609C12.6914 4.58185 12.6591 4.42653 12.6124 4.27753L14.4524 2.89792C14.7034 3.0656 15.0043 3.16406 15.3281 3.16406C16.2004 3.16406 16.9102 2.45435 16.9102 1.58203C16.9102 0.709717 16.2004 0 15.3281 0C14.4558 0 13.7461 0.709717 13.7461 1.58203C13.7461 1.74628 13.7784 1.9016 13.8251 2.0506L11.9851 3.43021C11.7341 3.26253 11.4332 3.16406 11.1094 3.16406C10.2371 3.16406 9.52734 3.87378 9.52734 4.74609C9.52734 4.98958 9.58722 5.21754 9.68596 5.42381L7.56834 7.54143C7.36208 7.44269 7.13411 7.38281 6.89062 7.38281C6.46518 7.38281 6.08011 7.55351 5.79556 7.82762L4.23454 7.04718C4.24237 6.9836 4.25391 6.92111 4.25391 6.85547C4.25391 5.98315 3.54419 5.27344 2.67188 5.27344C1.79956 5.27344 1.08984 5.98315 1.08984 6.85547C1.08984 7.72778 1.79956 8.4375 2.67188 8.4375Z" fill="#F04E23"/>
                                <path d="M17.4727 16.9453H16.9102V5.80078C16.9102 5.50937 16.6742 5.27344 16.3828 5.27344H14.2734C13.982 5.27344 13.7461 5.50937 13.7461 5.80078V16.9453H12.6914V8.96484C12.6914 8.67343 12.4555 8.4375 12.1641 8.4375H10.0547C9.76328 8.4375 9.52734 8.67343 9.52734 8.96484V16.9453H8.47266V13.1836C8.47266 12.8922 8.23672 12.6562 7.94531 12.6562H5.83594C5.54453 12.6562 5.30859 12.8922 5.30859 13.1836V16.9453H4.25391V11.0742C4.25391 10.7828 4.01797 10.5469 3.72656 10.5469H1.61719C1.32578 10.5469 1.08984 10.7828 1.08984 11.0742V16.9453H0.527344C0.235931 16.9453 0 17.1812 0 17.4727C0 17.7641 0.235931 18 0.527344 18H17.4727C17.7641 18 18 17.7641 18 17.4727C18 17.1812 17.7641 16.9453 17.4727 16.9453Z" fill="#F04E23"/>
                            </svg>
                            <div>Сгенерировать отчет</div>
                        </div>
                    </div>
                </div>
            </div>
        </header><!-- //section-header -->
        <div class="main-content">
            <div class="elements-section">
                <div class="elements-list">
                    <div class="row" v-if="currentTab == 'Tab'">
                        <StatisticCard
                            v-for="(icon, index) in svgIcons"
                            :key="index"
                            :icon="icon"
                        />
                    </div>
                    <div class="row" v-if="currentTab == 'Tab2'">
                        <div class="col col-12">
                            <div class="table-scroll">
                                <table class="table">
                                    <thead>
                                    <tr>
                                        <th>Название страницы</th>
                                        <th>Форма</th>
                                        <th>Номер телефона</th>
                                        <th><SvgIconTimeData /> Время и дата</th>
                                        <th>Куду попала заявка</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <StatisticTableRow
                                        v-for="(icon, index) in svgIcons"
                                        :key="index"
                                        :icon="icon"
                                    />
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
                <StatisticCardMore />
            </div>
        </div><!-- //content -->
    </main><!-- //middle -->
</template>
<script>
import StatisticCardMore from "../components/StatisticCardMore";
import StatisticCard from "../components/StatisticCard";
import StatisticTableRow from "../components/StatisticTableRow";
import SvgIconTimeData from '@/components/svg/SvgIconTimeData'

export default {

    data(){
        return{
            currentTab: 'Tab',
            activeLink: 1,
            svgIcons: [
                {
                    type: 'telegram',
                    active: true,
                    name: 'telegram'
                },
                {
                    type: 'messege',
                    active: true,
                    name: 'messege'
                },
                {
                    type: 'paper',
                    active: true,
                    name: 'paper'
                },
            ],
            isActive: false,
        }
    },
    components: {
        StatisticCard,
        StatisticCardMore,
        StatisticTableRow,
        SvgIconTimeData
    },

}
</script>
<style scoped lang="less">
    .main-content{
        padding-top: 13px;
    }
    @media only screen and (min-width : 1280px) {
        .main-content {
            /*display: flex;*/
            /*align-items: center;*/
        }
    }
    .page-title{
        &-inner{
            position: relative;
         }
    }
    .modal{
        display: none;
        position: absolute;
        top: 200%;
        left: 35%;
        z-index: 9;
        width: 240px;
        border-radius: 15px;
        background-color: white;
        padding: 20px 20px 20px 25px;
        margin-bottom: 30px;
        min-height: 140px;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: 0 20px 30px rgba(0, 0, 0, 0);
        transition: all 0.2s ease-in-out;
        box-shadow: 0px 25px 45px rgba(0, 0, 0, 0.18);
        &.active{
            display: flex;
        }
        &:hover {
            box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
        }
        &-in{
            position: relative;
            &:before{
                width: 20px;
                height: 20px;
                content: '';
                position: absolute;
                left: 5px;
                top: -30px;
                z-index: 9;
                /*transform: translate(-50%, 0);*/
                background: #FFFFFF;
                transform: rotate(-45deg);
            }
        }
        .select-pages{
            margin-bottom: 15px;
            font-size: 15px;
            color: #B6B6B6;
        }
        .list{
            padding: 0;
            margin: 0;
            li{
                position: relative;
                margin: 0 0 5px 0;
                padding: 0;
                &:before{display: none;}
                a{
                    display: block;
                    padding: 5px 0 5px 25px;
                    font-family: 'PT_Root_UI_Medium';
                    font-size: 16px;

                    &.active, &:hover{
                        &:before{
                            width: 8px;
                            height: 8px;
                            border: 4px solid #00ACDC;
                        }
                    }
                    &:before{
                        content: '';
                        position: absolute;
                        left: 0;
                        top: 50%;
                        transform: translate(0, -50%);
                        width: 16px;
                        height: 16px;
                        background: #E4E4E4;
                        border-radius: 50%;
                        border: 0;
                    }
                }
            }
        }
    }
    @media only screen and (max-width: 500px){
        .modal{
            top: 120%;
            left: 0;
        }
    }
    .main-header .text {
        margin: 0;
        display: flex;
        flex-wrap: wrap;
    }
    .elements-section{
        width: 100%;
    }
    .table-scroll{
        overflow-y: auto;
    }
    .table{
        overflow: hidden;
        min-width: 500px;
        background: #fff;
        border-radius: 15px;
    }
    .table th{
        height: 40px;
        vertical-align: middle;
        padding: 0 5px 0 15px;
        text-align: left !important;
        font-size: 14px;
        border: 1px solid #E5E5E5;
        border-top: 0;
        border-left: 0;
        border-top: 0;
        color: #B6B6B6;
        &:last-child{
            border-raight: 0;
        }
    }
    @media screen and (max-width: 667px){
        .table th {
            padding-left: 10px;
            svg{display: none;}
        }
        .catalog-view {
            margin: 0;
            justify-content: space-between;
        }
    }


</style>
