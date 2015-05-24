//Initialize function

function setWallpaperSuccess(){
console.log("Wallpaper successfully set");
}

function setWallPaperError(error){
console.log("Failed to set wallpaper: " + error.message)
}

var init = function () {
$('div[data-role="page"]:first .ui-btn-back').bind("click", function(event) {
var currentApp = tizen.application.getCurrentApplication();
currentApp.exit();
});
// TODO:: Do your initialization job
console.log("init() called");

$( "#btnSetWallpaper" ).bind( "click", function(event, ui) {
try{
tizen.systemsetting.setProperty("LOCK_SCREEN", "SampleProject/images/image0.jpg", setWallpaperSuccess, setWallPaperError);
tizen.systemsetting.setProperty("HOME_SCREEN", "SampleProject/images/image0.jpg", setWallpaperSuccess, setWallPaperError);
}
catch (error){
console.log("Set wallpaper invokes exception: " + error.message);
}
});
};
$(document).bind('pageinit', init);