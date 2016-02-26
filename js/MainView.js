(function(){

	brite.registerView("MainView",{parent:"body"}, {

		create: function(){
			return render("MainView");
		}, 

		init: function(){
			var view = this;
			// ADVANCED FEATURE: if not sure, you can add this brite.display in the postDisplay. 
			// Here, we display the leftPanel before the Main view is displayed. We return the whenInit, because we want 
			// to wait until the ProjectListView is fully initialized, but not wait until it is considered postDisplay
			app.ctx.init();
			if(app.ctx.pathAt(0) == null){
			}
		},

		postDisplay: function(){
			var view = this;
			view.$contentPanel = view.$el.find(".MainView-contentPanel");
			view.$navHeader = view.$el.find("nav:first");
			view.$dialogGlass = view.$el.find(".PopupDialogGlass");
		}, 

		events: { 
			"click; .do-logoff": function () {
				app.doGet("/logoff").done(function(){
					window.location.reload();
				});
			},
			"click; .navbar-brand": function () {
				var view = this;
				view.$el.find(".MainView-content").empty();
			},
			"click; .echarts-dot": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass
				});
			},
			"click; .echarts-dot1": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var data = [
							{name: '海门', value: 9},
							{name: '鄂尔多斯', value: 12},
							{name: '招远', value: 12},
							{name: '舟山', value: 12},
							{name: '齐齐哈尔', value: 14},
							{name: '盐城', value: 15},
							{name: '赤峰', value: 16},
							{name: '青岛', value: 18},
							{name: '乳山', value: 18},
							{name: '金昌', value: 19},
							{name: '泉州', value: 21},
							{name: '莱西', value: 21},
							{name: '日照', value: 21},
							{name: '胶南', value: 22},
							{name: '南通', value: 23},
							{name: '拉萨', value: 24},
							{name: '云浮', value: 24},
							{name: '梅州', value: 25},
							{name: '文登', value: 25},
							{name: '上海', value: 25},
							{name: '攀枝花', value: 25},
							{name: '威海', value: 25},
							{name: '承德', value: 25},
							{name: '厦门', value: 26},
							{name: '汕尾', value: 26},
							{name: '潮州', value: 26},
							{name: '丹东', value: 27},
							{name: '太仓', value: 27},
							{name: '曲靖', value: 27},
							{name: '烟台', value: 28},
							{name: '福州', value: 29},
							{name: '瓦房店', value: 30},
							{name: '即墨', value: 30},
							{name: '抚顺', value: 31},
							{name: '玉溪', value: 31},
							{name: '张家口', value: 31},
							{name: '阳泉', value: 31},
							{name: '莱州', value: 32},
							{name: '湖州', value: 32},
							{name: '汕头', value: 32},
							{name: '昆山', value: 33},
							{name: '宁波', value: 33},
							{name: '湛江', value: 33},
							{name: '揭阳', value: 34},
							{name: '荣成', value: 34},
							{name: '连云港', value: 35},
							{name: '葫芦岛', value: 35},
							{name: '常熟', value: 36},
							{name: '东莞', value: 36},
							{name: '河源', value: 36},
							{name: '淮安', value: 36},
							{name: '泰州', value: 36},
							{name: '南宁', value: 37},
							{name: '营口', value: 37},
							{name: '惠州', value: 37},
							{name: '江阴', value: 37},
							{name: '蓬莱', value: 37},
							{name: '韶关', value: 38},
							{name: '嘉峪关', value: 38},
							{name: '广州', value: 38},
							{name: '延安', value: 38},
							{name: '太原', value: 39},
							{name: '清远', value: 39},
							{name: '中山', value: 39},
							{name: '昆明', value: 39},
							{name: '寿光', value: 40},
							{name: '盘锦', value: 40},
							{name: '长治', value: 41},
							{name: '深圳', value: 41},
							{name: '珠海', value: 42},
							{name: '宿迁', value: 43},
							{name: '咸阳', value: 43},
							{name: '铜川', value: 44},
							{name: '平度', value: 44},
							{name: '佛山', value: 44},
							{name: '海口', value: 44},
							{name: '江门', value: 45},
							{name: '章丘', value: 45},
							{name: '肇庆', value: 46},
							{name: '大连', value: 47},
							{name: '临汾', value: 47},
							{name: '吴江', value: 47},
							{name: '石嘴山', value: 49},
							{name: '沈阳', value: 50},
							{name: '苏州', value: 50},
							{name: '茂名', value: 50},
							{name: '嘉兴', value: 51},
							{name: '长春', value: 51},
							{name: '胶州', value: 52},
							{name: '银川', value: 52},
							{name: '张家港', value: 52},
							{name: '三门峡', value: 53},
							{name: '锦州', value: 54},
							{name: '南昌', value: 54},
							{name: '柳州', value: 54},
							{name: '三亚', value: 54},
							{name: '自贡', value: 56},
							{name: '吉林', value: 56},
							{name: '阳江', value: 57},
							{name: '泸州', value: 57},
							{name: '西宁', value: 57},
							{name: '宜宾', value: 58},
							{name: '呼和浩特', value: 58},
							{name: '成都', value: 58},
							{name: '大同', value: 58},
							{name: '镇江', value: 59},
							{name: '桂林', value: 59},
							{name: '张家界', value: 59},
							{name: '宜兴', value: 59},
							{name: '北海', value: 60},
							{name: '西安', value: 61},
							{name: '金坛', value: 62},
							{name: '东营', value: 62},
							{name: '牡丹江', value: 63},
							{name: '遵义', value: 63},
							{name: '绍兴', value: 63},
							{name: '扬州', value: 64},
							{name: '常州', value: 64},
							{name: '潍坊', value: 65},
							{name: '重庆', value: 66},
							{name: '台州', value: 67},
							{name: '南京', value: 67},
							{name: '滨州', value: 70},
							{name: '贵阳', value: 71},
							{name: '无锡', value: 71},
							{name: '本溪', value: 71},
							{name: '克拉玛依', value: 72},
							{name: '渭南', value: 72},
							{name: '马鞍山', value: 72},
							{name: '宝鸡', value: 72},
							{name: '焦作', value: 75},
							{name: '句容', value: 75},
							{name: '北京', value: 79},
							{name: '徐州', value: 79},
							{name: '衡水', value: 80},
							{name: '包头', value: 80},
							{name: '绵阳', value: 80},
							{name: '乌鲁木齐', value: 84},
							{name: '枣庄', value: 84},
							{name: '杭州', value: 84},
							{name: '淄博', value: 85},
							{name: '鞍山', value: 86},
							{name: '溧阳', value: 86},
							{name: '库尔勒', value: 86},
							{name: '安阳', value: 90},
							{name: '开封', value: 90},
							{name: '济南', value: 92},
							{name: '德阳', value: 93},
							{name: '温州', value: 95},
							{name: '九江', value: 96},
							{name: '邯郸', value: 98},
							{name: '临安', value: 99},
							{name: '兰州', value: 99},
							{name: '沧州', value: 100},
							{name: '临沂', value: 103},
							{name: '南充', value: 104},
							{name: '天津', value: 105},
							{name: '富阳', value: 106},
							{name: '泰安', value: 112},
							{name: '诸暨', value: 112},
							{name: '郑州', value: 113},
							{name: '哈尔滨', value: 114},
							{name: '聊城', value: 116},
							{name: '芜湖', value: 117},
							{name: '唐山', value: 119},
							{name: '平顶山', value: 119},
							{name: '邢台', value: 119},
							{name: '德州', value: 120},
							{name: '济宁', value: 120},
							{name: '荆州', value: 127},
							{name: '宜昌', value: 130},
							{name: '义乌', value: 132},
							{name: '丽水', value: 133},
							{name: '洛阳', value: 134},
							{name: '秦皇岛', value: 136},
							{name: '株洲', value: 143},
							{name: '石家庄', value: 147},
							{name: '莱芜', value: 148},
							{name: '常德', value: 152},
							{name: '保定', value: 153},
							{name: '湘潭', value: 154},
							{name: '金华', value: 157},
							{name: '岳阳', value: 169},
							{name: '长沙', value: 175},
							{name: '衢州', value: 177},
							{name: '廊坊', value: 193},
							{name: '菏泽', value: 194},
							{name: '合肥', value: 229},
							{name: '武汉', value: 273},
							{name: '大庆', value: 279}
						];
						var geoCoordMap = {
							'海门':[121.15,31.89],
							'鄂尔多斯':[109.781327,39.608266],
							'招远':[120.38,37.35],
							'舟山':[122.207216,29.985295],
							'齐齐哈尔':[123.97,47.33],
							'盐城':[120.13,33.38],
							'赤峰':[118.87,42.28],
							'青岛':[120.33,36.07],
							'乳山':[121.52,36.89],
							'金昌':[102.188043,38.520089],
							'泉州':[118.58,24.93],
							'莱西':[120.53,36.86],
							'日照':[119.46,35.42],
							'胶南':[119.97,35.88],
							'南通':[121.05,32.08],
							'拉萨':[91.11,29.97],
							'云浮':[112.02,22.93],
							'梅州':[116.1,24.55],
							'文登':[122.05,37.2],
							'上海':[121.48,31.22],
							'攀枝花':[101.718637,26.582347],
							'威海':[122.1,37.5],
							'承德':[117.93,40.97],
							'厦门':[118.1,24.46],
							'汕尾':[115.375279,22.786211],
							'潮州':[116.63,23.68],
							'丹东':[124.37,40.13],
							'太仓':[121.1,31.45],
							'曲靖':[103.79,25.51],
							'烟台':[121.39,37.52],
							'福州':[119.3,26.08],
							'瓦房店':[121.979603,39.627114],
							'即墨':[120.45,36.38],
							'抚顺':[123.97,41.97],
							'玉溪':[102.52,24.35],
							'张家口':[114.87,40.82],
							'阳泉':[113.57,37.85],
							'莱州':[119.942327,37.177017],
							'湖州':[120.1,30.86],
							'汕头':[116.69,23.39],
							'昆山':[120.95,31.39],
							'宁波':[121.56,29.86],
							'湛江':[110.359377,21.270708],
							'揭阳':[116.35,23.55],
							'荣成':[122.41,37.16],
							'连云港':[119.16,34.59],
							'葫芦岛':[120.836932,40.711052],
							'常熟':[120.74,31.64],
							'东莞':[113.75,23.04],
							'河源':[114.68,23.73],
							'淮安':[119.15,33.5],
							'泰州':[119.9,32.49],
							'南宁':[108.33,22.84],
							'营口':[122.18,40.65],
							'惠州':[114.4,23.09],
							'江阴':[120.26,31.91],
							'蓬莱':[120.75,37.8],
							'韶关':[113.62,24.84],
							'嘉峪关':[98.289152,39.77313],
							'广州':[113.23,23.16],
							'延安':[109.47,36.6],
							'太原':[112.53,37.87],
							'清远':[113.01,23.7],
							'中山':[113.38,22.52],
							'昆明':[102.73,25.04],
							'寿光':[118.73,36.86],
							'盘锦':[122.070714,41.119997],
							'长治':[113.08,36.18],
							'深圳':[114.07,22.62],
							'珠海':[113.52,22.3],
							'宿迁':[118.3,33.96],
							'咸阳':[108.72,34.36],
							'铜川':[109.11,35.09],
							'平度':[119.97,36.77],
							'佛山':[113.11,23.05],
							'海口':[110.35,20.02],
							'江门':[113.06,22.61],
							'章丘':[117.53,36.72],
							'肇庆':[112.44,23.05],
							'大连':[121.62,38.92],
							'临汾':[111.5,36.08],
							'吴江':[120.63,31.16],
							'石嘴山':[106.39,39.04],
							'沈阳':[123.38,41.8],
							'苏州':[120.62,31.32],
							'茂名':[110.88,21.68],
							'嘉兴':[120.76,30.77],
							'长春':[125.35,43.88],
							'胶州':[120.03336,36.264622],
							'银川':[106.27,38.47],
							'张家港':[120.555821,31.875428],
							'三门峡':[111.19,34.76],
							'锦州':[121.15,41.13],
							'南昌':[115.89,28.68],
							'柳州':[109.4,24.33],
							'三亚':[109.511909,18.252847],
							'自贡':[104.778442,29.33903],
							'吉林':[126.57,43.87],
							'阳江':[111.95,21.85],
							'泸州':[105.39,28.91],
							'西宁':[101.74,36.56],
							'宜宾':[104.56,29.77],
							'呼和浩特':[111.65,40.82],
							'成都':[104.06,30.67],
							'大同':[113.3,40.12],
							'镇江':[119.44,32.2],
							'桂林':[110.28,25.29],
							'张家界':[110.479191,29.117096],
							'宜兴':[119.82,31.36],
							'北海':[109.12,21.49],
							'西安':[108.95,34.27],
							'金坛':[119.56,31.74],
							'东营':[118.49,37.46],
							'牡丹江':[129.58,44.6],
							'遵义':[106.9,27.7],
							'绍兴':[120.58,30.01],
							'扬州':[119.42,32.39],
							'常州':[119.95,31.79],
							'潍坊':[119.1,36.62],
							'重庆':[106.54,29.59],
							'台州':[121.420757,28.656386],
							'南京':[118.78,32.04],
							'滨州':[118.03,37.36],
							'贵阳':[106.71,26.57],
							'无锡':[120.29,31.59],
							'本溪':[123.73,41.3],
							'克拉玛依':[84.77,45.59],
							'渭南':[109.5,34.52],
							'马鞍山':[118.48,31.56],
							'宝鸡':[107.15,34.38],
							'焦作':[113.21,35.24],
							'句容':[119.16,31.95],
							'北京':[116.46,39.92],
							'徐州':[117.2,34.26],
							'衡水':[115.72,37.72],
							'包头':[110,40.58],
							'绵阳':[104.73,31.48],
							'乌鲁木齐':[87.68,43.77],
							'枣庄':[117.57,34.86],
							'杭州':[120.19,30.26],
							'淄博':[118.05,36.78],
							'鞍山':[122.85,41.12],
							'溧阳':[119.48,31.43],
							'库尔勒':[86.06,41.68],
							'安阳':[114.35,36.1],
							'开封':[114.35,34.79],
							'济南':[117,36.65],
							'德阳':[104.37,31.13],
							'温州':[120.65,28.01],
							'九江':[115.97,29.71],
							'邯郸':[114.47,36.6],
							'临安':[119.72,30.23],
							'兰州':[103.73,36.03],
							'沧州':[116.83,38.33],
							'临沂':[118.35,35.05],
							'南充':[106.110698,30.837793],
							'天津':[117.2,39.13],
							'富阳':[119.95,30.07],
							'泰安':[117.13,36.18],
							'诸暨':[120.23,29.71],
							'郑州':[113.65,34.76],
							'哈尔滨':[126.63,45.75],
							'聊城':[115.97,36.45],
							'芜湖':[118.38,31.33],
							'唐山':[118.02,39.63],
							'平顶山':[113.29,33.75],
							'邢台':[114.48,37.05],
							'德州':[116.29,37.45],
							'济宁':[116.59,35.38],
							'荆州':[112.239741,30.335165],
							'宜昌':[111.3,30.7],
							'义乌':[120.06,29.32],
							'丽水':[119.92,28.45],
							'洛阳':[112.44,34.7],
							'秦皇岛':[119.57,39.95],
							'株洲':[113.16,27.83],
							'石家庄':[114.48,38.03],
							'莱芜':[117.67,36.19],
							'常德':[111.69,29.05],
							'保定':[115.48,38.85],
							'湘潭':[112.91,27.87],
							'金华':[119.64,29.12],
							'岳阳':[113.09,29.37],
							'长沙':[113,28.21],
							'衢州':[118.88,28.97],
							'廊坊':[116.7,39.53],
							'菏泽':[115.480656,35.23375],
							'合肥':[117.27,31.86],
							'武汉':[114.31,30.52],
							'大庆':[125.03,46.58]
						};

						var convertData = function (data) {
							var res = [];
							for (var i = 0; i < data.length; i++) {
								var geoCoord = geoCoordMap[data[i].name];
								if (geoCoord) {
									res.push({
										name: data[i].name,
										value: geoCoord.concat(data[i].value)
									});
								}
							}
							return res;
						};

						var option = {
							backgroundColor: '#404a59',
							title: {
								text: 'DEMO',
								subtext: 'data from PM25.in',
								sublink: 'http://www.pm25.in',
								left: 'center',
								textStyle: {
									color: '#fff'
								}
							},
							tooltip : {
								trigger: 'item',
								position: [10, 10]
							},
							legend: {
								orient: 'vertical',
								y: 'bottom',
								x:'right',
								data:['pm2.5'],
								textStyle: {
									color: '#fff'
								}
							},
							geo: {
								map: 'china',
								label: {
									emphasis: {
										show: false
									}
								},
								roam: true,
								itemStyle: {
									normal: {
										areaColor: '#323c48',
										borderColor: '#111'
									},
									emphasis: {
										areaColor: '#2a333d'
									}
								}
							},
							series : [
								{
									name: 'pm2.5',
									type: 'scatter',
									coordinateSystem: 'geo',
									data: convertData(data),
									symbolSize: function (val) {
										return val[2] / 10;
									},
									label: {
										normal: {
											formatter: '{b}',
											position: 'right',
											show: false
										},
										emphasis: {
											show: true
										}
									},
									itemStyle: {
										normal: {
											color: '#ddb926'
										}
									}
								},
								{
									name: 'Top 5',
									type: 'effectScatter',
									coordinateSystem: 'geo',
									data: convertData(data.sort(function (a, b) {
										return b.value - a.value;
									}).slice(0, 6)),
									symbolSize: function (val) {
										return val[2] / 10;
									},
									showEffectOn: 'render',
									rippleEffect: {
										brushType: 'stroke'
									},
									hoverAnimation: true,
									label: {
										normal: {
											formatter: '{b}',
											position: 'right',
											show: true
										}
									},
									itemStyle: {
										normal: {
											color: '#f4e925',
											shadowBlur: 10,
											shadowColor: '#333'
										}
									},
									zlevel: 1
								}
							]
						};

						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-dot2": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'Anscombe\'s quartet',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var dataAll = [
							[
								[10.0, 8.04],
								[8.0, 6.95],
								[13.0, 7.58],
								[9.0, 8.81],
								[11.0, 8.33],
								[14.0, 9.96],
								[6.0, 7.24],
								[4.0, 4.26],
								[12.0, 10.84],
								[7.0, 4.82],
								[5.0, 5.68]
							],
							[
								[10.0, 9.14],
								[8.0, 8.14],
								[13.0, 8.74],
								[9.0, 8.77],
								[11.0, 9.26],
								[14.0, 8.10],
								[6.0, 6.13],
								[4.0, 3.10],
								[12.0, 9.13],
								[7.0, 7.26],
								[5.0, 4.74]
							],
							[
								[10.0, 7.46],
								[8.0, 6.77],
								[13.0, 12.74],
								[9.0, 7.11],
								[11.0, 7.81],
								[14.0, 8.84],
								[6.0, 6.08],
								[4.0, 5.39],
								[12.0, 8.15],
								[7.0, 6.42],
								[5.0, 5.73]
							],
							[
								[8.0, 6.58],
								[8.0, 5.76],
								[8.0, 7.71],
								[8.0, 8.84],
								[8.0, 8.47],
								[8.0, 7.04],
								[8.0, 5.25],
								[19.0, 12.50],
								[8.0, 5.56],
								[8.0, 7.91],
								[8.0, 6.89]
							]
						];

						var markLineOpt = {
							animation: false,
							label: {
								normal: {
									formatter: 'y = 0.5 * x + 3',
									textStyle: {
										align: 'right'
									}
								}
							},
							lineStyle: {
								normal: {
									type: 'solid'
								}
							},
							tooltip: {
								formatter: 'y = 0.5 * x + 3'
							},
							data: [[{
								coord: [0, 3],
								symbol: 'none'
							}, {
								coord: [20, 13],
								symbol: 'none'
							}]]
						};

						var option = {
							title: {
								text: 'Anscombe\'s quartet',
								x: 'center',
								y: 0
							},
							grid: [
								{x: '7%', y: '7%', width: '38%', height: '38%'},
								{x2: '7%', y: '7%', width: '38%', height: '38%'},
								{x: '7%', y2: '7%', width: '38%', height: '38%'},
								{x2: '7%', y2: '7%', width: '38%', height: '38%'}
							],
							tooltip: {
								formatter: 'Group {a}: ({c})'
							},
							xAxis: [
								{gridIndex: 0, min: 0, max: 20},
								{gridIndex: 1, min: 0, max: 20},
								{gridIndex: 2, min: 0, max: 20},
								{gridIndex: 3, min: 0, max: 20}
							],
							yAxis: [
								{gridIndex: 0, min: 0, max: 15},
								{gridIndex: 1, min: 0, max: 15},
								{gridIndex: 2, min: 0, max: 15},
								{gridIndex: 3, min: 0, max: 15}
							],
							series: [
								{
									name: 'I',
									type: 'scatter',
									xAxisIndex: [0],
									yAxisIndex: [0],
									data: dataAll[0],
									markLine: markLineOpt
								},
								{
									name: 'II',
									type: 'scatter',
									xAxisIndex: [1],
									yAxisIndex: [1],
									data: dataAll[1],
									markLine: markLineOpt
								},
								{
									name: 'III',
									type: 'scatter',
									xAxisIndex: [2],
									yAxisIndex: [2],
									data: dataAll[2],
									markLine: markLineOpt
								},
								{
									name: 'IV',
									type: 'scatter',
									xAxisIndex: [3],
									yAxisIndex: [3],
									data: dataAll[3],
									markLine: markLineOpt
								}
							]
						};

						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-dot3": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var dataBJ = [
							[1,55,9,56,0.46,18,6,"良"],
							[2,25,11,21,0.65,34,9,"优"],
							[3,56,7,63,0.3,14,5,"良"],
							[4,33,7,29,0.33,16,6,"优"],
							[5,42,24,44,0.76,40,16,"优"],
							[6,82,58,90,1.77,68,33,"良"],
							[7,74,49,77,1.46,48,27,"良"],
							[8,78,55,80,1.29,59,29,"良"],
							[9,267,216,280,4.8,108,64,"重度污染"],
							[10,185,127,216,2.52,61,27,"中度污染"],
							[11,39,19,38,0.57,31,15,"优"],
							[12,41,11,40,0.43,21,7,"优"],
							[13,64,38,74,1.04,46,22,"良"],
							[14,108,79,120,1.7,75,41,"轻度污染"],
							[15,108,63,116,1.48,44,26,"轻度污染"],
							[16,33,6,29,0.34,13,5,"优"],
							[17,94,66,110,1.54,62,31,"良"],
							[18,186,142,192,3.88,93,79,"中度污染"],
							[19,57,31,54,0.96,32,14,"良"],
							[20,22,8,17,0.48,23,10,"优"],
							[21,39,15,36,0.61,29,13,"优"],
							[22,94,69,114,2.08,73,39,"良"],
							[23,99,73,110,2.43,76,48,"良"],
							[24,31,12,30,0.5,32,16,"优"],
							[25,42,27,43,1,53,22,"优"],
							[26,154,117,157,3.05,92,58,"中度污染"],
							[27,234,185,230,4.09,123,69,"重度污染"],
							[28,160,120,186,2.77,91,50,"中度污染"],
							[29,134,96,165,2.76,83,41,"轻度污染"],
							[30,52,24,60,1.03,50,21,"良"],
							[31,46,5,49,0.28,10,6,"优"]
						];

						var dataGZ = [
							[1,26,37,27,1.163,27,13,"优"],
							[2,85,62,71,1.195,60,8,"良"],
							[3,78,38,74,1.363,37,7,"良"],
							[4,21,21,36,0.634,40,9,"优"],
							[5,41,42,46,0.915,81,13,"优"],
							[6,56,52,69,1.067,92,16,"良"],
							[7,64,30,28,0.924,51,2,"良"],
							[8,55,48,74,1.236,75,26,"良"],
							[9,76,85,113,1.237,114,27,"良"],
							[10,91,81,104,1.041,56,40,"良"],
							[11,84,39,60,0.964,25,11,"良"],
							[12,64,51,101,0.862,58,23,"良"],
							[13,70,69,120,1.198,65,36,"良"],
							[14,77,105,178,2.549,64,16,"良"],
							[15,109,68,87,0.996,74,29,"轻度污染"],
							[16,73,68,97,0.905,51,34,"良"],
							[17,54,27,47,0.592,53,12,"良"],
							[18,51,61,97,0.811,65,19,"良"],
							[19,91,71,121,1.374,43,18,"良"],
							[20,73,102,182,2.787,44,19,"良"],
							[21,73,50,76,0.717,31,20,"良"],
							[22,84,94,140,2.238,68,18,"良"],
							[23,93,77,104,1.165,53,7,"良"],
							[24,99,130,227,3.97,55,15,"良"],
							[25,146,84,139,1.094,40,17,"轻度污染"],
							[26,113,108,137,1.481,48,15,"轻度污染"],
							[27,81,48,62,1.619,26,3,"良"],
							[28,56,48,68,1.336,37,9,"良"],
							[29,82,92,174,3.29,0,13,"良"],
							[30,106,116,188,3.628,101,16,"轻度污染"],
							[31,118,50,0,1.383,76,11,"轻度污染"]
						];

						var dataSH = [
							[1,91,45,125,0.82,34,23,"良"],
							[2,65,27,78,0.86,45,29,"良"],
							[3,83,60,84,1.09,73,27,"良"],
							[4,109,81,121,1.28,68,51,"轻度污染"],
							[5,106,77,114,1.07,55,51,"轻度污染"],
							[6,109,81,121,1.28,68,51,"轻度污染"],
							[7,106,77,114,1.07,55,51,"轻度污染"],
							[8,89,65,78,0.86,51,26,"良"],
							[9,53,33,47,0.64,50,17,"良"],
							[10,80,55,80,1.01,75,24,"良"],
							[11,117,81,124,1.03,45,24,"轻度污染"],
							[12,99,71,142,1.1,62,42,"良"],
							[13,95,69,130,1.28,74,50,"良"],
							[14,116,87,131,1.47,84,40,"轻度污染"],
							[15,108,80,121,1.3,85,37,"轻度污染"],
							[16,134,83,167,1.16,57,43,"轻度污染"],
							[17,79,43,107,1.05,59,37,"良"],
							[18,71,46,89,0.86,64,25,"良"],
							[19,97,71,113,1.17,88,31,"良"],
							[20,84,57,91,0.85,55,31,"良"],
							[21,87,63,101,0.9,56,41,"良"],
							[22,104,77,119,1.09,73,48,"轻度污染"],
							[23,87,62,100,1,72,28,"良"],
							[24,168,128,172,1.49,97,56,"中度污染"],
							[25,65,45,51,0.74,39,17,"良"],
							[26,39,24,38,0.61,47,17,"优"],
							[27,39,24,39,0.59,50,19,"优"],
							[28,93,68,96,1.05,79,29,"良"],
							[29,188,143,197,1.66,99,51,"中度污染"],
							[30,174,131,174,1.55,108,50,"中度污染"],
							[31,187,143,201,1.39,89,53,"中度污染"]
						];

						var schema = [
							{name: 'date', index: 0, text: '日'},
							{name: 'AQIindex', index: 1, text: 'AQI指数'},
							{name: 'PM25', index: 2, text: 'PM2.5'},
							{name: 'PM10', index: 3, text: 'PM10'},
							{name: 'CO', index: 4, text: '一氧化碳（CO）'},
							{name: 'NO2', index: 5, text: '二氧化氮（NO2）'},
							{name: 'SO2', index: 6, text: '二氧化硫（SO2）'}
						];


						var itemStyle = {
							normal: {
								opacity: 0.8,
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowOffsetY: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						};

						var option = {
							backgroundColor: '#333',
							color: [
								'#dd4444', '#fec42c', '#80F1BE'
							],
							legend: {
								y: 'top',
								data: ['北京', '上海', '广州'],
								textStyle: {
									color: '#fff',
									fontSize: 16
								}
							},
							grid: {
								x: '10%',
								x2: 150,
								y: '18%',
								y2: '10%'
							},
							tooltip: {
								padding: 10,
								backgroundColor: '#222',
								borderColor: '#777',
								borderWidth: 1,
								formatter: function (obj) {
									var value = obj.value;
									return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
										+ obj.seriesName + ' ' + value[0] + '日：'
										+ value[7]
										+ '</div>'
										+ schema[1].text + '：' + value[1] + '<br>'
										+ schema[2].text + '：' + value[2] + '<br>'
										+ schema[3].text + '：' + value[3] + '<br>'
										+ schema[4].text + '：' + value[4] + '<br>'
										+ schema[5].text + '：' + value[5] + '<br>'
										+ schema[6].text + '：' + value[6] + '<br>';
								}
							},
							xAxis: {
								type: 'value',
								name: '日期',
								nameGap: 16,
								nameTextStyle: {
									color: '#fff',
									fontSize: 14
								},
								max: 31,
								splitLine: {
									show: false
								},
								axisLine: {
									lineStyle: {
										color: '#777'
									}
								},
								axisTick: {
									lineStyle: {
										color: '#777'
									}
								},
								axisLabel: {
									formatter: '{value}',
									textStyle: {
										color: '#fff'
									}
								}
							},
							yAxis: {
								type: 'value',
								name: 'AQI指数',
								nameLocation: 'end',
								nameGap: 20,
								nameTextStyle: {
									color: '#fff',
									fontSize: 16
								},
								axisLine: {
									lineStyle: {
										color: '#777'
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
							},
							visualMap: [
								{
									left: 'right',
									top: '10%',
									dimension: 2,
									min: 0,
									max: 250,
									itemWidth: 30,
									itemHeight: 120,
									calculable: true,
									precision: 0.1,
									text: ['圆形大小：PM2.5'],
									textGap: 30,
									textStyle: {
										color: '#fff'
									},
									inRange: {
										symbolSize: [10, 70]
									},
									outOfRange: {
										symbolSize: [10, 70],
										color: ['rgba(255,255,255,.2)']
									},
									controller: {
										inRange: {
											color: ['#c23531']
										},
										outOfRange: {
											color: ['#444']
										}
									}
								},
								{
									left: 'right',
									bottom: '5%',
									dimension: 6,
									min: 0,
									max: 50,
									itemHeight: 120,
									calculable: true,
									precision: 0.1,
									text: ['明暗：二氧化硫'],
									textGap: 30,
									textStyle: {
										color: '#fff'
									},
									inRange: {
										colorLightness: [1, 0.5]
									},
									outOfRange: {
										color: ['rgba(255,255,255,.2)']
									},
									controller: {
										inRange: {
											color: ['#c23531']
										},
										outOfRange: {
											color: ['#444']
										}
									}
								}
							],
							series: [
								{
									name: '北京',
									type: 'scatter',
									itemStyle: itemStyle,
									data: dataBJ
								},
								{
									name: '上海',
									type: 'scatter',
									itemStyle: itemStyle,
									data: dataSH
								},
								{
									name: '广州',
									type: 'scatter',
									itemStyle: itemStyle,
									data: dataGZ
								}
							]
						};

						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-dot4": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'sin, cos',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var option = {
							tooltip : {
								trigger: 'axis',
								showDelay : 0,
								axisPointer:{
									show: true,
									type : 'cross',
									lineStyle: {
										type : 'dashed',
										width : 1
									}
								}
							},
							legend: {
								data:['sin','cos']
							},
							toolbox: {
								show : true,
								feature : {
									mark : {show: true},
									dataZoom : {show: true},
									dataView : {show: true, readOnly: false},
									restore : {show: true},
									saveAsImage : {show: true}
								}
							},
							xAxis : [
								{
									type : 'value',
									scale:true
								}
							],
							yAxis : [
								{
									type : 'value',
									scale:true
								}
							],
							series : [
								{
									name:'sin',
									type:'scatter',
									large: true,
									symbolSize: 3,
									data: (function () {
										var d = [];
										var len = 10000;
										var x = 0;
										while (len--) {
											x = (Math.random() * 10).toFixed(3) - 0;
											d.push([
												x,
												//Math.random() * 10
												(Math.sin(x) - x * (len % 2 ? 0.1 : -0.1) * Math.random()).toFixed(3) - 0
											]);
										}
										//console.log(d)
										return d;
									})()
								},
								{
									name:'cos',
									type:'scatter',
									large: true,
									symbolSize: 3,
									data: (function () {
										var d = [];
										var len = 10000;
										var x = 0;
										while (len--) {
											x = (Math.random() * 10).toFixed(3) - 0;
											d.push([
												x,
												//Math.random() * 10
												(Math.cos(x) - x * (len % 2 ? 0.1 : -0.1) * Math.random()).toFixed(3) - 0
											]);
										}
										//console.log(d)
										return d;
									})()
								}
							]
						};

						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-dot5": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: '平均寿命',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						myChart.showLoading();

						$.get('data/asset/data/life-expectancy.json', function (data) {
							myChart.hideLoading();

							var itemStyle = {
								normal: {
									opacity: 0.8,
									shadowBlur: 10,
									shadowOffsetX: 0,
									shadowOffsetY: 0,
									shadowColor: 'rgba(0, 0, 0, 0.5)'
								}
							};

							var sizeFunction = function (x) {
								var y = Math.sqrt(x / 5e8) + 0.1;
								return y * 40;
							};
							// Schema:
							var schema = [
								{name: 'Income', index: 0, text: '人均收入', unit: '美元'},
								{name: 'LifeExpectancy', index: 1, text: '人均寿命', unit: '岁'},
								{name: 'Population', index: 2, text: '总人口', unit: ''},
								{name: 'Country', index: 3, text: '国家', unit: ''}
							];

							var option = {
								baseOption: {
									timeline: {
										axisType: 'category',
										orient: 'vertical',
										autoPlay: true,
										inverse: true,
										playInterval: 1000,
										left: null,
										right: 0,
										top: 20,
										bottom: 20,
										width: 55,
										height: null,
										label: {
											normal: {
												textStyle: {
													color: '#999'
												}
											},
											emphasis: {
												textStyle: {
													color: '#fff'
												}
											}
										},
										symbol: 'none',
										lineStyle: {
											color: '#555'
										},
										checkpointStyle: {
											color: '#bbb',
											borderColor: '#777',
											borderWidth: 2
										},
										controlStyle: {
											showNextBtn: false,
											showPrevBtn: false,
											normal: {
												color: '#666',
												borderColor: '#666'
											},
											emphasis: {
												color: '#aaa',
												borderColor: '#aaa'
											}
										},
										data: []
									},
									backgroundColor: '#333',
									title: {
										'text': data.timeline[0],
										textAlign: 'center',
										left: '63%',
										top: '55%',
										textStyle: {
											fontSize: 100,
											color: 'rgba(255, 255, 255, 0.7)'
										}
									},
									tooltip: {
										padding: 5,
										backgroundColor: '#222',
										borderColor: '#777',
										borderWidth: 1,
										formatter: function (obj) {
											var value = obj.value;
											return schema[3].text + '：' + value[3] + '<br>'
												+ schema[1].text + '：' + value[1] + schema[1].unit + '<br>'
												+ schema[0].text + '：' + value[0] + schema[0].unit + '<br>'
												+ schema[2].text + '：' + value[2] + '<br>';
										}
									},
									grid: {
										left: '12%',
										right: '110'
									},
									xAxis: {
										type: 'log',
										name: '人均收入',
										max: 100000,
										min: 300,
										nameGap: 25,
										nameLocation: 'middle',
										nameTextStyle: {
											fontSize: 18
										},
										splitLine: {
											show: false
										},
										axisTick: {
											lineStyle: {
												color: '#ccc'
											}
										},
										axisLine: {
											lineStyle: {
												color: '#ccc'
											}
										},
										axisLabel: {
											formatter: '{value} $',
											textStyle: {
												color: '#ccc'
											}
										}
									},
									yAxis: {
										type: 'value',
										name: '平均寿命',
										max: 100,
										nameTextStyle: {
											color: '#ccc',
											fontSize: 18
										},
										axisLine: {
											lineStyle: {
												color: '#ccc'
											}
										},
										axisTick: {
											lineStyle: {
												color: '#ccc'
											}
										},
										splitLine: {
											show: false
										},
										axisLabel: {
											formatter: '{value} 岁',
											textStyle: {
												color: '#ccc'
											}
										}
									},
									visualMap: [
										{
											show: false,
											dimension: 3,
											categories: data.counties,
											calculable: true,
											precision: 0.1,
											textGap: 30,
											textStyle: {
												color: '#ccc'
											},
											inRange: {
												color: ['#bcd3bb', '#e88f70', '#edc1a5', '#9dc5c8', '#e1e8c8', '#7b7c68', '#e5b5b5', '#f0b489', '#928ea8', '#bda29a']
											}
										}
									],
									series: [
										{
											type: 'scatter',
											itemStyle: itemStyle,
											data: data.series[0],
											symbolSize: function(val) {
												return sizeFunction(val[2]);
											}
										}
									],
									animationDurationUpdate: 1000,
									animationEasingUpdate: 'quinticInOut'
								},
								options: []
							};

							for (var n = 0; n < data.timeline.length; n++) {
								option.baseOption.timeline.data.push(data.timeline[n]);
								option.options.push({
									title: {
										show: true,
										'text': data.timeline[n] + ''
									},
									series: {
										name: data.timeline[n],
										type: 'scatter',
										itemStyle: itemStyle,
										data: data.series[n],
										symbolSize: function(val) {
											return sizeFunction(val[2]);
										}
									}
								});
							}

							myChart.setOption(option);

						});
					}
				});
			},
			"click; .echarts-dot6": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var geoCoordMap = {
							"海门":[121.15,31.89],
							"鄂尔多斯":[109.781327,39.608266],
							"招远":[120.38,37.35],
							"舟山":[122.207216,29.985295],
							"齐齐哈尔":[123.97,47.33],
							"盐城":[120.13,33.38],
							"赤峰":[118.87,42.28],
							"青岛":[120.33,36.07],
							"乳山":[121.52,36.89],
							"金昌":[102.188043,38.520089],
							"泉州":[118.58,24.93],
							"莱西":[120.53,36.86],
							"日照":[119.46,35.42],
							"胶南":[119.97,35.88],
							"南通":[121.05,32.08],
							"拉萨":[91.11,29.97],
							"云浮":[112.02,22.93],
							"梅州":[116.1,24.55],
							"文登":[122.05,37.2],
							"上海":[121.48,31.22],
							"攀枝花":[101.718637,26.582347],
							"威海":[122.1,37.5],
							"承德":[117.93,40.97],
							"厦门":[118.1,24.46],
							"汕尾":[115.375279,22.786211],
							"潮州":[116.63,23.68],
							"丹东":[124.37,40.13],
							"太仓":[121.1,31.45],
							"曲靖":[103.79,25.51],
							"烟台":[121.39,37.52],
							"福州":[119.3,26.08],
							"瓦房店":[121.979603,39.627114],
							"即墨":[120.45,36.38],
							"抚顺":[123.97,41.97],
							"玉溪":[102.52,24.35],
							"张家口":[114.87,40.82],
							"阳泉":[113.57,37.85],
							"莱州":[119.942327,37.177017],
							"湖州":[120.1,30.86],
							"汕头":[116.69,23.39],
							"昆山":[120.95,31.39],
							"宁波":[121.56,29.86],
							"湛江":[110.359377,21.270708],
							"揭阳":[116.35,23.55],
							"荣成":[122.41,37.16],
							"连云港":[119.16,34.59],
							"葫芦岛":[120.836932,40.711052],
							"常熟":[120.74,31.64],
							"东莞":[113.75,23.04],
							"河源":[114.68,23.73],
							"淮安":[119.15,33.5],
							"泰州":[119.9,32.49],
							"南宁":[108.33,22.84],
							"营口":[122.18,40.65],
							"惠州":[114.4,23.09],
							"江阴":[120.26,31.91],
							"蓬莱":[120.75,37.8],
							"韶关":[113.62,24.84],
							"嘉峪关":[98.289152,39.77313],
							"广州":[113.23,23.16],
							"延安":[109.47,36.6],
							"太原":[112.53,37.87],
							"清远":[113.01,23.7],
							"中山":[113.38,22.52],
							"昆明":[102.73,25.04],
							"寿光":[118.73,36.86],
							"盘锦":[122.070714,41.119997],
							"长治":[113.08,36.18],
							"深圳":[114.07,22.62],
							"珠海":[113.52,22.3],
							"宿迁":[118.3,33.96],
							"咸阳":[108.72,34.36],
							"铜川":[109.11,35.09],
							"平度":[119.97,36.77],
							"佛山":[113.11,23.05],
							"海口":[110.35,20.02],
							"江门":[113.06,22.61],
							"章丘":[117.53,36.72],
							"肇庆":[112.44,23.05],
							"大连":[121.62,38.92],
							"临汾":[111.5,36.08],
							"吴江":[120.63,31.16],
							"石嘴山":[106.39,39.04],
							"沈阳":[123.38,41.8],
							"苏州":[120.62,31.32],
							"茂名":[110.88,21.68],
							"嘉兴":[120.76,30.77],
							"长春":[125.35,43.88],
							"胶州":[120.03336,36.264622],
							"银川":[106.27,38.47],
							"张家港":[120.555821,31.875428],
							"三门峡":[111.19,34.76],
							"锦州":[121.15,41.13],
							"南昌":[115.89,28.68],
							"柳州":[109.4,24.33],
							"三亚":[109.511909,18.252847],
							"自贡":[104.778442,29.33903],
							"吉林":[126.57,43.87],
							"阳江":[111.95,21.85],
							"泸州":[105.39,28.91],
							"西宁":[101.74,36.56],
							"宜宾":[104.56,29.77],
							"呼和浩特":[111.65,40.82],
							"成都":[104.06,30.67],
							"大同":[113.3,40.12],
							"镇江":[119.44,32.2],
							"桂林":[110.28,25.29],
							"张家界":[110.479191,29.117096],
							"宜兴":[119.82,31.36],
							"北海":[109.12,21.49],
							"西安":[108.95,34.27],
							"金坛":[119.56,31.74],
							"东营":[118.49,37.46],
							"牡丹江":[129.58,44.6],
							"遵义":[106.9,27.7],
							"绍兴":[120.58,30.01],
							"扬州":[119.42,32.39],
							"常州":[119.95,31.79],
							"潍坊":[119.1,36.62],
							"重庆":[106.54,29.59],
							"台州":[121.420757,28.656386],
							"南京":[118.78,32.04],
							"滨州":[118.03,37.36],
							"贵阳":[106.71,26.57],
							"无锡":[120.29,31.59],
							"本溪":[123.73,41.3],
							"克拉玛依":[84.77,45.59],
							"渭南":[109.5,34.52],
							"马鞍山":[118.48,31.56],
							"宝鸡":[107.15,34.38],
							"焦作":[113.21,35.24],
							"句容":[119.16,31.95],
							"北京":[116.46,39.92],
							"徐州":[117.2,34.26],
							"衡水":[115.72,37.72],
							"包头":[110,40.58],
							"绵阳":[104.73,31.48],
							"乌鲁木齐":[87.68,43.77],
							"枣庄":[117.57,34.86],
							"杭州":[120.19,30.26],
							"淄博":[118.05,36.78],
							"鞍山":[122.85,41.12],
							"溧阳":[119.48,31.43],
							"库尔勒":[86.06,41.68],
							"安阳":[114.35,36.1],
							"开封":[114.35,34.79],
							"济南":[117,36.65],
							"德阳":[104.37,31.13],
							"温州":[120.65,28.01],
							"九江":[115.97,29.71],
							"邯郸":[114.47,36.6],
							"临安":[119.72,30.23],
							"兰州":[103.73,36.03],
							"沧州":[116.83,38.33],
							"临沂":[118.35,35.05],
							"南充":[106.110698,30.837793],
							"天津":[117.2,39.13],
							"富阳":[119.95,30.07],
							"泰安":[117.13,36.18],
							"诸暨":[120.23,29.71],
							"郑州":[113.65,34.76],
							"哈尔滨":[126.63,45.75],
							"聊城":[115.97,36.45],
							"芜湖":[118.38,31.33],
							"唐山":[118.02,39.63],
							"平顶山":[113.29,33.75],
							"邢台":[114.48,37.05],
							"德州":[116.29,37.45],
							"济宁":[116.59,35.38],
							"荆州":[112.239741,30.335165],
							"宜昌":[111.3,30.7],
							"义乌":[120.06,29.32],
							"丽水":[119.92,28.45],
							"洛阳":[112.44,34.7],
							"秦皇岛":[119.57,39.95],
							"株洲":[113.16,27.83],
							"石家庄":[114.48,38.03],
							"莱芜":[117.67,36.19],
							"常德":[111.69,29.05],
							"保定":[115.48,38.85],
							"湘潭":[112.91,27.87],
							"金华":[119.64,29.12],
							"岳阳":[113.09,29.37],
							"长沙":[113,28.21],
							"衢州":[118.88,28.97],
							"廊坊":[116.7,39.53],
							"菏泽":[115.480656,35.23375],
							"合肥":[117.27,31.86],
							"武汉":[114.31,30.52],
							"大庆":[125.03,46.58]
						};

						var convertData = function (data) {
							var res = [];
							for (var i = 0; i < data.length; i++) {
								var geoCoord = geoCoordMap[data[i].name];
								if (geoCoord) {
									res.push({
										name: data[i].name,
										value: geoCoord.concat(data[i].value)
									});
								}
							}
							return res;
						};

						var option = {
							backgroundColor: '#404a59',
							title: {
								text: 'DEMO',
								subtext: 'data from PM25.in',
								sublink: 'http://www.pm25.in',
								x:'center',
								textStyle: {
									color: '#fff'
								}
							},
							tooltip: {
								trigger: 'item',
								formatter: function (params) {
									return params.name + ' : ' + params.value[2];
								}
							},
							legend: {
								orient: 'vertical',
								y: 'bottom',
								x:'right',
								data:['pm2.5'],
								textStyle: {
									color: '#fff'
								}
							},
							dataRange: {
								min: 0,
								max: 200,
								calculable: true,
								color: ['#d94e5d','#eac736','#50a3ba'],
								textStyle: {
									color: '#fff'
								}
							},
							geo: {
								map: 'china',
								label: {
									emphasis: {
										show: false
									}
								},
								itemStyle: {
									normal: {
										areaColor: '#323c48',
										borderColor: '#111'
									},
									emphasis: {
										areaColor: '#2a333d'
									}
								}
							},
							series: [
								{
									name: 'pm2.5',
									type: 'scatter',
									coordinateSystem: 'geo',
									data: convertData([
										{name: "海门", value: 9},
										{name: "鄂尔多斯", value: 12},
										{name: "招远", value: 12},
										{name: "舟山", value: 12},
										{name: "齐齐哈尔", value: 14},
										{name: "盐城", value: 15},
										{name: "赤峰", value: 16},
										{name: "青岛", value: 18},
										{name: "乳山", value: 18},
										{name: "金昌", value: 19},
										{name: "泉州", value: 21},
										{name: "莱西", value: 21},
										{name: "日照", value: 21},
										{name: "胶南", value: 22},
										{name: "南通", value: 23},
										{name: "拉萨", value: 24},
										{name: "云浮", value: 24},
										{name: "梅州", value: 25},
										{name: "文登", value: 25},
										{name: "上海", value: 25},
										{name: "攀枝花", value: 25},
										{name: "威海", value: 25},
										{name: "承德", value: 25},
										{name: "厦门", value: 26},
										{name: "汕尾", value: 26},
										{name: "潮州", value: 26},
										{name: "丹东", value: 27},
										{name: "太仓", value: 27},
										{name: "曲靖", value: 27},
										{name: "烟台", value: 28},
										{name: "福州", value: 29},
										{name: "瓦房店", value: 30},
										{name: "即墨", value: 30},
										{name: "抚顺", value: 31},
										{name: "玉溪", value: 31},
										{name: "张家口", value: 31},
										{name: "阳泉", value: 31},
										{name: "莱州", value: 32},
										{name: "湖州", value: 32},
										{name: "汕头", value: 32},
										{name: "昆山", value: 33},
										{name: "宁波", value: 33},
										{name: "湛江", value: 33},
										{name: "揭阳", value: 34},
										{name: "荣成", value: 34},
										{name: "连云港", value: 35},
										{name: "葫芦岛", value: 35},
										{name: "常熟", value: 36},
										{name: "东莞", value: 36},
										{name: "河源", value: 36},
										{name: "淮安", value: 36},
										{name: "泰州", value: 36},
										{name: "南宁", value: 37},
										{name: "营口", value: 37},
										{name: "惠州", value: 37},
										{name: "江阴", value: 37},
										{name: "蓬莱", value: 37},
										{name: "韶关", value: 38},
										{name: "嘉峪关", value: 38},
										{name: "广州", value: 38},
										{name: "延安", value: 38},
										{name: "太原", value: 39},
										{name: "清远", value: 39},
										{name: "中山", value: 39},
										{name: "昆明", value: 39},
										{name: "寿光", value: 40},
										{name: "盘锦", value: 40},
										{name: "长治", value: 41},
										{name: "深圳", value: 41},
										{name: "珠海", value: 42},
										{name: "宿迁", value: 43},
										{name: "咸阳", value: 43},
										{name: "铜川", value: 44},
										{name: "平度", value: 44},
										{name: "佛山", value: 44},
										{name: "海口", value: 44},
										{name: "江门", value: 45},
										{name: "章丘", value: 45},
										{name: "肇庆", value: 46},
										{name: "大连", value: 47},
										{name: "临汾", value: 47},
										{name: "吴江", value: 47},
										{name: "石嘴山", value: 49},
										{name: "沈阳", value: 50},
										{name: "苏州", value: 50},
										{name: "茂名", value: 50},
										{name: "嘉兴", value: 51},
										{name: "长春", value: 51},
										{name: "胶州", value: 52},
										{name: "银川", value: 52},
										{name: "张家港", value: 52},
										{name: "三门峡", value: 53},
										{name: "锦州", value: 54},
										{name: "南昌", value: 54},
										{name: "柳州", value: 54},
										{name: "三亚", value: 54},
										{name: "自贡", value: 56},
										{name: "吉林", value: 56},
										{name: "阳江", value: 57},
										{name: "泸州", value: 57},
										{name: "西宁", value: 57},
										{name: "宜宾", value: 58},
										{name: "呼和浩特", value: 58},
										{name: "成都", value: 58},
										{name: "大同", value: 58},
										{name: "镇江", value: 59},
										{name: "桂林", value: 59},
										{name: "张家界", value: 59},
										{name: "宜兴", value: 59},
										{name: "北海", value: 60},
										{name: "西安", value: 61},
										{name: "金坛", value: 62},
										{name: "东营", value: 62},
										{name: "牡丹江", value: 63},
										{name: "遵义", value: 63},
										{name: "绍兴", value: 63},
										{name: "扬州", value: 64},
										{name: "常州", value: 64},
										{name: "潍坊", value: 65},
										{name: "重庆", value: 66},
										{name: "台州", value: 67},
										{name: "南京", value: 67},
										{name: "滨州", value: 70},
										{name: "贵阳", value: 71},
										{name: "无锡", value: 71},
										{name: "本溪", value: 71},
										{name: "克拉玛依", value: 72},
										{name: "渭南", value: 72},
										{name: "马鞍山", value: 72},
										{name: "宝鸡", value: 72},
										{name: "焦作", value: 75},
										{name: "句容", value: 75},
										{name: "北京", value: 79},
										{name: "徐州", value: 79},
										{name: "衡水", value: 80},
										{name: "包头", value: 80},
										{name: "绵阳", value: 80},
										{name: "乌鲁木齐", value: 84},
										{name: "枣庄", value: 84},
										{name: "杭州", value: 84},
										{name: "淄博", value: 85},
										{name: "鞍山", value: 86},
										{name: "溧阳", value: 86},
										{name: "库尔勒", value: 86},
										{name: "安阳", value: 90},
										{name: "开封", value: 90},
										{name: "济南", value: 92},
										{name: "德阳", value: 93},
										{name: "温州", value: 95},
										{name: "九江", value: 96},
										{name: "邯郸", value: 98},
										{name: "临安", value: 99},
										{name: "兰州", value: 99},
										{name: "沧州", value: 100},
										{name: "临沂", value: 103},
										{name: "南充", value: 104},
										{name: "天津", value: 105},
										{name: "富阳", value: 106},
										{name: "泰安", value: 112},
										{name: "诸暨", value: 112},
										{name: "郑州", value: 113},
										{name: "哈尔滨", value: 114},
										{name: "聊城", value: 116},
										{name: "芜湖", value: 117},
										{name: "唐山", value: 119},
										{name: "平顶山", value: 119},
										{name: "邢台", value: 119},
										{name: "德州", value: 120},
										{name: "济宁", value: 120},
										{name: "荆州", value: 127},
										{name: "宜昌", value: 130},
										{name: "义乌", value: 132},
										{name: "丽水", value: 133},
										{name: "洛阳", value: 134},
										{name: "秦皇岛", value: 136},
										{name: "株洲", value: 143},
										{name: "石家庄", value: 147},
										{name: "莱芜", value: 148},
										{name: "常德", value: 152},
										{name: "保定", value: 153},
										{name: "湘潭", value: 154},
										{name: "金华", value: 157},
										{name: "岳阳", value: 169},
										{name: "长沙", value: 175},
										{name: "衢州", value: 177},
										{name: "廊坊", value: 193},
										{name: "菏泽", value: 194},
										{name: "合肥", value: 229},
										{name: "武汉", value: 273},
										{name: "大庆", value: 279}
									]),
									symbolSize: 12,
									label: {
										normal: {
											show: false
										},
										emphasis: {
											show: false
										}
									},
									itemStyle: {
										emphasis: {
											borderColor: '#fff',
											borderWidth: 1
										}
									}
								}
							]
						};
						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-dot7": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						myChart.showLoading();

						$.get('data/asset/data/masterPainterColorChoice.json', function (json) {
							myChart.hideLoading();

							var data = json[0].x.map(function (x, idx) {
								return [+x, +json[0].y[idx]];
							});

							myChart.setOption(option = {
								title: {
									text: 'Master Painter Color Choices Throughout History',
									subtext: 'Data From Plot.ly',
									left: 'right'
								},
								tooltip: {
									trigger: 'axis',
									axisPointer: {
										type: 'cross'
									},
									zlevel: 1
								},
								xAxis: {
									type: 'value',
									splitLine: {
										show: false
									},
									scale: true,
									splitNumber: 5,
									max: 'dataMax',
									axisLabel: {
										formatter: function (val) {
											return val + 's';
										}
									}
								},
								yAxis: {
									type: 'value',
									min: 0,
									max: 360,
									interval: 60,
									name: 'Hue',
									splitLine: {
										show: false
									}
								},
								series: [{
									name: 'scatter',
									type: 'scatter',
									symbolSize: function (val, param) {
										return json[0].marker.size[param.dataIndex] / json[0].marker.sizeref;
									},
									itemStyle: {
										normal: {
											color: function (param) {
												return json[0].marker.color[param.dataIndex];
											}
										}
									},
									data: data
								}]
							});
						});
					}
				});
			},
			"click; .echarts-dot8": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {

						var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
							'7a', '8a', '9a','10a','11a',
							'12p', '1p', '2p', '3p', '4p', '5p',
							'6p', '7p', '8p', '9p', '10p', '11p'];
						var days = ['Saturday', 'Friday', 'Thursday',
							'Wednesday', 'Tuesday', 'Monday', 'Sunday'];

						var data = [[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]];

						var option = {
							title: {
								text: 'Punch Card of Github',
								link: 'https://github.com/pissang/echarts-next/graphs/punch-card'
							},
							legend: {
								data: ['Punch Card'],
								left: 'right'
							},
							polar: {},
							tooltip: {
								formatter: function (params) {
									return params.value[2] + ' commits in ' + hours[params.value[0]] + ' of ' + days[params.value[1]];
								}
							},
							angleAxis: {
								type: 'category',
								data: hours,
								boundaryGap: false,
								splitLine: {
									show: true,
									lineStyle: {
										color: '#ddd',
										type: 'dashed'
									}
								},
								axisLine: {
									show: false
								}
							},
							radiusAxis: {
								type: 'category',
								data: days,
								axisLine: {
									show: false
								},
								axisLabel: {
									rotate: 45
								}
							},
							series: [{
								name: 'Punch Card',
								type: 'scatter',
								coordinateSystem: 'polar',
								symbolSize: function (val) {
									return val[2] * 2;
								},
								data: data
							}]
						};

						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-dot9": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {

						var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
							'7a', '8a', '9a','10a','11a',
							'12p', '1p', '2p', '3p', '4p', '5p',
							'6p', '7p', '8p', '9p', '10p', '11p'];
						var days = ['Saturday', 'Friday', 'Thursday',
							'Wednesday', 'Tuesday', 'Monday', 'Sunday'];

						var data = [[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]];
						data = data.map(function (item) {
							return [item[1], item[0], item[2]];
						});

						var option = {
							title: {
								text: 'Punch Card of Github',
								link: 'https://github.com/pissang/echarts-next/graphs/punch-card'
							},
							legend: {
								data: ['Punch Card'],
								left: 'right'
							},
							tooltip: {
								position: 'top',
								formatter: function (params) {
									return params.value[2] + ' commits in ' + hours[params.value[0]] + ' of ' + days[params.value[1]];
								}
							},
							grid: {
								left: 2,
								bottom: 10,
								right: 10,
								containLabel: true
							},
							xAxis: {
								type: 'category',
								data: hours,
								boundaryGap: false,
								splitLine: {
									show: true,
									lineStyle: {
										color: '#ddd',
										type: 'dashed'
									}
								},
								axisLine: {
									show: false
								}
							},
							yAxis: {
								type: 'category',
								data: days,
								axisLine: {
									show: false
								}
							},
							series: [{
								name: 'Punch Card',
								type: 'scatter',
								symbolSize: function (val) {
									return val[2] * 2;
								},
								data: data
							}]
						};
						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-dot10": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						myChart.showLoading();

						$.get('data/asset/data/weibo.json', function (weiboData) {
							myChart.hideLoading();

							weiboData = weiboData.map(function (serieData, idx) {
								var px = serieData[0] / 1000;
								var py = serieData[1] / 1000;
								var res = [[px, py]];

								for (var i = 2; i < serieData.length; i += 2) {
									var dx = serieData[i] / 1000;
									var dy = serieData[i + 1] / 1000;
									var x = px + dx;
									var y = py + dy;
									res.push([x, y, 1]);

									px = x;
									py = y;
								}
								return res;
							});
							myChart.setOption(option = {
								backgroundColor: '#404a59',
								title : {
									text: '微博签到数据点亮中国',
									subtext: 'From ThinkGIS',
									sublink: 'http://www.thinkgis.cn/public/sina',
									left: 'center',
									top: 'top',
									textStyle: {
										color: '#fff'
									}
								},
								legend: {
									left: 'left',
									data: ['强', '中', '弱'],
									textStyle: {
										color: '#ccc'
									}
								},
								geo: {
									name: '强',
									type: 'scatter',
									map: 'china',
									label: {
										emphasis: {
											show: false
										}
									},
									itemStyle: {
										normal: {
											areaColor: '#323c48',
											borderColor: '#111'
										},
										emphasis: {
											areaColor: '#2a333d'
										}
									}
								},
								series: [{
									name: '弱',
									type: 'scatter',
									coordinateSystem: 'geo',
									symbolSize: 1,
									large: true,
									itemStyle: {
										normal: {
											shadowBlur: 2,
											shadowColor: 'rgba(37, 140, 249, 0.8)',
											color: 'rgba(37, 140, 249, 0.8)'
										}
									},
									data: weiboData[0]
								}, {
									name: '中',
									type: 'scatter',
									coordinateSystem: 'geo',
									symbolSize: 1,
									large: true,
									itemStyle: {
										normal: {
											shadowBlur: 2,
											shadowColor: 'rgba(14, 241, 242, 0.8)',
											color: 'rgba(14, 241, 242, 0.8)'
										}
									},
									data: weiboData[1]
								}, {
									name: '强',
									type: 'scatter',
									coordinateSystem: 'geo',
									symbolSize: 1,
									large: true,
									itemStyle: {
										normal: {
											shadowBlur: 2,
											shadowColor: 'rgba(255, 255, 255, 0.8)',
											color: 'rgba(255, 255, 255, 0.8)'
										}
									},
									data: weiboData[2]
								}]
							});
						});
					}
				});
			},
			"click; .echarts-dot11": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var option = {
							title : {
								text: '男性女性身高体重分布',
								subtext: '抽样调查来自: Heinz  2003'
							},
							grid: {
								left: '3%',
								right: '4%',
								bottom: '3%',
								containLabel: true
							},
							tooltip : {
								trigger: 'axis',
								showDelay : 0,
								formatter : function (params) {
									if (params.value.length > 1) {
										return params.seriesName + ' :<br/>'
											+ params.value[0] + 'cm '
											+ params.value[1] + 'kg ';
									}
									else {
										return params.seriesName + ' :<br/>'
											+ params.name + ' : '
											+ params.value + 'kg ';
									}
								},
								axisPointer:{
									show: true,
									type : 'cross',
									lineStyle: {
										type : 'dashed',
										width : 1
									}
								}
							},
							legend: {
								data: ['女性','男性'],
								left: 'right'
							},
							xAxis : [
								{
									type : 'value',
									scale:true,
									axisLabel : {
										formatter: '{value} cm'
									},
									splitLine: {
										lineStyle: {
											type: 'dashed'
										}
									}
								}
							],
							yAxis : [
								{
									type : 'value',
									scale:true,
									axisLabel : {
										formatter: '{value} kg'
									},
									splitLine: {
										lineStyle: {
											type: 'dashed'
										}
									}
								}
							],
							series : [
								{
									name:'女性',
									type:'scatter',
									data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
										[170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
										[172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
										[147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
										[159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8],
										[174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0],
										[154.4, 46.2], [162.0, 55.0], [176.5, 83.0], [160.0, 54.4], [152.0, 45.8],
										[162.1, 53.6], [170.0, 73.2], [160.2, 52.1], [161.3, 67.9], [166.4, 56.6],
										[168.9, 62.3], [163.8, 58.5], [167.6, 54.5], [160.0, 50.2], [161.3, 60.3],
										[167.6, 58.3], [165.1, 56.2], [160.0, 50.2], [170.0, 72.9], [157.5, 59.8],
										[167.6, 61.0], [160.7, 69.1], [163.2, 55.9], [152.4, 46.5], [157.5, 54.3],
										[168.3, 54.8], [180.3, 60.7], [165.5, 60.0], [165.0, 62.0], [164.5, 60.3],
										[156.0, 52.7], [160.0, 74.3], [163.0, 62.0], [165.7, 73.1], [161.0, 80.0],
										[162.0, 54.7], [166.0, 53.2], [174.0, 75.7], [172.7, 61.1], [167.6, 55.7],
										[151.1, 48.7], [164.5, 52.3], [163.5, 50.0], [152.0, 59.3], [169.0, 62.5],
										[164.0, 55.7], [161.2, 54.8], [155.0, 45.9], [170.0, 70.6], [176.2, 67.2],
										[170.0, 69.4], [162.5, 58.2], [170.3, 64.8], [164.1, 71.6], [169.5, 52.8],
										[163.2, 59.8], [154.5, 49.0], [159.8, 50.0], [173.2, 69.2], [170.0, 55.9],
										[161.4, 63.4], [169.0, 58.2], [166.2, 58.6], [159.4, 45.7], [162.5, 52.2],
										[159.0, 48.6], [162.8, 57.8], [159.0, 55.6], [179.8, 66.8], [162.9, 59.4],
										[161.0, 53.6], [151.1, 73.2], [168.2, 53.4], [168.9, 69.0], [173.2, 58.4],
										[171.8, 56.2], [178.0, 70.6], [164.3, 59.8], [163.0, 72.0], [168.5, 65.2],
										[166.8, 56.6], [172.7, 105.2], [163.5, 51.8], [169.4, 63.4], [167.8, 59.0],
										[159.5, 47.6], [167.6, 63.0], [161.2, 55.2], [160.0, 45.0], [163.2, 54.0],
										[162.2, 50.2], [161.3, 60.2], [149.5, 44.8], [157.5, 58.8], [163.2, 56.4],
										[172.7, 62.0], [155.0, 49.2], [156.5, 67.2], [164.0, 53.8], [160.9, 54.4],
										[162.8, 58.0], [167.0, 59.8], [160.0, 54.8], [160.0, 43.2], [168.9, 60.5],
										[158.2, 46.4], [156.0, 64.4], [160.0, 48.8], [167.1, 62.2], [158.0, 55.5],
										[167.6, 57.8], [156.0, 54.6], [162.1, 59.2], [173.4, 52.7], [159.8, 53.2],
										[170.5, 64.5], [159.2, 51.8], [157.5, 56.0], [161.3, 63.6], [162.6, 63.2],
										[160.0, 59.5], [168.9, 56.8], [165.1, 64.1], [162.6, 50.0], [165.1, 72.3],
										[166.4, 55.0], [160.0, 55.9], [152.4, 60.4], [170.2, 69.1], [162.6, 84.5],
										[170.2, 55.9], [158.8, 55.5], [172.7, 69.5], [167.6, 76.4], [162.6, 61.4],
										[167.6, 65.9], [156.2, 58.6], [175.2, 66.8], [172.1, 56.6], [162.6, 58.6],
										[160.0, 55.9], [165.1, 59.1], [182.9, 81.8], [166.4, 70.7], [165.1, 56.8],
										[177.8, 60.0], [165.1, 58.2], [175.3, 72.7], [154.9, 54.1], [158.8, 49.1],
										[172.7, 75.9], [168.9, 55.0], [161.3, 57.3], [167.6, 55.0], [165.1, 65.5],
										[175.3, 65.5], [157.5, 48.6], [163.8, 58.6], [167.6, 63.6], [165.1, 55.2],
										[165.1, 62.7], [168.9, 56.6], [162.6, 53.9], [164.5, 63.2], [176.5, 73.6],
										[168.9, 62.0], [175.3, 63.6], [159.4, 53.2], [160.0, 53.4], [170.2, 55.0],
										[162.6, 70.5], [167.6, 54.5], [162.6, 54.5], [160.7, 55.9], [160.0, 59.0],
										[157.5, 63.6], [162.6, 54.5], [152.4, 47.3], [170.2, 67.7], [165.1, 80.9],
										[172.7, 70.5], [165.1, 60.9], [170.2, 63.6], [170.2, 54.5], [170.2, 59.1],
										[161.3, 70.5], [167.6, 52.7], [167.6, 62.7], [165.1, 86.3], [162.6, 66.4],
										[152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7],
										[160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5],
										[167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8],
										[175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0],
										[174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9],
										[156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
										[169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
										[176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]
									],
									markPoint : {
										data : [
											{type : 'max', name: '最大值'},
											{type : 'min', name: '最小值'}
										]
									},
									markLine : {
										data : [
											{type : 'average', name: '平均值'}
										]
									}
								},
								{
									name:'男性',
									type:'scatter',
									data: [[174.0, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6], [187.2, 78.8],
										[181.5, 74.8], [184.0, 86.4], [184.5, 78.4], [175.0, 62.0], [184.0, 81.6],
										[180.0, 76.6], [177.8, 83.6], [192.0, 90.0], [176.0, 74.6], [174.0, 71.0],
										[184.0, 79.6], [192.7, 93.8], [171.5, 70.0], [173.0, 72.4], [176.0, 85.9],
										[176.0, 78.8], [180.5, 77.8], [172.7, 66.2], [176.0, 86.4], [173.5, 81.8],
										[178.0, 89.6], [180.3, 82.8], [180.3, 76.4], [164.5, 63.2], [173.0, 60.9],
										[183.5, 74.8], [175.5, 70.0], [188.0, 72.4], [189.2, 84.1], [172.8, 69.1],
										[170.0, 59.5], [182.0, 67.2], [170.0, 61.3], [177.8, 68.6], [184.2, 80.1],
										[186.7, 87.8], [171.4, 84.7], [172.7, 73.4], [175.3, 72.1], [180.3, 82.6],
										[182.9, 88.7], [188.0, 84.1], [177.2, 94.1], [172.1, 74.9], [167.0, 59.1],
										[169.5, 75.6], [174.0, 86.2], [172.7, 75.3], [182.2, 87.1], [164.1, 55.2],
										[163.0, 57.0], [171.5, 61.4], [184.2, 76.8], [174.0, 86.8], [174.0, 72.2],
										[177.0, 71.6], [186.0, 84.8], [167.0, 68.2], [171.8, 66.1], [182.0, 72.0],
										[167.0, 64.6], [177.8, 74.8], [164.5, 70.0], [192.0, 101.6], [175.5, 63.2],
										[171.2, 79.1], [181.6, 78.9], [167.4, 67.7], [181.1, 66.0], [177.0, 68.2],
										[174.5, 63.9], [177.5, 72.0], [170.5, 56.8], [182.4, 74.5], [197.1, 90.9],
										[180.1, 93.0], [175.5, 80.9], [180.6, 72.7], [184.4, 68.0], [175.5, 70.9],
										[180.6, 72.5], [177.0, 72.5], [177.1, 83.4], [181.6, 75.5], [176.5, 73.0],
										[175.0, 70.2], [174.0, 73.4], [165.1, 70.5], [177.0, 68.9], [192.0, 102.3],
										[176.5, 68.4], [169.4, 65.9], [182.1, 75.7], [179.8, 84.5], [175.3, 87.7],
										[184.9, 86.4], [177.3, 73.2], [167.4, 53.9], [178.1, 72.0], [168.9, 55.5],
										[157.2, 58.4], [180.3, 83.2], [170.2, 72.7], [177.8, 64.1], [172.7, 72.3],
										[165.1, 65.0], [186.7, 86.4], [165.1, 65.0], [174.0, 88.6], [175.3, 84.1],
										[185.4, 66.8], [177.8, 75.5], [180.3, 93.2], [180.3, 82.7], [177.8, 58.0],
										[177.8, 79.5], [177.8, 78.6], [177.8, 71.8], [177.8, 116.4], [163.8, 72.2],
										[188.0, 83.6], [198.1, 85.5], [175.3, 90.9], [166.4, 85.9], [190.5, 89.1],
										[166.4, 75.0], [177.8, 77.7], [179.7, 86.4], [172.7, 90.9], [190.5, 73.6],
										[185.4, 76.4], [168.9, 69.1], [167.6, 84.5], [175.3, 64.5], [170.2, 69.1],
										[190.5, 108.6], [177.8, 86.4], [190.5, 80.9], [177.8, 87.7], [184.2, 94.5],
										[176.5, 80.2], [177.8, 72.0], [180.3, 71.4], [171.4, 72.7], [172.7, 84.1],
										[172.7, 76.8], [177.8, 63.6], [177.8, 80.9], [182.9, 80.9], [170.2, 85.5],
										[167.6, 68.6], [175.3, 67.7], [165.1, 66.4], [185.4, 102.3], [181.6, 70.5],
										[172.7, 95.9], [190.5, 84.1], [179.1, 87.3], [175.3, 71.8], [170.2, 65.9],
										[193.0, 95.9], [171.4, 91.4], [177.8, 81.8], [177.8, 96.8], [167.6, 69.1],
										[167.6, 82.7], [180.3, 75.5], [182.9, 79.5], [176.5, 73.6], [186.7, 91.8],
										[188.0, 84.1], [188.0, 85.9], [177.8, 81.8], [174.0, 82.5], [177.8, 80.5],
										[171.4, 70.0], [185.4, 81.8], [185.4, 84.1], [188.0, 90.5], [188.0, 91.4],
										[182.9, 89.1], [176.5, 85.0], [175.3, 69.1], [175.3, 73.6], [188.0, 80.5],
										[188.0, 82.7], [175.3, 86.4], [170.5, 67.7], [179.1, 92.7], [177.8, 93.6],
										[175.3, 70.9], [182.9, 75.0], [170.8, 93.2], [188.0, 93.2], [180.3, 77.7],
										[177.8, 61.4], [185.4, 94.1], [168.9, 75.0], [185.4, 83.6], [180.3, 85.5],
										[174.0, 73.9], [167.6, 66.8], [182.9, 87.3], [160.0, 72.3], [180.3, 88.6],
										[167.6, 75.5], [186.7, 101.4], [175.3, 91.1], [175.3, 67.3], [175.9, 77.7],
										[175.3, 81.8], [179.1, 75.5], [181.6, 84.5], [177.8, 76.6], [182.9, 85.0],
										[177.8, 102.5], [184.2, 77.3], [179.1, 71.8], [176.5, 87.9], [188.0, 94.3],
										[174.0, 70.9], [167.6, 64.5], [170.2, 77.3], [167.6, 72.3], [188.0, 87.3],
										[174.0, 80.0], [176.5, 82.3], [180.3, 73.6], [167.6, 74.1], [188.0, 85.9],
										[180.3, 73.2], [167.6, 76.3], [183.0, 65.9], [183.0, 90.9], [179.1, 89.1],
										[170.2, 62.3], [177.8, 82.7], [179.1, 79.1], [190.5, 98.2], [177.8, 84.1],
										[180.3, 83.2], [180.3, 83.2]
									],
									markPoint : {
										data : [
											{type : 'max', name: '最大值'},
											{type : 'min', name: '最小值'}
										]
									},
									markLine : {
										data : [
											{type : 'average', name: '平均值'}
										]
									}
								}
							]
						};

						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-dot12": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {

						var latlong = {};
						latlong.AD = {'latitude':42.5, 'longitude':1.5};
						latlong.AE = {'latitude':24, 'longitude':54};
						latlong.AF = {'latitude':33, 'longitude':65};
						latlong.AG = {'latitude':17.05, 'longitude':-61.8};
						latlong.AI = {'latitude':18.25, 'longitude':-63.1667};
						latlong.AL = {'latitude':41, 'longitude':20};
						latlong.AM = {'latitude':40, 'longitude':45};
						latlong.AN = {'latitude':12.25, 'longitude':-68.75};
						latlong.AO = {'latitude':-12.5, 'longitude':18.5};
						latlong.AP = {'latitude':35, 'longitude':105};
						latlong.AQ = {'latitude':-90, 'longitude':0};
						latlong.AR = {'latitude':-34, 'longitude':-64};
						latlong.AS = {'latitude':-14.3333, 'longitude':-170};
						latlong.AT = {'latitude':47.3333, 'longitude':13.3333};
						latlong.AU = {'latitude':-27, 'longitude':133};
						latlong.AW = {'latitude':12.5, 'longitude':-69.9667};
						latlong.AZ = {'latitude':40.5, 'longitude':47.5};
						latlong.BA = {'latitude':44, 'longitude':18};
						latlong.BB = {'latitude':13.1667, 'longitude':-59.5333};
						latlong.BD = {'latitude':24, 'longitude':90};
						latlong.BE = {'latitude':50.8333, 'longitude':4};
						latlong.BF = {'latitude':13, 'longitude':-2};
						latlong.BG = {'latitude':43, 'longitude':25};
						latlong.BH = {'latitude':26, 'longitude':50.55};
						latlong.BI = {'latitude':-3.5, 'longitude':30};
						latlong.BJ = {'latitude':9.5, 'longitude':2.25};
						latlong.BM = {'latitude':32.3333, 'longitude':-64.75};
						latlong.BN = {'latitude':4.5, 'longitude':114.6667};
						latlong.BO = {'latitude':-17, 'longitude':-65};
						latlong.BR = {'latitude':-10, 'longitude':-55};
						latlong.BS = {'latitude':24.25, 'longitude':-76};
						latlong.BT = {'latitude':27.5, 'longitude':90.5};
						latlong.BV = {'latitude':-54.4333, 'longitude':3.4};
						latlong.BW = {'latitude':-22, 'longitude':24};
						latlong.BY = {'latitude':53, 'longitude':28};
						latlong.BZ = {'latitude':17.25, 'longitude':-88.75};
						latlong.CA = {'latitude':54, 'longitude':-100};
						latlong.CC = {'latitude':-12.5, 'longitude':96.8333};
						latlong.CD = {'latitude':0, 'longitude':25};
						latlong.CF = {'latitude':7, 'longitude':21};
						latlong.CG = {'latitude':-1, 'longitude':15};
						latlong.CH = {'latitude':47, 'longitude':8};
						latlong.CI = {'latitude':8, 'longitude':-5};
						latlong.CK = {'latitude':-21.2333, 'longitude':-159.7667};
						latlong.CL = {'latitude':-30, 'longitude':-71};
						latlong.CM = {'latitude':6, 'longitude':12};
						latlong.CN = {'latitude':35, 'longitude':105};
						latlong.CO = {'latitude':4, 'longitude':-72};
						latlong.CR = {'latitude':10, 'longitude':-84};
						latlong.CU = {'latitude':21.5, 'longitude':-80};
						latlong.CV = {'latitude':16, 'longitude':-24};
						latlong.CX = {'latitude':-10.5, 'longitude':105.6667};
						latlong.CY = {'latitude':35, 'longitude':33};
						latlong.CZ = {'latitude':49.75, 'longitude':15.5};
						latlong.DE = {'latitude':51, 'longitude':9};
						latlong.DJ = {'latitude':11.5, 'longitude':43};
						latlong.DK = {'latitude':56, 'longitude':10};
						latlong.DM = {'latitude':15.4167, 'longitude':-61.3333};
						latlong.DO = {'latitude':19, 'longitude':-70.6667};
						latlong.DZ = {'latitude':28, 'longitude':3};
						latlong.EC = {'latitude':-2, 'longitude':-77.5};
						latlong.EE = {'latitude':59, 'longitude':26};
						latlong.EG = {'latitude':27, 'longitude':30};
						latlong.EH = {'latitude':24.5, 'longitude':-13};
						latlong.ER = {'latitude':15, 'longitude':39};
						latlong.ES = {'latitude':40, 'longitude':-4};
						latlong.ET = {'latitude':8, 'longitude':38};
						latlong.EU = {'latitude':47, 'longitude':8};
						latlong.FI = {'latitude':62, 'longitude':26};
						latlong.FJ = {'latitude':-18, 'longitude':175};
						latlong.FK = {'latitude':-51.75, 'longitude':-59};
						latlong.FM = {'latitude':6.9167, 'longitude':158.25};
						latlong.FO = {'latitude':62, 'longitude':-7};
						latlong.FR = {'latitude':46, 'longitude':2};
						latlong.GA = {'latitude':-1, 'longitude':11.75};
						latlong.GB = {'latitude':54, 'longitude':-2};
						latlong.GD = {'latitude':12.1167, 'longitude':-61.6667};
						latlong.GE = {'latitude':42, 'longitude':43.5};
						latlong.GF = {'latitude':4, 'longitude':-53};
						latlong.GH = {'latitude':8, 'longitude':-2};
						latlong.GI = {'latitude':36.1833, 'longitude':-5.3667};
						latlong.GL = {'latitude':72, 'longitude':-40};
						latlong.GM = {'latitude':13.4667, 'longitude':-16.5667};
						latlong.GN = {'latitude':11, 'longitude':-10};
						latlong.GP = {'latitude':16.25, 'longitude':-61.5833};
						latlong.GQ = {'latitude':2, 'longitude':10};
						latlong.GR = {'latitude':39, 'longitude':22};
						latlong.GS = {'latitude':-54.5, 'longitude':-37};
						latlong.GT = {'latitude':15.5, 'longitude':-90.25};
						latlong.GU = {'latitude':13.4667, 'longitude':144.7833};
						latlong.GW = {'latitude':12, 'longitude':-15};
						latlong.GY = {'latitude':5, 'longitude':-59};
						latlong.HK = {'latitude':22.25, 'longitude':114.1667};
						latlong.HM = {'latitude':-53.1, 'longitude':72.5167};
						latlong.HN = {'latitude':15, 'longitude':-86.5};
						latlong.HR = {'latitude':45.1667, 'longitude':15.5};
						latlong.HT = {'latitude':19, 'longitude':-72.4167};
						latlong.HU = {'latitude':47, 'longitude':20};
						latlong.ID = {'latitude':-5, 'longitude':120};
						latlong.IE = {'latitude':53, 'longitude':-8};
						latlong.IL = {'latitude':31.5, 'longitude':34.75};
						latlong.IN = {'latitude':20, 'longitude':77};
						latlong.IO = {'latitude':-6, 'longitude':71.5};
						latlong.IQ = {'latitude':33, 'longitude':44};
						latlong.IR = {'latitude':32, 'longitude':53};
						latlong.IS = {'latitude':65, 'longitude':-18};
						latlong.IT = {'latitude':42.8333, 'longitude':12.8333};
						latlong.JM = {'latitude':18.25, 'longitude':-77.5};
						latlong.JO = {'latitude':31, 'longitude':36};
						latlong.JP = {'latitude':36, 'longitude':138};
						latlong.KE = {'latitude':1, 'longitude':38};
						latlong.KG = {'latitude':41, 'longitude':75};
						latlong.KH = {'latitude':13, 'longitude':105};
						latlong.KI = {'latitude':1.4167, 'longitude':173};
						latlong.KM = {'latitude':-12.1667, 'longitude':44.25};
						latlong.KN = {'latitude':17.3333, 'longitude':-62.75};
						latlong.KP = {'latitude':40, 'longitude':127};
						latlong.KR = {'latitude':37, 'longitude':127.5};
						latlong.KW = {'latitude':29.3375, 'longitude':47.6581};
						latlong.KY = {'latitude':19.5, 'longitude':-80.5};
						latlong.KZ = {'latitude':48, 'longitude':68};
						latlong.LA = {'latitude':18, 'longitude':105};
						latlong.LB = {'latitude':33.8333, 'longitude':35.8333};
						latlong.LC = {'latitude':13.8833, 'longitude':-61.1333};
						latlong.LI = {'latitude':47.1667, 'longitude':9.5333};
						latlong.LK = {'latitude':7, 'longitude':81};
						latlong.LR = {'latitude':6.5, 'longitude':-9.5};
						latlong.LS = {'latitude':-29.5, 'longitude':28.5};
						latlong.LT = {'latitude':55, 'longitude':24};
						latlong.LU = {'latitude':49.75, 'longitude':6};
						latlong.LV = {'latitude':57, 'longitude':25};
						latlong.LY = {'latitude':25, 'longitude':17};
						latlong.MA = {'latitude':32, 'longitude':-5};
						latlong.MC = {'latitude':43.7333, 'longitude':7.4};
						latlong.MD = {'latitude':47, 'longitude':29};
						latlong.ME = {'latitude':42.5, 'longitude':19.4};
						latlong.MG = {'latitude':-20, 'longitude':47};
						latlong.MH = {'latitude':9, 'longitude':168};
						latlong.MK = {'latitude':41.8333, 'longitude':22};
						latlong.ML = {'latitude':17, 'longitude':-4};
						latlong.MM = {'latitude':22, 'longitude':98};
						latlong.MN = {'latitude':46, 'longitude':105};
						latlong.MO = {'latitude':22.1667, 'longitude':113.55};
						latlong.MP = {'latitude':15.2, 'longitude':145.75};
						latlong.MQ = {'latitude':14.6667, 'longitude':-61};
						latlong.MR = {'latitude':20, 'longitude':-12};
						latlong.MS = {'latitude':16.75, 'longitude':-62.2};
						latlong.MT = {'latitude':35.8333, 'longitude':14.5833};
						latlong.MU = {'latitude':-20.2833, 'longitude':57.55};
						latlong.MV = {'latitude':3.25, 'longitude':73};
						latlong.MW = {'latitude':-13.5, 'longitude':34};
						latlong.MX = {'latitude':23, 'longitude':-102};
						latlong.MY = {'latitude':2.5, 'longitude':112.5};
						latlong.MZ = {'latitude':-18.25, 'longitude':35};
						latlong.NA = {'latitude':-22, 'longitude':17};
						latlong.NC = {'latitude':-21.5, 'longitude':165.5};
						latlong.NE = {'latitude':16, 'longitude':8};
						latlong.NF = {'latitude':-29.0333, 'longitude':167.95};
						latlong.NG = {'latitude':10, 'longitude':8};
						latlong.NI = {'latitude':13, 'longitude':-85};
						latlong.NL = {'latitude':52.5, 'longitude':5.75};
						latlong.NO = {'latitude':62, 'longitude':10};
						latlong.NP = {'latitude':28, 'longitude':84};
						latlong.NR = {'latitude':-0.5333, 'longitude':166.9167};
						latlong.NU = {'latitude':-19.0333, 'longitude':-169.8667};
						latlong.NZ = {'latitude':-41, 'longitude':174};
						latlong.OM = {'latitude':21, 'longitude':57};
						latlong.PA = {'latitude':9, 'longitude':-80};
						latlong.PE = {'latitude':-10, 'longitude':-76};
						latlong.PF = {'latitude':-15, 'longitude':-140};
						latlong.PG = {'latitude':-6, 'longitude':147};
						latlong.PH = {'latitude':13, 'longitude':122};
						latlong.PK = {'latitude':30, 'longitude':70};
						latlong.PL = {'latitude':52, 'longitude':20};
						latlong.PM = {'latitude':46.8333, 'longitude':-56.3333};
						latlong.PR = {'latitude':18.25, 'longitude':-66.5};
						latlong.PS = {'latitude':32, 'longitude':35.25};
						latlong.PT = {'latitude':39.5, 'longitude':-8};
						latlong.PW = {'latitude':7.5, 'longitude':134.5};
						latlong.PY = {'latitude':-23, 'longitude':-58};
						latlong.QA = {'latitude':25.5, 'longitude':51.25};
						latlong.RE = {'latitude':-21.1, 'longitude':55.6};
						latlong.RO = {'latitude':46, 'longitude':25};
						latlong.RS = {'latitude':44, 'longitude':21};
						latlong.RU = {'latitude':60, 'longitude':100};
						latlong.RW = {'latitude':-2, 'longitude':30};
						latlong.SA = {'latitude':25, 'longitude':45};
						latlong.SB = {'latitude':-8, 'longitude':159};
						latlong.SC = {'latitude':-4.5833, 'longitude':55.6667};
						latlong.SD = {'latitude':15, 'longitude':30};
						latlong.SE = {'latitude':62, 'longitude':15};
						latlong.SG = {'latitude':1.3667, 'longitude':103.8};
						latlong.SH = {'latitude':-15.9333, 'longitude':-5.7};
						latlong.SI = {'latitude':46, 'longitude':15};
						latlong.SJ = {'latitude':78, 'longitude':20};
						latlong.SK = {'latitude':48.6667, 'longitude':19.5};
						latlong.SL = {'latitude':8.5, 'longitude':-11.5};
						latlong.SM = {'latitude':43.7667, 'longitude':12.4167};
						latlong.SN = {'latitude':14, 'longitude':-14};
						latlong.SO = {'latitude':10, 'longitude':49};
						latlong.SR = {'latitude':4, 'longitude':-56};
						latlong.ST = {'latitude':1, 'longitude':7};
						latlong.SV = {'latitude':13.8333, 'longitude':-88.9167};
						latlong.SY = {'latitude':35, 'longitude':38};
						latlong.SZ = {'latitude':-26.5, 'longitude':31.5};
						latlong.TC = {'latitude':21.75, 'longitude':-71.5833};
						latlong.TD = {'latitude':15, 'longitude':19};
						latlong.TF = {'latitude':-43, 'longitude':67};
						latlong.TG = {'latitude':8, 'longitude':1.1667};
						latlong.TH = {'latitude':15, 'longitude':100};
						latlong.TJ = {'latitude':39, 'longitude':71};
						latlong.TK = {'latitude':-9, 'longitude':-172};
						latlong.TM = {'latitude':40, 'longitude':60};
						latlong.TN = {'latitude':34, 'longitude':9};
						latlong.TO = {'latitude':-20, 'longitude':-175};
						latlong.TR = {'latitude':39, 'longitude':35};
						latlong.TT = {'latitude':11, 'longitude':-61};
						latlong.TV = {'latitude':-8, 'longitude':178};
						latlong.TW = {'latitude':23.5, 'longitude':121};
						latlong.TZ = {'latitude':-6, 'longitude':35};
						latlong.UA = {'latitude':49, 'longitude':32};
						latlong.UG = {'latitude':1, 'longitude':32};
						latlong.UM = {'latitude':19.2833, 'longitude':166.6};
						latlong.US = {'latitude':38, 'longitude':-97};
						latlong.UY = {'latitude':-33, 'longitude':-56};
						latlong.UZ = {'latitude':41, 'longitude':64};
						latlong.VA = {'latitude':41.9, 'longitude':12.45};
						latlong.VC = {'latitude':13.25, 'longitude':-61.2};
						latlong.VE = {'latitude':8, 'longitude':-66};
						latlong.VG = {'latitude':18.5, 'longitude':-64.5};
						latlong.VI = {'latitude':18.3333, 'longitude':-64.8333};
						latlong.VN = {'latitude':16, 'longitude':106};
						latlong.VU = {'latitude':-16, 'longitude':167};
						latlong.WF = {'latitude':-13.3, 'longitude':-176.2};
						latlong.WS = {'latitude':-13.5833, 'longitude':-172.3333};
						latlong.YE = {'latitude':15, 'longitude':48};
						latlong.YT = {'latitude':-12.8333, 'longitude':45.1667};
						latlong.ZA = {'latitude':-29, 'longitude':24};
						latlong.ZM = {'latitude':-15, 'longitude':30};
						latlong.ZW = {'latitude':-20, 'longitude':30};

						var mapData = [
							{'code':'AF' , 'name':'Afghanistan', 'value':32358260, 'color':'#eea638'},
							{'code':'AL' , 'name':'Albania', 'value':3215988, 'color':'#d8854f'},
							{'code':'DZ' , 'name':'Algeria', 'value':35980193, 'color':'#de4c4f'},
							{'code':'AO' , 'name':'Angola', 'value':19618432, 'color':'#de4c4f'},
							{'code':'AR' , 'name':'Argentina', 'value':40764561, 'color':'#86a965'},
							{'code':'AM' , 'name':'Armenia', 'value':3100236, 'color':'#d8854f'},
							{'code':'AU' , 'name':'Australia', 'value':22605732, 'color':'#8aabb0'},
							{'code':'AT' , 'name':'Austria', 'value':8413429, 'color':'#d8854f'},
							{'code':'AZ' , 'name':'Azerbaijan', 'value':9306023, 'color':'#d8854f'},
							{'code':'BH' , 'name':'Bahrain', 'value':1323535, 'color':'#eea638'},
							{'code':'BD' , 'name':'Bangladesh', 'value':150493658, 'color':'#eea638'},
							{'code':'BY' , 'name':'Belarus', 'value':9559441, 'color':'#d8854f'},
							{'code':'BE' , 'name':'Belgium', 'value':10754056, 'color':'#d8854f'},
							{'code':'BJ' , 'name':'Benin', 'value':9099922, 'color':'#de4c4f'},
							{'code':'BT' , 'name':'Bhutan', 'value':738267, 'color':'#eea638'},
							{'code':'BO' , 'name':'Bolivia', 'value':10088108, 'color':'#86a965'},
							{'code':'BA' , 'name':'Bosnia and Herzegovina', 'value':3752228, 'color':'#d8854f'},
							{'code':'BW' , 'name':'Botswana', 'value':2030738, 'color':'#de4c4f'},
							{'code':'BR' , 'name':'Brazil', 'value':196655014, 'color':'#86a965'},
							{'code':'BN' , 'name':'Brunei', 'value':405938, 'color':'#eea638'},
							{'code':'BG' , 'name':'Bulgaria', 'value':7446135, 'color':'#d8854f'},
							{'code':'BF' , 'name':'Burkina Faso', 'value':16967845, 'color':'#de4c4f'},
							{'code':'BI' , 'name':'Burundi', 'value':8575172, 'color':'#de4c4f'},
							{'code':'KH' , 'name':'Cambodia', 'value':14305183, 'color':'#eea638'},
							{'code':'CM' , 'name':'Cameroon', 'value':20030362, 'color':'#de4c4f'},
							{'code':'CA' , 'name':'Canada', 'value':34349561, 'color':'#a7a737'},
							{'code':'CV' , 'name':'Cape Verde', 'value':500585, 'color':'#de4c4f'},
							{'code':'CF' , 'name':'Central African Rep.', 'value':4486837, 'color':'#de4c4f'},
							{'code':'TD' , 'name':'Chad', 'value':11525496, 'color':'#de4c4f'},
							{'code':'CL' , 'name':'Chile', 'value':17269525, 'color':'#86a965'},
							{'code':'CN' , 'name':'China', 'value':1347565324, 'color':'#eea638'},
							{'code':'CO' , 'name':'Colombia', 'value':46927125, 'color':'#86a965'},
							{'code':'KM' , 'name':'Comoros', 'value':753943, 'color':'#de4c4f'},
							{'code':'CD' , 'name':'Congo, Dem. Rep.', 'value':67757577, 'color':'#de4c4f'},
							{'code':'CG' , 'name':'Congo, Rep.', 'value':4139748, 'color':'#de4c4f'},
							{'code':'CR' , 'name':'Costa Rica', 'value':4726575, 'color':'#a7a737'},
							{'code':'CI' , 'name':'Cote d\'Ivoire', 'value':20152894, 'color':'#de4c4f'},
							{'code':'HR' , 'name':'Croatia', 'value':4395560, 'color':'#d8854f'},
							{'code':'CU' , 'name':'Cuba', 'value':11253665, 'color':'#a7a737'},
							{'code':'CY' , 'name':'Cyprus', 'value':1116564, 'color':'#d8854f'},
							{'code':'CZ' , 'name':'Czech Rep.', 'value':10534293, 'color':'#d8854f'},
							{'code':'DK' , 'name':'Denmark', 'value':5572594, 'color':'#d8854f'},
							{'code':'DJ' , 'name':'Djibouti', 'value':905564, 'color':'#de4c4f'},
							{'code':'DO' , 'name':'Dominican Rep.', 'value':10056181, 'color':'#a7a737'},
							{'code':'EC' , 'name':'Ecuador', 'value':14666055, 'color':'#86a965'},
							{'code':'EG' , 'name':'Egypt', 'value':82536770, 'color':'#de4c4f'},
							{'code':'SV' , 'name':'El Salvador', 'value':6227491, 'color':'#a7a737'},
							{'code':'GQ' , 'name':'Equatorial Guinea', 'value':720213, 'color':'#de4c4f'},
							{'code':'ER' , 'name':'Eritrea', 'value':5415280, 'color':'#de4c4f'},
							{'code':'EE' , 'name':'Estonia', 'value':1340537, 'color':'#d8854f'},
							{'code':'ET' , 'name':'Ethiopia', 'value':84734262, 'color':'#de4c4f'},
							{'code':'FJ' , 'name':'Fiji', 'value':868406, 'color':'#8aabb0'},
							{'code':'FI' , 'name':'Finland', 'value':5384770, 'color':'#d8854f'},
							{'code':'FR' , 'name':'France', 'value':63125894, 'color':'#d8854f'},
							{'code':'GA' , 'name':'Gabon', 'value':1534262, 'color':'#de4c4f'},
							{'code':'GM' , 'name':'Gambia', 'value':1776103, 'color':'#de4c4f'},
							{'code':'GE' , 'name':'Georgia', 'value':4329026, 'color':'#d8854f'},
							{'code':'DE' , 'name':'Germany', 'value':82162512, 'color':'#d8854f'},
							{'code':'GH' , 'name':'Ghana', 'value':24965816, 'color':'#de4c4f'},
							{'code':'GR' , 'name':'Greece', 'value':11390031, 'color':'#d8854f'},
							{'code':'GT' , 'name':'Guatemala', 'value':14757316, 'color':'#a7a737'},
							{'code':'GN' , 'name':'Guinea', 'value':10221808, 'color':'#de4c4f'},
							{'code':'GW' , 'name':'Guinea-Bissau', 'value':1547061, 'color':'#de4c4f'},
							{'code':'GY' , 'name':'Guyana', 'value':756040, 'color':'#86a965'},
							{'code':'HT' , 'name':'Haiti', 'value':10123787, 'color':'#a7a737'},
							{'code':'HN' , 'name':'Honduras', 'value':7754687, 'color':'#a7a737'},
							{'code':'HK' , 'name':'Hong Kong, China', 'value':7122187, 'color':'#eea638'},
							{'code':'HU' , 'name':'Hungary', 'value':9966116, 'color':'#d8854f'},
							{'code':'IS' , 'name':'Iceland', 'value':324366, 'color':'#d8854f'},
							{'code':'IN' , 'name':'India', 'value':1241491960, 'color':'#eea638'},
							{'code':'ID' , 'name':'Indonesia', 'value':242325638, 'color':'#eea638'},
							{'code':'IR' , 'name':'Iran', 'value':74798599, 'color':'#eea638'},
							{'code':'IQ' , 'name':'Iraq', 'value':32664942, 'color':'#eea638'},
							{'code':'IE' , 'name':'Ireland', 'value':4525802, 'color':'#d8854f'},
							{'code':'IL' , 'name':'Israel', 'value':7562194, 'color':'#eea638'},
							{'code':'IT' , 'name':'Italy', 'value':60788694, 'color':'#d8854f'},
							{'code':'JM' , 'name':'Jamaica', 'value':2751273, 'color':'#a7a737'},
							{'code':'JP' , 'name':'Japan', 'value':126497241, 'color':'#eea638'},
							{'code':'JO' , 'name':'Jordan', 'value':6330169, 'color':'#eea638'},
							{'code':'KZ' , 'name':'Kazakhstan', 'value':16206750, 'color':'#eea638'},
							{'code':'KE' , 'name':'Kenya', 'value':41609728, 'color':'#de4c4f'},
							{'code':'KP' , 'name':'Korea, Dem. Rep.', 'value':24451285, 'color':'#eea638'},
							{'code':'KR' , 'name':'Korea, Rep.', 'value':48391343, 'color':'#eea638'},
							{'code':'KW' , 'name':'Kuwait', 'value':2818042, 'color':'#eea638'},
							{'code':'KG' , 'name':'Kyrgyzstan', 'value':5392580, 'color':'#eea638'},
							{'code':'LA' , 'name':'Laos', 'value':6288037, 'color':'#eea638'},
							{'code':'LV' , 'name':'Latvia', 'value':2243142, 'color':'#d8854f'},
							{'code':'LB' , 'name':'Lebanon', 'value':4259405, 'color':'#eea638'},
							{'code':'LS' , 'name':'Lesotho', 'value':2193843, 'color':'#de4c4f'},
							{'code':'LR' , 'name':'Liberia', 'value':4128572, 'color':'#de4c4f'},
							{'code':'LY' , 'name':'Libya', 'value':6422772, 'color':'#de4c4f'},
							{'code':'LT' , 'name':'Lithuania', 'value':3307481, 'color':'#d8854f'},
							{'code':'LU' , 'name':'Luxembourg', 'value':515941, 'color':'#d8854f'},
							{'code':'MK' , 'name':'Macedonia, FYR', 'value':2063893, 'color':'#d8854f'},
							{'code':'MG' , 'name':'Madagascar', 'value':21315135, 'color':'#de4c4f'},
							{'code':'MW' , 'name':'Malawi', 'value':15380888, 'color':'#de4c4f'},
							{'code':'MY' , 'name':'Malaysia', 'value':28859154, 'color':'#eea638'},
							{'code':'ML' , 'name':'Mali', 'value':15839538, 'color':'#de4c4f'},
							{'code':'MR' , 'name':'Mauritania', 'value':3541540, 'color':'#de4c4f'},
							{'code':'MU' , 'name':'Mauritius', 'value':1306593, 'color':'#de4c4f'},
							{'code':'MX' , 'name':'Mexico', 'value':114793341, 'color':'#a7a737'},
							{'code':'MD' , 'name':'Moldova', 'value':3544864, 'color':'#d8854f'},
							{'code':'MN' , 'name':'Mongolia', 'value':2800114, 'color':'#eea638'},
							{'code':'ME' , 'name':'Montenegro', 'value':632261, 'color':'#d8854f'},
							{'code':'MA' , 'name':'Morocco', 'value':32272974, 'color':'#de4c4f'},
							{'code':'MZ' , 'name':'Mozambique', 'value':23929708, 'color':'#de4c4f'},
							{'code':'MM' , 'name':'Myanmar', 'value':48336763, 'color':'#eea638'},
							{'code':'NA' , 'name':'Namibia', 'value':2324004, 'color':'#de4c4f'},
							{'code':'NP' , 'name':'Nepal', 'value':30485798, 'color':'#eea638'},
							{'code':'NL' , 'name':'Netherlands', 'value':16664746, 'color':'#d8854f'},
							{'code':'NZ' , 'name':'New Zealand', 'value':4414509, 'color':'#8aabb0'},
							{'code':'NI' , 'name':'Nicaragua', 'value':5869859, 'color':'#a7a737'},
							{'code':'NE' , 'name':'Niger', 'value':16068994, 'color':'#de4c4f'},
							{'code':'NG' , 'name':'Nigeria', 'value':162470737, 'color':'#de4c4f'},
							{'code':'NO' , 'name':'Norway', 'value':4924848, 'color':'#d8854f'},
							{'code':'OM' , 'name':'Oman', 'value':2846145, 'color':'#eea638'},
							{'code':'PK' , 'name':'Pakistan', 'value':176745364, 'color':'#eea638'},
							{'code':'PA' , 'name':'Panama', 'value':3571185, 'color':'#a7a737'},
							{'code':'PG' , 'name':'Papua New Guinea', 'value':7013829, 'color':'#8aabb0'},
							{'code':'PY' , 'name':'Paraguay', 'value':6568290, 'color':'#86a965'},
							{'code':'PE' , 'name':'Peru', 'value':29399817, 'color':'#86a965'},
							{'code':'PH' , 'name':'Philippines', 'value':94852030, 'color':'#eea638'},
							{'code':'PL' , 'name':'Poland', 'value':38298949, 'color':'#d8854f'},
							{'code':'PT' , 'name':'Portugal', 'value':10689663, 'color':'#d8854f'},
							{'code':'PR' , 'name':'Puerto Rico', 'value':3745526, 'color':'#a7a737'},
							{'code':'QA' , 'name':'Qatar', 'value':1870041, 'color':'#eea638'},
							{'code':'RO' , 'name':'Romania', 'value':21436495, 'color':'#d8854f'},
							{'code':'RU' , 'name':'Russia', 'value':142835555, 'color':'#d8854f'},
							{'code':'RW' , 'name':'Rwanda', 'value':10942950, 'color':'#de4c4f'},
							{'code':'SA' , 'name':'Saudi Arabia', 'value':28082541, 'color':'#eea638'},
							{'code':'SN' , 'name':'Senegal', 'value':12767556, 'color':'#de4c4f'},
							{'code':'RS' , 'name':'Serbia', 'value':9853969, 'color':'#d8854f'},
							{'code':'SL' , 'name':'Sierra Leone', 'value':5997486, 'color':'#de4c4f'},
							{'code':'SG' , 'name':'Singapore', 'value':5187933, 'color':'#eea638'},
							{'code':'SK' , 'name':'Slovak Republic', 'value':5471502, 'color':'#d8854f'},
							{'code':'SI' , 'name':'Slovenia', 'value':2035012, 'color':'#d8854f'},
							{'code':'SB' , 'name':'Solomon Islands', 'value':552267, 'color':'#8aabb0'},
							{'code':'SO' , 'name':'Somalia', 'value':9556873, 'color':'#de4c4f'},
							{'code':'ZA' , 'name':'South Africa', 'value':50459978, 'color':'#de4c4f'},
							{'code':'ES' , 'name':'Spain', 'value':46454895, 'color':'#d8854f'},
							{'code':'LK' , 'name':'Sri Lanka', 'value':21045394, 'color':'#eea638'},
							{'code':'SD' , 'name':'Sudan', 'value':34735288, 'color':'#de4c4f'},
							{'code':'SR' , 'name':'Suriname', 'value':529419, 'color':'#86a965'},
							{'code':'SZ' , 'name':'Swaziland', 'value':1203330, 'color':'#de4c4f'},
							{'code':'SE' , 'name':'Sweden', 'value':9440747, 'color':'#d8854f'},
							{'code':'CH' , 'name':'Switzerland', 'value':7701690, 'color':'#d8854f'},
							{'code':'SY' , 'name':'Syria', 'value':20766037, 'color':'#eea638'},
							{'code':'TW' , 'name':'Taiwan', 'value':23072000, 'color':'#eea638'},
							{'code':'TJ' , 'name':'Tajikistan', 'value':6976958, 'color':'#eea638'},
							{'code':'TZ' , 'name':'Tanzania', 'value':46218486, 'color':'#de4c4f'},
							{'code':'TH' , 'name':'Thailand', 'value':69518555, 'color':'#eea638'},
							{'code':'TG' , 'name':'Togo', 'value':6154813, 'color':'#de4c4f'},
							{'code':'TT' , 'name':'Trinidad and Tobago', 'value':1346350, 'color':'#a7a737'},
							{'code':'TN' , 'name':'Tunisia', 'value':10594057, 'color':'#de4c4f'},
							{'code':'TR' , 'name':'Turkey', 'value':73639596, 'color':'#d8854f'},
							{'code':'TM' , 'name':'Turkmenistan', 'value':5105301, 'color':'#eea638'},
							{'code':'UG' , 'name':'Uganda', 'value':34509205, 'color':'#de4c4f'},
							{'code':'UA' , 'name':'Ukraine', 'value':45190180, 'color':'#d8854f'},
							{'code':'AE' , 'name':'United Arab Emirates', 'value':7890924, 'color':'#eea638'},
							{'code':'GB' , 'name':'United Kingdom', 'value':62417431, 'color':'#d8854f'},
							{'code':'US' , 'name':'United States', 'value':313085380, 'color':'#a7a737'},
							{'code':'UY' , 'name':'Uruguay', 'value':3380008, 'color':'#86a965'},
							{'code':'UZ' , 'name':'Uzbekistan', 'value':27760267, 'color':'#eea638'},
							{'code':'VE' , 'name':'Venezuela', 'value':29436891, 'color':'#86a965'},
							{'code':'PS' , 'name':'West Bank and Gaza', 'value':4152369, 'color':'#eea638'},
							{'code':'VN' , 'name':'Vietnam', 'value':88791996, 'color':'#eea638'},
							{'code':'YE' , 'name':'Yemen, Rep.', 'value':24799880, 'color':'#eea638'},
							{'code':'ZM' , 'name':'Zambia', 'value':13474959, 'color':'#de4c4f'},
							{'code':'ZW' , 'name':'Zimbabwe', 'value':12754378, 'color':'#de4c4f'}];

						var max = -Infinity;
						var min = Infinity;
						mapData.forEach(function (itemOpt) {
							if (itemOpt.value > max) {
								max = itemOpt.value;
							}
							if (itemOpt.value < min) {
								min = itemOpt.value;
							}
						});

						var option = {
							backgroundColor: '#404a59',
							title : {
								text: 'World Population (2011)',
								subtext: 'From Gapminder',
								left: 'center',
								top: 'top',
								textStyle: {
									color: '#fff'
								}
							},
							tooltip : {
								trigger: 'item',
								formatter : function (params) {
									var value = (params.value + '').split('.');
									value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
										+ '.' + value[1];
									return params.seriesName + '<br/>' + params.name + ' : ' + value;
								}
							},
							visualMap: {
								show: false,
								min: 0,
								max: max,
								inRange: {
									symbolSize: [6, 60]
								}
							},
							geo: {
								name: 'World Population (2010)',
								type: 'map',
								map: 'world',
								roam: true,
								label: {
									emphasis: {
										show: false
									}
								},
								itemStyle: {
									normal: {
										areaColor: '#323c48',
										borderColor: '#111'
									},
									emphasis: {
										areaColor: '#2a333d'
									}
								}
							},
							series : [
								{
									type: 'scatter',
									coordinateSystem: 'geo',
									data: mapData.map(function (itemOpt) {
										return {
											name: itemOpt.name,
											value: [
												latlong[itemOpt.code].longitude,
												latlong[itemOpt.code].latitude,
												itemOpt.value
											],
											label: {
												emphasis: {
													position: 'right',
													show: true
												}
											},
											itemStyle: {
												normal: {
													color: itemOpt.color
												}
											}
										};
									})
								}
							]
						};

						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-line1": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var option = {
							title : {
								text: '雨量流量关系图',
								subtext: '数据来自西安兰特水电测控技术有限公司',
								x: 'center',
								align: 'right'
							},
							grid: {
								bottom: 80
							},
							tooltip : {
								trigger: 'axis',
								formatter: function(params) {
									return params[0].name + '<br/>'
										+ params[0].seriesName + ' : ' + params[0].value + ' (m^3/s)<br/>'
										+ params[1].seriesName + ' : ' + -params[1].value + ' (mm)';
								},
								axisPointer: {
									animation: false
								}
							},
							legend: {
								data:['流量','降雨量'],
								x: 'left'
							},
							dataZoom: [
								{
									show: true,
									realtime: true,
									start: 60,
									end: 80
								},
								{
									type: 'inside',
									realtime: true,
									start: 60,
									end: 80
								}
							],
							xAxis : [
								{
									type : 'category',
									boundaryGap : false,
									axisLine: {onZero: false},
									data : [
										'2009/6/12 2:00', '2009/6/12 3:00', '2009/6/12 4:00', '2009/6/12 5:00', '2009/6/12 6:00', '2009/6/12 7:00', '2009/6/12 8:00', '2009/6/12 9:00', '2009/6/12 10:00', '2009/6/12 11:00', '2009/6/12 12:00', '2009/6/12 13:00', '2009/6/12 14:00', '2009/6/12 15:00', '2009/6/12 16:00', '2009/6/12 17:00', '2009/6/12 18:00', '2009/6/12 19:00', '2009/6/12 20:00', '2009/6/12 21:00', '2009/6/12 22:00', '2009/6/12 23:00',
										'2009/6/13 0:00', '2009/6/13 1:00', '2009/6/13 2:00', '2009/6/13 3:00', '2009/6/13 4:00', '2009/6/13 5:00', '2009/6/13 6:00', '2009/6/13 7:00', '2009/6/13 8:00', '2009/6/13 9:00', '2009/6/13 10:00', '2009/6/13 11:00', '2009/6/13 12:00', '2009/6/13 13:00', '2009/6/13 14:00', '2009/6/13 15:00', '2009/6/13 16:00', '2009/6/13 17:00', '2009/6/13 18:00', '2009/6/13 19:00', '2009/6/13 20:00', '2009/6/13 21:00', '2009/6/13 22:00', '2009/6/13 23:00',
										'2009/6/14 0:00', '2009/6/14 1:00', '2009/6/14 2:00', '2009/6/14 3:00', '2009/6/14 4:00', '2009/6/14 5:00', '2009/6/14 6:00', '2009/6/14 7:00', '2009/6/14 8:00', '2009/6/14 9:00', '2009/6/14 10:00', '2009/6/14 11:00', '2009/6/14 12:00', '2009/6/14 13:00', '2009/6/14 14:00', '2009/6/14 15:00', '2009/6/14 16:00', '2009/6/14 17:00', '2009/6/14 18:00', '2009/6/14 19:00', '2009/6/14 20:00', '2009/6/14 21:00', '2009/6/14 22:00', '2009/6/14 23:00',
										'2009/6/15 0:00', '2009/6/15 1:00', '2009/6/15 2:00', '2009/6/15 3:00', '2009/6/15 4:00', '2009/6/15 5:00', '2009/6/15 6:00', '2009/6/15 7:00', '2009/6/15 8:00', '2009/6/15 9:00', '2009/6/15 10:00', '2009/6/15 11:00', '2009/6/15 12:00', '2009/6/15 13:00', '2009/6/15 14:00', '2009/6/15 15:00', '2009/6/15 16:00', '2009/6/15 17:00', '2009/6/15 18:00', '2009/6/15 19:00', '2009/6/15 20:00', '2009/6/15 21:00', '2009/6/15 22:00', '2009/6/15 23:00',
										'2009/6/15 0:00', '2009/6/16 1:00', '2009/6/16 2:00', '2009/6/16 3:00', '2009/6/16 4:00', '2009/6/16 5:00', '2009/6/16 6:00', '2009/6/16 7:00', '2009/6/16 8:00', '2009/6/16 9:00', '2009/6/16 10:00', '2009/6/16 11:00', '2009/6/16 12:00', '2009/6/16 13:00', '2009/6/16 14:00', '2009/6/16 15:00', '2009/6/16 16:00', '2009/6/16 17:00', '2009/6/16 18:00', '2009/6/16 19:00', '2009/6/16 20:00', '2009/6/16 21:00', '2009/6/16 22:00', '2009/6/16 23:00',
										'2009/6/15 0:00', '2009/6/17 1:00', '2009/6/17 2:00', '2009/6/17 3:00', '2009/6/17 4:00', '2009/6/17 5:00', '2009/6/17 6:00', '2009/6/17 7:00', '2009/6/17 8:00', '2009/6/17 9:00', '2009/6/17 10:00', '2009/6/17 11:00', '2009/6/17 12:00', '2009/6/17 13:00', '2009/6/17 14:00', '2009/6/17 15:00', '2009/6/17 16:00', '2009/6/17 17:00', '2009/6/17 18:00', '2009/6/17 19:00', '2009/6/17 20:00', '2009/6/17 21:00', '2009/6/17 22:00', '2009/6/17 23:00',
										'2009/6/18 0:00', '2009/6/18 1:00', '2009/6/18 2:00', '2009/6/18 3:00', '2009/6/18 4:00', '2009/6/18 5:00', '2009/6/18 6:00', '2009/6/18 7:00', '2009/6/18 8:00', '2009/6/18 9:00', '2009/6/18 10:00', '2009/6/18 11:00', '2009/6/18 12:00', '2009/6/18 13:00', '2009/6/18 14:00', '2009/6/18 15:00', '2009/6/18 16:00', '2009/6/18 17:00', '2009/6/18 18:00', '2009/6/18 19:00', '2009/6/18 20:00', '2009/6/18 21:00', '2009/6/18 22:00', '2009/6/18 23:00',
										'2009/6/15 0:00', '2009/6/19 1:00', '2009/6/19 2:00', '2009/6/19 3:00', '2009/6/19 4:00', '2009/6/19 5:00', '2009/6/19 6:00', '2009/6/19 7:00', '2009/6/19 8:00', '2009/6/19 9:00', '2009/6/19 10:00', '2009/6/19 11:00', '2009/6/19 12:00', '2009/6/19 13:00', '2009/6/19 14:00', '2009/6/19 15:00', '2009/6/19 16:00', '2009/6/19 17:00', '2009/6/19 18:00', '2009/6/19 19:00', '2009/6/19 20:00', '2009/6/19 21:00', '2009/6/19 22:00', '2009/6/19 23:00',
										'2009/6/20 0:00', '2009/6/20 1:00', '2009/6/20 2:00', '2009/6/20 3:00', '2009/6/20 4:00', '2009/6/20 5:00', '2009/6/20 6:00', '2009/6/20 7:00', '2009/6/20 8:00', '2009/6/20 9:00', '2009/6/20 10:00', '2009/6/20 11:00', '2009/6/20 12:00', '2009/6/20 13:00', '2009/6/20 14:00', '2009/6/20 15:00', '2009/6/20 16:00', '2009/6/20 17:00', '2009/6/20 18:00', '2009/6/20 19:00', '2009/6/20 20:00', '2009/6/20 21:00', '2009/6/20 22:00', '2009/6/20 23:00',
										'2009/6/21 0:00', '2009/6/21 1:00', '2009/6/21 2:00', '2009/6/21 3:00', '2009/6/21 4:00', '2009/6/21 5:00', '2009/6/21 6:00', '2009/6/21 7:00', '2009/6/21 8:00', '2009/6/21 9:00', '2009/6/21 10:00', '2009/6/21 11:00', '2009/6/21 12:00', '2009/6/21 13:00', '2009/6/21 14:00', '2009/6/21 15:00', '2009/6/21 16:00', '2009/6/21 17:00', '2009/6/21 18:00', '2009/6/21 19:00', '2009/6/21 20:00', '2009/6/21 21:00', '2009/6/21 22:00', '2009/6/21 23:00',
										'2009/6/22 0:00', '2009/6/22 1:00', '2009/6/22 2:00', '2009/6/22 3:00', '2009/6/22 4:00', '2009/6/22 5:00', '2009/6/22 6:00', '2009/6/22 7:00', '2009/6/22 8:00', '2009/6/22 9:00', '2009/6/22 10:00', '2009/6/22 11:00', '2009/6/22 12:00', '2009/6/22 13:00', '2009/6/22 14:00', '2009/6/22 15:00', '2009/6/22 16:00', '2009/6/22 17:00', '2009/6/22 18:00', '2009/6/22 19:00', '2009/6/22 20:00', '2009/6/22 21:00', '2009/6/22 22:00', '2009/6/22 23:00',
										'2009/6/23 0:00', '2009/6/23 1:00', '2009/6/23 2:00', '2009/6/23 3:00', '2009/6/23 4:00', '2009/6/23 5:00', '2009/6/23 6:00', '2009/6/23 7:00', '2009/6/23 8:00', '2009/6/23 9:00', '2009/6/23 10:00', '2009/6/23 11:00', '2009/6/23 12:00', '2009/6/23 13:00', '2009/6/23 14:00', '2009/6/23 15:00', '2009/6/23 16:00', '2009/6/23 17:00', '2009/6/23 18:00', '2009/6/23 19:00', '2009/6/23 20:00', '2009/6/23 21:00', '2009/6/23 22:00', '2009/6/23 23:00',
										'2009/6/24 0:00', '2009/6/24 1:00', '2009/6/24 2:00', '2009/6/24 3:00', '2009/6/24 4:00', '2009/6/24 5:00', '2009/6/24 6:00', '2009/6/24 7:00', '2009/6/24 8:00', '2009/6/24 9:00', '2009/6/24 10:00', '2009/6/24 11:00', '2009/6/24 12:00', '2009/6/24 13:00', '2009/6/24 14:00', '2009/6/24 15:00', '2009/6/24 16:00', '2009/6/24 17:00', '2009/6/24 18:00', '2009/6/24 19:00', '2009/6/24 20:00', '2009/6/24 21:00', '2009/6/24 22:00', '2009/6/24 23:00',
										'2009/6/25 0:00', '2009/6/25 1:00', '2009/6/25 2:00', '2009/6/25 3:00', '2009/6/25 4:00', '2009/6/25 5:00', '2009/6/25 6:00', '2009/6/25 7:00', '2009/6/25 8:00', '2009/6/25 9:00', '2009/6/25 10:00', '2009/6/25 11:00', '2009/6/25 12:00', '2009/6/25 13:00', '2009/6/25 14:00', '2009/6/25 15:00', '2009/6/25 16:00', '2009/6/25 17:00', '2009/6/25 18:00', '2009/6/25 19:00', '2009/6/25 20:00', '2009/6/25 21:00', '2009/6/25 22:00', '2009/6/25 23:00',
										'2009/6/26 0:00', '2009/6/26 1:00', '2009/6/26 2:00', '2009/6/26 3:00', '2009/6/26 4:00', '2009/6/26 5:00', '2009/6/26 6:00', '2009/6/26 7:00', '2009/6/26 8:00', '2009/6/26 9:00', '2009/6/26 10:00', '2009/6/26 11:00', '2009/6/26 12:00', '2009/6/26 13:00', '2009/6/26 14:00', '2009/6/26 15:00', '2009/6/26 16:00', '2009/6/26 17:00', '2009/6/26 18:00', '2009/6/26 19:00', '2009/6/26 20:00', '2009/6/26 21:00', '2009/6/26 22:00', '2009/6/26 23:00',
										'2009/6/27 0:00', '2009/6/27 1:00', '2009/6/27 2:00', '2009/6/27 3:00', '2009/6/27 4:00', '2009/6/27 5:00', '2009/6/27 6:00', '2009/6/27 7:00', '2009/6/27 8:00', '2009/6/27 9:00', '2009/6/27 10:00', '2009/6/27 11:00', '2009/6/27 12:00', '2009/6/27 13:00', '2009/6/27 14:00', '2009/6/27 15:00', '2009/6/27 16:00', '2009/6/27 17:00', '2009/6/27 18:00', '2009/6/27 19:00', '2009/6/27 20:00', '2009/6/27 21:00', '2009/6/27 22:00', '2009/6/27 23:00',
										'2009/6/28 0:00', '2009/6/28 1:00', '2009/6/28 2:00', '2009/6/28 3:00', '2009/6/28 4:00', '2009/6/28 5:00', '2009/6/28 6:00', '2009/6/28 7:00', '2009/6/28 8:00', '2009/6/28 9:00', '2009/6/28 10:00', '2009/6/28 11:00', '2009/6/28 12:00', '2009/6/28 13:00', '2009/6/28 14:00', '2009/6/28 15:00', '2009/6/28 16:00', '2009/6/28 17:00', '2009/6/28 18:00', '2009/6/28 19:00', '2009/6/28 20:00', '2009/6/28 21:00', '2009/6/28 22:00', '2009/6/28 23:00',
										'2009/6/29 0:00', '2009/6/29 1:00', '2009/6/29 2:00', '2009/6/29 3:00', '2009/6/29 4:00', '2009/6/29 5:00', '2009/6/29 6:00', '2009/6/29 7:00', '2009/6/29 8:00', '2009/6/29 9:00', '2009/6/29 10:00', '2009/6/29 11:00', '2009/6/29 12:00', '2009/6/29 13:00', '2009/6/29 14:00', '2009/6/29 15:00', '2009/6/29 16:00', '2009/6/29 17:00', '2009/6/29 18:00', '2009/6/29 19:00', '2009/6/29 20:00', '2009/6/29 21:00', '2009/6/29 22:00', '2009/6/29 23:00',
										'2009/6/30 0:00', '2009/6/30 1:00', '2009/6/30 2:00', '2009/6/30 3:00', '2009/6/30 4:00', '2009/6/30 5:00', '2009/6/30 6:00', '2009/6/30 7:00', '2009/6/30 8:00', '2009/6/30 9:00', '2009/6/30 10:00', '2009/6/30 11:00', '2009/6/30 12:00', '2009/6/30 13:00', '2009/6/30 14:00', '2009/6/30 15:00', '2009/6/30 16:00', '2009/6/30 17:00', '2009/6/30 18:00', '2009/6/30 19:00', '2009/6/30 20:00', '2009/6/30 21:00', '2009/6/30 22:00', '2009/6/30 23:00',
										'2009/7/1 0:00', '2009/7/1 1:00', '2009/7/1 2:00', '2009/7/1 3:00', '2009/7/1 4:00', '2009/7/1 5:00', '2009/7/1 6:00', '2009/7/1 7:00', '2009/7/1 8:00', '2009/7/1 9:00', '2009/7/1 10:00', '2009/7/1 11:00', '2009/7/1 12:00', '2009/7/1 13:00', '2009/7/1 14:00', '2009/7/1 15:00', '2009/7/1 16:00', '2009/7/1 17:00', '2009/7/1 18:00', '2009/7/1 19:00', '2009/7/1 20:00', '2009/7/1 21:00', '2009/7/1 22:00', '2009/7/1 23:00',
										'2009/7/2 0:00', '2009/7/2 1:00', '2009/7/2 2:00', '2009/7/2 3:00', '2009/7/2 4:00', '2009/7/2 5:00', '2009/7/2 6:00', '2009/7/2 7:00', '2009/7/2 8:00', '2009/7/2 9:00', '2009/7/2 10:00', '2009/7/2 11:00', '2009/7/2 12:00', '2009/7/2 13:00', '2009/7/2 14:00', '2009/7/2 15:00', '2009/7/2 16:00', '2009/7/2 17:00', '2009/7/2 18:00', '2009/7/2 19:00', '2009/7/2 20:00', '2009/7/2 21:00', '2009/7/2 22:00', '2009/7/2 23:00',
										'2009/7/3 0:00', '2009/7/3 1:00', '2009/7/3 2:00', '2009/7/3 3:00', '2009/7/3 4:00', '2009/7/3 5:00', '2009/7/3 6:00', '2009/7/3 7:00', '2009/7/3 8:00', '2009/7/3 9:00', '2009/7/3 10:00', '2009/7/3 11:00', '2009/7/3 12:00', '2009/7/3 13:00', '2009/7/3 14:00', '2009/7/3 15:00', '2009/7/3 16:00', '2009/7/3 17:00', '2009/7/3 18:00', '2009/7/3 19:00', '2009/7/3 20:00', '2009/7/3 21:00', '2009/7/3 22:00', '2009/7/3 23:00',
										'2009/7/4 0:00', '2009/7/4 1:00', '2009/7/4 2:00', '2009/7/4 3:00', '2009/7/4 4:00', '2009/7/4 5:00', '2009/7/4 6:00', '2009/7/4 7:00', '2009/7/4 8:00', '2009/7/4 9:00', '2009/7/4 10:00', '2009/7/4 11:00', '2009/7/4 12:00', '2009/7/4 13:00', '2009/7/4 14:00', '2009/7/4 15:00', '2009/7/4 16:00', '2009/7/4 17:00', '2009/7/4 18:00', '2009/7/4 19:00', '2009/7/4 20:00', '2009/7/4 21:00', '2009/7/4 22:00', '2009/7/4 23:00',
										'2009/7/5 0:00', '2009/7/5 1:00', '2009/7/5 2:00', '2009/7/5 3:00', '2009/7/5 4:00', '2009/7/5 5:00', '2009/7/5 6:00', '2009/7/5 7:00', '2009/7/5 8:00', '2009/7/5 9:00', '2009/7/5 10:00', '2009/7/5 11:00', '2009/7/5 12:00', '2009/7/5 13:00', '2009/7/5 14:00', '2009/7/5 15:00', '2009/7/5 16:00', '2009/7/5 17:00', '2009/7/5 18:00', '2009/7/5 19:00', '2009/7/5 20:00', '2009/7/5 21:00', '2009/7/5 22:00', '2009/7/5 23:00',
										'2009/7/6 0:00', '2009/7/6 1:00', '2009/7/6 2:00', '2009/7/6 3:00', '2009/7/6 4:00', '2009/7/6 5:00', '2009/7/6 6:00', '2009/7/6 7:00', '2009/7/6 8:00', '2009/7/6 9:00', '2009/7/6 10:00', '2009/7/6 11:00', '2009/7/6 12:00', '2009/7/6 13:00', '2009/7/6 14:00', '2009/7/6 15:00', '2009/7/6 16:00', '2009/7/6 17:00', '2009/7/6 18:00', '2009/7/6 19:00', '2009/7/6 20:00', '2009/7/6 21:00', '2009/7/6 22:00', '2009/7/6 23:00',
										'2009/7/7 0:00', '2009/7/7 1:00', '2009/7/7 2:00', '2009/7/7 3:00', '2009/7/7 4:00', '2009/7/7 5:00', '2009/7/7 6:00', '2009/7/7 7:00', '2009/7/7 8:00', '2009/7/7 9:00', '2009/7/7 10:00', '2009/7/7 11:00', '2009/7/7 12:00', '2009/7/7 13:00', '2009/7/7 14:00', '2009/7/7 15:00', '2009/7/7 16:00', '2009/7/7 17:00', '2009/7/7 18:00', '2009/7/7 19:00', '2009/7/7 20:00', '2009/7/7 21:00', '2009/7/7 22:00', '2009/7/7 23:00',
										'2009/7/8 0:00', '2009/7/8 1:00', '2009/7/8 2:00', '2009/7/8 3:00', '2009/7/8 4:00', '2009/7/8 5:00', '2009/7/8 6:00', '2009/7/8 7:00', '2009/7/8 8:00', '2009/7/8 9:00', '2009/7/8 10:00', '2009/7/8 11:00', '2009/7/8 12:00', '2009/7/8 13:00', '2009/7/8 14:00', '2009/7/8 15:00', '2009/7/8 16:00', '2009/7/8 17:00', '2009/7/8 18:00', '2009/7/8 19:00', '2009/7/8 20:00', '2009/7/8 21:00', '2009/7/8 22:00', '2009/7/8 23:00',
										'2009/7/9 0:00', '2009/7/9 1:00', '2009/7/9 2:00', '2009/7/9 3:00', '2009/7/9 4:00', '2009/7/9 5:00', '2009/7/9 6:00', '2009/7/9 7:00', '2009/7/9 8:00', '2009/7/9 9:00', '2009/7/9 10:00', '2009/7/9 11:00', '2009/7/9 12:00', '2009/7/9 13:00', '2009/7/9 14:00', '2009/7/9 15:00', '2009/7/9 16:00', '2009/7/9 17:00', '2009/7/9 18:00', '2009/7/9 19:00', '2009/7/9 20:00', '2009/7/9 21:00', '2009/7/9 22:00', '2009/7/9 23:00',
										'2009/7/10 0:00', '2009/7/10 1:00', '2009/7/10 2:00', '2009/7/10 3:00', '2009/7/10 4:00', '2009/7/10 5:00', '2009/7/10 6:00', '2009/7/10 7:00', '2009/7/10 8:00', '2009/7/10 9:00', '2009/7/10 10:00', '2009/7/10 11:00', '2009/7/10 12:00', '2009/7/10 13:00', '2009/7/10 14:00', '2009/7/10 15:00', '2009/7/10 16:00', '2009/7/10 17:00', '2009/7/10 18:00', '2009/7/10 19:00', '2009/7/10 20:00', '2009/7/10 21:00', '2009/7/10 22:00', '2009/7/10 23:00',
										'2009/7/11 0:00', '2009/7/11 1:00', '2009/7/11 2:00', '2009/7/11 3:00', '2009/7/11 4:00', '2009/7/11 5:00', '2009/7/11 6:00', '2009/7/11 7:00', '2009/7/11 8:00', '2009/7/11 9:00', '2009/7/11 10:00', '2009/7/11 11:00', '2009/7/11 12:00', '2009/7/11 13:00', '2009/7/11 14:00', '2009/7/11 15:00', '2009/7/11 16:00', '2009/7/11 17:00', '2009/7/11 18:00', '2009/7/11 19:00', '2009/7/11 20:00', '2009/7/11 21:00', '2009/7/11 22:00', '2009/7/11 23:00',
										'2009/7/12 0:00', '2009/7/12 1:00', '2009/7/12 2:00', '2009/7/12 3:00', '2009/7/12 4:00', '2009/7/12 5:00', '2009/7/12 6:00', '2009/7/12 7:00', '2009/7/12 8:00', '2009/7/12 9:00', '2009/7/12 10:00', '2009/7/12 11:00', '2009/7/12 12:00', '2009/7/12 13:00', '2009/7/12 14:00', '2009/7/12 15:00', '2009/7/12 16:00', '2009/7/12 17:00', '2009/7/12 18:00', '2009/7/12 19:00', '2009/7/12 20:00', '2009/7/12 21:00', '2009/7/12 22:00', '2009/7/12 23:00',
										'2009/7/13 0:00', '2009/7/13 1:00', '2009/7/13 2:00', '2009/7/13 3:00', '2009/7/13 4:00', '2009/7/13 5:00', '2009/7/13 6:00', '2009/7/13 7:00', '2009/7/13 8:00', '2009/7/13 9:00', '2009/7/13 10:00', '2009/7/13 11:00', '2009/7/13 12:00', '2009/7/13 13:00', '2009/7/13 14:00', '2009/7/13 15:00', '2009/7/13 16:00', '2009/7/13 17:00', '2009/7/13 18:00', '2009/7/13 19:00', '2009/7/13 20:00', '2009/7/13 21:00', '2009/7/13 22:00', '2009/7/13 23:00',
										'2009/7/14 0:00', '2009/7/14 1:00', '2009/7/14 2:00', '2009/7/14 3:00', '2009/7/14 4:00', '2009/7/14 5:00', '2009/7/14 6:00', '2009/7/14 7:00', '2009/7/14 8:00', '2009/7/14 9:00', '2009/7/14 10:00', '2009/7/14 11:00', '2009/7/14 12:00', '2009/7/14 13:00', '2009/7/14 14:00', '2009/7/14 15:00', '2009/7/14 16:00', '2009/7/14 17:00', '2009/7/14 18:00', '2009/7/14 19:00', '2009/7/14 20:00', '2009/7/14 21:00', '2009/7/14 22:00', '2009/7/14 23:00',
										'2009/7/15 0:00', '2009/7/15 1:00', '2009/7/15 2:00', '2009/7/15 3:00', '2009/7/15 4:00', '2009/7/15 5:00', '2009/7/15 6:00', '2009/7/15 7:00', '2009/7/15 8:00', '2009/7/15 9:00', '2009/7/15 10:00', '2009/7/15 11:00', '2009/7/15 12:00', '2009/7/15 13:00', '2009/7/15 14:00', '2009/7/15 15:00', '2009/7/15 16:00', '2009/7/15 17:00', '2009/7/15 18:00', '2009/7/15 19:00', '2009/7/15 20:00', '2009/7/15 21:00', '2009/7/15 22:00', '2009/7/15 23:00',
										'2009/7/16 0:00', '2009/7/16 1:00', '2009/7/16 2:00', '2009/7/16 3:00', '2009/7/16 4:00', '2009/7/16 5:00', '2009/7/16 6:00', '2009/7/16 7:00', '2009/7/16 8:00', '2009/7/16 9:00', '2009/7/16 10:00', '2009/7/16 11:00', '2009/7/16 12:00', '2009/7/16 13:00', '2009/7/16 14:00', '2009/7/16 15:00', '2009/7/16 16:00', '2009/7/16 17:00', '2009/7/16 18:00', '2009/7/16 19:00', '2009/7/16 20:00', '2009/7/16 21:00', '2009/7/16 22:00', '2009/7/16 23:00',
										'2009/7/17 0:00', '2009/7/17 1:00', '2009/7/17 2:00', '2009/7/17 3:00', '2009/7/17 4:00', '2009/7/17 5:00', '2009/7/17 6:00', '2009/7/17 7:00', '2009/7/17 8:00', '2009/7/17 9:00', '2009/7/17 10:00', '2009/7/17 11:00', '2009/7/17 12:00', '2009/7/17 13:00', '2009/7/17 14:00', '2009/7/17 15:00', '2009/7/17 16:00', '2009/7/17 17:00', '2009/7/17 18:00', '2009/7/17 19:00', '2009/7/17 20:00', '2009/7/17 21:00', '2009/7/17 22:00', '2009/7/17 23:00',
										'2009/7/18 0:00', '2009/7/18 1:00', '2009/7/18 2:00', '2009/7/18 3:00', '2009/7/18 4:00', '2009/7/18 5:00', '2009/7/18 6:00', '2009/7/18 7:00', '2009/7/18 8:00', '2009/7/18 9:00', '2009/7/18 10:00', '2009/7/18 11:00', '2009/7/18 12:00', '2009/7/18 13:00', '2009/7/18 14:00', '2009/7/18 15:00', '2009/7/18 16:00', '2009/7/18 17:00', '2009/7/18 18:00', '2009/7/18 19:00', '2009/7/18 20:00', '2009/7/18 21:00', '2009/7/18 22:00', '2009/7/18 23:00',
										'2009/7/19 0:00', '2009/7/19 1:00', '2009/7/19 2:00', '2009/7/19 3:00', '2009/7/19 4:00', '2009/7/19 5:00', '2009/7/19 6:00', '2009/7/19 7:00', '2009/7/19 8:00', '2009/7/19 9:00', '2009/7/19 10:00', '2009/7/19 11:00', '2009/7/19 12:00', '2009/7/19 13:00', '2009/7/19 14:00', '2009/7/19 15:00', '2009/7/19 16:00', '2009/7/19 17:00', '2009/7/19 18:00', '2009/7/19 19:00', '2009/7/19 20:00', '2009/7/19 21:00', '2009/7/19 22:00', '2009/7/19 23:00',
										'2009/7/20 0:00', '2009/7/20 1:00', '2009/7/20 2:00', '2009/7/20 3:00', '2009/7/20 4:00', '2009/7/20 5:00', '2009/7/20 6:00', '2009/7/20 7:00', '2009/7/20 8:00', '2009/7/20 9:00', '2009/7/20 10:00', '2009/7/20 11:00', '2009/7/20 12:00', '2009/7/20 13:00', '2009/7/20 14:00', '2009/7/20 15:00', '2009/7/20 16:00', '2009/7/20 17:00', '2009/7/20 18:00', '2009/7/20 19:00', '2009/7/20 20:00', '2009/7/20 21:00', '2009/7/20 22:00', '2009/7/20 23:00',
										'2009/7/21 0:00', '2009/7/21 1:00', '2009/7/21 2:00', '2009/7/21 3:00', '2009/7/21 4:00', '2009/7/21 5:00', '2009/7/21 6:00', '2009/7/21 7:00', '2009/7/21 8:00', '2009/7/21 9:00', '2009/7/21 10:00', '2009/7/21 11:00', '2009/7/21 12:00', '2009/7/21 13:00', '2009/7/21 14:00', '2009/7/21 15:00', '2009/7/21 16:00', '2009/7/21 17:00', '2009/7/21 18:00', '2009/7/21 19:00', '2009/7/21 20:00', '2009/7/21 21:00', '2009/7/21 22:00', '2009/7/21 23:00',
										'2009/7/22 0:00', '2009/7/22 1:00', '2009/7/22 2:00', '2009/7/22 3:00', '2009/7/22 4:00', '2009/7/22 5:00', '2009/7/22 6:00', '2009/7/22 7:00', '2009/7/22 8:00', '2009/7/22 9:00', '2009/7/22 10:00', '2009/7/22 11:00', '2009/7/22 12:00', '2009/7/22 13:00', '2009/7/22 14:00', '2009/7/22 15:00', '2009/7/22 16:00', '2009/7/22 17:00', '2009/7/22 18:00', '2009/7/22 19:00', '2009/7/22 20:00', '2009/7/22 21:00', '2009/7/22 22:00', '2009/7/22 23:00',
										'2009/7/23 0:00', '2009/7/23 1:00', '2009/7/23 2:00', '2009/7/23 3:00', '2009/7/23 4:00', '2009/7/23 5:00', '2009/7/23 6:00', '2009/7/23 7:00', '2009/7/23 8:00', '2009/7/23 9:00', '2009/7/23 10:00', '2009/7/23 11:00', '2009/7/23 12:00', '2009/7/23 13:00', '2009/7/23 14:00', '2009/7/23 15:00', '2009/7/23 16:00', '2009/7/23 17:00', '2009/7/23 18:00', '2009/7/23 19:00', '2009/7/23 20:00', '2009/7/23 21:00', '2009/7/23 22:00', '2009/7/23 23:00',
										'2009/7/24 0:00', '2009/7/24 1:00', '2009/7/24 2:00', '2009/7/24 3:00', '2009/7/24 4:00', '2009/7/24 5:00', '2009/7/24 6:00', '2009/7/24 7:00', '2009/7/24 8:00', '2009/7/24 9:00', '2009/7/24 10:00', '2009/7/24 11:00', '2009/7/24 12:00', '2009/7/24 13:00', '2009/7/24 14:00', '2009/7/24 15:00', '2009/7/24 16:00', '2009/7/24 17:00', '2009/7/24 18:00', '2009/7/24 19:00', '2009/7/24 20:00', '2009/7/24 21:00', '2009/7/24 22:00', '2009/7/24 23:00',
										'2009/7/25 0:00', '2009/7/25 1:00', '2009/7/25 2:00', '2009/7/25 3:00', '2009/7/25 4:00', '2009/7/25 5:00', '2009/7/25 6:00', '2009/7/25 7:00', '2009/7/25 8:00', '2009/7/25 9:00', '2009/7/25 10:00', '2009/7/25 11:00', '2009/7/25 12:00', '2009/7/25 13:00', '2009/7/25 14:00', '2009/7/25 15:00', '2009/7/25 16:00', '2009/7/25 17:00', '2009/7/25 18:00', '2009/7/25 19:00', '2009/7/25 20:00', '2009/7/25 21:00', '2009/7/25 22:00', '2009/7/25 23:00',
										'2009/7/26 0:00', '2009/7/26 1:00', '2009/7/26 2:00', '2009/7/26 3:00', '2009/7/26 4:00', '2009/7/26 5:00', '2009/7/26 6:00', '2009/7/26 7:00', '2009/7/26 8:00', '2009/7/26 9:00', '2009/7/26 10:00', '2009/7/26 11:00', '2009/7/26 12:00', '2009/7/26 13:00', '2009/7/26 14:00', '2009/7/26 15:00', '2009/7/26 16:00', '2009/7/26 17:00', '2009/7/26 18:00', '2009/7/26 19:00', '2009/7/26 20:00', '2009/7/26 21:00', '2009/7/26 22:00', '2009/7/26 23:00',
										'2009/7/27 0:00', '2009/7/27 1:00', '2009/7/27 2:00', '2009/7/27 3:00', '2009/7/27 4:00', '2009/7/27 5:00', '2009/7/27 6:00', '2009/7/27 7:00', '2009/7/27 8:00', '2009/7/27 9:00', '2009/7/27 10:00', '2009/7/27 11:00', '2009/7/27 12:00', '2009/7/27 13:00', '2009/7/27 14:00', '2009/7/27 15:00', '2009/7/27 16:00', '2009/7/27 17:00', '2009/7/27 18:00', '2009/7/27 19:00', '2009/7/27 20:00', '2009/7/27 21:00', '2009/7/27 22:00', '2009/7/27 23:00',
										'2009/7/28 0:00', '2009/7/28 1:00', '2009/7/28 2:00', '2009/7/28 3:00', '2009/7/28 4:00', '2009/7/28 5:00', '2009/7/28 6:00', '2009/7/28 7:00', '2009/7/28 8:00', '2009/7/28 9:00', '2009/7/28 10:00', '2009/7/28 11:00', '2009/7/28 12:00', '2009/7/28 13:00', '2009/7/28 14:00', '2009/7/28 15:00', '2009/7/28 16:00', '2009/7/28 17:00', '2009/7/28 18:00', '2009/7/28 19:00', '2009/7/28 20:00', '2009/7/28 21:00', '2009/7/28 22:00', '2009/7/28 23:00',
										'2009/7/29 0:00', '2009/7/29 1:00', '2009/7/29 2:00', '2009/7/29 3:00', '2009/7/29 4:00', '2009/7/29 5:00', '2009/7/29 6:00', '2009/7/29 7:00', '2009/7/29 8:00', '2009/7/29 9:00', '2009/7/29 10:00', '2009/7/29 11:00', '2009/7/29 12:00', '2009/7/29 13:00', '2009/7/29 14:00', '2009/7/29 15:00', '2009/7/29 16:00', '2009/7/29 17:00', '2009/7/29 18:00', '2009/7/29 19:00', '2009/7/29 20:00', '2009/7/29 21:00', '2009/7/29 22:00', '2009/7/29 23:00',
										'2009/7/30 0:00', '2009/7/30 1:00', '2009/7/30 2:00', '2009/7/30 3:00', '2009/7/30 4:00', '2009/7/30 5:00', '2009/7/30 6:00', '2009/7/30 7:00', '2009/7/30 8:00', '2009/7/30 9:00', '2009/7/30 10:00', '2009/7/30 11:00', '2009/7/30 12:00', '2009/7/30 13:00', '2009/7/30 14:00', '2009/7/30 15:00', '2009/7/30 16:00', '2009/7/30 17:00', '2009/7/30 18:00', '2009/7/30 19:00', '2009/7/30 20:00', '2009/7/30 21:00', '2009/7/30 22:00', '2009/7/30 23:00',
										'2009/7/31 0:00', '2009/7/31 1:00', '2009/7/31 2:00', '2009/7/31 3:00', '2009/7/31 4:00', '2009/7/31 5:00', '2009/7/31 6:00', '2009/7/31 7:00', '2009/7/31 8:00', '2009/7/31 9:00', '2009/7/31 10:00', '2009/7/31 11:00', '2009/7/31 12:00', '2009/7/31 13:00', '2009/7/31 14:00', '2009/7/31 15:00', '2009/7/31 16:00', '2009/7/31 17:00', '2009/7/31 18:00', '2009/7/31 19:00', '2009/7/31 20:00', '2009/7/31 21:00', '2009/7/31 22:00', '2009/7/31 23:00',
										'2009/8/1 0:00', '2009/8/1 1:00', '2009/8/1 2:00', '2009/8/1 3:00', '2009/8/1 4:00', '2009/8/1 5:00', '2009/8/1 6:00', '2009/8/1 7:00', '2009/8/1 8:00', '2009/8/1 9:00', '2009/8/1 10:00', '2009/8/1 11:00', '2009/8/1 12:00', '2009/8/1 13:00', '2009/8/1 14:00', '2009/8/1 15:00', '2009/8/1 16:00', '2009/8/1 17:00', '2009/8/1 18:00', '2009/8/1 19:00', '2009/8/1 20:00', '2009/8/1 21:00', '2009/8/1 22:00', '2009/8/1 23:00', '2009/8/2 0:00', '2009/8/2 1:00', '2009/8/2 2:00', '2009/8/2 3:00', '2009/8/2 4:00', '2009/8/2 5:00', '2009/8/2 6:00', '2009/8/2 7:00', '2009/8/2 8:00', '2009/8/2 9:00', '2009/8/2 10:00', '2009/8/2 11:00', '2009/8/2 12:00', '2009/8/2 13:00', '2009/8/2 14:00', '2009/8/2 15:00', '2009/8/2 16:00', '2009/8/2 17:00', '2009/8/2 18:00', '2009/8/2 19:00', '2009/8/2 20:00', '2009/8/2 21:00', '2009/8/2 22:00', '2009/8/2 23:00', '2009/8/3 0:00', '2009/8/3 1:00', '2009/8/3 2:00', '2009/8/3 3:00', '2009/8/3 4:00', '2009/8/3 5:00', '2009/8/3 6:00', '2009/8/3 7:00', '2009/8/3 8:00', '2009/8/3 9:00', '2009/8/3 10:00', '2009/8/3 11:00', '2009/8/3 12:00', '2009/8/3 13:00', '2009/8/3 14:00', '2009/8/3 15:00', '2009/8/3 16:00', '2009/8/3 17:00', '2009/8/3 18:00', '2009/8/3 19:00', '2009/8/3 20:00', '2009/8/3 21:00', '2009/8/3 22:00', '2009/8/3 23:00', '2009/8/4 0:00', '2009/8/4 1:00', '2009/8/4 2:00', '2009/8/4 3:00', '2009/8/4 4:00', '2009/8/4 5:00', '2009/8/4 6:00', '2009/8/4 7:00', '2009/8/4 8:00', '2009/8/4 9:00', '2009/8/4 10:00', '2009/8/4 11:00', '2009/8/4 12:00', '2009/8/4 13:00', '2009/8/4 14:00', '2009/8/4 15:00', '2009/8/4 16:00', '2009/8/4 17:00', '2009/8/4 18:00', '2009/8/4 19:00', '2009/8/4 20:00', '2009/8/4 21:00', '2009/8/4 22:00', '2009/8/4 23:00', '2009/8/5 0:00', '2009/8/5 1:00', '2009/8/5 2:00', '2009/8/5 3:00', '2009/8/5 4:00', '2009/8/5 5:00', '2009/8/5 6:00', '2009/8/5 7:00', '2009/8/5 8:00', '2009/8/5 9:00', '2009/8/5 10:00', '2009/8/5 11:00', '2009/8/5 12:00', '2009/8/5 13:00', '2009/8/5 14:00', '2009/8/5 15:00', '2009/8/5 16:00', '2009/8/5 17:00', '2009/8/5 18:00', '2009/8/5 19:00', '2009/8/5 20:00', '2009/8/5 21:00', '2009/8/5 22:00', '2009/8/5 23:00', '2009/8/6 0:00', '2009/8/6 1:00', '2009/8/6 2:00', '2009/8/6 3:00', '2009/8/6 4:00', '2009/8/6 5:00', '2009/8/6 6:00', '2009/8/6 7:00', '2009/8/6 8:00', '2009/8/6 9:00', '2009/8/6 10:00', '2009/8/6 11:00', '2009/8/6 12:00', '2009/8/6 13:00', '2009/8/6 14:00', '2009/8/6 15:00', '2009/8/6 16:00', '2009/8/6 17:00', '2009/8/6 18:00', '2009/8/6 19:00', '2009/8/6 20:00', '2009/8/6 21:00', '2009/8/6 22:00', '2009/8/6 23:00', '2009/8/7 0:00', '2009/8/7 1:00', '2009/8/7 2:00', '2009/8/7 3:00', '2009/8/7 4:00', '2009/8/7 5:00', '2009/8/7 6:00', '2009/8/7 7:00', '2009/8/7 8:00', '2009/8/7 9:00', '2009/8/7 10:00', '2009/8/7 11:00', '2009/8/7 12:00', '2009/8/7 13:00', '2009/8/7 14:00', '2009/8/7 15:00', '2009/8/7 16:00', '2009/8/7 17:00', '2009/8/7 18:00', '2009/8/7 19:00', '2009/8/7 20:00', '2009/8/7 21:00', '2009/8/7 22:00', '2009/8/7 23:00', '2009/8/8 0:00', '2009/8/8 1:00', '2009/8/8 2:00', '2009/8/8 3:00', '2009/8/8 4:00', '2009/8/8 5:00', '2009/8/8 6:00', '2009/8/8 7:00', '2009/8/8 8:00', '2009/8/8 9:00', '2009/8/8 10:00', '2009/8/8 11:00', '2009/8/8 12:00', '2009/8/8 13:00', '2009/8/8 14:00', '2009/8/8 15:00', '2009/8/8 16:00', '2009/8/8 17:00', '2009/8/8 18:00', '2009/8/8 19:00', '2009/8/8 20:00', '2009/8/8 21:00', '2009/8/8 22:00', '2009/8/8 23:00', '2009/8/9 0:00', '2009/8/9 1:00', '2009/8/9 2:00', '2009/8/9 3:00', '2009/8/9 4:00', '2009/8/9 5:00', '2009/8/9 6:00', '2009/8/9 7:00', '2009/8/9 8:00', '2009/8/9 9:00', '2009/8/9 10:00', '2009/8/9 11:00', '2009/8/9 12:00', '2009/8/9 13:00', '2009/8/9 14:00', '2009/8/9 15:00', '2009/8/9 16:00', '2009/8/9 17:00', '2009/8/9 18:00', '2009/8/9 19:00', '2009/8/9 20:00', '2009/8/9 21:00', '2009/8/9 22:00', '2009/8/9 23:00', '2009/8/10 0:00', '2009/8/10 1:00', '2009/8/10 2:00', '2009/8/10 3:00', '2009/8/10 4:00', '2009/8/10 5:00', '2009/8/10 6:00', '2009/8/10 7:00', '2009/8/10 8:00', '2009/8/10 9:00', '2009/8/10 10:00', '2009/8/10 11:00', '2009/8/10 12:00', '2009/8/10 13:00', '2009/8/10 14:00', '2009/8/10 15:00', '2009/8/10 16:00', '2009/8/10 17:00', '2009/8/10 18:00', '2009/8/10 19:00', '2009/8/10 20:00', '2009/8/10 21:00', '2009/8/10 22:00', '2009/8/10 23:00', '2009/8/11 0:00', '2009/8/11 1:00', '2009/8/11 2:00', '2009/8/11 3:00', '2009/8/11 4:00', '2009/8/11 5:00', '2009/8/11 6:00', '2009/8/11 7:00', '2009/8/11 8:00', '2009/8/11 9:00', '2009/8/11 10:00', '2009/8/11 11:00', '2009/8/11 12:00', '2009/8/11 13:00', '2009/8/11 14:00', '2009/8/11 15:00', '2009/8/11 16:00', '2009/8/11 17:00', '2009/8/11 18:00', '2009/8/11 19:00', '2009/8/11 20:00', '2009/8/11 21:00', '2009/8/11 22:00', '2009/8/11 23:00', '2009/8/12 0:00', '2009/8/12 1:00', '2009/8/12 2:00', '2009/8/12 3:00', '2009/8/12 4:00', '2009/8/12 5:00', '2009/8/12 6:00', '2009/8/12 7:00', '2009/8/12 8:00', '2009/8/12 9:00', '2009/8/12 10:00', '2009/8/12 11:00', '2009/8/12 12:00', '2009/8/12 13:00', '2009/8/12 14:00', '2009/8/12 15:00', '2009/8/12 16:00', '2009/8/12 17:00', '2009/8/12 18:00', '2009/8/12 19:00', '2009/8/12 20:00', '2009/8/12 21:00', '2009/8/12 22:00', '2009/8/12 23:00', '2009/8/13 0:00', '2009/8/13 1:00', '2009/8/13 2:00', '2009/8/13 3:00', '2009/8/13 4:00', '2009/8/13 5:00', '2009/8/13 6:00', '2009/8/13 7:00', '2009/8/13 8:00', '2009/8/13 9:00', '2009/8/13 10:00', '2009/8/13 11:00', '2009/8/13 12:00', '2009/8/13 13:00', '2009/8/13 14:00', '2009/8/13 15:00', '2009/8/13 16:00', '2009/8/13 17:00', '2009/8/13 18:00', '2009/8/13 19:00', '2009/8/13 20:00', '2009/8/13 21:00', '2009/8/13 22:00', '2009/8/13 23:00', '2009/8/14 0:00', '2009/8/14 1:00', '2009/8/14 2:00', '2009/8/14 3:00', '2009/8/14 4:00', '2009/8/14 5:00', '2009/8/14 6:00', '2009/8/14 7:00', '2009/8/14 8:00', '2009/8/14 9:00', '2009/8/14 10:00', '2009/8/14 11:00', '2009/8/14 12:00', '2009/8/14 13:00', '2009/8/14 14:00', '2009/8/14 15:00', '2009/8/14 16:00', '2009/8/14 17:00', '2009/8/14 18:00', '2009/8/14 19:00', '2009/8/14 20:00', '2009/8/14 21:00', '2009/8/14 22:00', '2009/8/14 23:00', '2009/8/15 0:00', '2009/8/15 1:00', '2009/8/15 2:00', '2009/8/15 3:00', '2009/8/15 4:00', '2009/8/15 5:00', '2009/8/15 6:00', '2009/8/15 7:00', '2009/8/15 8:00', '2009/8/15 9:00', '2009/8/15 10:00', '2009/8/15 11:00', '2009/8/15 12:00', '2009/8/15 13:00', '2009/8/15 14:00', '2009/8/15 15:00', '2009/8/15 16:00', '2009/8/15 17:00', '2009/8/15 18:00', '2009/8/15 19:00', '2009/8/15 20:00', '2009/8/15 21:00', '2009/8/15 22:00', '2009/8/15 23:00', '2009/8/16 0:00', '2009/8/16 1:00', '2009/8/16 2:00', '2009/8/16 3:00', '2009/8/16 4:00', '2009/8/16 5:00', '2009/8/16 6:00', '2009/8/16 7:00', '2009/8/16 8:00', '2009/8/16 9:00', '2009/8/16 10:00', '2009/8/16 11:00', '2009/8/16 12:00', '2009/8/16 13:00', '2009/8/16 14:00', '2009/8/16 15:00', '2009/8/16 16:00', '2009/8/16 17:00', '2009/8/16 18:00', '2009/8/16 19:00', '2009/8/16 20:00', '2009/8/16 21:00', '2009/8/16 22:00', '2009/8/16 23:00', '2009/8/17 0:00', '2009/8/17 1:00', '2009/8/17 2:00', '2009/8/17 3:00', '2009/8/17 4:00', '2009/8/17 5:00', '2009/8/17 6:00', '2009/8/17 7:00', '2009/8/17 8:00', '2009/8/17 9:00', '2009/8/17 10:00', '2009/8/17 11:00', '2009/8/17 12:00', '2009/8/17 13:00', '2009/8/17 14:00', '2009/8/17 15:00', '2009/8/17 16:00', '2009/8/17 17:00', '2009/8/17 18:00', '2009/8/17 19:00', '2009/8/17 20:00', '2009/8/17 21:00', '2009/8/17 22:00', '2009/8/17 23:00', '2009/8/18 0:00', '2009/8/18 1:00', '2009/8/18 2:00', '2009/8/18 3:00', '2009/8/18 4:00', '2009/8/18 5:00', '2009/8/18 6:00', '2009/8/18 7:00', '2009/8/18 8:00', '2009/8/18 9:00', '2009/8/18 10:00', '2009/8/18 11:00', '2009/8/18 12:00', '2009/8/18 13:00', '2009/8/18 14:00', '2009/8/18 15:00', '2009/8/18 16:00', '2009/8/18 17:00', '2009/8/18 18:00', '2009/8/18 19:00', '2009/8/18 20:00', '2009/8/18 21:00', '2009/8/18 22:00', '2009/8/18 23:00', '2009/8/19 0:00', '2009/8/19 1:00', '2009/8/19 2:00', '2009/8/19 3:00', '2009/8/19 4:00', '2009/8/19 5:00', '2009/8/19 6:00', '2009/8/19 7:00', '2009/8/19 8:00', '2009/8/19 9:00', '2009/8/19 10:00', '2009/8/19 11:00', '2009/8/19 12:00', '2009/8/19 13:00', '2009/8/19 14:00', '2009/8/19 15:00', '2009/8/19 16:00', '2009/8/19 17:00', '2009/8/19 18:00', '2009/8/19 19:00', '2009/8/19 20:00', '2009/8/19 21:00', '2009/8/19 22:00', '2009/8/19 23:00', '2009/8/20 0:00', '2009/8/20 1:00', '2009/8/20 2:00', '2009/8/20 3:00', '2009/8/20 4:00', '2009/8/20 5:00', '2009/8/20 6:00', '2009/8/20 7:00', '2009/8/20 8:00', '2009/8/20 9:00', '2009/8/20 10:00', '2009/8/20 11:00', '2009/8/20 12:00', '2009/8/20 13:00', '2009/8/20 14:00', '2009/8/20 15:00', '2009/8/20 16:00', '2009/8/20 17:00', '2009/8/20 18:00', '2009/8/20 19:00', '2009/8/20 20:00', '2009/8/20 21:00', '2009/8/20 22:00', '2009/8/20 23:00', '2009/8/21 0:00', '2009/8/21 1:00', '2009/8/21 2:00', '2009/8/21 3:00', '2009/8/21 4:00', '2009/8/21 5:00', '2009/8/21 6:00', '2009/8/21 7:00', '2009/8/21 8:00', '2009/8/21 9:00', '2009/8/21 10:00', '2009/8/21 11:00', '2009/8/21 12:00', '2009/8/21 13:00', '2009/8/21 14:00', '2009/8/21 15:00', '2009/8/21 16:00', '2009/8/21 17:00', '2009/8/21 18:00', '2009/8/21 19:00', '2009/8/21 20:00', '2009/8/21 21:00', '2009/8/21 22:00', '2009/8/21 23:00', '2009/8/22 0:00', '2009/8/22 1:00', '2009/8/22 2:00', '2009/8/22 3:00', '2009/8/22 4:00', '2009/8/22 5:00', '2009/8/22 6:00', '2009/8/22 7:00', '2009/8/22 8:00', '2009/8/22 9:00', '2009/8/22 10:00', '2009/8/22 11:00', '2009/8/22 12:00', '2009/8/22 13:00', '2009/8/22 14:00', '2009/8/22 15:00', '2009/8/22 16:00', '2009/8/22 17:00', '2009/8/22 18:00', '2009/8/22 19:00', '2009/8/22 20:00', '2009/8/22 21:00', '2009/8/22 22:00', '2009/8/22 23:00', '2009/8/23 0:00', '2009/8/23 1:00', '2009/8/23 2:00', '2009/8/23 3:00', '2009/8/23 4:00', '2009/8/23 5:00', '2009/8/23 6:00', '2009/8/23 7:00', '2009/8/23 8:00', '2009/8/23 9:00', '2009/8/23 10:00', '2009/8/23 11:00', '2009/8/23 12:00', '2009/8/23 13:00', '2009/8/23 14:00', '2009/8/23 15:00', '2009/8/23 16:00', '2009/8/23 17:00', '2009/8/23 18:00', '2009/8/23 19:00', '2009/8/23 20:00', '2009/8/23 21:00', '2009/8/23 22:00', '2009/8/23 23:00', '2009/8/24 0:00', '2009/8/24 1:00', '2009/8/24 2:00', '2009/8/24 3:00', '2009/8/24 4:00', '2009/8/24 5:00', '2009/8/24 6:00', '2009/8/24 7:00', '2009/8/24 8:00', '2009/8/24 9:00', '2009/8/24 10:00', '2009/8/24 11:00', '2009/8/24 12:00', '2009/8/24 13:00', '2009/8/24 14:00', '2009/8/24 15:00', '2009/8/24 16:00', '2009/8/24 17:00', '2009/8/24 18:00', '2009/8/24 19:00', '2009/8/24 20:00', '2009/8/24 21:00', '2009/8/24 22:00', '2009/8/24 23:00', '2009/8/25 0:00', '2009/8/25 1:00', '2009/8/25 2:00', '2009/8/25 3:00', '2009/8/25 4:00', '2009/8/25 5:00', '2009/8/25 6:00', '2009/8/25 7:00', '2009/8/25 8:00', '2009/8/25 9:00', '2009/8/25 10:00', '2009/8/25 11:00', '2009/8/25 12:00', '2009/8/25 13:00', '2009/8/25 14:00', '2009/8/25 15:00', '2009/8/25 16:00', '2009/8/25 17:00', '2009/8/25 18:00', '2009/8/25 19:00', '2009/8/25 20:00', '2009/8/25 21:00', '2009/8/25 22:00', '2009/8/25 23:00', '2009/8/26 0:00', '2009/8/26 1:00', '2009/8/26 2:00', '2009/8/26 3:00', '2009/8/26 4:00', '2009/8/26 5:00', '2009/8/26 6:00', '2009/8/26 7:00', '2009/8/26 8:00', '2009/8/26 9:00', '2009/8/26 10:00', '2009/8/26 11:00', '2009/8/26 12:00', '2009/8/26 13:00', '2009/8/26 14:00', '2009/8/26 15:00', '2009/8/26 16:00', '2009/8/26 17:00', '2009/8/26 18:00', '2009/8/26 19:00', '2009/8/26 20:00', '2009/8/26 21:00', '2009/8/26 22:00', '2009/8/26 23:00', '2009/8/27 0:00', '2009/8/27 1:00', '2009/8/27 2:00', '2009/8/27 3:00', '2009/8/27 4:00', '2009/8/27 5:00', '2009/8/27 6:00', '2009/8/27 7:00', '2009/8/27 8:00', '2009/8/27 9:00', '2009/8/27 10:00', '2009/8/27 11:00', '2009/8/27 12:00', '2009/8/27 13:00', '2009/8/27 14:00', '2009/8/27 15:00', '2009/8/27 16:00', '2009/8/27 17:00', '2009/8/27 18:00', '2009/8/27 19:00', '2009/8/27 20:00', '2009/8/27 21:00', '2009/8/27 22:00', '2009/8/27 23:00', '2009/8/28 0:00', '2009/8/28 1:00', '2009/8/28 2:00', '2009/8/28 3:00', '2009/8/28 4:00', '2009/8/28 5:00', '2009/8/28 6:00', '2009/8/28 7:00', '2009/8/28 8:00', '2009/8/28 9:00', '2009/8/28 10:00', '2009/8/28 11:00', '2009/8/28 12:00', '2009/8/28 13:00', '2009/8/28 14:00', '2009/8/28 15:00', '2009/8/28 16:00', '2009/8/28 17:00', '2009/8/28 18:00', '2009/8/28 19:00', '2009/8/28 20:00', '2009/8/28 21:00', '2009/8/28 22:00', '2009/8/28 23:00', '2009/8/29 0:00', '2009/8/29 1:00', '2009/8/29 2:00', '2009/8/29 3:00', '2009/8/29 4:00', '2009/8/29 5:00', '2009/8/29 6:00', '2009/8/29 7:00', '2009/8/29 8:00', '2009/8/29 9:00', '2009/8/29 10:00', '2009/8/29 11:00', '2009/8/29 12:00', '2009/8/29 13:00', '2009/8/29 14:00', '2009/8/29 15:00', '2009/8/29 16:00', '2009/8/29 17:00', '2009/8/29 18:00', '2009/8/29 19:00', '2009/8/29 20:00', '2009/8/29 21:00', '2009/8/29 22:00', '2009/8/29 23:00', '2009/8/30 0:00', '2009/8/30 1:00', '2009/8/30 2:00', '2009/8/30 3:00', '2009/8/30 4:00', '2009/8/30 5:00', '2009/8/30 6:00', '2009/8/30 7:00', '2009/8/30 8:00', '2009/8/30 9:00', '2009/8/30 10:00', '2009/8/30 11:00', '2009/8/30 12:00', '2009/8/30 13:00', '2009/8/30 14:00', '2009/8/30 15:00', '2009/8/30 16:00', '2009/8/30 17:00', '2009/8/30 18:00', '2009/8/30 19:00', '2009/8/30 20:00', '2009/8/30 21:00', '2009/8/30 22:00', '2009/8/30 23:00', '2009/8/31 0:00', '2009/8/31 1:00', '2009/8/31 2:00', '2009/8/31 3:00', '2009/8/31 4:00', '2009/8/31 5:00', '2009/8/31 6:00', '2009/8/31 7:00', '2009/8/31 8:00', '2009/8/31 9:00', '2009/8/31 10:00', '2009/8/31 11:00', '2009/8/31 12:00', '2009/8/31 13:00', '2009/8/31 14:00', '2009/8/31 15:00', '2009/8/31 16:00', '2009/8/31 17:00', '2009/8/31 18:00', '2009/8/31 19:00', '2009/8/31 20:00', '2009/8/31 21:00', '2009/8/31 22:00', '2009/8/31 23:00',
										'2009/9/1 0:00', '2009/9/1 1:00', '2009/9/1 2:00', '2009/9/1 3:00', '2009/9/1 4:00', '2009/9/1 5:00', '2009/9/1 6:00', '2009/9/1 7:00', '2009/9/1 8:00', '2009/9/1 9:00', '2009/9/1 10:00', '2009/9/1 11:00', '2009/9/1 12:00', '2009/9/1 13:00', '2009/9/1 14:00', '2009/9/1 15:00', '2009/9/1 16:00', '2009/9/1 17:00', '2009/9/1 18:00', '2009/9/1 19:00', '2009/9/1 20:00', '2009/9/1 21:00', '2009/9/1 22:00', '2009/9/1 23:00', '2009/9/2 0:00', '2009/9/2 1:00', '2009/9/2 2:00', '2009/9/2 3:00', '2009/9/2 4:00', '2009/9/2 5:00', '2009/9/2 6:00', '2009/9/2 7:00', '2009/9/2 8:00', '2009/9/2 9:00', '2009/9/2 10:00', '2009/9/2 11:00', '2009/9/2 12:00', '2009/9/2 13:00', '2009/9/2 14:00', '2009/9/2 15:00', '2009/9/2 16:00', '2009/9/2 17:00', '2009/9/2 18:00', '2009/9/2 19:00', '2009/9/2 20:00', '2009/9/2 21:00', '2009/9/2 22:00', '2009/9/2 23:00', '2009/9/3 0:00', '2009/9/3 1:00', '2009/9/3 2:00', '2009/9/3 3:00', '2009/9/3 4:00', '2009/9/3 5:00', '2009/9/3 6:00', '2009/9/3 7:00', '2009/9/3 8:00', '2009/9/3 9:00', '2009/9/3 10:00', '2009/9/3 11:00', '2009/9/3 12:00', '2009/9/3 13:00', '2009/9/3 14:00', '2009/9/3 15:00', '2009/9/3 16:00', '2009/9/3 17:00', '2009/9/3 18:00', '2009/9/3 19:00', '2009/9/3 20:00', '2009/9/3 21:00', '2009/9/3 22:00', '2009/9/3 23:00', '2009/9/4 0:00', '2009/9/4 1:00', '2009/9/4 2:00', '2009/9/4 3:00', '2009/9/4 4:00', '2009/9/4 5:00', '2009/9/4 6:00', '2009/9/4 7:00', '2009/9/4 8:00', '2009/9/4 9:00', '2009/9/4 10:00', '2009/9/4 11:00', '2009/9/4 12:00', '2009/9/4 13:00', '2009/9/4 14:00', '2009/9/4 15:00', '2009/9/4 16:00', '2009/9/4 17:00', '2009/9/4 18:00', '2009/9/4 19:00', '2009/9/4 20:00', '2009/9/4 21:00', '2009/9/4 22:00', '2009/9/4 23:00', '2009/9/5 0:00', '2009/9/5 1:00', '2009/9/5 2:00', '2009/9/5 3:00', '2009/9/5 4:00', '2009/9/5 5:00', '2009/9/5 6:00', '2009/9/5 7:00', '2009/9/5 8:00', '2009/9/5 9:00', '2009/9/5 10:00', '2009/9/5 11:00', '2009/9/5 12:00', '2009/9/5 13:00', '2009/9/5 14:00', '2009/9/5 15:00', '2009/9/5 16:00', '2009/9/5 17:00', '2009/9/5 18:00', '2009/9/5 19:00', '2009/9/5 20:00', '2009/9/5 21:00', '2009/9/5 22:00', '2009/9/5 23:00', '2009/9/6 0:00', '2009/9/6 1:00', '2009/9/6 2:00', '2009/9/6 3:00', '2009/9/6 4:00', '2009/9/6 5:00', '2009/9/6 6:00', '2009/9/6 7:00', '2009/9/6 8:00', '2009/9/6 9:00', '2009/9/6 10:00', '2009/9/6 11:00', '2009/9/6 12:00', '2009/9/6 13:00', '2009/9/6 14:00', '2009/9/6 15:00', '2009/9/6 16:00', '2009/9/6 17:00', '2009/9/6 18:00', '2009/9/6 19:00', '2009/9/6 20:00', '2009/9/6 21:00', '2009/9/6 22:00', '2009/9/6 23:00', '2009/9/7 0:00', '2009/9/7 1:00', '2009/9/7 2:00', '2009/9/7 3:00', '2009/9/7 4:00', '2009/9/7 5:00', '2009/9/7 6:00', '2009/9/7 7:00', '2009/9/7 8:00', '2009/9/7 9:00', '2009/9/7 10:00', '2009/9/7 11:00', '2009/9/7 12:00', '2009/9/7 13:00', '2009/9/7 14:00', '2009/9/7 15:00', '2009/9/7 16:00', '2009/9/7 17:00', '2009/9/7 18:00', '2009/9/7 19:00', '2009/9/7 20:00', '2009/9/7 21:00', '2009/9/7 22:00', '2009/9/7 23:00', '2009/9/8 0:00', '2009/9/8 1:00', '2009/9/8 2:00', '2009/9/8 3:00', '2009/9/8 4:00', '2009/9/8 5:00', '2009/9/8 6:00', '2009/9/8 7:00', '2009/9/8 8:00', '2009/9/8 9:00', '2009/9/8 10:00', '2009/9/8 11:00', '2009/9/8 12:00', '2009/9/8 13:00', '2009/9/8 14:00', '2009/9/8 15:00', '2009/9/8 16:00', '2009/9/8 17:00', '2009/9/8 18:00', '2009/9/8 19:00', '2009/9/8 20:00', '2009/9/8 21:00', '2009/9/8 22:00', '2009/9/8 23:00', '2009/9/9 0:00', '2009/9/9 1:00', '2009/9/9 2:00', '2009/9/9 3:00', '2009/9/9 4:00', '2009/9/9 5:00', '2009/9/9 6:00', '2009/9/9 7:00', '2009/9/9 8:00', '2009/9/9 9:00', '2009/9/9 10:00', '2009/9/9 11:00', '2009/9/9 12:00', '2009/9/9 13:00', '2009/9/9 14:00', '2009/9/9 15:00', '2009/9/9 16:00', '2009/9/9 17:00', '2009/9/9 18:00', '2009/9/9 19:00', '2009/9/9 20:00', '2009/9/9 21:00', '2009/9/9 22:00', '2009/9/9 23:00', '2009/9/10 0:00', '2009/9/10 1:00', '2009/9/10 2:00', '2009/9/10 3:00', '2009/9/10 4:00', '2009/9/10 5:00', '2009/9/10 6:00', '2009/9/10 7:00', '2009/9/10 8:00', '2009/9/10 9:00', '2009/9/10 10:00', '2009/9/10 11:00', '2009/9/10 12:00', '2009/9/10 13:00', '2009/9/10 14:00', '2009/9/10 15:00', '2009/9/10 16:00', '2009/9/10 17:00', '2009/9/10 18:00', '2009/9/10 19:00', '2009/9/10 20:00', '2009/9/10 21:00', '2009/9/10 22:00', '2009/9/10 23:00', '2009/9/11 0:00', '2009/9/11 1:00', '2009/9/11 2:00', '2009/9/11 3:00', '2009/9/11 4:00', '2009/9/11 5:00', '2009/9/11 6:00', '2009/9/11 7:00', '2009/9/11 8:00', '2009/9/11 9:00', '2009/9/11 10:00', '2009/9/11 11:00', '2009/9/11 12:00', '2009/9/11 13:00', '2009/9/11 14:00', '2009/9/11 15:00', '2009/9/11 16:00', '2009/9/11 17:00', '2009/9/11 18:00', '2009/9/11 19:00', '2009/9/11 20:00', '2009/9/11 21:00', '2009/9/11 22:00', '2009/9/11 23:00', '2009/9/12 0:00', '2009/9/12 1:00', '2009/9/12 2:00', '2009/9/12 3:00', '2009/9/12 4:00', '2009/9/12 5:00', '2009/9/12 6:00', '2009/9/12 7:00', '2009/9/12 8:00', '2009/9/12 9:00', '2009/9/12 10:00', '2009/9/12 11:00', '2009/9/12 12:00', '2009/9/12 13:00', '2009/9/12 14:00', '2009/9/12 15:00', '2009/9/12 16:00', '2009/9/12 17:00', '2009/9/12 18:00', '2009/9/12 19:00', '2009/9/12 20:00', '2009/9/12 21:00', '2009/9/12 22:00', '2009/9/12 23:00', '2009/9/13 0:00', '2009/9/13 1:00', '2009/9/13 2:00', '2009/9/13 3:00', '2009/9/13 4:00', '2009/9/13 5:00', '2009/9/13 6:00', '2009/9/13 7:00', '2009/9/13 8:00', '2009/9/13 9:00', '2009/9/13 10:00', '2009/9/13 11:00', '2009/9/13 12:00', '2009/9/13 13:00', '2009/9/13 14:00', '2009/9/13 15:00', '2009/9/13 16:00', '2009/9/13 17:00', '2009/9/13 18:00', '2009/9/13 19:00', '2009/9/13 20:00', '2009/9/13 21:00', '2009/9/13 22:00', '2009/9/13 23:00', '2009/9/14 0:00', '2009/9/14 1:00', '2009/9/14 2:00', '2009/9/14 3:00', '2009/9/14 4:00', '2009/9/14 5:00', '2009/9/14 6:00', '2009/9/14 7:00', '2009/9/14 8:00', '2009/9/14 9:00', '2009/9/14 10:00', '2009/9/14 11:00', '2009/9/14 12:00', '2009/9/14 13:00', '2009/9/14 14:00', '2009/9/14 15:00', '2009/9/14 16:00', '2009/9/14 17:00', '2009/9/14 18:00', '2009/9/14 19:00', '2009/9/14 20:00', '2009/9/14 21:00', '2009/9/14 22:00', '2009/9/14 23:00', '2009/9/15 0:00', '2009/9/15 1:00', '2009/9/15 2:00', '2009/9/15 3:00', '2009/9/15 4:00', '2009/9/15 5:00', '2009/9/15 6:00', '2009/9/15 7:00', '2009/9/15 8:00', '2009/9/15 9:00', '2009/9/15 10:00', '2009/9/15 11:00', '2009/9/15 12:00', '2009/9/15 13:00', '2009/9/15 14:00', '2009/9/15 15:00', '2009/9/15 16:00', '2009/9/15 17:00', '2009/9/15 18:00', '2009/9/15 19:00', '2009/9/15 20:00', '2009/9/15 21:00', '2009/9/15 22:00', '2009/9/15 23:00', '2009/9/16 0:00', '2009/9/16 1:00', '2009/9/16 2:00', '2009/9/16 3:00', '2009/9/16 4:00', '2009/9/16 5:00', '2009/9/16 6:00', '2009/9/16 7:00', '2009/9/16 8:00', '2009/9/16 9:00', '2009/9/16 10:00', '2009/9/16 11:00', '2009/9/16 12:00', '2009/9/16 13:00', '2009/9/16 14:00', '2009/9/16 15:00', '2009/9/16 16:00', '2009/9/16 17:00', '2009/9/16 18:00', '2009/9/16 19:00', '2009/9/16 20:00', '2009/9/16 21:00', '2009/9/16 22:00', '2009/9/16 23:00', '2009/9/17 0:00', '2009/9/17 1:00', '2009/9/17 2:00', '2009/9/17 3:00', '2009/9/17 4:00', '2009/9/17 5:00', '2009/9/17 6:00', '2009/9/17 7:00', '2009/9/17 8:00', '2009/9/17 9:00', '2009/9/17 10:00', '2009/9/17 11:00', '2009/9/17 12:00', '2009/9/17 13:00', '2009/9/17 14:00', '2009/9/17 15:00', '2009/9/17 16:00', '2009/9/17 17:00', '2009/9/17 18:00', '2009/9/17 19:00', '2009/9/17 20:00', '2009/9/17 21:00', '2009/9/17 22:00', '2009/9/17 23:00', '2009/9/18 0:00', '2009/9/18 1:00', '2009/9/18 2:00', '2009/9/18 3:00', '2009/9/18 4:00', '2009/9/18 5:00', '2009/9/18 6:00', '2009/9/18 7:00', '2009/9/18 8:00', '2009/9/18 9:00', '2009/9/18 10:00', '2009/9/18 11:00', '2009/9/18 12:00', '2009/9/18 13:00', '2009/9/18 14:00', '2009/9/18 15:00', '2009/9/18 16:00', '2009/9/18 17:00', '2009/9/18 18:00', '2009/9/18 19:00', '2009/9/18 20:00', '2009/9/18 21:00', '2009/9/18 22:00', '2009/9/18 23:00', '2009/9/19 0:00', '2009/9/19 1:00', '2009/9/19 2:00', '2009/9/19 3:00', '2009/9/19 4:00', '2009/9/19 5:00', '2009/9/19 6:00', '2009/9/19 7:00', '2009/9/19 8:00', '2009/9/19 9:00', '2009/9/19 10:00', '2009/9/19 11:00', '2009/9/19 12:00', '2009/9/19 13:00', '2009/9/19 14:00', '2009/9/19 15:00', '2009/9/19 16:00', '2009/9/19 17:00', '2009/9/19 18:00', '2009/9/19 19:00', '2009/9/19 20:00', '2009/9/19 21:00', '2009/9/19 22:00', '2009/9/19 23:00', '2009/9/20 0:00', '2009/9/20 1:00', '2009/9/20 2:00', '2009/9/20 3:00', '2009/9/20 4:00', '2009/9/20 5:00', '2009/9/20 6:00', '2009/9/20 7:00', '2009/9/20 8:00', '2009/9/20 9:00', '2009/9/20 10:00', '2009/9/20 11:00', '2009/9/20 12:00', '2009/9/20 13:00', '2009/9/20 14:00', '2009/9/20 15:00', '2009/9/20 16:00', '2009/9/20 17:00', '2009/9/20 18:00', '2009/9/20 19:00', '2009/9/20 20:00', '2009/9/20 21:00', '2009/9/20 22:00', '2009/9/20 23:00', '2009/9/21 0:00', '2009/9/21 1:00', '2009/9/21 2:00', '2009/9/21 3:00', '2009/9/21 4:00', '2009/9/21 5:00', '2009/9/21 6:00', '2009/9/21 7:00', '2009/9/21 8:00', '2009/9/21 9:00', '2009/9/21 10:00', '2009/9/21 11:00', '2009/9/21 12:00', '2009/9/21 13:00', '2009/9/21 14:00', '2009/9/21 15:00', '2009/9/21 16:00', '2009/9/21 17:00', '2009/9/21 18:00', '2009/9/21 19:00', '2009/9/21 20:00', '2009/9/21 21:00', '2009/9/21 22:00', '2009/9/21 23:00', '2009/9/22 0:00', '2009/9/22 1:00', '2009/9/22 2:00', '2009/9/22 3:00', '2009/9/22 4:00', '2009/9/22 5:00', '2009/9/22 6:00', '2009/9/22 7:00', '2009/9/22 8:00', '2009/9/22 9:00', '2009/9/22 10:00', '2009/9/22 11:00', '2009/9/22 12:00', '2009/9/22 13:00', '2009/9/22 14:00', '2009/9/22 15:00', '2009/9/22 16:00', '2009/9/22 17:00', '2009/9/22 18:00', '2009/9/22 19:00', '2009/9/22 20:00', '2009/9/22 21:00', '2009/9/22 22:00', '2009/9/22 23:00', '2009/9/23 0:00', '2009/9/23 1:00', '2009/9/23 2:00', '2009/9/23 3:00', '2009/9/23 4:00', '2009/9/23 5:00', '2009/9/23 6:00', '2009/9/23 7:00', '2009/9/23 8:00', '2009/9/23 9:00', '2009/9/23 10:00', '2009/9/23 11:00', '2009/9/23 12:00', '2009/9/23 13:00', '2009/9/23 14:00', '2009/9/23 15:00', '2009/9/23 16:00', '2009/9/23 17:00', '2009/9/23 18:00', '2009/9/23 19:00', '2009/9/23 20:00', '2009/9/23 21:00', '2009/9/23 22:00', '2009/9/23 23:00', '2009/9/24 0:00', '2009/9/24 1:00', '2009/9/24 2:00', '2009/9/24 3:00', '2009/9/24 4:00', '2009/9/24 5:00', '2009/9/24 6:00', '2009/9/24 7:00', '2009/9/24 8:00', '2009/9/24 9:00', '2009/9/24 10:00', '2009/9/24 11:00', '2009/9/24 12:00', '2009/9/24 13:00', '2009/9/24 14:00', '2009/9/24 15:00', '2009/9/24 16:00', '2009/9/24 17:00', '2009/9/24 18:00', '2009/9/24 19:00', '2009/9/24 20:00', '2009/9/24 21:00', '2009/9/24 22:00', '2009/9/24 23:00', '2009/9/25 0:00', '2009/9/25 1:00', '2009/9/25 2:00', '2009/9/25 3:00', '2009/9/25 4:00', '2009/9/25 5:00', '2009/9/25 6:00', '2009/9/25 7:00', '2009/9/25 8:00', '2009/9/25 9:00', '2009/9/25 10:00', '2009/9/25 11:00', '2009/9/25 12:00', '2009/9/25 13:00', '2009/9/25 14:00', '2009/9/25 15:00', '2009/9/25 16:00', '2009/9/25 17:00', '2009/9/25 18:00', '2009/9/25 19:00', '2009/9/25 20:00', '2009/9/25 21:00', '2009/9/25 22:00', '2009/9/25 23:00', '2009/9/26 0:00', '2009/9/26 1:00', '2009/9/26 2:00', '2009/9/26 3:00', '2009/9/26 4:00', '2009/9/26 5:00', '2009/9/26 6:00', '2009/9/26 7:00', '2009/9/26 8:00', '2009/9/26 9:00', '2009/9/26 10:00', '2009/9/26 11:00', '2009/9/26 12:00', '2009/9/26 13:00', '2009/9/26 14:00', '2009/9/26 15:00', '2009/9/26 16:00', '2009/9/26 17:00', '2009/9/26 18:00', '2009/9/26 19:00', '2009/9/26 20:00', '2009/9/26 21:00', '2009/9/26 22:00', '2009/9/26 23:00', '2009/9/27 0:00', '2009/9/27 1:00', '2009/9/27 2:00', '2009/9/27 3:00', '2009/9/27 4:00', '2009/9/27 5:00', '2009/9/27 6:00', '2009/9/27 7:00', '2009/9/27 8:00', '2009/9/27 9:00', '2009/9/27 10:00', '2009/9/27 11:00', '2009/9/27 12:00', '2009/9/27 13:00', '2009/9/27 14:00', '2009/9/27 15:00', '2009/9/27 16:00', '2009/9/27 17:00', '2009/9/27 18:00', '2009/9/27 19:00', '2009/9/27 20:00', '2009/9/27 21:00', '2009/9/27 22:00', '2009/9/27 23:00', '2009/9/28 0:00', '2009/9/28 1:00', '2009/9/28 2:00', '2009/9/28 3:00', '2009/9/28 4:00', '2009/9/28 5:00', '2009/9/28 6:00', '2009/9/28 7:00', '2009/9/28 8:00', '2009/9/28 9:00', '2009/9/28 10:00', '2009/9/28 11:00', '2009/9/28 12:00', '2009/9/28 13:00', '2009/9/28 14:00', '2009/9/28 15:00', '2009/9/28 16:00', '2009/9/28 17:00', '2009/9/28 18:00', '2009/9/28 19:00', '2009/9/28 20:00', '2009/9/28 21:00', '2009/9/28 22:00', '2009/9/28 23:00', '2009/9/29 0:00', '2009/9/29 1:00', '2009/9/29 2:00', '2009/9/29 3:00', '2009/9/29 4:00', '2009/9/29 5:00', '2009/9/29 6:00', '2009/9/29 7:00', '2009/9/29 8:00', '2009/9/29 9:00', '2009/9/29 10:00', '2009/9/29 11:00', '2009/9/29 12:00', '2009/9/29 13:00', '2009/9/29 14:00', '2009/9/29 15:00', '2009/9/29 16:00', '2009/9/29 17:00', '2009/9/29 18:00', '2009/9/29 19:00', '2009/9/29 20:00', '2009/9/29 21:00', '2009/9/29 22:00', '2009/9/29 23:00', '2009/9/30 0:00', '2009/9/30 1:00', '2009/9/30 2:00', '2009/9/30 3:00', '2009/9/30 4:00', '2009/9/30 5:00', '2009/9/30 6:00', '2009/9/30 7:00', '2009/9/30 8:00', '2009/9/30 9:00', '2009/9/30 10:00', '2009/9/30 11:00', '2009/9/30 12:00', '2009/9/30 13:00', '2009/9/30 14:00', '2009/9/30 15:00', '2009/9/30 16:00', '2009/9/30 17:00', '2009/9/30 18:00', '2009/9/30 19:00', '2009/9/30 20:00', '2009/9/30 21:00', '2009/9/30 22:00', '2009/9/30 23:00',
										'2009/10/1 0:00', '2009/10/1 1:00', '2009/10/1 2:00', '2009/10/1 3:00', '2009/10/1 4:00', '2009/10/1 5:00', '2009/10/1 6:00', '2009/10/1 7:00', '2009/10/1 8:00', '2009/10/1 9:00', '2009/10/1 10:00', '2009/10/1 11:00', '2009/10/1 12:00', '2009/10/1 13:00', '2009/10/1 14:00', '2009/10/1 15:00', '2009/10/1 16:00', '2009/10/1 17:00', '2009/10/1 18:00', '2009/10/1 19:00', '2009/10/1 20:00', '2009/10/1 21:00', '2009/10/1 22:00', '2009/10/1 23:00', '2009/10/2 0:00', '2009/10/2 1:00', '2009/10/2 2:00', '2009/10/2 3:00', '2009/10/2 4:00', '2009/10/2 5:00', '2009/10/2 6:00', '2009/10/2 7:00', '2009/10/2 8:00', '2009/10/2 9:00', '2009/10/2 10:00', '2009/10/2 11:00', '2009/10/2 12:00', '2009/10/2 13:00', '2009/10/2 14:00', '2009/10/2 15:00', '2009/10/2 16:00', '2009/10/2 17:00', '2009/10/2 18:00', '2009/10/2 19:00', '2009/10/2 20:00', '2009/10/2 21:00', '2009/10/2 22:00', '2009/10/2 23:00', '2009/10/3 0:00', '2009/10/3 1:00', '2009/10/3 2:00', '2009/10/3 3:00', '2009/10/3 4:00', '2009/10/3 5:00', '2009/10/3 6:00', '2009/10/3 7:00', '2009/10/3 8:00', '2009/10/3 9:00', '2009/10/3 10:00', '2009/10/3 11:00', '2009/10/3 12:00', '2009/10/3 13:00', '2009/10/3 14:00', '2009/10/3 15:00', '2009/10/3 16:00', '2009/10/3 17:00', '2009/10/3 18:00', '2009/10/3 19:00', '2009/10/3 20:00', '2009/10/3 21:00', '2009/10/3 22:00', '2009/10/3 23:00', '2009/10/4 0:00', '2009/10/4 1:00', '2009/10/4 2:00', '2009/10/4 3:00', '2009/10/4 4:00', '2009/10/4 5:00', '2009/10/4 6:00', '2009/10/4 7:00', '2009/10/4 8:00', '2009/10/4 9:00', '2009/10/4 10:00', '2009/10/4 11:00', '2009/10/4 12:00', '2009/10/4 13:00', '2009/10/4 14:00', '2009/10/4 15:00', '2009/10/4 16:00', '2009/10/4 17:00', '2009/10/4 18:00', '2009/10/4 19:00', '2009/10/4 20:00', '2009/10/4 21:00', '2009/10/4 22:00', '2009/10/4 23:00', '2009/10/5 0:00', '2009/10/5 1:00', '2009/10/5 2:00', '2009/10/5 3:00', '2009/10/5 4:00', '2009/10/5 5:00', '2009/10/5 6:00', '2009/10/5 7:00', '2009/10/5 8:00', '2009/10/5 9:00', '2009/10/5 10:00', '2009/10/5 11:00', '2009/10/5 12:00', '2009/10/5 13:00', '2009/10/5 14:00', '2009/10/5 15:00', '2009/10/5 16:00', '2009/10/5 17:00', '2009/10/5 18:00', '2009/10/5 19:00', '2009/10/5 20:00', '2009/10/5 21:00', '2009/10/5 22:00', '2009/10/5 23:00', '2009/10/6 0:00', '2009/10/6 1:00', '2009/10/6 2:00', '2009/10/6 3:00', '2009/10/6 4:00', '2009/10/6 5:00', '2009/10/6 6:00', '2009/10/6 7:00', '2009/10/6 8:00', '2009/10/6 9:00', '2009/10/6 10:00', '2009/10/6 11:00', '2009/10/6 12:00', '2009/10/6 13:00', '2009/10/6 14:00', '2009/10/6 15:00', '2009/10/6 16:00', '2009/10/6 17:00', '2009/10/6 18:00', '2009/10/6 19:00', '2009/10/6 20:00', '2009/10/6 21:00', '2009/10/6 22:00', '2009/10/6 23:00', '2009/10/7 0:00', '2009/10/7 1:00', '2009/10/7 2:00', '2009/10/7 3:00', '2009/10/7 4:00', '2009/10/7 5:00', '2009/10/7 6:00', '2009/10/7 7:00', '2009/10/7 8:00', '2009/10/7 9:00', '2009/10/7 10:00', '2009/10/7 11:00', '2009/10/7 12:00', '2009/10/7 13:00', '2009/10/7 14:00', '2009/10/7 15:00', '2009/10/7 16:00', '2009/10/7 17:00', '2009/10/7 18:00', '2009/10/7 19:00', '2009/10/7 20:00', '2009/10/7 21:00', '2009/10/7 22:00', '2009/10/7 23:00', '2009/10/8 0:00', '2009/10/8 1:00', '2009/10/8 2:00', '2009/10/8 3:00', '2009/10/8 4:00', '2009/10/8 5:00', '2009/10/8 6:00', '2009/10/8 7:00', '2009/10/8 8:00', '2009/10/8 9:00', '2009/10/8 10:00', '2009/10/8 11:00', '2009/10/8 12:00', '2009/10/8 13:00', '2009/10/8 14:00', '2009/10/8 15:00', '2009/10/8 16:00', '2009/10/8 17:00', '2009/10/8 18:00', '2009/10/8 19:00', '2009/10/8 20:00', '2009/10/8 21:00', '2009/10/8 22:00', '2009/10/8 23:00', '2009/10/9 0:00', '2009/10/9 1:00', '2009/10/9 2:00', '2009/10/9 3:00', '2009/10/9 4:00', '2009/10/9 5:00', '2009/10/9 6:00', '2009/10/9 7:00', '2009/10/9 8:00', '2009/10/9 9:00', '2009/10/9 10:00', '2009/10/9 11:00', '2009/10/9 12:00', '2009/10/9 13:00', '2009/10/9 14:00', '2009/10/9 15:00', '2009/10/9 16:00', '2009/10/9 17:00', '2009/10/9 18:00', '2009/10/9 19:00', '2009/10/9 20:00', '2009/10/9 21:00', '2009/10/9 22:00', '2009/10/9 23:00', '2009/10/10 0:00', '2009/10/10 1:00', '2009/10/10 2:00', '2009/10/10 3:00', '2009/10/10 4:00', '2009/10/10 5:00', '2009/10/10 6:00', '2009/10/10 7:00', '2009/10/10 8:00', '2009/10/10 9:00', '2009/10/10 10:00', '2009/10/10 11:00', '2009/10/10 12:00', '2009/10/10 13:00', '2009/10/10 14:00', '2009/10/10 15:00', '2009/10/10 16:00', '2009/10/10 17:00', '2009/10/10 18:00', '2009/10/10 19:00', '2009/10/10 20:00', '2009/10/10 21:00', '2009/10/10 22:00', '2009/10/10 23:00', '2009/10/11 0:00', '2009/10/11 1:00', '2009/10/11 2:00', '2009/10/11 3:00', '2009/10/11 4:00', '2009/10/11 5:00', '2009/10/11 6:00', '2009/10/11 7:00', '2009/10/11 8:00', '2009/10/11 9:00', '2009/10/11 10:00', '2009/10/11 11:00', '2009/10/11 12:00', '2009/10/11 13:00', '2009/10/11 14:00', '2009/10/11 15:00', '2009/10/11 16:00', '2009/10/11 17:00', '2009/10/11 18:00', '2009/10/11 19:00', '2009/10/11 20:00', '2009/10/11 21:00', '2009/10/11 22:00', '2009/10/11 23:00', '2009/10/12 0:00', '2009/10/12 1:00', '2009/10/12 2:00', '2009/10/12 3:00', '2009/10/12 4:00', '2009/10/12 5:00', '2009/10/12 6:00', '2009/10/12 7:00', '2009/10/12 8:00', '2009/10/12 9:00', '2009/10/12 10:00', '2009/10/12 11:00', '2009/10/12 12:00', '2009/10/12 13:00', '2009/10/12 14:00', '2009/10/12 15:00', '2009/10/12 16:00', '2009/10/12 17:00', '2009/10/12 18:00', '2009/10/12 19:00', '2009/10/12 20:00', '2009/10/12 21:00', '2009/10/12 22:00', '2009/10/12 23:00', '2009/10/13 0:00', '2009/10/13 1:00', '2009/10/13 2:00', '2009/10/13 3:00', '2009/10/13 4:00', '2009/10/13 5:00', '2009/10/13 6:00', '2009/10/13 7:00', '2009/10/13 8:00', '2009/10/13 9:00', '2009/10/13 10:00', '2009/10/13 11:00', '2009/10/13 12:00', '2009/10/13 13:00', '2009/10/13 14:00', '2009/10/13 15:00', '2009/10/13 16:00', '2009/10/13 17:00', '2009/10/13 18:00', '2009/10/13 19:00', '2009/10/13 20:00', '2009/10/13 21:00', '2009/10/13 22:00', '2009/10/13 23:00', '2009/10/14 0:00', '2009/10/14 1:00', '2009/10/14 2:00', '2009/10/14 3:00', '2009/10/14 4:00', '2009/10/14 5:00', '2009/10/14 6:00', '2009/10/14 7:00', '2009/10/14 8:00', '2009/10/14 9:00', '2009/10/14 10:00', '2009/10/14 11:00', '2009/10/14 12:00', '2009/10/14 13:00', '2009/10/14 14:00', '2009/10/14 15:00', '2009/10/14 16:00', '2009/10/14 17:00', '2009/10/14 18:00', '2009/10/14 19:00', '2009/10/14 20:00', '2009/10/14 21:00', '2009/10/14 22:00', '2009/10/14 23:00', '2009/10/15 0:00', '2009/10/15 1:00', '2009/10/15 2:00', '2009/10/15 3:00', '2009/10/15 4:00', '2009/10/15 5:00', '2009/10/15 6:00', '2009/10/15 7:00', '2009/10/15 8:00', '2009/10/15 9:00', '2009/10/15 10:00', '2009/10/15 11:00', '2009/10/15 12:00', '2009/10/15 13:00', '2009/10/15 14:00', '2009/10/15 15:00', '2009/10/15 16:00', '2009/10/15 17:00', '2009/10/15 18:00', '2009/10/15 19:00', '2009/10/15 20:00', '2009/10/15 21:00', '2009/10/15 22:00', '2009/10/15 23:00', '2009/10/16 0:00', '2009/10/16 1:00', '2009/10/16 2:00', '2009/10/16 3:00', '2009/10/16 4:00', '2009/10/16 5:00', '2009/10/16 6:00', '2009/10/16 7:00', '2009/10/16 8:00', '2009/10/16 9:00', '2009/10/16 10:00', '2009/10/16 11:00', '2009/10/16 12:00', '2009/10/16 13:00', '2009/10/16 14:00', '2009/10/16 15:00', '2009/10/16 16:00', '2009/10/16 17:00', '2009/10/16 18:00', '2009/10/16 19:00', '2009/10/16 20:00', '2009/10/16 21:00', '2009/10/16 22:00', '2009/10/16 23:00', '2009/10/17 0:00', '2009/10/17 1:00', '2009/10/17 2:00', '2009/10/17 3:00', '2009/10/17 4:00', '2009/10/17 5:00', '2009/10/17 6:00', '2009/10/17 7:00', '2009/10/17 8:00', '2009/10/17 9:00', '2009/10/17 10:00', '2009/10/17 11:00', '2009/10/17 12:00', '2009/10/17 13:00', '2009/10/17 14:00', '2009/10/17 15:00', '2009/10/17 16:00', '2009/10/17 17:00', '2009/10/17 18:00', '2009/10/17 19:00', '2009/10/17 20:00', '2009/10/17 21:00', '2009/10/17 22:00', '2009/10/17 23:00', '2009/10/18 0:00', '2009/10/18 1:00', '2009/10/18 2:00', '2009/10/18 3:00', '2009/10/18 4:00', '2009/10/18 5:00', '2009/10/18 6:00', '2009/10/18 7:00', '2009/10/18 8:00'
									].map(function (str) {
										return str.replace(' ', '\n')
									})
								}
							],
							yAxis: [
								{
									name: '流量(m^3/s)',
									type: 'value',
									max: 500
								},
								{
									name: '降雨量(mm)',
									nameLocation: 'start',
									max: 5,
									type: 'value',
									inverse: true
								}
							],
							series: [
								{
									name:'流量',
									type:'line',
									hoverAnimation: false,
									areaStyle: {
										normal: {}
									},
									lineStyle: {
										normal: {
											width: 1
										}
									},
									data:[
										0.97,0.96,0.96,0.95,0.95,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.93,0.92,0.91,0.9,0.89,0.88,0.87,0.87,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.87,0.88,0.9,0.93,0.96,0.99,1.03,1.06,1.1,1.14,1.17,1.2,1.23,1.26,1.29,1.33,1.36,1.4,1.43,1.45,1.48,1.49,1.51,1.51,1.5,1.49,1.47,1.44,1.41,1.37,1.34,1.3,1.27,1.24,1.22,1.2,1.19,1.18,1.16,1.15,1.14,1.13,1.12,1.11,1.11,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.09,1.09,1.08,1.07,1.06,1.05,1.04,1.03,1.03,1.02,1.01,1.01,1,0.99,0.98,0.97,0.96,0.96,0.95,0.95,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.93,0.92,0.91,0.9,0.89,0.88,0.87,0.87,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.85,0.84,0.83,0.82,0.81,0.8,0.8,0.79,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.77,0.75,0.73,0.71,0.68,0.65,0.63,0.61,0.59,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.57,0.57,0.57,0.56,0.55,0.55,0.54,0.54,0.53,0.52,0.52,0.51,0.51,0.5,0.5,0.49,0.48,0.48,0.47,0.47,0.47,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.52,0.67,0.9,1.19,1.52,1.87,2.22,2.55,2.84,3.07,3.22,3.28,3.28,3.28,3.28,3.28,3.28,3.28,3.28,3.28,3.28,3.28,3.28,3.28,3.24,3.13,2.97,2.77,2.54,2.3,2.05,1.82,1.62,1.46,1.35,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.3,1.26,1.21,1.14,1.06,0.97,0.89,0.81,0.74,0.69,0.65,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.63,0.63,0.62,0.62,0.61,0.6,0.59,0.59,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.59,0.61,0.63,0.65,0.68,0.71,0.73,0.75,0.77,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.77,0.75,0.73,0.71,0.68,0.65,0.63,0.61,0.59,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.59,0.59,0.6,0.61,0.62,0.62,0.63,0.63,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.65,0.66,0.68,0.69,0.71,0.73,0.74,0.76,0.77,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.79,0.81,0.82,0.84,0.86,0.88,0.9,0.92,0.93,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.93,0.92,0.91,0.9,0.89,0.88,0.87,0.87,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.85,0.84,0.82,0.8,0.78,0.76,0.75,0.73,0.72,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.72,0.73,0.74,0.76,0.78,0.79,0.82,0.84,0.86,0.89,0.91,0.94,0.97,1,1.02,1.05,1.08,1.11,1.14,1.17,1.19,1.22,1.25,1.27,1.29,1.31,1.33,1.35,1.36,1.38,1.39,1.39,1.4,1.4,1.4,1.39,1.37,1.35,1.32,1.29,1.26,1.22,1.18,1.14,1.1,1.05,1.01,0.97,0.93,0.89,0.85,0.82,0.78,0.76,0.74,0.72,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.72,0.73,0.74,0.75,0.77,0.78,0.8,0.82,0.84,0.87,0.89,0.92,0.94,0.97,0.99,1.02,1.05,1.08,1.1,1.13,1.16,1.18,1.21,1.23,1.26,1.28,1.3,1.32,1.34,1.35,1.37,1.38,1.39,1.4,1.41,1.41,1.42,1.42,1.43,1.43,1.43,1.44,1.44,1.44,1.44,1.45,1.45,1.45,1.46,1.46,1.46,1.47,1.47,1.48,1.48,1.49,1.5,1.51,1.54,1.62,1.73,1.88,2.05,2.24,2.45,2.67,2.89,3.11,3.31,3.51,3.69,3.86,4.03,4.18,4.33,4.48,4.62,4.76,4.89,5.02,5.16,5.29,5.43,5.57,5.71,5.86,6.02,6.18,6.36,6.54,6.73,6.93,7.15,7.38,7.62,7.88,8.16,8.46,8.77,9.11,9.46,9.84,10.24,10.67,11.12,11.6,12.3,13.66,16,38.43,82.21,146.6,218.7,226,225.23,223.08,219.78,212,199.82,184.6,168,151.65,137.21,126.31,119.94,115.52,112.06,108.92,105.44,101,94.56,86.36,77.67,69.76,63.9,60.38,57.41,54.84,52.57,50.56,48.71,46.97,45.25,43.48,41.6,39.5,37.19,34.81,32.46,30.27,28.36,26.85,25.86,25.5,25.5,25.5,25.5,25.5,25.5,25.5,25.5,25.5,25.5,25.5,25.5,25.5,25.27,24.65,23.7,22.52,21.17,19.75,18.33,16.98,15.8,14.85,14.23,14,14.02,14.08,14.17,14.29,14.44,14.61,14.8,15.01,15.23,15.47,15.71,15.95,16.19,16.43,16.67,16.89,17.1,17.29,17.46,17.61,17.73,17.82,17.88,17.9,17.63,16.88,15.75,14.33,12.71,10.98,9.23,7.56,6.05,4.81,3.92,3.47,3.28,3.1,2.93,2.76,2.61,2.46,2.32,2.19,2.07,1.96,1.85,1.75,1.66,1.58,1.51,1.44,1.39,1.34,1.29,1.26,1.23,1.22,1.2,1.2,1.2,1.2,1.2,1.2,1.21,1.21,1.21,1.21,1.22,1.22,1.22,1.23,1.23,1.23,1.24,1.24,1.25,1.25,1.25,1.26,1.26,1.27,1.27,1.27,1.28,1.28,1.28,1.29,1.29,1.29,1.29,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.29,1.29,1.29,1.29,1.28,1.28,1.28,1.27,1.27,1.26,1.25,1.25,1.24,1.23,1.23,1.22,1.21,1.2,1.16,1.06,0.95,0.83,0.74,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.7,0.7,0.7,0.7,0.7,0.7,0.7,0.7,0.7,0.7,0.7,0.69,0.69,0.69,0.69,0.69,0.69,0.69,0.69,0.68,0.68,0.68,0.68,0.68,0.68,0.67,0.67,0.67,0.67,0.67,0.67,0.67,0.66,0.66,0.66,0.66,0.66,0.66,0.66,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.65,0.66,0.68,0.69,0.71,0.73,0.74,0.76,0.77,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.8,0.86,0.95,1.08,1.25,1.46,1.7,1.97,2.28,2.63,3.01,3.42,3.87,4.35,4.86,5.4,5.98,6.59,7.92,10.49,14.04,18.31,23.04,27.98,32.87,37.45,41.46,44.64,46.74,47.5,46.86,45.16,42.77,40.04,37.33,35,32.74,30.21,27.7,25.5,23.9,23.2,23.06,22.94,22.84,22.77,22.72,22.7,22.8,23.23,23.95,24.91,26.04,27.3,28.76,30.7,33.39,37.12,42.15,48.77,65.22,252.1,257,237.32,221.19,212,208.67,206.89,205.2,202.15,189.82,172,165.3,160.49,156.8,153.44,149.62,144.6,138.27,131,123.11,114.9,106.69,98.79,91.5,85.13,80,75.53,71.03,66.65,62.54,58.85,55.73,53.31,51.75,51.2,56.53,68.25,80,91.01,102.03,109,112.37,115.29,117.68,119.48,120.61,121,119.45,115.57,110.52,105.47,101.58,100,99.97,99.94,99.92,99.9,99.88,99.86,99.85,99.84,99.83,99.82,99.81,99.81,99.8,99.8,99.8,122.15,163.65,186,182.96,175.15,164.56,153.18,143,136,131.37,126.98,122.81,118.85,115.09,111.52,108.13,104.9,101.83,98.9,96.11,93.44,90.87,88.41,86.04,83.74,81.51,79.33,77.2,75.1,73.02,70.95,68.88,66.8,64.87,63.14,61.4,59.53,57.67,56,54.6,53.36,52.2,51.05,49.85,48.5,46.87,44.92,42.74,40.42,38.04,35.69,33.46,31.44,29.72,28.38,27.51,27.2,27.2,27.2,27.2,27.2,27.2,27.2,27.2,27.2,27.2,27.2,27.2,27.2,27.14,26.97,26.7,26.35,25.95,25.49,25.02,24.53,24.04,23.58,23.16,22.8,22.46,22.11,21.75,21.39,21.03,20.69,20.36,20.05,19.78,19.54,19.35,19.2,19.09,19,18.92,18.85,18.79,18.74,18.68,18.62,18.56,18.49,18.4,18.3,18.17,18.02,17.83,17.63,17.41,17.18,16.93,16.68,16.43,16.18,15.93,15.7,15.47,15.22,14.97,14.71,14.45,14.18,13.93,13.68,13.44,13.21,13,12.8,12.62,12.46,12.31,12.16,12.03,11.89,11.76,11.62,11.48,11.33,11.17,11,10.81,10.59,10.36,10.12,9.86,9.61,9.36,9.12,8.89,8.68,8.5,8.35,8.21,8.08,7.94,7.81,7.68,7.56,7.46,7.36,7.29,7.23,7.19,7.18,7.51,8.42,9.81,11.58,13.63,15.86,18.16,20.44,22.58,24.49,26.06,27.2,28.08,28.95,29.81,30.65,31.48,32.28,33.07,33.82,34.55,35.25,35.92,36.56,37.15,37.71,38.23,38.7,39.13,39.5,39.83,40.1,40.31,40.47,40.57,40.6,40.49,40.16,39.64,38.94,38.09,37.1,36,34.79,33.51,32.17,30.79,29.39,27.99,26.6,25.25,23.96,22.75,21.63,20.63,19.76,19.04,18.49,18.14,18,17.97,17.95,17.94,17.92,17.91,17.9,17.89,17.88,17.87,17.85,17.83,17.8,17.7,17.46,17.13,16.7,16.21,15.68,15.13,14.57,14.04,13.56,13.14,12.8,12.52,12.27,12.02,11.79,11.57,11.37,11.16,10.97,10.78,10.59,10.39,10.2,10.01,9.81,9.63,9.44,9.26,9.08,8.9,8.73,8.56,8.39,8.22,8.06,7.9,7.73,7.57,7.41,7.25,7.09,6.94,6.79,6.65,6.52,6.4,6.28,6.17,6.08,5.98,5.9,5.81,5.73,5.65,5.57,5.49,5.41,5.32,5.23,5.14,5.04,4.94,4.84,4.74,4.63,4.53,4.43,4.33,4.23,4.13,4.03,3.93,3.81,3.69,3.57,3.45,3.33,3.22,3.12,3.04,2.98,2.93,2.92,2.92,2.92,2.92,2.92,2.92,2.92,2.92,2.92,2.92,2.92,2.92,2.92,2.9,2.86,2.8,2.71,2.62,2.52,2.42,2.33,2.24,2.18,2.14,2.12,2.12,2.12,2.12,2.12,2.12,2.12,2.12,2.12,2.12,2.12,2.12,2.12,2.1,2.06,2,1.91,1.82,1.71,1.61,1.5,1.4,1.32,1.25,1.2,1.16,1.13,1.1,1.06,1.03,1,0.97,0.93,0.9,0.87,0.85,0.82,0.79,0.77,0.74,0.72,0.69,0.67,0.65,0.63,0.61,0.59,0.58,0.56,0.54,0.53,0.52,0.51,0.5,0.49,0.48,0.48,0.47,0.47,0.46,0.46,0.47,0.48,0.5,0.53,0.56,0.59,0.62,0.64,0.67,0.69,0.7,0.71,0.71,0.71,0.71,0.7,0.7,0.7,0.69,0.69,0.69,0.68,0.68,0.67,0.67,0.67,0.66,0.66,0.65,0.65,0.65,0.65,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.65,0.65,0.65,0.66,0.66,0.67,0.68,0.69,0.69,0.7,0.71,0.73,0.74,0.75,0.76,0.78,0.8,0.81,0.83,0.85,0.87,0.89,0.92,0.94,0.97,0.99,1.02,1.05,1.08,1.11,1.15,1.18,1.32,1.66,2.21,2.97,3.94,5.11,6.5,8.1,9.9,11.92,14.15,16.6,22.3,22.8,24.48,30.38,35.74,42.4,57.14,94.04,112.9,123.4,130.4,130,119.4,120.7,116.8,118.1,119.4,124.8,143.5,204,294,319.2,328.4,365,350.8,347.6,347.6,325,331.6,319.2,308,308,308,308,296.8,300,281,278.4,270.6,271,253.6,233.5,219.2,207.8,205.9,204,189.6,178.8,173.4,160,154.4,146,145,140.5,130.4,126.2,116.8,112.9,106.5,101.6,98.51,82.67,67.3,80.05,76.12,72.3,71.02,69.78,67.3,67.3,68.54,57.6,71.02,66.06,59.12,57.14,55.16,55.16,52.19,52.19,51.2,48.56,44.16,43,45.92,49.44,44.16,36.48,35.74,35,32.36,37.22,32.36,32.36,32.36,33.68,32.36,31.7,35.74,29.72,32.36,30.38,29.72,28.4,28.4,28.4,27.28,25.6,25.04,23.92,22.3,21.8,21.8,21.8,22.8,21.8,25.6,22.8,22.8,17.8,16.04,16.04,16.04,16.04,16.04,16.04,16.04,16.04,16.04,16.04,15.02,14,14.03,14.11,14.25,14.45,14.72,15.06,15.46,15.95,16.51,17.15,17.87,18.69,19.59,20.59,21.69,22.88,24.18,25.59,27.1,28.73,30.48,32.34,34.33,36.44,38.69,41.06,43.57,46.22,49.01,51.95,55.04,58.27,61.66,65.21,68.92,72.8,88.09,104.9,105.7,110.3,111.6,110.3,106.5,105.7,103.3,100,97.02,98.8,91.07,83.98,88.09,81.36,78.74,77.43,77.43,73.5,74.81,72.63,68.58,66.4,68.54,69.78,67.3,64.82,61.1,59.12,56.15,53.18,50.32,49.44,44.16,36.5,42.4,37.96,37.22,33.68,36.48,35.74,35,35,37.22,37.22,39.44,32.6,34.54,36.48,35.74,34.34,33.68,33.02,31.04,29.72,29.72,29.72,26.16,25.6,29.72,18.3,22.3,21.3,21.8,21.8,20.3,20.8,25.04,25.04,25.6,25.6,25.04,25.6,25.04,25.6,23.92,25.04,21.3,21.8,22.3,21.8,20.8,16.1,20.3,18.3,13.22,19.3,19.3,18.3,14.4,13.86,13.36,12.9,12.48,12.1,11.75,11.43,11.15,10.9,10.67,10.48,10.31,10.16,10.04,9.93,9.85,9.78,9.73,9.69,9.67,9.65,9.65,12.08,8.67,11.7,11.38,10.65,9.84,9.32,9.07,8.85,8.66,8.49,8.35,8.22,8.1,7.98,7.86,7.74,7.61,7.47,7.31,7.14,6.96,6.78,6.58,6.39,6.19,5.99,5.78,5.58,5.39,5.2,5.01,4.83,4.67,4.51,4.37,4.24,4.12,4.02,3.95,3.89,3.85,3.84,4.41,5.77,7.39,8.75,9.32,9.18,9,8.94,8.88,8.83,8.78,8.73,8.68,8.64,8.6,8.56,8.53,8.5,8.47,8.45,8.42,8.4,8.39,8.37,8.36,8.35,8.35,8.34,8.34,8.67,9.65,9.62,9.53,9.4,9.21,8.98,8.7,8.4,8.06,7.69,7.3,6.89,6.47,6.03,5.59,5.14,4.7,4.26,3.83,3.42,3.02,2.65,2.3,1.98,1.7,1.45,1.25,1.09,0.99,0.94,0.92,0.91,0.89,0.87,0.85,0.84,0.82,0.81,0.79,0.78,0.77,0.75,0.74,0.73,0.72,0.71,0.7,0.69,0.68,0.67,0.66,0.65,0.64,0.64,0.63,0.63,0.62,0.62,0.61,0.61,0.61,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.61,0.61,0.61,0.61,0.61,0.61,0.62,0.62,0.62,0.62,0.63,0.63,0.63,0.63,0.63,0.64,0.64,0.64,0.64,0.64,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.64,0.63,0.62,0.6,0.59,0.57,0.55,0.54,0.53,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.51,0.51,0.51,0.5,0.5,0.49,0.48,0.47,0.47,0.46,0.45,0.45,0.44,0.43,0.42,0.42,0.41,0.41,0.41,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.41,0.42,0.43,0.44,0.46,0.48,0.5,0.53,0.55,0.58,0.61,0.64,0.67,0.7,0.73,0.77,0.8,0.83,0.87,0.9,0.93,0.96,0.99,1.02,1.05,1.08,1.1,1.12,1.14,1.16,1.17,1.18,1.19,1.2,1.2,1.2,1.19,1.17,1.15,1.12,1.09,1.06,1.02,0.98,0.94,0.9,0.86,0.82,0.78,0.74,0.7,0.66,0.63,0.6,0.57,0.55,0.53,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.51,0.51,0.5,0.5,0.49,0.49,0.48,0.47,0.47,0.47,0.46,0.46,0.45,0.45,0.45,0.44,0.44,0.44,0.43,0.43,0.43,0.42,0.42,0.42,0.41,0.41,0.41,0.41,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.41,0.41,0.41,0.41,0.41,0.41,0.41,0.41,0.41,0.41,0.41,0.41,0.41,0.41,0.41,0.42,0.42,0.42,0.42,0.42,0.42,0.42,0.42,0.42,0.43,0.43,0.43,0.43,0.43,0.43,0.44,0.44,0.44,0.44,0.44,0.44,0.45,0.45,0.45
									]
								},
								{
									name:'降雨量',
									type:'line',
									yAxisIndex:1,
									hoverAnimation: false,
									areaStyle: {
										normal: {}
									},
									lineStyle: {
										normal: {
											width: 1
										}
									},
									data: [
										0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.005,0.017,0.017,0.017,0.017,0.011,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.021,0.026,0.03,0.036,0.036,0.195,0.221,0.019,0.013,0.017,0.03,0.03,0.03,0.046,0.045,0.038,0.084,0.045,0.045,0.037,0.034,0.035,0.036,0.044,0.052,0.048,0.109,0.033,0.029,0.04,0.042,0.042,0.042,0.073,0.076,0.062,0.066,0.066,0.075,0.096,0.128,0.121,0.128,0.14,0.226,0.143,0.097,0.018,0,0,0,0,0,0.018,0.047,0.054,0.054,0.054,0.036,0.185,0.009,0.038,0.061,0.077,0.091,0.126,0.69,0.182,0.349,0.231,0.146,0.128,0.167,0.1,0.075,0.071,0.071,0.117,0.01,0.002,0.002,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.005,0.026,0.038,0.038,0.038,0.076,0.086,0.109,0.213,0.276,0.288,0.297,0.642,1.799,1.236,2.138,0.921,0.497,0.685,0.828,0.41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.018,0.024,0.024,0.024,0.024,0.006,0.003,0.046,0.046,0.046,0.046,0.043,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.204,0.303,1.028,1.328,1.524,1.41,1.362,1.292,1.191,0.529,0.501,0.944,1.81,2.899,0.859,0.126,0.087,0.047,0,0,0,0,0.011,0.028,0.028,0.028,0.028,0.017,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.099,0.159,0.297,0.309,0.309,0.614,0.818,1.436,1.195,0.553,0.542,0.955,0.898,0.466,0.386,0.556,0.388,0.221,0.192,0.192,0.187,0.166,0.18,0.302,0.158,0.009,0.009,0.009,0.009,0.009,0.007,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.004,0.032,0.032,0.032,0.032,0.082,0.149,0.204,0.247,0.262,0.49,0.51,0.533,0.746,0.847,2.393,1.188,1.114,0.475,0.043,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.017,0.017,0.021,0.042,0.079,0.111,0.126,0.122,0.133,0.846,0.102,0.077,0.067,0.056,0.005,0,0,0,0,0,0,0,0,0,0,0,0,0,0.011,0.017,0.017,0.017,0.017,0.006,0,0,0,0,0,0.01,0.03,0.054,0.067,0.07,0.25,0.251,0.494,0.065,0.054,0.054,0.064,0.084,0.077,0.101,0.132,0.248,0.069,0.117,0.115,0.087,0.326,0.036,0.009,0.009,0.009,0.009,0.009,0.004,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.02,0.039,0.04,0.04,0.04,0.229,0.079,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.023,0.069,0.082,0.082,0.082,0.503,0.774,0.038,0.012,0.012,0.012,0.016,0.02,0.028,0.051,0.06,0.064,0.19,0.15,0.164,0.139,0.13,0.085,0.031,0.023,0.022,0.007,0.005,0.005,0.001,0,0.02,0.048,0.048,0.053,0.056,0.036,0.008,0.008,0.004,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.013,0.017,0.036,0.068,0.095,0.233,0.272,0.377,0.722,1.494,3.756,0.954,0.439,0.442,0.462,0.373,0.249,0.214,0.1,0.044,0.037,0.023,0.002,0,0,0,0,0,0,0.02,0.024,0.024,0.024,0.024,0.004,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.008,0.017,0.017,0.045,0.186,0.308,0.241,0.241,0.893,4.067,4.494,5.015,3.494,2.057,1.411,0.718,0.407,0.313,0.339,1.537,1.105,0.218,0.136,0.03,0.005,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.037,0.448,1.2,1.309,1.309,1.425,1.223,0.471,0.767,0.423,0.273,0.412,0.646,0.481,0.239,0.131,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.044,0.15,0.223,0.388,0.513,0.883,2.828,4.786,5.959,4.95,6.434,6.319,3.35,2.806,4.204,1.395,1.015,1.015,0.836,0.74,0.72,0.615,0.477,0.192,0.046,0.007,0.007,0.007,0.007,0.007,0.007,0.007,0.008,0.005,0.005,0.005,0.005,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.001,0.012,0.012,0.012,0.012,0.011,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.002,0.012,0.028,0.028,0.028,0.138,0.092,0.082,0.082,0.096,0.719,0.155,0.042,0.047,0.129,0.021,0.021,0.014,0.009,0.029,0.067,0.088,0.095,0.095,0.138,0.091,0.032,0.025,0.025,0.003,0,0,0,0,0,0,0,0,0,0,0,0,0.002,0.045,0.228,0.297,0.325,0.339,0.581,1.244,0.796,0.517,0.227,0.053,0.006,0,0,0,0,0,0,0,0,0,0.003,0.005,0.005,0.005,0.005,0.081,0.129,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.014,0.041,0.041,0.041,0.041,0.027,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.009,0.017,0.017,0.017,0.017,0.355,0.174,0.009,0.009,0.012,0.136,0.208,0.208,0.208,0.215,7.359,1.858,0.458,0.053,0.053,0.047,0.045,0.045,0.059,0.136,0.188,0.206,0.21,0.588,1.517,6.02,4.688,4.42,0.624,0.326,0.359,0.553,0.899,0.94,2.95,9.415,5.752,1.092,0.096,0.035,0.026,0.018,0.015,0.011,0.011,0.011,0,0,0,0,0,0,0,0,0,0,0,0.056,0.27,0.314,0.351,0.354,0.609,0.796,1.857,0.848,0.538,0.214,0.178,0.178,0.201,0.231,0.227,0.272,0.397,0.45,1.014,2.917,1.675,0.081,0.059,0.059,0.148,0.075,0.075,0.078,0.236,0.784,0.784,0.784,0.784,0.741,0.115,0.058,0.058,0.058,0.029,0.015,0.015,0.015,0.015,0.012,0.008,0.604,0.985,1.305,2.273,2.528,2.336,2.496,2.281,1.397,1.713,3.259,1.167,0.745,0.548,1.058,0.684,0.728,0.392,0.179,0.283,0.283,0.46,0.08,0.099,0.099,0.099,0.1,0.143,0.137,0.238,0.317,0.262,0.225,0.792,0.426,0.332,0.261,0.11,0.093,0.102,0.171,0.292,0.504,0.605,1.745,2.485,1.964,0.33,0.171,0.259,0.242,0.215,0.366,0.354,0.205,0.203,0.262,0.153,0.13,0.137,0.362,0.691,0.295,0.433,0.154,0.056,0.053,0.053,0.053,0.051,0.047,0.065,0.078,0.091,0.206,0.813,0.102,0.151,0.05,0.024,0.004,0.001,0,0,0,0.021,0.021,0.021,0.021,0.021,0.013,0.013,0.013,0.013,0.013,0.013,0.013,0.013,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.008,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.018,0.021,0.021,0.021,0.021,0.003,0,0,0,0,0,0,0,0,0,0.024,0.173,0.261,0.267,0.267,0.534,1.354,1.772,0.72,0.218,0.018,0.018,0.028,0.036,0.032,0.194,0.082,0.035,0.286,0.027,0.038,0.038,0.027,0.021,0.014,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.016,0.017,0.017,0.031,0.047,0.043,0.056,0.104,0.149,0.179,0.205,0.328,0.998,0.522,1.851,3.727,3.273,2.204,1.169,1.006,1.179,0.74,0.741,1.065,0.925,0.671,0.497,0.431,0.327,0.277,0.126,0.581,0.207,0.359,2.485,0.038,0.036,0.003,0.003,0.003,0.003,0.004,0.098,0.023,0.021,0.021,0.022,0.041,0.041,0.043,0.045,0.043,0.014,0.014,0.014,0.014,0.014,0.014,0.014,0.031,0.046,0.063,0.119,0.107,0.092,0.085,0.065,0.06,0.054,0.042,0.039,0.046,0.044,0.028,0.028,0.02,0.013,0.013,0.013,0.013,0.016,0.032,0.031,0.031,0.031,0.028,0.011,0.011,0.011,0.011,0.011,0.023,0.024,0.024,0.024,0.019,0.015,0.015,0.015,0.015,0.015,0.015,0.013,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.001,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.011,0.017,0.024,0.026,0.061,0.172,0.206,0.213,0.267,0.511,0.668,0.157,0.017,0.017,0.017,0.046,0.054,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.001,0.017,0.017,0.017,0.017,0.016,0,0,0,0,0,0,0,0,0,0.01,0.017,0.017,0.017,0.017,0.012,0.017,0.017,0.017,0.017,0.012,0,0,0,0,0,0.003,0.031,0.066,0.093,0.112,0.122,0.202,0.068,0.041,0.022,0.011,0,0,0,0,0,0,0,0,0,0,0,0.002,0.005,0.012,0.021,0.021,0.019,0.033,0.03,0.026,0.026,0.034,0.095,0.024,0.024,0.024,0.023,0.019,0.018,0.018,0.018,0.011,0.03,0.045,0.044,0.044,0.044,0.022,0.009,0.024,0.033,0.033,0.033,0.024,0.009,0,0,0,0,0,0,0.003,0.017,0.017,0.017,0.017,0.014,0,0,0,0,0,0.032,0.032,0.032,0.032,0.032,0.005,0.008,0.009,0.014,0.014,0.009,0.005,0.004,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.007,0.009,0.009,0.009,0.009,0.043,0.063,0.084,0.098,0.101,0.213,0.334,0.383,0.43,0.448,0.511,0.801,0.835,1.642,1.614,1.496,1.496,1.476,1.068,0.481,0.22,0.119,0.099,0.07,0.072,0.063,0.076,0.14,0.205,0.28,0.297,0.3,0.479,0.877,1.098,1.611,1.629,1.686,1.686,1.631,1.528,1.862,1.703,1.531,2.196,0.395,0.416,0.453,0.728,0.917,0.986,1.17,2.171,3.011,2.909,3.301,1.377,0.778,0.799,0.947,1.039,0.879,0.76,1.372,1.674,1.674,1.68,1.823,1.793,1.162,0.783,0.216,0.152,0.152,0.152,0.049,0,0,0,0.117,0.127,0.127,0.127,0.127,0.127,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.003,0.005,0.005,0.005,0.005,0.003,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.309,0.364,0.364,0.364,0.364,0.063,0.01,0.01,0.01,0.012,0.015,0.015,0.11,0.55,0.824,0.825,0.829,1.39,1.429,1.342,1.43,1.636,1.717,2.135,2.203,3.191,3.022,1.589,0.86,0.807,0.645,0.595,0.588,0.557,0.552,1.271,0.708,0.677,0.629,0.714,0.203,0.133,0.061,0.062,0.018,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.001,0.072,0.29,0.438,0.53,0.557,0.873,1.039,1.04,0.208,0.049,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.03,0.039,0.039,0.039,0.039,0.098,0.008,0.007,0.007,0.007,0.007,0.007,0.007,0.007,0.007,0.007,0.056,0.062,0.065,0.065,0.065,0.047,0.216,0.256,0.315,0.4,0.502,0.449,0.47,0.571,0.814,1.153,0.774,0.202,0.086,0.075,0.071,0.032,0.019,0.003,0.004,0.004,0.004,0.004,0.004,0.004,0.007,0.072,0.153,0.256,0.306,0.404,0.698,0.733,0.823,0.715,0.563,0.404,0.293,0.217,0.213,0.202,0.202,0.294,0.704,0.797,1.359,1.101,0.72,0.514,0.539,0.434,0.389,0.387,0.386,0.375,0.369,0.319,0.239,0.183,0.136,0.062,0.052,0.096,0.119,0.119,0.114,0.127,0.132,0.139,0.169,0.191,0.278,0.254,0.214,0.237,0.221,0.143,0.129,0.125,0.109,0.1,0.087,0.06,0.038,0.029,0.029,0.028,0.048,0.053,0.053,0.111,0.125,0.102,0.097,0.097,0.039,0.02,0.02,0.02,0.014,0.004,0.031,0.043,0.047,0.052,0.08,0.144,0.182,0.176,0.171,0.149,0.112,0.025,0,0,0,0,0,0,0,0.016,0.031,0.031,0.031,0.031,0.015,0,0,0,0,0,0.005,0.005,0.005,0.005,0.005,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.005,0.005,0.005,0.005,0.005,0.001,0,0,0
									]
								}
							]
						};

						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-line2": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var base = +new Date(2015, 9, 3);
						var oneDay = 24 * 3600 * 1000;
						var date = [];

						var data = [Math.random() * 150];

						for (var i = 1; i < 100; i++) {
							var now = new Date(base += oneDay);
							date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-'));
							data.push((Math.random() - 0.4) * 20 + data[i - 1]);
						}

						var option = {
							title: {
								x: 'center',
								text: '某楼盘销售情况',
							},
							legend: {
								top: 'bottom',
								data:['意向']
							},
							toolbox: {
								show: true,
								feature: {
									mark: {show: true},
									dataView: {show: true, readOnly: false},
									magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
									restore: {show: true},
									saveAsImage: {show: true}
								}
							},
							xAxis: [
								{
									type: 'category',
									boundaryGap: false,
									data: date
								}
							],
							yAxis: [
								{
									type: 'value',
									max: 500
								}
							],
							dataZoom: {
								type: 'inside',
								start: 60,
								end: 80
							},
							series: [
								{
									name:'成交',
									type:'line',
									smooth:true,
									symbol: 'none',
									stack: 'a',
									areaStyle: {
										normal: {}
									},
									data: data
								}
							]
						};

						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-line3": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var option = {
							title: {
								text: '堆叠区域图'
							},
							tooltip : {
								trigger: 'axis'
							},
							legend: {
								data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
							},
							toolbox: {
								feature: {
									saveAsImage: {}
								}
							},
							grid: {
								left: '3%',
								right: '4%',
								bottom: '3%',
								containLabel: true
							},
							xAxis : [
								{
									type : 'category',
									boundaryGap : false,
									data : ['周一','周二','周三','周四','周五','周六','周日']
								}
							],
							yAxis : [
								{
									type : 'value'
								}
							],
							series : [
								{
									name:'邮件营销',
									type:'line',
									stack: '总量',
									areaStyle: {normal: {}},
									data:[120, 132, 101, 134, 90, 230, 210]
								},
								{
									name:'联盟广告',
									type:'line',
									stack: '总量',
									areaStyle: {normal: {}},
									data:[220, 182, 191, 234, 290, 330, 310]
								},
								{
									name:'视频广告',
									type:'line',
									stack: '总量',
									areaStyle: {normal: {}},
									data:[150, 232, 201, 154, 190, 330, 410]
								},
								{
									name:'直接访问',
									type:'line',
									stack: '总量',
									areaStyle: {normal: {}},
									data:[320, 332, 301, 334, 390, 330, 320]
								},
								{
									name:'搜索引擎',
									type:'line',
									stack: '总量',
									label: {
										normal: {
											show: true,
											position: 'top'
										}
									},
									areaStyle: {normal: {}},
									data:[820, 932, 901, 934, 1290, 1330, 1320]
								}
							]
						};

						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-line4": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						myChart.showLoading();
						$.get('data/asset/data/confidence-band.json', function (data) {
							myChart.hideLoading();

							var base = -data.reduce(function (min, val) {
								return Math.floor(Math.min(min, val.l));
							}, Infinity);
							myChart.setOption(option = {
								title: {
									text: 'Confidence Band',
									subtext: 'Example in MetricsGraphics.js',
									left: 'center'
								},
								tooltip: {
									trigger: 'axis',
									axisPointer: {
										animation: false
									},
									formatter: function (params) {
										return params[2].name + '<br />' + params[2].value;
									}
								},
								grid: {
									left: '3%',
									right: '4%',
									bottom: '3%',
									containLabel: true
								},
								xAxis: {
									type: 'category',
									data: data.map(function (item) {
										return item.date;
									}),
									axisLabel: {
										formatter: function (value, idx) {
											var date = new Date(value);
											return idx === 0 ? value : [date.getMonth() + 1, date.getDate()].join('-');
										}
									},
									splitLine: {
										show: false
									},
									boundaryGap: false
								},
								yAxis: {
									axisLabel: {
										formatter: function (val) {
											return (val - base) * 100 + '%';
										}
									},
									splitNumber: 3,
									splitLine: {
										show: false
									}
								},
								series: [{
									name: 'L',
									type: 'line',
									data: data.map(function (item) {
										return item.l + base;
									}),
									lineStyle: {
										normal: {
											opacity: 0
										}
									},
									stack: 'confidence-band',
									symbol: 'none'
								}, {
									name: 'U',
									type: 'line',
									data: data.map(function (item) {
										return item.u - item.l;
									}),
									lineStyle: {
										normal: {
											opacity: 0
										}
									},
									areaStyle: {
										normal: {
											color: '#ccc'
										}
									},
									stack: 'confidence-band',
									symbol: 'none'
								}, {
									type: 'line',
									data: data.map(function (item) {
										return item.value + base;
									}),
									hoverAnimation: false,
									symbolSize: 6,
									itemStyle: {
										normal: {
											color: '#c23531'
										}
									},
									showSymbol: false
								}]
							});
						});
					}
				});
			},
			"click; .echarts-line5": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {

						var timeData = [
							'2009/6/12 2:00', '2009/6/12 3:00', '2009/6/12 4:00', '2009/6/12 5:00', '2009/6/12 6:00', '2009/6/12 7:00', '2009/6/12 8:00', '2009/6/12 9:00', '2009/6/12 10:00', '2009/6/12 11:00', '2009/6/12 12:00', '2009/6/12 13:00', '2009/6/12 14:00', '2009/6/12 15:00', '2009/6/12 16:00', '2009/6/12 17:00', '2009/6/12 18:00', '2009/6/12 19:00', '2009/6/12 20:00', '2009/6/12 21:00', '2009/6/12 22:00', '2009/6/12 23:00',
							'2009/6/13 0:00', '2009/6/13 1:00', '2009/6/13 2:00', '2009/6/13 3:00', '2009/6/13 4:00', '2009/6/13 5:00', '2009/6/13 6:00', '2009/6/13 7:00', '2009/6/13 8:00', '2009/6/13 9:00', '2009/6/13 10:00', '2009/6/13 11:00', '2009/6/13 12:00', '2009/6/13 13:00', '2009/6/13 14:00', '2009/6/13 15:00', '2009/6/13 16:00', '2009/6/13 17:00', '2009/6/13 18:00', '2009/6/13 19:00', '2009/6/13 20:00', '2009/6/13 21:00', '2009/6/13 22:00', '2009/6/13 23:00',
							'2009/6/14 0:00', '2009/6/14 1:00', '2009/6/14 2:00', '2009/6/14 3:00', '2009/6/14 4:00', '2009/6/14 5:00', '2009/6/14 6:00', '2009/6/14 7:00', '2009/6/14 8:00', '2009/6/14 9:00', '2009/6/14 10:00', '2009/6/14 11:00', '2009/6/14 12:00', '2009/6/14 13:00', '2009/6/14 14:00', '2009/6/14 15:00', '2009/6/14 16:00', '2009/6/14 17:00', '2009/6/14 18:00', '2009/6/14 19:00', '2009/6/14 20:00', '2009/6/14 21:00', '2009/6/14 22:00', '2009/6/14 23:00',
							'2009/6/15 0:00', '2009/6/15 1:00', '2009/6/15 2:00', '2009/6/15 3:00', '2009/6/15 4:00', '2009/6/15 5:00', '2009/6/15 6:00', '2009/6/15 7:00', '2009/6/15 8:00', '2009/6/15 9:00', '2009/6/15 10:00', '2009/6/15 11:00', '2009/6/15 12:00', '2009/6/15 13:00', '2009/6/15 14:00', '2009/6/15 15:00', '2009/6/15 16:00', '2009/6/15 17:00', '2009/6/15 18:00', '2009/6/15 19:00', '2009/6/15 20:00', '2009/6/15 21:00', '2009/6/15 22:00', '2009/6/15 23:00',
							'2009/6/15 0:00', '2009/6/16 1:00', '2009/6/16 2:00', '2009/6/16 3:00', '2009/6/16 4:00', '2009/6/16 5:00', '2009/6/16 6:00', '2009/6/16 7:00', '2009/6/16 8:00', '2009/6/16 9:00', '2009/6/16 10:00', '2009/6/16 11:00', '2009/6/16 12:00', '2009/6/16 13:00', '2009/6/16 14:00', '2009/6/16 15:00', '2009/6/16 16:00', '2009/6/16 17:00', '2009/6/16 18:00', '2009/6/16 19:00', '2009/6/16 20:00', '2009/6/16 21:00', '2009/6/16 22:00', '2009/6/16 23:00',
							'2009/6/15 0:00', '2009/6/17 1:00', '2009/6/17 2:00', '2009/6/17 3:00', '2009/6/17 4:00', '2009/6/17 5:00', '2009/6/17 6:00', '2009/6/17 7:00', '2009/6/17 8:00', '2009/6/17 9:00', '2009/6/17 10:00', '2009/6/17 11:00', '2009/6/17 12:00', '2009/6/17 13:00', '2009/6/17 14:00', '2009/6/17 15:00', '2009/6/17 16:00', '2009/6/17 17:00', '2009/6/17 18:00', '2009/6/17 19:00', '2009/6/17 20:00', '2009/6/17 21:00', '2009/6/17 22:00', '2009/6/17 23:00',
							'2009/6/18 0:00', '2009/6/18 1:00', '2009/6/18 2:00', '2009/6/18 3:00', '2009/6/18 4:00', '2009/6/18 5:00', '2009/6/18 6:00', '2009/6/18 7:00', '2009/6/18 8:00', '2009/6/18 9:00', '2009/6/18 10:00', '2009/6/18 11:00', '2009/6/18 12:00', '2009/6/18 13:00', '2009/6/18 14:00', '2009/6/18 15:00', '2009/6/18 16:00', '2009/6/18 17:00', '2009/6/18 18:00', '2009/6/18 19:00', '2009/6/18 20:00', '2009/6/18 21:00', '2009/6/18 22:00', '2009/6/18 23:00',
							'2009/6/15 0:00', '2009/6/19 1:00', '2009/6/19 2:00', '2009/6/19 3:00', '2009/6/19 4:00', '2009/6/19 5:00', '2009/6/19 6:00', '2009/6/19 7:00', '2009/6/19 8:00', '2009/6/19 9:00', '2009/6/19 10:00', '2009/6/19 11:00', '2009/6/19 12:00', '2009/6/19 13:00', '2009/6/19 14:00', '2009/6/19 15:00', '2009/6/19 16:00', '2009/6/19 17:00', '2009/6/19 18:00', '2009/6/19 19:00', '2009/6/19 20:00', '2009/6/19 21:00', '2009/6/19 22:00', '2009/6/19 23:00',
							'2009/6/20 0:00', '2009/6/20 1:00', '2009/6/20 2:00', '2009/6/20 3:00', '2009/6/20 4:00', '2009/6/20 5:00', '2009/6/20 6:00', '2009/6/20 7:00', '2009/6/20 8:00', '2009/6/20 9:00', '2009/6/20 10:00', '2009/6/20 11:00', '2009/6/20 12:00', '2009/6/20 13:00', '2009/6/20 14:00', '2009/6/20 15:00', '2009/6/20 16:00', '2009/6/20 17:00', '2009/6/20 18:00', '2009/6/20 19:00', '2009/6/20 20:00', '2009/6/20 21:00', '2009/6/20 22:00', '2009/6/20 23:00',
							'2009/6/21 0:00', '2009/6/21 1:00', '2009/6/21 2:00', '2009/6/21 3:00', '2009/6/21 4:00', '2009/6/21 5:00', '2009/6/21 6:00', '2009/6/21 7:00', '2009/6/21 8:00', '2009/6/21 9:00', '2009/6/21 10:00', '2009/6/21 11:00', '2009/6/21 12:00', '2009/6/21 13:00', '2009/6/21 14:00', '2009/6/21 15:00', '2009/6/21 16:00', '2009/6/21 17:00', '2009/6/21 18:00', '2009/6/21 19:00', '2009/6/21 20:00', '2009/6/21 21:00', '2009/6/21 22:00', '2009/6/21 23:00',
							'2009/6/22 0:00', '2009/6/22 1:00', '2009/6/22 2:00', '2009/6/22 3:00', '2009/6/22 4:00', '2009/6/22 5:00', '2009/6/22 6:00', '2009/6/22 7:00', '2009/6/22 8:00', '2009/6/22 9:00', '2009/6/22 10:00', '2009/6/22 11:00', '2009/6/22 12:00', '2009/6/22 13:00', '2009/6/22 14:00', '2009/6/22 15:00', '2009/6/22 16:00', '2009/6/22 17:00', '2009/6/22 18:00', '2009/6/22 19:00', '2009/6/22 20:00', '2009/6/22 21:00', '2009/6/22 22:00', '2009/6/22 23:00',
							'2009/6/23 0:00', '2009/6/23 1:00', '2009/6/23 2:00', '2009/6/23 3:00', '2009/6/23 4:00', '2009/6/23 5:00', '2009/6/23 6:00', '2009/6/23 7:00', '2009/6/23 8:00', '2009/6/23 9:00', '2009/6/23 10:00', '2009/6/23 11:00', '2009/6/23 12:00', '2009/6/23 13:00', '2009/6/23 14:00', '2009/6/23 15:00', '2009/6/23 16:00', '2009/6/23 17:00', '2009/6/23 18:00', '2009/6/23 19:00', '2009/6/23 20:00', '2009/6/23 21:00', '2009/6/23 22:00', '2009/6/23 23:00',
							'2009/6/24 0:00', '2009/6/24 1:00', '2009/6/24 2:00', '2009/6/24 3:00', '2009/6/24 4:00', '2009/6/24 5:00', '2009/6/24 6:00', '2009/6/24 7:00', '2009/6/24 8:00', '2009/6/24 9:00', '2009/6/24 10:00', '2009/6/24 11:00', '2009/6/24 12:00', '2009/6/24 13:00', '2009/6/24 14:00', '2009/6/24 15:00', '2009/6/24 16:00', '2009/6/24 17:00', '2009/6/24 18:00', '2009/6/24 19:00', '2009/6/24 20:00', '2009/6/24 21:00', '2009/6/24 22:00', '2009/6/24 23:00',
							'2009/6/25 0:00', '2009/6/25 1:00', '2009/6/25 2:00', '2009/6/25 3:00', '2009/6/25 4:00', '2009/6/25 5:00', '2009/6/25 6:00', '2009/6/25 7:00', '2009/6/25 8:00', '2009/6/25 9:00', '2009/6/25 10:00', '2009/6/25 11:00', '2009/6/25 12:00', '2009/6/25 13:00', '2009/6/25 14:00', '2009/6/25 15:00', '2009/6/25 16:00', '2009/6/25 17:00', '2009/6/25 18:00', '2009/6/25 19:00', '2009/6/25 20:00', '2009/6/25 21:00', '2009/6/25 22:00', '2009/6/25 23:00',
							'2009/6/26 0:00', '2009/6/26 1:00', '2009/6/26 2:00', '2009/6/26 3:00', '2009/6/26 4:00', '2009/6/26 5:00', '2009/6/26 6:00', '2009/6/26 7:00', '2009/6/26 8:00', '2009/6/26 9:00', '2009/6/26 10:00', '2009/6/26 11:00', '2009/6/26 12:00', '2009/6/26 13:00', '2009/6/26 14:00', '2009/6/26 15:00', '2009/6/26 16:00', '2009/6/26 17:00', '2009/6/26 18:00', '2009/6/26 19:00', '2009/6/26 20:00', '2009/6/26 21:00', '2009/6/26 22:00', '2009/6/26 23:00',
							'2009/6/27 0:00', '2009/6/27 1:00', '2009/6/27 2:00', '2009/6/27 3:00', '2009/6/27 4:00', '2009/6/27 5:00', '2009/6/27 6:00', '2009/6/27 7:00', '2009/6/27 8:00', '2009/6/27 9:00', '2009/6/27 10:00', '2009/6/27 11:00', '2009/6/27 12:00', '2009/6/27 13:00', '2009/6/27 14:00', '2009/6/27 15:00', '2009/6/27 16:00', '2009/6/27 17:00', '2009/6/27 18:00', '2009/6/27 19:00', '2009/6/27 20:00', '2009/6/27 21:00', '2009/6/27 22:00', '2009/6/27 23:00',
							'2009/6/28 0:00', '2009/6/28 1:00', '2009/6/28 2:00', '2009/6/28 3:00', '2009/6/28 4:00', '2009/6/28 5:00', '2009/6/28 6:00', '2009/6/28 7:00', '2009/6/28 8:00', '2009/6/28 9:00', '2009/6/28 10:00', '2009/6/28 11:00', '2009/6/28 12:00', '2009/6/28 13:00', '2009/6/28 14:00', '2009/6/28 15:00', '2009/6/28 16:00', '2009/6/28 17:00', '2009/6/28 18:00', '2009/6/28 19:00', '2009/6/28 20:00', '2009/6/28 21:00', '2009/6/28 22:00', '2009/6/28 23:00',
							'2009/6/29 0:00', '2009/6/29 1:00', '2009/6/29 2:00', '2009/6/29 3:00', '2009/6/29 4:00', '2009/6/29 5:00', '2009/6/29 6:00', '2009/6/29 7:00', '2009/6/29 8:00', '2009/6/29 9:00', '2009/6/29 10:00', '2009/6/29 11:00', '2009/6/29 12:00', '2009/6/29 13:00', '2009/6/29 14:00', '2009/6/29 15:00', '2009/6/29 16:00', '2009/6/29 17:00', '2009/6/29 18:00', '2009/6/29 19:00', '2009/6/29 20:00', '2009/6/29 21:00', '2009/6/29 22:00', '2009/6/29 23:00',
							'2009/6/30 0:00', '2009/6/30 1:00', '2009/6/30 2:00', '2009/6/30 3:00', '2009/6/30 4:00', '2009/6/30 5:00', '2009/6/30 6:00', '2009/6/30 7:00', '2009/6/30 8:00', '2009/6/30 9:00', '2009/6/30 10:00', '2009/6/30 11:00', '2009/6/30 12:00', '2009/6/30 13:00', '2009/6/30 14:00', '2009/6/30 15:00', '2009/6/30 16:00', '2009/6/30 17:00', '2009/6/30 18:00', '2009/6/30 19:00', '2009/6/30 20:00', '2009/6/30 21:00', '2009/6/30 22:00', '2009/6/30 23:00',
							'2009/7/1 0:00', '2009/7/1 1:00', '2009/7/1 2:00', '2009/7/1 3:00', '2009/7/1 4:00', '2009/7/1 5:00', '2009/7/1 6:00', '2009/7/1 7:00', '2009/7/1 8:00', '2009/7/1 9:00', '2009/7/1 10:00', '2009/7/1 11:00', '2009/7/1 12:00', '2009/7/1 13:00', '2009/7/1 14:00', '2009/7/1 15:00', '2009/7/1 16:00', '2009/7/1 17:00', '2009/7/1 18:00', '2009/7/1 19:00', '2009/7/1 20:00', '2009/7/1 21:00', '2009/7/1 22:00', '2009/7/1 23:00',
							'2009/7/2 0:00', '2009/7/2 1:00', '2009/7/2 2:00', '2009/7/2 3:00', '2009/7/2 4:00', '2009/7/2 5:00', '2009/7/2 6:00', '2009/7/2 7:00', '2009/7/2 8:00', '2009/7/2 9:00', '2009/7/2 10:00', '2009/7/2 11:00', '2009/7/2 12:00', '2009/7/2 13:00', '2009/7/2 14:00', '2009/7/2 15:00', '2009/7/2 16:00', '2009/7/2 17:00', '2009/7/2 18:00', '2009/7/2 19:00', '2009/7/2 20:00', '2009/7/2 21:00', '2009/7/2 22:00', '2009/7/2 23:00',
							'2009/7/3 0:00', '2009/7/3 1:00', '2009/7/3 2:00', '2009/7/3 3:00', '2009/7/3 4:00', '2009/7/3 5:00', '2009/7/3 6:00', '2009/7/3 7:00', '2009/7/3 8:00', '2009/7/3 9:00', '2009/7/3 10:00', '2009/7/3 11:00', '2009/7/3 12:00', '2009/7/3 13:00', '2009/7/3 14:00', '2009/7/3 15:00', '2009/7/3 16:00', '2009/7/3 17:00', '2009/7/3 18:00', '2009/7/3 19:00', '2009/7/3 20:00', '2009/7/3 21:00', '2009/7/3 22:00', '2009/7/3 23:00',
							'2009/7/4 0:00', '2009/7/4 1:00', '2009/7/4 2:00', '2009/7/4 3:00', '2009/7/4 4:00', '2009/7/4 5:00', '2009/7/4 6:00', '2009/7/4 7:00', '2009/7/4 8:00', '2009/7/4 9:00', '2009/7/4 10:00', '2009/7/4 11:00', '2009/7/4 12:00', '2009/7/4 13:00', '2009/7/4 14:00', '2009/7/4 15:00', '2009/7/4 16:00', '2009/7/4 17:00', '2009/7/4 18:00', '2009/7/4 19:00', '2009/7/4 20:00', '2009/7/4 21:00', '2009/7/4 22:00', '2009/7/4 23:00',
							'2009/7/5 0:00', '2009/7/5 1:00', '2009/7/5 2:00', '2009/7/5 3:00', '2009/7/5 4:00', '2009/7/5 5:00', '2009/7/5 6:00', '2009/7/5 7:00', '2009/7/5 8:00', '2009/7/5 9:00', '2009/7/5 10:00', '2009/7/5 11:00', '2009/7/5 12:00', '2009/7/5 13:00', '2009/7/5 14:00', '2009/7/5 15:00', '2009/7/5 16:00', '2009/7/5 17:00', '2009/7/5 18:00', '2009/7/5 19:00', '2009/7/5 20:00', '2009/7/5 21:00', '2009/7/5 22:00', '2009/7/5 23:00',
							'2009/7/6 0:00', '2009/7/6 1:00', '2009/7/6 2:00', '2009/7/6 3:00', '2009/7/6 4:00', '2009/7/6 5:00', '2009/7/6 6:00', '2009/7/6 7:00', '2009/7/6 8:00', '2009/7/6 9:00', '2009/7/6 10:00', '2009/7/6 11:00', '2009/7/6 12:00', '2009/7/6 13:00', '2009/7/6 14:00', '2009/7/6 15:00', '2009/7/6 16:00', '2009/7/6 17:00', '2009/7/6 18:00', '2009/7/6 19:00', '2009/7/6 20:00', '2009/7/6 21:00', '2009/7/6 22:00', '2009/7/6 23:00',
							'2009/7/7 0:00', '2009/7/7 1:00', '2009/7/7 2:00', '2009/7/7 3:00', '2009/7/7 4:00', '2009/7/7 5:00', '2009/7/7 6:00', '2009/7/7 7:00', '2009/7/7 8:00', '2009/7/7 9:00', '2009/7/7 10:00', '2009/7/7 11:00', '2009/7/7 12:00', '2009/7/7 13:00', '2009/7/7 14:00', '2009/7/7 15:00', '2009/7/7 16:00', '2009/7/7 17:00', '2009/7/7 18:00', '2009/7/7 19:00', '2009/7/7 20:00', '2009/7/7 21:00', '2009/7/7 22:00', '2009/7/7 23:00',
							'2009/7/8 0:00', '2009/7/8 1:00', '2009/7/8 2:00', '2009/7/8 3:00', '2009/7/8 4:00', '2009/7/8 5:00', '2009/7/8 6:00', '2009/7/8 7:00', '2009/7/8 8:00', '2009/7/8 9:00', '2009/7/8 10:00', '2009/7/8 11:00', '2009/7/8 12:00', '2009/7/8 13:00', '2009/7/8 14:00', '2009/7/8 15:00', '2009/7/8 16:00', '2009/7/8 17:00', '2009/7/8 18:00', '2009/7/8 19:00', '2009/7/8 20:00', '2009/7/8 21:00', '2009/7/8 22:00', '2009/7/8 23:00',
							'2009/7/9 0:00', '2009/7/9 1:00', '2009/7/9 2:00', '2009/7/9 3:00', '2009/7/9 4:00', '2009/7/9 5:00', '2009/7/9 6:00', '2009/7/9 7:00', '2009/7/9 8:00', '2009/7/9 9:00', '2009/7/9 10:00', '2009/7/9 11:00', '2009/7/9 12:00', '2009/7/9 13:00', '2009/7/9 14:00', '2009/7/9 15:00', '2009/7/9 16:00', '2009/7/9 17:00', '2009/7/9 18:00', '2009/7/9 19:00', '2009/7/9 20:00', '2009/7/9 21:00', '2009/7/9 22:00', '2009/7/9 23:00',
							'2009/7/10 0:00', '2009/7/10 1:00', '2009/7/10 2:00', '2009/7/10 3:00', '2009/7/10 4:00', '2009/7/10 5:00', '2009/7/10 6:00', '2009/7/10 7:00', '2009/7/10 8:00', '2009/7/10 9:00', '2009/7/10 10:00', '2009/7/10 11:00', '2009/7/10 12:00', '2009/7/10 13:00', '2009/7/10 14:00', '2009/7/10 15:00', '2009/7/10 16:00', '2009/7/10 17:00', '2009/7/10 18:00', '2009/7/10 19:00', '2009/7/10 20:00', '2009/7/10 21:00', '2009/7/10 22:00', '2009/7/10 23:00',
							'2009/7/11 0:00', '2009/7/11 1:00', '2009/7/11 2:00', '2009/7/11 3:00', '2009/7/11 4:00', '2009/7/11 5:00', '2009/7/11 6:00', '2009/7/11 7:00', '2009/7/11 8:00', '2009/7/11 9:00', '2009/7/11 10:00', '2009/7/11 11:00', '2009/7/11 12:00', '2009/7/11 13:00', '2009/7/11 14:00', '2009/7/11 15:00', '2009/7/11 16:00', '2009/7/11 17:00', '2009/7/11 18:00', '2009/7/11 19:00', '2009/7/11 20:00', '2009/7/11 21:00', '2009/7/11 22:00', '2009/7/11 23:00',
							'2009/7/12 0:00', '2009/7/12 1:00', '2009/7/12 2:00', '2009/7/12 3:00', '2009/7/12 4:00', '2009/7/12 5:00', '2009/7/12 6:00', '2009/7/12 7:00', '2009/7/12 8:00', '2009/7/12 9:00', '2009/7/12 10:00', '2009/7/12 11:00', '2009/7/12 12:00', '2009/7/12 13:00', '2009/7/12 14:00', '2009/7/12 15:00', '2009/7/12 16:00', '2009/7/12 17:00', '2009/7/12 18:00', '2009/7/12 19:00', '2009/7/12 20:00', '2009/7/12 21:00', '2009/7/12 22:00', '2009/7/12 23:00',
							'2009/7/13 0:00', '2009/7/13 1:00', '2009/7/13 2:00', '2009/7/13 3:00', '2009/7/13 4:00', '2009/7/13 5:00', '2009/7/13 6:00', '2009/7/13 7:00', '2009/7/13 8:00', '2009/7/13 9:00', '2009/7/13 10:00', '2009/7/13 11:00', '2009/7/13 12:00', '2009/7/13 13:00', '2009/7/13 14:00', '2009/7/13 15:00', '2009/7/13 16:00', '2009/7/13 17:00', '2009/7/13 18:00', '2009/7/13 19:00', '2009/7/13 20:00', '2009/7/13 21:00', '2009/7/13 22:00', '2009/7/13 23:00',
							'2009/7/14 0:00', '2009/7/14 1:00', '2009/7/14 2:00', '2009/7/14 3:00', '2009/7/14 4:00', '2009/7/14 5:00', '2009/7/14 6:00', '2009/7/14 7:00', '2009/7/14 8:00', '2009/7/14 9:00', '2009/7/14 10:00', '2009/7/14 11:00', '2009/7/14 12:00', '2009/7/14 13:00', '2009/7/14 14:00', '2009/7/14 15:00', '2009/7/14 16:00', '2009/7/14 17:00', '2009/7/14 18:00', '2009/7/14 19:00', '2009/7/14 20:00', '2009/7/14 21:00', '2009/7/14 22:00', '2009/7/14 23:00',
							'2009/7/15 0:00', '2009/7/15 1:00', '2009/7/15 2:00', '2009/7/15 3:00', '2009/7/15 4:00', '2009/7/15 5:00', '2009/7/15 6:00', '2009/7/15 7:00', '2009/7/15 8:00', '2009/7/15 9:00', '2009/7/15 10:00', '2009/7/15 11:00', '2009/7/15 12:00', '2009/7/15 13:00', '2009/7/15 14:00', '2009/7/15 15:00', '2009/7/15 16:00', '2009/7/15 17:00', '2009/7/15 18:00', '2009/7/15 19:00', '2009/7/15 20:00', '2009/7/15 21:00', '2009/7/15 22:00', '2009/7/15 23:00',
							'2009/7/16 0:00', '2009/7/16 1:00', '2009/7/16 2:00', '2009/7/16 3:00', '2009/7/16 4:00', '2009/7/16 5:00', '2009/7/16 6:00', '2009/7/16 7:00', '2009/7/16 8:00', '2009/7/16 9:00', '2009/7/16 10:00', '2009/7/16 11:00', '2009/7/16 12:00', '2009/7/16 13:00', '2009/7/16 14:00', '2009/7/16 15:00', '2009/7/16 16:00', '2009/7/16 17:00', '2009/7/16 18:00', '2009/7/16 19:00', '2009/7/16 20:00', '2009/7/16 21:00', '2009/7/16 22:00', '2009/7/16 23:00',
							'2009/7/17 0:00', '2009/7/17 1:00', '2009/7/17 2:00', '2009/7/17 3:00', '2009/7/17 4:00', '2009/7/17 5:00', '2009/7/17 6:00', '2009/7/17 7:00', '2009/7/17 8:00', '2009/7/17 9:00', '2009/7/17 10:00', '2009/7/17 11:00', '2009/7/17 12:00', '2009/7/17 13:00', '2009/7/17 14:00', '2009/7/17 15:00', '2009/7/17 16:00', '2009/7/17 17:00', '2009/7/17 18:00', '2009/7/17 19:00', '2009/7/17 20:00', '2009/7/17 21:00', '2009/7/17 22:00', '2009/7/17 23:00',
							'2009/7/18 0:00', '2009/7/18 1:00', '2009/7/18 2:00', '2009/7/18 3:00', '2009/7/18 4:00', '2009/7/18 5:00', '2009/7/18 6:00', '2009/7/18 7:00', '2009/7/18 8:00', '2009/7/18 9:00', '2009/7/18 10:00', '2009/7/18 11:00', '2009/7/18 12:00', '2009/7/18 13:00', '2009/7/18 14:00', '2009/7/18 15:00', '2009/7/18 16:00', '2009/7/18 17:00', '2009/7/18 18:00', '2009/7/18 19:00', '2009/7/18 20:00', '2009/7/18 21:00', '2009/7/18 22:00', '2009/7/18 23:00',
							'2009/7/19 0:00', '2009/7/19 1:00', '2009/7/19 2:00', '2009/7/19 3:00', '2009/7/19 4:00', '2009/7/19 5:00', '2009/7/19 6:00', '2009/7/19 7:00', '2009/7/19 8:00', '2009/7/19 9:00', '2009/7/19 10:00', '2009/7/19 11:00', '2009/7/19 12:00', '2009/7/19 13:00', '2009/7/19 14:00', '2009/7/19 15:00', '2009/7/19 16:00', '2009/7/19 17:00', '2009/7/19 18:00', '2009/7/19 19:00', '2009/7/19 20:00', '2009/7/19 21:00', '2009/7/19 22:00', '2009/7/19 23:00',
							'2009/7/20 0:00', '2009/7/20 1:00', '2009/7/20 2:00', '2009/7/20 3:00', '2009/7/20 4:00', '2009/7/20 5:00', '2009/7/20 6:00', '2009/7/20 7:00', '2009/7/20 8:00', '2009/7/20 9:00', '2009/7/20 10:00', '2009/7/20 11:00', '2009/7/20 12:00', '2009/7/20 13:00', '2009/7/20 14:00', '2009/7/20 15:00', '2009/7/20 16:00', '2009/7/20 17:00', '2009/7/20 18:00', '2009/7/20 19:00', '2009/7/20 20:00', '2009/7/20 21:00', '2009/7/20 22:00', '2009/7/20 23:00',
							'2009/7/21 0:00', '2009/7/21 1:00', '2009/7/21 2:00', '2009/7/21 3:00', '2009/7/21 4:00', '2009/7/21 5:00', '2009/7/21 6:00', '2009/7/21 7:00', '2009/7/21 8:00', '2009/7/21 9:00', '2009/7/21 10:00', '2009/7/21 11:00', '2009/7/21 12:00', '2009/7/21 13:00', '2009/7/21 14:00', '2009/7/21 15:00', '2009/7/21 16:00', '2009/7/21 17:00', '2009/7/21 18:00', '2009/7/21 19:00', '2009/7/21 20:00', '2009/7/21 21:00', '2009/7/21 22:00', '2009/7/21 23:00',
							'2009/7/22 0:00', '2009/7/22 1:00', '2009/7/22 2:00', '2009/7/22 3:00', '2009/7/22 4:00', '2009/7/22 5:00', '2009/7/22 6:00', '2009/7/22 7:00', '2009/7/22 8:00', '2009/7/22 9:00', '2009/7/22 10:00', '2009/7/22 11:00', '2009/7/22 12:00', '2009/7/22 13:00', '2009/7/22 14:00', '2009/7/22 15:00', '2009/7/22 16:00', '2009/7/22 17:00', '2009/7/22 18:00', '2009/7/22 19:00', '2009/7/22 20:00', '2009/7/22 21:00', '2009/7/22 22:00', '2009/7/22 23:00',
							'2009/7/23 0:00', '2009/7/23 1:00', '2009/7/23 2:00', '2009/7/23 3:00', '2009/7/23 4:00', '2009/7/23 5:00', '2009/7/23 6:00', '2009/7/23 7:00', '2009/7/23 8:00', '2009/7/23 9:00', '2009/7/23 10:00', '2009/7/23 11:00', '2009/7/23 12:00', '2009/7/23 13:00', '2009/7/23 14:00', '2009/7/23 15:00', '2009/7/23 16:00', '2009/7/23 17:00', '2009/7/23 18:00', '2009/7/23 19:00', '2009/7/23 20:00', '2009/7/23 21:00', '2009/7/23 22:00', '2009/7/23 23:00',
							'2009/7/24 0:00', '2009/7/24 1:00', '2009/7/24 2:00', '2009/7/24 3:00', '2009/7/24 4:00', '2009/7/24 5:00', '2009/7/24 6:00', '2009/7/24 7:00', '2009/7/24 8:00', '2009/7/24 9:00', '2009/7/24 10:00', '2009/7/24 11:00', '2009/7/24 12:00', '2009/7/24 13:00', '2009/7/24 14:00', '2009/7/24 15:00', '2009/7/24 16:00', '2009/7/24 17:00', '2009/7/24 18:00', '2009/7/24 19:00', '2009/7/24 20:00', '2009/7/24 21:00', '2009/7/24 22:00', '2009/7/24 23:00',
							'2009/7/25 0:00', '2009/7/25 1:00', '2009/7/25 2:00', '2009/7/25 3:00', '2009/7/25 4:00', '2009/7/25 5:00', '2009/7/25 6:00', '2009/7/25 7:00', '2009/7/25 8:00', '2009/7/25 9:00', '2009/7/25 10:00', '2009/7/25 11:00', '2009/7/25 12:00', '2009/7/25 13:00', '2009/7/25 14:00', '2009/7/25 15:00', '2009/7/25 16:00', '2009/7/25 17:00', '2009/7/25 18:00', '2009/7/25 19:00', '2009/7/25 20:00', '2009/7/25 21:00', '2009/7/25 22:00', '2009/7/25 23:00',
							'2009/7/26 0:00', '2009/7/26 1:00', '2009/7/26 2:00', '2009/7/26 3:00', '2009/7/26 4:00', '2009/7/26 5:00', '2009/7/26 6:00', '2009/7/26 7:00', '2009/7/26 8:00', '2009/7/26 9:00', '2009/7/26 10:00', '2009/7/26 11:00', '2009/7/26 12:00', '2009/7/26 13:00', '2009/7/26 14:00', '2009/7/26 15:00', '2009/7/26 16:00', '2009/7/26 17:00', '2009/7/26 18:00', '2009/7/26 19:00', '2009/7/26 20:00', '2009/7/26 21:00', '2009/7/26 22:00', '2009/7/26 23:00',
							'2009/7/27 0:00', '2009/7/27 1:00', '2009/7/27 2:00', '2009/7/27 3:00', '2009/7/27 4:00', '2009/7/27 5:00', '2009/7/27 6:00', '2009/7/27 7:00', '2009/7/27 8:00', '2009/7/27 9:00', '2009/7/27 10:00', '2009/7/27 11:00', '2009/7/27 12:00', '2009/7/27 13:00', '2009/7/27 14:00', '2009/7/27 15:00', '2009/7/27 16:00', '2009/7/27 17:00', '2009/7/27 18:00', '2009/7/27 19:00', '2009/7/27 20:00', '2009/7/27 21:00', '2009/7/27 22:00', '2009/7/27 23:00',
							'2009/7/28 0:00', '2009/7/28 1:00', '2009/7/28 2:00', '2009/7/28 3:00', '2009/7/28 4:00', '2009/7/28 5:00', '2009/7/28 6:00', '2009/7/28 7:00', '2009/7/28 8:00', '2009/7/28 9:00', '2009/7/28 10:00', '2009/7/28 11:00', '2009/7/28 12:00', '2009/7/28 13:00', '2009/7/28 14:00', '2009/7/28 15:00', '2009/7/28 16:00', '2009/7/28 17:00', '2009/7/28 18:00', '2009/7/28 19:00', '2009/7/28 20:00', '2009/7/28 21:00', '2009/7/28 22:00', '2009/7/28 23:00',
							'2009/7/29 0:00', '2009/7/29 1:00', '2009/7/29 2:00', '2009/7/29 3:00', '2009/7/29 4:00', '2009/7/29 5:00', '2009/7/29 6:00', '2009/7/29 7:00', '2009/7/29 8:00', '2009/7/29 9:00', '2009/7/29 10:00', '2009/7/29 11:00', '2009/7/29 12:00', '2009/7/29 13:00', '2009/7/29 14:00', '2009/7/29 15:00', '2009/7/29 16:00', '2009/7/29 17:00', '2009/7/29 18:00', '2009/7/29 19:00', '2009/7/29 20:00', '2009/7/29 21:00', '2009/7/29 22:00', '2009/7/29 23:00',
							'2009/7/30 0:00', '2009/7/30 1:00', '2009/7/30 2:00', '2009/7/30 3:00', '2009/7/30 4:00', '2009/7/30 5:00', '2009/7/30 6:00', '2009/7/30 7:00', '2009/7/30 8:00', '2009/7/30 9:00', '2009/7/30 10:00', '2009/7/30 11:00', '2009/7/30 12:00', '2009/7/30 13:00', '2009/7/30 14:00', '2009/7/30 15:00', '2009/7/30 16:00', '2009/7/30 17:00', '2009/7/30 18:00', '2009/7/30 19:00', '2009/7/30 20:00', '2009/7/30 21:00', '2009/7/30 22:00', '2009/7/30 23:00',
							'2009/7/31 0:00', '2009/7/31 1:00', '2009/7/31 2:00', '2009/7/31 3:00', '2009/7/31 4:00', '2009/7/31 5:00', '2009/7/31 6:00', '2009/7/31 7:00', '2009/7/31 8:00', '2009/7/31 9:00', '2009/7/31 10:00', '2009/7/31 11:00', '2009/7/31 12:00', '2009/7/31 13:00', '2009/7/31 14:00', '2009/7/31 15:00', '2009/7/31 16:00', '2009/7/31 17:00', '2009/7/31 18:00', '2009/7/31 19:00', '2009/7/31 20:00', '2009/7/31 21:00', '2009/7/31 22:00', '2009/7/31 23:00',
							'2009/8/1 0:00', '2009/8/1 1:00', '2009/8/1 2:00', '2009/8/1 3:00', '2009/8/1 4:00', '2009/8/1 5:00', '2009/8/1 6:00', '2009/8/1 7:00', '2009/8/1 8:00', '2009/8/1 9:00', '2009/8/1 10:00', '2009/8/1 11:00', '2009/8/1 12:00', '2009/8/1 13:00', '2009/8/1 14:00', '2009/8/1 15:00', '2009/8/1 16:00', '2009/8/1 17:00', '2009/8/1 18:00', '2009/8/1 19:00', '2009/8/1 20:00', '2009/8/1 21:00', '2009/8/1 22:00', '2009/8/1 23:00', '2009/8/2 0:00', '2009/8/2 1:00', '2009/8/2 2:00', '2009/8/2 3:00', '2009/8/2 4:00', '2009/8/2 5:00', '2009/8/2 6:00', '2009/8/2 7:00', '2009/8/2 8:00', '2009/8/2 9:00', '2009/8/2 10:00', '2009/8/2 11:00', '2009/8/2 12:00', '2009/8/2 13:00', '2009/8/2 14:00', '2009/8/2 15:00', '2009/8/2 16:00', '2009/8/2 17:00', '2009/8/2 18:00', '2009/8/2 19:00', '2009/8/2 20:00', '2009/8/2 21:00', '2009/8/2 22:00', '2009/8/2 23:00', '2009/8/3 0:00', '2009/8/3 1:00', '2009/8/3 2:00', '2009/8/3 3:00', '2009/8/3 4:00', '2009/8/3 5:00', '2009/8/3 6:00', '2009/8/3 7:00', '2009/8/3 8:00', '2009/8/3 9:00', '2009/8/3 10:00', '2009/8/3 11:00', '2009/8/3 12:00', '2009/8/3 13:00', '2009/8/3 14:00', '2009/8/3 15:00', '2009/8/3 16:00', '2009/8/3 17:00', '2009/8/3 18:00', '2009/8/3 19:00', '2009/8/3 20:00', '2009/8/3 21:00', '2009/8/3 22:00', '2009/8/3 23:00', '2009/8/4 0:00', '2009/8/4 1:00', '2009/8/4 2:00', '2009/8/4 3:00', '2009/8/4 4:00', '2009/8/4 5:00', '2009/8/4 6:00', '2009/8/4 7:00', '2009/8/4 8:00', '2009/8/4 9:00', '2009/8/4 10:00', '2009/8/4 11:00', '2009/8/4 12:00', '2009/8/4 13:00', '2009/8/4 14:00', '2009/8/4 15:00', '2009/8/4 16:00', '2009/8/4 17:00', '2009/8/4 18:00', '2009/8/4 19:00', '2009/8/4 20:00', '2009/8/4 21:00', '2009/8/4 22:00', '2009/8/4 23:00', '2009/8/5 0:00', '2009/8/5 1:00', '2009/8/5 2:00', '2009/8/5 3:00', '2009/8/5 4:00', '2009/8/5 5:00', '2009/8/5 6:00', '2009/8/5 7:00', '2009/8/5 8:00', '2009/8/5 9:00', '2009/8/5 10:00', '2009/8/5 11:00', '2009/8/5 12:00', '2009/8/5 13:00', '2009/8/5 14:00', '2009/8/5 15:00', '2009/8/5 16:00', '2009/8/5 17:00', '2009/8/5 18:00', '2009/8/5 19:00', '2009/8/5 20:00', '2009/8/5 21:00', '2009/8/5 22:00', '2009/8/5 23:00', '2009/8/6 0:00', '2009/8/6 1:00', '2009/8/6 2:00', '2009/8/6 3:00', '2009/8/6 4:00', '2009/8/6 5:00', '2009/8/6 6:00', '2009/8/6 7:00', '2009/8/6 8:00', '2009/8/6 9:00', '2009/8/6 10:00', '2009/8/6 11:00', '2009/8/6 12:00', '2009/8/6 13:00', '2009/8/6 14:00', '2009/8/6 15:00', '2009/8/6 16:00', '2009/8/6 17:00', '2009/8/6 18:00', '2009/8/6 19:00', '2009/8/6 20:00', '2009/8/6 21:00', '2009/8/6 22:00', '2009/8/6 23:00', '2009/8/7 0:00', '2009/8/7 1:00', '2009/8/7 2:00', '2009/8/7 3:00', '2009/8/7 4:00', '2009/8/7 5:00', '2009/8/7 6:00', '2009/8/7 7:00', '2009/8/7 8:00', '2009/8/7 9:00', '2009/8/7 10:00', '2009/8/7 11:00', '2009/8/7 12:00', '2009/8/7 13:00', '2009/8/7 14:00', '2009/8/7 15:00', '2009/8/7 16:00', '2009/8/7 17:00', '2009/8/7 18:00', '2009/8/7 19:00', '2009/8/7 20:00', '2009/8/7 21:00', '2009/8/7 22:00', '2009/8/7 23:00', '2009/8/8 0:00', '2009/8/8 1:00', '2009/8/8 2:00', '2009/8/8 3:00', '2009/8/8 4:00', '2009/8/8 5:00', '2009/8/8 6:00', '2009/8/8 7:00', '2009/8/8 8:00', '2009/8/8 9:00', '2009/8/8 10:00', '2009/8/8 11:00', '2009/8/8 12:00', '2009/8/8 13:00', '2009/8/8 14:00', '2009/8/8 15:00', '2009/8/8 16:00', '2009/8/8 17:00', '2009/8/8 18:00', '2009/8/8 19:00', '2009/8/8 20:00', '2009/8/8 21:00', '2009/8/8 22:00', '2009/8/8 23:00', '2009/8/9 0:00', '2009/8/9 1:00', '2009/8/9 2:00', '2009/8/9 3:00', '2009/8/9 4:00', '2009/8/9 5:00', '2009/8/9 6:00', '2009/8/9 7:00', '2009/8/9 8:00', '2009/8/9 9:00', '2009/8/9 10:00', '2009/8/9 11:00', '2009/8/9 12:00', '2009/8/9 13:00', '2009/8/9 14:00', '2009/8/9 15:00', '2009/8/9 16:00', '2009/8/9 17:00', '2009/8/9 18:00', '2009/8/9 19:00', '2009/8/9 20:00', '2009/8/9 21:00', '2009/8/9 22:00', '2009/8/9 23:00', '2009/8/10 0:00', '2009/8/10 1:00', '2009/8/10 2:00', '2009/8/10 3:00', '2009/8/10 4:00', '2009/8/10 5:00', '2009/8/10 6:00', '2009/8/10 7:00', '2009/8/10 8:00', '2009/8/10 9:00', '2009/8/10 10:00', '2009/8/10 11:00', '2009/8/10 12:00', '2009/8/10 13:00', '2009/8/10 14:00', '2009/8/10 15:00', '2009/8/10 16:00', '2009/8/10 17:00', '2009/8/10 18:00', '2009/8/10 19:00', '2009/8/10 20:00', '2009/8/10 21:00', '2009/8/10 22:00', '2009/8/10 23:00', '2009/8/11 0:00', '2009/8/11 1:00', '2009/8/11 2:00', '2009/8/11 3:00', '2009/8/11 4:00', '2009/8/11 5:00', '2009/8/11 6:00', '2009/8/11 7:00', '2009/8/11 8:00', '2009/8/11 9:00', '2009/8/11 10:00', '2009/8/11 11:00', '2009/8/11 12:00', '2009/8/11 13:00', '2009/8/11 14:00', '2009/8/11 15:00', '2009/8/11 16:00', '2009/8/11 17:00', '2009/8/11 18:00', '2009/8/11 19:00', '2009/8/11 20:00', '2009/8/11 21:00', '2009/8/11 22:00', '2009/8/11 23:00', '2009/8/12 0:00', '2009/8/12 1:00', '2009/8/12 2:00', '2009/8/12 3:00', '2009/8/12 4:00', '2009/8/12 5:00', '2009/8/12 6:00', '2009/8/12 7:00', '2009/8/12 8:00', '2009/8/12 9:00', '2009/8/12 10:00', '2009/8/12 11:00', '2009/8/12 12:00', '2009/8/12 13:00', '2009/8/12 14:00', '2009/8/12 15:00', '2009/8/12 16:00', '2009/8/12 17:00', '2009/8/12 18:00', '2009/8/12 19:00', '2009/8/12 20:00', '2009/8/12 21:00', '2009/8/12 22:00', '2009/8/12 23:00', '2009/8/13 0:00', '2009/8/13 1:00', '2009/8/13 2:00', '2009/8/13 3:00', '2009/8/13 4:00', '2009/8/13 5:00', '2009/8/13 6:00', '2009/8/13 7:00', '2009/8/13 8:00', '2009/8/13 9:00', '2009/8/13 10:00', '2009/8/13 11:00', '2009/8/13 12:00', '2009/8/13 13:00', '2009/8/13 14:00', '2009/8/13 15:00', '2009/8/13 16:00', '2009/8/13 17:00', '2009/8/13 18:00', '2009/8/13 19:00', '2009/8/13 20:00', '2009/8/13 21:00', '2009/8/13 22:00', '2009/8/13 23:00', '2009/8/14 0:00', '2009/8/14 1:00', '2009/8/14 2:00', '2009/8/14 3:00', '2009/8/14 4:00', '2009/8/14 5:00', '2009/8/14 6:00', '2009/8/14 7:00', '2009/8/14 8:00', '2009/8/14 9:00', '2009/8/14 10:00', '2009/8/14 11:00', '2009/8/14 12:00', '2009/8/14 13:00', '2009/8/14 14:00', '2009/8/14 15:00', '2009/8/14 16:00', '2009/8/14 17:00', '2009/8/14 18:00', '2009/8/14 19:00', '2009/8/14 20:00', '2009/8/14 21:00', '2009/8/14 22:00', '2009/8/14 23:00', '2009/8/15 0:00', '2009/8/15 1:00', '2009/8/15 2:00', '2009/8/15 3:00', '2009/8/15 4:00', '2009/8/15 5:00', '2009/8/15 6:00', '2009/8/15 7:00', '2009/8/15 8:00', '2009/8/15 9:00', '2009/8/15 10:00', '2009/8/15 11:00', '2009/8/15 12:00', '2009/8/15 13:00', '2009/8/15 14:00', '2009/8/15 15:00', '2009/8/15 16:00', '2009/8/15 17:00', '2009/8/15 18:00', '2009/8/15 19:00', '2009/8/15 20:00', '2009/8/15 21:00', '2009/8/15 22:00', '2009/8/15 23:00', '2009/8/16 0:00', '2009/8/16 1:00', '2009/8/16 2:00', '2009/8/16 3:00', '2009/8/16 4:00', '2009/8/16 5:00', '2009/8/16 6:00', '2009/8/16 7:00', '2009/8/16 8:00', '2009/8/16 9:00', '2009/8/16 10:00', '2009/8/16 11:00', '2009/8/16 12:00', '2009/8/16 13:00', '2009/8/16 14:00', '2009/8/16 15:00', '2009/8/16 16:00', '2009/8/16 17:00', '2009/8/16 18:00', '2009/8/16 19:00', '2009/8/16 20:00', '2009/8/16 21:00', '2009/8/16 22:00', '2009/8/16 23:00', '2009/8/17 0:00', '2009/8/17 1:00', '2009/8/17 2:00', '2009/8/17 3:00', '2009/8/17 4:00', '2009/8/17 5:00', '2009/8/17 6:00', '2009/8/17 7:00', '2009/8/17 8:00', '2009/8/17 9:00', '2009/8/17 10:00', '2009/8/17 11:00', '2009/8/17 12:00', '2009/8/17 13:00', '2009/8/17 14:00', '2009/8/17 15:00', '2009/8/17 16:00', '2009/8/17 17:00', '2009/8/17 18:00', '2009/8/17 19:00', '2009/8/17 20:00', '2009/8/17 21:00', '2009/8/17 22:00', '2009/8/17 23:00', '2009/8/18 0:00', '2009/8/18 1:00', '2009/8/18 2:00', '2009/8/18 3:00', '2009/8/18 4:00', '2009/8/18 5:00', '2009/8/18 6:00', '2009/8/18 7:00', '2009/8/18 8:00', '2009/8/18 9:00', '2009/8/18 10:00', '2009/8/18 11:00', '2009/8/18 12:00', '2009/8/18 13:00', '2009/8/18 14:00', '2009/8/18 15:00', '2009/8/18 16:00', '2009/8/18 17:00', '2009/8/18 18:00', '2009/8/18 19:00', '2009/8/18 20:00', '2009/8/18 21:00', '2009/8/18 22:00', '2009/8/18 23:00', '2009/8/19 0:00', '2009/8/19 1:00', '2009/8/19 2:00', '2009/8/19 3:00', '2009/8/19 4:00', '2009/8/19 5:00', '2009/8/19 6:00', '2009/8/19 7:00', '2009/8/19 8:00', '2009/8/19 9:00', '2009/8/19 10:00', '2009/8/19 11:00', '2009/8/19 12:00', '2009/8/19 13:00', '2009/8/19 14:00', '2009/8/19 15:00', '2009/8/19 16:00', '2009/8/19 17:00', '2009/8/19 18:00', '2009/8/19 19:00', '2009/8/19 20:00', '2009/8/19 21:00', '2009/8/19 22:00', '2009/8/19 23:00', '2009/8/20 0:00', '2009/8/20 1:00', '2009/8/20 2:00', '2009/8/20 3:00', '2009/8/20 4:00', '2009/8/20 5:00', '2009/8/20 6:00', '2009/8/20 7:00', '2009/8/20 8:00', '2009/8/20 9:00', '2009/8/20 10:00', '2009/8/20 11:00', '2009/8/20 12:00', '2009/8/20 13:00', '2009/8/20 14:00', '2009/8/20 15:00', '2009/8/20 16:00', '2009/8/20 17:00', '2009/8/20 18:00', '2009/8/20 19:00', '2009/8/20 20:00', '2009/8/20 21:00', '2009/8/20 22:00', '2009/8/20 23:00', '2009/8/21 0:00', '2009/8/21 1:00', '2009/8/21 2:00', '2009/8/21 3:00', '2009/8/21 4:00', '2009/8/21 5:00', '2009/8/21 6:00', '2009/8/21 7:00', '2009/8/21 8:00', '2009/8/21 9:00', '2009/8/21 10:00', '2009/8/21 11:00', '2009/8/21 12:00', '2009/8/21 13:00', '2009/8/21 14:00', '2009/8/21 15:00', '2009/8/21 16:00', '2009/8/21 17:00', '2009/8/21 18:00', '2009/8/21 19:00', '2009/8/21 20:00', '2009/8/21 21:00', '2009/8/21 22:00', '2009/8/21 23:00', '2009/8/22 0:00', '2009/8/22 1:00', '2009/8/22 2:00', '2009/8/22 3:00', '2009/8/22 4:00', '2009/8/22 5:00', '2009/8/22 6:00', '2009/8/22 7:00', '2009/8/22 8:00', '2009/8/22 9:00', '2009/8/22 10:00', '2009/8/22 11:00', '2009/8/22 12:00', '2009/8/22 13:00', '2009/8/22 14:00', '2009/8/22 15:00', '2009/8/22 16:00', '2009/8/22 17:00', '2009/8/22 18:00', '2009/8/22 19:00', '2009/8/22 20:00', '2009/8/22 21:00', '2009/8/22 22:00', '2009/8/22 23:00', '2009/8/23 0:00', '2009/8/23 1:00', '2009/8/23 2:00', '2009/8/23 3:00', '2009/8/23 4:00', '2009/8/23 5:00', '2009/8/23 6:00', '2009/8/23 7:00', '2009/8/23 8:00', '2009/8/23 9:00', '2009/8/23 10:00', '2009/8/23 11:00', '2009/8/23 12:00', '2009/8/23 13:00', '2009/8/23 14:00', '2009/8/23 15:00', '2009/8/23 16:00', '2009/8/23 17:00', '2009/8/23 18:00', '2009/8/23 19:00', '2009/8/23 20:00', '2009/8/23 21:00', '2009/8/23 22:00', '2009/8/23 23:00', '2009/8/24 0:00', '2009/8/24 1:00', '2009/8/24 2:00', '2009/8/24 3:00', '2009/8/24 4:00', '2009/8/24 5:00', '2009/8/24 6:00', '2009/8/24 7:00', '2009/8/24 8:00', '2009/8/24 9:00', '2009/8/24 10:00', '2009/8/24 11:00', '2009/8/24 12:00', '2009/8/24 13:00', '2009/8/24 14:00', '2009/8/24 15:00', '2009/8/24 16:00', '2009/8/24 17:00', '2009/8/24 18:00', '2009/8/24 19:00', '2009/8/24 20:00', '2009/8/24 21:00', '2009/8/24 22:00', '2009/8/24 23:00', '2009/8/25 0:00', '2009/8/25 1:00', '2009/8/25 2:00', '2009/8/25 3:00', '2009/8/25 4:00', '2009/8/25 5:00', '2009/8/25 6:00', '2009/8/25 7:00', '2009/8/25 8:00', '2009/8/25 9:00', '2009/8/25 10:00', '2009/8/25 11:00', '2009/8/25 12:00', '2009/8/25 13:00', '2009/8/25 14:00', '2009/8/25 15:00', '2009/8/25 16:00', '2009/8/25 17:00', '2009/8/25 18:00', '2009/8/25 19:00', '2009/8/25 20:00', '2009/8/25 21:00', '2009/8/25 22:00', '2009/8/25 23:00', '2009/8/26 0:00', '2009/8/26 1:00', '2009/8/26 2:00', '2009/8/26 3:00', '2009/8/26 4:00', '2009/8/26 5:00', '2009/8/26 6:00', '2009/8/26 7:00', '2009/8/26 8:00', '2009/8/26 9:00', '2009/8/26 10:00', '2009/8/26 11:00', '2009/8/26 12:00', '2009/8/26 13:00', '2009/8/26 14:00', '2009/8/26 15:00', '2009/8/26 16:00', '2009/8/26 17:00', '2009/8/26 18:00', '2009/8/26 19:00', '2009/8/26 20:00', '2009/8/26 21:00', '2009/8/26 22:00', '2009/8/26 23:00', '2009/8/27 0:00', '2009/8/27 1:00', '2009/8/27 2:00', '2009/8/27 3:00', '2009/8/27 4:00', '2009/8/27 5:00', '2009/8/27 6:00', '2009/8/27 7:00', '2009/8/27 8:00', '2009/8/27 9:00', '2009/8/27 10:00', '2009/8/27 11:00', '2009/8/27 12:00', '2009/8/27 13:00', '2009/8/27 14:00', '2009/8/27 15:00', '2009/8/27 16:00', '2009/8/27 17:00', '2009/8/27 18:00', '2009/8/27 19:00', '2009/8/27 20:00', '2009/8/27 21:00', '2009/8/27 22:00', '2009/8/27 23:00', '2009/8/28 0:00', '2009/8/28 1:00', '2009/8/28 2:00', '2009/8/28 3:00', '2009/8/28 4:00', '2009/8/28 5:00', '2009/8/28 6:00', '2009/8/28 7:00', '2009/8/28 8:00', '2009/8/28 9:00', '2009/8/28 10:00', '2009/8/28 11:00', '2009/8/28 12:00', '2009/8/28 13:00', '2009/8/28 14:00', '2009/8/28 15:00', '2009/8/28 16:00', '2009/8/28 17:00', '2009/8/28 18:00', '2009/8/28 19:00', '2009/8/28 20:00', '2009/8/28 21:00', '2009/8/28 22:00', '2009/8/28 23:00', '2009/8/29 0:00', '2009/8/29 1:00', '2009/8/29 2:00', '2009/8/29 3:00', '2009/8/29 4:00', '2009/8/29 5:00', '2009/8/29 6:00', '2009/8/29 7:00', '2009/8/29 8:00', '2009/8/29 9:00', '2009/8/29 10:00', '2009/8/29 11:00', '2009/8/29 12:00', '2009/8/29 13:00', '2009/8/29 14:00', '2009/8/29 15:00', '2009/8/29 16:00', '2009/8/29 17:00', '2009/8/29 18:00', '2009/8/29 19:00', '2009/8/29 20:00', '2009/8/29 21:00', '2009/8/29 22:00', '2009/8/29 23:00', '2009/8/30 0:00', '2009/8/30 1:00', '2009/8/30 2:00', '2009/8/30 3:00', '2009/8/30 4:00', '2009/8/30 5:00', '2009/8/30 6:00', '2009/8/30 7:00', '2009/8/30 8:00', '2009/8/30 9:00', '2009/8/30 10:00', '2009/8/30 11:00', '2009/8/30 12:00', '2009/8/30 13:00', '2009/8/30 14:00', '2009/8/30 15:00', '2009/8/30 16:00', '2009/8/30 17:00', '2009/8/30 18:00', '2009/8/30 19:00', '2009/8/30 20:00', '2009/8/30 21:00', '2009/8/30 22:00', '2009/8/30 23:00', '2009/8/31 0:00', '2009/8/31 1:00', '2009/8/31 2:00', '2009/8/31 3:00', '2009/8/31 4:00', '2009/8/31 5:00', '2009/8/31 6:00', '2009/8/31 7:00', '2009/8/31 8:00', '2009/8/31 9:00', '2009/8/31 10:00', '2009/8/31 11:00', '2009/8/31 12:00', '2009/8/31 13:00', '2009/8/31 14:00', '2009/8/31 15:00', '2009/8/31 16:00', '2009/8/31 17:00', '2009/8/31 18:00', '2009/8/31 19:00', '2009/8/31 20:00', '2009/8/31 21:00', '2009/8/31 22:00', '2009/8/31 23:00',
							'2009/9/1 0:00', '2009/9/1 1:00', '2009/9/1 2:00', '2009/9/1 3:00', '2009/9/1 4:00', '2009/9/1 5:00', '2009/9/1 6:00', '2009/9/1 7:00', '2009/9/1 8:00', '2009/9/1 9:00', '2009/9/1 10:00', '2009/9/1 11:00', '2009/9/1 12:00', '2009/9/1 13:00', '2009/9/1 14:00', '2009/9/1 15:00', '2009/9/1 16:00', '2009/9/1 17:00', '2009/9/1 18:00', '2009/9/1 19:00', '2009/9/1 20:00', '2009/9/1 21:00', '2009/9/1 22:00', '2009/9/1 23:00', '2009/9/2 0:00', '2009/9/2 1:00', '2009/9/2 2:00', '2009/9/2 3:00', '2009/9/2 4:00', '2009/9/2 5:00', '2009/9/2 6:00', '2009/9/2 7:00', '2009/9/2 8:00', '2009/9/2 9:00', '2009/9/2 10:00', '2009/9/2 11:00', '2009/9/2 12:00', '2009/9/2 13:00', '2009/9/2 14:00', '2009/9/2 15:00', '2009/9/2 16:00', '2009/9/2 17:00', '2009/9/2 18:00', '2009/9/2 19:00', '2009/9/2 20:00', '2009/9/2 21:00', '2009/9/2 22:00', '2009/9/2 23:00', '2009/9/3 0:00', '2009/9/3 1:00', '2009/9/3 2:00', '2009/9/3 3:00', '2009/9/3 4:00', '2009/9/3 5:00', '2009/9/3 6:00', '2009/9/3 7:00', '2009/9/3 8:00', '2009/9/3 9:00', '2009/9/3 10:00', '2009/9/3 11:00', '2009/9/3 12:00', '2009/9/3 13:00', '2009/9/3 14:00', '2009/9/3 15:00', '2009/9/3 16:00', '2009/9/3 17:00', '2009/9/3 18:00', '2009/9/3 19:00', '2009/9/3 20:00', '2009/9/3 21:00', '2009/9/3 22:00', '2009/9/3 23:00', '2009/9/4 0:00', '2009/9/4 1:00', '2009/9/4 2:00', '2009/9/4 3:00', '2009/9/4 4:00', '2009/9/4 5:00', '2009/9/4 6:00', '2009/9/4 7:00', '2009/9/4 8:00', '2009/9/4 9:00', '2009/9/4 10:00', '2009/9/4 11:00', '2009/9/4 12:00', '2009/9/4 13:00', '2009/9/4 14:00', '2009/9/4 15:00', '2009/9/4 16:00', '2009/9/4 17:00', '2009/9/4 18:00', '2009/9/4 19:00', '2009/9/4 20:00', '2009/9/4 21:00', '2009/9/4 22:00', '2009/9/4 23:00', '2009/9/5 0:00', '2009/9/5 1:00', '2009/9/5 2:00', '2009/9/5 3:00', '2009/9/5 4:00', '2009/9/5 5:00', '2009/9/5 6:00', '2009/9/5 7:00', '2009/9/5 8:00', '2009/9/5 9:00', '2009/9/5 10:00', '2009/9/5 11:00', '2009/9/5 12:00', '2009/9/5 13:00', '2009/9/5 14:00', '2009/9/5 15:00', '2009/9/5 16:00', '2009/9/5 17:00', '2009/9/5 18:00', '2009/9/5 19:00', '2009/9/5 20:00', '2009/9/5 21:00', '2009/9/5 22:00', '2009/9/5 23:00', '2009/9/6 0:00', '2009/9/6 1:00', '2009/9/6 2:00', '2009/9/6 3:00', '2009/9/6 4:00', '2009/9/6 5:00', '2009/9/6 6:00', '2009/9/6 7:00', '2009/9/6 8:00', '2009/9/6 9:00', '2009/9/6 10:00', '2009/9/6 11:00', '2009/9/6 12:00', '2009/9/6 13:00', '2009/9/6 14:00', '2009/9/6 15:00', '2009/9/6 16:00', '2009/9/6 17:00', '2009/9/6 18:00', '2009/9/6 19:00', '2009/9/6 20:00', '2009/9/6 21:00', '2009/9/6 22:00', '2009/9/6 23:00', '2009/9/7 0:00', '2009/9/7 1:00', '2009/9/7 2:00', '2009/9/7 3:00', '2009/9/7 4:00', '2009/9/7 5:00', '2009/9/7 6:00', '2009/9/7 7:00', '2009/9/7 8:00', '2009/9/7 9:00', '2009/9/7 10:00', '2009/9/7 11:00', '2009/9/7 12:00', '2009/9/7 13:00', '2009/9/7 14:00', '2009/9/7 15:00', '2009/9/7 16:00', '2009/9/7 17:00', '2009/9/7 18:00', '2009/9/7 19:00', '2009/9/7 20:00', '2009/9/7 21:00', '2009/9/7 22:00', '2009/9/7 23:00', '2009/9/8 0:00', '2009/9/8 1:00', '2009/9/8 2:00', '2009/9/8 3:00', '2009/9/8 4:00', '2009/9/8 5:00', '2009/9/8 6:00', '2009/9/8 7:00', '2009/9/8 8:00', '2009/9/8 9:00', '2009/9/8 10:00', '2009/9/8 11:00', '2009/9/8 12:00', '2009/9/8 13:00', '2009/9/8 14:00', '2009/9/8 15:00', '2009/9/8 16:00', '2009/9/8 17:00', '2009/9/8 18:00', '2009/9/8 19:00', '2009/9/8 20:00', '2009/9/8 21:00', '2009/9/8 22:00', '2009/9/8 23:00', '2009/9/9 0:00', '2009/9/9 1:00', '2009/9/9 2:00', '2009/9/9 3:00', '2009/9/9 4:00', '2009/9/9 5:00', '2009/9/9 6:00', '2009/9/9 7:00', '2009/9/9 8:00', '2009/9/9 9:00', '2009/9/9 10:00', '2009/9/9 11:00', '2009/9/9 12:00', '2009/9/9 13:00', '2009/9/9 14:00', '2009/9/9 15:00', '2009/9/9 16:00', '2009/9/9 17:00', '2009/9/9 18:00', '2009/9/9 19:00', '2009/9/9 20:00', '2009/9/9 21:00', '2009/9/9 22:00', '2009/9/9 23:00', '2009/9/10 0:00', '2009/9/10 1:00', '2009/9/10 2:00', '2009/9/10 3:00', '2009/9/10 4:00', '2009/9/10 5:00', '2009/9/10 6:00', '2009/9/10 7:00', '2009/9/10 8:00', '2009/9/10 9:00', '2009/9/10 10:00', '2009/9/10 11:00', '2009/9/10 12:00', '2009/9/10 13:00', '2009/9/10 14:00', '2009/9/10 15:00', '2009/9/10 16:00', '2009/9/10 17:00', '2009/9/10 18:00', '2009/9/10 19:00', '2009/9/10 20:00', '2009/9/10 21:00', '2009/9/10 22:00', '2009/9/10 23:00', '2009/9/11 0:00', '2009/9/11 1:00', '2009/9/11 2:00', '2009/9/11 3:00', '2009/9/11 4:00', '2009/9/11 5:00', '2009/9/11 6:00', '2009/9/11 7:00', '2009/9/11 8:00', '2009/9/11 9:00', '2009/9/11 10:00', '2009/9/11 11:00', '2009/9/11 12:00', '2009/9/11 13:00', '2009/9/11 14:00', '2009/9/11 15:00', '2009/9/11 16:00', '2009/9/11 17:00', '2009/9/11 18:00', '2009/9/11 19:00', '2009/9/11 20:00', '2009/9/11 21:00', '2009/9/11 22:00', '2009/9/11 23:00', '2009/9/12 0:00', '2009/9/12 1:00', '2009/9/12 2:00', '2009/9/12 3:00', '2009/9/12 4:00', '2009/9/12 5:00', '2009/9/12 6:00', '2009/9/12 7:00', '2009/9/12 8:00', '2009/9/12 9:00', '2009/9/12 10:00', '2009/9/12 11:00', '2009/9/12 12:00', '2009/9/12 13:00', '2009/9/12 14:00', '2009/9/12 15:00', '2009/9/12 16:00', '2009/9/12 17:00', '2009/9/12 18:00', '2009/9/12 19:00', '2009/9/12 20:00', '2009/9/12 21:00', '2009/9/12 22:00', '2009/9/12 23:00', '2009/9/13 0:00', '2009/9/13 1:00', '2009/9/13 2:00', '2009/9/13 3:00', '2009/9/13 4:00', '2009/9/13 5:00', '2009/9/13 6:00', '2009/9/13 7:00', '2009/9/13 8:00', '2009/9/13 9:00', '2009/9/13 10:00', '2009/9/13 11:00', '2009/9/13 12:00', '2009/9/13 13:00', '2009/9/13 14:00', '2009/9/13 15:00', '2009/9/13 16:00', '2009/9/13 17:00', '2009/9/13 18:00', '2009/9/13 19:00', '2009/9/13 20:00', '2009/9/13 21:00', '2009/9/13 22:00', '2009/9/13 23:00', '2009/9/14 0:00', '2009/9/14 1:00', '2009/9/14 2:00', '2009/9/14 3:00', '2009/9/14 4:00', '2009/9/14 5:00', '2009/9/14 6:00', '2009/9/14 7:00', '2009/9/14 8:00', '2009/9/14 9:00', '2009/9/14 10:00', '2009/9/14 11:00', '2009/9/14 12:00', '2009/9/14 13:00', '2009/9/14 14:00', '2009/9/14 15:00', '2009/9/14 16:00', '2009/9/14 17:00', '2009/9/14 18:00', '2009/9/14 19:00', '2009/9/14 20:00', '2009/9/14 21:00', '2009/9/14 22:00', '2009/9/14 23:00', '2009/9/15 0:00', '2009/9/15 1:00', '2009/9/15 2:00', '2009/9/15 3:00', '2009/9/15 4:00', '2009/9/15 5:00', '2009/9/15 6:00', '2009/9/15 7:00', '2009/9/15 8:00', '2009/9/15 9:00', '2009/9/15 10:00', '2009/9/15 11:00', '2009/9/15 12:00', '2009/9/15 13:00', '2009/9/15 14:00', '2009/9/15 15:00', '2009/9/15 16:00', '2009/9/15 17:00', '2009/9/15 18:00', '2009/9/15 19:00', '2009/9/15 20:00', '2009/9/15 21:00', '2009/9/15 22:00', '2009/9/15 23:00', '2009/9/16 0:00', '2009/9/16 1:00', '2009/9/16 2:00', '2009/9/16 3:00', '2009/9/16 4:00', '2009/9/16 5:00', '2009/9/16 6:00', '2009/9/16 7:00', '2009/9/16 8:00', '2009/9/16 9:00', '2009/9/16 10:00', '2009/9/16 11:00', '2009/9/16 12:00', '2009/9/16 13:00', '2009/9/16 14:00', '2009/9/16 15:00', '2009/9/16 16:00', '2009/9/16 17:00', '2009/9/16 18:00', '2009/9/16 19:00', '2009/9/16 20:00', '2009/9/16 21:00', '2009/9/16 22:00', '2009/9/16 23:00', '2009/9/17 0:00', '2009/9/17 1:00', '2009/9/17 2:00', '2009/9/17 3:00', '2009/9/17 4:00', '2009/9/17 5:00', '2009/9/17 6:00', '2009/9/17 7:00', '2009/9/17 8:00', '2009/9/17 9:00', '2009/9/17 10:00', '2009/9/17 11:00', '2009/9/17 12:00', '2009/9/17 13:00', '2009/9/17 14:00', '2009/9/17 15:00', '2009/9/17 16:00', '2009/9/17 17:00', '2009/9/17 18:00', '2009/9/17 19:00', '2009/9/17 20:00', '2009/9/17 21:00', '2009/9/17 22:00', '2009/9/17 23:00', '2009/9/18 0:00', '2009/9/18 1:00', '2009/9/18 2:00', '2009/9/18 3:00', '2009/9/18 4:00', '2009/9/18 5:00', '2009/9/18 6:00', '2009/9/18 7:00', '2009/9/18 8:00', '2009/9/18 9:00', '2009/9/18 10:00', '2009/9/18 11:00', '2009/9/18 12:00', '2009/9/18 13:00', '2009/9/18 14:00', '2009/9/18 15:00', '2009/9/18 16:00', '2009/9/18 17:00', '2009/9/18 18:00', '2009/9/18 19:00', '2009/9/18 20:00', '2009/9/18 21:00', '2009/9/18 22:00', '2009/9/18 23:00', '2009/9/19 0:00', '2009/9/19 1:00', '2009/9/19 2:00', '2009/9/19 3:00', '2009/9/19 4:00', '2009/9/19 5:00', '2009/9/19 6:00', '2009/9/19 7:00', '2009/9/19 8:00', '2009/9/19 9:00', '2009/9/19 10:00', '2009/9/19 11:00', '2009/9/19 12:00', '2009/9/19 13:00', '2009/9/19 14:00', '2009/9/19 15:00', '2009/9/19 16:00', '2009/9/19 17:00', '2009/9/19 18:00', '2009/9/19 19:00', '2009/9/19 20:00', '2009/9/19 21:00', '2009/9/19 22:00', '2009/9/19 23:00', '2009/9/20 0:00', '2009/9/20 1:00', '2009/9/20 2:00', '2009/9/20 3:00', '2009/9/20 4:00', '2009/9/20 5:00', '2009/9/20 6:00', '2009/9/20 7:00', '2009/9/20 8:00', '2009/9/20 9:00', '2009/9/20 10:00', '2009/9/20 11:00', '2009/9/20 12:00', '2009/9/20 13:00', '2009/9/20 14:00', '2009/9/20 15:00', '2009/9/20 16:00', '2009/9/20 17:00', '2009/9/20 18:00', '2009/9/20 19:00', '2009/9/20 20:00', '2009/9/20 21:00', '2009/9/20 22:00', '2009/9/20 23:00', '2009/9/21 0:00', '2009/9/21 1:00', '2009/9/21 2:00', '2009/9/21 3:00', '2009/9/21 4:00', '2009/9/21 5:00', '2009/9/21 6:00', '2009/9/21 7:00', '2009/9/21 8:00', '2009/9/21 9:00', '2009/9/21 10:00', '2009/9/21 11:00', '2009/9/21 12:00', '2009/9/21 13:00', '2009/9/21 14:00', '2009/9/21 15:00', '2009/9/21 16:00', '2009/9/21 17:00', '2009/9/21 18:00', '2009/9/21 19:00', '2009/9/21 20:00', '2009/9/21 21:00', '2009/9/21 22:00', '2009/9/21 23:00', '2009/9/22 0:00', '2009/9/22 1:00', '2009/9/22 2:00', '2009/9/22 3:00', '2009/9/22 4:00', '2009/9/22 5:00', '2009/9/22 6:00', '2009/9/22 7:00', '2009/9/22 8:00', '2009/9/22 9:00', '2009/9/22 10:00', '2009/9/22 11:00', '2009/9/22 12:00', '2009/9/22 13:00', '2009/9/22 14:00', '2009/9/22 15:00', '2009/9/22 16:00', '2009/9/22 17:00', '2009/9/22 18:00', '2009/9/22 19:00', '2009/9/22 20:00', '2009/9/22 21:00', '2009/9/22 22:00', '2009/9/22 23:00', '2009/9/23 0:00', '2009/9/23 1:00', '2009/9/23 2:00', '2009/9/23 3:00', '2009/9/23 4:00', '2009/9/23 5:00', '2009/9/23 6:00', '2009/9/23 7:00', '2009/9/23 8:00', '2009/9/23 9:00', '2009/9/23 10:00', '2009/9/23 11:00', '2009/9/23 12:00', '2009/9/23 13:00', '2009/9/23 14:00', '2009/9/23 15:00', '2009/9/23 16:00', '2009/9/23 17:00', '2009/9/23 18:00', '2009/9/23 19:00', '2009/9/23 20:00', '2009/9/23 21:00', '2009/9/23 22:00', '2009/9/23 23:00', '2009/9/24 0:00', '2009/9/24 1:00', '2009/9/24 2:00', '2009/9/24 3:00', '2009/9/24 4:00', '2009/9/24 5:00', '2009/9/24 6:00', '2009/9/24 7:00', '2009/9/24 8:00', '2009/9/24 9:00', '2009/9/24 10:00', '2009/9/24 11:00', '2009/9/24 12:00', '2009/9/24 13:00', '2009/9/24 14:00', '2009/9/24 15:00', '2009/9/24 16:00', '2009/9/24 17:00', '2009/9/24 18:00', '2009/9/24 19:00', '2009/9/24 20:00', '2009/9/24 21:00', '2009/9/24 22:00', '2009/9/24 23:00', '2009/9/25 0:00', '2009/9/25 1:00', '2009/9/25 2:00', '2009/9/25 3:00', '2009/9/25 4:00', '2009/9/25 5:00', '2009/9/25 6:00', '2009/9/25 7:00', '2009/9/25 8:00', '2009/9/25 9:00', '2009/9/25 10:00', '2009/9/25 11:00', '2009/9/25 12:00', '2009/9/25 13:00', '2009/9/25 14:00', '2009/9/25 15:00', '2009/9/25 16:00', '2009/9/25 17:00', '2009/9/25 18:00', '2009/9/25 19:00', '2009/9/25 20:00', '2009/9/25 21:00', '2009/9/25 22:00', '2009/9/25 23:00', '2009/9/26 0:00', '2009/9/26 1:00', '2009/9/26 2:00', '2009/9/26 3:00', '2009/9/26 4:00', '2009/9/26 5:00', '2009/9/26 6:00', '2009/9/26 7:00', '2009/9/26 8:00', '2009/9/26 9:00', '2009/9/26 10:00', '2009/9/26 11:00', '2009/9/26 12:00', '2009/9/26 13:00', '2009/9/26 14:00', '2009/9/26 15:00', '2009/9/26 16:00', '2009/9/26 17:00', '2009/9/26 18:00', '2009/9/26 19:00', '2009/9/26 20:00', '2009/9/26 21:00', '2009/9/26 22:00', '2009/9/26 23:00', '2009/9/27 0:00', '2009/9/27 1:00', '2009/9/27 2:00', '2009/9/27 3:00', '2009/9/27 4:00', '2009/9/27 5:00', '2009/9/27 6:00', '2009/9/27 7:00', '2009/9/27 8:00', '2009/9/27 9:00', '2009/9/27 10:00', '2009/9/27 11:00', '2009/9/27 12:00', '2009/9/27 13:00', '2009/9/27 14:00', '2009/9/27 15:00', '2009/9/27 16:00', '2009/9/27 17:00', '2009/9/27 18:00', '2009/9/27 19:00', '2009/9/27 20:00', '2009/9/27 21:00', '2009/9/27 22:00', '2009/9/27 23:00', '2009/9/28 0:00', '2009/9/28 1:00', '2009/9/28 2:00', '2009/9/28 3:00', '2009/9/28 4:00', '2009/9/28 5:00', '2009/9/28 6:00', '2009/9/28 7:00', '2009/9/28 8:00', '2009/9/28 9:00', '2009/9/28 10:00', '2009/9/28 11:00', '2009/9/28 12:00', '2009/9/28 13:00', '2009/9/28 14:00', '2009/9/28 15:00', '2009/9/28 16:00', '2009/9/28 17:00', '2009/9/28 18:00', '2009/9/28 19:00', '2009/9/28 20:00', '2009/9/28 21:00', '2009/9/28 22:00', '2009/9/28 23:00', '2009/9/29 0:00', '2009/9/29 1:00', '2009/9/29 2:00', '2009/9/29 3:00', '2009/9/29 4:00', '2009/9/29 5:00', '2009/9/29 6:00', '2009/9/29 7:00', '2009/9/29 8:00', '2009/9/29 9:00', '2009/9/29 10:00', '2009/9/29 11:00', '2009/9/29 12:00', '2009/9/29 13:00', '2009/9/29 14:00', '2009/9/29 15:00', '2009/9/29 16:00', '2009/9/29 17:00', '2009/9/29 18:00', '2009/9/29 19:00', '2009/9/29 20:00', '2009/9/29 21:00', '2009/9/29 22:00', '2009/9/29 23:00', '2009/9/30 0:00', '2009/9/30 1:00', '2009/9/30 2:00', '2009/9/30 3:00', '2009/9/30 4:00', '2009/9/30 5:00', '2009/9/30 6:00', '2009/9/30 7:00', '2009/9/30 8:00', '2009/9/30 9:00', '2009/9/30 10:00', '2009/9/30 11:00', '2009/9/30 12:00', '2009/9/30 13:00', '2009/9/30 14:00', '2009/9/30 15:00', '2009/9/30 16:00', '2009/9/30 17:00', '2009/9/30 18:00', '2009/9/30 19:00', '2009/9/30 20:00', '2009/9/30 21:00', '2009/9/30 22:00', '2009/9/30 23:00',
							'2009/10/1 0:00', '2009/10/1 1:00', '2009/10/1 2:00', '2009/10/1 3:00', '2009/10/1 4:00', '2009/10/1 5:00', '2009/10/1 6:00', '2009/10/1 7:00', '2009/10/1 8:00', '2009/10/1 9:00', '2009/10/1 10:00', '2009/10/1 11:00', '2009/10/1 12:00', '2009/10/1 13:00', '2009/10/1 14:00', '2009/10/1 15:00', '2009/10/1 16:00', '2009/10/1 17:00', '2009/10/1 18:00', '2009/10/1 19:00', '2009/10/1 20:00', '2009/10/1 21:00', '2009/10/1 22:00', '2009/10/1 23:00', '2009/10/2 0:00', '2009/10/2 1:00', '2009/10/2 2:00', '2009/10/2 3:00', '2009/10/2 4:00', '2009/10/2 5:00', '2009/10/2 6:00', '2009/10/2 7:00', '2009/10/2 8:00', '2009/10/2 9:00', '2009/10/2 10:00', '2009/10/2 11:00', '2009/10/2 12:00', '2009/10/2 13:00', '2009/10/2 14:00', '2009/10/2 15:00', '2009/10/2 16:00', '2009/10/2 17:00', '2009/10/2 18:00', '2009/10/2 19:00', '2009/10/2 20:00', '2009/10/2 21:00', '2009/10/2 22:00', '2009/10/2 23:00', '2009/10/3 0:00', '2009/10/3 1:00', '2009/10/3 2:00', '2009/10/3 3:00', '2009/10/3 4:00', '2009/10/3 5:00', '2009/10/3 6:00', '2009/10/3 7:00', '2009/10/3 8:00', '2009/10/3 9:00', '2009/10/3 10:00', '2009/10/3 11:00', '2009/10/3 12:00', '2009/10/3 13:00', '2009/10/3 14:00', '2009/10/3 15:00', '2009/10/3 16:00', '2009/10/3 17:00', '2009/10/3 18:00', '2009/10/3 19:00', '2009/10/3 20:00', '2009/10/3 21:00', '2009/10/3 22:00', '2009/10/3 23:00', '2009/10/4 0:00', '2009/10/4 1:00', '2009/10/4 2:00', '2009/10/4 3:00', '2009/10/4 4:00', '2009/10/4 5:00', '2009/10/4 6:00', '2009/10/4 7:00', '2009/10/4 8:00', '2009/10/4 9:00', '2009/10/4 10:00', '2009/10/4 11:00', '2009/10/4 12:00', '2009/10/4 13:00', '2009/10/4 14:00', '2009/10/4 15:00', '2009/10/4 16:00', '2009/10/4 17:00', '2009/10/4 18:00', '2009/10/4 19:00', '2009/10/4 20:00', '2009/10/4 21:00', '2009/10/4 22:00', '2009/10/4 23:00', '2009/10/5 0:00', '2009/10/5 1:00', '2009/10/5 2:00', '2009/10/5 3:00', '2009/10/5 4:00', '2009/10/5 5:00', '2009/10/5 6:00', '2009/10/5 7:00', '2009/10/5 8:00', '2009/10/5 9:00', '2009/10/5 10:00', '2009/10/5 11:00', '2009/10/5 12:00', '2009/10/5 13:00', '2009/10/5 14:00', '2009/10/5 15:00', '2009/10/5 16:00', '2009/10/5 17:00', '2009/10/5 18:00', '2009/10/5 19:00', '2009/10/5 20:00', '2009/10/5 21:00', '2009/10/5 22:00', '2009/10/5 23:00', '2009/10/6 0:00', '2009/10/6 1:00', '2009/10/6 2:00', '2009/10/6 3:00', '2009/10/6 4:00', '2009/10/6 5:00', '2009/10/6 6:00', '2009/10/6 7:00', '2009/10/6 8:00', '2009/10/6 9:00', '2009/10/6 10:00', '2009/10/6 11:00', '2009/10/6 12:00', '2009/10/6 13:00', '2009/10/6 14:00', '2009/10/6 15:00', '2009/10/6 16:00', '2009/10/6 17:00', '2009/10/6 18:00', '2009/10/6 19:00', '2009/10/6 20:00', '2009/10/6 21:00', '2009/10/6 22:00', '2009/10/6 23:00', '2009/10/7 0:00', '2009/10/7 1:00', '2009/10/7 2:00', '2009/10/7 3:00', '2009/10/7 4:00', '2009/10/7 5:00', '2009/10/7 6:00', '2009/10/7 7:00', '2009/10/7 8:00', '2009/10/7 9:00', '2009/10/7 10:00', '2009/10/7 11:00', '2009/10/7 12:00', '2009/10/7 13:00', '2009/10/7 14:00', '2009/10/7 15:00', '2009/10/7 16:00', '2009/10/7 17:00', '2009/10/7 18:00', '2009/10/7 19:00', '2009/10/7 20:00', '2009/10/7 21:00', '2009/10/7 22:00', '2009/10/7 23:00', '2009/10/8 0:00', '2009/10/8 1:00', '2009/10/8 2:00', '2009/10/8 3:00', '2009/10/8 4:00', '2009/10/8 5:00', '2009/10/8 6:00', '2009/10/8 7:00', '2009/10/8 8:00', '2009/10/8 9:00', '2009/10/8 10:00', '2009/10/8 11:00', '2009/10/8 12:00', '2009/10/8 13:00', '2009/10/8 14:00', '2009/10/8 15:00', '2009/10/8 16:00', '2009/10/8 17:00', '2009/10/8 18:00', '2009/10/8 19:00', '2009/10/8 20:00', '2009/10/8 21:00', '2009/10/8 22:00', '2009/10/8 23:00', '2009/10/9 0:00', '2009/10/9 1:00', '2009/10/9 2:00', '2009/10/9 3:00', '2009/10/9 4:00', '2009/10/9 5:00', '2009/10/9 6:00', '2009/10/9 7:00', '2009/10/9 8:00', '2009/10/9 9:00', '2009/10/9 10:00', '2009/10/9 11:00', '2009/10/9 12:00', '2009/10/9 13:00', '2009/10/9 14:00', '2009/10/9 15:00', '2009/10/9 16:00', '2009/10/9 17:00', '2009/10/9 18:00', '2009/10/9 19:00', '2009/10/9 20:00', '2009/10/9 21:00', '2009/10/9 22:00', '2009/10/9 23:00', '2009/10/10 0:00', '2009/10/10 1:00', '2009/10/10 2:00', '2009/10/10 3:00', '2009/10/10 4:00', '2009/10/10 5:00', '2009/10/10 6:00', '2009/10/10 7:00', '2009/10/10 8:00', '2009/10/10 9:00', '2009/10/10 10:00', '2009/10/10 11:00', '2009/10/10 12:00', '2009/10/10 13:00', '2009/10/10 14:00', '2009/10/10 15:00', '2009/10/10 16:00', '2009/10/10 17:00', '2009/10/10 18:00', '2009/10/10 19:00', '2009/10/10 20:00', '2009/10/10 21:00', '2009/10/10 22:00', '2009/10/10 23:00', '2009/10/11 0:00', '2009/10/11 1:00', '2009/10/11 2:00', '2009/10/11 3:00', '2009/10/11 4:00', '2009/10/11 5:00', '2009/10/11 6:00', '2009/10/11 7:00', '2009/10/11 8:00', '2009/10/11 9:00', '2009/10/11 10:00', '2009/10/11 11:00', '2009/10/11 12:00', '2009/10/11 13:00', '2009/10/11 14:00', '2009/10/11 15:00', '2009/10/11 16:00', '2009/10/11 17:00', '2009/10/11 18:00', '2009/10/11 19:00', '2009/10/11 20:00', '2009/10/11 21:00', '2009/10/11 22:00', '2009/10/11 23:00', '2009/10/12 0:00', '2009/10/12 1:00', '2009/10/12 2:00', '2009/10/12 3:00', '2009/10/12 4:00', '2009/10/12 5:00', '2009/10/12 6:00', '2009/10/12 7:00', '2009/10/12 8:00', '2009/10/12 9:00', '2009/10/12 10:00', '2009/10/12 11:00', '2009/10/12 12:00', '2009/10/12 13:00', '2009/10/12 14:00', '2009/10/12 15:00', '2009/10/12 16:00', '2009/10/12 17:00', '2009/10/12 18:00', '2009/10/12 19:00', '2009/10/12 20:00', '2009/10/12 21:00', '2009/10/12 22:00', '2009/10/12 23:00', '2009/10/13 0:00', '2009/10/13 1:00', '2009/10/13 2:00', '2009/10/13 3:00', '2009/10/13 4:00', '2009/10/13 5:00', '2009/10/13 6:00', '2009/10/13 7:00', '2009/10/13 8:00', '2009/10/13 9:00', '2009/10/13 10:00', '2009/10/13 11:00', '2009/10/13 12:00', '2009/10/13 13:00', '2009/10/13 14:00', '2009/10/13 15:00', '2009/10/13 16:00', '2009/10/13 17:00', '2009/10/13 18:00', '2009/10/13 19:00', '2009/10/13 20:00', '2009/10/13 21:00', '2009/10/13 22:00', '2009/10/13 23:00', '2009/10/14 0:00', '2009/10/14 1:00', '2009/10/14 2:00', '2009/10/14 3:00', '2009/10/14 4:00', '2009/10/14 5:00', '2009/10/14 6:00', '2009/10/14 7:00', '2009/10/14 8:00', '2009/10/14 9:00', '2009/10/14 10:00', '2009/10/14 11:00', '2009/10/14 12:00', '2009/10/14 13:00', '2009/10/14 14:00', '2009/10/14 15:00', '2009/10/14 16:00', '2009/10/14 17:00', '2009/10/14 18:00', '2009/10/14 19:00', '2009/10/14 20:00', '2009/10/14 21:00', '2009/10/14 22:00', '2009/10/14 23:00', '2009/10/15 0:00', '2009/10/15 1:00', '2009/10/15 2:00', '2009/10/15 3:00', '2009/10/15 4:00', '2009/10/15 5:00', '2009/10/15 6:00', '2009/10/15 7:00', '2009/10/15 8:00', '2009/10/15 9:00', '2009/10/15 10:00', '2009/10/15 11:00', '2009/10/15 12:00', '2009/10/15 13:00', '2009/10/15 14:00', '2009/10/15 15:00', '2009/10/15 16:00', '2009/10/15 17:00', '2009/10/15 18:00', '2009/10/15 19:00', '2009/10/15 20:00', '2009/10/15 21:00', '2009/10/15 22:00', '2009/10/15 23:00', '2009/10/16 0:00', '2009/10/16 1:00', '2009/10/16 2:00', '2009/10/16 3:00', '2009/10/16 4:00', '2009/10/16 5:00', '2009/10/16 6:00', '2009/10/16 7:00', '2009/10/16 8:00', '2009/10/16 9:00', '2009/10/16 10:00', '2009/10/16 11:00', '2009/10/16 12:00', '2009/10/16 13:00', '2009/10/16 14:00', '2009/10/16 15:00', '2009/10/16 16:00', '2009/10/16 17:00', '2009/10/16 18:00', '2009/10/16 19:00', '2009/10/16 20:00', '2009/10/16 21:00', '2009/10/16 22:00', '2009/10/16 23:00', '2009/10/17 0:00', '2009/10/17 1:00', '2009/10/17 2:00', '2009/10/17 3:00', '2009/10/17 4:00', '2009/10/17 5:00', '2009/10/17 6:00', '2009/10/17 7:00', '2009/10/17 8:00', '2009/10/17 9:00', '2009/10/17 10:00', '2009/10/17 11:00', '2009/10/17 12:00', '2009/10/17 13:00', '2009/10/17 14:00', '2009/10/17 15:00', '2009/10/17 16:00', '2009/10/17 17:00', '2009/10/17 18:00', '2009/10/17 19:00', '2009/10/17 20:00', '2009/10/17 21:00', '2009/10/17 22:00', '2009/10/17 23:00', '2009/10/18 0:00', '2009/10/18 1:00', '2009/10/18 2:00', '2009/10/18 3:00', '2009/10/18 4:00', '2009/10/18 5:00', '2009/10/18 6:00', '2009/10/18 7:00', '2009/10/18 8:00'
						];

						timeData = timeData.map(function (str) {
							return str.replace('2009/', '');
						});

						var option = {
							title : {
								text: '雨量流量关系图',
								subtext: '数据来自西安兰特水电测控技术有限公司',
								x: 'center'
							},
							tooltip : {
								trigger: 'axis',
								formatter: function(params) {
									return params[0].name + '<br/>'
										+ params[0].seriesName + ' : ' + params[0].value + ' (m^3/s)<br/>';
								},
								axisPointer: {
									animation: false
								}
							},
							legend: {
								data:['流量','降雨量'],
								x: 'left'
							},
							dataZoom: [
								{
									show: true,
									realtime: true,
									start: 30,
									end: 70,
									xAxisIndex: [0, 1]
								},
								{
									type: 'inside',
									realtime: true,
									start: 30,
									end: 70,
									xAxisIndex: [0, 1]
								}
							],
							grid: [{
								left: 50,
								right: 50,
								height: '35%'
							}, {
								left: 50,
								right: 50,
								top: '55%',
								height: '35%'
							}],
							xAxis : [
								{
									type : 'category',
									boundaryGap : false,
									axisLine: {onZero: true},
									data: timeData
								},
								{
									gridIndex: 1,
									type : 'category',
									boundaryGap : false,
									axisLine: {onZero: true},
									data: timeData,
									position: 'top'
								}
							],
							yAxis : [
								{
									name : '流量(m^3/s)',
									type : 'value',
									max : 500
								},
								{
									gridIndex: 1,
									name : '降雨量(mm)',
									type : 'value',
									inverse: true
								}
							],
							series : [
								{
									name:'流量',
									type:'line',
									symbolSize: 8,
									itemStyle: {
										emphasis: {
										}
									},
									hoverAnimation: false,
									data:[
										0.97,0.96,0.96,0.95,0.95,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.93,0.92,0.91,0.9,0.89,0.88,0.87,0.87,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.87,0.88,0.9,0.93,0.96,0.99,1.03,1.06,1.1,1.14,1.17,1.2,1.23,1.26,1.29,1.33,1.36,1.4,1.43,1.45,1.48,1.49,1.51,1.51,1.5,1.49,1.47,1.44,1.41,1.37,1.34,1.3,1.27,1.24,1.22,1.2,1.19,1.18,1.16,1.15,1.14,1.13,1.12,1.11,1.11,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.09,1.09,1.08,1.07,1.06,1.05,1.04,1.03,1.03,1.02,1.01,1.01,1,0.99,0.98,0.97,0.96,0.96,0.95,0.95,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.93,0.92,0.91,0.9,0.89,0.88,0.87,0.87,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.85,0.84,0.83,0.82,0.81,0.8,0.8,0.79,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.77,0.75,0.73,0.71,0.68,0.65,0.63,0.61,0.59,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.57,0.57,0.57,0.56,0.55,0.55,0.54,0.54,0.53,0.52,0.52,0.51,0.51,0.5,0.5,0.49,0.48,0.48,0.47,0.47,0.47,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.46,0.52,0.67,0.9,1.19,1.52,1.87,2.22,2.55,2.84,3.07,3.22,3.28,3.28,3.28,3.28,3.28,3.28,3.28,3.28,3.28,3.28,3.28,3.28,3.28,3.24,3.13,2.97,2.77,2.54,2.3,2.05,1.82,1.62,1.46,1.35,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.31,1.3,1.26,1.21,1.14,1.06,0.97,0.89,0.81,0.74,0.69,0.65,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.63,0.63,0.62,0.62,0.61,0.6,0.59,0.59,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.59,0.61,0.63,0.65,0.68,0.71,0.73,0.75,0.77,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.77,0.75,0.73,0.71,0.68,0.65,0.63,0.61,0.59,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.59,0.59,0.6,0.61,0.62,0.62,0.63,0.63,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.65,0.66,0.68,0.69,0.71,0.73,0.74,0.76,0.77,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.79,0.81,0.82,0.84,0.86,0.88,0.9,0.92,0.93,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.94,0.93,0.92,0.91,0.9,0.89,0.88,0.87,0.87,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.86,0.85,0.84,0.82,0.8,0.78,0.76,0.75,0.73,0.72,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.72,0.73,0.74,0.76,0.78,0.79,0.82,0.84,0.86,0.89,0.91,0.94,0.97,1,1.02,1.05,1.08,1.11,1.14,1.17,1.19,1.22,1.25,1.27,1.29,1.31,1.33,1.35,1.36,1.38,1.39,1.39,1.4,1.4,1.4,1.39,1.37,1.35,1.32,1.29,1.26,1.22,1.18,1.14,1.1,1.05,1.01,0.97,0.93,0.89,0.85,0.82,0.78,0.76,0.74,0.72,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.72,0.73,0.74,0.75,0.77,0.78,0.8,0.82,0.84,0.87,0.89,0.92,0.94,0.97,0.99,1.02,1.05,1.08,1.1,1.13,1.16,1.18,1.21,1.23,1.26,1.28,1.3,1.32,1.34,1.35,1.37,1.38,1.39,1.4,1.41,1.41,1.42,1.42,1.43,1.43,1.43,1.44,1.44,1.44,1.44,1.45,1.45,1.45,1.46,1.46,1.46,1.47,1.47,1.48,1.48,1.49,1.5,1.51,1.54,1.62,1.73,1.88,2.05,2.24,2.45,2.67,2.89,3.11,3.31,3.51,3.69,3.86,4.03,4.18,4.33,4.48,4.62,4.76,4.89,5.02,5.16,5.29,5.43,5.57,5.71,5.86,6.02,6.18,6.36,6.54,6.73,6.93,7.15,7.38,7.62,7.88,8.16,8.46,8.77,9.11,9.46,9.84,10.24,10.67,11.12,11.6,12.3,13.66,16,38.43,82.21,146.6,218.7,226,225.23,223.08,219.78,212,199.82,184.6,168,151.65,137.21,126.31,119.94,115.52,112.06,108.92,105.44,101,94.56,86.36,77.67,69.76,63.9,60.38,57.41,54.84,52.57,50.56,48.71,46.97,45.25,43.48,41.6,39.5,37.19,34.81,32.46,30.27,28.36,26.85,25.86,25.5,25.5,25.5,25.5,25.5,25.5,25.5,25.5,25.5,25.5,25.5,25.5,25.5,25.27,24.65,23.7,22.52,21.17,19.75,18.33,16.98,15.8,14.85,14.23,14,14.02,14.08,14.17,14.29,14.44,14.61,14.8,15.01,15.23,15.47,15.71,15.95,16.19,16.43,16.67,16.89,17.1,17.29,17.46,17.61,17.73,17.82,17.88,17.9,17.63,16.88,15.75,14.33,12.71,10.98,9.23,7.56,6.05,4.81,3.92,3.47,3.28,3.1,2.93,2.76,2.61,2.46,2.32,2.19,2.07,1.96,1.85,1.75,1.66,1.58,1.51,1.44,1.39,1.34,1.29,1.26,1.23,1.22,1.2,1.2,1.2,1.2,1.2,1.2,1.21,1.21,1.21,1.21,1.22,1.22,1.22,1.23,1.23,1.23,1.24,1.24,1.25,1.25,1.25,1.26,1.26,1.27,1.27,1.27,1.28,1.28,1.28,1.29,1.29,1.29,1.29,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.29,1.29,1.29,1.29,1.28,1.28,1.28,1.27,1.27,1.26,1.25,1.25,1.24,1.23,1.23,1.22,1.21,1.2,1.16,1.06,0.95,0.83,0.74,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.71,0.7,0.7,0.7,0.7,0.7,0.7,0.7,0.7,0.7,0.7,0.7,0.69,0.69,0.69,0.69,0.69,0.69,0.69,0.69,0.68,0.68,0.68,0.68,0.68,0.68,0.67,0.67,0.67,0.67,0.67,0.67,0.67,0.66,0.66,0.66,0.66,0.66,0.66,0.66,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.65,0.66,0.68,0.69,0.71,0.73,0.74,0.76,0.77,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.8,0.86,0.95,1.08,1.25,1.46,1.7,1.97,2.28,2.63,3.01,3.42,3.87,4.35,4.86,5.4,5.98,6.59,7.92,10.49,14.04,18.31,23.04,27.98,32.87,37.45,41.46,44.64,46.74,47.5,46.86,45.16,42.77,40.04,37.33,35,32.74,30.21,27.7,25.5,23.9,23.2,23.06,22.94,22.84,22.77,22.72,22.7,22.8,23.23,23.95,24.91,26.04,27.3,28.76,30.7,33.39,37.12,42.15,48.77,65.22,252.1,257,237.32,221.19,212,208.67,206.89,205.2,202.15,189.82,172,165.3,160.49,156.8,153.44,149.62,144.6,138.27,131,123.11,114.9,106.69,98.79,91.5,85.13,80,75.53,71.03,66.65,62.54,58.85,55.73,53.31,51.75,51.2,56.53,68.25,80,91.01,102.03,109,112.37,115.29,117.68,119.48,120.61,121,119.45,115.57,110.52,105.47,101.58,100,99.97,99.94,99.92,99.9,99.88,99.86,99.85,99.84,99.83,99.82,99.81,99.81,99.8,99.8,99.8,122.15,163.65,186,182.96,175.15,164.56,153.18,143,136,131.37,126.98,122.81,118.85,115.09,111.52,108.13,104.9,101.83,98.9,96.11,93.44,90.87,88.41,86.04,83.74,81.51,79.33,77.2,75.1,73.02,70.95,68.88,66.8,64.87,63.14,61.4,59.53,57.67,56,54.6,53.36,52.2,51.05,49.85,48.5,46.87,44.92,42.74,40.42,38.04,35.69,33.46,31.44,29.72,28.38,27.51,27.2,27.2,27.2,27.2,27.2,27.2,27.2,27.2,27.2,27.2,27.2,27.2,27.2,27.14,26.97,26.7,26.35,25.95,25.49,25.02,24.53,24.04,23.58,23.16,22.8,22.46,22.11,21.75,21.39,21.03,20.69,20.36,20.05,19.78,19.54,19.35,19.2,19.09,19,18.92,18.85,18.79,18.74,18.68,18.62,18.56,18.49,18.4,18.3,18.17,18.02,17.83,17.63,17.41,17.18,16.93,16.68,16.43,16.18,15.93,15.7,15.47,15.22,14.97,14.71,14.45,14.18,13.93,13.68,13.44,13.21,13,12.8,12.62,12.46,12.31,12.16,12.03,11.89,11.76,11.62,11.48,11.33,11.17,11,10.81,10.59,10.36,10.12,9.86,9.61,9.36,9.12,8.89,8.68,8.5,8.35,8.21,8.08,7.94,7.81,7.68,7.56,7.46,7.36,7.29,7.23,7.19,7.18,7.51,8.42,9.81,11.58,13.63,15.86,18.16,20.44,22.58,24.49,26.06,27.2,28.08,28.95,29.81,30.65,31.48,32.28,33.07,33.82,34.55,35.25,35.92,36.56,37.15,37.71,38.23,38.7,39.13,39.5,39.83,40.1,40.31,40.47,40.57,40.6,40.49,40.16,39.64,38.94,38.09,37.1,36,34.79,33.51,32.17,30.79,29.39,27.99,26.6,25.25,23.96,22.75,21.63,20.63,19.76,19.04,18.49,18.14,18,17.97,17.95,17.94,17.92,17.91,17.9,17.89,17.88,17.87,17.85,17.83,17.8,17.7,17.46,17.13,16.7,16.21,15.68,15.13,14.57,14.04,13.56,13.14,12.8,12.52,12.27,12.02,11.79,11.57,11.37,11.16,10.97,10.78,10.59,10.39,10.2,10.01,9.81,9.63,9.44,9.26,9.08,8.9,8.73,8.56,8.39,8.22,8.06,7.9,7.73,7.57,7.41,7.25,7.09,6.94,6.79,6.65,6.52,6.4,6.28,6.17,6.08,5.98,5.9,5.81,5.73,5.65,5.57,5.49,5.41,5.32,5.23,5.14,5.04,4.94,4.84,4.74,4.63,4.53,4.43,4.33,4.23,4.13,4.03,3.93,3.81,3.69,3.57,3.45,3.33,3.22,3.12,3.04,2.98,2.93,2.92,2.92,2.92,2.92,2.92,2.92,2.92,2.92,2.92,2.92,2.92,2.92,2.92,2.9,2.86,2.8,2.71,2.62,2.52,2.42,2.33,2.24,2.18,2.14,2.12,2.12,2.12,2.12,2.12,2.12,2.12,2.12,2.12,2.12,2.12,2.12,2.12,2.1,2.06,2,1.91,1.82,1.71,1.61,1.5,1.4,1.32,1.25,1.2,1.16,1.13,1.1,1.06,1.03,1,0.97,0.93,0.9,0.87,0.85,0.82,0.79,0.77,0.74,0.72,0.69,0.67,0.65,0.63,0.61,0.59,0.58,0.56,0.54,0.53,0.52,0.51,0.5,0.49,0.48,0.48,0.47,0.47,0.46,0.46,0.47,0.48,0.5,0.53,0.56,0.59,0.62,0.64,0.67,0.69,0.7,0.71,0.71,0.71,0.71,0.7,0.7,0.7,0.69,0.69,0.69,0.68,0.68,0.67,0.67,0.67,0.66,0.66,0.65,0.65,0.65,0.65,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.65,0.65,0.65,0.66,0.66,0.67,0.68,0.69,0.69,0.7,0.71,0.73,0.74,0.75,0.76,0.78,0.8,0.81,0.83,0.85,0.87,0.89,0.92,0.94,0.97,0.99,1.02,1.05,1.08,1.11,1.15,1.18,1.32,1.66,2.21,2.97,3.94,5.11,6.5,8.1,9.9,11.92,14.15,16.6,22.3,22.8,24.48,30.38,35.74,42.4,57.14,94.04,112.9,123.4,130.4,130,119.4,120.7,116.8,118.1,119.4,124.8,143.5,204,294,319.2,328.4,365,350.8,347.6,347.6,325,331.6,319.2,308,308,308,308,296.8,300,281,278.4,270.6,271,253.6,233.5,219.2,207.8,205.9,204,189.6,178.8,173.4,160,154.4,146,145,140.5,130.4,126.2,116.8,112.9,106.5,101.6,98.51,82.67,67.3,80.05,76.12,72.3,71.02,69.78,67.3,67.3,68.54,57.6,71.02,66.06,59.12,57.14,55.16,55.16,52.19,52.19,51.2,48.56,44.16,43,45.92,49.44,44.16,36.48,35.74,35,32.36,37.22,32.36,32.36,32.36,33.68,32.36,31.7,35.74,29.72,32.36,30.38,29.72,28.4,28.4,28.4,27.28,25.6,25.04,23.92,22.3,21.8,21.8,21.8,22.8,21.8,25.6,22.8,22.8,17.8,16.04,16.04,16.04,16.04,16.04,16.04,16.04,16.04,16.04,16.04,15.02,14,14.03,14.11,14.25,14.45,14.72,15.06,15.46,15.95,16.51,17.15,17.87,18.69,19.59,20.59,21.69,22.88,24.18,25.59,27.1,28.73,30.48,32.34,34.33,36.44,38.69,41.06,43.57,46.22,49.01,51.95,55.04,58.27,61.66,65.21,68.92,72.8,88.09,104.9,105.7,110.3,111.6,110.3,106.5,105.7,103.3,100,97.02,98.8,91.07,83.98,88.09,81.36,78.74,77.43,77.43,73.5,74.81,72.63,68.58,66.4,68.54,69.78,67.3,64.82,61.1,59.12,56.15,53.18,50.32,49.44,44.16,36.5,42.4,37.96,37.22,33.68,36.48,35.74,35,35,37.22,37.22,39.44,32.6,34.54,36.48,35.74,34.34,33.68,33.02,31.04,29.72,29.72,29.72,26.16,25.6,29.72,18.3,22.3,21.3,21.8,21.8,20.3,20.8,25.04,25.04,25.6,25.6,25.04,25.6,25.04,25.6,23.92,25.04,21.3,21.8,22.3,21.8,20.8,16.1,20.3,18.3,13.22,19.3,19.3,18.3,14.4,13.86,13.36,12.9,12.48,12.1,11.75,11.43,11.15,10.9,10.67,10.48,10.31,10.16,10.04,9.93,9.85,9.78,9.73,9.69,9.67,9.65,9.65,12.08,8.67,11.7,11.38,10.65,9.84,9.32,9.07,8.85,8.66,8.49,8.35,8.22,8.1,7.98,7.86,7.74,7.61,7.47,7.31,7.14,6.96,6.78,6.58,6.39,6.19,5.99,5.78,5.58,5.39,5.2,5.01,4.83,4.67,4.51,4.37,4.24,4.12,4.02,3.95,3.89,3.85,3.84,4.41,5.77,7.39,8.75,9.32,9.18,9,8.94,8.88,8.83,8.78,8.73,8.68,8.64,8.6,8.56,8.53,8.5,8.47,8.45,8.42,8.4,8.39,8.37,8.36,8.35,8.35,8.34,8.34,8.67,9.65,9.62,9.53,9.4,9.21,8.98,8.7,8.4,8.06,7.69,7.3,6.89,6.47,6.03,5.59,5.14,4.7,4.26,3.83,3.42,3.02,2.65,2.3,1.98,1.7,1.45,1.25,1.09,0.99,0.94,0.92,0.91,0.89,0.87,0.85,0.84,0.82,0.81,0.79,0.78,0.77,0.75,0.74,0.73,0.72,0.71,0.7,0.69,0.68,0.67,0.66,0.65,0.64,0.64,0.63,0.63,0.62,0.62,0.61,0.61,0.61,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.61,0.61,0.61,0.61,0.61,0.61,0.62,0.62,0.62,0.62,0.63,0.63,0.63,0.63,0.63,0.64,0.64,0.64,0.64,0.64,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.64,0.63,0.62,0.6,0.59,0.57,0.55,0.54,0.53,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.51,0.51,0.51,0.5,0.5,0.49,0.48,0.47,0.47,0.46,0.45,0.45,0.44,0.43,0.42,0.42,0.41,0.41,0.41,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.41,0.42,0.43,0.44,0.46,0.48,0.5,0.53,0.55,0.58,0.61,0.64,0.67,0.7,0.73,0.77,0.8,0.83,0.87,0.9,0.93,0.96,0.99,1.02,1.05,1.08,1.1,1.12,1.14,1.16,1.17,1.18,1.19,1.2,1.2,1.2,1.19,1.17,1.15,1.12,1.09,1.06,1.02,0.98,0.94,0.9,0.86,0.82,0.78,0.74,0.7,0.66,0.63,0.6,0.57,0.55,0.53,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.51,0.51,0.5,0.5,0.49,0.49,0.48,0.47,0.47,0.47,0.46,0.46,0.45,0.45,0.45,0.44,0.44,0.44,0.43,0.43,0.43,0.42,0.42,0.42,0.41,0.41,0.41,0.41,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.41,0.41,0.41,0.41,0.41,0.41,0.41,0.41,0.41,0.41,0.41,0.41,0.41,0.41,0.41,0.42,0.42,0.42,0.42,0.42,0.42,0.42,0.42,0.42,0.43,0.43,0.43,0.43,0.43,0.43,0.44,0.44,0.44,0.44,0.44,0.44,0.45,0.45,0.45
									]
								},
								{
									name:'降雨量',
									type:'line',
									xAxisIndex: 1,
									yAxisIndex: 1,
									symbolSize: 8,
									itemStyle: {
										emphasis: {
										}
									},
									hoverAnimation: false,
									data: [
										0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.005,0.017,0.017,0.017,0.017,0.011,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.021,0.026,0.03,0.036,0.036,0.195,0.221,0.019,0.013,0.017,0.03,0.03,0.03,0.046,0.045,0.038,0.084,0.045,0.045,0.037,0.034,0.035,0.036,0.044,0.052,0.048,0.109,0.033,0.029,0.04,0.042,0.042,0.042,0.073,0.076,0.062,0.066,0.066,0.075,0.096,0.128,0.121,0.128,0.14,0.226,0.143,0.097,0.018,0,0,0,0,0,0.018,0.047,0.054,0.054,0.054,0.036,0.185,0.009,0.038,0.061,0.077,0.091,0.126,0.69,0.182,0.349,0.231,0.146,0.128,0.167,0.1,0.075,0.071,0.071,0.117,0.01,0.002,0.002,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.005,0.026,0.038,0.038,0.038,0.076,0.086,0.109,0.213,0.276,0.288,0.297,0.642,1.799,1.236,2.138,0.921,0.497,0.685,0.828,0.41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.018,0.024,0.024,0.024,0.024,0.006,0.003,0.046,0.046,0.046,0.046,0.043,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.204,0.303,1.028,1.328,1.524,1.41,1.362,1.292,1.191,0.529,0.501,0.944,1.81,2.899,0.859,0.126,0.087,0.047,0,0,0,0,0.011,0.028,0.028,0.028,0.028,0.017,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.099,0.159,0.297,0.309,0.309,0.614,0.818,1.436,1.195,0.553,0.542,0.955,0.898,0.466,0.386,0.556,0.388,0.221,0.192,0.192,0.187,0.166,0.18,0.302,0.158,0.009,0.009,0.009,0.009,0.009,0.007,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.004,0.032,0.032,0.032,0.032,0.082,0.149,0.204,0.247,0.262,0.49,0.51,0.533,0.746,0.847,2.393,1.188,1.114,0.475,0.043,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.017,0.017,0.021,0.042,0.079,0.111,0.126,0.122,0.133,0.846,0.102,0.077,0.067,0.056,0.005,0,0,0,0,0,0,0,0,0,0,0,0,0,0.011,0.017,0.017,0.017,0.017,0.006,0,0,0,0,0,0.01,0.03,0.054,0.067,0.07,0.25,0.251,0.494,0.065,0.054,0.054,0.064,0.084,0.077,0.101,0.132,0.248,0.069,0.117,0.115,0.087,0.326,0.036,0.009,0.009,0.009,0.009,0.009,0.004,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.02,0.039,0.04,0.04,0.04,0.229,0.079,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.023,0.069,0.082,0.082,0.082,0.503,0.774,0.038,0.012,0.012,0.012,0.016,0.02,0.028,0.051,0.06,0.064,0.19,0.15,0.164,0.139,0.13,0.085,0.031,0.023,0.022,0.007,0.005,0.005,0.001,0,0.02,0.048,0.048,0.053,0.056,0.036,0.008,0.008,0.004,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.013,0.017,0.036,0.068,0.095,0.233,0.272,0.377,0.722,1.494,3.756,0.954,0.439,0.442,0.462,0.373,0.249,0.214,0.1,0.044,0.037,0.023,0.002,0,0,0,0,0,0,0.02,0.024,0.024,0.024,0.024,0.004,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.008,0.017,0.017,0.045,0.186,0.308,0.241,0.241,0.893,4.067,4.494,5.015,3.494,2.057,1.411,0.718,0.407,0.313,0.339,1.537,1.105,0.218,0.136,0.03,0.005,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.037,0.448,1.2,1.309,1.309,1.425,1.223,0.471,0.767,0.423,0.273,0.412,0.646,0.481,0.239,0.131,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.044,0.15,0.223,0.388,0.513,0.883,2.828,4.786,5.959,4.95,6.434,6.319,3.35,2.806,4.204,1.395,1.015,1.015,0.836,0.74,0.72,0.615,0.477,0.192,0.046,0.007,0.007,0.007,0.007,0.007,0.007,0.007,0.008,0.005,0.005,0.005,0.005,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.001,0.012,0.012,0.012,0.012,0.011,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.002,0.012,0.028,0.028,0.028,0.138,0.092,0.082,0.082,0.096,0.719,0.155,0.042,0.047,0.129,0.021,0.021,0.014,0.009,0.029,0.067,0.088,0.095,0.095,0.138,0.091,0.032,0.025,0.025,0.003,0,0,0,0,0,0,0,0,0,0,0,0,0.002,0.045,0.228,0.297,0.325,0.339,0.581,1.244,0.796,0.517,0.227,0.053,0.006,0,0,0,0,0,0,0,0,0,0.003,0.005,0.005,0.005,0.005,0.081,0.129,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.014,0.041,0.041,0.041,0.041,0.027,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.009,0.017,0.017,0.017,0.017,0.355,0.174,0.009,0.009,0.012,0.136,0.208,0.208,0.208,0.215,7.359,1.858,0.458,0.053,0.053,0.047,0.045,0.045,0.059,0.136,0.188,0.206,0.21,0.588,1.517,6.02,4.688,4.42,0.624,0.326,0.359,0.553,0.899,0.94,2.95,9.415,5.752,1.092,0.096,0.035,0.026,0.018,0.015,0.011,0.011,0.011,0,0,0,0,0,0,0,0,0,0,0,0.056,0.27,0.314,0.351,0.354,0.609,0.796,1.857,0.848,0.538,0.214,0.178,0.178,0.201,0.231,0.227,0.272,0.397,0.45,1.014,2.917,1.675,0.081,0.059,0.059,0.148,0.075,0.075,0.078,0.236,0.784,0.784,0.784,0.784,0.741,0.115,0.058,0.058,0.058,0.029,0.015,0.015,0.015,0.015,0.012,0.008,0.604,0.985,1.305,2.273,2.528,2.336,2.496,2.281,1.397,1.713,3.259,1.167,0.745,0.548,1.058,0.684,0.728,0.392,0.179,0.283,0.283,0.46,0.08,0.099,0.099,0.099,0.1,0.143,0.137,0.238,0.317,0.262,0.225,0.792,0.426,0.332,0.261,0.11,0.093,0.102,0.171,0.292,0.504,0.605,1.745,2.485,1.964,0.33,0.171,0.259,0.242,0.215,0.366,0.354,0.205,0.203,0.262,0.153,0.13,0.137,0.362,0.691,0.295,0.433,0.154,0.056,0.053,0.053,0.053,0.051,0.047,0.065,0.078,0.091,0.206,0.813,0.102,0.151,0.05,0.024,0.004,0.001,0,0,0,0.021,0.021,0.021,0.021,0.021,0.013,0.013,0.013,0.013,0.013,0.013,0.013,0.013,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.008,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.018,0.021,0.021,0.021,0.021,0.003,0,0,0,0,0,0,0,0,0,0.024,0.173,0.261,0.267,0.267,0.534,1.354,1.772,0.72,0.218,0.018,0.018,0.028,0.036,0.032,0.194,0.082,0.035,0.286,0.027,0.038,0.038,0.027,0.021,0.014,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.016,0.017,0.017,0.031,0.047,0.043,0.056,0.104,0.149,0.179,0.205,0.328,0.998,0.522,1.851,3.727,3.273,2.204,1.169,1.006,1.179,0.74,0.741,1.065,0.925,0.671,0.497,0.431,0.327,0.277,0.126,0.581,0.207,0.359,2.485,0.038,0.036,0.003,0.003,0.003,0.003,0.004,0.098,0.023,0.021,0.021,0.022,0.041,0.041,0.043,0.045,0.043,0.014,0.014,0.014,0.014,0.014,0.014,0.014,0.031,0.046,0.063,0.119,0.107,0.092,0.085,0.065,0.06,0.054,0.042,0.039,0.046,0.044,0.028,0.028,0.02,0.013,0.013,0.013,0.013,0.016,0.032,0.031,0.031,0.031,0.028,0.011,0.011,0.011,0.011,0.011,0.023,0.024,0.024,0.024,0.019,0.015,0.015,0.015,0.015,0.015,0.015,0.013,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.001,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.011,0.017,0.024,0.026,0.061,0.172,0.206,0.213,0.267,0.511,0.668,0.157,0.017,0.017,0.017,0.046,0.054,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.001,0.017,0.017,0.017,0.017,0.016,0,0,0,0,0,0,0,0,0,0.01,0.017,0.017,0.017,0.017,0.012,0.017,0.017,0.017,0.017,0.012,0,0,0,0,0,0.003,0.031,0.066,0.093,0.112,0.122,0.202,0.068,0.041,0.022,0.011,0,0,0,0,0,0,0,0,0,0,0,0.002,0.005,0.012,0.021,0.021,0.019,0.033,0.03,0.026,0.026,0.034,0.095,0.024,0.024,0.024,0.023,0.019,0.018,0.018,0.018,0.011,0.03,0.045,0.044,0.044,0.044,0.022,0.009,0.024,0.033,0.033,0.033,0.024,0.009,0,0,0,0,0,0,0.003,0.017,0.017,0.017,0.017,0.014,0,0,0,0,0,0.032,0.032,0.032,0.032,0.032,0.005,0.008,0.009,0.014,0.014,0.009,0.005,0.004,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.007,0.009,0.009,0.009,0.009,0.043,0.063,0.084,0.098,0.101,0.213,0.334,0.383,0.43,0.448,0.511,0.801,0.835,1.642,1.614,1.496,1.496,1.476,1.068,0.481,0.22,0.119,0.099,0.07,0.072,0.063,0.076,0.14,0.205,0.28,0.297,0.3,0.479,0.877,1.098,1.611,1.629,1.686,1.686,1.631,1.528,1.862,1.703,1.531,2.196,0.395,0.416,0.453,0.728,0.917,0.986,1.17,2.171,3.011,2.909,3.301,1.377,0.778,0.799,0.947,1.039,0.879,0.76,1.372,1.674,1.674,1.68,1.823,1.793,1.162,0.783,0.216,0.152,0.152,0.152,0.049,0,0,0,0.117,0.127,0.127,0.127,0.127,0.127,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.003,0.005,0.005,0.005,0.005,0.003,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.309,0.364,0.364,0.364,0.364,0.063,0.01,0.01,0.01,0.012,0.015,0.015,0.11,0.55,0.824,0.825,0.829,1.39,1.429,1.342,1.43,1.636,1.717,2.135,2.203,3.191,3.022,1.589,0.86,0.807,0.645,0.595,0.588,0.557,0.552,1.271,0.708,0.677,0.629,0.714,0.203,0.133,0.061,0.062,0.018,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.001,0.072,0.29,0.438,0.53,0.557,0.873,1.039,1.04,0.208,0.049,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.03,0.039,0.039,0.039,0.039,0.098,0.008,0.007,0.007,0.007,0.007,0.007,0.007,0.007,0.007,0.007,0.056,0.062,0.065,0.065,0.065,0.047,0.216,0.256,0.315,0.4,0.502,0.449,0.47,0.571,0.814,1.153,0.774,0.202,0.086,0.075,0.071,0.032,0.019,0.003,0.004,0.004,0.004,0.004,0.004,0.004,0.007,0.072,0.153,0.256,0.306,0.404,0.698,0.733,0.823,0.715,0.563,0.404,0.293,0.217,0.213,0.202,0.202,0.294,0.704,0.797,1.359,1.101,0.72,0.514,0.539,0.434,0.389,0.387,0.386,0.375,0.369,0.319,0.239,0.183,0.136,0.062,0.052,0.096,0.119,0.119,0.114,0.127,0.132,0.139,0.169,0.191,0.278,0.254,0.214,0.237,0.221,0.143,0.129,0.125,0.109,0.1,0.087,0.06,0.038,0.029,0.029,0.028,0.048,0.053,0.053,0.111,0.125,0.102,0.097,0.097,0.039,0.02,0.02,0.02,0.014,0.004,0.031,0.043,0.047,0.052,0.08,0.144,0.182,0.176,0.171,0.149,0.112,0.025,0,0,0,0,0,0,0,0.016,0.031,0.031,0.031,0.031,0.015,0,0,0,0,0,0.005,0.005,0.005,0.005,0.005,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.005,0.005,0.005,0.005,0.005,0.001,0,0,0
									]
								}
							]
						};
						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-line6": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var easingFuncs = {
							linear: function (k) {
								return k;
							},
							quadraticIn: function (k) {
								return k * k;
							},
							quadraticOut: function (k) {
								return k * (2 - k);
							},
							quadraticInOut: function (k) {
								if ((k *= 2) < 1) { return 0.5 * k * k; }
								return -0.5 * (--k * (k - 2) - 1);
							},
							cubicIn: function (k) {
								return k * k * k;
							},
							cubicOut: function (k) {
								return --k * k * k + 1;
							},
							cubicInOut: function (k) {
								if ((k *= 2) < 1) { return 0.5 * k * k * k; }
								return 0.5 * ((k -= 2) * k * k + 2);
							},
							quarticIn: function (k) {
								return k * k * k * k;
							},
							quarticOut: function (k) {
								return 1 - (--k * k * k * k);
							},
							quarticInOut: function (k) {
								if ((k *= 2) < 1) { return 0.5 * k * k * k * k; }
								return -0.5 * ((k -= 2) * k * k * k - 2);
							},
							quinticIn: function (k) {
								return k * k * k * k * k;
							},
							quinticOut: function (k) {
								return --k * k * k * k * k + 1;
							},
							quinticInOut: function (k) {
								if ((k *= 2) < 1) { return 0.5 * k * k * k * k * k; }
								return 0.5 * ((k -= 2) * k * k * k * k + 2);
							},
							sinusoidalIn: function (k) {
								return 1 - Math.cos(k * Math.PI / 2);
							},
							sinusoidalOut: function (k) {
								return Math.sin(k * Math.PI / 2);
							},
							sinusoidalInOut: function (k) {
								return 0.5 * (1 - Math.cos(Math.PI * k));
							},
							exponentialIn: function (k) {
								return k === 0 ? 0 : Math.pow(1024, k - 1);
							},
							exponentialOut: function (k) {
								return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
							},
							exponentialInOut: function (k) {
								if (k === 0) {
									return 0;
								}
								if (k === 1) {
									return 1;
								}
								if ((k *= 2) < 1) {
									return 0.5 * Math.pow(1024, k - 1);
								}
								return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
							},
							circularIn: function (k) {
								return 1 - Math.sqrt(1 - k * k);
							},
							circularOut: function (k) {
								return Math.sqrt(1 - (--k * k));
							},
							circularInOut: function (k) {
								if ((k *= 2) < 1) { return -0.5 * (Math.sqrt(1 - k * k) - 1); }
								return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
							},
							elasticIn: function (k) {
								var s;
								var a = 0.1;
								var p = 0.4;
								if (k === 0) { return 0; }
								if (k === 1) { return 1; }
								if (!a || a < 1) { a = 1; s = p / 4; }
								else { s = p * Math.asin(1 / a) / (2 * Math.PI); }
								return -(a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
							},
							elasticOut: function (k) {
								var s;
								var a = 0.1;
								var p = 0.4;
								if (k === 0) { return 0; }
								if (k === 1) { return 1; }
								if (!a || a < 1) { a = 1; s = p / 4; }
								else { s = p * Math.asin(1 / a) / (2 * Math.PI); }
								return (a * Math.pow(2, -10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1);
							},
							elasticInOut: function (k) {
								var s;
								var a = 0.1;
								var p = 0.4;
								if (k === 0) { return 0; }
								if (k === 1) { return 1; }
								if (!a || a < 1) { a = 1; s = p / 4; }
								else { s = p * Math.asin(1 / a) / (2 * Math.PI); }
								if ((k *= 2) < 1) {
									return -0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
								}
								return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;

							},

							// 在某一动画开始沿指示的路径进行动画处理前稍稍收回该动画的移动
							backIn: function (k) {
								var s = 1.70158;
								return k * k * ((s + 1) * k - s);
							},
							backOut: function (k) {
								var s = 1.70158;
								return --k * k * ((s + 1) * k + s) + 1;
							},
							backInOut: function (k) {
								var s = 1.70158 * 1.525;
								if ((k *= 2) < 1) { return 0.5 * (k * k * ((s + 1) * k - s)); }
								return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
							},

							// 创建弹跳效果
							bounceIn: function (k) {
								return 1 - easingFuncs.bounceOut(1 - k);
							},
							bounceOut: function (k) {
								if (k < (1 / 2.75)) { return 7.5625 * k * k; }
								else if (k < (2 / 2.75)) { return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75; }
								else if (k < (2.5 / 2.75)) { return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375; }
								else { return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375; }
							},
							bounceInOut: function (k) {
								if (k < 0.5) { return easingFuncs.bounceIn(k * 2) * 0.5; }
								return easingFuncs.bounceOut(k * 2 - 1) * 0.5 + 0.5;
							}
						};

						var N_POINT = 30;

						var grids = [];
						var xAxes = [];
						var yAxes = [];
						var series = [];
						var titles = [];
						var count = 0;
						echarts.util.each(easingFuncs, function (easingFunc, name) {
							var data = [];
							for (var i = 0; i <= N_POINT; i++) {
								var x = i / N_POINT;
								var y = easingFunc(x);
								data.push([x, y]);
							}
							grids.push({
								show: true,
								borderWidth: 0,
								backgroundColor: '#fff',
								shadowColor: 'rgba(0, 0, 0, 0.3)',
								shadowBlur: 2
							});
							xAxes.push({
								type: 'value',
								show: false,
								min: 0,
								max: 1,
								gridIndex: count
							});
							yAxes.push({
								type: 'value',
								show: false,
								min: -0.4,
								max: 1.4,
								gridIndex: count
							});
							series.push({
								name: name,
								type: 'line',
								xAxisIndex: count,
								yAxisIndex: count,
								data: data,
								showSymbol: false,
								animationEasing: name,
								animationDuration: 1000
							});
							titles.push({
								textAlign: 'center',
								text: name,
								textStyle: {
									fontSize: 12,
									fontWeight: 'normal'
								}
							});
							count++;
						});

						var rowNumber = Math.ceil(Math.sqrt(count));
						echarts.util.each(grids, function (grid, idx) {
							grid.left = ((idx % rowNumber) / rowNumber * 100 + 0.5) + '%';
							grid.top = (Math.floor(idx / rowNumber) / rowNumber * 100 + 0.5) + '%';
							grid.width = (1 / rowNumber * 100 - 1) + '%';
							grid.height = (1 / rowNumber * 100 - 1) + '%';

							titles[idx].left = parseFloat(grid.left) + parseFloat(grid.width) / 2 + '%';
							titles[idx].top = parseFloat(grid.top) + '%';
						});

						var option = {
							title: titles.concat([{
								text: 'Different Easing Functions',
								top: 'bottom',
								left: 'center'
							}]),
							grid: grids,
							xAxis: xAxes,
							yAxis: yAxes,
							series: series
						};

						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-line7": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var option = {
							title: {
								text: '对数轴示例',
								left: 'center'
							},
							tooltip: {
								trigger: 'item',
								formatter: '{a} <br/>{b} : {c}'
							},
							legend: {
								left: 'left',
								data: ['2的指数', '3的指数']
							},
							xAxis: {
								type: 'category',
								name: 'x',
								splitLine: {show: false},
								data: ['一', '二', '三', '四', '五', '六', '七', '八', '九']
							},
							grid: {
								left: '3%',
								right: '4%',
								bottom: '3%',
								containLabel: true
							},
							yAxis: {
								type: 'log',
								name: 'y'
							},
							series: [
								{
									name: '3的指数',
									type: 'line',
									data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]
								},
								{
									name: '2的指数',
									type: 'line',
									data: [1, 2, 4, 8, 16, 32, 64, 128, 256]
								},
								{
									name: '1/2的指数',
									type: 'line',
									data: [1/2, 1/4, 1/8, 1/16, 1/32, 1/64, 1/128, 1/256, 1/512]
								}
							]
						};

						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-line8": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var option = {
							title : {
								text: '未来一周气温变化',
								subtext: '纯属虚构'
							},
							tooltip : {
								trigger: 'axis'
							},
							legend: {
								data:['最高气温','最低气温']
							},
							toolbox: {
								show : true,
								feature : {
									dataZoom: {},
									dataView: {readOnly: false},
									magicType: {type: ['line', 'bar']},
									restore: {},
									saveAsImage: {}
								}
							},
							xAxis : [
								{
									type : 'category',
									boundaryGap : false,
									data : ['周一','周二','周三','周四','周五','周六','周日']
								}
							],
							yAxis : [
								{
									type : 'value',
									axisLabel : {
										formatter: '{value} °C'
									}
								}
							],
							series : [
								{
									name:'最高气温',
									type:'line',
									data:[11, 11, 15, 13, 12, 13, 10],
									markPoint : {
										data : [
											{type : 'max', name: '最大值'},
											{type : 'min', name: '最小值'}
										]
									},
									markLine : {
										data : [
											{type : 'average', name: '平均值'}
										]
									}
								},
								{
									name:'最低气温',
									type:'line',
									data:[1, -2, 2, 5, 3, 2, 0],
									markPoint : {
										data : [
											{name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
										]
									},
									markLine : {
										data : [
											{type : 'average', name : '平均值'}
										]
									}
								}
							]
						};

						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-line9": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var data = [];

						for (var i = 0; i <= 100; i++) {
							var theta = i / 100 * 360;
							var r = 5 * (1 + Math.sin(theta / 180 * Math.PI));
							data.push([r, theta]);
						}

						var option = {
							legend: {
								data: ['line']
							},
							polar: {},
							tooltip: {
								trigger: 'axis',
								axisPointer: {
									type: 'cross'
								}
							},
							angleAxis: {
								type: 'value',
								startAngle: 0
							},
							radiusAxis: {
							},
							series: [{
								coordinateSystem: 'polar',
								name: 'line',
								type: 'line',
								data: data
							}]
						};

						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-line10": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var data = [];

						for (var i = 0; i <= 360; i++) {
							var t = i / 180 * Math.PI;
							var r = Math.sin(2 * t) * Math.cos(2 * t);
							data.push([r, i]);
						}

						var option = {
							legend: {
								data: ['line']
							},
							polar: {
								center: ['50%', '54%']
							},
							tooltip: {
								trigger: 'axis',
								axisPointer: {
									type: 'cross'
								}
							},
							angleAxis: {
								type: 'value',
								startAngle: 0
							},
							radiusAxis: {
								min: 0
							},
							series: [{
								coordinateSystem: 'polar',
								name: 'line',
								type: 'line',
								showSymbol: false,
								data: data
							}],
							animationDuration: 2000
						};
						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-line11": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var option = {
							tooltip : {
								trigger: 'axis'
							},
							legend: {
								data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
							},
							grid: {
								left: '3%',
								right: '4%',
								bottom: '3%',
								containLabel: true
							},
							toolbox: {
								feature: {
									saveAsImage: {}
								}
							},
							xAxis : [
								{
									type : 'category',
									boundaryGap : false,
									data : ['周一','周二','周三','周四','周五','周六','周日']
								}
							],
							yAxis : [
								{
									type : 'value'
								}
							],
							series : [
								{
									name:'邮件营销',
									type:'line',
									stack: '总量',
									data:[120, 132, 101, 134, 90, 230, 210]
								},
								{
									name:'联盟广告',
									type:'line',
									stack: '总量',
									data:[220, 182, 191, 234, 290, 330, 310]
								},
								{
									name:'视频广告',
									type:'line',
									stack: '总量',
									data:[150, 232, 201, 154, 190, 330, 410]
								},
								{
									name:'直接访问',
									type:'line',
									stack: '总量',
									data:[320, 332, 301, 334, 390, 330, 320]
								},
								{
									name:'搜索引擎',
									type:'line',
									stack: '总量',
									data:[820, 932, 901, 934, 1290, 1330, 1320]
								}
							]
						};

						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-line12": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var option = {
							legend: {
								data:['高度(km)与气温(°C)变化关系']
							},
							tooltip : {
								trigger: 'axis',
								formatter: "Temperature : <br/>{b}km : {c}°C"
							},
							grid: {
								left: '3%',
								right: '4%',
								bottom: '3%',
								containLabel: true
							},
							xAxis : [
								{
									type : 'value',
									axisLabel : {
										formatter: '{value} °C'
									}
								}
							],
							yAxis : [
								{
									type : 'category',
									axisLine : {onZero: false},
									axisLabel : {
										formatter: '{value} km'
									},
									boundaryGap : false,
									data : ['0', '10', '20', '30', '40', '50', '60', '70', '80']
								}
							],
							series : [
								{
									name:'高度(km)与气温(°C)变化关系',
									type:'line',
									smooth:true,
									itemStyle: {
										normal: {
											lineStyle: {
												shadowColor : 'rgba(0,0,0,0.4)'
											}
										}
									},
									data:[15, -50, -56.5, -46.5, -22.1, -2.5, -27.7, -55.7, -76.5]
								}
							]
						};
						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-bar1": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var option = {
							tooltip : {
								trigger: 'axis',
								axisPointer : {            // 坐标轴指示器，坐标轴触发有效
									type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
								}
							},
							legend: {
								data:['利润', '支出', '收入']
							},
							grid: {
								left: '3%',
								right: '4%',
								bottom: '3%',
								containLabel: true
							},
							xAxis : [
								{
									type : 'value'
								}
							],
							yAxis : [
								{
									type : 'category',
									axisTick : {show: false},
									data : ['周一','周二','周三','周四','周五','周六','周日']
								}
							],
							series : [
								{
									name:'利润',
									type:'bar',
									itemStyle : {
										normal: {
											label: {show: true, position: 'inside'}
										}
									},
									data:[200, 170, 240, 244, 200, 220, 210]
								},
								{
									name:'收入',
									type:'bar',
									stack: '总量',
									itemStyle: {
										normal: {
											label : {show: true}
										}
									},
									data:[320, 302, 341, 374, 390, 450, 420]
								},
								{
									name:'支出',
									type:'bar',
									stack: '总量',
									itemStyle: {normal: {
										label : {show: true, position: 'left'}
									}},
									data:[-120, -132, -101, -134, -190, -230, -210]
								}
							]
						};

						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-bar2": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var labelRight = {normal: {label : {position: 'right'}}};
						var option = {
							title: {
								text: '交错正负轴标签',
								subtext: 'From ExcelHome',
								sublink: 'http://e.weibo.com/1341556070/AjwF2AgQm'
							},
							tooltip : {
								trigger: 'axis',
								axisPointer : {            // 坐标轴指示器，坐标轴触发有效
									type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
								}
							},
							grid: {
								top: 80,
								bottom: 30
							},
							xAxis : [
								{
									type : 'value',
									position: 'top',
									splitLine: {lineStyle:{type:'dashed'}},
								}
							],
							yAxis : [
								{
									type : 'category',
									axisLine: {show: false},
									axisLabel: {show: false},
									axisTick: {show: false},
									splitLine: {show: false},
									data : ['ten', 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one']
								}
							],
							series : [
								{
									name:'生活费',
									type:'bar',
									stack: '总量',
									itemStyle : { normal: {
										borderRadius: 5,
										label : {
											show: true,
											position: 'left',
											formatter: '{b}'
										}
									}},
									data:[
										{value:-0.07, itemStyle:labelRight},
										{value:-0.09, itemStyle:labelRight},
										0.2, 0.44,
										{value:-0.23, itemStyle:labelRight},
										0.08,
										{value:-0.17, itemStyle:labelRight},
										0.47,
										{value:-0.36, itemStyle:labelRight},
										0.18
									]
								}
							]
						};

						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-bar3": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var option = {
							tooltip : {
								trigger: 'axis',
								axisPointer : {            // 坐标轴指示器，坐标轴触发有效
									type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
								}
							},
							legend: {
								data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
							},
							grid: {
								left: '3%',
								right: '4%',
								bottom: '3%',
								containLabel: true
							},
							xAxis : [
								{
									type : 'category',
									data : ['周一','周二','周三','周四','周五','周六','周日']
								}
							],
							yAxis : [
								{
									type : 'value'
								}
							],
							series : [
								{
									name:'直接访问',
									type:'bar',
									data:[320, 332, 301, 334, 390, 330, 320]
								},
								{
									name:'邮件营销',
									type:'bar',
									stack: '广告',
									data:[120, 132, 101, 134, 90, 230, 210]
								},
								{
									name:'联盟广告',
									type:'bar',
									stack: '广告',
									data:[220, 182, 191, 234, 290, 330, 310]
								},
								{
									name:'视频广告',
									type:'bar',
									stack: '广告',
									data:[150, 232, 201, 154, 190, 330, 410]
								},
								{
									name:'搜索引擎',
									type:'bar',
									data:[862, 1018, 964, 1026, 1679, 1600, 1570],
									markLine : {
										itemStyle:{
											normal:{
												lineStyle:{
													type: 'dashed'
												}
											}
										},
										data : [
											[{type : 'min'}, {type : 'max'}]
										]
									}
								},
								{
									name:'百度',
									type:'bar',
									barWidth : 5,
									stack: '搜索引擎',
									data:[620, 732, 701, 734, 1090, 1130, 1120]
								},
								{
									name:'谷歌',
									type:'bar',
									stack: '搜索引擎',
									data:[120, 132, 101, 134, 290, 230, 220]
								},
								{
									name:'必应',
									type:'bar',
									stack: '搜索引擎',
									data:[60, 72, 71, 74, 190, 130, 110]
								},
								{
									name:'其他',
									type:'bar',
									stack: '搜索引擎',
									data:[62, 82, 91, 84, 109, 110, 120]
								}
							]
						};

						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-bar4": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var option = {
							title: {
								text: '深圳月最低生活费组成（单位:元）',
								subtext: 'From ExcelHome',
								sublink: 'http://e.weibo.com/1341556070/AjQH99che'
							},
							tooltip : {
								trigger: 'axis',
								axisPointer : {            // 坐标轴指示器，坐标轴触发有效
									type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
								},
								formatter: function (params) {
									var tar = params[0];
									return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
								}
							},
							grid: {
								left: '3%',
								right: '4%',
								bottom: '3%',
								containLabel: true
							},
							xAxis : [
								{
									type : 'category',
									splitLine: {show:false},
									data : ['总费用','房租','水电费','交通费','伙食费','日用品数']
								}
							],
							yAxis : [
								{
									type : 'value'
								}
							],
							series : [
								{
									name:'辅助',
									type:'bar',
									stack: '总量',
									itemStyle:{
										normal:{
											barBorderColor:'rgba(0,0,0,0)',
											color:'rgba(0,0,0,0)'
										},
										emphasis:{
											barBorderColor:'rgba(0,0,0,0)',
											color:'rgba(0,0,0,0)'
										}
									},
									data:[0, 1700, 1400, 1200, 300, 0]
								},
								{
									name:'生活费',
									type:'bar',
									stack: '总量',
									itemStyle : { normal: {label : {show: true, position: 'inside'}}},
									data:[2900, 1200, 300, 200, 900, 300]
								}
							]
						};

						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-bar5": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var option = {
							title: {
								text: '阶梯瀑布图',
								subtext: 'From ExcelHome',
								sublink: 'http://e.weibo.com/1341556070/Aj1J2x5a5'
							},
							tooltip : {
								trigger: 'axis',
								axisPointer : {            // 坐标轴指示器，坐标轴触发有效
									type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
								},
								formatter: function (params) {
									var tar;
									if (params[1].value != '-') {
										tar = params[1];
									}
									else {
										tar = params[0];
									}
									return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
								}
							},
							legend: {
								data:['支出','收入']
							},
							grid: {
								left: '3%',
								right: '4%',
								bottom: '3%',
								containLabel: true
							},
							xAxis : [
								{
									type : 'category',
									splitLine: {show:false},
									data :  function (){
										var list = [];
										for (var i = 1; i <= 11; i++) {
											list.push('11月' + i + '日');
										}
										return list;
									}()
								}
							],
							yAxis : [
								{
									type : 'value'
								}
							],
							series : [
								{
									name:'辅助',
									type:'bar',
									stack: '总量',
									itemStyle:{
										normal:{
											barBorderColor:'rgba(0,0,0,0)',
											color:'rgba(0,0,0,0)'
										},
										emphasis:{
											barBorderColor:'rgba(0,0,0,0)',
											color:'rgba(0,0,0,0)'
										}
									},
									data:[0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
								},
								{
									name:'收入',
									type:'bar',
									stack: '总量',
									itemStyle : { normal: {label : {show: true, position: 'top'}}},
									data:[900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
								},
								{
									name:'支出',
									type:'bar',
									stack: '总量',
									itemStyle : { normal: {label : {show: true, position: 'bottom'}}},
									data:['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
								}
							]
						};

						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-bar6": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var option = {
							tooltip : {
								trigger: 'axis',
								axisPointer : {            // 坐标轴指示器，坐标轴触发有效
									type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
								}
							},
							legend: {
								data:['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
							},
							grid: {
								left: '3%',
								right: '4%',
								bottom: '3%',
								containLabel: true
							},
							xAxis : [
								{
									type : 'value'
								}
							],
							yAxis : [
								{
									type : 'category',
									data : ['周一','周二','周三','周四','周五','周六','周日']
								}
							],
							series : [
								{
									name:'直接访问',
									type:'bar',
									stack: '总量',
									itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
									data:[320, 302, 301, 334, 390, 330, 320]
								},
								{
									name:'邮件营销',
									type:'bar',
									stack: '总量',
									itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
									data:[120, 132, 101, 134, 90, 230, 210]
								},
								{
									name:'联盟广告',
									type:'bar',
									stack: '总量',
									itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
									data:[220, 182, 191, 234, 290, 330, 310]
								},
								{
									name:'视频广告',
									type:'bar',
									stack: '总量',
									itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
									data:[150, 212, 201, 154, 190, 330, 410]
								},
								{
									name:'搜索引擎',
									type:'bar',
									stack: '总量',
									itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
									data:[820, 832, 901, 934, 1290, 1330, 1320]
								}
							]
						};
						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-bar7": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var option = {
							title : {
								text: '世界人口总量',
								subtext: '数据来自网络'
							},
							tooltip : {
								trigger: 'axis'
							},
							legend: {
								data:['2011年', '2012年']
							},
							grid: {
								left: '3%',
								right: '4%',
								bottom: '3%',
								containLabel: true
							},
							xAxis : [
								{
									type : 'value',
									boundaryGap : [0, 0.01]
								}
							],
							yAxis : [
								{
									type : 'category',
									data : ['巴西','印尼','美国','印度','中国','世界人口(万)']
								}
							],
							series : [
								{
									name:'2011年',
									type:'bar',
									data:[18203, 23489, 29034, 104970, 131744, 630230]
								},
								{
									name:'2012年',
									type:'bar',
									data:[19325, 23438, 31000, 121594, 134141, 681807]
								}
							]
						};

						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-bar8": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var option = {
							title : {
								text: '某地区蒸发量和降水量',
								subtext: '纯属虚构'
							},
							tooltip : {
								trigger: 'axis'
							},
							legend: {
								data:['蒸发量','降水量']
							},
							toolbox: {
								show : true,
								feature : {
									mark : {show: true},
									dataView : {show: true, readOnly: false},
									magicType : {show: true, type: ['line', 'bar']},
									restore : {show: true},
									saveAsImage : {show: true}
								}
							},
							calculable : true,
							xAxis : [
								{
									type : 'category',
									data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
								}
							],
							yAxis : [
								{
									type : 'value'
								}
							],
							series : [
								{
									name:'蒸发量',
									type:'bar',
									data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
									markPoint : {
										data : [
											{type : 'max', name: '最大值'},
											{type : 'min', name: '最小值'}
										]
									},
									markLine : {
										data : [
											{type : 'average', name: '平均值'}
										]
									}
								},
								{
									name:'降水量',
									type:'bar',
									data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
									markPoint : {
										data : [
											{name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
											{name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
										]
									},
									markLine : {
										data : [
											{type : 'average', name : '平均值'}
										]
									}
								}
							]
						};

						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-bar9": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var option = {
							title : {
								text: '动态数据',
								subtext: '纯属虚构'
							},
							tooltip : {
								trigger: 'axis'
							},
							legend: {
								data:['最新成交价', '预购队列']
							},
							toolbox: {
								show : true,
								feature : {
									dataView : {show: true, readOnly: false},
									restore : {show: true},
									saveAsImage : {show: true}
								}
							},
							dataZoom : {
								show : false,
								start : 0,
								end : 100
							},
							xAxis : [
								{
									type : 'category',
									boundaryGap : true,
									data : (function (){
										var now = new Date();
										var res = [];
										var len = 10;
										while (len--) {
											res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
											now = new Date(now - 2000);
										}
										return res;
									})()
								},
								{
									type : 'category',
									boundaryGap : true,
									data : (function (){
										var res = [];
										var len = 10;
										while (len--) {
											res.push(len + 1);
										}
										return res;
									})()
								}
							],
							yAxis : [
								{
									type : 'value',
									scale: true,
									name : '价格',
									max: 20,
									min: 0,
									boundaryGap: [0.2, 0.2]
								},
								{
									type : 'value',
									scale: true,
									name : '预购量',
									max: 1200,
									min: 0,
									boundaryGap: [0.2, 0.2]
								}
							],
							series : [
								{
									name:'预购队列',
									type:'bar',
									xAxisIndex: 1,
									yAxisIndex: 1,
									data:(function (){
										var res = [];
										var len = 10;
										while (len--) {
											res.push(Math.round(Math.random() * 1000));
										}
										return res;
									})()
								},
								{
									name:'最新成交价',
									type:'line',
									data:(function (){
										var res = [];
										var len = 0;
										while (len < 10) {
											res.push((Math.random()*10 + 5).toFixed(1) - 0);
											len++;
										}
										return res;
									})()
								}
							]
						};
						clearInterval(app.timeTicket);
						app.count = 11;
						app.timeTicket = setInterval(function (){
							axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');

							var data0 = option.series[0].data;
							var data1 = option.series[1].data;
							data0.shift();
							data0.push(Math.round(Math.random() * 1000));
							data1.shift();
							data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

							option.xAxis[0].data.shift();
							option.xAxis[0].data.push(axisData);
							option.xAxis[1].data.shift();
							option.xAxis[1].data.push(app.count++);

							myChart.setOption(option);
						}, 2100);

						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-bar10": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var option = {
							tooltip : {
								trigger: 'axis'
							},
							toolbox: {
								show : true,
								feature : {
									mark : {show: true},
									dataView : {show: true, readOnly: false},
									magicType: {show: true, type: ['line', 'bar']},
									restore : {show: true},
									saveAsImage : {show: true}
								}
							},
							calculable : true,
							legend: {
								data:['蒸发量','降水量','平均温度']
							},
							xAxis : [
								{
									type : 'category',
									data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
								}
							],
							yAxis : [
								{
									type : 'value',
									name : '水量',
									min: 0,
									max: 250,
									interval: 50,
									axisLabel : {
										formatter: '{value} ml'
									}
								},
								{
									type : 'value',
									name : '温度',
									min: 0,
									max: 25,
									interval: 5,
									axisLabel : {
										formatter: '{value} °C'
									}
								}
							],
							series : [

								{
									name:'蒸发量',
									type:'bar',
									data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
								},
								{
									name:'降水量',
									type:'bar',
									data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
								},
								{
									name:'平均温度',
									type:'line',
									yAxisIndex: 1,
									data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
								}
							]
						};

						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-bar11": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var dataMap = {};
						function dataFormatter(obj) {
							var pList = ['北京','天津','河北','山西','内蒙古','辽宁','吉林','黑龙江','上海','江苏','浙江','安徽','福建','江西','山东','河南','湖北','湖南','广东','广西','海南','重庆','四川','贵州','云南','西藏','陕西','甘肃','青海','宁夏','新疆'];
							var temp;
							for (var year = 2002; year <= 2011; year++) {
								var max = 0;
								var sum = 0;
								temp = obj[year];
								for (var i = 0, l = temp.length; i < l; i++) {
									max = Math.max(max, temp[i]);
									sum += temp[i];
									obj[year][i] = {
										name : pList[i],
										value : temp[i]
									}
								}
								obj[year + 'max'] = Math.floor(max / 100) * 100;
								obj[year + 'sum'] = sum;
							}
							return obj;
						}

						dataMap.dataGDP = dataFormatter({
							//max : 60000,
							2011:[16251.93,11307.28,24515.76,11237.55,14359.88,22226.7,10568.83,12582,19195.69,49110.27,32318.85,15300.65,17560.18,11702.82,45361.85,26931.03,19632.26,19669.56,53210.28,11720.87,2522.66,10011.37,21026.68,5701.84,8893.12,605.83,12512.3,5020.37,1670.44,2102.21,6610.05],
							2010:[14113.58,9224.46,20394.26,9200.86,11672,18457.27,8667.58,10368.6,17165.98,41425.48,27722.31,12359.33,14737.12,9451.26,39169.92,23092.36,15967.61,16037.96,46013.06,9569.85,2064.5,7925.58,17185.48,4602.16,7224.18,507.46,10123.48,4120.75,1350.43,1689.65,5437.47],
							2009:[12153.03,7521.85,17235.48,7358.31,9740.25,15212.49,7278.75,8587,15046.45,34457.3,22990.35,10062.82,12236.53,7655.18,33896.65,19480.46,12961.1,13059.69,39482.56,7759.16,1654.21,6530.01,14151.28,3912.68,6169.75,441.36,8169.8,3387.56,1081.27,1353.31,4277.05],
							2008:[11115,6719.01,16011.97,7315.4,8496.2,13668.58,6426.1,8314.37,14069.87,30981.98,21462.69,8851.66,10823.01,6971.05,30933.28,18018.53,11328.92,11555,36796.71,7021,1503.06,5793.66,12601.23,3561.56,5692.12,394.85,7314.58,3166.82,1018.62,1203.92,4183.21],
							2007:[9846.81,5252.76,13607.32,6024.45,6423.18,11164.3,5284.69,7104,12494.01,26018.48,18753.73,7360.92,9248.53,5800.25,25776.91,15012.46,9333.4,9439.6,31777.01,5823.41,1254.17,4676.13,10562.39,2884.11,4772.52,341.43,5757.29,2703.98,797.35,919.11,3523.16],
							2006:[8117.78,4462.74,11467.6,4878.61,4944.25,9304.52,4275.12,6211.8,10572.24,21742.05,15718.47,6112.5,7583.85,4820.53,21900.19,12362.79,7617.47,7688.67,26587.76,4746.16,1065.67,3907.23,8690.24,2338.98,3988.14,290.76,4743.61,2277.35,648.5,725.9,3045.26],
							2005:[6969.52,3905.64,10012.11,4230.53,3905.03,8047.26,3620.27,5513.7,9247.66,18598.69,13417.68,5350.17,6554.69,4056.76,18366.87,10587.42,6590.19,6596.1,22557.37,3984.1,918.75,3467.72,7385.1,2005.42,3462.73,248.8,3933.72,1933.98,543.32,612.61,2604.19],
							2004:[6033.21,3110.97,8477.63,3571.37,3041.07,6672,3122.01,4750.6,8072.83,15003.6,11648.7,4759.3,5763.35,3456.7,15021.84,8553.79,5633.24,5641.94,18864.62,3433.5,819.66,3034.58,6379.63,1677.8,3081.91,220.34,3175.58,1688.49,466.1,537.11,2209.09],
							2003:[5007.21,2578.03,6921.29,2855.23,2388.38,6002.54,2662.08,4057.4,6694.23,12442.87,9705.02,3923.11,4983.67,2807.41,12078.15,6867.7,4757.45,4659.99,15844.64,2821.11,713.96,2555.72,5333.09,1426.34,2556.02,185.09,2587.72,1399.83,390.2,445.36,1886.35],
							2002:[4315,2150.76,6018.28,2324.8,1940.94,5458.22,2348.54,3637.2,5741.03,10606.85,8003.67,3519.72,4467.55,2450.48,10275.5,6035.48,4212.82,4151.54,13502.42,2523.73,642.73,2232.86,4725.01,1243.43,2312.82,162.04,2253.39,1232.03,340.65,377.16,1612.6]
						});

						dataMap.dataPI = dataFormatter({
							//max : 4000,
							2011:[136.27,159.72,2905.73,641.42,1306.3,1915.57,1277.44,1701.5,124.94,3064.78,1583.04,2015.31,1612.24,1391.07,3973.85,3512.24,2569.3,2768.03,2665.2,2047.23,659.23,844.52,2983.51,726.22,1411.01,74.47,1220.9,678.75,155.08,184.14,1139.03],
							2010:[124.36,145.58,2562.81,554.48,1095.28,1631.08,1050.15,1302.9,114.15,2540.1,1360.56,1729.02,1363.67,1206.98,3588.28,3258.09,2147,2325.5,2286.98,1675.06,539.83,685.38,2482.89,625.03,1108.38,68.72,988.45,599.28,134.92,159.29,1078.63],
							2009:[118.29,128.85,2207.34,477.59,929.6,1414.9,980.57,1154.33,113.82,2261.86,1163.08,1495.45,1182.74,1098.66,3226.64,2769.05,1795.9,1969.69,2010.27,1458.49,462.19,606.8,2240.61,550.27,1067.6,63.88,789.64,497.05,107.4,127.25,759.74],
							2008:[112.83,122.58,2034.59,313.58,907.95,1302.02,916.72,1088.94,111.8,2100.11,1095.96,1418.09,1158.17,1060.38,3002.65,2658.78,1780,1892.4,1973.05,1453.75,436.04,575.4,2216.15,539.19,1020.56,60.62,753.72,462.27,105.57,118.94,691.07],
							2007:[101.26,110.19,1804.72,311.97,762.1,1133.42,783.8,915.38,101.84,1816.31,986.02,1200.18,1002.11,905.77,2509.14,2217.66,1378,1626.48,1695.57,1241.35,361.07,482.39,2032,446.38,837.35,54.89,592.63,387.55,83.41,97.89,628.72],
							2006:[88.8,103.35,1461.81,276.77,634.94,939.43,672.76,750.14,93.81,1545.05,925.1,1011.03,865.98,786.14,2138.9,1916.74,1140.41,1272.2,1532.17,1032.47,323.48,386.38,1595.48,382.06,724.4,50.9,484.81,334,67.55,79.54,527.8],
							2005:[88.68,112.38,1400,262.42,589.56,882.41,625.61,684.6,90.26,1461.51,892.83,966.5,827.36,727.37,1963.51,1892.01,1082.13,1100.65,1428.27,912.5,300.75,463.4,1481.14,368.94,661.69,48.04,435.77,308.06,65.34,72.07,509.99],
							2004:[87.36,105.28,1370.43,276.3,522.8,798.43,568.69,605.79,83.45,1367.58,814.1,950.5,786.84,664.5,1778.45,1649.29,1020.09,1022.45,1248.59,817.88,278.76,428.05,1379.93,334.5,607.75,44.3,387.88,286.78,60.7,65.33,461.26],
							2003:[84.11,89.91,1064.05,215.19,420.1,615.8,488.23,504.8,81.02,1162.45,717.85,749.4,692.94,560,1480.67,1198.7,798.35,886.47,1072.91,658.78,244.29,339.06,1128.61,298.69,494.6,40.7,302.66,237.91,48.47,55.63,412.9],
							2002:[82.44,84.21,956.84,197.8,374.69,590.2,446.17,474.2,79.68,1110.44,685.2,783.66,664.78,535.98,1390,1288.36,707,847.25,1015.08,601.99,222.89,317.87,1047.95,281.1,463.44,39.75,282.21,215.51,47.31,52.95,305]
						});

						dataMap.dataSI = dataFormatter({
							//max : 26600,
							2011:[3752.48,5928.32,13126.86,6635.26,8037.69,12152.15,5611.48,5962.41,7927.89,25203.28,16555.58,8309.38,9069.2,6390.55,24017.11,15427.08,9815.94,9361.99,26447.38,5675.32,714.5,5543.04,11029.13,2194.33,3780.32,208.79,6935.59,2377.83,975.18,1056.15,3225.9],
							2010:[3388.38,4840.23,10707.68,5234,6367.69,9976.82,4506.31,5025.15,7218.32,21753.93,14297.93,6436.62,7522.83,5122.88,21238.49,13226.38,7767.24,7343.19,23014.53,4511.68,571,4359.12,8672.18,1800.06,3223.49,163.92,5446.1,1984.97,744.63,827.91,2592.15],
							2009:[2855.55,3987.84,8959.83,3993.8,5114,7906.34,3541.92,4060.72,6001.78,18566.37,11908.49,4905.22,6005.3,3919.45,18901.83,11010.5,6038.08,5687.19,19419.7,3381.54,443.43,3448.77,6711.87,1476.62,2582.53,136.63,4236.42,1527.24,575.33,662.32,1929.59],
							2008:[2626.41,3709.78,8701.34,4242.36,4376.19,7158.84,3097.12,4319.75,6085.84,16993.34,11567.42,4198.93,5318.44,3554.81,17571.98,10259.99,5082.07,5028.93,18502.2,3037.74,423.55,3057.78,5823.39,1370.03,2452.75,115.56,3861.12,1470.34,557.12,609.98,2070.76],
							2007:[2509.4,2892.53,7201.88,3454.49,3193.67,5544.14,2475.45,3695.58,5571.06,14471.26,10154.25,3370.96,4476.42,2975.53,14647.53,8282.83,4143.06,3977.72,16004.61,2425.29,364.26,2368.53,4648.79,1124.79,2038.39,98.48,2986.46,1279.32,419.03,455.04,1647.55],
							2006:[2191.43,2457.08,6110.43,2755.66,2374.96,4566.83,1915.29,3365.31,4969.95,12282.89,8511.51,2711.18,3695.04,2419.74,12574.03,6724.61,3365.08,3187.05,13469.77,1878.56,308.62,1871.65,3775.14,967.54,1705.83,80.1,2452.44,1043.19,331.91,351.58,1459.3],
							2005:[2026.51,2135.07,5271.57,2357.04,1773.21,3869.4,1580.83,2971.68,4381.2,10524.96,7164.75,2245.9,3175.92,1917.47,10478.62,5514.14,2852.12,2612.57,11356.6,1510.68,240.83,1564,3067.23,821.16,1426.42,63.52,1951.36,838.56,264.61,281.05,1164.79],
							2004:[1853.58,1685.93,4301.73,1919.4,1248.27,3061.62,1329.68,2487.04,3892.12,8437.99,6250.38,1844.9,2770.49,1566.4,8478.69,4182.1,2320.6,2190.54,9280.73,1253.7,205.6,1376.91,2489.4,681.5,1281.63,52.74,1553.1,713.3,211.7,244.05,914.47],
							2003:[1487.15,1337.31,3417.56,1463.38,967.49,2898.89,1098.37,2084.7,3209.02,6787.11,5096.38,1535.29,2340.82,1204.33,6485.05,3310.14,1956.02,1777.74,7592.78,984.08,175.82,1135.31,2014.8,569.37,1047.66,47.64,1221.17,572.02,171.92,194.27,719.54],
							2002:[1249.99,1069.08,2911.69,1134.31,754.78,2609.85,943.49,1843.6,2622.45,5604.49,4090.48,1337.04,2036.97,941.77,5184.98,2768.75,1709.89,1523.5,6143.4,846.89,148.88,958.87,1733.38,481.96,934.88,32.72,1007.56,501.69,144.51,153.06,603.15]
						});

						dataMap.dataTI = dataFormatter({
							//max : 25000,
							2011:[12363.18,5219.24,8483.17,3960.87,5015.89,8158.98,3679.91,4918.09,11142.86,20842.21,14180.23,4975.96,6878.74,3921.2,17370.89,7991.72,7247.02,7539.54,24097.7,3998.33,1148.93,3623.81,7014.04,2781.29,3701.79,322.57,4355.81,1963.79,540.18,861.92,2245.12],
							2010:[10600.84,4238.65,7123.77,3412.38,4209.03,6849.37,3111.12,4040.55,9833.51,17131.45,12063.82,4193.69,5850.62,3121.4,14343.14,6607.89,6053.37,6369.27,20711.55,3383.11,953.67,2881.08,6030.41,2177.07,2892.31,274.82,3688.93,1536.5,470.88,702.45,1766.69],
							2009:[9179.19,3405.16,6068.31,2886.92,3696.65,5891.25,2756.26,3371.95,8930.85,13629.07,9918.78,3662.15,5048.49,2637.07,11768.18,5700.91,5127.12,5402.81,18052.59,2919.13,748.59,2474.44,5198.8,1885.79,2519.62,240.85,3143.74,1363.27,398.54,563.74,1587.72],
							2008:[8375.76,2886.65,5276.04,2759.46,3212.06,5207.72,2412.26,2905.68,7872.23,11888.53,8799.31,3234.64,4346.4,2355.86,10358.64,5099.76,4466.85,4633.67,16321.46,2529.51,643.47,2160.48,4561.69,1652.34,2218.81,218.67,2699.74,1234.21,355.93,475,1421.38],
							2007:[7236.15,2250.04,4600.72,2257.99,2467.41,4486.74,2025.44,2493.04,6821.11,9730.91,7613.46,2789.78,3770,1918.95,8620.24,4511.97,3812.34,3835.4,14076.83,2156.76,528.84,1825.21,3881.6,1312.94,1896.78,188.06,2178.2,1037.11,294.91,366.18,1246.89],
							2006:[5837.55,1902.31,3895.36,1846.18,1934.35,3798.26,1687.07,2096.35,5508.48,7914.11,6281.86,2390.29,3022.83,1614.65,7187.26,3721.44,3111.98,3229.42,11585.82,1835.12,433.57,1649.2,3319.62,989.38,1557.91,159.76,1806.36,900.16,249.04,294.78,1058.16],
							2005:[4854.33,1658.19,3340.54,1611.07,1542.26,3295.45,1413.83,1857.42,4776.2,6612.22,5360.1,2137.77,2551.41,1411.92,5924.74,3181.27,2655.94,2882.88,9772.5,1560.92,377.17,1440.32,2836.73,815.32,1374.62,137.24,1546.59,787.36,213.37,259.49,929.41],
							2004:[4092.27,1319.76,2805.47,1375.67,1270,2811.95,1223.64,1657.77,4097.26,5198.03,4584.22,1963.9,2206.02,1225.8,4764.7,2722.4,2292.55,2428.95,8335.3,1361.92,335.3,1229.62,2510.3,661.8,1192.53,123.3,1234.6,688.41,193.7,227.73,833.36],
							2003:[3435.95,1150.81,2439.68,1176.65,1000.79,2487.85,1075.48,1467.9,3404.19,4493.31,3890.79,1638.42,1949.91,1043.08,4112.43,2358.86,2003.08,1995.78,7178.94,1178.25,293.85,1081.35,2189.68,558.28,1013.76,96.76,1063.89,589.91,169.81,195.46,753.91],
							2002:[2982.57,997.47,2149.75,992.69,811.47,2258.17,958.88,1319.4,3038.9,3891.92,3227.99,1399.02,1765.8,972.73,3700.52,1978.37,1795.93,1780.79,6343.94,1074.85,270.96,956.12,1943.68,480.37,914.5,89.56,963.62,514.83,148.83,171.14,704.5]
						});

						dataMap.dataEstate = dataFormatter({
							//max : 3600,
							2011:[1074.93,411.46,918.02,224.91,384.76,876.12,238.61,492.1,1019.68,2747.89,1677.13,634.92,911.16,402.51,1838.14,987,634.67,518.04,3321.31,465.68,208.71,396.28,620.62,160.3,222.31,17.44,398.03,134.25,29.05,79.01,176.22],
							2010:[1006.52,377.59,697.79,192,309.25,733.37,212.32,391.89,1002.5,2600.95,1618.17,532.17,679.03,340.56,1622.15,773.23,564.41,464.21,2813.95,405.79,188.33,266.38,558.56,139.64,223.45,14.54,315.95,110.02,25.41,60.53,143.44],
							2009:[1062.47,308.73,612.4,173.31,286.65,605.27,200.14,301.18,1237.56,2025.39,1316.84,497.94,656.61,305.9,1329.59,622.98,546.11,400.11,2470.63,348.98,121.76,229.09,548.14,136.15,205.14,13.28,239.92,101.37,23.05,47.56,115.23],
							2008:[844.59,227.88,513.81,166.04,273.3,500.81,182.7,244.47,939.34,1626.13,1052.03,431.27,506.98,281.96,1104.95,512.42,526.88,340.07,2057.45,282.96,95.6,191.21,453.63,104.81,195.48,15.08,193.27,93.8,19.96,38.85,89.79],
							2007:[821.5,183.44,467.97,134.12,191.01,410.43,153.03,225.81,958.06,1365.71,981.42,366.57,511.5,225.96,953.69,447.44,409.65,301.8,2029.77,239.45,67.19,196.06,376.84,93.19,193.59,13.24,153.98,83.52,16.98,29.49,91.28],
							2006:[658.3,156.64,397.14,117.01,136.5,318.54,131.01,194.7,773.61,1017.91,794.41,281.98,435.22,184.67,786.51,348.7,294.73,254.81,1722.07,192.2,44.45,158.2,336.2,80.24,165.92,11.92,125.2,73.21,15.17,25.53,68.9],
							2005:[493.73,122.67,330.87,106,98.75,256.77,112.29,163.34,715.97,799.73,688.86,231.66,331.8,171.88,664.9,298.19,217.17,215.63,1430.37,165.05,38.2,143.88,286.23,76.38,148.69,10.02,108.62,63.78,14.1,22.97,55.79],
							2004:[436.11,106.14,231.08,95.1,73.81,203.1,97.93,137.74,666.3,534.17,587.83,188.28,248.44,167.2,473.27,236.44,204.8,191.5,1103.75,122.52,30.64,129.12,264.3,68.3,116.54,5.8,95.9,56.84,13,20.78,53.55],
							2003:[341.88,92.31,185.19,78.73,61.05,188.49,91.99,127.2,487.82,447.47,473.16,162.63,215.84,138.02,418.21,217.58,176.8,186.49,955.66,100.93,25.14,113.69,231.72,59.86,103.79,4.35,83.9,48.09,11.41,16.85,47.84],
							2002:[298.02,73.04,140.89,65.83,51.48,130.94,76.11,118.7,384.86,371.09,360.63,139.18,188.09,125.27,371.13,199.31,145.17,165.29,808.16,82.83,21.45,90.48,210.82,53.49,95.68,3.42,77.68,41.52,9.74,13.46,43.04]
						});

						dataMap.dataFinancial = dataFormatter({
							//max : 3200,
							2011:[2215.41,756.5,746.01,519.32,447.46,755.57,207.65,370.78,2277.4,2600.11,2730.29,503.85,862.41,357.44,1640.41,868.2,674.57,501.09,2916.13,445.37,105.24,704.66,868.15,297.27,456.23,31.7,432.11,145.05,62.56,134.18,288.77],
							2010:[1863.61,572.99,615.42,448.3,346.44,639.27,190.12,304.59,1950.96,2105.92,2326.58,396.17,767.58,241.49,1361.45,697.68,561.27,463.16,2658.76,384.53,78.12,496.56,654.7,231.51,375.08,27.08,384.75,100.54,54.53,97.87,225.2],
							2009:[1603.63,461.2,525.67,361.64,291.1,560.2,180.83,227.54,1804.28,1596.98,1899.33,359.6,612.2,165.1,1044.9,499.92,479.11,402.57,2283.29,336.82,65.73,389.97,524.63,194.44,351.74,23.17,336.21,88.27,45.63,75.54,198.87],
							2008:[1519.19,368.1,420.74,290.91,219.09,455.07,147.24,177.43,1414.21,1298.48,1653.45,313.81,497.65,130.57,880.28,413.83,393.05,334.32,1972.4,249.01,47.33,303.01,411.14,151.55,277.66,22.42,287.16,72.49,36.54,64.8,171.97],
							2007:[1302.77,288.17,347.65,218.73,148.3,386.34,126.03,155.48,1209.08,1054.25,1251.43,223.85,385.84,101.34,734.9,302.31,337.27,260.14,1705.08,190.73,34.43,247.46,359.11,122.25,168.55,11.51,231.03,61.6,27.67,51.05,149.22],
							2006:[982.37,186.87,284.04,169.63,108.21,303.41,100.75,74.17,825.2,653.25,906.37,166.01,243.9,79.75,524.94,219.72,174.99,204.72,899.91,129.14,16.37,213.7,299.5,89.43,143.62,6.44,152.25,50.51,23.69,36.99,99.25],
							2005:[840.2,147.4,213.47,135.07,72.52,232.85,83.63,35.03,675.12,492.4,686.32,127.05,186.12,69.55,448.36,181.74,127.32,162.37,661.81,91.93,13.16,185.18,262.26,73.67,130.5,7.57,127.58,44.73,20.36,32.25,80.34],
							2004:[713.79,136.97,209.1,110.29,55.89,188.04,77.17,32.2,612.45,440.5,523.49,94.1,171,65.1,343.37,170.82,118.85,118.64,602.68,74,11.56,162.38,236.5,60.3,118.4,5.4,90.1,42.99,19,27.92,70.3],
							2003:[635.56,112.79,199.87,118.48,55.89,145.38,73.15,32.2,517.97,392.11,451.54,87.45,150.09,64.31,329.71,165.11,107.31,99.35,534.28,61.59,10.68,147.04,206.24,48.01,105.48,4.74,77.87,42.31,17.98,24.8,64.92],
							2002:[561.91,76.86,179.6,124.1,48.39,137.18,75.45,31.6,485.25,368.86,347.53,81.85,138.28,76.51,310.07,158.77,96.95,92.43,454.65,35.86,10.08,134.52,183.13,41.45,102.39,2.81,67.3,42.08,16.75,21.45,52.18]
						});


						var option = {
							baseOption: {
								timeline: {
									// y: 0,
									axisType: 'category',
									// realtime: false,
									// loop: false,
									autoPlay: true,
									// currentIndex: 2,
									playInterval: 1000,
									// controlStyle: {
									//     position: 'left'
									// },
									data: [
										'2002-01-01','2003-01-01','2004-01-01',
										{
											value: '2005-01-01',
											tooltip: {
												formatter: '{b} GDP达到一个高度'
											},
											symbol: 'diamond',
											symbolSize: 16
										},
										'2006-01-01', '2007-01-01','2008-01-01','2009-01-01','2010-01-01',
										{
											value: '2011-01-01',
											tooltip: {
												formatter: function (params) {
													return params.name + 'GDP达到又一个高度';
												}
											},
											symbol: 'diamond',
											symbolSize: 18
										},
									],
									label: {
										formatter : function(s) {
											return (new Date(s)).getFullYear();
										}
									}
								},
								title: {
									subtext: '数据来自国家统计局'
								},
								tooltip: {},
								legend: {
									x: 'right',
									data: ['第一产业', '第二产业', '第三产业', 'GDP', '金融', '房地产'],
									selected: {
										'GDP': false, '金融': false, '房地产': false
									}
								},
								calculable : true,
								grid: {
									top: 80,
									bottom: 100
								},
								xAxis: [
									{
										'type':'category',
										'axisLabel':{'interval':0},
										'data':[
											'北京','\n天津','河北','\n山西','内蒙古','\n辽宁','吉林','\n黑龙江',
											'上海','\n江苏','浙江','\n安徽','福建','\n江西','山东','\n河南',
											'湖北','\n湖南','广东','\n广西','海南','\n重庆','四川','\n贵州',
											'云南','\n西藏','陕西','\n甘肃','青海','\n宁夏','新疆'
										],
										splitLine: {show: false}
									}
								],
								yAxis: [
									{
										type: 'value',
										name: 'GDP（亿元）',
										// max: 53500
										max: 30000
									}
								],
								series: [
									{name: 'GDP', type: 'bar'},
									{name: '金融', type: 'bar'},
									{name: '房地产', type: 'bar'},
									{name: '第一产业', type: 'bar'},
									{name: '第二产业', type: 'bar'},
									{name: '第三产业', type: 'bar'},
									{
										name: 'GDP占比',
										type: 'pie',
										center: ['75%', '35%'],
										radius: '28%'
									}
								]
							},
							options: [
								{
									title: {text: '2002全国宏观经济指标'},
									series: [
										{data: dataMap.dataGDP['2002']},
										{data: dataMap.dataFinancial['2002']},
										{data: dataMap.dataEstate['2002']},
										{data: dataMap.dataPI['2002']},
										{data: dataMap.dataSI['2002']},
										{data: dataMap.dataTI['2002']},
										{data: [
											{name: '第一产业', value: dataMap.dataPI['2002sum']},
											{name: '第二产业', value: dataMap.dataSI['2002sum']},
											{name: '第三产业', value: dataMap.dataTI['2002sum']}
										]}
									]
								},
								{
									title : {text: '2003全国宏观经济指标'},
									series : [
										{data: dataMap.dataGDP['2003']},
										{data: dataMap.dataFinancial['2003']},
										{data: dataMap.dataEstate['2003']},
										{data: dataMap.dataPI['2003']},
										{data: dataMap.dataSI['2003']},
										{data: dataMap.dataTI['2003']},
										{data: [
											{name: '第一产业', value: dataMap.dataPI['2003sum']},
											{name: '第二产业', value: dataMap.dataSI['2003sum']},
											{name: '第三产业', value: dataMap.dataTI['2003sum']}
										]}
									]
								},
								{
									title : {text: '2004全国宏观经济指标'},
									series : [
										{data: dataMap.dataGDP['2004']},
										{data: dataMap.dataFinancial['2004']},
										{data: dataMap.dataEstate['2004']},
										{data: dataMap.dataPI['2004']},
										{data: dataMap.dataSI['2004']},
										{data: dataMap.dataTI['2004']},
										{data: [
											{name: '第一产业', value: dataMap.dataPI['2004sum']},
											{name: '第二产业', value: dataMap.dataSI['2004sum']},
											{name: '第三产业', value: dataMap.dataTI['2004sum']}
										]}
									]
								},
								{
									title : {text: '2005全国宏观经济指标'},
									series : [
										{data: dataMap.dataGDP['2005']},
										{data: dataMap.dataFinancial['2005']},
										{data: dataMap.dataEstate['2005']},
										{data: dataMap.dataPI['2005']},
										{data: dataMap.dataSI['2005']},
										{data: dataMap.dataTI['2005']},
										{data: [
											{name: '第一产业', value: dataMap.dataPI['2005sum']},
											{name: '第二产业', value: dataMap.dataSI['2005sum']},
											{name: '第三产业', value: dataMap.dataTI['2005sum']}
										]}
									]
								},
								{
									title : {text: '2006全国宏观经济指标'},
									series : [
										{data: dataMap.dataGDP['2006']},
										{data: dataMap.dataFinancial['2006']},
										{data: dataMap.dataEstate['2006']},
										{data: dataMap.dataPI['2006']},
										{data: dataMap.dataSI['2006']},
										{data: dataMap.dataTI['2006']},
										{data: [
											{name: '第一产业', value: dataMap.dataPI['2006sum']},
											{name: '第二产业', value: dataMap.dataSI['2006sum']},
											{name: '第三产业', value: dataMap.dataTI['2006sum']}
										]}
									]
								},
								{
									title : {text: '2007全国宏观经济指标'},
									series : [
										{data: dataMap.dataGDP['2007']},
										{data: dataMap.dataFinancial['2007']},
										{data: dataMap.dataEstate['2007']},
										{data: dataMap.dataPI['2007']},
										{data: dataMap.dataSI['2007']},
										{data: dataMap.dataTI['2007']},
										{data: [
											{name: '第一产业', value: dataMap.dataPI['2007sum']},
											{name: '第二产业', value: dataMap.dataSI['2007sum']},
											{name: '第三产业', value: dataMap.dataTI['2007sum']}
										]}
									]
								},
								{
									title : {text: '2008全国宏观经济指标'},
									series : [
										{data: dataMap.dataGDP['2008']},
										{data: dataMap.dataFinancial['2008']},
										{data: dataMap.dataEstate['2008']},
										{data: dataMap.dataPI['2008']},
										{data: dataMap.dataSI['2008']},
										{data: dataMap.dataTI['2008']},
										{data: [
											{name: '第一产业', value: dataMap.dataPI['2008sum']},
											{name: '第二产业', value: dataMap.dataSI['2008sum']},
											{name: '第三产业', value: dataMap.dataTI['2008sum']}
										]}
									]
								},
								{
									title : {text: '2009全国宏观经济指标'},
									series : [
										{data: dataMap.dataGDP['2009']},
										{data: dataMap.dataFinancial['2009']},
										{data: dataMap.dataEstate['2009']},
										{data: dataMap.dataPI['2009']},
										{data: dataMap.dataSI['2009']},
										{data: dataMap.dataTI['2009']},
										{data: [
											{name: '第一产业', value: dataMap.dataPI['2009sum']},
											{name: '第二产业', value: dataMap.dataSI['2009sum']},
											{name: '第三产业', value: dataMap.dataTI['2009sum']}
										]}
									]
								},
								{
									title : {text: '2010全国宏观经济指标'},
									series : [
										{data: dataMap.dataGDP['2010']},
										{data: dataMap.dataFinancial['2010']},
										{data: dataMap.dataEstate['2010']},
										{data: dataMap.dataPI['2010']},
										{data: dataMap.dataSI['2010']},
										{data: dataMap.dataTI['2010']},
										{data: [
											{name: '第一产业', value: dataMap.dataPI['2010sum']},
											{name: '第二产业', value: dataMap.dataSI['2010sum']},
											{name: '第三产业', value: dataMap.dataTI['2010sum']}
										]}
									]
								},
								{
									title : {text: '2011全国宏观经济指标'},
									series : [
										{data: dataMap.dataGDP['2011']},
										{data: dataMap.dataFinancial['2011']},
										{data: dataMap.dataEstate['2011']},
										{data: dataMap.dataPI['2011']},
										{data: dataMap.dataSI['2011']},
										{data: dataMap.dataTI['2011']},
										{data: [
											{name: '第一产业', value: dataMap.dataPI['2011sum']},
											{name: '第二产业', value: dataMap.dataSI['2011sum']},
											{name: '第三产业', value: dataMap.dataTI['2011sum']}
										]}
									]
								}
							]
						};
						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-bar12": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						myChart.showLoading();

						$.get('data/asset/data/obama_budget_proposal_2012.list.json', function (obama_budget_2012) {
							myChart.hideLoading();

							option = {
								tooltip : {
									trigger: 'item'
								},
								toolbox: {
									show : true,
									feature : {
										mark : {show: true},
										dataView : {show: true, readOnly: false},
										magicType: {show: true, type: ['line', 'bar']},
										restore : {show: true},
										saveAsImage : {show: true}
									}
								},
								calculable : true,
								legend: {
									data:['Growth', 'Budget 2011', 'Budget 2012'],
									itemGap: 5
								},
								grid: {
									top: '12%',
									left: '1%',
									right: '10%',
									containLabel: true
								},
								xAxis: [
									{
										type : 'category',
										data : obama_budget_2012.names
									}
								],
								yAxis: [
									{
										type : 'value',
										name : 'Budget (million USD)',
										axisLabel: {
											formatter: function (a) {
												a = +a;
												return isFinite(a)
													? echarts.format.addCommas(+a / 1000)
													: '';
											}
										}
									}
								],
								dataZoom: [
									{
										show: true,
										start: 94,
										end: 100,
										handleSize: 8
									},
									{
										type: 'inside',
										start: 94,
										end: 100
									},
									{
										show: true,
										yAxisIndex: 0,
										filterMode: 'empty',
										width: 12,
										height: '70%',
										handleSize: 8,
										showDataShadow: false,
										left: '93%'
									}
								],
								series : [
									{
										name: 'Budget 2011',
										type: 'bar',
										data: obama_budget_2012.budget2011List
									},
									{
										name: 'Budget 2012',
										type: 'bar',
										data: obama_budget_2012.budget2012List
									}
								]
							};

							myChart.setOption(option);

						});
						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-geo1": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var geoCoordMap = {
							'上海': [121.4648,31.2891],
							'东莞': [113.8953,22.901],
							'东营': [118.7073,37.5513],
							'中山': [113.4229,22.478],
							'临汾': [111.4783,36.1615],
							'临沂': [118.3118,35.2936],
							'丹东': [124.541,40.4242],
							'丽水': [119.5642,28.1854],
							'乌鲁木齐': [87.9236,43.5883],
							'佛山': [112.8955,23.1097],
							'保定': [115.0488,39.0948],
							'兰州': [103.5901,36.3043],
							'包头': [110.3467,41.4899],
							'北京': [116.4551,40.2539],
							'北海': [109.314,21.6211],
							'南京': [118.8062,31.9208],
							'南宁': [108.479,23.1152],
							'南昌': [116.0046,28.6633],
							'南通': [121.1023,32.1625],
							'厦门': [118.1689,24.6478],
							'台州': [121.1353,28.6688],
							'合肥': [117.29,32.0581],
							'呼和浩特': [111.4124,40.4901],
							'咸阳': [108.4131,34.8706],
							'哈尔滨': [127.9688,45.368],
							'唐山': [118.4766,39.6826],
							'嘉兴': [120.9155,30.6354],
							'大同': [113.7854,39.8035],
							'大连': [122.2229,39.4409],
							'天津': [117.4219,39.4189],
							'太原': [112.3352,37.9413],
							'威海': [121.9482,37.1393],
							'宁波': [121.5967,29.6466],
							'宝鸡': [107.1826,34.3433],
							'宿迁': [118.5535,33.7775],
							'常州': [119.4543,31.5582],
							'广州': [113.5107,23.2196],
							'廊坊': [116.521,39.0509],
							'延安': [109.1052,36.4252],
							'张家口': [115.1477,40.8527],
							'徐州': [117.5208,34.3268],
							'德州': [116.6858,37.2107],
							'惠州': [114.6204,23.1647],
							'成都': [103.9526,30.7617],
							'扬州': [119.4653,32.8162],
							'承德': [117.5757,41.4075],
							'拉萨': [91.1865,30.1465],
							'无锡': [120.3442,31.5527],
							'日照': [119.2786,35.5023],
							'昆明': [102.9199,25.4663],
							'杭州': [119.5313,29.8773],
							'枣庄': [117.323,34.8926],
							'柳州': [109.3799,24.9774],
							'株洲': [113.5327,27.0319],
							'武汉': [114.3896,30.6628],
							'汕头': [117.1692,23.3405],
							'江门': [112.6318,22.1484],
							'沈阳': [123.1238,42.1216],
							'沧州': [116.8286,38.2104],
							'河源': [114.917,23.9722],
							'泉州': [118.3228,25.1147],
							'泰安': [117.0264,36.0516],
							'泰州': [120.0586,32.5525],
							'济南': [117.1582,36.8701],
							'济宁': [116.8286,35.3375],
							'海口': [110.3893,19.8516],
							'淄博': [118.0371,36.6064],
							'淮安': [118.927,33.4039],
							'深圳': [114.5435,22.5439],
							'清远': [112.9175,24.3292],
							'温州': [120.498,27.8119],
							'渭南': [109.7864,35.0299],
							'湖州': [119.8608,30.7782],
							'湘潭': [112.5439,27.7075],
							'滨州': [117.8174,37.4963],
							'潍坊': [119.0918,36.524],
							'烟台': [120.7397,37.5128],
							'玉溪': [101.9312,23.8898],
							'珠海': [113.7305,22.1155],
							'盐城': [120.2234,33.5577],
							'盘锦': [121.9482,41.0449],
							'石家庄': [114.4995,38.1006],
							'福州': [119.4543,25.9222],
							'秦皇岛': [119.2126,40.0232],
							'绍兴': [120.564,29.7565],
							'聊城': [115.9167,36.4032],
							'肇庆': [112.1265,23.5822],
							'舟山': [122.2559,30.2234],
							'苏州': [120.6519,31.3989],
							'莱芜': [117.6526,36.2714],
							'菏泽': [115.6201,35.2057],
							'营口': [122.4316,40.4297],
							'葫芦岛': [120.1575,40.578],
							'衡水': [115.8838,37.7161],
							'衢州': [118.6853,28.8666],
							'西宁': [101.4038,36.8207],
							'西安': [109.1162,34.2004],
							'贵阳': [106.6992,26.7682],
							'连云港': [119.1248,34.552],
							'邢台': [114.8071,37.2821],
							'邯郸': [114.4775,36.535],
							'郑州': [113.4668,34.6234],
							'鄂尔多斯': [108.9734,39.2487],
							'重庆': [107.7539,30.1904],
							'金华': [120.0037,29.1028],
							'铜川': [109.0393,35.1947],
							'银川': [106.3586,38.1775],
							'镇江': [119.4763,31.9702],
							'长春': [125.8154,44.2584],
							'长沙': [113.0823,28.2568],
							'长治': [112.8625,36.4746],
							'阳泉': [113.4778,38.0951],
							'青岛': [120.4651,36.3373],
							'韶关': [113.7964,24.7028]
						};

						var BJData = [
							[{name:'北京'}, {name:'上海',value:95}],
							[{name:'北京'}, {name:'广州',value:90}],
							[{name:'北京'}, {name:'大连',value:80}],
							[{name:'北京'}, {name:'南宁',value:70}],
							[{name:'北京'}, {name:'南昌',value:60}],
							[{name:'北京'}, {name:'拉萨',value:50}],
							[{name:'北京'}, {name:'长春',value:40}],
							[{name:'北京'}, {name:'包头',value:30}],
							[{name:'北京'}, {name:'重庆',value:20}],
							[{name:'北京'}, {name:'常州',value:10}]
						];

						var SHData = [
							[{name:'上海'},{name:'包头',value:95}],
							[{name:'上海'},{name:'昆明',value:90}],
							[{name:'上海'},{name:'广州',value:80}],
							[{name:'上海'},{name:'郑州',value:70}],
							[{name:'上海'},{name:'长春',value:60}],
							[{name:'上海'},{name:'重庆',value:50}],
							[{name:'上海'},{name:'长沙',value:40}],
							[{name:'上海'},{name:'北京',value:30}],
							[{name:'上海'},{name:'丹东',value:20}],
							[{name:'上海'},{name:'大连',value:10}]
						];

						var GZData = [
							[{name:'广州'},{name:'福州',value:95}],
							[{name:'广州'},{name:'太原',value:90}],
							[{name:'广州'},{name:'长春',value:80}],
							[{name:'广州'},{name:'重庆',value:70}],
							[{name:'广州'},{name:'西安',value:60}],
							[{name:'广州'},{name:'成都',value:50}],
							[{name:'广州'},{name:'常州',value:40}],
							[{name:'广州'},{name:'北京',value:30}],
							[{name:'广州'},{name:'北海',value:20}],
							[{name:'广州'},{name:'海口',value:10}]
						];

						var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

						var convertData = function (data) {
							var res = [];
							for (var i = 0; i < data.length; i++) {
								var dataItem = data[i];
								var fromCoord = geoCoordMap[dataItem[0].name];
								var toCoord = geoCoordMap[dataItem[1].name];
								if (fromCoord && toCoord) {
									res.push([{
										coord: fromCoord
									}, {
										coord: toCoord
									}]);
								}
							}
							return res;
						};

						var color = ['#a6c84c', '#ffa022', '#46bee9'];
						var series = [];
						[['北京', BJData], ['上海', SHData], ['广州', GZData]].forEach(function (item, i) {
							series.push({
									name: item[0] + ' Top10',
									type: 'lines',
									zlevel: 1,
									effect: {
										show: true,
										period: 6,
										trailLength: 0.7,
										color: '#fff',
										symbolSize: 3
									},
									lineStyle: {
										normal: {
											color: color[i],
											width: 0,
											curveness: 0.2
										}
									},
									data: convertData(item[1])
								},
								{
									name: item[0] + ' Top10',
									type: 'lines',
									zlevel: 2,
									effect: {
										show: true,
										period: 6,
										trailLength: 0,
										symbol: planePath,
										symbolSize: 15
									},
									lineStyle: {
										normal: {
											color: color[i],
											width: 1,
											opacity: 0.4,
											curveness: 0.2
										}
									},
									data: convertData(item[1])
								},
								{
									name: item[0] + ' Top10',
									type: 'effectScatter',
									coordinateSystem: 'geo',
									zlevel: 2,
									rippleEffect: {
										brushType: 'stroke'
									},
									label: {
										normal: {
											show: true,
											position: 'right',
											formatter: '{b}'
										}
									},
									symbolSize: function (val) {
										return val[2] / 8;
									},
									itemStyle: {
										normal: {
											color: color[i]
										}
									},
									data: item[1].map(function (dataItem) {
										return {
											name: dataItem[1].name,
											value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
										};
									})
								});
						});

						var option = {
							backgroundColor: '#404a59',
							title : {
								text: '模拟迁徙',
								subtext: '数据纯属虚构',
								left: 'center',
								textStyle : {
									color: '#fff'
								}
							},
							tooltip : {
								trigger: 'item'
							},
							legend: {
								orient: 'vertical',
								top: 'bottom',
								left: 'right',
								data:['北京 Top10', '上海 Top10', '广州 Top10'],
								textStyle: {
									color: '#fff'
								},
								selectedMode: 'single'
							},
							geo: {
								map: 'china',
								label: {
									emphasis: {
										show: false
									}
								},
								roam: true,
								itemStyle: {
									normal: {
										areaColor: '#323c48',
										borderColor: '#404a59'
									},
									emphasis: {
										areaColor: '#2a333d'
									}
								}
							},
							series: series
						};
						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-geo2": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						myChart.showLoading();

						$.get('data/asset/geo/HK.json', function (geoJson) {

							myChart.hideLoading();

							echarts.registerMap('HK', geoJson);

							myChart.setOption(option = {
								title : {
									text : '香港18区人口密度 （2011）',
									subtext: '人口密度数据来自Wikipedia',
									sublink: 'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12'
								},
								tooltip : {
									trigger: 'item',
									formatter: '{b}<br/>{c} (p / km2)'
								},
								toolbox: {
									show : true,
									orient : 'vertical',
									left: 'right',
									top: 'center',
									feature : {
										mark : {show: true},
										dataView : {show: true, readOnly: false},
										restore : {show: true},
										saveAsImage : {show: true}
									}
								},
								visualMap: {
									min: 800,
									max: 50000,
									text:['High','Low'],
									realtime: false,
									calculable : true,
									color: ['orangered','yellow','lightskyblue']
								},
								series : [
									{
										name: '香港18区人口密度',
										type: 'map',
										mapType: 'HK', // 自定义扩展图表类型
										itemStyle:{
											normal:{label:{show:true}},
											emphasis:{label:{show:true}}
										},
										data:[
											{name: '中西区', value: 20057.34},
											{name: '湾仔', value: 15477.48},
											{name: '东区', value: 31686.1},
											{name: '南区', value: 6992.6},
											{name: '油尖旺', value: 44045.49},
											{name: '深水埗', value: 40689.64},
											{name: '九龙城', value: 37659.78},
											{name: '黄大仙', value: 45180.97},
											{name: '观塘', value: 55204.26},
											{name: '葵青', value: 21900.9},
											{name: '荃湾', value: 4918.26},
											{name: '屯门', value: 5881.84},
											{name: '元朗', value: 4178.01},
											{name: '北区', value: 2227.92},
											{name: '大埔', value: 2180.98},
											{name: '沙田', value: 9172.94},
											{name: '西贡', value: 3368},
											{name: '离岛', value: 806.98}
										],
										// 自定义名称映射
										nameMap: {
											'Central and Western':'中西区',
											'Eastern':'东区',
											'Islands':'离岛',
											'Kowloon City':'九龙城',
											'Kwai Tsing':'葵青',
											'Kwun Tong':'观塘',
											'North':'北区',
											'Sai Kung':'西贡',
											'Sha Tin':'沙田',
											'Sham Shui Po':'深水埗',
											'Southern':'南区',
											'Tai Po':'大埔',
											'Tsuen Wan':'荃湾',
											'Tuen Mun':'屯门',
											'Wan Chai':'湾仔',
											'Wong Tai Sin':'黄大仙',
											'Yau Tsim Mong':'油尖旺',
											'Yuen Long':'元朗'
										}
									}
								]
							});
						});
					}
				});
			},
			"click; .echarts-geo3": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var option = {
							title : {
								text: 'iphone销量',
								subtext: '纯属虚构',
								left: 'center'
							},
							tooltip : {
								trigger: 'item'
							},
							legend: {
								orient: 'vertical',
								left: 'left',
								data:['iphone3','iphone4','iphone5']
							},
							visualMap: {
								min: 0,
								max: 2500,
								left: 'left',
								top: 'bottom',
								text:['高','低'],           // 文本，默认为数值文本
								calculable : true
							},
							toolbox: {
								show: true,
								orient : 'vertical',
								left: 'right',
								top: 'center',
								feature : {
									mark : {show: true},
									dataView : {show: true, readOnly: false},
									restore : {show: true},
									saveAsImage : {show: true}
								}
							},
							series : [
								{
									name: 'iphone3',
									type: 'map',
									mapType: 'china',
									roam: false,
									itemStyle:{
										normal:{label:{show:true}},
										emphasis:{label:{show:true}}
									},
									data:[
										{name: '北京',value: Math.round(Math.random()*1000)},
										{name: '天津',value: Math.round(Math.random()*1000)},
										{name: '上海',value: Math.round(Math.random()*1000)},
										{name: '重庆',value: Math.round(Math.random()*1000)},
										{name: '河北',value: Math.round(Math.random()*1000)},
										{name: '河南',value: Math.round(Math.random()*1000)},
										{name: '云南',value: Math.round(Math.random()*1000)},
										{name: '辽宁',value: Math.round(Math.random()*1000)},
										{name: '黑龙江',value: Math.round(Math.random()*1000)},
										{name: '湖南',value: Math.round(Math.random()*1000)},
										{name: '安徽',value: Math.round(Math.random()*1000)},
										{name: '山东',value: Math.round(Math.random()*1000)},
										{name: '新疆',value: Math.round(Math.random()*1000)},
										{name: '江苏',value: Math.round(Math.random()*1000)},
										{name: '浙江',value: Math.round(Math.random()*1000)},
										{name: '江西',value: Math.round(Math.random()*1000)},
										{name: '湖北',value: Math.round(Math.random()*1000)},
										{name: '广西',value: Math.round(Math.random()*1000)},
										{name: '甘肃',value: Math.round(Math.random()*1000)},
										{name: '山西',value: Math.round(Math.random()*1000)},
										{name: '内蒙古',value: Math.round(Math.random()*1000)},
										{name: '陕西',value: Math.round(Math.random()*1000)},
										{name: '吉林',value: Math.round(Math.random()*1000)},
										{name: '福建',value: Math.round(Math.random()*1000)},
										{name: '贵州',value: Math.round(Math.random()*1000)},
										{name: '广东',value: Math.round(Math.random()*1000)},
										{name: '青海',value: Math.round(Math.random()*1000)},
										{name: '西藏',value: Math.round(Math.random()*1000)},
										{name: '四川',value: Math.round(Math.random()*1000)},
										{name: '宁夏',value: Math.round(Math.random()*1000)},
										{name: '海南',value: Math.round(Math.random()*1000)},
										{name: '台湾',value: Math.round(Math.random()*1000)},
										{name: '香港',value: Math.round(Math.random()*1000)},
										{name: '澳门',value: Math.round(Math.random()*1000)}
									]
								},
								{
									name: 'iphone4',
									type: 'map',
									mapType: 'china',
									itemStyle:{
										normal:{label:{show:true}},
										emphasis:{label:{show:true}}
									},
									data:[
										{name: '北京',value: Math.round(Math.random()*1000)},
										{name: '天津',value: Math.round(Math.random()*1000)},
										{name: '上海',value: Math.round(Math.random()*1000)},
										{name: '重庆',value: Math.round(Math.random()*1000)},
										{name: '河北',value: Math.round(Math.random()*1000)},
										{name: '安徽',value: Math.round(Math.random()*1000)},
										{name: '新疆',value: Math.round(Math.random()*1000)},
										{name: '浙江',value: Math.round(Math.random()*1000)},
										{name: '江西',value: Math.round(Math.random()*1000)},
										{name: '山西',value: Math.round(Math.random()*1000)},
										{name: '内蒙古',value: Math.round(Math.random()*1000)},
										{name: '吉林',value: Math.round(Math.random()*1000)},
										{name: '福建',value: Math.round(Math.random()*1000)},
										{name: '广东',value: Math.round(Math.random()*1000)},
										{name: '西藏',value: Math.round(Math.random()*1000)},
										{name: '四川',value: Math.round(Math.random()*1000)},
										{name: '宁夏',value: Math.round(Math.random()*1000)},
										{name: '香港',value: Math.round(Math.random()*1000)},
										{name: '澳门',value: Math.round(Math.random()*1000)}
									]
								},
								{
									name: 'iphone5',
									type: 'map',
									mapType: 'china',
									itemStyle:{
										normal:{label:{show:true}},
										emphasis:{label:{show:true}}
									},
									data:[
										{name: '北京',value: Math.round(Math.random()*1000)},
										{name: '天津',value: Math.round(Math.random()*1000)},
										{name: '上海',value: Math.round(Math.random()*1000)},
										{name: '广东',value: Math.round(Math.random()*1000)},
										{name: '台湾',value: Math.round(Math.random()*1000)},
										{name: '香港',value: Math.round(Math.random()*1000)},
										{name: '澳门',value: Math.round(Math.random()*1000)}
									]
								}
							]
						};

						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-geo4": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var option = {
							tooltip : {
								trigger: 'item',
								formatter: '{b}'
							},
							series : [
								{
									name: '中国',
									type: 'map',
									mapType: 'china',
									selectedMode : 'multiple',
									itemStyle:{
										normal:{label:{show:true}},
										emphasis:{label:{show:true}}
									},
									data:[
										{name:'广东',selected:true}
									]
								}
							]
						};

						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-geo5": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						myChart.showLoading();

						$.get('data/asset/geo/USA.json', function (usaJson) {
							myChart.hideLoading();

							echarts.registerMap('USA', usaJson, {
								Alaska: {              // 把阿拉斯加移到美国主大陆左下方
									left: -131,
									top: 25,
									width: 15
								},
								Hawaii: {
									left: -110,        // 夏威夷
									top: 28,
									width: 5
								},
								'Puerto Rico': {       // 波多黎各
									left: -76,
									top: 26,
									width: 2
								}
							});
							option = {
								title : {
									text: 'USA Population Estimates (2012)',
									subtext: 'Data from www.census.gov',
									sublink: 'http://www.census.gov/popest/data/datasets.html',
									left: 'right'
								},
								tooltip : {
									trigger: 'item',
									showDelay: 0,
									transitionDuration: 0.2,
									formatter : function (params) {
										var value = (params.value + '').split('.');
										value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
										return params.seriesName + '<br/>' + params.name + ' : ' + value;
									}
								},
								visualMap: {
									left: 'right',
									min: 500000,
									max: 38000000,
									color: ['orangered','yellow','lightskyblue'],
									text:['High','Low'],           // 文本，默认为数值文本
									calculable : true
								},
								toolbox: {
									show : true,
									//orient : 'vertical',
									left: 'left',
									top: 'top',
									feature : {
										mark : {show: true},
										dataView : {show: true, readOnly: false},
										restore : {show: true},
										saveAsImage : {show: true}
									}
								},
								series : [
									{
										name: 'USA PopEstimates',
										type: 'map',
										roam: true,
										map: 'USA',
										itemStyle:{
											emphasis:{label:{show:true}}
										},
										// 文本位置修正
										textFixed : {
											Alaska : [20, -20]
										},
										data:[
											{name : 'Alabama', value : 4822023},
											{name : 'Alaska', value : 731449},
											{name : 'Arizona', value : 6553255},
											{name : 'Arkansas', value : 2949131},
											{name : 'California', value : 38041430},
											{name : 'Colorado', value : 5187582},
											{name : 'Connecticut', value : 3590347},
											{name : 'Delaware', value : 917092},
											{name : 'District of Columbia', value : 632323},
											{name : 'Florida', value : 19317568},
											{name : 'Georgia', value : 9919945},
											{name : 'Hawaii', value : 1392313},
											{name : 'Idaho', value : 1595728},
											{name : 'Illinois', value : 12875255},
											{name : 'Indiana', value : 6537334},
											{name : 'Iowa', value : 3074186},
											{name : 'Kansas', value : 2885905},
											{name : 'Kentucky', value : 4380415},
											{name : 'Louisiana', value : 4601893},
											{name : 'Maine', value : 1329192},
											{name : 'Maryland', value : 5884563},
											{name : 'Massachusetts', value : 6646144},
											{name : 'Michigan', value : 9883360},
											{name : 'Minnesota', value : 5379139},
											{name : 'Mississippi', value : 2984926},
											{name : 'Missouri', value : 6021988},
											{name : 'Montana', value : 1005141},
											{name : 'Nebraska', value : 1855525},
											{name : 'Nevada', value : 2758931},
											{name : 'New Hampshire', value : 1320718},
											{name : 'New Jersey', value : 8864590},
											{name : 'New Mexico', value : 2085538},
											{name : 'New York', value : 19570261},
											{name : 'North Carolina', value : 9752073},
											{name : 'North Dakota', value : 699628},
											{name : 'Ohio', value : 11544225},
											{name : 'Oklahoma', value : 3814820},
											{name : 'Oregon', value : 3899353},
											{name : 'Pennsylvania', value : 12763536},
											{name : 'Rhode Island', value : 1050292},
											{name : 'South Carolina', value : 4723723},
											{name : 'South Dakota', value : 833354},
											{name : 'Tennessee', value : 6456243},
											{name : 'Texas', value : 26059203},
											{name : 'Utah', value : 2855287},
											{name : 'Vermont', value : 626011},
											{name : 'Virginia', value : 8185867},
											{name : 'Washington', value : 6897012},
											{name : 'West Virginia', value : 1855413},
											{name : 'Wisconsin', value : 5726398},
											{name : 'Wyoming', value : 576412},
											{name : 'Puerto Rico', value : 3667084}
										]
									}
								]
							};

							myChart.setOption(option);
						});
					}
				});
			},
			"click; .echarts-geo6": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var option = {
							title : {
								text: 'World Population (2010)',
								subtext: 'from United Nations, Total population, both sexes combined, as of 1 July (thousands)',
								sublink : 'http://esa.un.org/wpp/Excel-Data/population.htm',
								left: 'center',
								top: 'top'
							},
							tooltip : {
								trigger: 'item',
								formatter : function (params) {
									var value = (params.value + '').split('.');
									value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
										+ '.' + value[1];
									return params.seriesName + '<br/>' + params.name + ' : ' + value;
								}
							},
							toolbox: {
								show : true,
								orient : 'vertical',
								left: 'right',
								top: 'center',
								feature : {
									mark : {show: true},
									dataView : {show: true, readOnly: false},
									restore : {show: true},
									saveAsImage : {show: true}
								}
							},
							visualMap: {
								min: 0,
								max: 1000000,
								text:['High','Low'],
								realtime: false,
								calculable : true,
								color: ['orangered','yellow','lightskyblue']
							},
							series : [
								{
									name: 'World Population (2010)',
									type: 'map',
									mapType: 'world',
									roam: true,
									itemStyle:{
										emphasis:{label:{show:true}}
									},
									data:[
										{name : 'Afghanistan', value : 28397.812},
										{name : 'Angola', value : 19549.124},
										{name : 'Albania', value : 3150.143},
										{name : 'United Arab Emirates', value : 8441.537},
										{name : 'Argentina', value : 40374.224},
										{name : 'Armenia', value : 2963.496},
										{name : 'French Southern and Antarctic Lands', value : 268.065},
										{name : 'Australia', value : 22404.488},
										{name : 'Austria', value : 8401.924},
										{name : 'Azerbaijan', value : 9094.718},
										{name : 'Burundi', value : 9232.753},
										{name : 'Belgium', value : 10941.288},
										{name : 'Benin', value : 9509.798},
										{name : 'Burkina Faso', value : 15540.284},
										{name : 'Bangladesh', value : 151125.475},
										{name : 'Bulgaria', value : 7389.175},
										{name : 'The Bahamas', value : 66402.316},
										{name : 'Bosnia and Herzegovina', value : 3845.929},
										{name : 'Belarus', value : 9491.07},
										{name : 'Belize', value : 308.595},
										{name : 'Bermuda', value : 64.951},
										{name : 'Bolivia', value : 716.939},
										{name : 'Brazil', value : 195210.154},
										{name : 'Brunei', value : 27.223},
										{name : 'Bhutan', value : 716.939},
										{name : 'Botswana', value : 1969.341},
										{name : 'Central African Republic', value : 4349.921},
										{name : 'Canada', value : 34126.24},
										{name : 'Switzerland', value : 7830.534},
										{name : 'Chile', value : 17150.76},
										{name : 'China', value : 1359821.465},
										{name : 'Ivory Coast', value : 60508.978},
										{name : 'Cameroon', value : 20624.343},
										{name : 'Democratic Republic of the Congo', value : 62191.161},
										{name : 'Republic of the Congo', value : 3573.024},
										{name : 'Colombia', value : 46444.798},
										{name : 'Costa Rica', value : 4669.685},
										{name : 'Cuba', value : 11281.768},
										{name : 'Northern Cyprus', value : 1.468},
										{name : 'Cyprus', value : 1103.685},
										{name : 'Czech Republic', value : 10553.701},
										{name : 'Germany', value : 83017.404},
										{name : 'Djibouti', value : 834.036},
										{name : 'Denmark', value : 5550.959},
										{name : 'Dominican Republic', value : 10016.797},
										{name : 'Algeria', value : 37062.82},
										{name : 'Ecuador', value : 15001.072},
										{name : 'Egypt', value : 78075.705},
										{name : 'Eritrea', value : 5741.159},
										{name : 'Spain', value : 46182.038},
										{name : 'Estonia', value : 1298.533},
										{name : 'Ethiopia', value : 87095.281},
										{name : 'Finland', value : 5367.693},
										{name : 'Fiji', value : 860.559},
										{name : 'Falkland Islands', value : 49.581},
										{name : 'France', value : 63230.866},
										{name : 'Gabon', value : 1556.222},
										{name : 'United Kingdom', value : 62066.35},
										{name : 'Georgia', value : 4388.674},
										{name : 'Ghana', value : 24262.901},
										{name : 'Guinea', value : 10876.033},
										{name : 'Gambia', value : 1680.64},
										{name : 'Guinea Bissau', value : 10876.033},
										{name : 'Equatorial Guinea', value : 696.167},
										{name : 'Greece', value : 11109.999},
										{name : 'Greenland', value : 56.546},
										{name : 'Guatemala', value : 14341.576},
										{name : 'French Guiana', value : 231.169},
										{name : 'Guyana', value : 786.126},
										{name : 'Honduras', value : 7621.204},
										{name : 'Croatia', value : 4338.027},
										{name : 'Haiti', value : 9896.4},
										{name : 'Hungary', value : 10014.633},
										{name : 'Indonesia', value : 240676.485},
										{name : 'India', value : 1205624.648},
										{name : 'Ireland', value : 4467.561},
										{name : 'Iran', value : 240676.485},
										{name : 'Iraq', value : 30962.38},
										{name : 'Iceland', value : 318.042},
										{name : 'Israel', value : 7420.368},
										{name : 'Italy', value : 60508.978},
										{name : 'Jamaica', value : 2741.485},
										{name : 'Jordan', value : 6454.554},
										{name : 'Japan', value : 127352.833},
										{name : 'Kazakhstan', value : 15921.127},
										{name : 'Kenya', value : 40909.194},
										{name : 'Kyrgyzstan', value : 5334.223},
										{name : 'Cambodia', value : 14364.931},
										{name : 'South Korea', value : 51452.352},
										{name : 'Kosovo', value : 97.743},
										{name : 'Kuwait', value : 2991.58},
										{name : 'Laos', value : 6395.713},
										{name : 'Lebanon', value : 4341.092},
										{name : 'Liberia', value : 3957.99},
										{name : 'Libya', value : 6040.612},
										{name : 'Sri Lanka', value : 20758.779},
										{name : 'Lesotho', value : 2008.921},
										{name : 'Lithuania', value : 3068.457},
										{name : 'Luxembourg', value : 507.885},
										{name : 'Latvia', value : 2090.519},
										{name : 'Morocco', value : 31642.36},
										{name : 'Moldova', value : 103.619},
										{name : 'Madagascar', value : 21079.532},
										{name : 'Mexico', value : 117886.404},
										{name : 'Macedonia', value : 507.885},
										{name : 'Mali', value : 13985.961},
										{name : 'Myanmar', value : 51931.231},
										{name : 'Montenegro', value : 620.078},
										{name : 'Mongolia', value : 2712.738},
										{name : 'Mozambique', value : 23967.265},
										{name : 'Mauritania', value : 3609.42},
										{name : 'Malawi', value : 15013.694},
										{name : 'Malaysia', value : 28275.835},
										{name : 'Namibia', value : 2178.967},
										{name : 'New Caledonia', value : 246.379},
										{name : 'Niger', value : 15893.746},
										{name : 'Nigeria', value : 159707.78},
										{name : 'Nicaragua', value : 5822.209},
										{name : 'Netherlands', value : 16615.243},
										{name : 'Norway', value : 4891.251},
										{name : 'Nepal', value : 26846.016},
										{name : 'New Zealand', value : 4368.136},
										{name : 'Oman', value : 2802.768},
										{name : 'Pakistan', value : 173149.306},
										{name : 'Panama', value : 3678.128},
										{name : 'Peru', value : 29262.83},
										{name : 'Philippines', value : 93444.322},
										{name : 'Papua New Guinea', value : 6858.945},
										{name : 'Poland', value : 38198.754},
										{name : 'Puerto Rico', value : 3709.671},
										{name : 'North Korea', value : 1.468},
										{name : 'Portugal', value : 10589.792},
										{name : 'Paraguay', value : 6459.721},
										{name : 'Qatar', value : 1749.713},
										{name : 'Romania', value : 21861.476},
										{name : 'Russia', value : 21861.476},
										{name : 'Rwanda', value : 10836.732},
										{name : 'Western Sahara', value : 514.648},
										{name : 'Saudi Arabia', value : 27258.387},
										{name : 'Sudan', value : 35652.002},
										{name : 'South Sudan', value : 9940.929},
										{name : 'Senegal', value : 12950.564},
										{name : 'Solomon Islands', value : 526.447},
										{name : 'Sierra Leone', value : 5751.976},
										{name : 'El Salvador', value : 6218.195},
										{name : 'Somaliland', value : 9636.173},
										{name : 'Somalia', value : 9636.173},
										{name : 'Republic of Serbia', value : 3573.024},
										{name : 'Suriname', value : 524.96},
										{name : 'Slovakia', value : 5433.437},
										{name : 'Slovenia', value : 2054.232},
										{name : 'Sweden', value : 9382.297},
										{name : 'Swaziland', value : 1193.148},
										{name : 'Syria', value : 7830.534},
										{name : 'Chad', value : 11720.781},
										{name : 'Togo', value : 6306.014},
										{name : 'Thailand', value : 66402.316},
										{name : 'Tajikistan', value : 7627.326},
										{name : 'Turkmenistan', value : 5041.995},
										{name : 'East Timor', value : 10016.797},
										{name : 'Trinidad and Tobago', value : 1328.095},
										{name : 'Tunisia', value : 10631.83},
										{name : 'Turkey', value : 72137.546},
										{name : 'United Republic of Tanzania', value : 44973.33},
										{name : 'Uganda', value : 33987.213},
										{name : 'Ukraine', value : 46050.22},
										{name : 'Uruguay', value : 3371.982},
										{name : 'United States of America', value : 312247.116},
										{name : 'Uzbekistan', value : 27769.27},
										{name : 'Venezuela', value : 236.299},
										{name : 'Vietnam', value : 89047.397},
										{name : 'Vanuatu', value : 236.299},
										{name : 'West Bank', value : 13.565},
										{name : 'Yemen', value : 22763.008},
										{name : 'South Africa', value : 51452.352},
										{name : 'Zambia', value : 13216.985},
										{name : 'Zimbabwe', value : 13076.978}
									]
								}
							]
						};

						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-pie1": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var option = {
							backgroundColor: '#2c343c',

							title: {
								text: 'Customized Pie',
								left: 'center',
								top: 20,
								textStyle: {
									color: '#ccc'
								}
							},

							tooltip : {
								trigger: 'item',
								formatter: "{a} <br/>{b} : {c} ({d}%)"
							},

							visualMap: {
								show: false,
								min: 80,
								max: 600,
								inRange: {
									colorLightness: [0, 1]
								}
							},
							series : [
								{
									name:'访问来源',
									type:'pie',
									radius : '55%',
									center: ['50%', '50%'],
									data:[
										{value:335, name:'直接访问'},
										{value:310, name:'邮件营销'},
										{value:274, name:'联盟广告'},
										{value:235, name:'视频广告'},
										{value:400, name:'搜索引擎'}
									].sort(function (a, b) { return a.value - b.value}),
									roseType: 'angle',
									label: {
										normal: {
											textStyle: {
												color: 'rgba(255, 255, 255, 0.3)'
											}
										}
									},
									labelLine: {
										normal: {
											lineStyle: {
												color: 'rgba(255, 255, 255, 0.3)'
											},
											smooth: 0.2,
											length: 10,
											length2: 20
										}
									},
									itemStyle: {
										normal: {
											color: '#c23531',
											shadowBlur: 200,
											shadowColor: 'rgba(0, 0, 0, 0.5)'
										}
									}
								}
							]
						};
						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-pie2": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var option = {
							tooltip: {
								trigger: 'item',
								formatter: "{a} <br/>{b}: {c} ({d}%)"
							},
							legend: {
								orient: 'vertical',
								x: 'left',
								data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
							},
							series: [
								{
									name:'访问来源',
									type:'pie',
									radius: ['50%', '70%'],
									avoidLabelOverlap: false,
									label: {
										normal: {
											show: false,
											position: 'center'
										},
										emphasis: {
											show: true,
											textStyle: {
												fontSize: '30',
												fontWeight: 'bold'
											}
										}
									},
									labelLine: {
										normal: {
											show: false
										}
									},
									data:[
										{value:335, name:'直接访问'},
										{value:310, name:'邮件营销'},
										{value:234, name:'联盟广告'},
										{value:135, name:'视频广告'},
										{value:1548, name:'搜索引擎'}
									]
								}
							]
						};

						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-pie3": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var option = {
							tooltip: {
								trigger: 'item',
								formatter: "{a} <br/>{b}: {c} ({d}%)"
							},
							legend: {
								orient: 'vertical',
								x: 'left',
								data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
							},
							series: [
								{
									name:'访问来源',
									type:'pie',
									selectedMode: 'single',
									radius: [0, '30%'],

									label: {
										normal: {
											position: 'inner'
										}
									},
									labelLine: {
										normal: {
											show: false
										}
									},
									data:[
										{value:335, name:'直达', selected:true},
										{value:679, name:'营销广告'},
										{value:1548, name:'搜索引擎'}
									]
								},
								{
									name:'访问来源',
									type:'pie',
									radius: ['40%', '55%'],

									data:[
										{value:335, name:'直达'},
										{value:310, name:'邮件营销'},
										{value:234, name:'联盟广告'},
										{value:135, name:'视频广告'},
										{value:1048, name:'百度'},
										{value:251, name:'谷歌'},
										{value:147, name:'必应'},
										{value:102, name:'其他'}
									]
								}
							]
						};
						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-pie4": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var option = {
							title : {
								text: '南丁格尔玫瑰图',
								subtext: '纯属虚构',
								x:'center'
							},
							tooltip : {
								trigger: 'item',
								formatter: "{a} <br/>{b} : {c} ({d}%)"
							},
							legend: {
								x : 'center',
								y : 'bottom',
								data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
							},
							toolbox: {
								show : true,
								feature : {
									mark : {show: true},
									dataView : {show: true, readOnly: false},
									magicType : {
										show: true,
										type: ['pie', 'funnel']
									},
									restore : {show: true},
									saveAsImage : {show: true}
								}
							},
							calculable : true,
							series : [
								{
									name:'半径模式',
									type:'pie',
									radius : [20, 110],
									center : ['25%', 200],
									roseType : 'radius',
									label: {
										normal: {
											show: false
										},
										emphasis: {
											show: true
										}
									},
									lableLine: {
										normal: {
											show: false
										},
										emphasis: {
											show: true
										}
									},
									data:[
										{value:10, name:'rose1'},
										{value:5, name:'rose2'},
										{value:15, name:'rose3'},
										{value:25, name:'rose4'},
										{value:20, name:'rose5'},
										{value:35, name:'rose6'},
										{value:30, name:'rose7'},
										{value:40, name:'rose8'}
									]
								},
								{
									name:'面积模式',
									type:'pie',
									radius : [30, 110],
									center : ['75%', 200],
									roseType : 'area',
									data:[
										{value:10, name:'rose1'},
										{value:5, name:'rose2'},
										{value:15, name:'rose3'},
										{value:25, name:'rose4'},
										{value:20, name:'rose5'},
										{value:35, name:'rose6'},
										{value:30, name:'rose7'},
										{value:40, name:'rose8'}
									]
								}
							]
						};

						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-pie5": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var option = {
							title : {
								text: '某站点用户访问来源',
								subtext: '纯属虚构',
								x:'center'
							},
							tooltip : {
								trigger: 'item',
								formatter: "{a} <br/>{b} : {c} ({d}%)"
							},
							legend: {
								orient: 'vertical',
								left: 'left',
								data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
							},
							series : [
								{
									name: '访问来源',
									type: 'pie',
									radius : '55%',
									center: ['50%', '60%'],
									data:[
										{value:335, name:'直接访问'},
										{value:310, name:'邮件营销'},
										{value:234, name:'联盟广告'},
										{value:135, name:'视频广告'},
										{value:1548, name:'搜索引擎'}
									],
									itemStyle: {
										emphasis: {
											shadowBlur: 10,
											shadowOffsetX: 0,
											shadowColor: 'rgba(0, 0, 0, 0.5)'
										}
									}
								}
							]
						};

						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-candlestick1": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						// 开盘，收盘，最低，最高
						var data0 = splitData([
							['2013/1/24', 2320.26,2320.26,2287.3,2362.94],
							['2013/1/25', 2300,2291.3,2288.26,2308.38],
							['2013/1/28', 2295.35,2346.5,2295.35,2346.92],
							['2013/1/29', 2347.22,2358.98,2337.35,2363.8],
							['2013/1/30', 2360.75,2382.48,2347.89,2383.76],
							['2013/1/31', 2383.43,2385.42,2371.23,2391.82],
							['2013/2/1', 2377.41,2419.02,2369.57,2421.15],
							['2013/2/4', 2425.92,2428.15,2417.58,2440.38],
							['2013/2/5', 2411,2433.13,2403.3,2437.42],
							['2013/2/6', 2432.68,2434.48,2427.7,2441.73],
							['2013/2/7', 2430.69,2418.53,2394.22,2433.89],
							['2013/2/8', 2416.62,2432.4,2414.4,2443.03],
							['2013/2/18', 2441.91,2421.56,2415.43,2444.8],
							['2013/2/19', 2420.26,2382.91,2373.53,2427.07],
							['2013/2/20', 2383.49,2397.18,2370.61,2397.94],
							['2013/2/21', 2378.82,2325.95,2309.17,2378.82],
							['2013/2/22', 2322.94,2314.16,2308.76,2330.88],
							['2013/2/25', 2320.62,2325.82,2315.01,2338.78],
							['2013/2/26', 2313.74,2293.34,2289.89,2340.71],
							['2013/2/27', 2297.77,2313.22,2292.03,2324.63],
							['2013/2/28', 2322.32,2365.59,2308.92,2366.16],
							['2013/3/1', 2364.54,2359.51,2330.86,2369.65],
							['2013/3/4', 2332.08,2273.4,2259.25,2333.54],
							['2013/3/5', 2274.81,2326.31,2270.1,2328.14],
							['2013/3/6', 2333.61,2347.18,2321.6,2351.44],
							['2013/3/7', 2340.44,2324.29,2304.27,2352.02],
							['2013/3/8', 2326.42,2318.61,2314.59,2333.67],
							['2013/3/11', 2314.68,2310.59,2296.58,2320.96],
							['2013/3/12', 2309.16,2286.6,2264.83,2333.29],
							['2013/3/13', 2282.17,2263.97,2253.25,2286.33],
							['2013/3/14', 2255.77,2270.28,2253.31,2276.22],
							['2013/3/15', 2269.31,2278.4,2250,2312.08],
							['2013/3/18', 2267.29,2240.02,2239.21,2276.05],
							['2013/3/19', 2244.26,2257.43,2232.02,2261.31],
							['2013/3/20', 2257.74,2317.37,2257.42,2317.86],
							['2013/3/21', 2318.21,2324.24,2311.6,2330.81],
							['2013/3/22', 2321.4,2328.28,2314.97,2332],
							['2013/3/25', 2334.74,2326.72,2319.91,2344.89],
							['2013/3/26', 2318.58,2297.67,2281.12,2319.99],
							['2013/3/27', 2299.38,2301.26,2289,2323.48],
							['2013/3/28', 2273.55,2236.3,2232.91,2273.55],
							['2013/3/29', 2238.49,2236.62,2228.81,2246.87],
							['2013/4/1', 2229.46,2234.4,2227.31,2243.95],
							['2013/4/2', 2234.9,2227.74,2220.44,2253.42],
							['2013/4/3', 2232.69,2225.29,2217.25,2241.34],
							['2013/4/8', 2196.24,2211.59,2180.67,2212.59],
							['2013/4/9', 2215.47,2225.77,2215.47,2234.73],
							['2013/4/10', 2224.93,2226.13,2212.56,2233.04],
							['2013/4/11', 2236.98,2219.55,2217.26,2242.48],
							['2013/4/12', 2218.09,2206.78,2204.44,2226.26],
							['2013/4/15', 2199.91,2181.94,2177.39,2204.99],
							['2013/4/16', 2169.63,2194.85,2165.78,2196.43],
							['2013/4/17', 2195.03,2193.8,2178.47,2197.51],
							['2013/4/18', 2181.82,2197.6,2175.44,2206.03],
							['2013/4/19', 2201.12,2244.64,2200.58,2250.11],
							['2013/4/22', 2236.4,2242.17,2232.26,2245.12],
							['2013/4/23', 2242.62,2184.54,2182.81,2242.62],
							['2013/4/24', 2187.35,2218.32,2184.11,2226.12],
							['2013/4/25', 2213.19,2199.31,2191.85,2224.63],
							['2013/4/26', 2203.89,2177.91,2173.86,2210.58],
							['2013/5/2', 2170.78,2174.12,2161.14,2179.65],
							['2013/5/3', 2179.05,2205.5,2179.05,2222.81],
							['2013/5/6', 2212.5,2231.17,2212.5,2236.07],
							['2013/5/7', 2227.86,2235.57,2219.44,2240.26],
							['2013/5/8', 2242.39,2246.3,2235.42,2255.21],
							['2013/5/9', 2246.96,2232.97,2221.38,2247.86],
							['2013/5/10', 2228.82,2246.83,2225.81,2247.67],
							['2013/5/13', 2247.68,2241.92,2231.36,2250.85],
							['2013/5/14', 2238.9,2217.01,2205.87,2239.93],
							['2013/5/15', 2217.09,2224.8,2213.58,2225.19],
							['2013/5/16', 2221.34,2251.81,2210.77,2252.87],
							['2013/5/17', 2249.81,2282.87,2248.41,2288.09],
							['2013/5/20', 2286.33,2299.99,2281.9,2309.39],
							['2013/5/21', 2297.11,2305.11,2290.12,2305.3],
							['2013/5/22', 2303.75,2302.4,2292.43,2314.18],
							['2013/5/23', 2293.81,2275.67,2274.1,2304.95],
							['2013/5/24', 2281.45,2288.53,2270.25,2292.59],
							['2013/5/27', 2286.66,2293.08,2283.94,2301.7],
							['2013/5/28', 2293.4,2321.32,2281.47,2322.1],
							['2013/5/29', 2323.54,2324.02,2321.17,2334.33],
							['2013/5/30', 2316.25,2317.75,2310.49,2325.72],
							['2013/5/31', 2320.74,2300.59,2299.37,2325.53],
							['2013/6/3', 2300.21,2299.25,2294.11,2313.43],
							['2013/6/4', 2297.1,2272.42,2264.76,2297.1],
							['2013/6/5', 2270.71,2270.93,2260.87,2276.86],
							['2013/6/6', 2264.43,2242.11,2240.07,2266.69],
							['2013/6/7', 2242.26,2210.9,2205.07,2250.63],
							['2013/6/13', 2190.1,2148.35,2126.22,2190.1]
						]);


						function splitData(rawData) {
							var categoryData = [];
							var values = []
							for (var i = 0; i < rawData.length; i++) {
								categoryData.push(rawData[i].splice(0, 1)[0]);
								values.push(rawData[i])
							}
							return {
								categoryData: categoryData,
								values: values
							};
						}


						var option = {
							title: {
								text: '上证指数',
								left: 'center'
							},
							tooltip: {
								trigger: 'axis',
								axisPointer: {
									type: 'line'
								}
							},
							grid: {
								left: '10%',
								right: '10%',
								bottom: '15%'
							},
							xAxis: {
								type: 'category',
								data: data0.categoryData,
								scale: true,
								boundaryGap : false,
								axisLine: {onZero: false},
								splitLine: {show: false},
								splitNumber: 20,
								min: 'dataMin',
								max: 'dataMax'
							},
							yAxis: {
								scale: true,
								splitArea: {
									show: true
								}
							},
							dataZoom: [
								{
									type: 'inside',
									start: 50,
									end: 100
								},
								{
									show: true,
									type: 'slider',
									y: '90%',
									start: 50,
									end: 100
								}
							],
							series: [
								{
									name: '上证指数',
									type: 'candlestick',
									data: data0.values
								}
							]
						};

						function formatDate(data) {
							for (var i = 0; i < data.length; i++) {
								var item = data[i];
								var date = new Date(item[0].replace('-', '/'));
								item[0] = +date;
							}
							return data;
						}

						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-boxplot1": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var data = echarts.dataTool.prepareBoxplotData([
							[850, 740, 900, 1070, 930, 850, 950, 980, 980, 880, 1000, 980, 930, 650, 760, 810, 1000, 1000, 960, 960],
							[960, 940, 960, 940, 880, 800, 850, 880, 900, 840, 830, 790, 810, 880, 880, 830, 800, 790, 760, 800],
							[880, 880, 880, 860, 720, 720, 620, 860, 970, 950, 880, 910, 850, 870, 840, 840, 850, 840, 840, 840],
							[890, 810, 810, 820, 800, 770, 760, 740, 750, 760, 910, 920, 890, 860, 880, 720, 840, 850, 850, 780],
							[890, 840, 780, 810, 760, 810, 790, 810, 820, 850, 870, 870, 810, 740, 810, 940, 950, 800, 810, 870]
						]);

						var option = {
							title: [
								{
									text: 'Michelson-Morley Experiment',
									left: 'center',
								},
								{
									text: 'upper: Q3 + 1.5 * IRQ \nlower: Q1 - 1.5 * IRQ',
									borderColor: '#999',
									borderWidth: 1,
									textStyle: {
										fontSize: 14
									},
									left: '10%',
									top: '90%'
								}
							],
							legend: {
								data: ['line', 'line2', 'line3']
							},
							tooltip: {
								trigger: 'item',
								axisPointer: {
									type: 'shadow'
								}
							},
							grid: {
								left: '10%',
								right: '10%',
								bottom: '15%'
							},
							xAxis: {
								type: 'category',
								data: data.axisData,
								boundaryGap: true,
								nameGap: 30,
								splitArea: {
									show: false
								},
								axisLabel: {
									formatter: 'expr {value}'
								},
								splitLine: {
									show: false
								}
							},
							yAxis: {
								type: 'value',
								name: 'km/s minus 299,000',
								splitArea: {
									show: true
								}
							},
							series: [
								{
									name: 'boxplot',
									type: 'boxplot',
									data: data.boxData,
									tooltip: {
										formatter: function (param) {
											return [
												'Experiment ' + param.name + ': ',
												'upper: ' + param.data[0],
												'Q1: ' + param.data[1],
												'median: ' + param.data[2],
												'Q3: ' + param.data[3],
												'lower: ' + param.data[4]
											].join('<br/>')
										}
									}
								},
								{
									name: 'outlier',
									type: 'scatter',
									data: data.outliers
								}
							]
						};
						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-boxplot2": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var data = echarts.dataTool.prepareBoxplotData([
							[850, 740, 900, 1070, 930, 850, 950, 980, 980, 880, 1000, 980, 930, 650, 760, 810, 1000, 1000, 960, 960],
							[960, 940, 960, 940, 880, 800, 850, 880, 900, 840, 830, 790, 810, 880, 880, 830, 800, 790, 760, 800],
							[880, 880, 880, 860, 720, 720, 620, 860, 970, 950, 880, 910, 850, 870, 840, 840, 850, 840, 840, 840],
							[890, 810, 810, 820, 800, 770, 760, 740, 750, 760, 910, 920, 890, 860, 880, 720, 840, 850, 850, 780],
							[890, 840, 780, 810, 760, 810, 790, 810, 820, 850, 870, 870, 810, 740, 810, 940, 950, 800, 810, 870]
						], {
							layout: 'vertical'
						});

						var option = {
							title: [
								{
									text: 'Michelson-Morley Experiment',
									x: 'center',
								},
								{
									text: 'upper: Q3 + 1.5 * IRQ \nlower: Q1 - 1.5 * IRQ',
									borderColor: '#999',
									borderWidth: 1,
									textStyle: {
										fontSize: 14
									},
									left: '10%',
									top: '90%'
								}
							],
							legend: {
								data: ['line', 'line2', 'line3']
							},
							tooltip: {
								trigger: 'item',
								axisPointer: {
									type: 'shadow'
								}
							},
							grid: {
								left: '10%',
								right: '10%',
								bottom: '15%'
							},
							yAxis: {
								type: 'category',
								data: data.axisData,
								boundaryGap: true,
								nameGap: 30,
								splitArea: {
									show: false
								},
								axisLabel: {
									formatter: 'expr {value}'
								},
								splitLine: {
									show: false
								}
							},
							xAxis: {
								type: 'value',
								name: 'km/s minus 299,000',
								splitArea: {
									show: true
								}
							},
							series: [
								{
									name: 'boxplot',
									type: 'boxplot',
									data: data.boxData,
									tooltip: {
										formatter: function (param) {
											return [
												'Experiment ' + param.name + ': ',
												'upper: ' + param.data[0],
												'Q1: ' + param.data[1],
												'median: ' + param.data[2],
												'Q3: ' + param.data[3],
												'lower: ' + param.data[4]
											].join('<br/>')
										}
									}
								},
								{
									name: 'outlier',
									type: 'scatter',
									data: data.outliers
								}
							]
						};
						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-boxplot3": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {

// Generate data.
						data = [];
						for (var seriesIndex = 0; seriesIndex < 5; seriesIndex++) {
							var seriesData = [];
							for (var i = 0; i < 18; i++) {
								var cate = [];
								for (var j = 0; j < 100; j++) {
									cate.push(Math.random() * 200);
								}
								seriesData.push(cate);
							}
							data.push(echarts.dataTool.prepareBoxplotData(seriesData));
						}


						var option = {
							title: {
								text: 'Multiple Categories',
								left: 'center',
							},
							legend: {
								y: '10%',
								data: ['category0', 'category1', 'category2', 'category3']
							},
							tooltip: {
								trigger: 'item',
								axisPointer: {
									type: 'shadow'
								}
							},
							grid: {
								left: '10%',
								top: '20%',
								right: '10%',
								bottom: '15%'
							},
							xAxis: {
								type: 'category',
								data: data[0].axisData,
								boundaryGap: true,
								nameGap: 30,
								splitArea: {
									show: true
								},
								axisLabel: {
									formatter: 'expr {value}'
								},
								splitLine: {
									show: false
								}
							},
							yAxis: {
								type: 'value',
								name: 'Value',
								min: -400,
								max: 600,
								splitArea: {
									show: false
								}
							},
							dataZoom: [
								{
									type: 'inside',
									start: 0,
									end: 20
								},
								{
									show: true,
									height: 20,
									type: 'slider',
									top: '90%',
									xAxisIndex: [0],
									start: 0,
									end: 20
								}
							],
							series: [
								{
									name: 'category0',
									type: 'boxplot',
									data: data[0].boxData,
									tooltip: {formatter: formatter}
								},
								{
									name: 'category1',
									type: 'boxplot',
									data: data[1].boxData,
									tooltip: {formatter: formatter}
								},
								{
									name: 'category2',
									type: 'boxplot',
									data: data[2].boxData,
									tooltip: {formatter: formatter}
								}
							]
						};

						function formatter(param) {
							return [
								'Experiment ' + param.name + ': ',
								'upper: ' + param.data[0],
								'Q1: ' + param.data[1],
								'median: ' + param.data[2],
								'Q3: ' + param.data[3],
								'lower: ' + param.data[4]
							].join('<br/>')
						}
						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-heatmap1": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
							'7a', '8a', '9a','10a','11a',
							'12p', '1p', '2p', '3p', '4p', '5p',
							'6p', '7p', '8p', '9p', '10p', '11p'];
						var days = ['Saturday', 'Friday', 'Thursday',
							'Wednesday', 'Tuesday', 'Monday', 'Sunday'];

						var data = [[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]];

						data = data.map(function (item) {
							return [item[1], item[0], item[2] || '-'];
						});

						var option = {
							tooltip: {
								position: 'top'
							},
							animation: false,
							grid: {
								height: '50%',
								y: '10%'
							},
							xAxis: {
								type: 'category',
								data: hours
							},
							yAxis: {
								type: 'category',
								data: days
							},
							visualMap: {
								min: 1,
								max: 10,
								calculable: true,
								orient: 'horizontal',
								left: 'center',
								bottom: '15%'
							},
							series: [{
								name: 'Punch Card',
								type: 'heatmap',
								data: data,
								label: {
									normal: {
										show: true
									}
								},
								itemStyle: {
									emphasis: {
										shadowBlur: 10,
										shadowColor: 'rgba(0, 0, 0, 0.5)'
									}
								}
							}]
						};
						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-heatmap2": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var geoCoordMap = {
							"海门":[121.15,31.89],
							"鄂尔多斯":[109.781327,39.608266],
							"招远":[120.38,37.35],
							"舟山":[122.207216,29.985295],
							"齐齐哈尔":[123.97,47.33],
							"盐城":[120.13,33.38],
							"赤峰":[118.87,42.28],
							"青岛":[120.33,36.07],
							"乳山":[121.52,36.89],
							"金昌":[102.188043,38.520089],
							"泉州":[118.58,24.93],
							"莱西":[120.53,36.86],
							"日照":[119.46,35.42],
							"胶南":[119.97,35.88],
							"南通":[121.05,32.08],
							"拉萨":[91.11,29.97],
							"云浮":[112.02,22.93],
							"梅州":[116.1,24.55],
							"文登":[122.05,37.2],
							"上海":[121.48,31.22],
							"攀枝花":[101.718637,26.582347],
							"威海":[122.1,37.5],
							"承德":[117.93,40.97],
							"厦门":[118.1,24.46],
							"汕尾":[115.375279,22.786211],
							"潮州":[116.63,23.68],
							"丹东":[124.37,40.13],
							"太仓":[121.1,31.45],
							"曲靖":[103.79,25.51],
							"烟台":[121.39,37.52],
							"福州":[119.3,26.08],
							"瓦房店":[121.979603,39.627114],
							"即墨":[120.45,36.38],
							"抚顺":[123.97,41.97],
							"玉溪":[102.52,24.35],
							"张家口":[114.87,40.82],
							"阳泉":[113.57,37.85],
							"莱州":[119.942327,37.177017],
							"湖州":[120.1,30.86],
							"汕头":[116.69,23.39],
							"昆山":[120.95,31.39],
							"宁波":[121.56,29.86],
							"湛江":[110.359377,21.270708],
							"揭阳":[116.35,23.55],
							"荣成":[122.41,37.16],
							"连云港":[119.16,34.59],
							"葫芦岛":[120.836932,40.711052],
							"常熟":[120.74,31.64],
							"东莞":[113.75,23.04],
							"河源":[114.68,23.73],
							"淮安":[119.15,33.5],
							"泰州":[119.9,32.49],
							"南宁":[108.33,22.84],
							"营口":[122.18,40.65],
							"惠州":[114.4,23.09],
							"江阴":[120.26,31.91],
							"蓬莱":[120.75,37.8],
							"韶关":[113.62,24.84],
							"嘉峪关":[98.289152,39.77313],
							"广州":[113.23,23.16],
							"延安":[109.47,36.6],
							"太原":[112.53,37.87],
							"清远":[113.01,23.7],
							"中山":[113.38,22.52],
							"昆明":[102.73,25.04],
							"寿光":[118.73,36.86],
							"盘锦":[122.070714,41.119997],
							"长治":[113.08,36.18],
							"深圳":[114.07,22.62],
							"珠海":[113.52,22.3],
							"宿迁":[118.3,33.96],
							"咸阳":[108.72,34.36],
							"铜川":[109.11,35.09],
							"平度":[119.97,36.77],
							"佛山":[113.11,23.05],
							"海口":[110.35,20.02],
							"江门":[113.06,22.61],
							"章丘":[117.53,36.72],
							"肇庆":[112.44,23.05],
							"大连":[121.62,38.92],
							"临汾":[111.5,36.08],
							"吴江":[120.63,31.16],
							"石嘴山":[106.39,39.04],
							"沈阳":[123.38,41.8],
							"苏州":[120.62,31.32],
							"茂名":[110.88,21.68],
							"嘉兴":[120.76,30.77],
							"长春":[125.35,43.88],
							"胶州":[120.03336,36.264622],
							"银川":[106.27,38.47],
							"张家港":[120.555821,31.875428],
							"三门峡":[111.19,34.76],
							"锦州":[121.15,41.13],
							"南昌":[115.89,28.68],
							"柳州":[109.4,24.33],
							"三亚":[109.511909,18.252847],
							"自贡":[104.778442,29.33903],
							"吉林":[126.57,43.87],
							"阳江":[111.95,21.85],
							"泸州":[105.39,28.91],
							"西宁":[101.74,36.56],
							"宜宾":[104.56,29.77],
							"呼和浩特":[111.65,40.82],
							"成都":[104.06,30.67],
							"大同":[113.3,40.12],
							"镇江":[119.44,32.2],
							"桂林":[110.28,25.29],
							"张家界":[110.479191,29.117096],
							"宜兴":[119.82,31.36],
							"北海":[109.12,21.49],
							"西安":[108.95,34.27],
							"金坛":[119.56,31.74],
							"东营":[118.49,37.46],
							"牡丹江":[129.58,44.6],
							"遵义":[106.9,27.7],
							"绍兴":[120.58,30.01],
							"扬州":[119.42,32.39],
							"常州":[119.95,31.79],
							"潍坊":[119.1,36.62],
							"重庆":[106.54,29.59],
							"台州":[121.420757,28.656386],
							"南京":[118.78,32.04],
							"滨州":[118.03,37.36],
							"贵阳":[106.71,26.57],
							"无锡":[120.29,31.59],
							"本溪":[123.73,41.3],
							"克拉玛依":[84.77,45.59],
							"渭南":[109.5,34.52],
							"马鞍山":[118.48,31.56],
							"宝鸡":[107.15,34.38],
							"焦作":[113.21,35.24],
							"句容":[119.16,31.95],
							"北京":[116.46,39.92],
							"徐州":[117.2,34.26],
							"衡水":[115.72,37.72],
							"包头":[110,40.58],
							"绵阳":[104.73,31.48],
							"乌鲁木齐":[87.68,43.77],
							"枣庄":[117.57,34.86],
							"杭州":[120.19,30.26],
							"淄博":[118.05,36.78],
							"鞍山":[122.85,41.12],
							"溧阳":[119.48,31.43],
							"库尔勒":[86.06,41.68],
							"安阳":[114.35,36.1],
							"开封":[114.35,34.79],
							"济南":[117,36.65],
							"德阳":[104.37,31.13],
							"温州":[120.65,28.01],
							"九江":[115.97,29.71],
							"邯郸":[114.47,36.6],
							"临安":[119.72,30.23],
							"兰州":[103.73,36.03],
							"沧州":[116.83,38.33],
							"临沂":[118.35,35.05],
							"南充":[106.110698,30.837793],
							"天津":[117.2,39.13],
							"富阳":[119.95,30.07],
							"泰安":[117.13,36.18],
							"诸暨":[120.23,29.71],
							"郑州":[113.65,34.76],
							"哈尔滨":[126.63,45.75],
							"聊城":[115.97,36.45],
							"芜湖":[118.38,31.33],
							"唐山":[118.02,39.63],
							"平顶山":[113.29,33.75],
							"邢台":[114.48,37.05],
							"德州":[116.29,37.45],
							"济宁":[116.59,35.38],
							"荆州":[112.239741,30.335165],
							"宜昌":[111.3,30.7],
							"义乌":[120.06,29.32],
							"丽水":[119.92,28.45],
							"洛阳":[112.44,34.7],
							"秦皇岛":[119.57,39.95],
							"株洲":[113.16,27.83],
							"石家庄":[114.48,38.03],
							"莱芜":[117.67,36.19],
							"常德":[111.69,29.05],
							"保定":[115.48,38.85],
							"湘潭":[112.91,27.87],
							"金华":[119.64,29.12],
							"岳阳":[113.09,29.37],
							"长沙":[113,28.21],
							"衢州":[118.88,28.97],
							"廊坊":[116.7,39.53],
							"菏泽":[115.480656,35.23375],
							"合肥":[117.27,31.86],
							"武汉":[114.31,30.52],
							"大庆":[125.03,46.58]
						};

						var convertData = function (data) {
							var res = [];
							for (var i = 0; i < data.length; i++) {
								var geoCoord = geoCoordMap[data[i].name];
								if (geoCoord) {
									res.push(geoCoord.concat(data[i].value));
								}
							}
							return res;
						};

						var option = {
							title: {
								text: '全国主要城市空气质量',
								subtext: 'data from PM25.in',
								sublink: 'http://www.pm25.in',
								left: 'center',
								textStyle: {
									color: '#fff'
								}
							},
							backgroundColor: '#404a59',
							visualMap: {
								min: 0,
								max: 500,
								splitNumber: 5,
								inRange: {
									color: ['#d94e5d','#eac736','#50a3ba'].reverse()
								},
								textStyle: {
									color: '#fff'
								}
							},
							geo: {
								map: 'china',
								label: {
									emphasis: {
										show: false
									}
								},
								roam: true,
								itemStyle: {
									normal: {
										areaColor: '#323c48',
										borderColor: '#111'
									},
									emphasis: {
										areaColor: '#2a333d'
									}
								}
							},
							series: [{
								name: 'AQI',
								type: 'heatmap',
								coordinateSystem: 'geo',
								data: convertData([
									{name: "海门", value: 9},
									{name: "鄂尔多斯", value: 12},
									{name: "招远", value: 12},
									{name: "舟山", value: 12},
									{name: "齐齐哈尔", value: 14},
									{name: "盐城", value: 15},
									{name: "赤峰", value: 16},
									{name: "青岛", value: 18},
									{name: "乳山", value: 18},
									{name: "金昌", value: 19},
									{name: "泉州", value: 21},
									{name: "莱西", value: 21},
									{name: "日照", value: 21},
									{name: "胶南", value: 22},
									{name: "南通", value: 23},
									{name: "拉萨", value: 24},
									{name: "云浮", value: 24},
									{name: "梅州", value: 25},
									{name: "文登", value: 25},
									{name: "上海", value: 25},
									{name: "攀枝花", value: 25},
									{name: "威海", value: 25},
									{name: "承德", value: 25},
									{name: "厦门", value: 26},
									{name: "汕尾", value: 26},
									{name: "潮州", value: 26},
									{name: "丹东", value: 27},
									{name: "太仓", value: 27},
									{name: "曲靖", value: 27},
									{name: "烟台", value: 28},
									{name: "福州", value: 29},
									{name: "瓦房店", value: 30},
									{name: "即墨", value: 30},
									{name: "抚顺", value: 31},
									{name: "玉溪", value: 31},
									{name: "张家口", value: 31},
									{name: "阳泉", value: 31},
									{name: "莱州", value: 32},
									{name: "湖州", value: 32},
									{name: "汕头", value: 32},
									{name: "昆山", value: 33},
									{name: "宁波", value: 33},
									{name: "湛江", value: 33},
									{name: "揭阳", value: 34},
									{name: "荣成", value: 34},
									{name: "连云港", value: 35},
									{name: "葫芦岛", value: 35},
									{name: "常熟", value: 36},
									{name: "东莞", value: 36},
									{name: "河源", value: 36},
									{name: "淮安", value: 36},
									{name: "泰州", value: 36},
									{name: "南宁", value: 37},
									{name: "营口", value: 37},
									{name: "惠州", value: 37},
									{name: "江阴", value: 37},
									{name: "蓬莱", value: 37},
									{name: "韶关", value: 38},
									{name: "嘉峪关", value: 38},
									{name: "广州", value: 38},
									{name: "延安", value: 38},
									{name: "太原", value: 39},
									{name: "清远", value: 39},
									{name: "中山", value: 39},
									{name: "昆明", value: 39},
									{name: "寿光", value: 40},
									{name: "盘锦", value: 40},
									{name: "长治", value: 41},
									{name: "深圳", value: 41},
									{name: "珠海", value: 42},
									{name: "宿迁", value: 43},
									{name: "咸阳", value: 43},
									{name: "铜川", value: 44},
									{name: "平度", value: 44},
									{name: "佛山", value: 44},
									{name: "海口", value: 44},
									{name: "江门", value: 45},
									{name: "章丘", value: 45},
									{name: "肇庆", value: 46},
									{name: "大连", value: 47},
									{name: "临汾", value: 47},
									{name: "吴江", value: 47},
									{name: "石嘴山", value: 49},
									{name: "沈阳", value: 50},
									{name: "苏州", value: 50},
									{name: "茂名", value: 50},
									{name: "嘉兴", value: 51},
									{name: "长春", value: 51},
									{name: "胶州", value: 52},
									{name: "银川", value: 52},
									{name: "张家港", value: 52},
									{name: "三门峡", value: 53},
									{name: "锦州", value: 54},
									{name: "南昌", value: 54},
									{name: "柳州", value: 54},
									{name: "三亚", value: 54},
									{name: "自贡", value: 56},
									{name: "吉林", value: 56},
									{name: "阳江", value: 57},
									{name: "泸州", value: 57},
									{name: "西宁", value: 57},
									{name: "宜宾", value: 58},
									{name: "呼和浩特", value: 58},
									{name: "成都", value: 58},
									{name: "大同", value: 58},
									{name: "镇江", value: 59},
									{name: "桂林", value: 59},
									{name: "张家界", value: 59},
									{name: "宜兴", value: 59},
									{name: "北海", value: 60},
									{name: "西安", value: 61},
									{name: "金坛", value: 62},
									{name: "东营", value: 62},
									{name: "牡丹江", value: 63},
									{name: "遵义", value: 63},
									{name: "绍兴", value: 63},
									{name: "扬州", value: 64},
									{name: "常州", value: 64},
									{name: "潍坊", value: 65},
									{name: "重庆", value: 66},
									{name: "台州", value: 67},
									{name: "南京", value: 67},
									{name: "滨州", value: 70},
									{name: "贵阳", value: 71},
									{name: "无锡", value: 71},
									{name: "本溪", value: 71},
									{name: "克拉玛依", value: 72},
									{name: "渭南", value: 72},
									{name: "马鞍山", value: 72},
									{name: "宝鸡", value: 72},
									{name: "焦作", value: 75},
									{name: "句容", value: 75},
									{name: "北京", value: 79},
									{name: "徐州", value: 79},
									{name: "衡水", value: 80},
									{name: "包头", value: 80},
									{name: "绵阳", value: 80},
									{name: "乌鲁木齐", value: 84},
									{name: "枣庄", value: 84},
									{name: "杭州", value: 84},
									{name: "淄博", value: 85},
									{name: "鞍山", value: 86},
									{name: "溧阳", value: 86},
									{name: "库尔勒", value: 86},
									{name: "安阳", value: 90},
									{name: "开封", value: 90},
									{name: "济南", value: 92},
									{name: "德阳", value: 93},
									{name: "温州", value: 95},
									{name: "九江", value: 96},
									{name: "邯郸", value: 98},
									{name: "临安", value: 99},
									{name: "兰州", value: 99},
									{name: "沧州", value: 100},
									{name: "临沂", value: 103},
									{name: "南充", value: 104},
									{name: "天津", value: 105},
									{name: "富阳", value: 106},
									{name: "泰安", value: 112},
									{name: "诸暨", value: 112},
									{name: "郑州", value: 113},
									{name: "哈尔滨", value: 114},
									{name: "聊城", value: 116},
									{name: "芜湖", value: 117},
									{name: "唐山", value: 119},
									{name: "平顶山", value: 119},
									{name: "邢台", value: 119},
									{name: "德州", value: 120},
									{name: "济宁", value: 120},
									{name: "荆州", value: 127},
									{name: "宜昌", value: 130},
									{name: "义乌", value: 132},
									{name: "丽水", value: 133},
									{name: "洛阳", value: 134},
									{name: "秦皇岛", value: 136},
									{name: "株洲", value: 143},
									{name: "石家庄", value: 147},
									{name: "莱芜", value: 148},
									{name: "常德", value: 152},
									{name: "保定", value: 153},
									{name: "湘潭", value: 154},
									{name: "金华", value: 157},
									{name: "岳阳", value: 169},
									{name: "长沙", value: 175},
									{name: "衢州", value: 177},
									{name: "廊坊", value: 193},
									{name: "菏泽", value: 194},
									{name: "合肥", value: 229},
									{name: "武汉", value: 273},
									{name: "大庆", value: 279}
								])
							}]
						};
						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-relation1": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						myChart.showLoading();
						$.get('data/asset/data/les-miserables.gexf', function (xml) {
							myChart.hideLoading();

							var graph = echarts.dataTool.gexf.parse(xml);
							var categories = [];
							for (var i = 0; i < 9; i++) {
								categories[i] = {
									name: '类目' + i
								};
							}
							graph.nodes.forEach(function (node) {
								node.itemStyle = null;
								node.value = node.symbolSize;
								node.label.normal.show = node.symbolSize > 30;
								node.category = node.attributes.modularity_class;
							});
							option = {
								title: {
									text: 'Les Miserables',
									subtext: 'Circular layout',
									top: 'bottom',
									left: 'right'
								},
								tooltip: {},
								legend: [{
									// selectedMode: 'single',
									data: categories.map(function (a) {
										return a.name;
									})
								}],
								animationDurationUpdate: 1500,
								animationEasingUpdate: 'quinticInOut',
								series : [
									{
										name: 'Les Miserables',
										type: 'graph',
										layout: 'circular',
										data: graph.nodes,
										links: graph.links,
										categories: categories,
										roam: true,
										label: {
											normal: {
												position: 'right'
											}
										},
										lineStyle: {
											normal: {
												curveness: 0.3
											}
										}
									}
								]
							};

							myChart.setOption(option);
						}, 'xml');
					}
				});
			},
			"click; .echarts-relation2": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						myChart.showLoading();
						$.get('data/asset/data/les-miserables.gexf', function (xml) {
							myChart.hideLoading();

							var graph = echarts.dataTool.gexf.parse(xml);
							var categories = [];
							for (var i = 0; i < 9; i++) {
								categories[i] = {
									name: '类目' + i
								};
							}
							graph.nodes.forEach(function (node) {
								node.itemStyle = null;
								node.symbolSize = 10;
								node.value = node.symbolSize;
								node.category = node.attributes.modularity_class;
								// Use random x, y
								node.x = node.y = null;
								node.draggable = true;
							});
							option = {
								title: {
									text: 'Les Miserables',
									subtext: 'Default layout',
									top: 'bottom',
									left: 'right'
								},
								tooltip: {},
								legend: [{
									// selectedMode: 'single',
									data: categories.map(function (a) {
										return a.name;
									})
								}],
								animation: false,
								series : [
									{
										name: 'Les Miserables',
										type: 'graph',
										layout: 'force',
										data: graph.nodes,
										links: graph.links,
										categories: categories,
										roam: true,
										label: {
											normal: {
												position: 'right'
											}
										},
										force: {
											repulsion: 100
										}
									}
								]
							};

							myChart.setOption(option);
						}, 'xml');
					}
				});
			},
			"click; .echarts-relation3": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						function createNodes(count) {
							var nodes = [];
							for (var i = 0; i < count; i++) {
								nodes.push({
									id: i
								});
							}
							return nodes;
						}

						function createEdges(count) {
							var edges = [];
							if (count === 2) {
								return [[0, 1]];
							}
							for (var i = 0; i < count; i++) {
								edges.push([i, (i + 1) % count]);
							}
							return edges;
						}

						var datas = [];
						for (var i = 0; i < 16; i++) {
							datas.push({
								nodes: createNodes(i + 2),
								edges: createEdges(i + 2)
							});
						}

						var option = {
							series: datas.map(function (item, idx) {
								return {
									type: 'graph',
									layout: 'force',
									animation: false,
									data: item.nodes,
									left: (idx % 4) * 25 + '%',
									top: Math.floor(idx / 4) * 25 + '%',
									width: '25%',
									height: '25%',
									force: {
										// initLayout: 'circular'
										// gravity: 0
										repulsion: 100,
										edgeLength: 5
									},
									edges: item.edges.map(function (e) {
										return {
											source: e[0],
											target: e[1]
										};
									})
								};
							})
						};

						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-relation4": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						myChart.showLoading();
						$.get('data/asset/data/webkit-dep.json', function (webkitDep) {
							myChart.hideLoading();

							option = {
								legend: {
									data: ['HTMLElement', 'WebGL', 'SVG', 'CSS', 'Other']
								},
								series: [{
									type: 'graph',
									layout: 'force',
									animation: false,
									label: {
										normal: {
											position: 'right',
											formatter: '{b}'
										}
									},
									draggable: true,
									data: webkitDep.nodes.map(function (node, idx) {
										node.id = idx;
										return node;
									}),
									categories: webkitDep.categories,
									force: {
										// initLayout: 'circular'
										// gravity: 0
										// repulsion: 20,
										edgeLength: 5,
										repulsion: 20
									},
									edges: webkitDep.links
								}]
							};

							myChart.setOption(option);
						});
					}
				});
			},
			"click; .echarts-relation5": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						myChart.showLoading();
						$.get('data/asset/data/les-miserables.gexf', function (xml) {
							myChart.hideLoading();

							var graph = echarts.dataTool.gexf.parse(xml);
							var categories = [];
							for (var i = 0; i < 9; i++) {
								categories[i] = {
									name: '类目' + i
								};
							}
							graph.nodes.forEach(function (node) {
								node.itemStyle = null;
								node.value = node.symbolSize;
								node.label.normal.show = node.symbolSize > 30;
								node.category = node.attributes.modularity_class;
							});
							option = {
								title: {
									text: 'Les Miserables',
									subtext: 'Default layout',
									top: 'bottom',
									left: 'right'
								},
								tooltip: {},
								legend: [{
									// selectedMode: 'single',
									data: categories.map(function (a) {
										return a.name;
									})
								}],
								animationDuration: 1500,
								animationEasingUpdate: 'quinticInOut',
								series : [
									{
										name: 'Les Miserables',
										type: 'graph',
										layout: 'none',
										data: graph.nodes,
										links: graph.links,
										categories: categories,
										roam: true,
										label: {
											normal: {
												position: 'right'
											}
										},
										lineStyle: {
											normal: {
												curveness: 0.3
											}
										}
									}
								]
							};

							myChart.setOption(option);
						}, 'xml');
					}
				});
			},
			"click; .echarts-treemap1": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						myChart.showLoading();

						$.get('data/asset/data/disk.tree.json', function (diskData) {
							myChart.hideLoading();

							function colorMappingChange(value) {
								var levelOption = getLevelOption(value);
								chart.setOption({
									series: [{
										levels: levelOption
									}]
								});
							}

							var formatUtil = echarts.format;

							function getLevelOption() {
								return [
									{
										itemStyle: {
											normal: {
												borderWidth: 0,
												gapWidth: 5
											}
										}
									},
									{
										itemStyle: {
											normal: {
												gapWidth: 1
											}
										}
									},
									{
										colorSaturation: [0.35, 0.5],
										itemStyle: {
											normal: {
												gapWidth: 1,
												borderColorSaturation: 0.6
											}
										}
									}
								];
							}

							myChart.setOption(option = {

								title: {
									text: 'Disk Usage',
									left: 'center'
								},

								tooltip: {
									formatter: function (info) {
										var value = info.value;
										var treePathInfo = info.treePathInfo;
										var treePath = [];

										for (var i = 1; i < treePathInfo.length; i++) {
											treePath.push(treePathInfo[i].name);
										}

										return [
											'<div class="tooltip-title">' + formatUtil.encodeHTML(treePath.join('/')) + '</div>',
											'Disk Usage: ' + formatUtil.addCommas(value) + ' KB',
										].join('');
									}
								},

								series: [
									{
										name:'Disk Usage',
										type:'treemap',
										visibleMin: 300,
										label: {
											show: true,
											formatter: '{b}'
										},
										itemStyle: {
											normal: {
												borderColor: '#fff'
											}
										},
										levels: getLevelOption(),
										data: diskData
									}
								]
							});
						});
					}
				});
			},
			"click; .echarts-treemap2": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						myChart.showLoading();

						var household_america_2012 = 113616229;
						$.get('data/asset/data/obama_budget_proposal_2012.json', function (obama_budget_2012) {
							myChart.hideLoading();

							var formatUtil;

							function buildData(mode, originList) {
								var out = [];

								for (var i = 0; i < originList.length; i++) {
									var node = originList[i];
									var newNode = out[i] = cloneNodeInfo(node);
									var value = newNode.value;

									if (!newNode) {
										continue;
									}

									// Calculate amount per household.
									value[3] = value[0] / household_america_2012;

									// if mode === 0 and mode === 2 do nothing
									if (mode === 1) {
										// Set 'Change from 2010' to value[0].
										var tmp = value[1];
										value[1] = value[0];
										value[0] = tmp;
									}

									if (node.children) {
										newNode.children = buildData(mode, node.children);
									}
								}

								return out;
							}

							function cloneNodeInfo(node) {
								if (!node) {
									return;
								}

								var newNode = {};
								newNode.name = node.name;
								newNode.id = node.id;
								newNode.discretion = node.discretion;
								newNode.value = (node.value || []).slice();
								return newNode;
							}

							function getLevelOption(mode) {
								return [
									{
										color: mode === 2
											? [
											'#c23531', '#314656', '#61a0a8', '#dd8668',
											'#91c7ae', '#6e7074', '#61a0a8', '#bda29a',
											'#44525d', '#c4ccd3'
										]
											: null,
										colorMappingBy: 'id',
										itemStyle: {
											normal: {
												borderWidth: 3,
												gapWidth: 3
											}
										}
									},
									{
										colorAlpha: mode === 2
											? [0.5, 1] : null,
										itemStyle: {
											normal: {
												gapWidth: 1
											}
										}
									}
								];
							}

							function isValidNumber(num) {
								return num != null && isFinite(num);
							}

							function getTooltipFormatter(mode) {
								var amountIndex = mode === 1 ? 1 : 0;
								var amountIndex2011 = mode === 1 ? 0 : 1;

								return function (info) {
									var value = info.value;

									var amount = value[amountIndex];
									amount = isValidNumber(amount)
										? formatUtil.addCommas(amount * 1000) + '$'
										: '-';

									var amount2011 = value[amountIndex2011];
									amount2011 = isValidNumber(amount2011)
										? formatUtil.addCommas(amount2011 * 1000) + '$'
										: '-';

									var perHousehold = value[3];
									perHousehold = isValidNumber(perHousehold)
										? formatUtil.addCommas((+perHousehold.toFixed(4)) * 1000) + '$'
										: '-';

									var change = value[2];
									change = isValidNumber(change)
										? change.toFixed(2) + '%'
										: '-';

									return [
										'<div class="tooltip-title">' + formatUtil.encodeHTML(info.name) + '</div>',
										'2012 Amount: &nbsp;&nbsp;' + amount + '<br>',
										'Per Household: &nbsp;&nbsp;' + perHousehold + '<br>',
										'2011 Amount: &nbsp;&nbsp;' + amount2011 + '<br>',
										'Change From 2011: &nbsp;&nbsp;' + change
									].join('');
								};
							}

							function createSeriesCommon() {
								return {
									type: 'treemap',
									label: {
										show: true,
										formatter: "{b}",
										normal: {
											textStyle: {
												ellipsis: true
											}
										}
									},
									itemStyle: {
										normal: {
											borderColor: 'black'
										}
									},
									levels: getLevelOption(0)
								};
							}

							formatUtil = echarts.format;
							var modes = ['2012Budget', '2011Budget', 'Growth'];

							myChart.setOption(option = {
								title: {
									left: 'center',
									text: 'How $3.7 Trillion is Spent',
									subtext: 'Obama’s 2012 Budget Proposal'
								},

								legend: {
									data: modes,
									selectedMode: 'single',
									top: 50,
									itemGap: 5
								},

								tooltip: {
									formatter: getTooltipFormatter(0)
								},

								series: modes.map(function (mode, idx) {
									var seriesOpt = createSeriesCommon();
									seriesOpt.name = mode;
									seriesOpt.top = 80;
									seriesOpt.visualDimension = idx === 2 ? 2 : null;
									seriesOpt.data = buildData(idx, obama_budget_2012);
									seriesOpt.levels = getLevelOption(idx);
									return seriesOpt;
								})
							});
						});
					}
				});
			},
			"click; .echarts-parallel1": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						// Schema:
// date,AQIindex,PM2.5,PM10,CO,NO2,SO2
						var dataBJ = [
							[1,55,9,56,0.46,18,6,"良"],
							[2,25,11,21,0.65,34,9,"优"],
							[3,56,7,63,0.3,14,5,"良"],
							[4,33,7,29,0.33,16,6,"优"],
							[5,42,24,44,0.76,40,16,"优"],
							[6,82,58,90,1.77,68,33,"良"],
							[7,74,49,77,1.46,48,27,"良"],
							[8,78,55,80,1.29,59,29,"良"],
							[9,267,216,280,4.8,108,64,"重度污染"],
							[10,185,127,216,2.52,61,27,"中度污染"],
							[11,39,19,38,0.57,31,15,"优"],
							[12,41,11,40,0.43,21,7,"优"],
							[13,64,38,74,1.04,46,22,"良"],
							[14,108,79,120,1.7,75,41,"轻度污染"],
							[15,108,63,116,1.48,44,26,"轻度污染"],
							[16,33,6,29,0.34,13,5,"优"],
							[17,94,66,110,1.54,62,31,"良"],
							[18,186,142,192,3.88,93,79,"中度污染"],
							[19,57,31,54,0.96,32,14,"良"],
							[20,22,8,17,0.48,23,10,"优"],
							[21,39,15,36,0.61,29,13,"优"],
							[22,94,69,114,2.08,73,39,"良"],
							[23,99,73,110,2.43,76,48,"良"],
							[24,31,12,30,0.5,32,16,"优"],
							[25,42,27,43,1,53,22,"优"],
							[26,154,117,157,3.05,92,58,"中度污染"],
							[27,234,185,230,4.09,123,69,"重度污染"],
							[28,160,120,186,2.77,91,50,"中度污染"],
							[29,134,96,165,2.76,83,41,"轻度污染"],
							[30,52,24,60,1.03,50,21,"良"],
							[31,46,5,49,0.28,10,6,"优"]
						];

						var dataGZ = [
							[1,26,37,27,1.163,27,13,"优"],
							[2,85,62,71,1.195,60,8,"良"],
							[3,78,38,74,1.363,37,7,"良"],
							[4,21,21,36,0.634,40,9,"优"],
							[5,41,42,46,0.915,81,13,"优"],
							[6,56,52,69,1.067,92,16,"良"],
							[7,64,30,28,0.924,51,2,"良"],
							[8,55,48,74,1.236,75,26,"良"],
							[9,76,85,113,1.237,114,27,"良"],
							[10,91,81,104,1.041,56,40,"良"],
							[11,84,39,60,0.964,25,11,"良"],
							[12,64,51,101,0.862,58,23,"良"],
							[13,70,69,120,1.198,65,36,"良"],
							[14,77,105,178,2.549,64,16,"良"],
							[15,109,68,87,0.996,74,29,"轻度污染"],
							[16,73,68,97,0.905,51,34,"良"],
							[17,54,27,47,0.592,53,12,"良"],
							[18,51,61,97,0.811,65,19,"良"],
							[19,91,71,121,1.374,43,18,"良"],
							[20,73,102,182,2.787,44,19,"良"],
							[21,73,50,76,0.717,31,20,"良"],
							[22,84,94,140,2.238,68,18,"良"],
							[23,93,77,104,1.165,53,7,"良"],
							[24,99,130,227,3.97,55,15,"良"],
							[25,146,84,139,1.094,40,17,"轻度污染"],
							[26,113,108,137,1.481,48,15,"轻度污染"],
							[27,81,48,62,1.619,26,3,"良"],
							[28,56,48,68,1.336,37,9,"良"],
							[29,82,92,174,3.29,0,13,"良"],
							[30,106,116,188,3.628,101,16,"轻度污染"],
							[31,118,50,0,1.383,76,11,"轻度污染"]
						];

						var dataSH = [
							[1,91,45,125,0.82,34,23,"良"],
							[2,65,27,78,0.86,45,29,"良"],
							[3,83,60,84,1.09,73,27,"良"],
							[4,109,81,121,1.28,68,51,"轻度污染"],
							[5,106,77,114,1.07,55,51,"轻度污染"],
							[6,109,81,121,1.28,68,51,"轻度污染"],
							[7,106,77,114,1.07,55,51,"轻度污染"],
							[8,89,65,78,0.86,51,26,"良"],
							[9,53,33,47,0.64,50,17,"良"],
							[10,80,55,80,1.01,75,24,"良"],
							[11,117,81,124,1.03,45,24,"轻度污染"],
							[12,99,71,142,1.1,62,42,"良"],
							[13,95,69,130,1.28,74,50,"良"],
							[14,116,87,131,1.47,84,40,"轻度污染"],
							[15,108,80,121,1.3,85,37,"轻度污染"],
							[16,134,83,167,1.16,57,43,"轻度污染"],
							[17,79,43,107,1.05,59,37,"良"],
							[18,71,46,89,0.86,64,25,"良"],
							[19,97,71,113,1.17,88,31,"良"],
							[20,84,57,91,0.85,55,31,"良"],
							[21,87,63,101,0.9,56,41,"良"],
							[22,104,77,119,1.09,73,48,"轻度污染"],
							[23,87,62,100,1,72,28,"良"],
							[24,168,128,172,1.49,97,56,"中度污染"],
							[25,65,45,51,0.74,39,17,"良"],
							[26,39,24,38,0.61,47,17,"优"],
							[27,39,24,39,0.59,50,19,"优"],
							[28,93,68,96,1.05,79,29,"良"],
							[29,188,143,197,1.66,99,51,"中度污染"],
							[30,174,131,174,1.55,108,50,"中度污染"],
							[31,187,143,201,1.39,89,53,"中度污染"]
						];

						var schema = [
							{name: 'date', index: 0, text: '日期'},
							{name: 'AQIindex', index: 1, text: 'AQI'},
							{name: 'PM25', index: 2, text: 'PM2.5'},
							{name: 'PM10', index: 3, text: 'PM10'},
							{name: 'CO', index: 4, text: ' CO'},
							{name: 'NO2', index: 5, text: 'NO2'},
							{name: 'SO2', index: 6, text: 'SO2'},
							{name: '等级', index: 7, text: '等级'}
						];

						var lineStyle = {
							normal: {
								width: 1,
								opacity: 0.5
							}
						};

						var option = {
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
									return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
										+ obj[0].seriesName + ' ' + value[0] + '日期：'
										+ value[7]
										+ '</div>'
										+ schema[1].text + '：' + value[1] + '<br>'
										+ schema[2].text + '：' + value[2] + '<br>'
										+ schema[3].text + '：' + value[3] + '<br>'
										+ schema[4].text + '：' + value[4] + '<br>'
										+ schema[5].text + '：' + value[5] + '<br>'
										+ schema[6].text + '：' + value[6] + '<br>';
								}
							},
							// dataZoom: {
							//     show: true,
							//     orient: 'vertical',
							//     parallelAxisIndex: [0]
							// },
							parallelAxis: [
								{dim: 0, name: schema[0].text, inverse: true, max: 31, nameLocation: 'start'},
								{dim: 1, name: schema[1].text},
								{dim: 2, name: schema[2].text},
								{dim: 3, name: schema[3].text},
								{dim: 4, name: schema[4].text},
								{dim: 5, name: schema[5].text},
								{dim: 6, name: schema[6].text},
								{dim: 7, name: schema[7].text,
									type: 'category', data: ['优', '良', '轻度污染', '中度污染', '重度污染', '严重污染']}
							],
							visualMap: {
								show: true,
								min: 0,
								max: 150,
								dimension: 2,
								inRange: {
									color: ['#d94e5d','#eac736','#50a3ba'].reverse(),
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
							series: [
								{
									name: '北京',
									type: 'parallel',
									lineStyle: lineStyle,
									data: dataBJ
								},
								{
									name: '上海',
									type: 'parallel',
									lineStyle: lineStyle,
									data: dataSH
								},
								{
									name: '广州',
									type: 'parallel',
									lineStyle: lineStyle,
									data: dataGZ
								}
							]
						};
						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-sankey1": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						myChart.showLoading();
						$.get('data/asset/data/energy.json', function (data) {
							myChart.hideLoading();

							myChart.setOption(option = {
								title: {
									text: 'Sankey Diagram'
								},
								tooltip: {
									trigger: 'item',
									triggerOn: 'mousemove'
								},
								series: [
									{
										type: 'sankey',
										layout:'none',
										data: data.nodes,
										links: data.links,
										itemStyle: {
											normal: {
												borderWidth: 1,
												borderColor: '#aaa'
											}
										},
										lineStyle: {
											normal: {
												curveness: 0.5
											}
										}
									}
								]
							});
						});
					}
				});
			},
			"click; .echarts-sankey2": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						myChart.showLoading();
						$.get('data/asset/data/product.json', function (data) {
							myChart.hideLoading();

							myChart.setOption(option = {
								title: {
									text: 'Sankey Diagram'
								},
								tooltip: {
									trigger: 'item',
									triggerOn: 'mousemove'

								},
								series: [
									{
										type: 'sankey',
										layout:'none',
										data: data.nodes,
										links: data.links,
										itemStyle: {
											normal: {
												borderWidth: 1,
												borderColor: '#aaa'
											}
										},
										lineStyle: {
											normal: {
												curveness: 0.5
											}
										}
									}
								]
							});
						});
					}
				});
			},
			"click; .echarts-funnel1": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var option = {
							title : {
								text: '漏斗图(对比)',
								subtext: '纯属虚构',
								left: 'left',
								top: 'bottom'
							},
							tooltip : {
								trigger: 'item',
								formatter: "{a} <br/>{b} : {c}%"
							},
							toolbox: {
								show : true,
								orient: 'vertical',
								top: 'center',
								feature : {
									mark : {show: true},
									dataView : {show: true, readOnly: false},
									magicType : {
										show: true,
										type: ['pie', 'funnel'],
										option: {
											pie: {
												radius : [0, 50]
											}
										}
									},
									restore : {show: true},
									saveAsImage : {show: true}
								}
							},
							legend: {
								orient: 'vertical',
								left: 'left',
								data : ['产品A','产品B','产品C','产品D','产品E']
							},
							calculable : true,
							series : [
								{
									name:'漏斗图',
									type:'funnel',
									width: '40%',
									height: '45%',
									left: '5%',
									top: '50%',
									funnelAlign: 'right',

									center: ['25%', '25%'],  // for pie

									data:[
										{value:60, name:'产品C'},
										{value:30, name:'产品D'},
										{value:10, name:'产品E'},
										{value:80, name:'产品B'},
										{value:100, name:'产品A'}
									]
								},
								{
									name:'金字塔',
									type:'funnel',
									width: '40%',
									height: '45%',
									left: '5%',
									top: '5%',
									sort : 'ascending',
									funnelAlign: 'right',

									center: ['25%', '75%'],  // for pie

									data:[
										{value:60, name:'产品C'},
										{value:30, name:'产品D'},
										{value:10, name:'产品E'},
										{value:80, name:'产品B'},
										{value:100, name:'产品A'}
									]
								},
								{
									name:'漏斗图',
									type:'funnel',
									width: '40%',
									height: '45%',
									left: '55%',
									top: '5%',
									funnelAlign: 'left',

									center: ['75%', '25%'],  // for pie

									data:[
										{value:60, name:'产品C'},
										{value:30, name:'产品D'},
										{value:10, name:'产品E'},
										{value:80, name:'产品B'},
										{value:100, name:'产品A'}
									]
								},
								{
									name:'金字塔',
									type:'funnel',
									width: '40%',
									height: '45%',
									left: '55%',
									top: '50%',
									sort : 'ascending',
									funnelAlign: 'left',

									center: ['75%', '75%'],  // for pie

									data:[
										{value:60, name:'产品C'},
										{value:30, name:'产品D'},
										{value:10, name:'产品E'},
										{value:80, name:'产品B'},
										{value:100, name:'产品A'}
									]
								}
							]
						};

						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-funnel2": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var option = {
							title : {
								text: '漏斗图',
								subtext: '纯属虚构'
							},
							tooltip : {
								trigger: 'item',
								formatter: "{a} <br/>{b} : {c}%"
							},
							toolbox: {
								show : true,
								feature : {
									mark : {show: true},
									dataView : {show: true, readOnly: false},
									restore : {show: true},
									saveAsImage : {show: true}
								}
							},
							legend: {
								data : ['展现','点击','访问','咨询','订单']
							},
							calculable : true,
							series : [
								{
									name:'预期',
									type:'funnel',
									left: '10%',
									width: '80%',
									itemStyle: {
										normal: {
											opacity: 0.7,
											label: {
												formatter: '{b}预期'
											},
											labelLine: {
												show : false
											}
										},
										emphasis: {
											label: {
												position:'inside',
												formatter: '{b}预期 : {c}%'
											}
										}
									},
									data:[
										{value:60, name:'访问'},
										{value:40, name:'咨询'},
										{value:20, name:'订单'},
										{value:80, name:'点击'},
										{value:100, name:'展现'}
									]
								},
								{
									name:'实际',
									type:'funnel',
									left: '10%',
									width: '80%',
									maxSize: '80%',
									itemStyle: {
										normal: {
											opacity: 0.5,
											borderColor: '#fff',
											borderWidth: 2,
											label: {
												position: 'inside',
												formatter: '{c}%',
												textStyle: {
													color: '#fff'
												}
											}
										},
										emphasis: {
											label: {
												position:'inside',
												formatter: '{b}实际 : {c}%'
											}
										}
									},
									data:[
										{value:30, name:'访问'},
										{value:10, name:'咨询'},
										{value:5, name:'订单'},
										{value:50, name:'点击'},
										{value:80, name:'展现'}
									]
								}
							]
						};

						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-funnel3": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var option = {
							title : {
								text: '漏斗图',
								subtext: '纯属虚构',
								left: 'left',
								top: 'bottom'
							},
							tooltip : {
								trigger: 'item',
								formatter: "{a} <br/>{b} : {c}%"
							},
							toolbox: {
								show : true,
								orient: 'vertical',
								top: 'center',
								feature : {
									mark : {show: true},
									dataView : {show: true, readOnly: false},
									restore : {show: true},
									saveAsImage : {show: true}
								}
							},
							legend: {
								orient: 'vertical',
								left: 'left',
								data : ['展现','点击','访问','咨询','订单']
							},
							calculable : true,
							series : [
								{
									name:'漏斗图',
									type:'funnel',
									width: '40%',
									height: '45%',
									left: '5%',
									top: '50%',
									data:[
										{value:60, name:'访问'},
										{value:30, name:'咨询'},
										{value:10, name:'订单'},
										{value:80, name:'点击'},
										{value:100, name:'展现'}
									]
								},
								{
									name:'金字塔',
									type:'funnel',
									width: '40%',
									height: '45%',
									left: '5%',
									top: '5%',
									sort : 'ascending',
									data:[
										{value:60, name:'访问'},
										{value:30, name:'咨询'},
										{value:10, name:'订单'},
										{value:80, name:'点击'},
										{value:100, name:'展现'}
									]
								},
								{
									name:'漏斗图',
									type:'funnel',
									width: '40%',
									height: '45%',
									left: '55%',
									top: '5%',
									itemStyle: {
										normal: {
											// color: 各异,
											label: {
												position: 'left'
											}
										}
									},
									data:[
										{value:60, name:'访问'},
										{value:30, name:'咨询'},
										{value:10, name:'订单'},
										{value:80, name:'点击'},
										{value:100, name:'展现'}
									]
								},
								{
									name:'金字塔',
									type:'funnel',
									width: '40%',
									height: '45%',
									left: '55%',
									top: '50%',
									sort : 'ascending',
									itemStyle: {
										normal: {
											// color: 各异,
											label: {
												position: 'left'
											}
										}
									},
									data:[
										{value:60, name:'访问'},
										{value:30, name:'咨询'},
										{value:10, name:'订单'},
										{value:80, name:'点击'},
										{value:100, name:'展现'}
									]
								}
							]
						};

						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-funnel4": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var option = {
							title : {
								text: '漏斗图',
								subtext: '纯属虚构'
							},
							tooltip : {
								trigger: 'item',
								formatter: "{a} <br/>{b} : {c}%"
							},
							toolbox: {
								show : true,
								feature : {
									mark : {show: true},
									dataView : {show: true, readOnly: false},
									restore : {show: true},
									saveAsImage : {show: true}
								}
							},
							legend: {
								data : ['展现','点击','访问','咨询','订单']
							},
							calculable : true,
							series : [
								{
									name:'漏斗图',
									type:'funnel',
									left: '10%',
									top: 60,
									//x2: 80,
									bottom: 60,
									width: '80%',
									// height: {totalHeight} - y - y2,
									min: 0,
									max: 100,
									minSize: '0%',
									maxSize: '100%',
									sort : 'descending',
									gap : 2,
									label: {
										normal: {
											show: true,
											position: 'inside'
										},
										emphasis: {
											textStyle: {
												fontSize: 20
											}
										}
									},
									labelLine: {
										normal: {
											length: 10,
											lineStyle: {
												width: 1,
												type: 'solid'
											}
										}
									},
									itemStyle: {
										normal: {
											borderColor: '#fff',
											borderWidth: 1
										}
									},
									data:[
										{value:60, name:'访问'},
										{value:40, name:'咨询'},
										{value:20, name:'订单'},
										{value:80, name:'点击'},
										{value:100, name:'展现'}
									]
								}
							]
						};

						// 使用刚指定的配置项和数据显示图表
						myChart.setOption(option);
					}
				});
			},
			"click; .echarts-gauge1": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						var option = {
							tooltip : {
								formatter: "{a} <br/>{c} {b}"
							},
							toolbox: {
								show : true,
								feature : {
									mark : {show: true},
									restore : {show: true},
									saveAsImage : {show: true}
								}
							},
							series : [
								{
									name:'速度',
									type:'gauge',
									z: 3,
									min:0,
									max:220,
									splitNumber:11,
									radius: '50%',
									axisLine: {            // 坐标轴线
										lineStyle: {       // 属性lineStyle控制线条样式
											width: 10
										}
									},
									axisTick: {            // 坐标轴小标记
										length :15,        // 属性length控制线长
										lineStyle: {       // 属性lineStyle控制线条样式
											color: 'auto'
										}
									},
									splitLine: {           // 分隔线
										length :20,         // 属性length控制线长
										lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
											color: 'auto'
										}
									},
									title : {
										textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
											fontWeight: 'bolder',
											fontSize: 20,
											fontStyle: 'italic'
										}
									},
									detail : {
										textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
											fontWeight: 'bolder'
										}
									},
									data:[{value: 40, name: 'km/h'}]
								},
								{
									name:'转速',
									type:'gauge',
									center : ['20%', '55%'],    // 默认全局居中
									radius : '35%',
									min:0,
									max:7,
									endAngle:45,
									splitNumber:7,
									axisLine: {            // 坐标轴线
										lineStyle: {       // 属性lineStyle控制线条样式
											width: 8
										}
									},
									axisTick: {            // 坐标轴小标记
										length :12,        // 属性length控制线长
										lineStyle: {       // 属性lineStyle控制线条样式
											color: 'auto'
										}
									},
									splitLine: {           // 分隔线
										length :20,         // 属性length控制线长
										lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
											color: 'auto'
										}
									},
									pointer: {
										width:5
									},
									title : {
										offsetCenter: [0, '-30%'],       // x, y，单位px
									},
									detail : {
										textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
											fontWeight: 'bolder'
										}
									},
									data:[{value: 1.5, name: 'x1000 r/min'}]
								},
								{
									name:'油表',
									type:'gauge',
									center : ['77%', '50%'],    // 默认全局居中
									radius : '25%',
									min:0,
									max:2,
									startAngle:135,
									endAngle:45,
									splitNumber:2,
									axisLine: {            // 坐标轴线
										lineStyle: {       // 属性lineStyle控制线条样式
											width: 8
										}
									},
									axisTick: {            // 坐标轴小标记
										splitNumber:5,
										length :10,        // 属性length控制线长
										lineStyle: {       // 属性lineStyle控制线条样式
											color: 'auto'
										}
									},
									axisLabel: {
										formatter:function(v){
											switch (v + '') {
												case '0' : return 'E';
												case '1' : return 'Gas';
												case '2' : return 'F';
											}
										}
									},
									splitLine: {           // 分隔线
										length :15,         // 属性length控制线长
										lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
											color: 'auto'
										}
									},
									pointer: {
										width:2
									},
									title : {
										show: false
									},
									detail : {
										show: false
									},
									data:[{value: 0.5, name: 'gas'}]
								},
								{
									name:'水表',
									type:'gauge',
									center : ['77%', '50%'],    // 默认全局居中
									radius : '25%',
									min:0,
									max:2,
									startAngle:315,
									endAngle:225,
									splitNumber:2,
									axisLine: {            // 坐标轴线
										lineStyle: {       // 属性lineStyle控制线条样式
											width: 8
										}
									},
									axisTick: {            // 坐标轴小标记
										show: false
									},
									axisLabel: {
										formatter:function(v){
											switch (v + '') {
												case '0' : return 'H';
												case '1' : return 'Water';
												case '2' : return 'C';
											}
										}
									},
									splitLine: {           // 分隔线
										length :15,         // 属性length控制线长
										lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
											color: 'auto'
										}
									},
									pointer: {
										width:2
									},
									title : {
										show: false
									},
									detail : {
										show: false
									},
									data:[{value: 0.5, name: 'gas'}]
								}
							]
						};

						clearInterval(app.timeTicket);
						app.timeTicket = setInterval(function (){
							option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
							option.series[1].data[0].value = (Math.random()*7).toFixed(2) - 0;
							option.series[2].data[0].value = (Math.random()*2).toFixed(2) - 0;
							option.series[3].data[0].value = (Math.random()*2).toFixed(2) - 0;
							myChart.setOption(option,true);
						},2000);
					}
				});
			},
			"click; .echarts-gauge2": function () {
				var view = this;
				brite.display("Popup",".MainView", {
					title: 'DEMO',
					dialogGlass: view.$dialogGlass,
					callback: function (myChart) {
						option = {
							tooltip : {
								formatter: "{a} <br/>{b} : {c}%"
							},
							toolbox: {
								show : true,
								feature : {
									mark : {show: true},
									restore : {show: true},
									saveAsImage : {show: true}
								}
							},
							series : [
								{
									name:'业务指标',
									type:'gauge',
									detail : {formatter:'{value}%'},
									data:[{value: 50, name: '完成率'}]
								}
							]
						};

						clearInterval(app.timeTicket);
						app.timeTicket = setInterval(function () {
							option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
							myChart.setOption(option, true);
						},2000);
					}
				});
			}
		},

		docEvents: {
			"USER_REFRESHED": function(event){
				var view = this;
				view.$navHeader.dxPush(app.user);
			},

			"APP_CTX_CHANGE": function(event){
				var view = this;
				if ("project" === app.ctx.pathAt(0) && $.isNumeric(app.ctx.pathAt(1))){
					var newProjectId = app.ctx.pathAt(1) * 1;
					var tabName = app.ctx.pathAt(2);
					if (newProjectId !== view.currentProjectId || tabName !== view.tabName){
						app.projectDao.get(newProjectId).done(function(project){
							// call the brite.js bEmpty jQuery extension to make sure to 
							// destroy eventual brite.js sub views
							view.$contentPanel.bEmpty();
							
						});
					}
				}
			}
		}
	});

})();