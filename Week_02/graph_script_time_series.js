var dom = document.getElementById("user_log");
var myChart = echarts.init(dom);
var app = {};
option = null;
$.get('user_log.json', function (data) {
    console.log(data);
    myChart.setOption(option = {
        title: {
            left: 'center',
            text: 'Number of User Distribution',
            textStyle: {
                align: 'center',
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            data: Object.keys(data)
        },
        yAxis: {
            splitLine: {
                show: false
            }
        },
        toolbox: {
            // left: 'center',
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        dataZoom: [{
            startValue: '2014-06-01'
        }, {
            type: 'inside'
        }],
        visualMap: {
            top: 40,
            right: 10,
            pieces: [{
                gt: 0,
                lte: 50,
                color: '#096'
            }, {
                gt: 50,
                lte: 100,
                color: '#ffde33'
            }, {
                gt: 100,
                lte: 150,
                color: '#ff9933'
            }, {
                gt: 150,
                lte: 200,
                color: '#cc0033'
            }, {
                gt: 200,
                lte: 300,
                color: '#660099'
            }, {
                gt: 300,
                color: '#7e0023'
            }],
            outOfRange: {
                color: '#999'
            }
        },
        series: {
            name: 'Number Of User',
            type: 'line',
            data: Object.keys(data).map(function (key, index) {
                return data[key];
            }),
            markPoint: {
                data: [{
                        type: 'max',
                        name: 'Max'
                    },
                ]
            },
            markLine: {
                silent: true,
                data: [{
                    yAxis: 50
                }, {
                    yAxis: 100
                }, {
                    yAxis: 150
                }, {
                    yAxis: 200
                }, {
                    yAxis: 300
                }]
            }
        }
    });
});;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

/* ------------------------------------------------------------------------------
-----------------------  Chart 2 ------------------------------------------------
-------------------------------------------------------------------------------*/

var dom = document.getElementById("login_log");
var myChart2 = echarts.init(dom);
var app = {};
option = null;
$.get('login_log.json', function (data) {
    console.log(data);
    myChart2.setOption(option = {
        title: {
            left: 'center',
            text: 'Login Distribution',
            textStyle: {
                align: 'center',
            }
        },
        legend: {
            type: 'scroll',
            orient: 'vertical',
            top: 40,
            right: 10,
            bottom: 20,
            data: ['Login', 'Logout'],
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            data: Object.keys(data)
        },
        yAxis: {
            splitLine: {
                show: false
            }
        },
        toolbox: {
            // left: 'center',
            feature: {
                magicType: {
                    type: ['stack', 'tiled']
                },
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        dataZoom: [{
            startValue: '2014-06-01'
        }, {
            type: 'inside'
        }],
        color: ['#2ECC71', '#F4D03F'],
        series: [{
                name: 'Login',
                type: 'line',
                data: Object.keys(data).map(function (key, index) {
                    return data[key]['login'];
                }),
            },
            {
                name: 'Logout',
                type: 'line',
                data: Object.keys(data).map(function (key, index) {
                    return data[key]['logout'];
                }),
            },
        ]
    });
});;
if (option && typeof option === "object") {
    myChart2.setOption(option, true);
}


/* ------------------------------------------------------------------------------
-----------------------  Chart 3 ------------------------------------------------
-------------------------------------------------------------------------------*/

var dom = document.getElementById("ip_log");
var myChart3 = echarts.init(dom);
var app = {};
option = null;
$.get('ip_log.json', function (data) {
    console.log(data);
    myChart3.setOption(option = {
        title: {
            left: 'center',
            text: 'IP Distribution',
            textStyle: {
                align: 'center',
            }
        },
        legend: {
            type: 'scroll',
            orient: 'vertical',
            top: 40,
            right: 10,
            bottom: 20,
            data: ['IPv4', 'IPv6', 'DualStack'],
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            data: Object.keys(data)
        },
        yAxis: {
            splitLine: {
                show: false
            }
        },
        toolbox: {
            // left: 'center',
            feature: {
                magicType: {
                    type: ['stack', 'tiled']
                },
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        dataZoom: [{
            startValue: '2014-06-01'
        }, {
            type: 'inside'
        }],
        color: ['#2ECC71', '#FF9E00', '#E74C3C'],
        series: [{
                name: 'IPv4',
                type: 'line',
                data: Object.keys(data).map(function (key, index) {
                    return data[key]['ipv4'];
                }),
            },
            {
                name: 'IPv6',
                type: 'line',
                data: Object.keys(data).map(function (key, index) {
                    return data[key]['ipv6'];
                }),
            },
            {
                name: 'DualStack',
                type: 'line',
                data: Object.keys(data).map(function (key, index) {
                    return data[key]['dualstack'];
                }),
            },
        ]
    });
});;
if (option && typeof option === "object") {
    myChart3.setOption(option, true);
}