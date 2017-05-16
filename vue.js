var dep = []
dep.target = null
var obj = {
    name: 'lly'
}

function Wacther(data, exp, cb) {
    this.data = data
    this.exp = exp
    this.cb = cb
    this.value = this.get()
}

Wacther.prototype.get = function() {
    dep.target = this
    var value = this.data[this.exp] //触发observer的getter 将该属性设置为监控属性
    dep.target = null
    return value
};

Wacther.prototype.update = function() {
    this.cb()
}

var Dep = function Dep() {
    var sub = []

}
Dep.target = null
Dep.prototype.addSub = function() {
    // sub.push(dep.target)
}
Dep.prototype.run = function() {

}
Dep.prototype.depend = function depend() {
    if (Dep.target) {
        Dep.target.addDep(this);
    }
};






//观察擦者模式 为obj所有的属性 添加setter getter
function Observer(value) {
    this.value
    this.walk(value)
}
Observer.prototype.walk = function(obj) {
    var keys = Object.keys(obj)

    for (var i = 0; i < keys.length; i++) {
        defineReactive(obj, keys[i], obj[keys[i]])
    }
}

function defineReactive(obj, key, val) {
    observe(val)
    var property = Object.getOwnPropertyDescriptor(obj, key)
    if (property && property.configurable === false) {
        return
    }
    var getter = property && property.get //undfined 或者get()
    var setter = property && property.set
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: true,
        get: function() {
            var value = getter ? getter.call(obj) : val;
            if (dep.target) {
                console.log('this', this, obj)
                dep.push(dep.target)
            }
            return value
        },
        set: function(newVal) {
            console.log('设置')
            var value = getter ? getter.call(obj) : val;
            if (newVal === value) {
                return;
            }
            if (setter) {
                setter.call(obj, newVal);
            } else {
                val = newVal;
            }
            observe(newVal)




















































































































































































































































































































<<<<<<< HEAD
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
=======

























































































































































































































































            for (i = 0; i < dep.length; i++) {
                console.log(dep[i])
                dep[i].update()
            }
>>>>>>> 347036d38a3097991896b5154a83aa8bee3ad83b
        }
    })
}

function observe(value) {
    if (!value || typeof value !== 'object') {
        return;
    }
<<<<<<< HEAD
    return new Observer(value);// 实力化
  }
=======
    return new Observer(value);
}
>>>>>>> 347036d38a3097991896b5154a83aa8bee3ad83b

observe(obj)

new Wacther(obj, 'name', function() {
    console.log('watch成功了')
})

obj.name = '111'
