<template>
    <div class="col col-3 col-hd-desktop-4 col-desktop-6 col-mob-12">
        <div class="element-cart">
            <div class="element-cart-header">
                <!-- заголовок елемента -->
                <div class="header-info">
                    <h3 class="title"><a href="#" class="link">Тестовая страница</a></h3>
                    <span class="date">11.01.2018</span>
                </div>
                <!-- настройки елемента -->
                <div class="settings">
                    <Svg3VDots/>
                </div>
            </div><!-- //element-cart-header -->
            <!-- контентная часть елемента -->
            <div class="element-cart-content">
                <div class="element-cart-content-info">
                    <div class="list">
                        <div class="item">
                            <a href="#" class="link">
                                <span class="quantity">25</span>
                                <span class="text">форм</span>
                            </a>
                        </div>
                        <div class="item">
                            <a href="#" class="link">
                                <span class="quantity">3</span>
                                <span class="text">заявки</span>
                            </a>
                        </div>
                    </div><!-- //list -->
                </div><!-- //element-cart-content-info -->
                <!-- сопряжение с социальными сетям и контактная информация -->
                <div class="connect">
                    <div class="list">
                        <div class="item active">
                            <a href="#" class="link">
                                <SvgFacebookCircle/>
                            </a>
                        </div>
                    </div><!-- //list -->
                </div><!-- //connect -->
            </div><!-- //element-cart-content -->
        </div><!-- //element-cart -->
    </div>
</template>

<script>
import SvgFacebookCircle from '@/components/svg/SvgFacebookCircle'
import Svg3VDots from '@/components/svg/Svg3VDots'

export default {
    components: {
        SvgFacebookCircle,
        Svg3VDots,
    }
}
</script>
<!-- Стили компонента -->

<style scoped>


</style>
