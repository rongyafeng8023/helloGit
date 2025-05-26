<script setup>

</script>

<template>
   <div id="outerContainer">
    <div id="leftPanel">
        <div id="interfaceControlFrame">
            <div id="interfaceControlFrameMinimizeContainer">
                <a title="Collapse" id="interfaceControlFrameMinimizeButton" onclick="collapse();">&nbsp;</a>
            </div>
            <div id="interfaceControlFrameHeaderContainer">
                <ul id="interfaceControlFrameHeader"></ul>
            </div>
            <div id="interfaceControlFrameContainer">
                <div id="interfaceControlFrameLogoContainer">
                    <div id="interfaceControlFrameLogoImageContainer"></div>
                    <div id="interfaceControlFrameLogoCaptionContainer"></div>
                </div>
                <div id="interfaceControlFrameHostContainer">
                </div>
            </div>
            <div id="interfaceControlFrameCloseContainer">
                <a title="Close" id="interfaceControlFrameCloseButton" onclick="closePlayer();">CLOSE</a>
            </div>
        </div>
    </div>
    <div id="rightPanel">
        <iframe id="mainFrame" name="mainFrame" width="100%" height="100%" src="" frameborder="0" style="display: block;" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>

</div>

<!-- <div id="maximizePanelContainer">
<iframe id="expandFrame" src="resources/expand.html" width="100%" height="100%" scrolling="no" allowtransparency="true" frameborder="0"></iframe>
</div> -->

</template>

<style scoped>
#outerContainer {
	width:1000px;
	height:1500px;
}
#interfaceControlFrameMinimizeContainer {
    height:45px
};
#interfaceControlFrameMinimizeContainer a{height:45px};
#interfaceControlFrameHeaderContainer{margin-top:'45px'};
#interfaceControlFrameCloseContainer a{padding:'10px 0px'};
</style>