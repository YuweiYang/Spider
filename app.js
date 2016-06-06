/**
 * Created by yangyuwei on 16/5/3.
 */
//var session = require('express-session');
var fs = require('fs');
var request = require('request');
//var request = require('superagent');
var http = require("http");
var cheerio = require('cheerio');
querystring = require('querystring');
// 这就是post发送的数据
var contents = querystring.stringify({
    uid: "2781888606@qq.com",
   
});

var vipcookie = 'vip_ipver=31; tmp_mars_cid=1460615731000_9be7e6ed418db00dbc3643b0e9906ef5; _smt_uid=570f3a39.54609760; vip_city_name=%E6%9D%AD%E5%B7%9E%E5%B8%82; vipshop_passport_src=http%3A%2F%2Fwww.vip.com%2F; _adwp=41626277.0478940930.1460615737.1460615737.1462269947.2; _adwc=123520138; _adwr=123520138%23http%253A%252F%252Fwww.vip.com%252F; times_18624035430=9; login_username=1437672791%40qq.com; PASSPORT_TOKEN=0D8B88CB1BA238399E28D44AAC33CC5359ED62260E0A07DF47E94A777DAB5670; VipRUID=182573037; VipUID=97716ec030daf7f34f4c18d37940d659; VipRNAME=1437672791qqcom; PHPSESSID=c187i4ml0lhu7vb7rt7cmt1ts5; VipLID=0%7C1462270011%7Ce17a47; VipCID=e110fef03b0552e8fe1303c19fb3a05d; VipMonopoly=0; VipCI_te=0%7C%7C1462270014; _mj_si=si2199236608; _mj_c=v3.2,last,1462270014731,1460615737019,315360000000|v3.4,cm,1462270014738,1462270014731,315360000000; _adwb=41626277; _jzqco=%7C%7C%7C%7C%7C1.390984330.1460615737058.1462269947235.1462270014768.1462269947235.1462270014768.0.0.0.3.3; waitlist=%7B%22pollingId%22%3A%22F4354BDA-E671-41EF-A044-7D139C878332%22%2C%22pollingStamp%22%3A11%7D; vip_province=103103; vip_province_name=%E6%B5%99%E6%B1%9F; vip_wh=VIP_SH; user_class=b; VipUINFO=luc%3Ab%7Csuc%3Ab%7Cbct%3Ac_new%7Ckct%3Ac_new%7Chct%3Ac_new%7Cbdts%3A0%7Cbcts%3A0%7Ckfts%3A0%7Cc10%3A0%7Crcabt%3A0%7Cp2%3A0%7Cp3%3A1%7Cp4%3A0%7Cp5%3A0; mars_pid=0; mars_cid=1460615731000_9be7e6ed418db00dbc3643b0e9906ef5; mars_sid=f7fe6ebfe2990b57859019c5105b9079; visit_id=6465C80A88C24AA0EC400F7A394DB698';
var cookie = 'l_n_c=1; q_c1=273c1ca07f6f4839966326b2d45fb561|1462256686000|1462256686000; _zap=404bf5fa-6fe1-4fbb-88bd-58d8ed5a4baf; _xsrf=c1fc3c0e815bed48df9ad6389f69d0b5; _za=fd6140f5-afba-46ee-9d21-b1ec932e3013; d_c0="ACBAUZJm3QmPTj4Kr6YluCq0JEB-ZLHLLYU=|1462256770"; auth_type=cXFjb25u|1462266008|d9b419421201576144c21fcb3258214f30023646; token="REVENTdERUY5RkQ2NjAxQ0ZFNTdDMTU0QjFENTBFMjQ=|1462266008|e62941255d0a29eef34b0f78b5b66ab6816f2844"; client_id="RDZBRUVDQzVFMDdBRDM2RTIwQzMyRjY1NzBENTgwMjY=|1462266008|909c58fa4f75c446096c0949c5babc68ff338b55"; l_cap_id="NzYwYWVhNGFlZGJkNDhhY2E5NmYyYWE3YjY3OWVjM2Q=|1462269101|1eeb90bbcb3dd5be5bb355bef9b218ed4e6fd6c3"; cap_id="MmFiNTE0NjcwYmYxNDAxNmE3MzIwYTU0MWJmNTFiM2Y=|1462269101|8392abb59b4be5a4b4ebad8cca11e8891b6ddc0b"; login="MTFhNDA0MDZiN2U2NGM3OGIxZDMxMGU3YjlmNmJhYTM=|1462269115|3c4cd1034a541c018ea356328d4c95f835c65f31"; z_c0=Mi4wQUZEQVgtQ0ozUWtBSUVCUmttYmRDUmNBQUFCaEFsVk51d0ZRVndCOFZZYkkxbG9wc012RWN5dmJielV3ajE1VU5R|1462269115|7a4c126729768c9c422f2f6f5fffebd9f46cd699; unlock_ticket="QUZEQVgtQ0ozUWtYQUFBQVlRSlZUY043S0ZjX3NxZDZhT1NSRmRDOEpSZFBzb3Z4M2MzaGZ3PT0=|1462269115|1c7a9efa0202cac33eea160572931cf62b128a0f"';
var url = 'https://www.zhihu.com';
var options = {
    url : url,

    headers: {
            //'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Safari/537.36',
            //'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            //'Accept-Encoding': 'gzip, deflate, sdch',
            //'Accept-Language': 'en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4,zh-TW;q=0.2',
            'Connection': 'keep-alive',
            'Host': 'www.zhihu.com',
            'Referer': 'http://www.zhihu.com/',
            //'cookie':'Mi4wQUZEQVgtQ0ozUWtBY01Ba0hZdmRDUmNBQUFCaEFsVk5IdmRQVndDQXRnMXB0bVA1WU9tRXJXaXZDQ0JVUGt3b0JB',
            //"Content-Length":contents.length,
            'cookie':cookie,
            'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/601.5.17 (KHTML, like Gecko) Version/9.1 Safari/601.5.17'
        }
};


request(options,function(err,res,body){
    console.log('loaded...please hold.');
    if (!err && res.statusCode == 200) {
        //console.log(body);    //返回请求页面的HTML
        //acquireData(body);
        filterData(body);
        //console.log(res.cookie);
    }
});
function filterData(data){
    var $ = cheerio.load(data);
    var titles = [];
    $('.feed-item').each(function(i,ele){
        titles.push({
            username:$(this).find('.author-link').text(),
            title:$(this).find('.question_link').text(),
            awesome:$(this).find('.zm-item-vote-count').text()
        });
    });
    var info = JSON.stringify(titles,null,4);


    console.log(info);

    //fs.writeFile('files/title.json',info,function(err){
    //    if (err) throw err;
    //})

}

//function gettitle(path2,callback){
//    var options = {
//        host: 'www.segmentfault.com',
//        port: 80,
//        //path: 'index',
//        headers: {
//            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Safari/537.36'
//        }
//    };
//    var url = 'www.segmentfault.com/';
//    var html = "";
//    http.get(options,function (res) {
//        res.on('data', function (data) {
//            html += data;
//            console.log('data');
//            console.log(html)
//        });
//        res.on('end', function (err) {
//            var $ = cheerio.load(html);
//            //$('.main').find('table').find('tr').each(function(i,ele){
//            //    title.push($(this).find('h1').find('a').text().trim());
//            //});
//            var titles = [];
//
//            $('.title>a').each(function(i,ele){
//                titles.push($(this).html().trim);
//            });
//            console.log('end');
//            callback(err,titles)
//
//        });
//    }).on('error', function (e) {
//        callback(e);
//    })
//}
//gettitle(null,cb);
//function cb(err,titles){
//    if (err) throw err;
//    console.log(titles)
//}
