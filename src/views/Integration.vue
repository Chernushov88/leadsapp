<template>
    <div>
        <main class="main">
            <!-- Заголовок страницы -->
            <header class="main-header">
                <div class="row">
                    <div class="col col-9 col-hd-desktop-8 col-mob-12">
                        <div class="page-header-info">
                            <!-- Тайтл страницы -->
                            <div class="page-title">
                                <h1 class="text"><i class="arrow-left"></i>Доступные интеграции</h1>
                            </div><!-- page-title -->
                        </div>
                    </div><!-- total-result -->

                </div>
            </header><!-- //section-header -->
            <div class="main-content">
                <div class="elements-section">
                    <div class="elements-list">
                        <div class="row">
                            <IntegrationCard v-for="i in 3" :item="i" :key="i"/>
                        </div>
                    </div>
                </div>
            </div><!-- //content -->
        </main><!-- //middle -->
    </div>
</template>

<script>
    import IntegrationCard from '../components/IntegrationCard'
    export default {
        components:{
            IntegrationCard
        }
    }
</script>

<style scoped>

</style>
