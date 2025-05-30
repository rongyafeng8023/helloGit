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
import { useRouter } from 'vue-router'

const router  = useRouter()

const goTo = (path) => {
  console.log("我进来了")
  router.push(path)
}
</script>

<template>
    <div>

<!-- Unnamed (矩形) -->
<div id="u18" class="ax_default box_3">
  <div id="u18_div" class=""></div>
  
  <div id="u19" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (矩形) -->
<div id="u20" class="ax_default box_1">
  <div id="u20_div" class=""></div>
  
  <div id="u21" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (水平线) -->
<div id="u22" class="ax_default line">
  <img id="u22_img" class="img " :src="images.u22"/>
  
  <div id="u23" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (水平线) -->
<div id="u24" class="ax_default line">
  <img id="u24_img" class="img " :src="images.u22"/>
  
  <div id="u25" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (水平线) -->
<div id="u26" class="ax_default line">
  <img id="u26_img" class="img " :src="images.u22"/>
  
  <div id="u27" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (水平线) -->
<div id="u28" class="ax_default line">
  <img id="u28_img" class="img " :src="images.u22"/>
  
  <div id="u29" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (矩形) -->
<div id="u30" class="ax_default box_2">
  <div id="u30_div" class=""></div>
  
  <div id="u31" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (图片) -->
<div id="u32" class="ax_default image">
  <img id="u32_img" class="img " :src="images.u32"/>
  
  <div id="u33" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (图片) -->
<div id="u34" class="ax_default image">
  <img id="u34_img" class="img " :src="images.u34"/>
  
  <div id="u35" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (图片) -->
<div id="u36" class="ax_default image">
  <img id="u36_img" class="img " :src="images.u36"/>
  
  <div id="u37" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (图片) -->
<div id="u38" class="ax_default image">
  <img id="u38_img" class="img " :src="images.u38"/>
  
  <div id="u39" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (形状) -->
<div id="u40" class="ax_default icon">
  <img id="u40_img" class="img " :src="images.u40"/>
  
  <div id="u41" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (矩形) -->
<div id="u42" class="ax_default _文本段落">
  <div id="u42_div" class=""></div>
  
  <div id="u43" class="text">
    <p @click="goTo('/opportunity')"><span>商机管理</span></p>
  </div>
</div>

<!-- Unnamed (矩形) -->
<div id="u44" class="ax_default _文本段落">
  <div id="u44_div" class=""></div>
  
  <div id="u45" class="text">
    <p><span>合同管理</span></p>
  </div>
</div>

<!-- Unnamed (矩形) -->
<div id="u46" class="ax_default _文本段落">
  <div id="u46_div" class=""></div>
  
  <div id="u47" class="text">
    <p><span>回款管理</span></p>
  </div>
</div>

<!-- Unnamed (矩形) -->
<div id="u48" class="ax_default _文本段落">
  <div id="u48_div" class=""></div>
  
  <div id="u49" class="text">
    <p><span>报表管理</span></p>
  </div>
</div>

<!-- Unnamed (矩形) -->
<div id="u50" class="ax_default _文本段落">
  <div id="u50_div" class=""></div>
  
  <div id="u51" class="text">
    <p @click="goTo('/home')"><span>首页</span></p>
  </div>
</div>

<!-- Unnamed (形状) -->
<div id="u52" class="ax_default icon">
  <img id="u52_img" class="img " :src="images.u52"/>
  
  <div id="u53" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (矩形) -->
<div id="u54" class="ax_default _文本段落">
  <div id="u54_div" class=""></div>
  
  <div id="u55" class="text">
    <p><span>商机转化率</span></p>
  </div>
</div>

<!-- Unnamed (矩形) -->
<div id="u56" class="ax_default _文本段落">
  <div id="u56_div" class=""></div>
  
  <div id="u57" class="text">
    <p><span>合同汇总表</span></p>
  </div>
</div>

<!-- Unnamed (矩形) -->
<div id="u58" class="ax_default _文本段落">
  <div id="u58_div" class=""></div>
  
  <div id="u59" class="text">
    <p><span>回款汇总表</span></p>
  </div>
</div>

<!-- Unnamed (水平线) -->
<div id="u60" class="ax_default line">
  <img id="u60_img" class="img " :src="images.u22"/>
  
  <div id="u61" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (垂直线) -->
<div id="u66" class="ax_default line">
  <img id="u66_img" class="img " :src="images.u66"/>
  
  <div id="u67" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (形状) -->
<div id="u68" class="ax_default icon">
  <img id="u68_img" class="img " :src="images.u68"/>
  
  <div id="u69" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>
</div>
</template>

<style scoped>

</style>