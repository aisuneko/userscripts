// ==UserScript==
// @name         RedirectMobileWikipedia
// @namespace    https://wikipedia.org
// @match     https://m.wikipedia.org/*
// @match     https://*.m.wikipedia.org/*
// @version      0.1
// @description  Force redirect Wikipedia sites from mobile ver to desktop ver; a fork of RedirectChineseWikipedia
// @author       aisuneko
// @icon         https://en.wikipedia.org/favicon.ico
// @license      MIT
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let url = window.location.href;
    let desturl = url;
    if(url.search("m.wikipedia.org") != -1) desturl = url.replace("m.", "");
    window.location.replace(desturl);
})();
