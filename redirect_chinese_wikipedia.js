// ==UserScript==
// @name         RedirectChineseWikipedia
// @namespace    https://zh.wikipedia.org
// @include      https://zh.wikipedia.org/wiki/*
// @include      https://zh.wikipedia.org/zh-hk/*
// @include      https://zh.wikipedia.org/zh-mo/*
// @include      https://zh.wikipedia.org/zh-tw/*
// @include      https://zh.wikipedia.org/zh-my/*
// @include      https://zh.wikipedia.org/zh-sg/*
// @include      https://zh.m.wikipedia.org/wiki/*
// @include      https://zh.m.wikipedia.org/zh-hk/*
// @include      https://zh.m.wikipedia.org/zh-mo/*
// @include      https://zh.m.wikipedia.org/zh-tw/*
// @include      https://zh.m.wikipedia.org/zh-my/*
// @include      https://zh.m.wikipedia.org/zh-sg/*
// @include      https://zh.m.wikipedia.org/zh-cn/*
// @version      0.3
// @description  Force redirect Chinese Wikipedia from other locales to zh-cn (and also from mobile ver to desktop ver)
// @author       aisuneko
// @icon         https://zh.wikipedia.org/favicon.ico

// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let variants = ["wiki", "zh-hk", "zh-mo", "zh-tw","zh-my", "zh-sg"];
    let url = window.location.href;
    let desturl = url;
    let header = "zh.wikipedia.org/";
    let mobile_header = "zh.m.wikipedia.org/";
    if(url.search(mobile_header) != -1) desturl = url.replace(mobile_header, header);

    let target = header + "zh-cn";
    for(let i = 0; i < variants.length; i++){
        let searchstr = header + variants[i];
        if(url.search(searchstr) != -1){
            desturl = url.replace(searchstr, target);
            break;
        }
    }
    window.location.replace(desturl);
})();
