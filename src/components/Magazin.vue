<template>
    <div class="container mx-auto mt-16 px-12">
        <div class="brand__name">
            <h2>Ваши магазины</h2>
        </div>
        <div class="grid grid-cols-9 gap-4">
            <div class="col-span-3">
                <div class="brand__box">
                    <div class="brand__logo">
                        <img src="../assets/image/radius.png" alt="">
                    </div>
                    <div class="brand__text">
                        <h5>Товары из категории Акции и скидки Товары из категории....</h5>
                    </div>
                    <div class="brand__images">
                        <div class="brand__one">
                            <img src="../assets/image/bfarsace_201106_4269_012 1.png" alt="">
                        </div>
                        <div class="flex flex-col justify-between brand__second">
                            <img src="../assets/image/gh-best-tv-brands-1587581394 1.png" alt="">
                            <img src="../assets/image/lg-lfcs25426d-refrigerator-product-photos-7 1.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-3">
                <div class="brand__box">
                    <div class="brand__logo">
                        <img src="../assets/image/texnomart.png" alt="">
                    </div>
                    <div class="brand__text">
                        <h5>Товары из категории Акции и скидки Товары из категории....</h5>
                    </div>
                    <div class="brand__images">
                        <div class="brand__one">
                            <img src="../assets/image/Mask Group.png" alt="">
                        </div>
                        <div class="flex flex-col justify-between brand__second">
                            <img src="../assets/image/microwave-wattage-what-to-look-for-before-buying-1554472332 1.png" alt="">
                            <img src="../assets/image/GdcaWSadcCWbt3am8Typ3E 1.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-3">
                <div class="brand__box">
                    <div class="brand__logo">
                        <img src="../assets/image/clozzone.png" alt="">
                    </div>
                    <div class="brand__text">
                        <h5>Товары из категории Акции и скидки Товары из категории....</h5>
                    </div>
                    <div class="brand__images">
                        <div class="brand__one">
                            <img src="../assets/image/11092_1592550220_0535 1.png" alt="">
                        </div>
                        <div class="flex flex-col justify-between brand__second">
                            <img src="../assets/image/Rectangle 649.png" alt="">
                            <img src="../assets/image/50 1.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
  data: () => ({

  }),
  components: {

  }
}
</script>
<style scoped>
    .brand__box {
        background: #F1EFED;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
        border-radius: 5px;
        padding: 15px;
        margin: 15px;
        min-height: 330px;
        height: 330px;
    }
    .brand__images {
        display: flex;
        justify-content: space-between;
    }
    .brand__text {
        font-size: 14px;
        line-height: 16px;
        color: #000000;
        margin: 10px 0  ;
    }
    .brand__name {
        font-size: 48px;
        line-height: 56px;
        color: #023047;
        margin-left: 25px;
        margin-bottom: 20px;
    }
    .brand__one img {
        height: 210px;
    }
</style>
