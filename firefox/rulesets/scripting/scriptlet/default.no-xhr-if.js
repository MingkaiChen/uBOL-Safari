/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock

*/

/* eslint-disable indent */
/* global cloneInto */

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_noXhrIf = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["request=adb"],["doubleclick"],["googlesyndication"],["/adsbygoogle|doubleclick/"],["homad-global-configs"],["/enthusiastgaming|googleoptimize|googletagmanager/"],["/doubleclick|googlesyndication/"],["/^(?!.*(einthusan\\.io|yahoo|rtnotif|ajax|quantcast|bugsnag))/"],["/adnxs.com|onetag-sys.com|teads.tv|google-analytics.com/"],["ad_"],["/redirector\\.googlevideo\\.com\\/videoplayback[\\s\\S]*?dclk_video_ads/"],["ads"],["svonm"],["/\\/VisitorAPI\\.js|\\/AppMeasurement\\.js/"],["inklinkor.com"],["damoh"],["/youboranqs01|spotx|springserve/"],["adsbygoogle"],["/doubleclick|googlesyndication/","length:10"],["/\\/ads\\/advert/"],["/adskeeper|bidgear|googlesyndication|mgid/"],["fwmrm.net"],["/\\/ad\\/g\\/1/"],["adsbygoogle","length:10"],["adinplay.com"],["popunder"],["/pagead2\\.googlesyndication\\.com|inklinkor\\.com/"],["czilladx"],["/^/"],["/ad"],["prebid"],["wpadmngr"],["/ads"],["pub.network"],["url:googlesyndication"],["/analytics|livestats/"],["mahimeta"],["notifier"],["/ad-"],["/coinzillatag|czilladx/"],["/thaudray\\.com|putchumt\\.com/"],["php"],["/googlesyndication|doubleclick/"],["bmcdn6"],["adx"],["cls_report?"],["adswizz.com"],["tag"],["googletagmanager"],["pagead2.googlesyndication.com"],["time-events"],["/_Ad_|_ad/"],["/googlesyndication|nitropay/"],["method:POST url:/logImpressions"],["method:POST"],["utreon.com/pl/api/event method:POST"],["log-sdk.ksapisrv.com/rest/wd/common/log/collect method:POST"],["/VisitorAPI|AppMeasurement/"],["analytics/bulk-pixel"],["/(trace|beacon)\\.qq\\.com/"],["excess.duolingo.com/batch"],["/eventLog.ajax"],["mobileanalytics"],["cloudflare.com/cdn-cgi/trace"],["/recommendations."],["/api/analytics"],["api"],["lr-ingest.io"],["/gtm.js"],["ip-api"],["1.1.1.1/cdn-cgi/trace"],["live.streamtheworld.com/partnerIds"],["popads.net"],["stella"]];

const hostnamesMap = new Map([["handelsblatt.com",0],["moviepilot.de",1],["journaldemontreal.com",1],["minhaconexao.com.br",1],["videolyrics.in",1],["sportshub.to",[1,2]],["topsporter.net",1],["meteoetradar.com",1],["gala.fr",1],["geo.fr",1],["voici.fr",1],["sankaku.app",2],["zigforums.com",2],["ge-map-overlays.appspot.com",2],["freegogpcgames.com",2],["hollaforums.com",2],["powforums.com",2],["supforums.com",2],["play.nova.bg",2],["toolkitspro.com",2],["meteopool.org",2],["ssstik.io",2],["animefever.cc",2],["digipuzzle.net",2],["crn.com",2],["postazap.com",2],["laweducationinfo.com",2],["savemoneyinfo.com",2],["worldaffairinfo.com",2],["godstoryinfo.com",2],["successstoryinfo.com",2],["cxissuegk.com",2],["learnmarketinfo.com",2],["bhugolinfo.com",2],["armypowerinfo.com",2],["rsadnetworkinfo.com",2],["rsinsuranceinfo.com",2],["rsfinanceinfo.com",2],["rsgamer.app",2],["rssoftwareinfo.com",2],["rshostinginfo.com",2],["rseducationinfo.com",2],["informaxonline.com",[2,29]],["cambb.xxx",2],["routech.ro",2],["rontechtips.com",2],["edealinfo.com",2],["homeairquality.org",2],["techtrim.tech",2],["pigeonburger.xyz",2],["askpaccosi.com",2],["crypto4tun.com",2],["fusedgt.com",2],["apkowner.org",2],["appsmodz.com",2],["bingotingo.com",2],["superpsx.com",2],["stringreveals.com",2],["fox.com",2],["obutecodanet.ig.com.br",2],["firmwarex.net",2],["softwaretotal.net",2],["freecodezilla.net",2],["iconmonstr.com",2],["rbxscripts.net",2],["rimworldbase.com",2],["ewrc-results.com",2],["adslink.pw",2],["comentariodetexto.com",2],["wordpredia.com",2],["livsavr.co",2],["sportfacts.net",2],["sportnews.to",2],["gsmhamza.com",2],["38.242.194.12",2],["bi-girl.net",2],["idealfollow.in",2],["medeberiyaa.com",2],["samuraiscan.org",2],["shinobijawi.id",2],["snbc13.com",2],["webmatrices.com",2],["adelsfun.com",2],["advantien.com",2],["bailbondsfinder.com",2],["bigpiecreative.com",2],["childrenslibrarylady.com",2],["classifarms.com",2],["comtasq.ca",2],["crone.es",2],["ctrmarketingsolutions.com",2],["dropnudes.com",2],["ftuapps.dev",2],["genzsport.com",2],["grsprotection.com",2],["gruporafa.com.br",2],["inmatefindcalifornia.com",2],["inmatesearchidaho.com",2],["itsonsitetv.com",2],["mfmfinancials.com",2],["myproplugins.com",2],["onehack.us",2],["ovester.com",2],["paste.bin.sx",2],["privatenudes.com",2],["renoconcrete.ca",2],["richieashbeck.com",2],["short1ink.com",2],["stpm.co.uk",2],["wegotcookies.co",2],["fordownloader.com",2],["classicalradio.com",2],["di.fm",2],["jazzradio.com",2],["radiotunes.com",2],["rockradio.com",2],["zenradio.com",2],["animehub.ac",2],["yottachess.com",2],["infidrive.net",2],["animefreak.to",2],["9animes.ru",2],["couponscorpion.com",2],["pinsystem.co.uk",3],["wetter.de",4],["thesimsresource.com",5],["gnomio.com",6],["techacode.com",6],["trangchu.news",6],["cybermania.ws",6],["techhelpbd.com",6],["youmath.it",8],["frkn64modding.com",9],["sbs.com.au",10],["gearingcommander.com",11],["gameszap.com",11],["differenceprimitive85p.shop",11],["novelmultiverse.com",11],["taming.io",11],["cekip.site",11],["snlookup.com",11],["globfone.com",11],["chimicamo.org",11],["webforefront.com",11],["apkmagic.com.ar",11],["reaperscans.id",11],["freecoursesonline.me",11],["short1.site",11],["telewizja-streamer.xyz",11],["filmisub.cc",11],["filmesdostorrenthd.net",11],["play-games.com",11],["vox.de",12],["vip.de",12],["rtl.de",12],["fitforfun.de",12],["desired.de",12],["kino.de",12],["cinema.de",12],["nationalgeographic.fr",13],["oko.sh",[14,26]],["golem.de",15],["player.pcgameshardware.de",15],["rakuten.tv",16],["hausbau-forum.de",17],["hipsonyc.com",17],["theforyou.in",17],["gyanitheme.com",17],["hostadviser.net",17],["bloggingaro.com",17],["emoji.gg",17],["texture-packs.com",17],["manyakan.com",17],["persianhive.com",17],["boainformacao.com.br",17],["gcertificationcourse.com",17],["portaliz.site",17],["tech-story.net",17],["visalist.io",17],["litecoin.host",17],["alliptvlinks.com",18],["kisscartoon.se",19],["kc.linksgen.com",19],["u.co.uk",21],["uktvplay.co.uk",21],["uktvplay.uktv.co.uk",21],["channel4.com",22],["pomofocus.io",23],["royaledudes.io",24],["aiimgvlog.fun",25],["bestclaimtrx.xyz",25],["freebinance.top",25],["tvi.la",26],["iir.la",26],["tii.la",26],["ckk.ai",26],["oei.la",26],["lnbz.la",26],["exactpay.online",27],["claim.fun",27],["faucetcrypto.net",27],["btc25.org",27],["doge25.in",27],["cashbux.work",27],["pasend.link",28],["freewp.io",28],["jetpunk.com",30],["mcrypto.club",31],["coinsparty.com",31],["simplebits.io",32],["flightsim.to",33],["stardeos.com",34],["goduke.com",35],["1apple.xyz",36],["lavanguardia.com",37],["foodsdictionary.co.il",38],["freesolana.top",39],["farescd.com",41],["getintoway.com",42],["bitcotasks.com",43],["freelitecoin.top",44],["freetron.top",44],["earncrypto.co.in",44],["citi.com",45],["hotfm.audio",46],["luffytra.xyz",47],["maxt.church",48],["history.com",50],["pluto.tv",51],["osuskinner.com",52],["osuskins.net",52],["docs.google.com",53],["endbasic.dev",54],["jmmv.dev",54],["fingerprint.com",54],["utreon.com",55],["zhihu.com",56],["natgeotv.com",57],["airtel.in",58],["meeting.tencent.com",59],["duolingo.com",60],["study.com",61],["viu.com",62],["myair2.resmed.com",63],["travelerdoor.com",63],["azby.fmworld.net",64],["unrealengine.com",65],["wco.tv",66],["dark-gaming.com",67],["securegames.iwin.com",68],["neilpatel.com",69],["myair.resmed.com",70],["player.amperwave.net",71],["caroloportunidades.com.br",72],["nicovideo.jp",73]]);

const entitiesMap = new Map([["nsw2u",2],["cinemakottaga",2],["asiaon",2],["apkmaven",2],["blurayufr",2],["teluguflix",2],["bg-gledai",2],["gledaitv",2],["kissanime",2],["einthusan",7],["khatrimaza",11],["moviegan",11],["writedroid",11],["kimcartoon",19],["readcomiconline",20],["streamingcommunity",40],["empire-stream",49],["empire-streaming",49],["empire-streamz",49]]);

const exceptionsMap = new Map([["dev.fingerprint.com",[54]]]);

/******************************************************************************/

function noXhrIf(
    propsToMatch = '',
    directive = ''
) {
    if ( typeof propsToMatch !== 'string' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('prevent-xhr', propsToMatch, directive);
    const xhrInstances = new WeakMap();
    const propNeedles = parsePropertiesToMatch(propsToMatch, 'url');
    const warOrigin = scriptletGlobals.warOrigin;
    const headers = {
        'date': '',
        'content-type': '',
        'content-length': '',
    };
    self.XMLHttpRequest = class extends self.XMLHttpRequest {
        open(method, url, ...args) {
            xhrInstances.delete(this);
            if ( warOrigin !== undefined && url.startsWith(warOrigin) ) {
                return super.open(method, url, ...args);
            }
            const haystack = { method, url };
            if ( propsToMatch === '' && directive === '' ) {
                safe.uboLog(logPrefix, `Called: ${safe.JSON_stringify(haystack, null, 2)}`);
                return super.open(method, url, ...args);
            }
            if ( matchObjectProperties(propNeedles, haystack) ) {
                xhrInstances.set(this, haystack);
            }
            haystack.headers = Object.assign({}, headers);
            return super.open(method, url, ...args);
        }
        send(...args) {
            const haystack = xhrInstances.get(this);
            if ( haystack === undefined ) {
                return super.send(...args);
            }
            haystack.headers['date'] = (new Date()).toUTCString();
            let promise = Promise.resolve({
                xhr: this,
                directive,
                props: {
                    readyState: { value: 4 },
                    response: { value: '' },
                    responseText: { value: '' },
                    responseXML: { value: null },
                    responseURL: { value: haystack.url },
                    status: { value: 200 },
                    statusText: { value: 'OK' },
                },
            });
            switch ( this.responseType ) {
            case 'arraybuffer':
                promise = promise.then(details => {
                    details.props.response.value = new ArrayBuffer(0);
                    return details;
                });
                haystack.headers['content-type'] = 'application/octet-stream';
                break;
            case 'blob':
                promise = promise.then(details => {
                    details.props.response.value = new Blob([]);
                    return details;
                });
                haystack.headers['content-type'] = 'application/octet-stream';
                break;
            case 'document': {
                promise = promise.then(details => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString('', 'text/html');
                    details.props.response.value = doc;
                    details.props.responseXML.value = doc;
                    return details;
                });
                haystack.headers['content-type'] = 'text/html';
                break;
            }
            case 'json':
                promise = promise.then(details => {
                    details.props.response.value = {};
                    details.props.responseText.value = '{}';
                    return details;
                });
                haystack.headers['content-type'] = 'application/json';
                break;
            default:
                if ( directive === '' ) { break; }
                promise = promise.then(details => {
                    return generateContentFn(details.directive).then(text => {
                        details.props.response.value = text;
                        details.props.responseText.value = text;
                        return details;
                    });
                });
                haystack.headers['content-type'] = 'text/plain';
                break;
            }
            promise.then(details => {
                haystack.headers['content-length'] = `${details.props.response.value}`.length;
                Object.defineProperties(details.xhr, details.props);
                details.xhr.dispatchEvent(new Event('readystatechange'));
                details.xhr.dispatchEvent(new Event('load'));
                details.xhr.dispatchEvent(new Event('loadend'));
                safe.uboLog(logPrefix, `Prevented with response:\n${details.xhr.response}`);
            });
        }
        getResponseHeader(headerName) {
            const haystack = xhrInstances.get(this);
            if ( haystack === undefined || this.readyState < this.HEADERS_RECEIVED ) {
                return super.getResponseHeader(headerName);
            }
            const value = haystack.headers[headerName.toLowerCase()];
            if ( value !== undefined && value !== '' ) { return value; }
            return null;
        }
        getAllResponseHeaders() {
            const haystack = xhrInstances.get(this);
            if ( haystack === undefined || this.readyState < this.HEADERS_RECEIVED ) {
                return super.getAllResponseHeaders();
            }
            const out = [];
            for ( const [ name, value ] of Object.entries(haystack.headers) ) {
                if ( !value ) { continue; }
                out.push(`${name}: ${value}`);
            }
            if ( out.length !== 0 ) { out.push(''); }
            return out.join('\r\n');
        }
    };
}

function generateContentFn(directive) {
    const safe = safeSelf();
    const randomize = len => {
        const chunks = [];
        let textSize = 0;
        do {
            const s = safe.Math_random().toString(36).slice(2);
            chunks.push(s);
            textSize += s.length;
        }
        while ( textSize < len );
        return chunks.join(' ').slice(0, len);
    };
    if ( directive === 'true' ) {
        return Promise.resolve(randomize(10));
    }
    if ( directive === 'emptyObj' ) {
        return Promise.resolve('{}');
    }
    if ( directive === 'emptyArr' ) {
        return Promise.resolve('[]');
    }
    if ( directive === 'emptyStr' ) {
        return Promise.resolve('');
    }
    if ( directive.startsWith('length:') ) {
        const match = /^length:(\d+)(?:-(\d+))?$/.exec(directive);
        if ( match ) {
            const min = parseInt(match[1], 10);
            const extent = safe.Math_max(parseInt(match[2], 10) || 0, min) - min;
            const len = safe.Math_min(min + extent * safe.Math_random(), 500000);
            return Promise.resolve(randomize(len | 0));
        }
    }
    if ( directive.startsWith('war:') && scriptletGlobals.warOrigin ) {
        return new Promise(resolve => {
            const warOrigin = scriptletGlobals.warOrigin;
            const warName = directive.slice(4);
            const fullpath = [ warOrigin, '/', warName ];
            const warSecret = scriptletGlobals.warSecret;
            if ( warSecret !== undefined ) {
                fullpath.push('?secret=', warSecret);
            }
            const warXHR = new safe.XMLHttpRequest();
            warXHR.responseType = 'text';
            warXHR.onloadend = ev => {
                resolve(ev.target.responseText || '');
            };
            warXHR.open('GET', fullpath.join(''));
            warXHR.send();
        });
    }
    return Promise.resolve('');
}

function matchObjectProperties(propNeedles, ...objs) {
    if ( matchObjectProperties.extractProperties === undefined ) {
        matchObjectProperties.extractProperties = (src, des, props) => {
            for ( const p of props ) {
                const v = src[p];
                if ( v === undefined ) { continue; }
                des[p] = src[p];
            }
        };
    }
    const safe = safeSelf();
    const haystack = {};
    const props = safe.Array_from(propNeedles.keys());
    for ( const obj of objs ) {
        if ( obj instanceof Object === false ) { continue; }
        matchObjectProperties.extractProperties(obj, haystack, props);
    }
    for ( const [ prop, details ] of propNeedles ) {
        let value = haystack[prop];
        if ( value === undefined ) { continue; }
        if ( typeof value !== 'string' ) {
            try { value = safe.JSON_stringify(value); }
            catch(ex) { }
            if ( typeof value !== 'string' ) { continue; }
        }
        if ( safe.testPattern(details, value) ) { continue; }
        return false;
    }
    return true;
}

function parsePropertiesToMatch(propsToMatch, implicit = '') {
    const safe = safeSelf();
    const needles = new Map();
    if ( propsToMatch === undefined || propsToMatch === '' ) { return needles; }
    const options = { canNegate: true };
    for ( const needle of propsToMatch.split(/\s+/) ) {
        const [ prop, pattern ] = needle.split(':');
        if ( prop === '' ) { continue; }
        if ( pattern !== undefined ) {
            needles.set(prop, safe.initPattern(pattern, options));
        } else if ( implicit !== '' ) {
            needles.set(implicit, safe.initPattern(prop, options));
        }
    }
    return needles;
}

function safeSelf() {
    if ( scriptletGlobals.safeSelf ) {
        return scriptletGlobals.safeSelf;
    }
    const self = globalThis;
    const safe = {
        'Array_from': Array.from,
        'Error': self.Error,
        'Function_toStringFn': self.Function.prototype.toString,
        'Function_toString': thisArg => safe.Function_toStringFn.call(thisArg),
        'Math_floor': Math.floor,
        'Math_max': Math.max,
        'Math_min': Math.min,
        'Math_random': Math.random,
        'Object': Object,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'Object_defineProperties': Object.defineProperties.bind(Object),
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'String_fromCharCode': String.fromCharCode,
        'XMLHttpRequest': self.XMLHttpRequest,
        'addEventListener': self.EventTarget.prototype.addEventListener,
        'removeEventListener': self.EventTarget.prototype.removeEventListener,
        'fetch': self.fetch,
        'JSON': self.JSON,
        'JSON_parseFn': self.JSON.parse,
        'JSON_stringifyFn': self.JSON.stringify,
        'JSON_parse': (...args) => safe.JSON_parseFn.call(safe.JSON, ...args),
        'JSON_stringify': (...args) => safe.JSON_stringifyFn.call(safe.JSON, ...args),
        'log': console.log.bind(console),
        // Properties
        logLevel: 0,
        // Methods
        makeLogPrefix(...args) {
            return this.sendToLogger && `[${args.join(' \u205D ')}]` || '';
        },
        uboLog(...args) {
            if ( this.sendToLogger === undefined ) { return; }
            if ( args === undefined || args[0] === '' ) { return; }
            return this.sendToLogger('info', ...args);
            
        },
        uboErr(...args) {
            if ( this.sendToLogger === undefined ) { return; }
            if ( args === undefined || args[0] === '' ) { return; }
            return this.sendToLogger('error', ...args);
        },
        escapeRegexChars(s) {
            return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        },
        initPattern(pattern, options = {}) {
            if ( pattern === '' ) {
                return { matchAll: true };
            }
            const expect = (options.canNegate !== true || pattern.startsWith('!') === false);
            if ( expect === false ) {
                pattern = pattern.slice(1);
            }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match !== null ) {
                return {
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            if ( options.flags !== undefined ) {
                return {
                    re: new this.RegExp(this.escapeRegexChars(pattern),
                        options.flags
                    ),
                    expect,
                };
            }
            return { pattern, expect };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            if ( details.re ) {
                return this.RegExp_test.call(details.re, haystack) === details.expect;
            }
            return haystack.includes(details.pattern) === details.expect;
        },
        patternToRegex(pattern, flags = undefined, verbatim = false) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                const reStr = this.escapeRegexChars(pattern);
                return new RegExp(verbatim ? `^${reStr}$` : reStr, flags);
            }
            try {
                return new RegExp(match[1], match[2] || undefined);
            }
            catch(ex) {
            }
            return /^/;
        },
        getExtraArgs(args, offset = 0) {
            const entries = args.slice(offset).reduce((out, v, i, a) => {
                if ( (i & 1) === 0 ) {
                    const rawValue = a[i+1];
                    const value = /^\d+$/.test(rawValue)
                        ? parseInt(rawValue, 10)
                        : rawValue;
                    out.push([ a[i], value ]);
                }
                return out;
            }, []);
            return this.Object_fromEntries(entries);
        },
        onIdle(fn, options) {
            if ( self.requestIdleCallback ) {
                return self.requestIdleCallback(fn, options);
            }
            return self.requestAnimationFrame(fn);
        },
        offIdle(id) {
            if ( self.requestIdleCallback ) {
                return self.cancelIdleCallback(id);
            }
            return self.cancelAnimationFrame(id);
        }
    };
    scriptletGlobals.safeSelf = safe;
    if ( scriptletGlobals.bcSecret === undefined ) { return safe; }
    // This is executed only when the logger is opened
    const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
    let bcBuffer = [];
    safe.logLevel = scriptletGlobals.logLevel || 1;
    safe.sendToLogger = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
        if ( bcBuffer === undefined ) {
            return bc.postMessage({ what: 'messageToLogger', type, text });
        }
        bcBuffer.push({ type, text });
    };
    bc.onmessage = ev => {
        const msg = ev.data;
        switch ( msg ) {
        case 'iamready!':
            if ( bcBuffer === undefined ) { break; }
            bcBuffer.forEach(({ type, text }) =>
                bc.postMessage({ what: 'messageToLogger', type, text })
            );
            bcBuffer = undefined;
            break;
        case 'setScriptletLogLevelToOne':
            safe.logLevel = 1;
            break;
        case 'setScriptletLogLevelToTwo':
            safe.logLevel = 2;
            break;
        }
    };
    bc.postMessage('areyouready?');
    return safe;
}

/******************************************************************************/

const hnParts = [];
try {
    let origin = document.location.origin;
    if ( origin === 'null' ) {
        const origins = document.location.ancestorOrigins;
        for ( let i = 0; i < origins.length; i++ ) {
            origin = origins[i];
            if ( origin !== 'null' ) { break; }
        }
    }
    const pos = origin.lastIndexOf('://');
    if ( pos === -1 ) { return; }
    hnParts.push(...origin.slice(pos+3).split('.'));
}
catch(ex) { }
const hnpartslen = hnParts.length;
if ( hnpartslen === 0 ) { return; }

const todoIndices = new Set();
const tonotdoIndices = [];

// Exceptions
if ( exceptionsMap.size !== 0 ) {
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        const excepted = exceptionsMap.get(hn);
        if ( excepted ) { tonotdoIndices.push(...excepted); }
    }
    exceptionsMap.clear();
}

// Hostname-based
if ( hostnamesMap.size !== 0 ) {
    const collectArgIndices = hn => {
        let argsIndices = hostnamesMap.get(hn);
        if ( argsIndices === undefined ) { return; }
        if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
        for ( const argsIndex of argsIndices ) {
            if ( tonotdoIndices.includes(argsIndex) ) { continue; }
            todoIndices.add(argsIndex);
        }
    };
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        collectArgIndices(hn);
    }
    collectArgIndices('*');
    hostnamesMap.clear();
}

// Entity-based
if ( entitiesMap.size !== 0 ) {
    const n = hnpartslen - 1;
    for ( let i = 0; i < n; i++ ) {
        for ( let j = n; j > i; j-- ) {
            const en = hnParts.slice(i,j).join('.');
            let argsIndices = entitiesMap.get(en);
            if ( argsIndices === undefined ) { continue; }
            if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
            for ( const argsIndex of argsIndices ) {
                if ( tonotdoIndices.includes(argsIndex) ) { continue; }
                todoIndices.add(argsIndex);
            }
        }
    }
    entitiesMap.clear();
}

// Apply scriplets
for ( const i of todoIndices ) {
    try { noXhrIf(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

// Inject code

// https://bugzilla.mozilla.org/show_bug.cgi?id=1736575
//   'MAIN' world not yet supported in Firefox, so we inject the code into
//   'MAIN' ourself when environment in Firefox.

const targetWorld = 'MAIN';

// Not Firefox
if ( typeof wrappedJSObject !== 'object' || targetWorld === 'ISOLATED' ) {
    return uBOL_noXhrIf();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_noXhrIf = cloneInto([
            [ '(', uBOL_noXhrIf.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_noXhrIf);
        url = page.URL.createObjectURL(blob);
        const doc = page.document;
        script = doc.createElement('script');
        script.async = false;
        script.src = url;
        (doc.head || doc.documentElement || doc).append(script);
    } catch (ex) {
        console.error(ex);
    }
    if ( url ) {
        if ( script ) { script.remove(); }
        page.URL.revokeObjectURL(url);
    }
    delete page.uBOL_noXhrIf;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
