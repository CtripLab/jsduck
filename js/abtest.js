/**
 * @description ABTesting 仅在Hybrid中使用
 * @see http://jimzhao2012.github.io/api/classes/CtripBusiness.html#method_app_get_abtesting_info
 *      http://conf.ctripcorp.com/pages/viewpage.action?pageId=60819396
 *
 * @example 使用方法
 * var abtest = new ABTest('150923_myorderhy_testb', {ordeId: '1112800123'});
 * abtest.getABTestResult(function (data) {
 *      //...
 * });
 *
 * @example 回调数据，实际收到的是param这个对象
 * var obj = {
 *      tagName: 'get_abtesting_info',
 *      param: {
 *          ExpCode: '150923_myorderhy_testb',  // 实验编号
 *          BeginTime: '2015-09-23 18:09:52',   // 实验开始时间
 *          EndTime: '2015-10-23 00:00:00',     // 实验结束时间
 *          ExpVersion: 'B',                    // ABTest计算出的实验版本，A或B
 *          ExpDefaultVersion: 'A',             // 实验默认版本
 *          State: 'true',                      // 调用ABTest服务是否成功，true：成功，false：失败，如果失败，app显示默认的实验版本
 *          Attrs: '{}',                        // 实验配置数据，Key/Value格式。 json字符串
 *          ExpResult: ''                       // 传给UBT的实验结果
 *      }
 * }
 *
 * @example 调用错误或者信息不准确时，返回false
 * abtest.getABTestResult(function (data) {
 *      if (!data) {
 *          throw 'Module abtest: wrong data'
 *      }
 * });
 */
define(['cHybridShell'], function (cHybridShell) {
    (function () {
        _.each(arguments, function (model) {
            if (!model || typeof model === 'undefined') {
                throw 'Module abtest: ' + model + ' is not defined';
            }
        });
    })(cHybridShell);

    /**
     * @description ABTesting构造方法，需要传入实验名称，实验编号通过实验名称获取。以及需要落地的数据
     * @param   {string}    expCode         实验编号
     * @param   {object}    statisticsMeta  实验落地数据
     * @constructor
     */
    var ABTest = function (expCode, statisticsMeta) {

        this.expCode = expCode || '';

        /**
         * @description 可选。需要落地到UBT的附加信息，成功获取到ABTesting结果之后，app会记录一次UBT数据。
         * @type {*|{}}
         */
        this.statisticsMeta = statisticsMeta || {};

        /**
         * @description 获取ABTest结果
         * @param callback 异步操作，需要传递callback方法做分流处理
         */
        this.getABTestResult = function (callback) {
            if (this.expCode === '') {
                throw 'Module abtest: wrong code!';
            }

            if (!callback || typeof callback !== 'function') {
                throw 'Module abtest: callback is not found or wrong callback!';
            }

            cHybridShell.Fn('get_abtesting_info', function (data) {
                if (data && !_.isEmpty(data)) {
                    callback(data);
                } else {
                    callback(false);
                }
            }).run(this.expCode, this.statisticsMeta);
        };
    };

    return ABTest;
});