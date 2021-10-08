<template>
    <div class="navbar__back">
        <div class="container mx-auto">
            <div class="flex justify-between">
                <div class="flex navbar__text">
                    <a href="#" class="flex">
                        <img src="../assets/svg/location.svg" alt="">
                        <span>Москва</span>
                    </a>
                    <a class="ml-4" href="#">Бесплатная доставка</a>
                </div>
                <div class="flex navbar__text">
                    <a href="#">
                        Продавайте на LogoName
                    </a>
                    <a class="ml-4" href="#">Ру</a>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Home',
    data: () => ({
        
    }),
    methods: {
        
    },
    components: {
    }
}
</script>
<style scoped>
    .navbar__back {
        background: linear-gradient(281.2deg, #15626B 8.26%, #1B7F8C 94.42%);
    }
    .navbar__text a {
        font-size: 14px;
        line-height: 25px;
        color: #D9D9D9;
    }
</style>