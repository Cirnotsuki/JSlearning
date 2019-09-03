var randomStyle = {
	bgc:function(){
		var c = "rgb("
		for(var i=0;i<3;i++){
			c += Math.floor(Math.random()*256)+","
		}
		c = c.slice(0,-1)+")"
		return c
	},
	pos:function(n=0,m=100){
		return (Math.floor(Math.random()*(m-n))+n)+"px"
	}
}