var params = {"appName": "geometry", "width": 800, "height": 600, "showToolBar": true, "showAlgebraInput": true, "showMenuBar": true };
var applet = new GGBApplet(params, true);
var params2 = {"appName": "3d", "width": 800, "height": 600, "showToolBar": true, "showAlgebraInput": true, "showMenuBar": true };
var applet2 = new GGBApplet(params2, true);
window.addEventListener("load", function() { 
    applet.inject('ggb-element');
    applet2.inject('ggb-element2');
});