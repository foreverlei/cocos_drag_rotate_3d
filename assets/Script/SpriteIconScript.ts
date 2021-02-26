// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class SpriteIconScript extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    mIsUpdate = false;
    mIsBack:boolean = false;
    
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    
    mPosTouchStart:cc.Vec3;

    start () {
        
    }

    setTouchStartPos(pos:cc.Vec3){
        this.mPosTouchStart = pos;
    }

    setTouchMove(pos:cc.Vec3){
        if(pos.magSqr()>40000){
            this.mIsBack = !this.mIsBack;
            
        }

        this.mPosTouchStart = pos;
    }

    setUpdate(isUpdate){
        this.mIsUpdate = isUpdate;
    }

    setIndex(index:number){
        this.label.string = index.toString();
    }

    update(dt) {
        if(!this.mIsUpdate){
            return;
        }


    }
}
