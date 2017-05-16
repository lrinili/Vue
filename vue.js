
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



  function defineReactive(obj,key,val){  //对对象一个属性的配置

  var property = Object.getOwnPropertyDescriptor(obj,key) //取出对象属性的自有属性不在原型链中的
    if(property&&property.configurable===false){  // 自有属性存在且可以配置
    	return 
    }
   var getter = property&&property.get //自有属性中的get存在或者 ：&& 取值的返回 undfined 或者get()的值 
   var setter = property&&property.set
   Object.defineProperty(obj,key,{   // 对对象的属性 进行get 和set设置
      configurable:true,
      enumerable:true,
      get:function(){
      	console.log('获取')        
          var value = getter ? getter.call(obj) : val; //执行完以后这些变量不会被销毁

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
    return new Observer(value);// 实力化
  }

observe(obj)
console.log(obj.name)
obj.name={
  age:'29'
}

console.log(obj.name.age)