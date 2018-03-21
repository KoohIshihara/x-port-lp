
riot.tag2('app', '<content></content> <content-work></content-work>', 'app,[data-is="app"]{display:block}', 'class="add-opacity"', function(opts) {
    var self = this;

    this.contents = {
      test: {
        title: 'title',
        body: 'body',
        label: 'link label',
      },
    };

});

riot.tag2('item-back', '<a class="warp-item f" id="back"><img src="./img/icon-back.svg"> <p class="ml12">戻る</p></a>', 'item-back,[data-is="item-back"]{display:block} item-back :hover,[data-is="item-back"] :hover{opacity:.2;transition:.2s;cursor:pointer} item-back .warp-item p,[data-is="item-back"] .warp-item p{font-size:14px;color:#fff;opacity:.6;font-weight:bold}', '', function(opts) {
    this.on('updated', function(){
      $('#back').on('click',function(){

        location.href = './#works';

      });
    });
});

riot.tag2('item-cooperation', '<div class="wrap-item" riot-style="background-image: url(&quot;{opts.content.src}&quot;);"></div>', 'item-cooperation,[data-is="item-cooperation"]{display:block;width:20%;height:10vh} item-cooperation .wrap-item,[data-is="item-cooperation"] .wrap-item{position:relative;height:100%;width:100%;overflow:hidden;background-repeat:no-repeat;background-size:contain;background-position:center} item-cooperation .box-1x1:before,[data-is="item-cooperation"] .box-1x1:before{content:"";display:block;padding-top:100%}@media only screen and (max-width:600px){ item-cooperation,[data-is="item-cooperation"]{width:100%;height:10vh} item-cooperation .wrap-item,[data-is="item-cooperation"] .wrap-item{margin-bottom:0;background-size:contain}}', 'class="my32"', function(opts) {
});

riot.tag2('item-guest', '<div class="wrap-item f"> <div class="wrap-img"><img riot-src="{opts.content.src}"></div> <div class="wrap-info ml8"> <div class="wrap-name"> <p class="name">{opts.content.name}</p> </div> <p class="about">{opts.content.about}</p> </div> </div>', 'item-guest,[data-is="item-guest"]{display:block;width:50%} item-guest .wrap-item .wrap-img,[data-is="item-guest"] .wrap-item .wrap-img{width:20%} item-guest .wrap-item .wrap-img img,[data-is="item-guest"] .wrap-item .wrap-img img{width:100%} item-guest .wrap-item .wrap-info,[data-is="item-guest"] .wrap-item .wrap-info{width:80%} item-guest .wrap-item .wrap-info p,[data-is="item-guest"] .wrap-item .wrap-info p{color:#FFF;letter-spacing:.5px} item-guest .wrap-item .wrap-info .wrap-name .name,[data-is="item-guest"] .wrap-item .wrap-info .wrap-name .name{font-size:20px;font-weight:bold;line-height:1.5} item-guest .wrap-item .wrap-info .about,[data-is="item-guest"] .wrap-item .wrap-info .about{font-size:14px;opacity:.85}@media only screen and (max-width:600px){ item-guest,[data-is="item-guest"]{width:100%} item-guest .wrap-item .wrap-info .wrap-name .name,[data-is="item-guest"] .wrap-item .wrap-info .wrap-name .name{font-size:16px}}', 'class="s-mr0 mb20"', function(opts) {
});

riot.tag2('item-h2', '<div class="wrap-item"> <h2 riot-style="{opts.content.color};">{opts.content.label}</h2> </div>', 'item-h2,[data-is="item-h2"]{display:block} item-h2 .wrap-item h2,[data-is="item-h2"] .wrap-item h2{font-size:4vw;letter-spacing:2px;padding:.02em .5em;background:transparent;border-left:solid 5px #2B45F4}@media only screen and (max-width:600px){ item-h2 .wrap-item h2,[data-is="item-h2"] .wrap-item h2{font-size:24px}}@media only screen and (min-width:960px){ item-h2 .wrap-item h2,[data-is="item-h2"] .wrap-item h2{font-size:38.4px}}', '', function(opts) {
});

riot.tag2('item-label-detail', '<div class="wrap-item"> <div class="wrap-p"> <p class="px4 py8 no-marker">{opts.content}</p> </div> </div>', 'item-label-detail,[data-is="item-label-detail"]{display:block} item-label-detail .wrap-item .wrap-p,[data-is="item-label-detail"] .wrap-item .wrap-p{display:inline-block;position:relative} item-label-detail .wrap-item .wrap-p p,[data-is="item-label-detail"] .wrap-item .wrap-p p{display:inline;color:#FFF !important;font-size:16px;font-weight:300;letter-spacing:1px;background:linear-gradient(to right, rgba(255,255,255,0) 50%, #2a45f4 50%);background-size:200%;background-position:-100% 0;transition:.5s ease-in-out}', 'class="mb12"', function(opts) {
});

riot.tag2('item-label-event', '<div class="wrap-item"> <div class="wrap-p"> <p class="px4 py1 no-marker">{opts.content}</p> </div> </div>', 'item-label-event,[data-is="item-label-event"]{display:block} item-label-event .wrap-item .wrap-p,[data-is="item-label-event"] .wrap-item .wrap-p{display:inline-block;left:-4px;position:relative} item-label-event .wrap-item .wrap-p p,[data-is="item-label-event"] .wrap-item .wrap-p p{display:inline;color:#2A45F4;font-size:3vw;font-weight:700;letter-spacing:2px;background:linear-gradient(to right, rgba(255,255,255,0) 50%, #fff 50%);background-size:200%;background-position:-100% 0;transition:.5s ease-in-out}@media only screen and (max-width:600px){ item-label-event .wrap-item .wrap-p,[data-is="item-label-event"] .wrap-item .wrap-p{left:-2px} item-label-event .wrap-item .wrap-p p,[data-is="item-label-event"] .wrap-item .wrap-p p{font-size:22px}}@media only screen and (min-width:960px){ item-label-event .wrap-item .wrap-p p,[data-is="item-label-event"] .wrap-item .wrap-p p{font-size:28.8px}}', 'class="mb32"', function(opts) {
});

riot.tag2('item-label-top', '<div class="wrap-item"> <div class="wrap-p"> <p class="no-top-marker pl12 pr10 py3">{opts.content} </p> </div> </div>', 'item-label-top,[data-is="item-label-top"]{display:block} item-label-top .wrap-item .wrap-p,[data-is="item-label-top"] .wrap-item .wrap-p{display:inline-block;position:relative} item-label-top .wrap-item .wrap-p p,[data-is="item-label-top"] .wrap-item .wrap-p p{display:inline;color:#ffffff;font-size:4vw;font-weight:bold;letter-spacing:2px;background:linear-gradient(to right, rgba(255,255,255,0) 50%, #2a45f4 50%);background-size:200%;background-position:-100% 0;transition:.5s ease-in-out}@media only screen and (max-width:600px){ item-label-top .wrap-item .wrap-p p,[data-is="item-label-top"] .wrap-item .wrap-p p{font-size:5vw}}@media only screen and (min-width:960px){ item-label-top .wrap-item .wrap-p p,[data-is="item-label-top"] .wrap-item .wrap-p p{font-size:38.4px}}', '', function(opts) {
});

riot.tag2('item-list', '<div class="wrap-item f mb24"> <p class="mr20 num">{opts.content.num}</p> <p class="text">{opts.content.content}</p> </div>', 'item-list,[data-is="item-list"]{display:block} item-list .wrap-item .num,[data-is="item-list"] .wrap-item .num{height:32px;transform:scale(1.3);vertical-align:top;opacity:1}@media only screen and (max-width:600px){ item-list .wrap-item .num,[data-is="item-list"] .wrap-item .num{transform:scale(1.3)}}', '', function(opts) {
});

riot.tag2('item-map', '<div class="gmap"> <iframe src="./map.html" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen></iframe> </div> <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC0woFW-WOulJm36nrAMt5WRMDmALuXUg4&amp;callback=initMap" async></script>', 'item-map,[data-is="item-map"]{display:block} item-map .gmap,[data-is="item-map"] .gmap{position:relative;padding-bottom:56.25%;padding-top:30px;height:0;overflow:hidden} item-map .gmap iframe,[data-is="item-map"] .gmap iframe{position:absolute;top:0;left:0;width:100%;height:100%}@media only screen and (max-width:600px){ item-map .gmap iframe,[data-is="item-map"] .gmap iframe{width:100vw}}', 'class="py20"', function(opts) {
    function initMap() {

      var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
    }
});

riot.tag2('item-time-event', '<div class="wrap-item f"> <div class="wrap-circle"> <div class="circle"></div> </div> <div class="wrap-info"> <p class="mt8">{opts.content.time}</p> <h3 class="mt4">{opts.content.label}</h3> </div> </div>', 'item-time-event,[data-is="item-time-event"]{display:block} item-time-event .wrap-item .wrap-circle .circle,[data-is="item-time-event"] .wrap-item .wrap-circle .circle{position:relative;top:1.6px;left:-14.5px;display:block;width:26px;height:26px;background:#FFF;outline:solid 10px #2a45f4;border:solid 4px rgba(42,69,244,0.5)} item-time-event .wrap-item .wrap-info p,[data-is="item-time-event"] .wrap-item .wrap-info p{font-size:16px;font-weight:bold;color:#FFF;opacity:.85} item-time-event .wrap-item .wrap-info h3,[data-is="item-time-event"] .wrap-item .wrap-info h3{font-size:28px;color:#FFF}@media only screen and (max-width:600px){ item-time-event .wrap-item .wrap-circle .circle,[data-is="item-time-event"] .wrap-item .wrap-circle .circle{position:relative;top:1.6px;left:-8px;display:block;width:14px;height:14px;background:#FFF;outline:solid 10px #2a45f4;border:solid 2px rgba(42,69,244,0.4)} item-time-event .wrap-item .wrap-info p,[data-is="item-time-event"] .wrap-item .wrap-info p{margin-top:0} item-time-event .wrap-item .wrap-info h3,[data-is="item-time-event"] .wrap-item .wrap-info h3{font-size:20px}}', '', function(opts) {
});

riot.tag2('item-work', '<a class="wrap-item box-1x1" href="{opts.content.href}" riot-style="background-image: url(&quot;{opts.content.src}&quot;);"></a>', 'item-work,[data-is="item-work"]{display:block;width:19.8%;background:#efefef} item-work .wrap-item,[data-is="item-work"] .wrap-item{display:block;position:relative;width:100%;height:auto;overflow:hidden;background-repeat:no-repeat;background-size:cover;background-position:center} item-work .box-1x1:before,[data-is="item-work"] .box-1x1:before{content:"";display:block;padding-top:100%} item-work :hover,[data-is="item-work"] :hover{opacity:.2;transition:.2s}@media only screen and (max-width:600px){ item-work,[data-is="item-work"]{width:33%}}', 'class="mb2"', function(opts) {
});

riot.tag2('module-about', '<div class="wrap-module"> <item-h2 class="mb32" content="{h2}"></item-h2> <p class="mb32"> 「X-port」は慶應義塾大学SFC 学生有志による合同展示です。慶應義塾大学SFC X-Designプログラムに所属する学生を中心に、 計20点の研究成果物が展示されます。 本年度のテーマである「X-port」には、2つの意味が込められています。 </p> <wrap-list> <item-list each="{item in lists}" content="{item}"></item-list> </wrap-list> </div>', 'module-about,[data-is="module-about"]{display:block;background:#2B45F4} module-about .wrap-module,[data-is="module-about"] .wrap-module{width:92%;max-width:948px;margin:0 auto} module-about .wrap-module p,[data-is="module-about"] .wrap-module p{font-size:18px;color:#fff;letter-spacing:1px;line-height:1.6;font-weight:bold;opacity:.85}@media only screen and (max-width:600px){ module-about .wrap-module p,[data-is="module-about"] .wrap-module p{font-size:15px}}', 'class="pt40 pb80"', function(opts) {
    this.h2 = {
      label: 'X-portとは',
      color: 'color:#fff; border-color:#fff;',
    }

    this.lists = [
      {num: '1', content: '一見バラバラに見えるものが、集う港 (port) としての展示を行う。'},
      {num: '2', content: '出力 (export) の意の通り、「これまでデザインされてこなかった未知なる領域 = X」の研究成果を出力し、社会との接点を持つ。'},
    ];
});

riot.tag2('module-content-work', '<div class="wrap-module pb80"> <h2>{opts.content.label}</h2> <div class="wrap-explain mt20"> <p>{opts.content.explain}</p> </div> <div class="wrap-prof mt12"> <p>{opts.content.name}</p> <p>{opts.content.belonging}</p> </div> <div class="wrap-img mt40"><img class="mb40" each="{item in imgs}" riot-src="{item}"></div> </div>', 'module-content-work,[data-is="module-content-work"]{display:block;background:#2B45F4} module-content-work .wrap-module,[data-is="module-content-work"] .wrap-module{width:60%;max-width:948px;margin:0 auto} module-content-work .wrap-module h2,[data-is="module-content-work"] .wrap-module h2{color:#fff} module-content-work .wrap-module .wrap-explain p,[data-is="module-content-work"] .wrap-module .wrap-explain p{color:#FFF;font-weight:lighter} module-content-work .wrap-module .wrap-prof p,[data-is="module-content-work"] .wrap-module .wrap-prof p{color:#FFF;text-align:right;font-weight:lighter}@media only screen and (max-width:600px){ module-content-work .wrap-module,[data-is="module-content-work"] .wrap-module{padding-bottom:0;width:92%} module-content-work .wrap-module .wrap-img img,[data-is="module-content-work"] .wrap-module .wrap-img img{margin-bottom:20px}}', 'class="pb80"', function(opts) {
    this.imgs = opts.content.imgs;

});

riot.tag2('module-detail', '<div class="wrap-module py20"> <item-h2 class="mb24" content="{h2}"></item-h2> <div class="wrap-content"> <item-label-detail content="日時"></item-label-detail> <p>2018.03.24(sat) – 25(sun)</p> <p>11:00～18:00 (最終日は19:00まで)</p> </div> <div class="wrap-content"> <item-label-detail content="会場"></item-label-detail> <p>YCC ヨコハマ創造都市センター</p> <p>(3Fイベントスペース)</p> <p><a target="_blank" href="https://goo.gl/maps/3jjwRbB8C5o">〒231-8315 神奈川県横浜市中区本町6丁目50-1</a></p> <p>みなとみらい線「馬車道駅」1B出口から直結</p> <p>JR・市営地下鉄「桜木町駅」より徒歩5分</p> <item-map class="my24"></item-map> </div> <div class="wrap-content"> <item-label-detail content="入場料"></item-label-detail> <p>無料</p> </div> <div class="wrap-content"> <item-label-detail content="お問い合わせ"></item-label-detail> <p>Twitter: <a target="_blank" href="https://twitter.com/xport2018">@xport2018</a></p> <p>Facebook: <a target="_blank" href="https://www.facebook.com/Xport2018/">Xport2018</a></p> </div> <div class="wrap-content"> <item-label-detail content="協賛企業"></item-label-detail> <p class="mb24">この展示会は、モノづくりに励む学生たちを応援する様々な企業よりご支援頂いております。</p> <div class="wrap-cooperations f flex-wrap flex-row flex-center mt40"> <item-cooperation each="{item in cooperations}" content="{item}"></item-cooperation> </div> </div> <div class="wrap-content"></div> </div>', 'module-detail,[data-is="module-detail"]{display:block;background:#fff} module-detail .wrap-module,[data-is="module-detail"] .wrap-module{width:92%;max-width:948px;margin:0 auto} module-detail .wrap-module .wrap-content,[data-is="module-detail"] .wrap-module .wrap-content{margin-bottom:32px} module-detail .wrap-module .wrap-content p,[data-is="module-detail"] .wrap-module .wrap-content p{color:#2A45F4;font-size:20px;letter-spacing:1px;line-height:1.8} module-detail .wrap-module .wrap-content a,[data-is="module-detail"] .wrap-module .wrap-content a{font-size:20px;color:#2A45F4;font-weight:bold;border-bottom:solid 2px;line-height:1.8} module-detail .wrap-module .wrap-content .howto,[data-is="module-detail"] .wrap-module .wrap-content .howto{font-size:16px}@media only screen and (max-width:600px){ module-detail .wrap-module .wrap-content p,[data-is="module-detail"] .wrap-module .wrap-content p{font-size:15px} module-detail .wrap-module .wrap-content a,[data-is="module-detail"] .wrap-module .wrap-content a{font-size:15px} module-detail .wrap-module .wrap-content .howto,[data-is="module-detail"] .wrap-module .wrap-content .howto{font-size:13px}}', 'class="py40"', function(opts) {
    this.h2 = {
      label: '展示詳細',
      color: 'color:#2A45F4; border-color:#2A45F4;',
    };

    this.labels = {

    };

    this.cooperations = [
      {
        label: 'moff',
        src: './img/cooperation/dricos@2x.png',
      },
      {
        label: 'moff',
        src: './img/cooperation/moff@2x.png',
      },
      {
        label: 'fabcross',
        src: './img/cooperation/fabcross@2x.png',
      },
      {
        label: 'trails',
        src: './img/cooperation/trails@2x.png',
      },

    ];
});

riot.tag2('module-event', '<div class="wrap-module"> <item-h2 class="mb16" content="{h2}"></item-h2> <div class="wrap-events mt28"> <item-label-event class="mb28" content="03.24th (sat)"></item-label-event> <item-time-event class="mb20" content="{times[0]}"></item-time-event> <div class="wrap-guests ml22 mb80"> <item-guest class="mb12" each="{item in guests1}" content="{item}"></item-guest> </div> <item-label-event class="mb28" content="03.25th (sun)"></item-label-event> <item-time-event class="mb20" content="{times[1]}"></item-time-event> <div class="wrap-guests ml22 mb80"> <item-guest class="mb12" each="{item in guests2}" content="{item}"></item-guest> </div> </div> </div>', 'module-event,[data-is="module-event"]{display:block;background:#2B45F4} module-event .wrap-module,[data-is="module-event"] .wrap-module{width:92%;max-width:948px;margin:0 auto} module-event .wrap-module .wrap-events,[data-is="module-event"] .wrap-module .wrap-events{border-left:solid rgba(255,255,255,0.6) 4px} module-event .wrap-module .wrap-events .wrap-guests,[data-is="module-event"] .wrap-module .wrap-events .wrap-guests{display:flex;flex-wrap:wrap}@media only screen and (max-width:600px){ module-event .wrap-module .wrap-events,[data-is="module-event"] .wrap-module .wrap-events{border-left:solid rgba(255,255,255,0.6) 2px} module-event .wrap-module .wrap-events .wrap-guests,[data-is="module-event"] .wrap-module .wrap-events .wrap-guests{display:block;margin-left:14px}}', 'class="pt40 pb40"', function(opts) {
    this.h2 = {
      label: 'トークイベント',
      color: 'color:#fff; border-color:#fff;',
    }

    this.times = [
      { time: '16:00-17:30', label: '創造性と機械学習' },
      { time: '14:00-15:30', label: '研究と創職' },
    ];

    this.guests1 = [
      { name: '松川昌平', about: '慶應義塾大学環境情報学部准教授', src: './img/guests/matsukawa.jpg'},
      { name: '徳井直生', about: '(株)Qosmo代表取締役 / メディアアーティスト / DJ', src: './img/guests/tokui.jpg'},
    ];

    this.guests2 = [
      { name: '田中浩也', about: '慶應義塾大学環境情報学部教授', src: './img/guests/tanaka.jpg'},
      { name: '秋吉浩気', about: '株式会社VUILD 代表取締役', src: './img/guests/akiyoshi.jpg'},
      { name: '佐々木雅宏', about: '合同会社アーキロイド 共同代表', src: './img/guests/sasaki.jpg'},

      { name: '髙橋征資', about: 'バイバイワールド株式会社 代表取締役', src: './img/guests/takahashi.jpg'},

    ];
});

riot.tag2('module-footer', '<div class="wrap-module py20"> <div class="wrap-p"> <p class="name">慶應義塾大学SFC 学生有志展示会 2018</p> <p>お問い合わせ: Twitter: <a target="_blank" href="https://twitter.com/xport2018">@xport2018</a> / Facebook: <a target="_blank" href="https://www.facebook.com/Xport2018/">Xport2018</a></p> <p>Copyright © SFC X-port 2018. All Rights Reserved.</p> </div> </div>', 'module-footer,[data-is="module-footer"]{display:block;background:#EFEFEF;width:100%;height:18vh} module-footer .wrap-module,[data-is="module-footer"] .wrap-module{position:relative;width:92%;height:100%;max-width:948px;margin:0 auto} module-footer .wrap-module .wrap-p,[data-is="module-footer"] .wrap-module .wrap-p{width:100%;position:absolute;bottom:5%} module-footer .wrap-module .wrap-p .name,[data-is="module-footer"] .wrap-module .wrap-p .name{font-weight:bold} module-footer .wrap-module .wrap-p p,[data-is="module-footer"] .wrap-module .wrap-p p{font-size:12px;line-height:1.8;color:#000;opacity:.6} module-footer .wrap-module .wrap-p a,[data-is="module-footer"] .wrap-module .wrap-p a{border-bottom:solid 1px}@media only screen and (max-width:600px){ module-footer .wrap-module .wrap-p p,[data-is="module-footer"] .wrap-module .wrap-p p{font-size:10px}}', '', function(opts) {
});

riot.tag2('module-header-work', '<div class="wrap-module"> <item-back></item-back> </div>', 'module-header-work,[data-is="module-header-work"]{display:block} module-header-work .wrap-module,[data-is="module-header-work"] .wrap-module{width:92%;max-width:948px;margin:0 auto}@media only screen and (max-width:600px){ module-header-work .wrap-module p,[data-is="module-header-work"] .wrap-module p{font-size:15px}}', 'class="pt40 pb24"', function(opts) {
});

riot.tag2('module-loading', '<div class="wrap-module f fh"> <p class="text">Now Loading</p> <div class="rect"></div> </div>', 'module-loading,[data-is="module-loading"]{display:block;background:#FFF;width:100%;height:100vh;position:fixed;left:0;top:0;z-index:100} module-loading .wrap-module,[data-is="module-loading"] .wrap-module{height:100%;position:relative;opacity:.5} module-loading .wrap-module .text,[data-is="module-loading"] .wrap-module .text{position:absolute;color:#2A45F4} module-loading .wrap-module .rect,[data-is="module-loading"] .wrap-module .rect{position:absolute;display:block;width:160px;height:160px;border:solid #2A45F4;border-radius:8px;animation-name:loadingAnim;animation-duration:1.2s;animation-iteration-count:infinite}@keyframes loadingAnim{ from{transform:rotate(0deg)} to{transform:rotate(360deg)}}', 'id="loadingWrapper"', function(opts) {
});

riot.tag2('module-top', '<div class="wrap-module"> <div class="bg-cover-top"></div> <div class="wrap-labels"> <item-label-top content="慶應義塾大学SFC"></item-label-top> <item-label-top class="mt8" content="学生有志 合同展示 2018"></item-label-top> <h1 class="mt10 mb20">X-port</h1> <item-label-top content="2018.03.24th(sat) – 25th(sun)"></item-label-top> <item-label-top class="mt12" content="YCC ヨコハマ創造都市センター"></item-label-top> </div> </div>', 'module-top,[data-is="module-top"]{display:block} module-top .wrap-module,[data-is="module-top"] .wrap-module{position:relative;z-index:0;width:100%;height:135vh;background-image:url("img/hiro-pc@2x.png");background-repeat:no-repeat;background-size:cover;background-position:bottom} module-top .wrap-module .bg-cover-top,[data-is="module-top"] .wrap-module .bg-cover-top{position:absolute;z-index:1;width:100%;height:135vh;background:#FFF;padding-top:-100px} module-top .wrap-module .wrap-labels,[data-is="module-top"] .wrap-module .wrap-labels{position:relative;z-index:2;width:92%;margin:0 auto;padding-top:5vh} module-top .wrap-module .wrap-labels h1,[data-is="module-top"] .wrap-module .wrap-labels h1{font-size:15vw;letter-spacing:2px;color:#2B45F4}@media only screen and (max-width:600px){ module-top .wrap-module,[data-is="module-top"] .wrap-module{background-image:url("img/sp/hiro-sp@2x.png")} module-top .wrap-module .wrap-labels,[data-is="module-top"] .wrap-module .wrap-labels{padding-top:10vh} module-top .wrap-module .wrap-labels h1,[data-is="module-top"] .wrap-module .wrap-labels h1{font-size:25vw}}@media only screen and (min-width:960px){ module-top .wrap-module .wrap-labels h1,[data-is="module-top"] .wrap-module .wrap-labels h1{font-size:144px} module-top .wrap-module .wrap-labels item-label-top,[data-is="module-top"] .wrap-module .wrap-labels item-label-top{font-size:43.2px}}', '', function(opts) {
    this.on('mount', function(){
      $('#loadingWrapper').delay(800).fadeToggle(800);
      setTimeout(function(){
        fireAnim();
      }, 800);
    });
});

riot.tag2('module-works', '<div class="wrap-module"> <item-h2 class="mb32" content="{h2}"></item-h2> <div class="wrap-works f flex-wrap flex-row flex-between"> <item-work each="{item in works}" content="{item}"></item-work> <item-work class="hide" each="{item in empty}" content="{item}" style="background: rgba(42, 69, 244);"></item-work> </div> </div>', 'module-works,[data-is="module-works"]{display:block;background:#fff} module-works .wrap-module,[data-is="module-works"] .wrap-module{width:92%;max-width:948px;margin:0 auto} module-works .wrap-module p,[data-is="module-works"] .wrap-module p{color:#fff;letter-spacing:1px} module-works .wrap-module .wrap-works .hide,[data-is="module-works"] .wrap-module .wrap-works .hide{background:#ffffff}@media only screen and (max-width:600px){ module-works .hide,[data-is="module-works"] .hide{display:none}}', 'class="pt40 pb80"', function(opts) {
    this.h2 = {
      label: '展示作品 (順次公開)',
      color: 'color:#2A45F4; border-color:#2A45F4;',
    };

    this.works = topContents;

    this.empty = [
      {
        label: 'dummy flex',
        src: '',
      },
    ]

});

riot.tag2('page-members', '<h2>{opts.content.name}</h2> <p>{opts.content.intro}</p>', '', '', function(opts) {
console.log(opts);
});

riot.tag2('page-test', '', '', '', function(opts) {
    console.log(opts);

});

riot.tag2('page-top', '<module-top></module-top> <module-about></module-about> <module-works id="works"></module-works> <module-event></module-event> <module-detail></module-detail> <module-footer></module-footer>', 'page-top,[data-is="page-top"]{display:block} page-top ::selection,[data-is="page-top"] ::selection{color:#FFFF00;background-color:#212121}', '', function(opts) {

    this.on('mount', function(){

      if(GLOB.scrollPoint){
        TO_SCROLL.toScroll(GLOB.scrollPoint);
        scrollPoint = false;
      }

      setTimeout(function() {
        $('app').addClass('not-opacity');
      }, 400);
    });
});

riot.tag2('page-work', '<module-header-work></module-header-work> <module-content-work content="{this.content}"></module-content-work> <module-footer></module-footer>', 'page-work,[data-is="page-work"]{overflow:scroll;position:fixed;width:100%;height:100%;min-height:100vh;top:0;left:0;display:block} page-work ::selection,[data-is="page-work"] ::selection{color:#FFFF00;background:#2B45F4} page-work module-header-work,[data-is="page-work"] module-header-work{background:#2B45F4} page-work module-content-work,[data-is="page-work"] module-content-work{background:#2B45F4} page-work module-footer,[data-is="page-work"] module-footer{display:block;position:absolute}', 'class="pb40"', function(opts) {
    this.content = opts.__proto__.content;

    this.on('updated', function(){
      GLOB.scrollPoint = 'module-works';

      setTimeout(function() {
        $('app').addClass('not-opacity');
      }, 400);
    });
});