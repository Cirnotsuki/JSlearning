var Elemental = {
	// 拖拽
	drag:function(elem,onetimeRelease=true){
		elem.addEventListener("mousedown",this.mouseHandler)
		elem.func = this
		elem.otr = onetimeRelease
	},
	removedrag:function(elem){
		elem.removeEventListener("mousedown",this.mouseHandler)
		elem.func = null
	},
	mouseHandler:function (e){
		try {
			switch (e.type){
				case "mousedown":
					e.preventDefault()
					document.addEventListener("mousemove",this.func.mouseHandler)
					document.elem = this
					this.addEventListener("mousemove",this.func.mouseHandler)
					this.posx = e.offsetX
					this.posy = e.offsetY
					break
				case "mousemove":
					this.addEventListener("mouseup",this.elem.func.mouseHandler)
					this.elem.style.left = e.clientX-this.elem.posx+"px"
					this.elem.style.top = e.clientY-this.elem.posy+"px"							
					break
				case "mouseup":
					document.removeEventListener("mousemove",this.elem.func.mouseHandler)
					this.removeEventListener("mousemove",this.elem.func.mouseHandler)
					if(this.elem.otr){	
						this.elem.func.removedrag(this.elem)
					}		
			}
		}catch{
			
		}	
	},
	randomBgc:function(){
		var c = "rgb("
		for(var i=0;i<3;i++){
			c += Math.floor(Math.random()*256)+","
		}
		c = c.slice(0,-1)+")"
		return c
	},
	randomPos:function(n=0,m=100){
		return (Math.floor(Math.random()*(m-n))+n)+"px"
	}
}