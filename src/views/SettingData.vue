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
                        <SettingDataDefault/>
                        <SettingDataReceived/>
                    </div>
                </div>
            </div>
        </div><!-- //content -->
    </main><!-- //middle -->
</template>

<script>
import SettingDataDefault from "../components/SettingDataDefault";
import SettingDataReceived from "../components/SettingDataReceived";
export default {
    components: {
        SettingDataDefault,
        SettingDataReceived
    }
}
</script>

<style leng="less">

</style>
