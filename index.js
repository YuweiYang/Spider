///**
// * Created by yangyuwei on 16/5/3.
// */
//var session = require('express-session');
//var fs = require('fs');
////var request = require('request');
//var request = require('superagent');
//var http = require("http");
//var cheerio = require('cheerio');
////var $ = cheerio.load('<h2 class="title">Hello world</h2>');
//var url = 'http://www.zhihu.com';
//var login_url = url+'/login/email';
//var login_data = {
//    'email': '1437672791@qq.com',
//    'password': 'young315029',
//    'rememberme': 'true',
//    'cookie':''
//};
//var header_base = {
//    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
//    'Accept-Encoding': 'gzip, deflate, sdch',
//    'Accept-Language': 'en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4,zh-TW;q=0.2',
//    'Connection': 'keep-alive',
//    'Host': 'www.zhihu.com',
//    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.75 Safari/537.36',
//    'Referer': 'http://www.zhihu.com/'
//};
//
//var  s = request.session();
//
//console.log(s);
//
//
//
//var cookie;
//
//var options = {
//    host:"www.zhihu.com",
//    //path:"/user/ajax_login.json",
//    method:"post",
//    header:{
//        Accept:'*/*',
//        'Accept-Encoding':'gzip, deflate, sdch',
//        'Accept-Language':'zh-CN,zh;q=0.8,en;q=0.6',
//        'Connection':'keep-alive',
//        'Host':'www.zhihu.com',
//        Referer:'https://www.zhihu.com/',
//        'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.75 Safari/537.36',
//        'X-Requested-With':'XMLHttpRequest'
//    }
//};
//
//
//
//
////var header = {
////
////
////};
////request
////    .get('https://www.zhihu.com/')
////    .set(options)
////    .end(function(err, res){
////        cookie = res.headers['set-cookie']
////            .join(',').match(/(z_c0=.+?);/);
////        console.log(cookie);
////        //var token = getToken(res.text)
////
////        // 从上图可以看到我们需要的cookie是PHPSESSID开头的
////
////        //request
////        //    .post(urls.login)
////        //    .query({'_': token})
////        //    .set(base_headers)
////        //    .set('Cookie', cookie)
////        //    .type('form')
////        //    .send(conf)
////        //    .redirects(0)
////        //    .end(function(err){
////        //        console.log(err);
////        //    })
////    });
//
//
//
//
//
////fs.writeFile('files/spidertest.txt',$.html(),function(err){
////    if (err) throw err;
////
////});
//
////function filterChapter(html){
////
////
////}
//
////http.get(url,function(res){
////    var html='';
////
////    res.on('data',function(data){
////        html+=data;
////    });
////
////    res.on('end',function(){
////        console.log(html);
////        //var courseData=filterChapter(html);
////        //printCourseInfo(courseData);
////    })
////}).on('error',function(){
////    console.log('获取课程数据出错');
////});