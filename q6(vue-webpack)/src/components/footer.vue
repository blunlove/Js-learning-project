<template>
    <div class="footer_back">
        <div class="footer">
            <div class="footer_top">
                <div v-for="menu in footer_top_menu" :class="'footer_top_menu footer_top_' + menu.name">
                    <div :class="'footer_top_' + menu.name + '_plate'">
                        <div v-for="plate in menu.plates" :class="'footer_top_' + menu.name + '_plate_' + plate.name">
                            <div v-for="content in plate.contents">
                                <span>{{ content }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer_top_menu footer_top_download">
                    <div class="footer_top_download_plate">
                        <div class="footer_top_download_PhoneClient">
                            <div></div>
                            <div>手机端下载</div>
                        </div>
                        <div class="footer_top_download_MicroBlog">
                            <div class="footer_top_download_MicroBlog_erweima"></div>
                            <div>新浪微博</div>
                        </div>
                        <div class="footer_top_download_WeChat">
                            <div class="footer_top_download_WeChat_erweima"></div>
                            <div>官方微信</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer_tail">
                <div class="footer_tail_left">
                    <div class="footer_tail_left_icon"></div>
                </div>
                <div class="footer_tail_right">
                    <div class="footer_tail_right_word1">
                        广播电视节目制作经营许可证：（沪）字第1248号 | 网络文化经营许可证：沪网文[2013]0480-056号 | 信息网络传
                        播视听节目许可证：0910417 | 互联网ICP备案 :沪ICP备13002172号-3 沪ICP证：沪B2-20100043 | 违法不良信
                        息举报邮箱：help@bilibili.com |违法不良信息举报电话：4000233233转3
                    </div>
                    <div class="footer_tail_right_word2">
                        <span><div class="footer_tail_right_icon1"></div>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp上海互联网举报中心</span> | 
                        <span>12318 全国文化市场举报网站</span> | 
                        <span><div class="footer_tail_right_icon2"></div>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp沪公网安备 31011502001911号</span> | 
                        <span>儿童色情信息举报专区</span>
                    </div>
                    <div class="footer_tail_right_word3">
                        <span>网上有害信息举报专区：<div class="footer_tail_right_icon3"></div> 中国互联网违法和不良信息举报中心</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    let footer_top_menu = [
        { name: 'bilibili', plates: [
            { name: 'title', contents: [ 'bilibili' ] },
            { name: 'first', contents: [ '关于我们', '联系我们' ] },
            { name: 'second', contents: [ '友情链接', '加入我们' ] },
            { name: 'third', contents: [ '哔哩哔哩周边', '官方认证' ] },
        ]},
        { name: 'portal', plates: [
            { name: 'title', contents: [ '传送门' ] },
            { name: 'first', contents: [ '帮助中心', '侵权申诉', '用户反馈论坛' ] },
            { name: 'second', contents: [ '高级弹幕', '分院帽计划', '壁纸站' ] },
            { name: 'third', contents: [ '活动专题页', '活动中心', '名人堂' ] },
        ]},
    ];
    export default {
        name: 'header',
        data() {
            return {
                footer_top_menu: footer_top_menu,
            }
        },
    }
</script>