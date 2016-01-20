/**
 * @class myOrder
 * @requires template attemplate.js
 */
define(['template'], function (template) {

    /**
     * @cfg {object} orderParams 订单参数
     * @cfg {string} orderParams.BizTypes 定义类型
     * @cfg {string} orderParams.UID 定义编号
     */
    var orderParams = {
        BizTypes: '',
        UID: ""
    }


    /**
     * @member myOrder
     * @method loadOrder
     * 加载订单方法
     */
    var loadOrder = function (classify) {


    }


    /**
     * @member myOrder
     * @method firstRender
     * 首次渲染方法
     */
    var firstRender = function () {

    };



    return {
        init: firstRender,
        reload: loadOrder
    };

});
