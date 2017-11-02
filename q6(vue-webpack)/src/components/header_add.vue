<template>
<div class="headerAdd">
    <ul class="headerAdd_menu">
        <li class="headerAdd_menu_item index" :is="'router-link'" to="/">
            <div class="headerAdd_menu_item_topImage"></div>
            <div>首页</div>
        </li
        ><li v-for="menu in menus_left" class="headerAdd_menu_item left_item">
            <div class="headerAdd_menu_item_newsNumber">{{ menu.newsNumber }}</div>
            <div>{{ menu.name }}</div>
            <div class="left_item_child">
                <ul>
                    <li v-for="child in menu.child_menus" class="left_item_child_menu">
                        <div class="arrow">{{ child }}</div
                        ><div class="arrow_back_frame">
                            <div class="arrow_back"></div>
                        </div>
                    </li>
                </ul>
            </div>
        </li
        ><li :class="'headerAdd_menu_item right_item ' + menus_right[0].class">
            <div class="headerAdd_menu_item_topImage"></div>
            <div>{{ menus_right[0].name }}</div>
        </li
        ><li :class="'headerAdd_menu_item right_item ' + menus_right[1].class">
            <div class="headerAdd_menu_item_topImage"></div>
            <div>{{ menus_right[1].name }}</div>
            <div class="right_item_child">
                <ul>
                    <li v-for="child in menus_right[1].child_menus" class="right_item_child_menu">
                        <div class="arrow">{{ child }}</div>
                    </li>
                </ul>
            </div>
        </li
        ><li :class="'headerAdd_menu_item right_item ' + menus_right[2].class">
            <div class="headerAdd_menu_item_topImage"></div>
            <div>{{ menus_right[2].name }}</div>
            <div class="right_item_child">
                <ul>
                    <li v-for="child in menus_right[2].child_menus" class="right_item_child_menu">
                        <div class="arrow">{{ child }}</div
                        ><div class="arrow_back_frame">
                            <div class="arrow_back"></div>
                        </div>
                    </li>
                </ul>
            </div>
        </li
        ><li :class="'headerAdd_menu_item right_item ' + menus_right[3].class">
            <div class="headerAdd_menu_item_topImage"></div>
            <div>{{ menus_right[3].name }}</div>
        </li>
    </ul>
    <div class="special_gif"></div>
    <router-view></router-view>
</div>
</template>

<script>
let menus_left = [{
        name: '动画',
        newsNumber: '288',
        child_menus: [
            'MAD·AMV', 'MMD·3D', '短片·手书·配音', '综合'
        ]
    },
    {
        name: '番剧',
        newsNumber: '48',
        child_menus: [
            '连载动画', '完结动画', '资讯', '官方延伸', '新番时间表', '番剧索引'
        ]
    },
    {
        name: '国创',
        newsNumber: '48',
        child_menus: [
            '国产动画', '国产原创相关', '布袋戏', '资讯', '新番时间表', '国产动画索引'
        ]
    },
    {
        name: '音乐',
        newsNumber: '505',
        child_menus: [
            '原创音乐', '翻唱', 'VOCALOID·UTAU', '演奏', '三次元音乐', 'OP/ED/OST', '音乐选集'
        ]
    },
    {
        name: '舞蹈',
        newsNumber: '92',
        child_menus: [
            '宅舞', '三次元舞蹈', '舞蹈教程'
        ]
    },
    {
        name: '游戏',
        newsNumber: '999+',
        child_menus: [
            '单机游戏', '电子竞技', '手机游戏', '网络游戏', '桌游棋牌', 'GMV', '音游', 'Mugen'
        ]
    },
    {
        name: '科技',
        newsNumber: '461',
        child_menus: [
            '趣味科普人文', '野生技术协会', '演讲·公开课', '星海', '数码', '机械', '汽车'
        ]
    },
    {
        name: '生活',
        newsNumber: '999+',
        child_menus: [
            '搞笑', '日常', '美食圈', '动物圈', '手工', '绘画', 'ASMR', '运动', '其他'
        ]
    },
    {
        name: '鬼畜',
        newsNumber: '18',
        child_menus: [
            '鬼畜调教', '音MAD', '人力VOCALOID', '教程演示'
        ]
    },
    {
        name: '时尚',
        newsNumber: '292',
        child_menus: [
            '美妆', '服饰', '健身', '资讯'
        ]
    },
    {
        name: '广告',
        newsNumber: '46',
        child_menus: [
            
        ]
    },
    {
        name: '娱乐',
        newsNumber: '814',
        child_menus: [
            '综艺', '明星', 'Korea相关'
        ]
    },
    {
        name: '影视',
        newsNumber: '482',
        child_menus: [
            '影视杂谈', '影视剪辑', '短片', '预告·资讯', '特摄'
        ]
    },
    {
        name: '放映厅',
        newsNumber: '54',
        child_menus: [
            '纪录片', '电影', '电视剧'
        ]
    },
];
let menus_right = [{
        name: '专栏',
        class: 'special'
    },
    {
        name: '广场',
        class: 'square',
        child_menus: [
            '会员购', '活动中心', '游戏中心', '新闻中心', '画友', '芒果TV'
        ]
    },
    {
        name: '直播',
        class: 'liveBroadcast',
        child_menus: [
            '推荐主播', '生活娱乐', '绘画专区', '唱见舞见', '御宅文化', '单机联机', '网络游戏', '电子竞技', '手游直播'
        ]
    },
    {
        name: '小黑屋',
        class: 'blackHouse'
    },
];
export default {
    name: 'home',
    data() {
        return {
            menus_left: menus_left,
            menus_right: menus_right,
        }
    },
    methods: {
        eClick() {
            console.log(9999);
        }
    }
}
</script>