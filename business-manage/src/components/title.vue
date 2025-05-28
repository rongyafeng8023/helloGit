<template>
    <div>
        <!-- Unnamed (矩形) -->
<div id="u100" class="ax_default box_1">
  <div id="u100_div" class=""></div>
  <!-- Unnamed () -->
  <div id="u101" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (矩形) -->
<div id="u102" class="ax_default _二级标题">
  <div id="u102_div" class=""></div>
  <!-- Unnamed () -->
  <div id="u103" class="text">
    <p><span>商机管理系统</span></p>
  </div>
</div>

<!-- Unnamed (图片) -->
<div id="u104" class="ax_default image">
  <img id="u104_img" class="img " :src="images.u4"/>
  <!-- Unnamed () -->
  <div id="u105" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (图片) -->
<div id="u106" class="ax_default image">
  <img id="u106_img" class="img " :src="images.u106"/>
  <!-- Unnamed () -->
  <div id="u107" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (矩形) -->
<div id="u108" class="ax_default label">
  <div id="u108_div" class=""></div>
  <!-- Unnamed () -->
  <div id="u109" class="text">
    <p><span>用户注销</span></p>
  </div>
</div>

<!-- Unnamed (矩形) -->
<div id="u110" class="ax_default label">
  <div id="u110_div" class=""></div>
  <!-- Unnamed () -->
  <div id="u111" class="text">
    <p><span>欢迎您，XXX</span></p>
  </div>
</div>

<!-- Unnamed (图片) -->
<div id="u112" class="ax_default image">
  <img id="u112_img" class="img " :src="images.u112"/>
  <!-- Unnamed () -->
  <div id="u113" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

    </div>
</template>
<script setup>
const images = {
  u106: new URL('@/assets/images/home/u106.png', import.meta.url).href,
  u112: new URL('@/assets/images/home/u112.png', import.meta.url).href,
  u4: new URL('@/assets/images/home/u4.png', import.meta.url).href
}
</script>