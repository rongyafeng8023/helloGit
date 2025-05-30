<script setup>
const images = {
  u189: new URL('@/assets/images/business_charge/u189', import.meta.url).href,
  u191: new URL('@/assets/images/business_charge/u191', import.meta.url).href,
  u193: new URL('@/assets/images/business_charge/u193', import.meta.url).href,
  u195: new URL('@/assets/images/business_charge/u195', import.meta.url).href,
  u196: new URL('@/assets/images/business_charge/u196', import.meta.url).href,
  u199: new URL('@/assets/images/business_charge/u199', import.meta.url).href,
  u201: new URL('@/assets/images/business_charge/u201', import.meta.url).href,
  u203: new URL('@/assets/images/business_charge/u203', import.meta.url).href,
  u205: new URL('@/assets/images/business_charge/u205', import.meta.url).href,
  u207: new URL('@/assets/images/business_charge/u207', import.meta.url).href,
  u209: new URL('@/assets/images/business_charge/u209', import.meta.url).href,
  u211: new URL('@/assets/images/business_charge/u211', import.meta.url).href,
  u213: new URL('@/assets/images/business_charge/u213', import.meta.url).href,
  u329: new URL('@/assets/images/business_charge/u329', import.meta.url).href,
  u331: new URL('@/assets/images/business_charge/u331', import.meta.url).href,
  u333: new URL('@/assets/images/business_charge/u333', import.meta.url).href,
  u335: new URL('@/assets/images/business_charge/u335', import.meta.url).href,
  u337: new URL('@/assets/images/business_charge/u337', import.meta.url).href,
  u339: new URL('@/assets/images/business_charge/u339', import.meta.url).href,
  u341: new URL('@/assets/images/business_charge/u341', import.meta.url).href,
  u371: new URL('@/assets/images/business_charge/u371', import.meta.url).href,
  u377: new URL('@/assets/images/business_charge/u377', import.meta.url).href,
  u387: new URL('@/assets/images/business_charge/u387', import.meta.url).href,
  u389: new URL('@/assets/images/business_charge/u389', import.meta.url).href,
  u416: new URL('@/assets/images/business_charge/u416', import.meta.url).href

}
console.log("我是商机页面")
</script>
<template>
    <div>
    <!-- 商机管理-->
        <div id="u144" class="ax_default _三级标题">
            <div id="u144_div" class=""></div>
            <!-- Unnamed () -->
            <div id="u145" class="text">
            <p><span>商机</span></p>
         </div>
      </div>
 <!-- Unnamed (矩形) -->
 <div id="u168" class="ax_default box_2">
        <div id="u168_div" class=""></div>
        <!-- Unnamed () -->
        <div id="u169" class="text" style="display:none; visibility: hidden">
          <p><span></span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u170" class="ax_default label">
        <div id="u170_div" class=""></div>
        <!-- Unnamed () -->
        <div id="u171" class="text">
          <p><span>商机规模：</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u172" class="ax_default label">
        <div id="u172_div" class=""></div>
        <!-- Unnamed () -->
        <div id="u173" class="text">
          <p><span>销售阶段：</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u174" class="ax_default box_3">
        <div id="u174_div" class=""></div>
        <!-- Unnamed () -->
        <div id="u175" class="text">
          <p><span>全部</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u176" class="ax_default label">
        <div id="u176_div" class=""></div>
        <!-- Unnamed () -->
        <div id="u177" class="text">
          <p><span>初步接洽</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u178" class="ax_default label">
        <div id="u178_div" class=""></div>
        <!-- Unnamed () -->
        <div id="u179" class="text">
          <p><span>确认需求</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u180" class="ax_default label">
        <div id="u180_div" class=""></div>
        <!-- Unnamed () -->
        <div id="u181" class="text">
          <p><span>方案/报价</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u182" class="ax_default label">
        <div id="u182_div" class=""></div>
        <!-- Unnamed () -->
        <div id="u183" class="text">
          <p><span>下次跟进时间：</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u184" class="ax_default label">
        <div id="u184_div" class=""></div>
        <!-- Unnamed () -->
        <div id="u185" class="text">
          <p><span>预计签单日期：</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u186" class="ax_default box_2">
        <div id="u186_div" class=""></div>
        <!-- Unnamed () -->
        <div id="u187" class="text">
          <p><span>查询</span></p>
        </div>
      </div>
      <!-- Unnamed (表格) -->
      <div id="u188" class="ax_default">

<!-- Unnamed (单元格) -->
<div id="u189" class="ax_default table_cell">
  <img id="u189_img" class="img " ::src="images.u189"/>
  <!-- Unnamed () -->
  <div id="u190" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u191" class="ax_default table_cell">
  <img id="u191_img" class="img " ::src="images.u191"/>
  <!-- Unnamed () -->
  <div id="u192" class="text">
    <p><span>客户名称</span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u193" class="ax_default table_cell">
  <img id="u193_img" class="img " ::src="images.u193"/>
  <!-- Unnamed () -->
  <div id="u194" class="text">
    <p><span>实际跟进时间</span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u195" class="ax_default table_cell">
  <img id="u195_img" class="img " ::src="images.u195"/>
  <!-- Unnamed () -->
  <div id="u196" class="text">
    <p><span>下次跟进时间</span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u197" class="ax_default table_cell">
  <img id="u197_img" class="img " ::src="images.u197"/>
  <!-- Unnamed () -->
  <div id="u198" class="text">
    <p><span>预计销售金额</span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u199" class="ax_default table_cell">
  <img id="u199_img" class="img " ::src="images.u199"/>
  <!-- Unnamed () -->
  <div id="u200" class="text">
    <p><span>签单概率</span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u201" class="ax_default table_cell">
  <img id="u201_img" class="img " ::src="images.u201"/>
  <!-- Unnamed () -->
  <div id="u202" class="text">
    <p><span>操作</span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u203" class="ax_default table_cell">
  <img id="u203_img" class="img " :src="images.u203"/>
  <!-- Unnamed () -->
  <div id="u204" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u205" class="ax_default table_cell">
  <img id="u205_img" class="img " :src="images.u205"/>
  <!-- Unnamed () -->
  <div id="u206" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u207" class="ax_default table_cell">
  <img id="u207_img" class="img " :src="images.u207"/>
  <!-- Unnamed () -->
  <div id="u208" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u209" class="ax_default table_cell">
  <img id="u209_img" class="img " :src="images.u209"/>
  <!-- Unnamed () -->
  <div id="u210" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u211" class="ax_default table_cell">
  <img id="u211_img" class="img " :src="images.u211"/>
  <!-- Unnamed () -->
  <div id="u212" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u213" class="ax_default table_cell">
  <img id="u213_img" class="img " :src="images.u213"/>
  <!-- Unnamed () -->
  <div id="u214" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u215" class="ax_default table_cell">
  <img id="u215_img" class="img " :src="images.u215"/>
  <!-- Unnamed () -->
  <div id="u216" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u217" class="ax_default table_cell">
  <img id="u217_img" class="img " :src="images.u203"/>
  <!-- Unnamed () -->
  <div id="u218" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u219" class="ax_default table_cell">
  <img id="u219_img" class="img " :src="images.u205"/>
  <!-- Unnamed () -->
  <div id="u220" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u221" class="ax_default table_cell">
  <img id="u221_img" class="img " :src="images.u207"/>
  <!-- Unnamed () -->
  <div id="u222" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u223" class="ax_default table_cell">
  <img id="u223_img" class="img " :src="images.u209"/>
  <!-- Unnamed () -->
  <div id="u224" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u225" class="ax_default table_cell">
  <img id="u225_img" class="img " :src="images.u211"/>
  <!-- Unnamed () -->
  <div id="u226" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u227" class="ax_default table_cell">
  <img id="u227_img" class="img " :src="images.u213"/>
  <!-- Unnamed () -->
  <div id="u228" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u229" class="ax_default table_cell">
  <img id="u229_img" class="img " :src="images.u215"/>
  <!-- Unnamed () -->
  <div id="u230" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u231" class="ax_default table_cell">
  <img id="u231_img" class="img " :src="images.u203"/>
  <!-- Unnamed () -->
  <div id="u232" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u233" class="ax_default table_cell">
  <img id="u233_img" class="img " :src="images.u205"/>
  <!-- Unnamed () -->
  <div id="u234" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u235" class="ax_default table_cell">
  <img id="u235_img" class="img " :src="images.u207"/>
  <!-- Unnamed () -->
  <div id="u236" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u237" class="ax_default table_cell">
  <img id="u237_img" class="img " :src="images.u209"/>
  <!-- Unnamed () -->
  <div id="u238" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u239" class="ax_default table_cell">
  <img id="u239_img" class="img " :src="images.u211"/>
  <!-- Unnamed () -->
  <div id="u240" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u241" class="ax_default table_cell">
  <img id="u241_img" class="img " :src="images.u213"/>
  <!-- Unnamed () -->
  <div id="u242" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u243" class="ax_default table_cell">
  <img id="u243_img" class="img " :src="images.u215"/>
  <!-- Unnamed () -->
  <div id="u244" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u245" class="ax_default table_cell">
  <img id="u245_img" class="img " :src="images.u203"/>
  <!-- Unnamed () -->
  <div id="u246" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u247" class="ax_default table_cell">
  <img id="u247_img" class="img " :src="images.u205"/>
  <!-- Unnamed () -->
  <div id="u248" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u249" class="ax_default table_cell">
  <img id="u249_img" class="img " :src="images.u207"/>
  <!-- Unnamed () -->
  <div id="u250" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u251" class="ax_default table_cell">
  <img id="u251_img" class="img " :src="images.u209"/>
  <!-- Unnamed () -->
  <div id="u252" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u253" class="ax_default table_cell">
  <img id="u253_img" class="img " :src="images.u211"/>
  <!-- Unnamed () -->
  <div id="u254" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u255" class="ax_default table_cell">
  <img id="u255_img" class="img " :src="images.u213"/>
  <!-- Unnamed () -->
  <div id="u256" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u257" class="ax_default table_cell">
  <img id="u257_img" class="img " :src="images.u215"/>
  <!-- Unnamed () -->
  <div id="u258" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u259" class="ax_default table_cell">
  <img id="u259_img" class="img " :src="images.u203"/>
  <!-- Unnamed () -->
  <div id="u260" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u261" class="ax_default table_cell">
  <img id="u261_img" class="img " :src="images.u205"/>
  <!-- Unnamed () -->
  <div id="u262" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u263" class="ax_default table_cell">
  <img id="u263_img" class="img " :src="images.u207"/>
  <!-- Unnamed () -->
  <div id="u264" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u265" class="ax_default table_cell">
  <img id="u265_img" class="img " :src="images.u209"/>
  <!-- Unnamed () -->
  <div id="u266" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u267" class="ax_default table_cell">
  <img id="u267_img" class="img " :src="images.u211"/>
  <!-- Unnamed () -->
  <div id="u268" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u269" class="ax_default table_cell">
  <img id="u269_img" class="img " :src="images.u213"/>
  <!-- Unnamed () -->
  <div id="u270" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u271" class="ax_default table_cell">
  <img id="u271_img" class="img " :src="images.u215"/>
  <!-- Unnamed () -->
  <div id="u272" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u273" class="ax_default table_cell">
  <img id="u273_img" class="img " :src="images.u203"/>
  <!-- Unnamed () -->
  <div id="u274" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u275" class="ax_default table_cell">
  <img id="u275_img" class="img " :src="images.u205"/>
  <!-- Unnamed () -->
  <div id="u276" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u277" class="ax_default table_cell">
  <img id="u277_img" class="img " :src="images.u207"/>
  <!-- Unnamed () -->
  <div id="u278" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u279" class="ax_default table_cell">
  <img id="u279_img" class="img " :src="images.u209"/>
  <!-- Unnamed () -->
  <div id="u280" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u281" class="ax_default table_cell">
  <img id="u281_img" class="img " :src="images.u211"/>
  <!-- Unnamed () -->
  <div id="u282" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u283" class="ax_default table_cell">
  <img id="u283_img" class="img " :src="images.u213"/>
  <!-- Unnamed () -->
  <div id="u284" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u285" class="ax_default table_cell">
  <img id="u285_img" class="img " :src="images.u215"/>
  <!-- Unnamed () -->
  <div id="u286" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u287" class="ax_default table_cell">
  <img id="u287_img" class="img " :src="images.u203"/>
  <!-- Unnamed () -->
  <div id="u288" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u289" class="ax_default table_cell">
  <img id="u289_img" class="img " :src="images.u205"/>
  <!-- Unnamed () -->
  <div id="u290" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u291" class="ax_default table_cell">
  <img id="u291_img" class="img " :src="images.u207"/>
  <!-- Unnamed () -->
  <div id="u292" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u293" class="ax_default table_cell">
  <img id="u293_img" class="img " :src="images.u209"/>
  <!-- Unnamed () -->
  <div id="u294" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u295" class="ax_default table_cell">
  <img id="u295_img" class="img " :src="images.u211"/>
  <!-- Unnamed () -->
  <div id="u296" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u297" class="ax_default table_cell">
  <img id="u297_img" class="img " :src="images.u213"/>
  <!-- Unnamed () -->
  <div id="u298" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u299" class="ax_default table_cell">
  <img id="u299_img" class="img " :src="images.u215"/>
  <!-- Unnamed () -->
  <div id="u300" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u301" class="ax_default table_cell">
  <img id="u301_img" class="img " :src="images.u203"/>
  <!-- Unnamed () -->
  <div id="u302" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u303" class="ax_default table_cell">
  <img id="u303_img" class="img " :src="images.u205"/>
  <!-- Unnamed () -->
  <div id="u304" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u305" class="ax_default table_cell">
  <img id="u305_img" class="img " :src="images.u207"/>
  <!-- Unnamed () -->
  <div id="u306" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u307" class="ax_default table_cell">
  <img id="u307_img" class="img " :src="images.u209"/>
  <!-- Unnamed () -->
  <div id="u308" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u309" class="ax_default table_cell">
  <img id="u309_img" class="img " :src="images.u211"/>
  <!-- Unnamed () -->
  <div id="u310" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u311" class="ax_default table_cell">
  <img id="u311_img" class="img " :src="images.u213"/>
  <!-- Unnamed () -->
  <div id="u312" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u313" class="ax_default table_cell">
  <img id="u313_img" class="img " :src="images.u215"/>
  <!-- Unnamed () -->
  <div id="u314" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u315" class="ax_default table_cell">
  <img id="u315_img" class="img " :src="images.u203"/>
  <!-- Unnamed () -->
  <div id="u316" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u317" class="ax_default table_cell">
  <img id="u317_img" class="img " :src="images.u205"/>
  <!-- Unnamed () -->
  <div id="u318" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u319" class="ax_default table_cell">
  <img id="u319_img" class="img " :src="images.u207"/>
  <!-- Unnamed () -->
  <div id="u320" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u321" class="ax_default table_cell">
  <img id="u321_img" class="img " :src="images.u209"/>
  <!-- Unnamed () -->
  <div id="u322" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u323" class="ax_default table_cell">
  <img id="u323_img" class="img " :src="images.u211"/>
  <!-- Unnamed () -->
  <div id="u324" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u325" class="ax_default table_cell">
  <img id="u325_img" class="img " :src="images.u213"/>
  <!-- Unnamed () -->
  <div id="u326" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u327" class="ax_default table_cell">
  <img id="u327_img" class="img " :src="images.u215"/>
  <!-- Unnamed () -->
  <div id="u328" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u329" class="ax_default table_cell">
  <img id="u329_img" class="img " :src="images.u329"/>
  <!-- Unnamed () -->
  <div id="u330" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u331" class="ax_default table_cell">
  <img id="u331_img" class="img " :src="images.u331"/>
  <!-- Unnamed () -->
  <div id="u332" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u333" class="ax_default table_cell">
  <img id="u333_img" class="img " :src="images.u333"/>
  <!-- Unnamed () -->
  <div id="u334" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u335" class="ax_default table_cell">
  <img id="u335_img" class="img " :src="images.u335"/>
  <!-- Unnamed () -->
  <div id="u336" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u337" class="ax_default table_cell">
  <img id="u337_img" class="img " :src="images.u337"/>
  <!-- Unnamed () -->
  <div id="u338" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u339" class="ax_default table_cell">
  <img id="u339_img" class="img " :src="images.u339"/>
  <!-- Unnamed () -->
  <div id="u340" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>

<!-- Unnamed (单元格) -->
<div id="u341" class="ax_default table_cell">
  <img id="u341_img" class="img " :src="images.u341"/>
  <!-- Unnamed () -->
  <div id="u342" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</div>
</div>

<!-- Unnamed (复选框) -->
<div id="u343" class="ax_default checkbox">
<label for="u343_input">
  <!-- Unnamed () -->
  <div id="u344" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</label>
<input id="u343_input" type="checkbox" value="checkbox"/>
</div>

<!-- Unnamed (复选框) -->
<div id="u345" class="ax_default checkbox">
<label for="u345_input">
  <!-- Unnamed () -->
  <div id="u346" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</label>
<input id="u345_input" type="checkbox" value="checkbox"/>
</div>

<!-- Unnamed (复选框) -->
<div id="u347" class="ax_default checkbox">
<label for="u347_input">
  <!-- Unnamed () -->
  <div id="u348" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</label>
<input id="u347_input" type="checkbox" value="checkbox"/>
</div>

<!-- Unnamed (复选框) -->
<div id="u349" class="ax_default checkbox">
<label for="u349_input">
  <!-- Unnamed () -->
  <div id="u350" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</label>
<input id="u349_input" type="checkbox" value="checkbox"/>
</div>

<!-- Unnamed (复选框) -->
<div id="u351" class="ax_default checkbox">
<label for="u351_input">
  <!-- Unnamed () -->
  <div id="u352" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</label>
<input id="u351_input" type="checkbox" value="checkbox"/>
</div>

<!-- Unnamed (复选框) -->
<div id="u353" class="ax_default checkbox">
<label for="u353_input">
  <!-- Unnamed () -->
  <div id="u354" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</label>
<input id="u353_input" type="checkbox" value="checkbox"/>
</div>

<!-- Unnamed (复选框) -->
<div id="u355" class="ax_default checkbox">
<label for="u355_input">
  <!-- Unnamed () -->
  <div id="u356" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</label>
<input id="u355_input" type="checkbox" value="checkbox"/>
</div>

<!-- Unnamed (复选框) -->
<div id="u357" class="ax_default checkbox">
<label for="u357_input">
  <!-- Unnamed () -->
  <div id="u358" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</label>
<input id="u357_input" type="checkbox" value="checkbox"/>
</div>

<!-- Unnamed (复选框) -->
<div id="u359" class="ax_default checkbox">
<label for="u359_input">
  <!-- Unnamed () -->
  <div id="u360" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</label>
<input id="u359_input" type="checkbox" value="checkbox"/>
</div>

<!-- Unnamed (复选框) -->
<div id="u361" class="ax_default checkbox">
<label for="u361_input">
  <!-- Unnamed () -->
  <div id="u362" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</label>
<input id="u361_input" type="checkbox" value="checkbox"/>
</div>

<!-- Unnamed (复选框) -->
<div id="u363" class="ax_default checkbox">
<label for="u363_input">
  <!-- Unnamed () -->
  <div id="u364" class="text" style="display:none; visibility: hidden">
    <p><span></span></p>
  </div>
</label>
<input id="u363_input" type="checkbox" value="checkbox"/>
</div>

<!-- Unnamed (组合) -->
<div id="u365" class="ax_default" data-left="326" data-top="487" data-width="423" data-height="20">

<!-- Unnamed (矩形) -->
<div id="u366" class="ax_default _文本段落">
  <div id="u366_div" class=""></div>
  <!-- Unnamed () -->
  <div id="u367" class="text">
    <p><span style="font-family:'Arial Normal', 'Arial';font-weight:400;color:#0000FF;">共</span><span style="font-family:'Arial Negreta', 'Arial Normal', 'Arial';font-weight:700;color:#FF0000;">41</span><span style="font-family:'Arial Normal', 'Arial';font-weight:400;color:#0000FF;">条</span></p>
  </div>
</div>

<!-- Unnamed (文本框) -->
<div id="u368" class="ax_default text_field">
  <input id="u368_input" type="text" value="页码"/>
</div>

<!-- Unnamed (下拉列表框) -->
<div id="u369" class="ax_default droplist">
  <select id="u369_input">
    <option selected value="10">10</option>
    <option value="30">30</option>
    <option value="50">50</option>
    <option value="80">80</option>
    <option value="100">100</option>
  </select>
</div>

<!-- Unnamed (表格) -->
<div id="u370" class="ax_default _表格">

  <!-- Unnamed (单元格) -->
  <div id="u371" class="ax_default table_cell">
    <img id="u371_img" class="img " :src="images.u371"/>
    <!-- Unnamed () -->
    <div id="u372" class="text">
      <p><span>跳转</span></p>
    </div>
  </div>

  <!-- Unnamed (单元格) -->
  <div id="u373" class="ax_default table_cell">
    <img id="u373_img" class="img " :src="images.u371"/>
    <!-- Unnamed () -->
    <div id="u374" class="text">
      <p><span>首页</span></p>
    </div>
  </div>

  <!-- Unnamed (单元格) -->
  <div id="u375" class="ax_default table_cell">
    <img id="u375_img" class="img " :src="images.u371"/>
    <!-- Unnamed () -->
    <div id="u376" class="text">
      <p><span>上页</span></p>
    </div>
  </div>

  <!-- Unnamed (单元格) -->
  <div id="u377" class="ax_default table_cell">
    <img id="u377_img" class="img " :src="images.u377"/>
    <!-- Unnamed () -->
    <div id="u378" class="text">
      <p><span>1</span></p>
    </div>
  </div>

  <!-- Unnamed (单元格) -->
  <div id="u379" class="ax_default table_cell">
    <img id="u379_img" class="img " :src="images.u377"/>
    <!-- Unnamed () -->
    <div id="u380" class="text">
      <p><span>2</span></p>
    </div>
  </div>

  <!-- Unnamed (单元格) -->
  <div id="u381" class="ax_default table_cell">
    <img id="u381_img" class="img " :src="images.u377"/>
    <!-- Unnamed () -->
    <div id="u382" class="text">
      <p><span>3</span></p>
    </div>
  </div>

  <!-- Unnamed (单元格) -->
  <div id="u383" class="ax_default table_cell">
    <img id="u383_img" class="img " :src="images.u371"/>
    <!-- Unnamed () -->
    <div id="u384" class="text">
      <p><span>下页</span></p>
    </div>
  </div>

  <!-- Unnamed (单元格) -->
  <div id="u385" class="ax_default table_cell">
    <img id="u385_img" class="img " :src="images.u371"/>
    <!-- Unnamed () -->
    <div id="u386" class="text">
      <p><span>尾页</span></p>
    </div>
  </div>

  <!-- Unnamed (单元格) -->
  <div id="u387" class="ax_default table_cell">
    <img id="u387_img" class="img " :src="images.u387"/>
    <!-- Unnamed () -->
    <div id="u388" class="text">
      <p><span>第1页</span></p>
    </div>
  </div>

  <!-- Unnamed (单元格) -->
  <div id="u389" class="ax_default table_cell">
    <img id="u389_img" class="img " :src="images.u389"/>
    <!-- Unnamed () -->
    <div id="u390" class="text">
      <p><span>共3页</span></p>
    </div>
  </div>
</div>
</div>

<!-- Unnamed (矩形) -->
<div id="u391" class="ax_default box_3">
<div id="u391_div" class=""></div>
<!-- Unnamed () -->
<div id="u392" class="text">
  <p><span>全部</span></p>
</div>
</div>

<!-- Unnamed (矩形) -->
<div id="u393" class="ax_default label">
<div id="u393_div" class=""></div>
<!-- Unnamed () -->
<div id="u394" class="text">
  <p><span>0-100万</span></p>
</div>
</div>

<!-- Unnamed (矩形) -->
<div id="u395" class="ax_default label">
<div id="u395_div" class=""></div>
<!-- Unnamed () -->
<div id="u396" class="text">
  <p><span>100万-500万</span></p>
</div>
</div>

<!-- Unnamed (矩形) -->
<div id="u397" class="ax_default label">
<div id="u397_div" class=""></div>
<!-- Unnamed () -->
<div id="u398" class="text">
  <p><span>500万-1000万</span></p>
</div>
</div>

<!-- Unnamed (矩形) -->
<div id="u399" class="ax_default label">
<div id="u399_div" class=""></div>
<!-- Unnamed () -->
<div id="u400" class="text">
  <p><span>谈判/投标</span></p>
</div>
</div>

<!-- Unnamed (矩形) -->
<div id="u401" class="ax_default label">
<div id="u401_div" class=""></div>
<!-- Unnamed () -->
<div id="u402" class="text">
  <p><span>赢单</span></p>
</div>
</div>

<!-- Unnamed (矩形) -->
<div id="u403" class="ax_default label">
<div id="u403_div" class=""></div>
<!-- Unnamed () -->
<div id="u404" class="text">
  <p><span>丢标</span></p>
</div>
</div>

<!-- Unnamed (提交按钮) -->
<div id="u405" class="ax_default html_button">
<input id="u405_input" type="submit" value="查看详情"/>
</div>

<!-- Unnamed (提交按钮) -->
<div id="u406" class="ax_default html_button">
<input id="u406_input" type="submit" value="查看详情"/>
</div>

<!-- Unnamed (提交按钮) -->
<div id="u407" class="ax_default html_button">
<input id="u407_input" type="submit" value="查看详情"/>
</div>

<!-- Unnamed (提交按钮) -->
<div id="u408" class="ax_default html_button">
<input id="u408_input" type="submit" value="查看详情"/>
</div>

<!-- Unnamed (提交按钮) -->
<div id="u409" class="ax_default html_button">
<input id="u409_input" type="submit" value="查看详情"/>
</div>

<!-- Unnamed (提交按钮) -->
<div id="u410" class="ax_default html_button">
<input id="u410_input" type="submit" value="查看详情"/>
</div>

<!-- Unnamed (提交按钮) -->
<div id="u411" class="ax_default html_button">
<input id="u411_input" type="submit" value="查看详情"/>
</div>

<!-- Unnamed (提交按钮) -->
<div id="u412" class="ax_default html_button">
<input id="u412_input" type="submit" value="查看详情"/>
</div>

<!-- Unnamed (提交按钮) -->
<div id="u413" class="ax_default html_button">
<input id="u413_input" type="submit" value="查看详情"/>
</div>

<!-- Unnamed (提交按钮) -->
<div id="u414" class="ax_default html_button">
<input id="u414_input" type="submit" value="查看详情"/>
</div>

<!-- Unnamed (文本框) -->
<div id="u415" class="ax_default text_field">
<input id="u415_input" type="text" value="请选择开始日期"/>
</div>
 <!-- Unnamed (形状) -->
 <div id="u416" class="ax_default icon">
        <img id="u416_img" class="img " :src="images.u416"/>
        <!-- Unnamed () -->
        <div id="u417" class="text" style="display:none; visibility: hidden">
          <p><span></span></p>
        </div>
      </div>

      <!-- Unnamed (文本框) -->
      <div id="u418" class="ax_default text_field">
        <input id="u418_input" type="text" value="请选择结束日期"/>
      </div>

      <!-- Unnamed (形状) -->
      <div id="u419" class="ax_default icon">
        <img id="u419_img" class="img " :src="images.u416"/>
        <!-- Unnamed () -->
        <div id="u420" class="text" style="display:none; visibility: hidden">
          <p><span></span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u421" class="ax_default label">
        <div id="u421_div" class=""></div>
        <!-- Unnamed () -->
        <div id="u422" class="text">
          <p><span>—</span></p>
        </div>
      </div>

      <!-- Unnamed (文本框) -->
      <div id="u423" class="ax_default text_field">
        <input id="u423_input" type="text" value="请选择开始日期"/>
      </div>

      <!-- Unnamed (形状) -->
      <div id="u424" class="ax_default icon">
        <img id="u424_img" class="img " :src="images.u416"/>
        <!-- Unnamed () -->
        <div id="u425" class="text" style="display:none; visibility: hidden">
          <p><span></span></p>
        </div>
      </div>

      <!-- Unnamed (文本框) -->
      <div id="u426" class="ax_default text_field">
        <input id="u426_input" type="text" value="请选择结束日期"/>
      </div>

      <!-- Unnamed (形状) -->
      <div id="u427" class="ax_default icon">
        <img id="u427_img" class="img " :src="images.u416"/>
        <!-- Unnamed () -->
        <div id="u428" class="text" style="display:none; visibility: hidden">
          <p><span></span></p>
        </div>
      </div>
      <!-- Unnamed (矩形) -->
      <div id="u429" class="ax_default label">
        <div id="u429_div" class=""></div>
        <!-- Unnamed () -->
        <div id="u430" class="text">
          <p><span>—</span></p>
        </div>
      </div>
    </div>
</template>