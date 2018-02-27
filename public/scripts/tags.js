
riot.tag2('app', '<content></content>', '', '', function(opts) {
    var self = this;

    this.contents = {
      test: {
        title: 'title',
        body: 'body',
        label: 'link label',
      },
    };
});

riot.tag2('item-guest', '<div class="wrap-item f"> <div class="wrap-img"><img riot-src="{opts.content.src}"></div> <div class="wrap-info ml12"> <div class="warp-name f fm"> <p class="name">{opts.content.name}</p> </div> <p class="about">{opts.content.about}</p> </div> </div>', 'item-guest,[data-is="item-guest"]{display:block} item-guest .wrap-item .wrap-img,[data-is="item-guest"] .wrap-item .wrap-img{width:64px} item-guest .wrap-item .wrap-info p,[data-is="item-guest"] .wrap-item .wrap-info p{color:#FFF;letter-spacing:1px} item-guest .wrap-item .wrap-info .warp-name,[data-is="item-guest"] .wrap-item .wrap-info .warp-name{height:60%} item-guest .wrap-item .wrap-info .warp-name .name,[data-is="item-guest"] .wrap-item .wrap-info .warp-name .name{font-size:16px;font-weight:bold} item-guest .wrap-item .wrap-info .about,[data-is="item-guest"] .wrap-item .wrap-info .about{font-size:14px}', 'class="s-mr0 mr40 mb20"', function(opts) {
});

riot.tag2('item-h2', '<div class="wrap-item"> <h2 riot-style="{opts.content.color};">{opts.content.label}</h2> </div>', 'item-h2,[data-is="item-h2"]{display:block} item-h2 .wrap-item h2,[data-is="item-h2"] .wrap-item h2{font-size:3vw;letter-spacing:2px;padding:.02em .5em;background:transparent;border-left:solid 5px #2B45F4}@media only screen and (max-width:600px){ item-h2 .wrap-item h2,[data-is="item-h2"] .wrap-item h2{font-size:24px}}', '', function(opts) {
});

riot.tag2('item-label-detail', '<div class="wrap-item"> <div class="wrap-p"> <p class="px3 py3">{opts.content}</p> </div> </div>', 'item-label-detail,[data-is="item-label-detail"]{display:block} item-label-detail .wrap-item .wrap-p,[data-is="item-label-detail"] .wrap-item .wrap-p{display:inline-block;position:relative} item-label-detail .wrap-item .wrap-p p,[data-is="item-label-detail"] .wrap-item .wrap-p p{display:inline;color:#FFF !important;font-size:16px;font-weight:300;letter-spacing:1px;background:linear-gradient(to right, rgba(255,255,255,0) 50%, #2a45f4 50%);background-size:200%;background-position:-100% 0}', 'class="mb12"', function(opts) {
});

riot.tag2('item-label-event', '<div class="wrap-item"> <div class="wrap-p"> <p class="px4 py1">{opts.content}</p> </div> </div>', 'item-label-event,[data-is="item-label-event"]{display:block} item-label-event .wrap-item .wrap-p,[data-is="item-label-event"] .wrap-item .wrap-p{display:inline-block;position:relative} item-label-event .wrap-item .wrap-p p,[data-is="item-label-event"] .wrap-item .wrap-p p{display:inline;color:#2A45F4;font-size:18px;font-weight:700;letter-spacing:2px;background:linear-gradient(to right, rgba(255,255,255,0) 50%, #fff 50%);background-size:200%;background-position:-100% 0}', '', function(opts) {
});

riot.tag2('item-label-top', '<div class="wrap-item"> <div class="wrap-p"> <p class="pl2 pr10 py3">{opts.content}</p> </div> </div>', 'item-label-top,[data-is="item-label-top"]{display:block} item-label-top .wrap-item .wrap-p,[data-is="item-label-top"] .wrap-item .wrap-p{display:inline-block;position:relative} item-label-top .wrap-item .wrap-p p,[data-is="item-label-top"] .wrap-item .wrap-p p{display:inline;color:#ffffff;font-size:4vw;font-weight:bold;letter-spacing:2px;background:linear-gradient(to right, rgba(255,255,255,0) 50%, #2a45f4 50%);background-size:200%;background-position:-100% 0}@media only screen and (max-width:600px){ item-label-top .wrap-item .wrap-p p,[data-is="item-label-top"] .wrap-item .wrap-p p{font-size:5vw}}', '', function(opts) {
});

riot.tag2('item-list', '<div class="wrap-item f"> <p class="num pt3">{opts.content.num}</p> <p class="ml6">{opts.content.content}</p> </div>', 'item-list,[data-is="item-list"]{display:block} item-list .wrap-item .num,[data-is="item-list"] .wrap-item .num{transform:scale(1.1)}', 'class="mb12"', function(opts) {
});

riot.tag2('item-time-event', '<div class="wrap-item f"> <div class="wrap-cercle"> <div class="circle"></div> </div> <div class="wrap-info ml12"> <p>{opts.content.time}</p> <h3 class="mt8">{opts.content.label}</h3> </div> </div>', 'item-time-event,[data-is="item-time-event"]{display:block} item-time-event .wrap-item .wrap-cercle .circle,[data-is="item-time-event"] .wrap-item .wrap-cercle .circle{position:relative;top:1.6px;left:-7px;display:block;width:12px;height:12px;background:#FFF} item-time-event .wrap-item .wrap-info p,[data-is="item-time-event"] .wrap-item .wrap-info p{font-size:16px;color:#FFF} item-time-event .wrap-item .wrap-info h3,[data-is="item-time-event"] .wrap-item .wrap-info h3{color:#FFF}', '', function(opts) {
});

riot.tag2('item-work', '<div class="wrap-item box-1x1" riot-style="background-image: url(&quot;{opts.content.src}&quot;);"></div>', 'item-work,[data-is="item-work"]{display:block;width:19.8%} item-work .wrap-item,[data-is="item-work"] .wrap-item{position:relative;width:100%;height:auto;background:#EEE;overflow:hidden;background-repeat:no-repeat;background-size:cover;background-position:center} item-work .box-1x1:before,[data-is="item-work"] .box-1x1:before{content:"";display:block;padding-top:100%}@media only screen and (max-width:600px){ item-work,[data-is="item-work"]{width:33%}}', 'class="mb2"', function(opts) {
});

riot.tag2('module-about', '<div class="wrap-module"> <item-h2 class="mb16" content="{h2}"></item-h2> <p class="mb16">本年度のテーマである「X-port」には2つの意味が込められています。</p> <wrap-list> <item-list each="{item in lists}" content="{item}"></item-list> </wrap-list> </div>', 'module-about,[data-is="module-about"]{display:block;background:#2B45F4} module-about .wrap-module,[data-is="module-about"] .wrap-module{width:92%;max-width:948px;margin:0 auto} module-about .wrap-module p,[data-is="module-about"] .wrap-module p{color:#fff;letter-spacing:1px;font-weight:bold}', 'class="py40"', function(opts) {
    this.h2 = {
      label: 'X-portとは',
      color: 'color:#fff; border-color:#fff;',
    }

    this.lists = [
      {num: '1', content: '一見バラバラに見えるものが、集う港 (port)としての展示を行う。'},
      {num: '2', content: '出力 (export) の意の通り、「これまでデザインされてこなかった未知なる領域 = X」の研究成果を出力し、社会との接点を持つ。'},
    ];
});

riot.tag2('module-detail', '<div class="wrap-module py20"> <item-h2 class="mb16" content="{h2}"></item-h2> <div class="wrap-content"> <item-label-detail content="日時"></item-label-detail> <p>2018.03.24(sat) – 25(sun)</p> <p>11:00～18:00</p> </div> <div class="wrap-content"> <item-label-detail content="会場"></item-label-detail> <p>YCC ヨコハマ創造都市センター 3Fイベントスペース</p><a href="">神奈川県横浜市中区本町6-50-1</a> <p>みなとみらい線「馬車道駅」1B出口から直結 / JR・市営地下鉄「桜木町駅」より徒歩5分 </p> </div> <div class="wrap-content"> <item-label-detail content="入場料"></item-label-detail> <p>無料</p> </div> <div class="wrap-content"> <item-label-detail content="お問い合わせ"></item-label-detail><a href="mailto:x-port@example.com">x-port@example.com</a> </div> <div class="wrap-content"> <item-label-detail content="協賛"></item-label-detail><img src="./img/cooperation/kooh.jpg"> </div> <div class="wrap-content"> <p>マップはまだ実装してないよ</p> </div> </div>', 'module-detail,[data-is="module-detail"]{display:block;background:#fff} module-detail .wrap-module,[data-is="module-detail"] .wrap-module{width:92%;max-width:948px;margin:0 auto} module-detail .wrap-module .wrap-content,[data-is="module-detail"] .wrap-module .wrap-content{margin-bottom:16px} module-detail .wrap-module .wrap-content p,[data-is="module-detail"] .wrap-module .wrap-content p{color:#2A45F4;font-size:20px;letter-spacing:1px;font-weight:bold;line-height:1.6} module-detail .wrap-module .wrap-content a,[data-is="module-detail"] .wrap-module .wrap-content a{font-size:20px;color:#2A45F4;font-weight:bold;border-bottom:solid .4px;line-height:1.6}@media only screen and (max-width:600px){ module-detail .wrap-module .wrap-content p,[data-is="module-detail"] .wrap-module .wrap-content p{font-size:15px} module-detail .wrap-module .wrap-content a,[data-is="module-detail"] .wrap-module .wrap-content a{font-size:15px}}', 'class="py40"', function(opts) {
    this.h2 = {
      label: '展示会詳細',
      color: 'color:#2A45F4; border-color:#2A45F4;',
    };

    this.labels = {

    };
});

riot.tag2('module-event', '<div class="wrap-module"> <item-h2 class="mb16" content="{h2}"></item-h2> <div class="wrap-events mt28"> <item-label-event class="mb28" content="03.24th (sat)"></item-label-event> <item-time-event class="mb20" content="{times[0]}"></item-time-event> <div class="wrap-guests ml22 mb40"> <item-guest class="mb12" each="{item in guests1}" content="{item}"></item-guest> </div> <item-label-event class="mb28" content="03.25th (sun)"></item-label-event> <item-time-event class="mb20" content="{times[0]}"></item-time-event> <div class="wrap-guests ml22 mb40"> <item-guest class="mb12" each="{item in guests1}" content="{item}"></item-guest> </div> <item-time-event class="mb20" content="{times[0]}"></item-time-event> <div class="wrap-guests ml22 mb40"> <item-guest class="mb12" each="{item in guests1}" content="{item}"></item-guest> </div> </div> </div>', 'module-event,[data-is="module-event"]{display:block;background:#2B45F4} module-event .wrap-module,[data-is="module-event"] .wrap-module{width:92%;max-width:948px;margin:0 auto} module-event .wrap-module .wrap-events,[data-is="module-event"] .wrap-module .wrap-events{border-left:solid #fff 2px} module-event .wrap-module .wrap-events .wrap-guests,[data-is="module-event"] .wrap-module .wrap-events .wrap-guests{display:flex;flex-wrap:wrap}@media only screen and (max-width:600px){ module-event .wrap-guests,[data-is="module-event"] .wrap-guests{display:block}}', 'class="pt40 pb40"', function(opts) {
    this.h2 = {
      label: 'トークイベント',
      color: 'color:#fff; border-color:#fff;',
    }

    this.times = [
      { time: '14:00-15:00', label: '研究と作品の“際”' },
      { time: '14:00-15:00', label: '研究と創職' },
    ];

    this.guests1 = [
      { name: '石原航', about: 'すごいひと。とってもえらいひと', src: './img/guests/akira.png'},
      { name: '石原航', about: 'すごいひと。とってもえらいひと', src: './img/guests/akira.png'},
      { name: '石原航', about: 'すごいひと。とってもえらいひと', src: './img/guests/akira.png'},
    ];
});

riot.tag2('module-footer', '<div class="wrap-module py20"> <p class="pb8">主催：慶應義塾大学湘南藤沢キャンパス（SFC）</p> <p>お問い合わせ：hogehoge@sfc.keio.ac.jp</p> <p class="copy">Copyright © 2018 Hoge Fuga of Hoge. All Rights Reserved.</p> </div>', 'module-footer,[data-is="module-footer"]{display:block;background:#EFEFEF;width:100%;height:30vh} module-footer .wrap-module,[data-is="module-footer"] .wrap-module{position:relative;width:92%;height:100%;max-width:948px;margin:0 auto} module-footer .wrap-module p,[data-is="module-footer"] .wrap-module p{color:#000} module-footer .wrap-module .copy,[data-is="module-footer"] .wrap-module .copy{width:100%;position:absolute;bottom:40px;text-align:center}', '', function(opts) {
});

riot.tag2('module-top', '<div class="wrap-module"> <div class="wrap-labels"> <item-label-top content="慶應義塾大学SFC"></item-label-top> <item-label-top class="mt8" content="X-Designプログラム 合同展示会"></item-label-top> <h1 class="my20">X-port</h1> <item-label-top content="2018.03.24th(sat) – 25th(sun)"></item-label-top> </div> </div>', 'module-top,[data-is="module-top"]{display:block} module-top .wrap-module,[data-is="module-top"] .wrap-module{width:100%;height:140vh;background-image:url("img/hiro-pc.jpg");background-repeat:no-repeat;background-size:cover;background-position:top} module-top .wrap-module .wrap-labels,[data-is="module-top"] .wrap-module .wrap-labels{width:90%;margin:0 auto;margin-top:48px} module-top .wrap-module .wrap-labels h1,[data-is="module-top"] .wrap-module .wrap-labels h1{font-size:15vw;letter-spacing:2px;color:#2B45F4}@media only screen and (max-width:600px){ module-top .wrap-module,[data-is="module-top"] .wrap-module{background-image:url("img/sp/hiro-top.jpg")} module-top .wrap-module .wrap-labels h1,[data-is="module-top"] .wrap-module .wrap-labels h1{font-size:23vw}}', '', function(opts) {
});

riot.tag2('module-works', '<div class="wrap-module"> <item-h2 class="mb16" content="{h2}"></item-h2> <div class="wrap-works f flex-wrap flex-between"> <item-work each="{item in works}" content="{item}"></item-work> </div> </div>', 'module-works,[data-is="module-works"]{display:block;background:#fff} module-works .wrap-module,[data-is="module-works"] .wrap-module{width:92%;max-width:948px;margin:0 auto} module-works .wrap-module p,[data-is="module-works"] .wrap-module p{color:#fff;letter-spacing:1px}', 'class="py40"', function(opts) {
    this.h2 = {
      label: '展示作品',
      color: 'color:#2A45F4; border-color:#2A45F4;',
    };

    this.works = [
      {
        label: '石原作品',
        src: './img/works/work-test.jpg',
      },
      {
        label: '石原作品',
        src: './img/works/work-test.jpg',
      },
      {
        label: '石原作品',
        src: './img/works/work-test.jpg',
      },
      {
        label: '石原作品',
        src: './img/works/work-test.jpg',
      },
      {
        label: '石原作品',
        src: './img/works/work-test.jpg',
      },
      {
        label: '石原作品',
        src: './img/works/work-test.jpg',
      },
      {
        label: '石原作品',
        src: './img/works/work-test.jpg',
      },
      {
        label: '石原作品',
        src: './img/works/work-test.jpg',
      },
      {
        label: '石原作品',
        src: './img/works/work-test.jpg',
      },
    ];
});

riot.tag2('page-members', '<h2>{opts.content.name}</h2> <p>{opts.content.intro}</p>', '', '', function(opts) {
console.log(opts);
});

riot.tag2('page-test', '', '', '', function(opts) {
    console.log(opts);

});

riot.tag2('page-top', '<module-top></module-top> <module-about></module-about> <module-works></module-works> <module-event></module-event> <module-detail></module-detail> <module-footer></module-footer>', 'page-top,[data-is="page-top"]{display:block}', '', function(opts) {
});