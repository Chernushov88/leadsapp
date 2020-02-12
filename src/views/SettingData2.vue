<template>
    <main class="main">
        <!-- Заголовок страницы -->
        <header class="main-header">
            <div class="row">
                <div class="col col-9 col-hd-desktop-8 col-mob-12">
                    <div class="page-header-info">
                        <!-- Тайтл страницы -->
                        <div class="page-title page-title-inner">
                            <h1 class="text text-arrow">Настройка формы</h1>
                        </div><!-- page-title -->
                    </div>
                </div><!-- total-result -->
                <div class="col col-3 col-hd-desktop-4 col-mob-12">

                </div>
            </div>
        </header><!-- //section-header -->
        <div class="main-content">
            <div class="elements-section">
                <div class="elements-list">
                    <div class="row">
                        <SettingDataDefault2/>
                        <SettingDataReceived2/>
                    </div>
                </div>
            </div>
        </div><!-- //content -->
    </main><!-- //middle -->
</template>

<script>
import SettingDataDefault2 from "../components/SettingDataDefault2";
import SettingDataReceived2 from "../components/SettingDataReceived2";
export default {
    components: {
        SettingDataDefault2,
        SettingDataReceived2
    }
}
</script>

<style scoped>

</style>
