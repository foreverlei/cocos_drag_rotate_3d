// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class ForwardUICamera extends cc.Component {

    @property(cc.Node)
    mCamera: cc.Node = null;

    @property(cc.Node)
    mTarget: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        // cc.log(this.node.forward);
        // cc.log(this.mCamera.up);
        // this.node.forward = this.mCamera.forward;
        // let origin =  this.node.getRotation(new cc.Quat());
        // let out =  this.mCamera.getRotation(new cc.Quat());
        // this.node.setRotation(this.mTarget.getRotation(new cc.Quat()));
        // cc.log(origin,out);
        // cc.log(this.node.forward);
        // this.node.lookAt(this.mCamera.position,this.mTarget.up);

        // this.scheduleOnce(()=>{
        //     let worldPos = this.node.convertToWorldSpaceAR(cc.Vec3.ZERO);
        //     let localPos = this.mTarget.parent.convertToNodeSpaceAR(worldPos);
        //     this.mTarget.position = localPos;
        // },1)
        
    }

    setTarget(tar:cc.Node){
        this.mTarget = tar;
    }

    update (dt) {
        if(this.mTarget && this.mTarget.parent){
            let worldPos = this.node.convertToWorldSpaceAR(cc.Vec3.ZERO);
            // cc.log(worldPos.x,worldPos.y,worldPos.z);
            let localPos = this.mTarget.parent.convertToNodeSpaceAR(worldPos);
            this.mTarget.position = localPos; 
            this.mTarget.scale = worldPos.z/100 * 0.5;
            this.mTarget.opacity = (100-worldPos.z)/200 * 255;

        }
    }
}
