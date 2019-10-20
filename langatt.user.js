    // ==UserScript==
    // @name         setLang
    // @namespace    http://tampermonkey.net/
    // @version      0.1
    // @description  try to take over the world!
    // @author       You
    // @match        *://stackoverflow.com/*
    // @match        *://meta.stackoverflow.com/*
    // @match        *://superuser.com/*
    // @match        *://meta.superuser.com/*
    // @match        *://serverfault.com/*
    // @match        *://meta.serverfault.com/*
    // @match        *://askubuntu.com/*
    // @match        *://meta.askubuntu.com/*
    // @match        *://mathoverflow.net/*
    // @match        *://meta.mathoverflow.net/*
    // @match        *://*.stackexchange.com/*
    // @match        *://answers.onstartups.com/*
    // @match        *://meta.answers.onstartups.com/*
    // @match        *://stackapps.com/*
    // @grant        none
    // ==/UserScript==
    // @grant        none
    // ==/UserScript==
    
    (function() {
        'use strict';
        const el = document.getElementsByTagName('html')[0];
        el.setAttribute('lang', 'en');
        el.setAttribute('dir', 'ltr');
        // Your code here...
    })();
