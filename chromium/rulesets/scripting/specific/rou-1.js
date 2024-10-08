/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2019-present Raymond Hill

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

/* jshint esversion:11 */

'use strict';

// ruleset: rou-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = ["[href=\"https://www.patriotromania.ro/\"]",".container:has([data-tracking-alias^=\"sponsored_products\"])",".Wdgt:has([src*=\".gif\"])",".widget_text:has([href*=\"utm_source=aff\"])",".ad",".banner_720,\n.fab_lastpost,\n.fab_mid_thread,\n.my_post_goad.my_post.row-fluid",".widget_custom_html:has([href][target=\"_blank\"]):not(*:has([href*=\"damboviteanul.com\"])):not(*:has([id=\"widget_container_curs\"]))",".container",".modal__overlay",".banners-box,\n.new_domain_r.block",".rm-skin",".img-banner",".widget-container:has([href^=\"http://thecryptobot.com\"])","[style]:has(.adsbygoogle)","#ipsLayout_sidebar > .cWidgetContainer,\n.advertise,\n.content-page-mg > p,\n[alt=\"advertisement_alt\"],\n[href=\"https://luxuryescorts.com/\"],\n[href^=\"https://bcprm.com/promo.php\"]","[href^=\"https://www.profi.ro/\"]","[href^=\"https://bit.ly/\"]",".td-all-devices",".td_shadow_btn,\n.widget_media_image:has([href*=\"affiliate.php\"])","[style^=\"overflow:auto;\"]","[style^=\"overflow:\"]:has([data-ad-slot]),\n[style^=\"overflow:\"]:has([data-ad])","td[height^=\"500\"]","a[href^=\"https://www.udont2021.com/\"]",".widget_text",".widget_block:not(.widget_block:has([href*=\"romaniataramea.com\"])):not(.widget_block:has([href*=\"google.com\"])),\n.wpsd-master-wrapper,\n[href^=\"https://afflat3c1.com/trk/\"]","[style^=\"overflow:\"]:has(#v-scritub-v3)","center:has(a)",".ai_widget.widget","#ppsPopupBgOverlay,\n.code-block-8.code-block,\n.ppsPopupShell","[href^=\"https://event.2performant.com/\"]",".banner",".branding-container",".banner-container,\n[href*=\"AdB\"],\n[id^=\"div-gpt-ad\"]",".size-large.wp-block-image,\n[href^=\"https://www.gralmedical.ro/\"]","#adv-Piede-sticky,\n.code-block:has([id^=\"taboola-\"])",".revis-widget,\n[href=\"http://www.erbasu.ro/\"]",".mask,\n.widget-popup,\n.widget-profitshare",".widget:has(.adsbygoogle)","#bula-ultima-ora",".banneritem",".p-b-30","#banner1,\n#banner5,\n#banner6,\n#banner8_singlebottom,\n#logorow > a[style=\"margin-left:30px\"],\n#meteo,\n.floating,\ndiv.ric.richmedia","#hightopbanner",".adv","div.d2011-block-lateral-middle:has(a[href*=\"voceabasarabiei.net\"])","#idvop_fbl",".adds",".banner-img",".wrapper:has([id^=\"admixer\"]),\n[class^=\"Banner\"]","#Wbanner300x250 > .maxima_zilei",".numbers-promo-placeholder",".td-a-rec",".text-11",".braso-adlabel,\n.braso-adlabel + [class]",".side-widget:has([class=\"adsbygoogle\"])","[href*=\"?utm_source=\"]","[href*=\"/?utm_source=cetateanul\"]",".ad-banner,\n.py-6:has([href*=\"/etoro\"])",".adsense-imagine,\n[href=\"https://creditrapid.ro/\"]",".background-image-clickable",".block-minorHeader,\n[data-widget-key=\"Reclama\"],\n[href^=\"https://www.airbnb.com/\"]",".height-300,\n.top:has([id^=\"div-gpt-ad\"]),\n[data-platform=\"AdNow\"],\n[data-platform=\"MGID\"]","#sam_branding","[id*=\"ads\"],\n[id^=\"banner\"]",".widget_custom_html",".ai-track,\n.e-con-full,\n.elementor-widget-smartmag-codes,\n.smartmag-widget-codes,\n[href=\"https://viamso.ro/\"]","[id^=\"buffercode_banner\"]","[href^=\"https://accounts.binance.me/en/register\"]","[href^=\"http://bit.ly/\"]","[href^=\"https://freakhosting.com/\"]",".aobn",".news-fb-comments,\n.side-col","[style=\"min-height: 260px;\"]:has([id^=\"adocean\"])",".popmake-content,\n.td-a-rec-id-header,\n.widget_wq_reclame","[class*=\"_ad_\"]",".minh-250","#branding-holder,\n.ad-in-artilce,\n.retail_insert_in_article",".custom-html-widget.textwidget","[href=\"https://www.sipotehnokaronline.com/\"],\n[href^=\"https://www.sviatoacademy.ro/\"]",".banner_wrapper","[id^=\"gid-ads\"]",".front-overlay-banners,\n[id=\"intRightSideBanners\"]",".bannergroup",".gofollow","[href=\"https://www.fabricadecompost.ro/\"]","#aboveheader,\n#sticky",".sam__branding,\n[style=\"min-height: 250px;\"]","#mvp-content-bot,\n.adsubtitlu",".promotion-section,\n[href=\"http://www.catenapascupas.ro/\"],\n[href^=\"https://www.catena.ro/\"]",".fmowr-link,\n.widget_fmowr.widget",".align-right:has(.adsbygoogle),\n.banner728x90px","[id^=\"ado\"]","[href=\"http://contramundum.ro/\"],\n[href=\"https://anonimus.ro/oferta-de-publicitate/\"],\n[href=\"https://fabricatinro.ro/\"],\n[href=\"https://gandeste.org/\"],\n[href=\"https://malltaranesc.ro/\"],\n[href=\"https://softimaj.ro/\"],\n[href=\"https://trenduri.blogspot.com/\"]","#ivm-inread,\n#slidebox,\n.DAGInScrollContainer,\n.bannerBox,\n.desktop_only.grey.section,\naside > .bannerBox,\nbody > .bannerGrey","#ribbon",".ads",".ads-vizualizare",".gads-top,\n.recl:not([href=\"#\"])","[href^=\"https://msi.gm/\"]",".widget:has(> [href]),\n[href=\"https://tradecores.com/\"]",".widget:has([href^=\"https://arhiblog.ro/colaboram/\"])",".pubheader",".pub,\n.textwidget:has([target=\"_blank\"]),\n[href=\"https://www.sab.ro/\"],\n[href^=\"https://www.porschefinance.ro/\"]",".td_spot_img_all",".td-pb-span12.tdi_24",".reclama",".custom-html-widget","[style]:has(> #RO_Web_SP_LB1_Skin),\n[style]:has([id^=\"div-gpt-ad\"])",".bg--dark,\n.branding",".height-250:has([id^=\"div-gpt-ad\"])",".height-250:has(.strawberry-ads)",".side_right_box:has([src*=\"banner/\"])","#text-49,\n.banner_g,\n[href^=\"https://ro.xtb.com/\"],\n[href^=\"https://www.brd.ro/\"]",".demand-supply,\n[href=\"https://fwdbv.ro/abonamente/\"]","A[href=\"http://bit.ly/1RQRaRq\"],\nA[href=\"https://aegonmarket.ro/\"],\nA[href=\"https://bancatransilvania.ro/pentru-companii/imm/credite-imm/investeste-romaneste/\"],\nDIV[id=\"_tdv_all\"]","[href=\"https://www.facebook.com/bmonkeyadv.ro\"]",".ai-rotate",".grv-product-box,\n.recomandations","[class^=\"banner\"]","[class^=\"reclama\"]","#sidebar > [href*=\"_click\"]",".clearfix [href][target=\"_blank\"][rel]:has([alt][title][style])","div.banner-container",".is-style-default [href]",".banners",".branding--top,\n.height-250:has(> [id^=\"div-gpt-ad\"])",".banner-ads-container",".article:has([href*=\"go4it\"]),\n.height-300:has([id^=\"div-gpt-ad\"]),\n.height-sm-360.height-xs-200.mg-bottom-20",".height-250",".textwidget:has([src])","#carvertical_widget,\n.description_area_gad,\n.second_carvertical_noVin,\n[href^=\"https://www.carvertical.com/\"]","#footer-ads-section,\n.pin-it-button",".hidden-xs:has([id^=\"div-gpt-ad\"])","#banner_container_top",".google-ads-billboard,\n.google-ads-in_article",".axd","[href*=\"utm_medium=banner\"],\n[href^=\"https://sdcproperties.ro/\"],\n[href^=\"https://www.studiumgreen.ro/\"],\n[id^=\"ad\"]",".billboard:has(#consoAdTop)",".wpb_wrapper > aside.widget_text.widget","[href=\"https://www.kerigma.ro/\"],\n[href^=\"https://librariact.ro/\"]","[src*=\"banner\"]",".textwidget",".customnomobile,\n[href^=\"https://www.nurvil.ro/\"]",".theiaStickySidebar",".sidebar,\n.sidebar-mid,\n[href=\"https://almaclinic.ro/\"],\n[href^=\"https://car-invatamant.ro/aplica-online/\"]","[href=\"https://www.amosnews.ro/\"]","[href^=\"https://www.facebook.com/profile.php\"]",".centered:has(.strawberry-ads-manager-container),\n.mg-bottom-10:has(.strawberry-ads-manager-container)",".ipsWidget_inner:has([href*=\"freakhosting.com\"]),\n[href=\"https://redsky.ro/\"]",".twp-ad-image-section,\n[class*=\"widget_media_image\"],\n[id*=\"widget_sp\"]","[alt=\"ad\"],\n[href=\"https://hotelilavamaveche.ro/\"],\nimg[alt=\"Dr.Teo\"]",".profitshare",".adsense","[data-banner]",".essbis-container",".td-loader-gif,\n[href*=\"maie.ro\"]","[href=\"https://www.dcbusiness.ro/cum-nu-construim-in-romania\"]","[href=\"https://arca.info.ro/\"],\n[href=\"https://www.proger.ro/\"]","[href^=\"https://ccir.ro/\"]","#articleContent > [style]:has([data-ad]),\n[align=\"center\"]:has(#div-gpt-dcnews_gpt-billboard_responsive),\n[data-ad]","[href*=\"&utm_campaign\"],\n[href*=\"banner\"],\n[href=\"http://www.arenamall.ro/\"],\n[href=\"https://anunturi.desteptarea.ro/minireclame/\"],\n[href^=\"https://volvobacau.ro/cere-oferta\"],\n[style*=\"banner\"]",".alert-warning.alert","[id^=\"media_image\"]:not(*:has([href*=\"dezvaluiri.ro\"]))",".space","#adContainer,\n#category_b",".a-wrap","[class*=\"banner\"]",".featuredBrandsCon",".content-add,\n.side-sticky-banner",".gridview-post-ad-two,\n[href=\"http://arosa.ro\"],\n[href=\"https://www.facebook.com/florievenimentecadouri\"],\n[href=\"https://www.facebook.com/laguna.focsani/\"],\n[href=\"https://www.facebook.com/reinabijou.ro\"],\n[href^=\"https://m.facebook.com/\"]",".ns-wrap-bottom-right",".section.add",".cxADBlock,\n.videoPlayerAD","[id^=\"media_image\"]","#background-link","#background-image,\n.nspb-interstitial,\n.player-bar-ad","#adobranding","[href=\"http://boromir.ro/\"],\n[href=\"https://uzinamecanicavl.ro/site/index.php\"]","#ado970p1,\n#ado970p2,\n#lastmin,\n#lastmin2,\n#likepagefb,\n#overlay,\n#ureche-fb,\n.agoramag,\n.bncp-desktop,\n.brandc,\n.ford.reclama-auto,\n.news-listing-comunicate,\n[href=\"https://agoramag.ro\"]",".container.mg-top-20:has([href*=\"pariuri\"]),\n[class^=\"ssc-card__branding\"],\n[id^=\"strawberry_feeds_manager_widget\"],\n[rel^=\"sponsored\"]",".banner-info","td[width=\"250\"]:not(*:has([href*=\"fileshare.ro\"]))","div[id^=\"custom_html\"],\ndiv[id^=\"text\"]",".adsclick,\n.adscontent,\n.adsenvelope,\n.boxOverContent__banner,\n.boxOverContent__getOfferLink,\n.container__bannerZone",".textwidget:not([class]:has([href^=\"https://floteauto.ro\"])):not([class]:has([href*=\"//www.autoexpert.ro\"])),\n[href^=\"https://ivecopentrutine.ro/\"]","[href*=\"profitshare.ro/\"]","aside.widget_media_image.widget.td_block_template_1","[href=\"https://e-husa.ro/\"]",".code-block:has(.ad-header),\n.post-review:has(.author-publicitate),\n[data-ai-debug]:has([src*=\"pnl\"])","[id^=\"block\"]:has([src*=\"pub\"])","aside.widget_media_image.widget",".geeki-before-content,\n.geeki-la-inceput-de-articol-mobil","[href=\"http://prohd.ro\"],\n[href=\"http://www.avis3000.ro/\"],\n[href=\"http://www.jos-palaria.ro/\"],\n[href^=\"https://www.fordcarbenta.ro/\"]",".mg-bottom-10:has(.strawberry-ads)",".container-wrapper > [href=\"https://www.gorjonline.ro/anunturi/\"]:has([src])",".elementor-element:has([data-widget_type=\"image.default\"]),\n.wp-block-image:has([sizes])","[class^=\"banner\"]:not(*:has(.related-in-article))",".images_adv","#master\\.dreapta\\.carlig\\.smartw_12938869,\n#medlive_6844636,\n#pageBodyx > .padded_page_body > .contentFather > .content > .right_side > a > img,\n#rss\\.domnuleprimar_5328294,\n#rss\\.euractiv_20456596,\n#rss\\.medlive_20312972,\n#rss\\.webpr_6183168,\n.articol_lead_full[style=\"width: 158px; margin-right:5px; float:left;\"],\n.at-widget-anunturi,\n.parteneri","#\\$\\{tile\\.name\\}_\\$\\{tile\\.id\\}",".td-a-rec-id-sidebar.td-a-rec","#adswidget1-quick-adsense-reloaded-2,\n#banners-4","#billboard,\n#rectangle,\n.fake_grooveskin",".height-sm-250.height-xs-400.text-center.mg-bottom-20,\n.mg-top-20.container--single.container > .mg-bottom-20","#text-25,\n.widget:has([src*=\"pagead\"])",".widget_custom_html.side-widget.widget_text,\n[href=\"http://www.april91.ro/\"],\n[id^=\"custom_html\"]:has([alt^=\"Agentie\"])",".banner_image","[width=\"2246\"][height=\"519\"]",".panel[class*=\"widget\"]",".code-block",".td-a-rec-id-custom-spot","#text-2",".DAGInScrollInner:has(.bannerBox),\n.bannerGrey",".afis-sticky,\n[id*=\"overlayer\"]",".sidebar:has([class^=\"ad-\"])","#billboard:has(.add-container)",".ai-attributes,\n.reclamaLata,\n.titluReclama","#floating",".section-full-ads",".row-header-baner,\ndiv.bnd",".pum-active",".index-slide,\n[id*=\"banner\"],\n[src^=\"https://luju.ro/static/images/ccir\"],\naside.externals:has([href*=\"cotidianul.ro\"]),\nvideo",".sp-module-content","#copy","#FixedDivContainer,\n#fixedDiv",".td_block_template_1:has(.td_single_image_bg),\n.td_block_template_1:has([class^=\"td-adspot\"])",".bannerDFP","#alephLiveBkp","#alephLive,\ndiv.notif-bula.notif",".mg-top-20,\n.sam-container",".textwidget:has(.adsbygoogle)",".widget_media_image",".theiaStickySidebar.inner,\n[href=\"http://www.volta.ro/\"],\n[href=\"https://www.platinumoptic.ro/\"],\n[href^=\"https://cybernet.volvocarsdealer.ro/cere-oferta\"]","#honda_bnr_rot_1,\n[href=\"http://www.itsybitsy.ro/live/\"]",".aboveDisqusBanners",".widget-container:has(.adsbygoogle),\n.widget-container:has([id=\"t5_zone_standard-ga\"])","#_tdv_all,\n[href*=\"imobiliare.ro\"]",".widget_rss:has([href*=\".bursa.ro/\"]),\n[class*=\"td-a-rec-id-custom_ad\"],\n[href=\"https://www.bursa.ro/\"]",".widget_custom_html.widget.widget_text",".listAd.center-block.img-responsive,\n.visible.go-premium-drawer",".content-segment:has([src*=\"pagead\"]),\n[style*=\"border-radius: 3px; margin-bottom: 20px; width: 160px;\"]:has([target=\"_blank\"])",".pls-dis-blck",".container-wrapper:has([src*=\".mgid.com\"])","#pa_inarticle_placeholder",".widget:has([target=\"_blank\"]),\n[href=\"http://www.coralimpex.ro/\"],\n[href=\"http://www.rosal.ro/\"],\n[href=\"http://www.trcj.ro\"]","#ys-container,\n.clear:has(a),\n.metasingle-jos,\n.visible.ys-layer",".widget-container:has(ins.adsbygoogle),\n[href=\"https://www.incorectpolitic.com\"]","[href=\"https://www.facebook.com/TaxiLuxTarguNeamt/\"]",".sow-image-container:has([target=\"_blank\"][rel])","#text-10","[href=\"https://indagra.ro\"],\n[href=\"https://plescavita.ro/produs/plescavita/\"],\n[href=\"https://www.indagra-food.ro/\"]","#block-2,\n.textwidget:has([src*=\"anner\"]),\n[href=\"https://www.rplp-piatracraiului.ro/\"]",".vc_column-inner:has(.adsbygoogle),\n[style^=\"min-height: 200px;\"]:has(.adsbygoogle)","#stickynote4",".adv-link",".second_header > .container > .reclama728,\n.textwidget:has(.afiliere)",".bk-sticksb-wrapper,\n.ottowebAds","[href=\"http://www.moveout.ro/\"],\n[href=\"https://chestionareauto.ro/\"]",".ptate,\n.ptate_banner_cmz,\n[href=\"http://www.rcforfun.ro/\"],\n[href=\"https://www.anvelopemag.ro/anvelope-iarna.aspx\"],\n[href^=\"https://afiliati-online.casapariurilor.ro/promoRedirect\"]",".stream-item-mag:has([href=\"\"]),\n.stream-item-mag:has([target=\"_blank\"]),\n[href=\"https://souqeshop.ro/panouri-solare-fotovoltaice/\"],\n[href^=\"https://vreaulanova.ro/\"]",".hiddenad,\n.reclama-cod,\n.reclama-inside,\n.reclama-video,\n[href=\"http://euro-instal.ro\"],\n[href=\"http://toronto-residence.ro/contact/\"],\n[href=\"https://certificatenergetictimis.ro/\"],\n[href=\"https://www.rapidauto.ro/ro/content/showroom-timisoara.html\"]",".sidebar-column-primary.sidebar-column.col-sm-4 > .sidebar,\ndiv[class^=\"ods\"]","#fpub-popup",".entry-content > div.demand-supply",".widget_custom_html:has([src*=\"pagead\"])","div.center.well-sm.well",".card:has(.adsbygoogle),\ntr[onclick*=\"revolut\"]","div[class^=\"akcelo\"]",".height-md-250,\n.height-md-300.height-xs-400,\n.height-sm-250.height-xs-300,\n.mg-bottom-10.text-center,\n.padding-top-10.padding-bottom-10,\ndiv.height-300,\ndiv.mg-bottom-20.height-300","#tdi_195,\n.tdi_153",".st-sidebar-widget:has([src*=\"publicitate\"]),\n[src^=\"/media/publicitate/\"],\ndiv.st-clr.st-ad-region",".td-a-rec-id-custom-spot:has([href=\"https://www.vadrexim.ro/anvelope.html\"]),\n.tdi_74,\n[style]:has(.td-adspot-title):has(.td_spot_img_all)","#text-6,\n[href=\"http://exploremag.ro\"],\n[href=\"http://www.inimadecopil.ro/\"]",".widget:not(*:has([href*=\"presasm.ro\"])):not(*:has([data-href*=\"facebook\"])),\n.wp-image-179110","[id^=\"box\"]:has(.adsbygoogle)",".in.fade.modal-backdrop,\n.in.fade.modal.subs-popup","[href*=\"?referral\"]","div[class^=\"strawberry-ad\"]","#crt-523989,\n#crt-523996,\n.height-250.mg-bottom-20,\n.height-250.mg-sm-bottom-20,\n.height-250.text-center,\n.strawberry-ad,\n.strawberry-ads-manager-container,\n[data-platform]:has([id^=\"div-gpt-ad\"])",".brandingDfp,\n.container.billboard-1-index:has([id^=\"div-gpt-ad\"])",".image[height=\"250\"][width=\"300\"]",".custom_ad_back_q","iframe[src*=\"feature=oembed\"]",".view-advertising-banner",".desktop.billboard.use-placeholder",".widget:has([href]:not([href*=\"radiomplusfm.ro\"]))","[href=\"https://renth.ro/index.php\"]",".feededay",".mrf-adsmedia",".object-contain,\n.rounded.border-gray-200","#ONN_player",".add728x90,\n[href=\"http://www.epamedia.ro\"],\n[href=\"http://www.messages2autdoor.ro\"]","#text-28 > .textwidget","#widgetArticleControlsLeft,\n#widgetArticleControlsRight,\n.left > .widget-profitshare",".promo","[href*=\"&do=advertisement\"]","#promoClk,\n#reclame",".lvd-blog-ad,\n.textwidget:has([target=\"_blank\"]:not([method])),\n.widget_text:has([id^=\"div-gpt-ad\"])",".leaderboard","#widget_text > .shadowblock,\n[href*=\"ad_click\"]","#ubm-banners-3,\n.ig_content,\narticle > div.td-post-content > p > a.td-modal-image","[href=\"mailto:publicitate@dcnews.ro\"]",".dfp-d-billboard,\n.dfp-d-branding",".textwidget:has([href*=\"facebook.com\"]),\n[href=\"https://www.welthaus.ro/\"]",".banner-image",".widget-title",".leaderboard.bstats,\ndiv[onclick]",".td-spot-id-content_bottom,\n.td-spot-id-content_inline,\n.td-spot-id-content_top",".adcontainer",".attachment-full.vc_single_image-img,\n.wpb_wrapper.vc_figure:has([target=\"_blank\"]),\n[href*=\"tornabuoni.ro\"],\n[href*=\"virtualmag.ro\"]","#custom_html-58,\n[id^=\"wds_\"]",".vc_column_inner > .vc_column-inner > .wpb_wrapper:has(.adsbygoogle)",".ai_widget",".col-sm-4:has([class=\"ad\"])","#topBranding,\n.topBranding","[id*=\"_ads\"]","#taboola-sponsored-mid-article,\n.banner-request.news-widget-color-1.news-widget.widget,\n.bgcolor-revista-blogurilor,\n.border-revista-blogurilor,\n.giant-modal--fb-like.giant-modal,\n.giant-modal__left__text,\n.in-article-banner,\n.js-alternating-banners,\n.news-widget:not([class]:has([href^=\"https://www.stiripesurse.ro\"])),\n.row:not([class]:has([href^=\"https://www.stiripesurse.ro\"])),\n.small.banner,\n.vertical-banner,\n[href*=\"Adv\"],\n[href*=\"Promo\"]",".lazyloaded.size-full:not([src*=\"Aqua\"]),\n.wp-block-image",".incontent:has(.adsbygoogle),\n[id^=\"subst-\"][style]",".border:has([href*=\"binance.com\"])","#text-25:has(.adsbygoogle),\n#text-30:has([href*=\"jooble.org\"])","#ad-bilboard",".g-single,\n.widget:has([href]:not([href*=\"timponline.ro\"])),\n[href=\"https://www.facebook.com/romanadecomobili\"]",".code-block:has(.hbagency_space_19811),\n.size-full.wp-block-image",".magazin1,\n.magazin[href=\"http://camerevideoauto.ro\"],\n.smecher,\ndiv[style$=\"width:520px\"],\ndiv[style*=\"width:520px;\"]","#flashContent",".herald-header-wraper.header-middle,\n.widget:has([data-aid]),\n[href]:not([href*=\"tuktuk\"]):has([src*=\"anner\"]),\n[href^=\"//www.booking.com\"]",".header_banner",".home-featured-boxes,\n.homepage-banner,\n[href^=\"https://www.skinmedspa.ro/\"]",".module-inner,\n[href=\"https://app.aqmeter.com/\"]",".wpb_content_element,\n[class^=\"widget\"] [src][width][height]",".sam_branding.hidden-xs,\ndiv[class^=\"strawberry\"]","#home_calendar > a","#widget-wrap:not(*:has([href*=\"uzpbihor.ro\"]))",".height-250:has(.adsbygoogle)",".widget-wrap:has(.adsbygoogle)","#background-div",".td-a-rec-id-custom-spot:has([alt=\"spot_img\"]),\n.td_block_template_1.td-single-image-,\n.tdc-element-style.td-pb-row.wpb_row:has([target=\"_blank\"]):has([class^=\"td-lazy-img\"])","#adocean\\.slots\\.box3,\n.minh-250.mb-20.mt-20,\n.minh-lg-600.sidebarBox,\n.slick-slider.slick-initialized.ws_gallery_image,\n.slick-slider.slick-initialized.ws_gallery_image > .draggable.slick-list > .slick-track,\n[class^=\"add\"]:has([id^=\"adocean\"])","[id^=\"werad\"]","[href=\"https://www.hulber.ro/\"],\n[href^=\"http://constantinnautics.ro/index.php\"]","[href=\"https://www.pieseshop.ro/\"]",".bookingaff,\n.widget_sp_image,\n.widget_sp_image-image-link",".hidden-xs:has(.ad-placeholder)","[href=\"https://www.priboisiasociatii.ro/\"]",".banda-sticky-mini,\n.banda-sticky-vp","div.ad",".rzonvm-image","#text-3","#block-3,\n#block-4,\n#block-6,\n#block-7","#foot-ad-wrap,\n#leader-wrap,\n.lazyloaded.alignnone","[class*=\"e3lan\"]",".ziarul-ad",".afiseaza-desktop,\n.widget_links.widget,\n.widget_text.widget:not(*:has([href*=\"ziaruldebacau.ro\"]))","[href*=\"adclick\"]",".widget_block,\n[href*=\"raureni.ro\"]",".td_block_template_1.vc_column_text:has([href]):not(*:has([href*=\"ziaruldinmuscel.ro\"])),\n.vc_empty_space","[href*=\"/adclick.php\"],\n[href^=\"https://www.bursa.ro\"]",".td-a-rec:has([href*=\"350x350\"])",".td-a-rec-id-content_bottom.td-a-rec,\n.vc_raw_html.td_block_wrap.wpb_wrapper,\n[href^=\"http://www.spitalbunavestire.ro/\"]","#mvp-leader-wrap","#optional_banner,\n[class^=\"custom_module add\"]","#pub-top-container","[href^=\"//www.techinstyle.ro/\"],\n[id^=\"custom_html\"]:has([id^=\"adocean\"])",".widget_text.text-124.widget,\n.wpb_wrapper:has([href^=\"https://repigmentare.ro/\"]),\n[href=\"http://stefanovidiu.ro/\"],\n[href=\"https://www.ecrgroup.eu/\"],\n[href=\"https://www.expresorul.ro/\"]"];

const hostnamesMap = new Map([["*",0],["filme-bune.biz",2],["aproapemasini.com",3],["asculta-live.com",4],["sighet247.ro",4],["clubopel.com",5],["damboviteanul.com",6],["subs.epochbase.com",7],["epochtimes-romania.com",8],["escortebucuresti.com",9],["gazetaromaneasca.com",10],["georgebutunoiu.com",11],["restocracy.ro",11],["incorectpolitic.com",12],["mediculmeu.com",13],["nimfomane.com",14],["pofta-buna.com",15],["programegratuitepc.com",[16,17,18]],["bzi.ro",[16,125]],["arenavalceana.ro",[17,99]],["qreferat.com",19],["rasfoiesc.com",[20,21]],["scritub.com",[20,25]],["roboxfilme4k.com",22],["romaniataramea.com",[23,24]],["timpul.md",[23,50]],["serveresamp.com",26],["viatasisanatate.com",[27,28]],["ziarulromanesc.de",[27,34]],["vloggeri.com",29],["ziare.com",[30,31,32]],["poliexpert.md",30],["bursa.ro",[30,121]],["business24.ro",[30,31,122]],["exquis.ro",30],["flashscore.ro",[30,183]],["inturda.ro",[30,208]],["mobilissimo.ro",[30,151,234]],["stiripesurse.ro",[30,158,316]],["turdainfo.ro",[30,329]],["ziartopdearges.com",33],["revistaconstructiilor.eu",35],["academiacatavencu.info",36],["actualitati.info",37],["litoraltv.ro",[37,220]],["tuktuk.ro",[37,326]],["gandul.info",38],["mediafax.ro",[38,227,228]],["prosport.ro",[38,278]],["zf.ro",[38,227,345]],["gazetadeagricultura.info",39],["albaiulianul.ro",39],["ph-online.ro",39],["reporteris.ro",39],["7media.md",40],["curentul.md",[41,42]],["tribuna.md",42],["hotnews.md",43],["istoria.md",44],["protv.md",45],["radiochisinau.md",46],["shok.md",47],["stiri.md",48],["stirinonstop.md",[49,50]],["bacau.net",[51,52]],["presadeazi.ro",[51,271]],["timisplus.ro",51],["brasov.net",53],["bucurestitv.net",54],["buzau.net",55],["cetateanul.net",56],["coinjournal.net",57],["dexonline.net",58],["newsromania.net",59],["roforum.net",60],["romaniatv.net",[61,62]],["playtech.ro",[62,109,268]],["saptamana.net",63],["satmareanul.net",64],["glasul-hd.ro",[64,83,192]],["lapunkt.ro",64],["turdanews.net",65],["vestea.net",66],["filmeonlinesubtitrate.org",67],["filmeserialeonline.org",68],["1tap.ro",69],["4tuning.ro",[70,71]],["anunturi-auto.4tuning.ro",70],["pieseauto.ro",70],["forum.4tuning.ro",72],["7est.ro",[73,74]],["monitoruldevrancea.ro",[74,237]],["9am.ro",[75,76]],["kudika.ro",[75,215]],["wall-street.ro",[75,95,338]],["actualdecluj.ro",77],["jocuricool.ro",[77,211]],["motorclasic.ro",[77,238]],["stiriardeal.ro",[77,305]],["actualitateavranceana.ro",78],["actualmehedinti.ro",79],["adevarul.ro",80],["aerotim.ro",81],["agoramedia.ro",82],["agro-tv.ro",[83,84]],["ctnews.ro",83],["agrointel.ro",85],["aktual24.ro",86],["alba24.ro",87],["amosnews.ro",88],["ampress.ro",89],["androidu.ro",90],["animalzoo.ro",91],["capital.ro",91],["doctorulzilei.ro",91],["evz.ro",[91,178]],["infoactual.ro",91],["retetesivedete.ro",[91,176,290]],["anonimus.ro",92],["antena3.ro",[93,94]],["jurnalul.ro",[94,212]],["anunturi66.ro",[95,96]],["spynews.ro",95],["tvhappy.ro",95],["useit.ro",95],["anunturigarla.ro",97],["arenait.ro",98],["arhiblog.ro",100],["autoexpert.ro",[101,102]],["floteauto.ro",[101,184]],["autolatest.ro",[103,104]],["flux24.ro",[103,185]],["focuspress.ro",[103,186]],["mediaflux.ro",[103,229]],["mediastiri.ro",103],["monitorulexpres.ro",103],["politik24.ro",[103,269]],["refleqtmedia.ro",103],["solidnews.ro",103],["stiridepitesti.ro",[103,307]],["automobilen.ro",105],["eblogauto.ro",105],["sporttim.ro",105],["autoplay.ro",106],["g4media.ro",[106,188]],["gazetadambovitei.ro",106],["ziarul21.ro",[106,350]],["autouncle.ro",107],["b1tv.ro",[108,109]],["b365.ro",110],["bancherul.ro",111],["bankingnews.ro",112],["bizbrasov.ro",113],["biziday.ro",114],["brasovmetropolitan.ro",115],["brasovstiri.ro",116],["bucataras.ro",117],["bugetul.ro",[118,119]],["cugetliber.ro",118],["buletindecarei.ro",120],["buzoienii.ro",123],["bzb.ro",124],["i-car.ro",[124,201]],["campinatv.ro",126],["cancan.ro",[127,128]],["impact.ro",[128,203]],["cargo-bus.ro",129],["carzz.ro",130],["catchy.ro",131],["ciao.ro",132],["cinemagia.ro",133],["click.ro",134],["clubmercedes.ro",135],["loganclub.ro",135],["clujust.ro",136],["conso.ro",137],["craiovaforum.ro",138],["crestintotal.ro",139],["crisana.ro",140],["cspower.ro",[140,148]],["hotnews.ro",[140,198]],["luju.ro",[140,221]],["cristianmargarit.ro",141],["gazetadecluj.ro",141],["sroscas.ro",141],["criterii.ro",142],["cronicadefalticeni.ro",[143,144]],["zicala.ro",143],["cronicazilei.ro",[145,146]],["editiedevrancea.ro",[146,169]],["csid.ro",147],["ct100.ro",149],["curier.ro",150],["daciaclub.ro",[151,152]],["reno.ro",[151,152]],["dailybusiness.ro",153],["fanatik.ro",[153,179]],["dailyfeed.ro",154],["dc360.ro",155],["dcbusiness.ro",[156,157]],["dcnews.ro",[156,158,159]],["desteptarea.ro",160],["dez.ro",161],["dezvaluiri.ro",162],["diacritice.ro",163],["digi24.ro",164],["dinpopor.ro",165],["dirtbike.ro",166],["zvj.ro",166],["divahair.ro",167],["doc.ro",168],["emag.ro",170],["epitesti.ro",171],["eporno.ro",172],["filme-porno.ro",172],["estnews.ro",173],["europafm.ro",[174,175]],["virginradio.ro",[174,336]],["evenimentulistoric.ro",176],["evenimentvalcean.ro",177],["farmaciata.ro",180],["fileshare.ro",181],["filmecrestineonline.ro",182],["forum-auto.ro",187],["gadget.ro",189],["gazetadinvest.ro",190],["geeki.ro",191],["go4games.ro",193],["gorjonline.ro",194],["graiulsalajului.ro",195],["gsp.ro",196],["horoscop.ro",197],["science.hotnews.ro",199],["hunedoaraplus.ro",200],["ilike-it.ro",202],["impactpress.ro",204],["info1tv.ro",205],["infobistrita.ro",206],["informatia-zilei.ro",207],["investigatoria.ro",209],["jamilacuisine.ro",210],["national.ro",[210,245]],["zhd.ro",210],["ziarmedical.ro",210],["kanald.ro",213],["kfetele.ro",214],["lauralaurentiu.ro",216],["libertatea.ro",217],["libertateapentrufemei.ro",218],["libnet.ro",219],["lumeasatului.ro",222],["manafu.ro",223],["manager.ro",224],["mangalianews.ro",225],["marketingportal.ro",226],["mesagerulhunedorean.ro",[230,231]],["odat.ro",[230,257]],["stiridinromania.ro",[230,309]],["tomisnews.ro",[231,323]],["ziaruldevalcea.ro",[231,355]],["mesagerulneamt.ro",232],["missauto.ro",233],["moduri.ro",235],["moise.ro",236],["multecase.ro",239],["myexpert.ro",240],["myradioonline.ro",241],["mytex.ro",242],["napocanews.ro",[243,244]],["r3media.ro",[243,282]],["ziuaconstanta.ro",[243,361]],["nationalisti.ro",246],["neamt24.ro",247],["newmoney.ro",248],["newsbucovina.ro",249],["ziarroman.ro",[249,348]],["newsbucuresti.ro",250],["newsbv.ro",251],["newsmed.ro",252],["nosteam.ro",253],["novatv.ro",254],["nwradu.ro",255],["obiectiv-sm.ro",256],["onlinesport.ro",258],["opiniabuzau.ro",259],["opiniatimisoarei.ro",260],["oradesibiu.ro",261],["ortodoxinfo.ro",262],["paginademedia.ro",263],["parerimagazin.ro",264],["pbinfo.ro",265],["peco-online.ro",266],["petitchef.ro",267],["portalsm.ro",270],["presagalati.ro",272],["presasm.ro",273],["pretbenzina.ro",274],["pricy.ro",275],["project-e.ro",276],["promotor.ro",277],["protv.ro",279],["prwave.ro",280],["qmagazine.ro",281],["radiobrasov.ro",283],["radioimpuls.ro",284],["radiomplusfm.ro",285],["rangfort.ro",286],["razvanbb.ro",287],["redactia.ro",288],["republikanews.ro",289],["rnews.ro",291],["roman24.ro",292],["romanialibera.ro",293],["romedic.ro",294],["sa-mp.ro",295],["sfatulmedicului.ro",296],["sfatulparintilor.ro",297],["shtiu.ro",298],["site-anunturi.ro",299],["smlive.ro",300],["spectacola.ro",301],["sport.ro",302],["sportulsalajean.ro",303],["stiri-neamt.ro",304],["stiridecluj.ro",306],["stiridesibiu.ro",308],["stiriest.ro",310],["stirilebzi.ro",311],["stirileimobiliare.ro",312],["stirilekanald.ro",313],["stirileprotv.ro",314],["stirimed.ro",315],["stirivaslui.ro",317],["substantial.ro",318],["super-boost.ro",319],["televiziunea-medicala.ro",320],["tenisdecamp.ro",321],["timponline.ro",322],["trafictube.ro",324],["transilvaniareporter.ro",325],["turatii.ro",327],["turbomag.ro",328],["tvmneamt.ro",330],["retete.unica.ro",331],["urban.ro",332],["uzpbihor.ro",333],["vbiz.ro",334],["videotutorial.ro",335],["vremeanoua.ro",337],["weradio.ro",339],["yachtexpert.ro",[340,341]],["zero-accidente.ro",[341,344]],["zch.ro",342],["zcj.ro",343],["ziardecluj.ro",346],["ziarobiectiv.ro",347],["ziartarguneamt.ro",349],["ziarulargesul.ro",351],["ziarulatac.ro",352],["ziaruldebacau.ro",353],["ziaruldeiasi.ro",354],["ziaruldinmuscel.ro",356],["ziarulevenimentul.ro",357],["ziarulincomod.ro",358],["ziarulsanatatea.ro",359],["ziarulunirea.ro",360],["ziuanews.ro",362],["zonait.ro",363],["nasul.tv",364]]);

const entitiesMap = new Map([["emag",1]]);

const exceptionsMap = new Map([["patriotromania.ro",[0]]]);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
