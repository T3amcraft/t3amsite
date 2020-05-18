/* Changing to AreaChat */
function areaChat() {
    var el = document.getElementById("circle");
    el.style.height = "50px";
    el.style.width = "50px";
}
/*<!-- Changing to VoiceChat-->*/
function voiceChat() {
    var el = document.getElementById("circle");
    el.style.height = "30px";
    el.style.width = "30px";
}
//<!-- Changing the map-->
//<!-- Map Tiny 512-->
//<!-- Map Small 1024-->
//<!--Monolith-->
//<!-- Map Medium 2048-->
//<!--Washington, Pei, Yukon-->
function mapWashington() {
    var img = document.getElementById("map");
    img.src = "https://s3.eu-west-2.amazonaws.com/t3amcraft.public/unturnedmaps/unturnedwashington.png";
    return false;
}

function mapPei() {
    var img = document.getElementById("map");
    img.src = "https://s3.eu-west-2.amazonaws.com/t3amcraft.public/unturnedmaps/unturnedpei.png";
    return false;
}

function mapYukon() {
    var img = document.getElementById("map");
    img.src = "https://s3.eu-west-2.amazonaws.com/t3amcraft.public/unturnedmaps/unturnedyukon.png";
    return false;
}
//<!-- Map Large 4096-->
//<!--russia, france, germany, greece, hawaii-->