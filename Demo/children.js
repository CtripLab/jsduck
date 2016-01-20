/**
 * Created by jiangxs on 2016/1/18.
 */
/**
 * @author jiangxs
 * @class Child
 * @extends Person
 * Person类
 * @constructor
 * @param {string} age 年龄
 * @param {string} name 姓名
 */
var Child=function(age,name){
    this.age=age;
    this.name=name;
}

Child.prototype=Person;


/**
 * @extends
 * @method study
 * 学习
 */
Child.prototype.study=function(){
    alert('child study');
}
