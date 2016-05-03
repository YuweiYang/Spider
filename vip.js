/**
 * Created by yangyuwei on 16/5/3.
 */

//var session = require('express-session');
var fs = require('fs');
var request = require('request');
//var request = require('superagent');
var http = require("http");
var cheerio = require('cheerio');


var cookie = 'vip_ipver=31; tmp_mars_cid=1460615731000_9be7e6ed418db00dbc3643b0e9906ef5; _smt_uid=570f3a39.54609760; vip_city_name=%E6%9D%AD%E5%B7%9E%E5%B8%82; vipshop_passport_src=http%3A%2F%2Fwww.vip.com%2F; _adwp=41626277.0478940930.1460615737.1460615737.1462269947.2; _adwc=123520138; _adwr=123520138%23http%253A%252F%252Fwww.vip.com%252F; times_18624035430=9; login_username=1437672791%40qq.com; PASSPORT_TOKEN=0D8B88CB1BA238399E28D44AAC33CC5359ED62260E0A07DF47E94A777DAB5670; VipRUID=182573037; VipUID=97716ec030daf7f34f4c18d37940d659; VipRNAME=1437672791qqcom; PHPSESSID=c187i4ml0lhu7vb7rt7cmt1ts5; VipLID=0%7C1462270011%7Ce17a47; VipCID=e110fef03b0552e8fe1303c19fb3a05d; VipMonopoly=0; VipCI_te=0%7C%7C1462270014; _mj_si=si2199236608; _mj_c=v3.2,last,1462270014731,1460615737019,315360000000|v3.4,cm,1462270014738,1462270014731,315360000000; _adwb=41626277; _jzqco=%7C%7C%7C%7C%7C1.390984330.1460615737058.1462269947235.1462270014768.1462269947235.1462270014768.0.0.0.3.3; waitlist=%7B%22pollingId%22%3A%22F4354BDA-E671-41EF-A044-7D139C878332%22%2C%22pollingStamp%22%3A11%7D; vip_province=103103; vip_province_name=%E6%B5%99%E6%B1%9F; vip_wh=VIP_SH; user_class=b; VipUINFO=luc%3Ab%7Csuc%3Ab%7Cbct%3Ac_new%7Ckct%3Ac_new%7Chct%3Ac_new%7Cbdts%3A0%7Cbcts%3A0%7Ckfts%3A0%7Cc10%3A0%7Crcabt%3A0%7Cp2%3A0%7Cp3%3A1%7Cp4%3A0%7Cp5%3A0; mars_pid=0; mars_cid=1460615731000_9be7e6ed418db00dbc3643b0e9906ef5; mars_sid=f7fe6ebfe2990b57859019c5105b9079; visit_id=6465C80A88C24AA0EC400F7A394DB698';
var url = 'http://www.vip.com';
var options = {
    url : url,

    headers: {
        //'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Safari/537.36',
        //'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        //'Accept-Encoding': 'gzip, deflate, sdch',
        //'Accept-Language': 'en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4,zh-TW;q=0.2',
        'Connection': 'keep-alive',
        'Host': 'www.vip.com',
        'Referer': 'http://www.vip.com/',
        //'cookie':'Mi4wQUZEQVgtQ0ozUWtBY01Ba0hZdmRDUmNBQUFCaEFsVk5IdmRQVndDQXRnMXB0bVA1WU9tRXJXaXZDQ0JVUGt3b0JB',
        //"Content-Length":contents.length,
        'cookie':cookie,
        'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.75 Safari/537.36'
    }
};


request(options,function(err,res,body){
    console.log('loaded...please hold.');
    if (!err && res.statusCode == 200) {
        filterData(body);
        //console.log(res.cookie);
    }
});
function filterData(data){
    //console.log(data);
    var $ = cheerio.load(data);
    var titles = [];
    $('.hotSale-brand-img').each(function(i,ele){
        titles.push({

            title:$(this).attr('alt')

        });
    });
    //var info = JSON.stringify(titles,null,4);
    //
    //
    console.log(titles);

    //fs.writeFile('files/title.json',info,function(err){
    //    if (err) throw err;
    //})

}

