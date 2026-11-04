gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.idToCallbackMap = new Map();
gdjs.Untitled_32sceneCode.GDfloorObjects1= [];
gdjs.Untitled_32sceneCode.GDfloorObjects2= [];
gdjs.Untitled_32sceneCode.GDplayerObjects1= [];
gdjs.Untitled_32sceneCode.GDplayerObjects2= [];
gdjs.Untitled_32sceneCode.GDGunObjects1= [];
gdjs.Untitled_32sceneCode.GDGunObjects2= [];
gdjs.Untitled_32sceneCode.GDbulletObjects1= [];
gdjs.Untitled_32sceneCode.GDbulletObjects2= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("floor"), gdjs.Untitled_32sceneCode.GDfloorObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Untitled_32sceneCode.GDfloorObjects1.length !== 0 ? gdjs.Untitled_32sceneCode.GDfloorObjects1[0] : null), true, "", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDplayerObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDplayerObjects1[k] = gdjs.Untitled_32sceneCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDplayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDplayerObjects1[i].getBehavior("Animation").setAnimationName("run");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDplayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Untitled_32sceneCode.GDplayerObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDplayerObjects1[k] = gdjs.Untitled_32sceneCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDplayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDplayerObjects1[i].getBehavior("Animation").setAnimationName("idle");
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.Untitled_32sceneCode.GDGunObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGunObjects1[i].setPosition((( gdjs.Untitled_32sceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDplayerObjects1[0].getPointX("Gunpoint")),(( gdjs.Untitled_32sceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDplayerObjects1[0].getPointY("Gunpoint")));
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGunObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0, runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDplayerObjects1[i].getX() > gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDplayerObjects1[k] = gdjs.Untitled_32sceneCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDplayerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.Untitled_32sceneCode.GDGunObjects1);
/* Reuse gdjs.Untitled_32sceneCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDplayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGunObjects1[i].getBehavior("Flippable").flipY(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDplayerObjects1[i].getX() < gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDplayerObjects1[k] = gdjs.Untitled_32sceneCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDplayerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.Untitled_32sceneCode.GDGunObjects1);
/* Reuse gdjs.Untitled_32sceneCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDplayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGunObjects1[i].getBehavior("Flippable").flipY(false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDfloorObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDfloorObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDplayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDplayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGunObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGunObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDbulletObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbulletObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
gdjs.Untitled_32sceneCode.GDfloorObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDfloorObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDplayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDplayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGunObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGunObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDbulletObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbulletObjects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
