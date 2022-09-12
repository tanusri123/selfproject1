AFRAME.registerComponent("game-play",{
    schema:{
        elementid:{
            type:"string",
            default:"#treasure1"
        }
    },
    init:function(){

    },
    update:function(){
        this.iscollided(this.data.elementid)
    },
    iscollided:function(elementid){
        var element=document.querySelector(elementid)
        element.addEventListener("collide",e=>{
            console.log(e)
            if(elementid.includes("#treasure")){
                console.log(elementid)
                element.setAttribute("visible",false)
            }
        })
    }
})