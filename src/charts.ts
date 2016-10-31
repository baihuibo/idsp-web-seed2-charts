///<reference path="../typings/charts.d.ts"/>
// Created by baihuibo on 2016/10/14.
import echarts from "echarts/dist/echarts.min.js";
import {module} from "angular";
const modName = 'charts';

export const mod = module(modName, []);
export default modName;

mod.directive('charts', function () {
    return {
        template: '<div></div>',
        replace: true,
        scope: {option: '=?'},
        link($scope, $element){
            let nativeEl = $element[0],
                unwatch,
                myChart: ECharts.ECharts;

            if (nativeEl.offsetHeight) {
                init();
            } else {
                unwatch = $scope.$watch(() => !!nativeEl.offsetHeight, function (view) {
                    if (view) {
                        unwatch();
                        init();
                    }
                });
            }

            $scope.$on('$destroy', function () {
                unwatch && unwatch();
                myChart && myChart.dispose();
                myChart = nativeEl = null;
            });

            function init() {
                // 基于准备好的dom，初始化echarts实例
                myChart = echarts.init(nativeEl);

                $scope.$watch('option', function (option) {
                    if (option) {
                        myChart.setOption(option);
                    } else {
                        myChart.clear();
                    }
                });
            }
        }
    }
});

declare module "echarts/dist/echarts.min.js" {
    export = ECharts;
}