/* ------------------------------------------------------------------------------
-----------------------  Chart 5 ------------------------------------------------
-------------------------------------------------------------------------------*/

var dom = document.getElementById("login_server");
var myChart5 = echarts.init(dom);
var app = {};
option = null;
// $.get('user_log.json', function (data) {
//     console.log(data);
myChart5.setOption(option = {
    color: ['#2ECC71'],
    title: {
        text: 'Login Server',
        x: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    xAxis: {
        type: 'category',
        data: ['03:07', '03:05', '03:02', '03:11', '03:04', '03:03', '03:00',
            '03:06', '03:16', '03:10', '03:15', '03:17', '03:13', '03:08',
            '03:12', '03:18', '03:09', '03:20', '03:01', '03:14', '03:19',
            '03:21', '03:25', '03:26', '03:27', '03:31', '03:30', '03:29',
            '03:28', '03:23', '03:33', '03:24', '03:32', '03:34', '03:22',
            '03:35', '03:39', '03:36', '03:38', '03:37', '03:47', '03:45',
            '03:44', '03:43', '03:48', '03:41', '03:40', '03:49', '03:42',
            '03:57', '03:46', '03:58', '03:51', '03:55', '03:52', '03:56', '03:53', '03:54', '03:50', '03:59',
        ]
    },
    series: [{
        name: 'Login Server',
        type: 'bar',
        data: [8454, 6253, 6195, 6138, 5839, 5829, 5790, 5736,
            5701, 5630, 5587, 5527, 5510, 5447, 5411, 5241,
            5235, 5205, 5193, 5101, 5000, 4925, 4882, 4856,
            4798, 4768, 4755, 4739, 4688, 4649, 4509, 4481,
            4452, 4336, 4179, 4049, 3612, 3412, 3340, 3262,
            3193, 3166, 3156, 3136, 3107, 3071, 3041, 3032,
            3001, 2977, 2962, 2941, 2772, 2707, 2687, 2667,
            2664, 2663, 2614, 2564,
        ],
        label: {
            normal: {
                show: true,
                position: 'inside'
            }
        },
    }]
});
// });;
if (option && typeof option === "object") {
    myChart5.setOption(option, true);
}

/* ------------------------------------------------------------------------------
-----------------------  Chart 5 ------------------------------------------------
-------------------------------------------------------------------------------*/


var dom = document.getElementById("login_activity");
var myChart3 = echarts.init(dom);
var app = {};
option = null;
$.get('user_irr.json', function (data) {
    console.log(data);
    var formatUtil = echarts.format;
    myChart3.setOption(option = {
        tooltip: {
            formatter: function (info) {
                var value = info.value;
                return [
                    'Count: ' + formatUtil.addCommas(value),
                ].join('');
            }
        },
        series: [{
            name:'Disk Usage',
            type: 'treemap',
            data: data,
            visibleMin: 100,
            label: {
                show: true,
                formatter: '{b}'
            },
        }],
    });
});;
if (option && typeof option === "object") {
    myChart3.setOption(option, true);
}

/* ------------------------------------------------------------------------------
-----------------------  Chart 5 ------------------------------------------------
-------------------------------------------------------------------------------*/


var dom = document.getElementById("route_ip_usage");
var myChart = echarts.init(dom);
var app = {};
option = null;
$.get('web_log_tree.json', function (data) {
    console.log(data);
    var formatUtil = echarts.format;
    myChart.setOption(option = {
        tooltip: {
            formatter: function (info) {
                var value = info.value;
                return [
                    'Count: ' + formatUtil.addCommas(value),
                ].join('');
            }
        },
        series: [{
            name:'Disk Usage',
            type: 'treemap',
            data: data.hostname_egress,
            visibleMin: 100,
            label: {
                show: true,
                formatter: '{b}'
            },
        }],
    });
});;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

/* ------------------------------------------------------------------------------
-----------------------  Chart 5 ------------------------------------------------
-------------------------------------------------------------------------------*/

var dom = document.getElementById("ip_log");
var myChart2 = echarts.init(dom);
var app = {};
option = null;
$.get('web_log_tree.json', function (data) {
    console.log(data);
    var formatUtil = echarts.format;
    myChart2.setOption(option = {
        tooltip: {
            formatter: function (info) {
                var value = info.value;
                return [
                    'Count: ' + formatUtil.addCommas(value),
                ].join('');
            }
        },
        series: [{
            name:'Disk Usage',
            type: 'treemap',
            data: data.hostname_ingress,
            visibleMin: 100,
            label: {
                show: true,
                formatter: '{b}'
            },
        }],
    });
});;
if (option && typeof option === "object") {
    myChart2.setOption(option, true);
}

/* ------------------------------------------------------------------------------
-----------------------  Chart 5 ------------------------------------------------
-------------------------------------------------------------------------------*/

var dom = document.getElementById("user_log");
var myChart4 = echarts.init(dom);
var app = {};
option = null;
$.get('filetype_tree.json', function (data) {
    console.log(data);
    var formatUtil = echarts.format;
    myChart4.setOption(option = {
        tooltip: {
            formatter: function (info) {
                var value = info.value;
                return [
                    'Count: ' + formatUtil.addCommas(value),
                ].join('');
            }
        },
        series: [{
            name:'Disk Usage',
            type: 'treemap',
            data: data.filetype_egress,
            visibleMin: 100,
            label: {
                show: true,
                formatter: '{b}'
            },
        }],
    });
});;
if (option && typeof option === "object") {
    myChart4.setOption(option, true);
}


/* ------------------------------------------------------------------------------
-----------------------  Chart 5 ------------------------------------------------
-------------------------------------------------------------------------------*/

var dom = document.getElementById("ip_log");
var myChart2 = echarts.init(dom);
var app = {};
option = null;
$.get('web_log_tree.json', function (data) {
    console.log(data);
    var formatUtil = echarts.format;
    myChart2.setOption(option = {
        tooltip: {
            formatter: function (info) {
                var value = info.value;
                return [
                    'Count: ' + formatUtil.addCommas(value),
                ].join('');
            }
        },
        series: [{
            name:'Disk Usage',
            type: 'treemap',
            data: data.hostname_ingress,
            visibleMin: 100,
            label: {
                show: true,
                formatter: '{b}'
            },
        }],
    });
});;
if (option && typeof option === "object") {
    myChart2.setOption(option, true);
}

/* ------------------------------------------------------------------------------
-----------------------  Chart 5 ------------------------------------------------
-------------------------------------------------------------------------------*/

var dom = document.getElementById("login_log");
var myChart6 = echarts.init(dom);
var app = {};
option = null;
$.get('filetype_tree.json', function (data) {
    console.log(data);
    var formatUtil = echarts.format;
    myChart6.setOption(option = {
        tooltip: {
            formatter: function (info) {
                var value = info.value;
                return [
                    'Count: ' + formatUtil.addCommas(value),
                ].join('');
            }
        },
        series: [{
            name:'Disk Usage',
            type: 'treemap',
            data: data.filetype_ingress,
            visibleMin: 100,
            label: {
                show: true,
                formatter: '{b}'
            },
        }],
    });
});;
if (option && typeof option === "object") {
    myChart6.setOption(option, true);
}