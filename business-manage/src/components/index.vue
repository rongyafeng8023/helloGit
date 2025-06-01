<script setup>
const images = {
  u22: new URL('@/assets/images/home/u22.png', import.meta.url).href,
  u32: new URL('@/assets/images/home/u32.png', import.meta.url).href,
  u34: new URL('@/assets/images/home/u34.png', import.meta.url).href,
  u36: new URL('@/assets/images/home/u36.png', import.meta.url).href,
  u38: new URL('@/assets/images/home/u38.png', import.meta.url).href,
  u40: new URL('@/assets/images/home/u40.png', import.meta.url).href,
  u52: new URL('@/assets/images/home/u52.png', import.meta.url).href,
  u66: new URL('@/assets/images/home/u66.png', import.meta.url).href,
  u68: new URL('@/assets/images/home/u68.png', import.meta.url).href,
  u84: new URL('@/assets/images/home/u84.png', import.meta.url).href,
  u106: new URL('@/assets/images/home/u106.png', import.meta.url).href,
  u112: new URL('@/assets/images/home/u112.png', import.meta.url).href,
  u4: new URL('@/assets/images/home/u4.png', import.meta.url).href
}
import Menu1 from './menu.vue'
import Title_b from './title.vue'

</script>

<template>
    <div id="base" class="">

      <!-- Unnamed (矩形) -->
      <div id="u18" class="ax_default box_3">
        <div id="u18_div" class=""></div>
        <div id="u19" class="text" style="display:none; visibility: hidden">
          <p><span></span></p>
        </div>
      </div>
      <!--菜单栏-->
      <Menu1/>
      

    <div id="u94" class="ax_default line">
      <img id="u94_img" class="img " :src="images.u84"/>
      
      <div id="u95" class="text" style="display:none; visibility: hidden">
        <p><span></span></p>
      </div>
    </div>
      <router-view/>
    <!--标题栏-->
      <Title_b/>
      
</div>
</template>

<style scoped>

</style>