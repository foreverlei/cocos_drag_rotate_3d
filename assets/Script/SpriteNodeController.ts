// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SpriteIconScript from "./SpriteIconScript";
import ForwardUICamera from "./ForwardUICamera";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Prefab)
    mTemplatePrefab: cc.Prefab = null;

    @property(cc.Node)
    mNodeSpriteParent: cc.Node = null;

    @property(cc.Node)
    mNode3D: cc.Node = null;

    @property(cc.Prefab)
    mTemplate3DPrefab: cc.Prefab = null;

    @property(cc.Node)
    mNode3DParent: cc.Node = null;

    mPosTouchStart:cc.Vec3;
    mPosParentStart:cc.Vec3;

    mCircleLength = 100;

    mChildrenCom:SpriteIconScript[] = [];
    m3DObjects:ForwardUICamera[] = [];



    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        // this.mTemplatePrefab.removeFromParent();
        this.init3DObjects();

    }

    initSprite(){
        // this.mTemplatePrefab.removeFromParent();
        for(let i = 0 ; i < 12 ;++i ){
            let node = cc.instantiate(this.mTemplatePrefab);
            node.parent = this.mNodeSpriteParent;
            node.position = cc.v3(this.mCircleLength * Math.sin(0.5235987*i),this.mCircleLength * Math.cos(0.5235987*i),0);
            let com = node.getComponent(SpriteIconScript);
            com.setIndex(i);
            this.mChildrenCom.push(com);
        }

    }

    init3DObjects(){
        // this.mTemplate3DPrefab.removeFromParent();
        //顶上1
        let node = cc.instantiate(this.mTemplate3DPrefab);
        node.parent = this.mNode3DParent;
        node.position = cc.v3(0,this.mCircleLength,0);
        let com = node.getComponent(ForwardUICamera);
        com.setTarget(this.initOneSprite(0));
        this.m3DObjects.push(com)

        //45
        for(let i= 1 ; i< 9 ; ++i ){
            let node = cc.instantiate(this.mTemplate3DPrefab);
            node.parent = this.mNode3DParent;
            node.position = cc.v3(this.mCircleLength * Math.cos(0.78539815 * (i - 1)),this.mCircleLength * Math.cos(0.78539815),this.mCircleLength * Math.sin(0.78539815 * (i - 1)));
            let com = node.getComponent(ForwardUICamera);
            com.setTarget(this.initOneSprite(0));
            this.m3DObjects.push(com)
        }

        //90
        for(let i= 10 ; i< 19 ; ++i ){
            let node = cc.instantiate(this.mTemplate3DPrefab);
            node.parent = this.mNode3DParent;
            node.position = cc.v3(this.mCircleLength * Math.cos(0.78539815 * (i - 10)),this.mCircleLength * Math.cos(0.78539815*2),this.mCircleLength * Math.sin(0.78539815 * (i - 10)));
            let com = node.getComponent(ForwardUICamera);
            com.setTarget(this.initOneSprite(0));
            this.m3DObjects.push(com)
        }

        //135
        for(let i= 20 ; i< 29 ; ++i ){
            let node = cc.instantiate(this.mTemplate3DPrefab);
            node.parent = this.mNode3DParent;
            node.position = cc.v3(this.mCircleLength * Math.cos(0.78539815 * (i - 20)),this.mCircleLength * Math.cos(0.78539815*3),this.mCircleLength * Math.sin(0.78539815 * (i - 20)));
            let com = node.getComponent(ForwardUICamera);
            com.setTarget(this.initOneSprite(0));
            this.m3DObjects.push(com)
        }

        //180
        let node2 = cc.instantiate(this.mTemplate3DPrefab);
        node2.parent = this.mNode3DParent;
        node2.position = cc.v3(0,-this.mCircleLength,0);
        let com2 = node2.getComponent(ForwardUICamera);
        com2.setTarget(this.initOneSprite(0));
        this.m3DObjects.push(com2)

    }

    initOneSprite(index:number){
        let node = cc.instantiate(this.mTemplatePrefab);
        node.parent = this.mNodeSpriteParent;
        // node.position = cc.v3(this.mCircleLength * Math.sin(0.5235987*i),this.mCircleLength * Math.cos(0.5235987*i),0);
        let com = node.getComponent(SpriteIconScript);
        // com.setIndex(index);
        this.mChildrenCom.push(com);
        return node;
    }

    // update (dt) {

    // }


}
