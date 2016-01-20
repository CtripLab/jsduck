
/**
 * @author jiangxs
 * @class Person
 * Person类
 * @constructor
 * @param {string} age 年龄
 * @param {string} name 姓名
 */

var Person=function(age,name){
    this.age=age;
    this.name=name;
}

/**
 * @abstract
 * @method getName
 * 获取姓名
 * @return {string}
 * 返回姓名
 */
Person.prototype.getName= function () {
    return this.name;
}

/**
 * @method setName
 * 设置姓名
 * @param {string} name
 */
Person.prototype.setName=function(name){
    this.name=name;
}

/**
 * @cfg {object} map 映射对象
 * @cfg {Number} map.age 定义年龄配置数据
 * @cfg {string} map.name 定义明显配置数据
 */
Person.prototype.map={
    age: 12,
    name:'hello world'
};



/**
 * @member Person
 * @abstract
 * @method study
 * 学习
 */
Person.prototype.study=function(){
    alert('study');
}

/**
 * See the example:
 *
 *        @example
 *     Ext.create('Ext.Button', {
     *         text: 'Click me',
     *         renderTo: Ext.getBody()
     *     });
 */
