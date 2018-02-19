
riot.tag2('app', '<h1>testだよ</h1> <br><a href="#page-test">testlink</a><br><a href="#members/kooh">menbers link</a> <content></content>', '', '', function(opts) {
    var self = this;

    this.contents = {
      test: {
        title: 'title',
        body: 'body',
        label: 'link label',
      },
    };
});

riot.tag2('page-members', '<h2>{opts.content.name}</h2> <p>{opts.content.intro}</p>', '', '', function(opts) {
console.log(opts);
});

riot.tag2('page-test', '<h2>{opts.content.title}</h2> <p>{opts.content.body}</p> <p>{opts.test}</p> <p>try opts</p>', '', '', function(opts) {
    console.log(opts);

});