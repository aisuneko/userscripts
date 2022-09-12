// ==UserScript==
// @name         RedirectChineseWikipedia
// @namespace    https://zh.wikipedia.org
// @match      https://zh.wikipedia.org/wiki/*
// @match      https://zh.wikipedia.org/zh-hk/*
// @match      https://zh.wikipedia.org/zh-mo/*
// @match      https://zh.wikipedia.org/zh-tw/*
// @match      https://zh.wikipedia.org/zh-my/*
// @match      https://zh.wikipedia.org/zh-sg/*
// @match      https://zh.wikipedia.org/zh-hans/*
// @match      https://zh.wikipedia.org/zh-hant/*
// @match      https://zh.wikipedia.org/zh/*
// @match      https://zh.m.wikipedia.org/wiki/*
// @match      https://zh.m.wikipedia.org/zh-hk/*
// @match      https://zh.m.wikipedia.org/zh-mo/*
// @match      https://zh.m.wikipedia.org/zh-tw/*
// @match      https://zh.m.wikipedia.org/zh-my/*
// @match      https://zh.m.wikipedia.org/zh-sg/*
// @match      https://zh.m.wikipedia.org/zh-cn/*
// @match      https://zh.m.wikipedia.org/zh-hans/*
// @match      https://zh.m.wikipedia.org/zh-hant/*
// @match      https://zh.m.wikipedia.org/zh/*
// @version      0.3
// @description  Force redirect Chinese Wikipedia from other locales to zh-cn (and also from mobile ver to desktop ver)
// @author       aisuneko
// @icon         https://zh.wikipedia.org/favicon.ico
// @license      MIT
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let variants = ["wiki", "zh-hk", "zh-mo", "zh-tw", "zh-my", "zh-sg", "zh-hans", "zh-hant", "zh"];
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
