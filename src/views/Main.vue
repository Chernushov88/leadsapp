<template>
    <main class="main">
        <!-- Заголовок страницы и фильтрация контента -->
        <header v-if="!activePreloader" class="main-header">
            <div class="row">
                <div class="col col-9 col-hd-desktop-8 col-mob-12">
                    <div class="page-header-info">
                        <!-- Тайтл страницы -->
                        <div class="page-title">
                            <h1 @click="activePreloader = !activePreloader" class="text" >Созданные страницы</h1>
                        </div><!-- page-  -->
                        <!-- Найденные результаты -->
                        <div class="show-result">
                            <span class="text">Всего:</span>
                            <span class="value"> 32</span>
                        </div>
                    </div>
                </div><!-- total-result -->
                <div class="col col-3 col-hd-desktop-4 col-mob-12">
                    <!-- Подключение компонента "Выпадающий фильтр" -->
                    <SelectFilter></SelectFilter>
                </div>
            </div>
        </header><!-- //section-header -->
        <div class="main-content">
            <!-- Найденные елементы  -->
            <div  v-if="!activePreloader" class="elements-section">
                <div class="elements-list">
                    <div class="row">
                        <!-- Подключение компонента "Елемент списка продуктов" -->
                        <PageCard v-for="i in '12345678910'" :item="i" :key="i"/>
                    </div><!-- //row -->
                </div><!-- //elements-list -->
            </div><!-- //elements-section -->
            <Preloader  v-if="activePreloader " />


        </div><!-- //content -->

    </main><!-- //middle -->
</template>
<script>
    import SelectFilter from '../components/SelectFilter'
    import PageCard from '../components/PageCard'
    import Preloader from '../components/Preloader'
    export default {
        data(){
            return{
                activePreloader: false,
            }
        },
        components: {
            SelectFilter,
            PageCard,
            Preloader,
        }
    }
</script>
<style scoped>
    .main-header .text {
        display: inline-block;
    }
</style>