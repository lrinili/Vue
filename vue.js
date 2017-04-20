
var dep=[]
var obj={
  name:'lly'
 }
function defineReactive(obj,key,val){  

var property = Object.getOwnPropertyDescriptor(obj,key)
  if(property&&property.configurable===false){  
  	return 
  }
 var getter = property&&property.get //undfined 或者get()
 var setter = property&&property.set
 Object.defineProperty(obj,key,{
    configurable:true,
    enumerable:true,
    get:function(){
    	console.log('获取')
        var value = getter ? getter.call(obj) : val;

    	return value  
     },
    set:function(newVal){
    	console.log('设置')
    	 var value = getter ? getter.call(obj) : val;
	      if(newVal === value) {
	        return;
	      }
	      if(setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }

    }



 })


}




obj.key='111'
console.log(obj.key)