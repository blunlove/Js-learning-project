<template>
    <div class="time_table">
        <div class="time_table_plate">
            <div class="child_title">
                <div class="child_title_image" :style="{'background-position': '-140px -588px'}"></div>
                <div class="child_title_word">
                    <div class="child_title_word_title">番剧</div>
                    <div class="child_title_word_time">
                        <div class="child_title_word_time_back"></div>
                        <div v-for="(time, index) in times"
                            :class="['child_title_word_time_item', {child_title_word_time_item_on: buttonState == index}]"
                            @click="changeState(index)"
                            >
                            {{ time }}
                            <div class="child_title_button_arrow">
                                <div :class="{'child_title_button_arrow_head': buttonState == index}"></div>
                                <div :class="{'child_title_button_arrow_line': buttonState == index}"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="child_title_word_time_table">新番时间表 ></div>
            </div>
            <div class="time_table_plate_comic">
                <div v-for="item in time_table[buttonState]"
                    class="time_table_plate_comic_item"
                    >
                    <div class="time_table_plate_comic_item_icon"
                        :style="{backgroundImage: `url(${item.image})`}"
                        >
                    </div>
                    <div class="time_table_plate_comic_item_word">
                        <div class="time_table_plate_comic_item_word_top">
                            {{ item.title }}
                        </div>
                        <div class="time_table_plate_comic_item_word_down">
                            更新至<span>{{ item.episodes }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
let time_table = [
    [
        {
            title: '关于我的女友是个一本正经的碧池这件事',
            episodes: '7话',
        },
        {
            title: '此花亭奇谭',
            episodes: '8话',
        },
        {
            title: '雨色Convention',
            episodes: '8话',
        },
        {
            title: 'TSUKIPRO',
            episodes: '8话',
        },
        {
            title: 'URAHARA',
            episodes: '8话',
        },
        {
            title: '博人传 火影忍者新时代',
            episodes: '34话',
        },
        {
            title: '咕噜咕噜魔法阵 新系列',
            episodes: '20话',
        },
        {
            title: '品酒要在成为夫妻后',
            episodes: '8话',
        },
        {
            title: '十二大战',
            episodes: '8话',
        },
        {
            title: '偶像大师灰姑娘剧场 第二季',
            episodes: '21-2话',
        },
        {
            title: '黑色四叶草',
            episodes: '8话',
        },
        {
            title: '美妙天堂 偶像时间',
            episodes: '34话',
        },
        {
            title: '阿松 第二季',
            episodes: '8话',
        },
        {
            title: '丝缎女孩对谈',
            episodes: '8话',
        },
        {
            title: 'Onyankopon',
            episodes: '8话',
        },
        {
            title: 'UQ HOLDER！悠久持有者！',
            episodes: '8话',
        },
    ],
    [
        {
            title: '妖怪公寓的幽雅日常',
            episodes: '21话',
        },
        {
            title: '暗芝居 第五季',
            episodes: '13话',
        },
        {
            title: '智龙迷城X',
            episodes: '72话',
        },
        {
            title: '爱米-WE LOVE RICE- 第二季',
            episodes: '7话',
        },
    ],
    [
        {
            title: '十二大战',
            episodes: '8话',
        },
        {
            title: '黑色四叶草',
            episodes: '8话',
        },
        {
            title: 'UQ HOLDER！悠久持有者！',
            episodes: '8话',
        },
        {
            title: '阿松 第二季',
            episodes: '8话',
        },
        {
            title: '战刻夜想曲',
            episodes: '7话',
        },
        {
            title: 'Infini-T Force',
            episodes: '9话',
        },
        {
            title: 'Wake Up, Girls! 新章',
            episodes: '6话',
        },
        {
            title: '美妙天堂 偶像时间',
            episodes: '34话',
        },
        {
            title: '偶像大师灰姑娘剧场 第二季',
            episodes: '21-2话',
        },
        {
            title: '少年阿贝 GO!GO!小芝麻 第二季',
            episodes: '22话',
        },
        {
            title: '丝缎女孩对谈',
            episodes: '8话',
        },
        {
            title: 'Onyankopon',
            episodes: '7话',
        },
    ],
    [
        {
            title: '博人传 火影忍者新时代',
            episodes: '34话',
        },
        {
            title: '品酒要在成为夫妻后',
            episodes: '8话',
        },
        {
            title: 'URAHARA',
            episodes: '8话',
        },
        {
            title: 'TSUKIPRO',
            episodes: '8话',
        },
        {
            title: '咕噜咕噜魔法阵 新系列',
            episodes: '20话',
        },
        {
            title: '雨色Convention',
            episodes: '8话',
        },
    ],
    [
        {
            title: '关于我女友是个一本正经的碧池这件',
            episodes: '7话',
        },
        {
            title: '此花亭奇谭',
            episodes: '8话',
        },
    ],
    [
        {
            title: '少女终末旅行',
            episodes: '7话',
        },
        {
            title: 'Just Because!',
            episodes: 'SP',
        },
        {
            title: '國王遊戲 The Animation（僅限台灣地區）',
            episodes: '7话',
        },
    ],
    [
        {
            title: '宝石之国',
            episodes: '7话',
        },
        {
            title: 'Love Live! Sunshine!! 第二季',
            episodes: '7话',
        },
        {
            title: 'Code:Realize ～创世的姬君～',
            episodes: '7话',
        },
        {
            title: '无论何时我们的恋情都是10厘米。',
            episodes: '0话',
        },
        {
            title: '结城友奈是勇者 鹫尾须美之章&勇者之章',
            episodes: '6话',
        },
        {
            title: '将国之天鹰星',
            episodes: '19话',
        },
        {
            title: 'Dies irae 神怒之日（僅限港澳台地區）',
            episodes: '6话',
        },
        {
            title: '偶像大师 SideM',
            episodes: '7话',
        },
        {
            title: 'Classica Loid 第二季',
            episodes: '7话',
        },
        {
            title: '时间飞船24 逆袭的三恶人',
            episodes: '7话',
        },
        {
            title: '暖暖日记 2nd',
            episodes: '84话',
        },
        {
            title: 'DRIVE HEAD 机动救急警察',
            episodes: '32话',
        },
    ],
    [
        {
            title: 'Fate/Apocrypha',
            episodes: '19.5话',
        },
        {
            title: '干物妹！小埋R',
            episodes: '7话',
        },
        {
            title: '如果有妹妹就好了。',
            episodes: '7话',
        },
        {
            title: '幻界战线 & BEYOND',
            episodes: '7话',
        },
        {
            title: '鬼灯的冷彻 第二季',
            episodes: '7话',
        },
        {
            title: '调教咖啡厅',
            episodes: '7话',
        },
        {
            title: '舞动青春',
            episodes: '20话',
        },
        {
            title: '动画同好会',
            episodes: '7话',
        },
        {
            title: '3月的狮子 第二季',
            episodes: '28话',
        },
        {
            title: '魔法使的新娘（僅限台灣地區）',
            episodes: '7话',
        },
    ],
]
for (let i in time_table) {
    for (let j in time_table[i]) {
        time_table[i][j].image = require(`../assets/imgs/time_table/${i}/${i}_${j}.jpg`);
    }
}

let times = [
    '最新',
    '一',
    '二',
    '三',
    '四',
    '五',
    '六',
    '日',
]
export default {
    name: 'time_table',
    data() {
        return {
            time_table: time_table,
            times: times,
            buttonState: 0,
        }
    },
    methods: {
        changeState(index) {
            this.buttonState = index;
            this.times = [
                '最新',
                '一',
                '二',
                '三',
                '四',
                '五',
                '六',
                '日',
            ];
            if (index) {
                this.times[index] = '周' + this.times[index];
            }
        }
    }
}
</script>