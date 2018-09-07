/* ------------------------------------------------------------------------------
---------------------------------------------------------------------------------
-------------------------------------------------------------------------------*/

var dom = document.getElementById("irr_bar");
var myChart1 = echarts.init(dom);
var app = {};
option = null;
myChart1.setOption(option = {
    color: ['#2ECC71'],
    title: {
        text: 'Irregular Request',
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
        data: ['03:00', '03:01', '03:02', '03:03', '03:04', '03:05', '03:06', '03:07', '03:08', '03:09', '03:10', '03:11', '03:12', '03:13', '03:14', '03:15', '03:16', '03:17', '03:18', '03:19', '03:20', '03:21', '03:22', '03:23', '03:24', '03:25', '03:26', '03:27', '03:28', '03:29', '03:30', '03:31', '03:32', '03:33', '03:34', '03:35', '03:36', '03:37', '03:38', '03:39', '03:40', '03:41', '03:42', '03:43', '03:44', '03:45', '03:46', '03:47', '03:48', '03:49', '03:50', '03:51', '03:52', '03:53', '03:54', '03:55', '03:56', '03:57', '03:58', '03:59']
    },
    series: [{
        name: 'Irregular Request',
        type: 'bar',
        data: ['5790', '5193', '6195', '5829', '5839', '6253', '5736', '8454', '5447', '5235', '5630', '6138', '5411', '5510', '5101', '5587', '5701', '5527', '5241', '5000', '5205', '4925', '4179', '4649', '4481', '4882', '4856', '4798', '4688', '4739', '4755', '4768', '4452', '4509', '4336', '4049', '3412', '3262', '3340', '3612', '3041', '3071', '3001', '3136', '3156', '3166', '2962', '3193', '3107', '3032', '2614', '2772', '2687', '2664', '2663', '2707', '2667', '2977', '2941', '2564'],
        // label: {
        //     normal: {
        //         show: true,
        //         position: 'inside'
        //     }
        // },
    }]
});
// });;
if (option && typeof option === "object") {
    myChart1.setOption(option, true);
}

/* ------------------------------------------------------------------------------
---------------------------------------------------------------------------------
-------------------------------------------------------------------------------*/


var dom = document.getElementById("irr_map");
var myChart2 = echarts.init(dom);
var app = {};
option = null;
$.get('user_irr.json', function (data) {
    console.log(data);
    var formatUtil = echarts.format;
    myChart2.setOption(option = {
        color: ['#254117', '#306754', '#347235', '#4E9258', '#6AA121', '#6CBB3C', '#6CC417', '#54C571'],
        title: {
            text: 'Irregular Request User',
            x: 'center'
        },
        tooltip: {
            formatter: function (info) {
                var value = info.value;
                return [
                    '<div>' + info.name+ '</div>',
                    'Percentage: ' + formatUtil.addCommas(value),
                ].join('');
            }
        },
        series: [{
            name: 'Irregular Request User',
            type: 'treemap',
            data: data,
            visibleMin: 100,
            leafDepth: 2,
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
---------------------------------------------------------------------------------
-------------------------------------------------------------------------------*/

var dom = document.getElementById("route_ip_usage");
var myChart3 = echarts.init(dom);
var app = {};
option = null;
$.get('web_log_tree.json', function (data) {
    console.log(data);
    var formatUtil = echarts.format;
    myChart3.setOption(option = {
        color: ['#254117', '#306754', '#347235', '#4E9258', '#6AA121', '#6CBB3C', '#6CC417', '#54C571'],
        title: {
            text: 'Egress Hostname',
            x: 'center'
        },
        tooltip: {
            formatter: function (info) {
                var value = info.value;
                return [
                    '<div>' + info.name+ '</div>',
                    'Count: ' + formatUtil.addCommas(value),
                ].join('');
            }
        },
        series: [{
            name: 'Egress Hostname',
            type: 'treemap',
            data: data.hostname_egress,
            visibleMin: 1000,
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
---------------------------------------------------------------------------------
-------------------------------------------------------------------------------*/

var dom = document.getElementById("ip_log");
var myChart4 = echarts.init(dom);
var app = {};
option = null;
$.get('web_log_tree.json', function (data) {
    console.log(data);
    var formatUtil = echarts.format;
    myChart4.setOption(option = {
        color: ['#254117', '#306754', '#347235', '#4E9258', '#6AA121', '#6CBB3C', '#6CC417', '#54C571'],
        title: {
            text: 'Ingress Hostname',
            x: 'center'
        },
        tooltip: {
            formatter: function (info) {
                var value = info.value;
                return [
                    '<div>' + info.name+ '</div>',
                    'Count: ' + formatUtil.addCommas(value),
                ].join('');
            }
        },
        series: [{
            name: 'Ingress Hostname',
            type: 'treemap',
            data: data.hostname_ingress,
            visibleMin: 500,
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
---------------------------------------------------------------------------------
-------------------------------------------------------------------------------*/

var dom = document.getElementById("user_log");
var myChart5 = echarts.init(dom);
var app = {};
option = null;
$.get('filetype_tree.json', function (data) {
    console.log(data);
    var formatUtil = echarts.format;
    myChart5.setOption(option = {
        color: ['#254117', '#306754', '#347235', '#4E9258', '#6AA121', '#6CBB3C', '#6CC417', '#54C571'],
        title: {
            text: 'Egress FileType',
            x: 'center'
        },
        tooltip: {
            formatter: function (info) {
                var value = info.value;
                return [
                    '<div>' + info.name+ '</div>',
                    'Count: ' + formatUtil.addCommas(value),
                ].join('');
            }
        },
        series: [{
            name: 'Egress FileType',
            type: 'treemap',
            data: data.filetype_egress,
            visibleMin: 800,
            label: {
                show: true,
                formatter: '{b}'
            },
        }],
    });
});;
if (option && typeof option === "object") {
    myChart5.setOption(option, true);
}

/* ------------------------------------------------------------------------------
---------------------------------------------------------------------------------
-------------------------------------------------------------------------------*/

var dom = document.getElementById("login_log");
var myChart6 = echarts.init(dom);
var app = {};
option = null;
$.get('filetype_tree.json', function (data) {
    console.log(data);
    var formatUtil = echarts.format;
    myChart6.setOption(option = {
        color: ['#254117', '#306754', '#347235', '#4E9258', '#6AA121', '#6CBB3C', '#6CC417', '#54C571'],
        title: {
            text: 'Ingress FileType',
            x: 'center'
        },
        tooltip: {
            formatter: function (info) {
                var value = info.value;
                return [
                    '<div>' + info.name+ '</div>',
                    'Count: ' + formatUtil.addCommas(value),
                ].join('');
            }
        },
        series: [{
            name: 'Disk Usage',
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


/* ------------------------------------------------------------------------------
---------------------------------------------------------------------------------
-------------------------------------------------------------------------------*/

var dom = document.getElementById("parallel_req");
var myChart7 = echarts.init(dom);
var app = {};
option = null;
$.get('topmost_timeline.json', function (data) {

    var dataBJ = data.lists;
    var schema = [{
            name: 'TIME',
            index: 0,
            text: 'TIME'
        },
        {
            name: 'username',
            index: 1,
            text: 'USER'
        },
        {
            name: 'IP_SRC',
            index: 2,
            text: 'IP_SRC'
        },
        {
            name: 'IP_DEST',
            index: 3,
            text: 'IP_DEST'
        },
        {
            name: 'PORT_DEST',
            index: 4,
            text: ' PORT_DEST'
        },
        {
            name: 'HOSTNAME',
            index: 5,
            text: 'HOSTNAME'
        },
    ];
    var lineStyle = {
        normal: {
            width: 1,
            opacity: 0.5
        }
    };

    myChart7.setOption(option = {

        backgroundColor: '#333',
        legend: {
            bottom: 30,
            data: ['北京', '上海', '广州'],
            itemGap: 20,
            textStyle: {
                color: '#fff',
                fontSize: 14
            }
        },
        tooltip: {
            padding: 10,
            backgroundColor: '#222',
            borderColor: '#777',
            borderWidth: 1,
            formatter: function (obj) {
                var value = obj[0].value;
                return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                    obj[0].seriesName + ' ' + value[0] + '日期：' +
                    value[7] +
                    '</div>' +
                    schema[1].text + '：' + value[1] + '<br>' +
                    schema[2].text + '：' + value[2] + '<br>' +
                    schema[3].text + '：' + value[3] + '<br>' +
                    schema[4].text + '：' + value[4] + '<br>' +
                    schema[5].text + '：' + value[5] + '<br>' +
                    schema[6].text + '：' + value[6] + '<br>';
            }
        },
        // dataZoom: {
        //     show: true,
        //     orient: 'vertical',
        //     parallelAxisIndex: [0]
        // },
        color: ['#047C30'],
        parallelAxis: [{
                dim: 0,
                name: schema[0].text,
                type: 'category',
                data: data.time
            },
            {
                dim: 1,
                name: schema[1].text,
                type: 'category',
                data:  ["RMUn6owxz3Npjow@ku.ac.th", "RMUjtMPNJ6aT3TB@ku.ac.th", "RMUpKGYn9d5by4N@ku.ac.th", "RMUpKmcaiQtXA57@ku.ac.th", "RMUkdLcDsnd6MSH@ku.ac.th" ]
            },
            {
                dim: 2,
                name: schema[2].text,
                type: 'category',
                data:  data.ip_src
            },
            {
                dim: 3,
                name: schema[3].text,
                type: 'category',
                data: data.ip_dest
            },
            {
                dim: 4,
                name: schema[4].text,
                type: 'category',
                data: data.port_dest
            },
            {
                dim: 5,
                name: schema[5].text,
                type: 'category',
                data: data.hostname
            },
        ],
        visualMap: {
            show: true,
            min: 0,
            max: 150,
            dimension: 2,
            inRange: {
                color: ['#d94e5d', '#eac736', '#50a3ba'].reverse(),
                // colorAlpha: [0, 1]
            }
        },
        parallel: {
            left: '5%',
            right: '18%',
            bottom: 100,
            parallelAxisDefault: {
                type: 'value',
                name: 'AQI指数',
                nameLocation: 'end',
                nameGap: 20,
                nameTextStyle: {
                    color: '#fff',
                    fontSize: 12
                },
                axisLine: {
                    lineStyle: {
                        color: '#aaa'
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: '#777'
                    }
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            }
        },
        series: [{
            name: 'Topmost Request User',
            type: 'parallel',
            smooth: true,            
            lineStyle: lineStyle,
            data: dataBJ
        }, ]
    });
});;
if (option && typeof option === "object") {
    myChart7.setOption(option, true);
}