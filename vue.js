
var dep=[]
var obj={
  name:'lly'
 }


  //观察擦者模式 为obj所有的属性 添加setter getter
  function Observer(value){ 
       this.value
       this.walk(value)
  }
  Observer.prototype.walk = function(obj){
    var keys =  Object.keys(obj)

    for(var i = 0; i<keys.length;i++){
      defineReactive(obj,keys[i],obj[keys[i]])
    }
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
          observe(newVal)
        }
     })
   }

  function observe(value) {
    if(!value || typeof value !== 'object') {
      return;
    }
    return new Observer(value);
  }

observe(obj)
console.log(obj.name)
obj.name={
  age:'29'
}

console.log(obj.name.age)
console.log(11);
