<template>
  <div class="middle">
    <header-bar :title="title"></header-bar>
    <div class="middleView" style="margin: 0.25rem 0.422rem 0rem;">
      <template v-for="(value,index) in countryList">
        <div class="middleView list" style="height: 1rem;">
          <div class="middleViewAS" style="width: 80%">
            <span style="font-size: 0.375rem;color: #000;" v-text="value.title"></span>
          </div>
          <div class="middleViewAE" style="width: 20%">
            <span style="font-size: 0.375rem;color: #000;"></span>
          </div>
        </div>
        <template v-for="(val,idx) in value.items">
          <div class="middleView list" style="height: 1rem;" @click="chooseCountry(val.countryName,val.countryCode)">
            <div class="middleViewAS" style="width: 80%">
              <span style="font-size: 0.375rem;color: #000;" v-text="val.countryName"></span>
            </div>
            <div class="middleViewAE" style="width: 20%">
              <span style="font-size: 0.375rem;color: #000;" v-text="val.countryCode"></span>
            </div>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
    import header from '../components/HeadBar.vue';
    import '../../static/css/common.css' /*引入公共样式*/
    export default {
        name: "country",
        components: {
            'header-bar': header,
        },
        data() {
            return {
                title: '选择国家和地区',
                countryList:  [
                    {
                        'title': '常用国家和地区',
                        'items': [
                            {
                                'countryName': '美国',
                                'countryCode': '+1'
                            },
                            {
                                'countryName': '加拿大',
                                'countryCode': '+1'
                            },
                            {
                                'countryName': '澳大利亚',
                                'countryCode': '+61'
                            },
                            {
                                'countryName': '中国',
                                'countryCode': '+86'
                            },
                            {
                                'countryName': '英国',
                                'countryCode': '+44'
                            },
                            {
                                'countryName': '新加坡',
                                'countryCode': '+65'
                            },
                        ],
                    },
                    {
                        'title': 'A',
                        'items': [
                            {
                                'countryName': '阿尔巴尼亚',
                                'countryCode': '+355'
                            },
                            {
                                'countryName': '阿尔及利亚',
                                'countryCode': '+213'
                            },
                            {
                                'countryName': '阿富汗',
                                'countryCode': '+93'
                            },
                            {
                                'countryName': '阿根廷',
                                'countryCode': '+54'
                            },
                            {
                                'countryName': '阿曼',
                                'countryCode': '+968'
                            },
                            {
                                'countryName': '阿塞拜疆',
                                'countryCode': '+994'
                            },
                            {
                                'countryName': '埃及',
                                'countryCode': '+20'
                            },
                            {
                                'countryName': '埃塞俄比亚',
                                'countryCode': '+251'
                            },
                            {
                                'countryName': '爱尔兰',
                                'countryCode': '+353'
                            },
                            {
                                'countryName': '爱沙尼亚',
                                'countryCode': '+372'
                            },
                            {
                                'countryName': '安道尔',
                                'countryCode': '+376'
                            },
                            {
                                'countryName': '安哥拉',
                                'countryCode': '+244'
                            },
                            {
                                'countryName': '安提瓜和巴布达',
                                'countryCode': '+1268'
                            },
                            {
                                'countryName': '奥地利',
                                'countryCode': '+43'
                            },
                            {
                                'countryName': '澳大利亚',
                                'countryCode': '+61'
                            },
                            {
                                'countryName': '阿拉伯联合酋长国',
                                'countryCode': '+971'
                            },
                            {
                                'countryName': '安圭拉',
                                'countryCode': '+1264'
                            },
                            {
                                'countryName': '阿鲁巴',
                                'countryCode': '+297'
                            },
                        ],
                    },
                    {
                        'title': 'B',
                        'items': [
                            {
                                'countryName': '巴巴多斯',
                                'countryCode': '+1246'
                            },
                            {
                                'countryName': '巴布亚新几内亚',
                                'countryCode': '+675'
                            },
                            {
                                'countryName': '巴哈马',
                                'countryCode': '+1242'
                            },
                            {
                                'countryName': '巴基斯坦',
                                'countryCode': '+92'
                            },
                            {
                                'countryName': '巴拉圭',
                                'countryCode': '+595'
                            },
                            {
                                'countryName': '巴林',
                                'countryCode': '+973'
                            },
                            {
                                'countryName': '巴拿马',
                                'countryCode': '+507'
                            },
                            {
                                'countryName': '巴西',
                                'countryCode': '+55'
                            },
                            {
                                'countryName': '白俄罗斯',
                                'countryCode': '+375'
                            },
                            {
                                'countryName': '保加利亚',
                                'countryCode': '+359'
                            },
                            {
                                'countryName': '贝宁',
                                'countryCode': '+229'
                            },
                            {
                                'countryName': '比利时',
                                'countryCode': '+32'
                            },
                            {
                                'countryName': '冰岛',
                                'countryCode': '+354'
                            },
                            {
                                'countryName': '波多黎各',
                                'countryCode': '+1787'
                            },
                            {
                                'countryName': '波兰',
                                'countryCode': '+48'
                            },
                            {
                                'countryName': '玻利维亚',
                                'countryCode': '+591'
                            },
                            {
                                'countryName': '博兹瓦纳',
                                'countryCode': '+267'
                            },
                            {
                                'countryName': '不丹',
                                'countryCode': '+975'
                            },
                            {
                                'countryName': '布基纳法索',
                                'countryCode': '+226'
                            },
                            {
                                'countryName': '波斯尼亚和黑塞哥维那',
                                'countryCode': '+387'
                            },
                            {
                                'countryName': '布隆迪',
                                'countryCode': '+257'
                            },
                            {
                                'countryName': '百慕大群岛',
                                'countryCode': '+1441'
                            },
                            {
                                'countryName': '伯利兹',
                                'countryCode': '+501'
                            },
                        ],
                    },
                    {
                        'title': 'C',
                        'items': [
                            {
                                'countryName': '朝鲜',
                                'countryCode': '+850'
                            },
                            {
                                'countryName': '赤道几内亚',
                                'countryCode': '+240'
                            },
                        ],
                    },
                    {
                        'title': 'D',
                        'items': [
                            {
                                'countryName': '丹麦',
                                'countryCode': '+45'
                            },
                            {
                                'countryName': '德国',
                                'countryCode': '+49'
                            },
                            {
                                'countryName': '多哥',
                                'countryCode': '+228'
                            },
                            {
                                'countryName': '多米尼加共和国',
                                'countryCode': '+1809'
                            },
                            {
                                'countryName': '东帝汶',
                                'countryCode': '+670'
                            },
                        ],
                    },
                    {
                        'title': 'E',
                        'items': [
                            {
                                'countryName': '俄罗斯',
                                'countryCode': '+7'
                            },
                            {
                                'countryName': '厄瓜多尔',
                                'countryCode': '+593'
                            },
                            {
                                'countryName': '厄立特里亚',
                                'countryCode': '+291'
                            },
                        ],
                    },
                    {
                        'title': 'F',
                        'items': [
                            {
                                'countryName': '法国',
                                'countryCode': '+33'
                            },
                            {
                                'countryName': '法属圭亚那',
                                'countryCode': '+594'
                            },
                            {
                                'countryName': '菲律宾',
                                'countryCode': '+63'
                            },
                            {
                                'countryName': '斐济',
                                'countryCode': '+679'
                            },
                            {
                                'countryName': '芬兰',
                                'countryCode': '+358'
                            },
                            {
                                'countryName': '法罗群岛',
                                'countryCode': '+298'
                            },
                            {
                                'countryName': '法属波利尼西亚',
                                'countryCode': '+689'
                            },
                        ],
                    },
                    {
                        'title': 'G',
                        'items': [
                            {
                                'countryName': '冈比亚',
                                'countryCode': '+220'
                            },
                            {
                                'countryName': '刚果',
                                'countryCode': '+243'
                            },
                            {
                                'countryName': '哥伦比亚',
                                'countryCode': '+57'
                            },
                            {
                                'countryName': '哥斯达尼加',
                                'countryCode': '+509'
                            },
                            {
                                'countryName': '格林纳达',
                                'countryCode': '+1473'
                            },
                            {
                                'countryName': '格鲁吉亚',
                                'countryCode': '+995'
                            },
                            {
                                'countryName': '古巴',
                                'countryCode': '+53'
                            },
                            {
                                'countryName': '关岛',
                                'countryCode': '+1671'
                            },
                            {
                                'countryName': '圭亚那',
                                'countryCode': '+592'
                            },
                            {
                                'countryName': '刚果民主共和国',
                                'countryCode': '+243'
                            },
                            {
                                'countryName': '刚果共和国',
                                'countryCode': '+242'
                            },
                            {
                                'countryName': '格陵兰岛',
                                'countryCode': '+299'
                            },
                            {
                                'countryName': '瓜德罗普岛',
                                'countryCode': '+590'
                            },
                            {
                                'countryName': '瓜地马拉',
                                'countryCode': '+502'
                            },
                        ],
                    },
                    {
                        'title': 'H',
                        'items': [
                            {
                                'countryName': '韩国',
                                'countryCode': '+82'
                            },
                            {
                                'countryName': '哈萨克斯坦',
                                'countryCode': '+7'
                            },
                            {
                                'countryName': '海地',
                                'countryCode': '+509'
                            },
                            {
                                'countryName': '荷兰',
                                'countryCode': '+31'
                            },
                            {
                                'countryName': '洪都拉斯',
                                'countryCode': '+504'
                            },
                            {
                                'countryName': '荷兰加勒比',
                                'countryCode': '+599'
                            },
                            {
                                'countryName': '黑山',
                                'countryCode': '+382'
                            },
                        ],
                    },
                    {
                        'title': 'J',
                        'items': [
                            {
                                'countryName': '吉尔吉斯斯坦',
                                'countryCode': '+996'
                            },
                            {
                                'countryName': '加拿大',
                                'countryCode': '+1'
                            },
                            {
                                'countryName': '加纳',
                                'countryCode': '+233'
                            },
                            {
                                'countryName': '加蓬',
                                'countryCode': '+241'
                            },
                            {
                                'countryName': '柬埔寨',
                                'countryCode': '+855'
                            },
                            {
                                'countryName': '捷克',
                                'countryCode': '+420'
                            },
                            {
                                'countryName': '津巴布韦',
                                'countryCode': '+263'
                            },
                            {
                                'countryName': '吉布提',
                                'countryCode': '+253'
                            },
                            {
                                'countryName': '几内亚',
                                'countryCode': '+224'
                            },
                            {
                                'countryName': '几内亚比绍共和国',
                                'countryCode': '+245'
                            },
                            {
                                'countryName': '基里巴斯',
                                'countryCode': '+686'
                            },
                        ],
                    },
                    {
                        'title': 'K',
                        'items': [
                            {
                                'countryName': '喀麦隆',
                                'countryCode': '+237'
                            },
                            {
                                'countryName': '卡塔尔',
                                'countryCode': '+974'
                            },
                            {
                                'countryName': '开曼群岛',
                                'countryCode': '+1345'
                            },
                            {
                                'countryName': '科威特',
                                'countryCode': '+965'
                            },
                            {
                                'countryName': '克罗地亚',
                                'countryCode': '+385'
                            },
                            {
                                'countryName': '肯尼亚',
                                'countryCode': '+254'
                            },
                            {
                                'countryName': '库克群岛',
                                'countryCode': '+682'
                            },
                            {
                                'countryName': '开普',
                                'countryCode': '+238'
                            },
                            {
                                'countryName': '库拉索',
                                'countryCode': '+599'
                            },
                            {
                                'countryName': '科摩罗',
                                'countryCode': '+269'
                            },
                        ],
                    },
                    {
                        'title': 'L',
                        'items': [
                            {
                                'countryName': '莱索托',
                                'countryCode': '+266'
                            },
                            {
                                'countryName': '老挝',
                                'countryCode': '+856'
                            },
                            {
                                'countryName': '黎巴嫩',
                                'countryCode': '+961'
                            },
                            {
                                'countryName': '立陶宛',
                                'countryCode': '+370'
                            },
                            {
                                'countryName': '利比里亚',
                                'countryCode': '+231'
                            },
                            {
                                'countryName': '利比亚',
                                'countryCode': '+218'
                            },
                            {
                                'countryName': '卢森堡',
                                'countryCode': '+352'
                            },
                            {
                                'countryName': '罗马里亚',
                                'countryCode': '+40'
                            },
                            {
                                'countryName': '列支敦士登',
                                'countryCode': '+423'
                            },
                            {
                                'countryName': '拉脱维亚',
                                'countryCode': '+371'
                            },
                            {
                                'countryName': '留尼旺',
                                'countryCode': '+262'
                            },
                            {
                                'countryName': '卢旺达',
                                'countryCode': '+250'
                            },
                        ],
                    },
                    {
                        'title': 'M',
                        'items': [
                            {
                                'countryName': '马达加斯加',
                                'countryCode': '+261'
                            },
                            {
                                'countryName': '马尔代夫',
                                'countryCode': '+960'
                            },
                            {
                                'countryName': '马耳他',
                                'countryCode': '+356'
                            },
                            {
                                'countryName': '马来西亚',
                                'countryCode': '+60'
                            },
                            {
                                'countryName': '马里',
                                'countryCode': '+252'
                            },
                            {
                                'countryName': '马其顿',
                                'countryCode': '+389'
                            },
                            {
                                'countryName': '马绍尔群岛',
                                'countryCode': '+692'
                            },
                            {
                                'countryName': '毛里求斯',
                                'countryCode': '+230'
                            },
                            {
                                'countryName': '毛里塔尼亚',
                                'countryCode': '+222'
                            },
                            {
                                'countryName': '美国',
                                'countryCode': '+1'
                            },
                            {
                                'countryName': '蒙古',
                                'countryCode': '+976'
                            },
                            {
                                'countryName': '孟加拉国',
                                'countryCode': '+880'
                            },
                            {
                                'countryName': '秘鲁',
                                'countryCode': '+51'
                            },
                            {
                                'countryName': '缅甸',
                                'countryCode': '+95'
                            },
                            {
                                'countryName': '摩尔多瓦',
                                'countryCode': '+373'
                            },
                            {
                                'countryName': '摩洛哥',
                                'countryCode': '+212'
                            },    {
                                'countryName': '摩纳哥',
                                'countryCode': '+377'
                            },    {
                                'countryName': '莫桑比克',
                                'countryCode': '+258'
                            },
                            {
                                'countryName': '墨西哥',
                                'countryCode': '+52'
                            },
                            {
                                'countryName': '美属萨摩亚',
                                'countryCode': '+1684'
                            },
                            {
                                'countryName': '密克罗尼西亚',
                                'countryCode': '+691'
                            },
                            {
                                'countryName': '蒙特赛拉特岛',
                                'countryCode': '+1664'
                            },
                            {
                                'countryName': '马拉特',
                                'countryCode': '+265'
                            },
                            {
                                'countryName': '马约特',
                                'countryCode': '+269'
                            },

                        ],
                    },
                    {
                        'title': 'N',
                        'items': [
                            {
                                'countryName': '纳米比亚',
                                'countryCode': '+264'
                            },
                            {
                                'countryName': '南非',
                                'countryCode': '+27'
                            },
                            {
                                'countryName': '尼泊尔',
                                'countryCode': '+977'
                            },
                            {
                                'countryName': '尼加拉瓜',
                                'countryCode': '+965'
                            },
                            {
                                'countryName': '尼日尔',
                                'countryCode': '+227'
                            },
                            {
                                'countryName': '尼日尼亚',
                                'countryCode': '+234'
                            },
                            {
                                'countryName': '挪威',
                                'countryCode': '+47'
                            },
                            {
                                'countryName': '瑙鲁',
                                'countryCode': '+674'
                            },
                        ],
                    },
                    {
                        'title': 'P',
                        'items': [
                            {
                                'countryName': '葡萄牙',
                                'countryCode': '+351'
                            },
                            {
                                'countryName': '帕劳',
                                'countryCode': '+680'
                            },
                        ]
                    },
                    {
                        'title': 'R',
                        'items': [
                            {
                                'countryName': '日本',
                                'countryCode': '+81'
                            },
                            {
                                'countryName': '瑞典',
                                'countryCode': '+46'
                            },
                            {
                                'countryName': '瑞士',
                                'countryCode': '+41'
                            },
                        ]
                    },
                    {
                        'title': 'S',
                        'items': [
                            {
                                'countryName': '萨尔瓦多',
                                'countryCode': '+503'
                            },
                            {
                                'countryName': '塞内加尔',
                                'countryCode': '+221'
                            },
                            {
                                'countryName': '塞舌尔',
                                'countryCode': '+248'
                            },
                            {
                                'countryName': '沙特阿拉伯',
                                'countryCode': '+966'
                            },
                            {
                                'countryName': '圣基茨和尼维斯',
                                'countryCode': '+1869'
                            },
                            {
                                'countryName': '圣马力诺',
                                'countryCode': '+11378'
                            },
                            {
                                'countryName': '斯里兰卡',
                                'countryCode': '+94'
                            },
                            {
                                'countryName': '斯诺伐克',
                                'countryCode': '+421'
                            },
                            {
                                'countryName': '斯威士兰',
                                'countryCode': '+268'
                            },
                            {
                                'countryName': '苏丹',
                                'countryCode': '+249'
                            },
                            {
                                'countryName': '苏里南',
                                'countryCode': '+597'
                            },
                            {
                                'countryName': '塞浦路斯',
                                'countryCode': '+357'
                            },
                            {
                                'countryName': '圣露西亚',
                                'countryCode': '+1758'
                            },
                            {
                                'countryName': '圣彼埃尔和密克隆岛',
                                'countryCode': '+508'
                            },
                            {
                                'countryName': '塞尔维亚',
                                'countryCode': '+381'
                            },
                            {
                                'countryName': '所罗门群岛',
                                'countryCode': '+677'
                            },
                            {
                                'countryName': '斯洛文尼亚',
                                'countryCode': '+386'
                            },
                            {
                                'countryName': '塞拉利昂',
                                'countryCode': '+232'
                            },
                            {
                                'countryName': '索马里',
                                'countryCode': '+252'
                            },
                            {
                                'countryName': '圣多美和普林西比',
                                'countryCode': '+239'
                            },
                            {
                                'countryName': '圣文森特和格林纳丁斯',
                                'countryCode': '+1784'
                            },
                            {
                                'countryName': '萨摩亚',
                                'countryCode': '+685'
                            },
                        ]
                    },
                    {
                        'title': 'T',
                        'items': [
                            {
                                'countryName': '塔吉克斯坦',
                                'countryCode': '+992'
                            },
                            {
                                'countryName': '泰国',
                                'countryCode': '+66'
                            },
                            {
                                'countryName': '坦桑尼亚',
                                'countryCode': '+255'
                            },
                            {
                                'countryName': '汤加',
                                'countryCode': '+676'
                            },
                            {
                                'countryName': '特立尼达和多巴哥',
                                'countryCode': '+1868'
                            },
                            {
                                'countryName': '突尼斯',
                                'countryCode': '+216'
                            },
                            {
                                'countryName': '土库曼斯坦',
                                'countryCode': '+993'
                            },
                            {
                                'countryName': '特克斯和凯科斯群岛',
                                'countryCode': '+1649'
                            },
                            {
                                'countryName': '土耳其',
                                'countryCode': '+90'
                            },
                        ]
                    },
                    {
                        'title': 'W',
                        'items': [
                            {
                                'countryName': '委内瑞拉',
                                'countryCode': '+58'
                            },
                            {
                                'countryName': '乌干达',
                                'countryCode': '+256'
                            },
                            {
                                'countryName': '乌克兰',
                                'countryCode': '+380'
                            },
                            {
                                'countryName': '乌拉圭',
                                'countryCode': '+598'
                            },
                            {
                                'countryName': '乌兹别克斯坦',
                                'countryCode': '+998'
                            },
                            {
                                'countryName': '文莱',
                                'countryCode': '+673'
                            },
                            {
                                'countryName': '瓦努阿图',
                                'countryCode': '+678'
                            },
                        ]
                    },
                    {
                        'title': 'X',
                        'items': [
                            {
                                'countryName': '西班牙',
                                'countryCode': '+34'
                            },
                            {
                                'countryName': '希腊',
                                'countryCode': '+30'
                            },
                            {
                                'countryName': '象牙海岸',
                                'countryCode': '+225'
                            },
                            {
                                'countryName': '新加坡',
                                'countryCode': '+65'
                            },
                            {
                                'countryName': '新西兰',
                                'countryCode': '+64'
                            },
                            {
                                'countryName': '匈牙利',
                                'countryCode': '+36'
                            },
                            {
                                'countryName': '新喀里多尼亚',
                                'countryCode': '+687'
                            },
                            {
                                'countryName': '叙利亚',
                                'countryCode': '+963'
                            },
                        ]
                    },
                    {
                        'title': 'Y',
                        'items': [
                            {
                                'countryName': '牙买加',
                                'countryCode': '+1876'
                            },
                            {
                                'countryName': '亚美尼亚',
                                'countryCode': '+374'
                            },
                            {
                                'countryName': '也门',
                                'countryCode': '+967'
                            },
                            {
                                'countryName': '伊拉克',
                                'countryCode': '+964'
                            },
                            {
                                'countryName': '伊朗',
                                'countryCode': '+98'
                            },
                            {
                                'countryName': '以色列',
                                'countryCode': '+972'
                            },
                            {
                                'countryName': '意大利',
                                'countryCode': '+39'
                            },
                            {
                                'countryName': '印度',
                                'countryCode': '+91'
                            },
                            {
                                'countryName': '印度尼西亚',
                                'countryCode': '+62'
                            },
                            {
                                'countryName': '英国',
                                'countryCode': '+44'
                            },
                            {
                                'countryName': '约旦',
                                'countryCode': '+962'
                            },
                            {
                                'countryName': '英属处女群岛',
                                'countryCode': '+84'
                            },
                            {
                                'countryName': '越南',
                                'countryCode': '+1284'
                            },
                        ]
                    },
                    {
                        'title': 'Y',
                        'items': [
                            {
                                'countryName': '牙买加',
                                'countryCode': '+1876'
                            },
                            {
                                'countryName': '亚美尼亚',
                                'countryCode': '+374'
                            },
                            {
                                'countryName': '也门',
                                'countryCode': '+967'
                            },
                            {
                                'countryName': '伊拉克',
                                'countryCode': '+964'
                            },
                            {
                                'countryName': '伊朗',
                                'countryCode': '+98'
                            },
                            {
                                'countryName': '以色列',
                                'countryCode': '+972'
                            },
                            {
                                'countryName': '意大利',
                                'countryCode': '+39'
                            },
                            {
                                'countryName': '印度',
                                'countryCode': '+91'
                            },
                            {
                                'countryName': '印度尼西亚',
                                'countryCode': '+62'
                            },
                            {
                                'countryName': '英国',
                                'countryCode': '+44'
                            },
                            {
                                'countryName': '约旦',
                                'countryCode': '+962'
                            },
                            {
                                'countryName': '英属处女群岛',
                                'countryCode': '+84'
                            },
                            {
                                'countryName': '越南',
                                'countryCode': '+1284'
                            },
                        ]
                    },
                    {
                        'title': 'Z',
                        'items': [
                            {
                                'countryName': '赞比亚',
                                'countryCode': '+260'
                            },
                            {
                                'countryName': '直布罗陀',
                                'countryCode': '+350'
                            },
                            {
                                'countryName': '智利',
                                'countryCode': '+56'
                            },
                            {
                                'countryName': '中国',
                                'countryCode': '+86'
                            },
                            {
                                'countryName': '中国澳门',
                                'countryCode': '+853'
                            },
                            {
                                'countryName': '中国台湾',
                                'countryCode': '+886'
                            },
                            {
                                'countryName': '中国香港',
                                'countryCode': '+852'
                            },
                            {
                                'countryName': '中非共和国',
                                'countryCode': '+236'
                            },
                            {
                                'countryName': '乍得',
                                'countryCode': '+235'
                            },
                        ]
                    },
                ],
            }

        },
        methods: {
            //选择国家区号
            chooseCountry: function (name,code) {
                
            }
        }
    }
</script>

<style scoped>
  .list{
    border-bottom: 1px solid #c7c7cd;
  }
  .list:last-child{
    border: none;
  }
</style>
