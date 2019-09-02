// 预加载对象方法，将function保存在一个对象里。
console.log("initPreload")
var Preload = {
	loadImage : function (arr,callback){
		// 创建函数
		var img = new Image()
		img.arr = arr
		img.callback = callback
		img.imgList = []
		img.num = 0
		
		// 启动加载侦听事件
		img.addEventListener("load",Preload.loadHandler)
		img.src = arr[img.num]
		
		img.callback()
	},

	loadHandler : function (){
		this.imgList.push(this.cloneNode(false))
		this.num++
		if(this.num>=arr.length){
			Preload.callBackFun(this.imgList)
			this.removeEventListener("load",Preload.loadHandler)
			return
		}
		this.src=this.arr[this.num]
	},
	
	callBackFun:function (arr){
		// console.log(1)
		for(var i in arr){
			console.log(arr[i].src)
		}
	}
}