// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    label: cc.Node = null;

    @property
    text: string = 'hello';
    mPosTouchStart:cc.Vec3;
    mPosTouchPrevision:cc.Vec3;
    mPosParentStart:cc.Vec3;
    mOffset:cc.Vec3;

    mCircleLength = 200;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        // this.node.setRotation(cc.Quat.fromEuler(new cc.Quat(),10,20,30));
        this.node.on(cc.Node.EventType.TOUCH_START,this.touchStart,this);
        this.node.on(cc.Node.EventType.TOUCH_END,this.touchEnd,this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE,this.touchMove,this);
    }

    touchStart(event){

        this.mPosTouchStart = cc.v3(event.getLocation().x,event.getLocation().y,0) ;
        this.mPosTouchPrevision = cc.v3(event.getLocation().x,event.getLocation().y,0) ;

    }

    touchEnd(event){

    }

    touchMove(event){

        this.mOffset = cc.v3(event.getLocation().x,event.getLocation().y,0).sub(this.mPosTouchPrevision);
        this.mPosTouchPrevision = cc.v3(event.getLocation().x,event.getLocation().y,0) ;
        let rotateAxis = this.mOffset.cross(cc.v3(0,0,1));
        let quad = new cc.Quat();
        let originQuad = this.node.getRotation(new cc.Quat());
        let rotateQuad = cc.Quat.rotateAround(quad,originQuad,rotateAxis.normalizeSelf(),rotateAxis.len()*0.05);
        this.node.setRotation(rotateQuad);

    }

    rotateMyself(event){
        this.mOffset = cc.v3(event.getLocation().x,event.getLocation().y,0).sub(this.mPosTouchPrevision);
        this.mPosTouchPrevision = cc.v3(event.getLocation().x,event.getLocation().y,0) ;
        let rotateAxis = this.mOffset.cross(cc.v3(0,0,1));
        let quad = new cc.Quat();
        let originQuad = this.node.getRotation(new cc.Quat());
        let rotateQuad = cc.Quat.rotateAround(quad,originQuad,rotateAxis.normalizeSelf(),rotateAxis.len()*0.05);
        this.node.setRotation(rotateQuad);
    }

    // update (dt) {}
}
