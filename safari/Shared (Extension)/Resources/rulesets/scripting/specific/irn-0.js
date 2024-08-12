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

// ruleset: irn-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = ["a[href^=\"https://arongroups.co/\"],\na[href^=\"https://arongroups.site/\"]",".banner-cafe,\n.center-talgh","div[data-viewport-type=\"element\"] > div > div[class^=\"DialogAd_DialogWrapper\"]","div.adv",".col-xs-12.col-md-6.main-sidebar > center,\ncenter:nth-of-type(2)","div.panel:has(> div#collapse_Linkestan),\ndiv[style=\"text-align:right; margin:10px;\"]:has(> a[href=\"http://ads.aftab.cc\"])","[href^=\"/advertisements/\"]",".widget_custom_html.widget.container-wrapper.widget_text",".ads-title,\n.stream-item-above-post.stream-item,\n.stream-item-mag.mag-box",".ads-post",".link-paeen","div#custom_html-4","div.container-ads,\ndiv.left-ads",".ads-text-sid,\n.pt-3.text-center.py-2.bg-all-box,\n.text-center.py-3.bg-all-box","#text-25",".main-zxc","#footer_js_d1,\n.banner-container,\n.col-sm-3 > .block > .img:not(:has(a[href*=\"aftabir.com\"]))","#left2","#ads",".yn-bnr","#pos-article-display-66259",".ag-agah",".ads_place,\n.app_introduce","#toshare-dl-link",".announce,\n.dsp-ad,\n.promote-puls,\ndiv[type=\"aparat\"]:has(> .link)",".side-ads",".baner",".header-ad",".top-ad",".mks_ads_widget",".webgardi",".bottom-ad","a[href*=\"nobitex.ir\"]","#kaprila_linktable",".box[class^=\"asan\"],\n.content-box,\n.text-asan,\narticle.post.game:not(:has(.button, .post-cat))","div#mobile-headerads,\ndiv#topads,\ndiv.footer-ads,\ndiv.side-ads",".right-sidebar > p > a > img[title=\"رپورتاژ\"]",".advRemove,\n.click1000_allcontent,\n.webgardi_main > #txtadv5 > a[href*=\"asriran.com/fa/ads/redirect/\"]","figure.size-full.wp-block-image","aside > div.sec_right > div.menu_box > div.margin > ul > li:has(> a[href*=\"bargozideha.com/reportage/\"]),\ndiv[style]:has(> iframe[src=\"/ddd.html\"])",".alert-dismissible,\ndiv.text-center.col-md-3 > .paddingAll10.panel-success.panel","#middlead",".medicaldirectory-sidebar:nth-of-type(5) > .claims.sidebar-content > .cbp-l-project-details-title > span","div.mp_box:has(> div.mpbb_ads a[target=\"_blank\"] > img[alt][title])",".pix_of_day,\ndiv[style=\"margin-top:4px;overflow:hidden;\"],\ndiv[style=\"margin-top:5px;margin-bottom:3px; overflow:hidden;\"]","#bil_fix_top_pc,\n#headerbar,\n.c-ads-banner,\n.content-slider,\n.countclick,\n.hamsan-container,\n.m-banner-r,\ndiv[class^=\"pcfadv\"]",".ads_link8,\n.blog-home-ads-blog,\n.blog_center_bar > center > a[href*=\"eramblog.com/action/static_ads\"],\n.hamsandiv",".col-md-3 > .panel > .tarh-forosh,\n.col-md-3 > .panel > center,\n.leftads",".parent_txt_adv_container2","figcaption","#custom_html-51",".mtn-ads-content-sticky,\nimg[alt=\"ad banner\"]",".widget_custom_html.widget.primary-sidebar-widget.w-t.h-ni.widget_text",".widget_text.widget.primary-sidebar-widget.w-t.h-i","[href*=\"/banners/click/\"]",".weblink",".bd-adsbar,\n.delta-content-ads,\n.delta-top-content-ads",".digiBannerArea,\n.homeMainBanner,\n.todaysNewsList__sidebar",".mb-4:has(.mr-auto.text-caption.ai-center),\n.radius-large-lg:has([class*=\"SponsoredBrandCarousel\"]),\n[class*=\"ProductContent\"]:has(.mr-auto.text-caption.ai-center)","a:has(> img.ads_pic),\na:has(> img.shbanner),\na[href=\"https://farsisaz.com/\"][target=\"_blank\"][rel=\"noopener\"],\ndiv.ADS_wrapper,\ndiv.shbanner_cover,\ndiv.widget_content:has(> ul.blog_list)","#home-2-col > .bs-vc-wrapper > .vc_col-sm-3.vc_column_container.bs-vc-column.wpb_column,\n.widget_nav_menu.widget.primary-sidebar-widget.w-t.h-ni","[href^=\"/advertisements/triggered/\"]",".zxc",".custom-ad-one,\n.zxc-m","aside.lefts_sides:has(> div.txt_letfs > ul.ads_txtcv),\ndiv.adsfix_box","div.ads","div.popup-ads","a[href^=\"https://zaya.io/\"]",".ads","div.medicaldirectory-sidebar:nth-of-type(6) > .claims.sidebar-content > .cbp-l-project-details-title > span",".sidebar-home:has(.ads_0)",".advs-wrapper","div.ads-sec,\ndiv.ads-sec-web,\ndiv.bottomTextAdv,\ndiv.heightAds","div.chatlist-parts > div.chatlist-top > ul.ads-dialog-box",".adv",".adv-ttl","div.textwidget > div.ads","#middle a > img[title*=\"تبلیغات\"],\n#sidebar a:not([href*=\"elmevarzesh.com/\"]) > img[width=\"300\"][height=\"200\"],\n.col-md-8 a:not([href*=\"elmevarzesh.com/\"]) > img[width=\"728\"][height=\"90\"]",".stream-item-widget",".widget-ad-image","a[href^=\"https://eramblog.com/direct_link/?ads=\"][rel=\"nofollow\"][target=\"_blank\"],\ndiv.blog-home-ads-blog,\ndiv.main_content[style=\"border-radius:10px;\"]:has(> div[style=\"padding: 10px; text-align:center; font-size:13px;\"]),\ndiv[class^=\"ads_link\"]",".centernews_soc,\n.left_pos_mod > .l_box.imgs,\n.newstopads,\n.r_box:has(p)",".text-ads","#ynpos-10831,\n.ezp30-ads,\n.fix-ez",".advertisement",".news_slider_sec2,\n.webgardi_adv",".header-adv,\n.others_media,\n.sticky_notify2,\n.zxc-stik",".txt-adv-box",".zxc-visible-fixed",".inline-news-box,\n.talfighat-row,\n.ul-talfigh-con",".results__a","div.ads-content","section.player-container div.filimo-logo-filimo","div.ad-cat:not(div.ad-custom-size)","div#rt-download:has(> div#ZAD)","div#fix-advertise,\ndiv.content-ads,\nheader.header-part div.banner:has(> div.d-table-cell > a.d-block > img),\nsection#image-advertise,\nsection#top-banners","div.single-advertise",".bottom-ads,\n.card-ads",".tads","#ads-main-home,\n.ads-img","div.post:has(a[href^=\"https://www.tarhdokan.com/\"]),\nul#tabligh,\nul#tablighc",".sticky-ad","div.box:has(> div.ads),\ndiv.container > div.ads","aside.sidebar .widget:has(a.external)",".primary-sidebar-widget:has(a[rel*=\"sponsored\"])",".secondary-sidebar-widget:has(a[rel*=\"sponsored\"])","div[class^=\"cr-banner-\"]",".q2am-page-advert","div.CenterBlock:has(> div.Tadsb2)","#floating-region-zone,\n.ads-div-block",".sin-part","#banners-position-14,\n#slideshow[class=\"rounded\"]",".ads-box","#NR-Ads,\n.listing-item-blog:has(a[href*=\"/author/ads/\"])","div.video-area > div > div.d-flex:has(> a[href^=\"/c/\"][aria-label=\"bebin\"] > img)","script[id^=\"wccp_\"]",".col-xs-36.col-sm-4.col-md-4.col-lg-4,\n.hidden-xs.col-sm-4.col-md-4.col-lg-4","#block-3,\n#block-4,\n.stream-item-top-wrapper,\nli:has([href^=\"https://jalebamooz.com/reportage/\"])",".widget_custom_html,\naside:nth-of-type(2)","#table10,\n#table10 > tbody > tr > .textBoldColor,\n#table4 > tbody > tr > td > table > tbody > tr > td > center,\n.bgleftmenu > div > div,\ntable#table9.bgtable:nth-of-type(13)","div.white-block:nth-of-type(2)","[href^=\"/nf/sponsor/\"]","[class^=\"zxc\"]",".sticky_notify",".news-bottom-link","#ads_f,\n#banners_120_top_1,\n#block-block-120,\n.track-click","div.peyvand,\ndiv.type-resource-image:has(> a[href^=\"/advertisements/triggered/\"])",".inline_ads",".ads.box","#box358,\n#top-ad",".zxc_home",".mrauto,\n.position-g5",".mobile-fixed-banner","a[href^=\"/advertisements/triggered/\"]",".ads-placment",".advertisement-in-topic,\n.banner-wrapper,\n.bannercontainer,\n.homepage-content",".msg_ad_explain,\n.msg_ad_pictorial,\n.msg_ad_subject","a[href^=\"https://bit.ly/\"]","#custom_html-4,\n#text-31,\n#text-35,\n.adbar","div.ads_fix_top,\ndiv.text_ads_box","div.blur-text","#text-13,\n.adwrap-widget","#ads-container",".adsfix_box",".alert-new,\n.text-center.mt-3.py-3.bg-all-box",".mdiaad,\nsection.sidebox:nth-of-type(4)",".widget_text.widget",".sponsors","#sponsor_wrapper,\ndiv.banner_v",".srjtbaungo","section.adBox:has(> div.row > div > a[rel$=\"sponsored\"])","section.ads","div#Abox-mobo","#ads__bottom_of_the_header",".news-col-2 .related-news",".opanel-ads",".ads-banner","#advertise,\n#promotion",".Dr.D2.Cu.o",".stream-item-above-post","#text-5",".banner_sidebar,\n.box-ads-single,\n.box-custom.box_other,\ndiv.box-tag-single:nth-of-type(2)","bloglinkdumpblock,\nbloglinksblock","div.all_adv_mrg,\ndiv.box:has(img[alt=\"icon_ads\"]),\ndiv.fixed_box_adv,\ndiv.padding_news_right_adv","div#forum-native-ad,\ndiv.ad-wrapper,\ndiv.up-ad",".advertorial",".ADS_header_all,\n.download-link-ads-below","#header-ad1,\n#p30konkor-ads-p a[rel=\"follow\"],\n#p30konkor-ads-p div:has(p > a[rel]):not(:has(a[href*=\"p30konkor.com\"]))",".post-ads",".sidebar-ads",".ad_global_header","#ad_global_below_navbar","#ads-120,\n.block-ads,\n.block-ads2,\n.block-ads4","div[class^=\"topadvers\"]",".adv_img,\n.agahi-view",".widget_whmcs_ads_widget.widget,\n.wpb_content_element.sidebar.wpb_widgetised_column",".topbanners",".multi-ads-container","div.tab.sidebar-box:nth-of-type(2) > .sidebar-box-content,\ndiv.tab.sidebar-box:nth-of-type(2) > h3","div.big-banner",".ads_box",".aa-container",".download-dialog","div.advertop",".ads.big_post,\n.cat","#block-block-22.ads",".bannermiddle,\n.mybannerimg",".adv-box",".adloc-is-banner,\n.widget_better-ads",".advertising","#middle-ads",".fara-main","a[href=\"https://academy-eris.com/\"],\na[href=\"https://sahamir-ac.com/\"],\na[href=\"https://sarafer.com/\"],\na[href=\"https://veriacco.com/\"]","#header-banner-4,\n#rt-backlinks-pos,\n.mb-3.top-1.sticky-top,\n.w-100.justify-content-center.d-flex","div.adsLoader",".bannersHome","#header-ads",".bannergroup",".ads2",".ush_image_2",".GSAdsLR,\n.OpenTable5",".adv_top,\ndiv[style=\"margin-bottom:10px\"]:has(> .txt_adv_content)",".bannergroupsam-full-width",".cyt-ad-content,\n.homebar a[href=\"https://setare.com/%d8%aa%d8%a8%d9%84%db%8c%d8%ba%d8%a7%d8%aa/\"] > img,\n.pb0.stickyscroll_widget","#block-views-ad-link-block-2,\n#block-views-shabake2-clone-of-ad-link-block,\n.field-name-ads-under-summery,\n.popup-box-wrapper","a[target=\"_blank\"][href*=\"utm_content=shahrekhabar\"] > img[style=\"margin-top: 0px;margin-bottom: 0px;margin-left: auto;margin-right: auto;\"]","#g-top,\n.ads2col,\n.flexbanneritem",".qxsbniv",".header_adv",".side_adv",".top_adv",".b_box","#inline_agahi_z0,\n.generalBoxStyle[data-element-name=\"FRONT_M\"],\n.generalBoxStyle[data-element-name=\"SHARE_NEWS\"],\n.mauto_div,\n.mnb_wrapper,\n.noagahi.otherMedia",".banner9,\n.bannerLarge","#PopAlert,\n#RightPan,\n#advBan,\n.AdvertiseD2Ban,\n.DTOPBan,\n.adv_text","div.ecbox2:has(> div.ec_body2 > div.adswrapper),\ndiv.ecbox:has(div.ads_text, div.text-ads)",".ads-link",".middle-ads",".adss,\n.container_ads","div.mask",".adcbar",".link-ads",".ad-item,\n.ads-footer",".baners,\n.left-ads",".right-ads",".col-xs-12 > article:has(a[href*=\"/category/pr/\"])",".tab-cpc,\n.tab-dpd-post,\ndiv[class^=\"ads\"]",".full-width-tabligh,\n.home-web-surfing,\n.tj-ad-box,\n.tj-ad-wrapper,\ndiv.widget.aside-widget:nth-of-type(5) > .section-title--dotted.section-title > .section-title__h",".rmp-ad-container",".slider-banners.partial,\n.sponsor-link",".ads-box-green,\n.ads-box-red",".light-text.footer-widgets","div.shop-card.seller-element:has(> div.shop-info > div#vijhe_small)","section#downloadbox > div#indicatorr","div#popupModal,\ndiv.modal-backdrop","div.upbu","img[alt=\"ads\"]","a[href^=\"/url/\"][target=\"_blank\"]:has(> img)","div.col-ms-36 > section:has(div.txt_adv_content),\ndiv.row > section:has(a[href*=\"/ads/redirect/\"]),\ndiv.style-text-adv",".zxc_matni",".zxc_top,\ndiv.mnb:has(a[href^=\"/advertisements/triggered/\"])",".adbox:not(.adbar),\n.left-side-ad-col",".tabligh","div.colRight div[class^=\"adsBox\"],\ndiv.topAds","#text-12,\n#text-24","div.tb-box",".top-ads",".ads-block,\n.row.fixed-post.post,\n.sidebar-textads","#BannerHome,\n.BannerA,\n.DetailArea > .AdAreaDetail,\ndiv[id^=\"BehinAva\"]","#sidebar-alt","div[id^=\"tabligh\"]",".no-mobile.out-container:nth-of-type(3)",".adsside,\n.elementor-element-d41b3d1,\n.size-large.attachment-large","#site-footer .col-sm-4:has(a[rel=\"noopener\"][target=\"_blank\"]),\n.eif:not(:has(a[href*=\"farnet.io\"]))","div[class*=\"blockByVisit_blockByVisit__container\"],\ndiv[class*=\"company_company__ads--ab\"],\ndiv[class^=\"RequireAuth_mainBox\"]","aside.mt-5:has(> a[href^=\"https://l.vrgl.ir/r?l=http\"][target=\"_blank\"] img[alt=\"تبلیغات در ویرگول\"]),\ndiv.feedAdsBox,\ndiv.js-userLogin-popup","div.header-banners",".col-md-offset-6.col-md-3,\n.kanban-col",".khp-site-info p,\n.left.col-md-4,\n.skip-container p:not(:has(a[href*=\"1da.ir\"])):has(img)",".phoenixad,\na[rel=\"dofollow\"]",".e3lan","#text-2,\n#text-3,\n#text-4,\n#text-6,\n#text-7",".herald-ad:not(:has(a[href*=\"kurdsoft\"])):not(:has(a[href*=\"7ganj.ir\"])),\n.meta-ad",".links_footer",".main22,\n.up_submit > span","x","div#BodyMain > div#Body > div#Content > div[style] > div.Box:has(> div.CenterSmall > div.AdsBanerDiv)",".adv_l,\n.adv_r_news2",".co-ads","div#modal_container > span.a-modal-backdrop","#popular,\n.lolo",".tab_news > a[href*=\"gameup.ir\"]","div#ZAD","div.ml-4.space-right-delt > div.bg-all-box:has(> div.yn-bnr)",".app_ads_banner",".kpl_linktable",".ads-side",".asiatech,\n[id^=\"linkcat\"] > ul > li:not(:has(a[href*=\"apktops.ir\"]))","a[onclick^=\"increase_ad_click_count\"]",".banner",".abox","#featured > .owl-stage-outer","div.all_adv,\ndiv.others_web,\ndiv.zxc,\nsection.reportage","#ad-hoc-2,\n.bdaia-e3-container,\n.widget_text.bdaia-widget.widget",".stream-item","#iddivtoplevelscript,\ndiv[style]:nth-of-type(3)",".ads-margin-bot,\n[href*=\"bourse24.ir/ads/click/\"]",".linkbox",".block-simpleads",".clads-inner","script[id^=\"wpcp_\"]","#ADbox-1,\n.ads-sidebar,\n.ads-sticky",".after-post-ads",".Js_Div5",".adsboxfix,\ndiv[style*=\"position: fixed; right: 0px; bottom: 0px;\"]:has(> .close-fixedSd)","div.col-md-12 > div.sidebar-box:has(> div.row > div.text-center > a[target=\"_blank\"][title] > h4.text-dark[style])","div[id^=\"ads\"]","a[rel=\"nofollow\"]:has(> img[title=\"تبلیغات\"])","div#kaprila_linktable,\ndiv#mediaad-vFkp","div#header-bar,\ndiv.slider-tab-ring:has(> div.textwidget p > a)","div[itemtype=\"https://schema.org/WPAdBlock\"]","div#post-list-container-id a[href^=\"https://a-banners.divar.ir/auction/?ext_link_data=\"]:has(> div.kt-inset-banner > picture.kt-image-block > source[data-srcset^=\"https://a-banners.divarcdn.com/ssp/ads/media/image\"]),\nmain > div[class^=\"item\"]:has(img[src*=\"divarcdn.com/ssp/ads/\"])",".index-adstop > a:not([href*=\"dlrozaneh.ir\"])","article#post-fix-ads,\ndiv.textwidget:has(> div.parsi-ads),\ndiv.top-full-ads",".d1yekta,\n[id^=\"pos-article-display-\"],\nsection li:not(:has([href^=\"https://download1music.ir/\"]))","#faradars,\n#page-content > .wpb_row:has(a[href*=\"faradars.org\"])",".ads-fix-post,\n.ads-matni",".advertise-place,\n.province-advertise,\nmain > div:has([href*=\"/advertising/\"])",".all_ads","#ContentPlaceHolder1_divBanner","[class*=\"text_ads\"]",".emojo-ad,\n.pzbkcvuqrn","div.avdDiv",".news-web,\ndiv.tabligh",".header-mdh,\n.pull-right.zm-post-lay-a-area","aside.ad-mobile-none,\ndiv.ads-native","div#ADbox-1,\ndiv#phon","div.col-md-12 > div.card:has(> a > img[src$=\".gif\"])",".custom,\n.customads",".FixedAdvertising,\n.left.sidebar_widget:nth-of-type(3),\n.left_ads,\n.right_ads,\n.top_ads","a[href=\"https://maktabsharif.ir/\"]",".post-ad-box","a[target=\"_blank\"]:has(> img[src*=\"/Gif/\"][src$=\".gif\"]),\na[target=\"_blank\"]:has(> img[src*=\"/files/\"][src$=\".gif\"])","#next1-231,\n.asd_top,\n.fl.block_right > div.box_sh.ads_2","div[class*=\"linkads\"]",".sidebar_tabliq,\n[href^=\"/ads/\"]",".doctor-ads-item","#header_ad,\n.sb_ad","div.t3-contentwindows1:has(a[target=\"_blank\"] > img[src$=\".gif\"])",".banner468,\n.tab_box","[href^=\"/redirect/ads/\"]","div[class^=\"css-\"][dir=\"auto\"][data-testid=\"favoritesSuperAppTitle\"],\ndiv[class^=\"css-\"][dir=\"auto\"][data-testid=\"favoritesSuperAppTitle\"] + div[class^=\"css-\"]:has(> div[class^=\"css-\"] > div[class^=\"css-\"][style] > div[class^=\"css-\"][tabindex=\"0\"][style=\"transition-duration: 0s;\"]),\ndiv[class^=\"css-\"][tabindex=\"0\"][style=\"transition-duration: 0s;\"]:has(> div[class^=\"css-\"] > div[class^=\"css-\"] > div[class^=\"css-\"][style] > div[class^=\"css-\"][dir=\"auto\"][data-testid=\"yourGoodMood\"]),\ndiv[style]:has(> div[style] > div[style] > div[tabindex][role=\"link\"] > img[alt=\"Advertisement\"])","a[href^=\"https://www.iranjib.ir/ra.php?adid=\"]:not([title=\"اینستاگرام ایران جیب\"]),\ndiv[id^=\"pos-article-display-\"][style=\"min-height:400px\"]","div.owl-item:has(> li[id^=\"ad\"]),\nsection.box.ads",".advertise_default","div.c-forceToLogin__message,\ndiv.c-forceToLogin__overlay",".im-header-ad","div.main > div.box:has(> p > a[href=\"http://botsaz.com/\"])","#textads-contents,\n.ads-containter","#ads-container > .list-thumbs.title-only.list.box,\n#header-ad,\n.bg-gray-links.box",".ads_bt_box,\n.ads_singles_post,\n.top_img_ads",".type-sticky.status-publish",".ads-widget",".down-box-ads,\n.down-box1",".singleads","[id^=\"ad\"]","div.post-content > div.fusion-builder-row-1 > div.fusion-row:has(> div.fusion-layout-column a[data-wpel-link=\"external\"])","a[href=\"http://www.asalchat.skin\"],\na[href=\"https://www.tarhpardaz.ir\"]","div.ad-wrap,\ndiv.widget-ad-image","#bottombanner,\n.apnl,\n.b","#sezfvg-2,\n.sezfvg,\n.sticky-column:not(:has(a[href*=\"modirnameh.ir\"]))",".txt-ads-sl",".banneritem:has(a[href*=\"/banners/click/\"]),\n.eb-inst","div.e3lan,\ndiv.widget#text-15","div[class^=\"yektabanner\"],\ndiv[style]:has(> div.yn-bnr)",".txt-box:has(> .txt_adv_content)","div.is_ads","div.ads_posts",".adspanel",".adsblockpop,\n.dtnoppu,\nsection.banners,\nsection.textAds","aside > div:not(:has(a[href*=\"/entry/\"])),\ndiv.copyright-wrapper > div#copyright > a,\nmain#main-content > div[class^=\"tabliq-\"]",".body_wrapper > div:nth-of-type(4)","div.block-simpleads","div.dotline-sticky","a[href*=\"&m_name=ads\"]",".dlbtnhidden",".ad--content","div.ssad",".ytn-hamsan","div#ads1",".c-advertisement","main > div.container-fluid.my-3:has(> div.row.mb-2 > div.col-lg-4 > a[target=\"_blank\"] > img.w-100[style=\"border-radius: 10px;\"])",".banner-box",".center.body_c > div > div,\n.center.body_c > div:nth-of-type(2),\n.txtad","#ad7_40,\n.footer-ads","[href*=\"/fa/ads/\"]",".left_banner,\n.links","#arasideadvertising","section.sidebar-left-item:has(> div.custom-html-widget > p > a[target=\"_blank\"][rel=\"noopener\"] > img)","a[class^=\"skinak-text-ads\"],\narticle.morders,\ndiv.dadsd,\ndiv.footer-block-1:has(> a[class^=\"text-ads\"]),\ndiv.left-body:has(> div.text div.text-ads),\ndiv.right-body:has(> div.text div.adsr)",".heading-ads,\n.sidebar-right > div.box:nth-of-type(1)",".adv_mobile",".textwidget,\naside:nth-of-type(5)","a[class^=\"text-ads-\"],\ndiv.backoritybase,\np:has(> a[href^=\"https://shirazsocial.com\"])","div.sk-side:has(> div.sk-side-body ul > li > a[href]:is([href=\"https://49tinymovie.site/\"], [href=\"https://zarfilm.com/\"], [href=\"https://anime-list.net/\"]))","#cycle_adv_tabnak","section#LeftPanel > div.leftads","[class^=\"adv\"]:not(.adv8, .adv19)","div.col3:has(div.txt_adv_content)",".inner-wrapper-sticky > .mb-3,\n.sidebar-banners",".type-resource-image","div.bnr-ads",".side1:has(a[title][rel=\"noopener noreferrer\"])",".advertisment","#fpc-banner-top,\n#top-right-ad,\n.content-container:has(.ad-reportage),\n.square-ad:not(:has(#featured-posts))",".full2.box.right,\ndiv.sideheader2:nth-of-type(3)","li.ad-link",".footer-back-link,\n.free_ad_con,\n.logo_full_view","a[href*=\"utm_source=uptrack\"]","#tabligh",".textads",".ads120,\n.ads468,\n.fixpost,\n.gsh,\n.headads","div#ads__start_of_the_post","a.textad,\na[href^=\"/ad/\"][target=\"_blank\"]","#kaprila_linktable_left,\n.left-block-top","#slider-box,\n.mortabet-links,\ndiv.row:nth-of-type(2) > .col-xs-12 > .category-side-ads",".advertisements",".home-ads",".sideads",".main-top-ads,\n.wide-ad-row,\ndiv.a1-banner","div.Product-BannerHeader,\ndiv.price-sticky,\ndiv[class^=\"AdvertisingParser\"]",".flex-ad-body","div#ads-sticky,\nheader + div#slider",".box-title,\n.moreads.widget_text,\n.pm",".mom_custom_text.widget,\n.widget_custom_html.widget.widget_text","div.ads-row-left","#ad14,\n.ad-cell,\n.widget_text",".content_item:has(a[href*=\"/category/ads/\"]),\n.sidebar-area .image","article.fixedadv:not(:has(> div.fixedadvcontent > a[href=\"https://www.youtube.com/c/Par30Game\"])),\ndiv.adbox,\nsection.sidebar-box-shop",".my-single-t-p",".dailylink,\nbody > div > font,\ncenter > center > center > center,\ncenter:nth-of-type(2) > center,\ndiv > font > font > .menuheader,\ndiv > font > font > font > p","div.side_txt_zxc,\nul#rssbank","#box_1398,\n#popbox-blackout",".AdsContainer",".special_links,\n.text_adds_container",".zxc_news",".featured_news",".zxc_left",".ads-full-banner-img",".vebgardi",".jmb_banner","div.banner:has(> a > img)",".inline-4d",".adrightPanel,\n.container55,\narticle > .box > a[href*=\"salampnu.com\"]","div.sidebar_ads",".vfozk",".aligncenter.wp-image-9273.size-full,\n.size-full.attachment-full",".Topadver",".behtarinseo","div.ads-site","div.bottom-left-ad,\ndiv.bottom-right-ad,\nul.advertise",".adsBanner,\n.two-ad-banners,\n.widget_media_image.widget.container-wrapper","div.zoomtech-banner","div.back_links","#titr-box,\n.maincontent > center,\ntbody","#ads-text,\n#sidebar_ad,\n.b-hd,\n.hidden-xs.hidden-sm.block,\n.hideOnMobile",".new-banner","div.app_ads_banner",".abvertise > .container > a:not(a[href=\"https://t.me/filmha_top\"])",".tabliq"];

const hostnamesMap = new Map([["*",0],["cannews.aero",1],["web.bale.ai",2],["delta3da.cam",3],["persiansub.com",[3,179]],["real-madrid.ir",3],["myhastidl.cam",4],["aftab.cc",5],["mojnews.co",6],["eghtesadnews.com",[6,62,71]],["fartaknews.com",[6,89]],["moroornews.com",[6,62,87]],["parsnews.com",[6,174]],["ilna.ir",[6,62]],["tinn.ir",[6,390]],["borna.news",[6,30,209]],["tourismonline.co",[7,8]],["koolakmag.ir",7],["1abzar.com",[9,10]],["gadgetnews.net",[9,416]],["1pezeshk.com",11],["7sobh.com",12],["abipic.com",13],["mihandownload.com",[13,144]],["accpress.com",14],["afkarnews.com",15],["aftabir.com",16],["akharinnews.com",[17,18]],["harmonydl.us",[18,449]],["alamto.com",[19,20]],["power-music.ir",[19,368]],["androidgozar.com",21],["androidha.com",22],["androidsharp.com",23],["aparat.com",[24,25]],["mihanvideo.com",25],["applicationha.com",26],["arga-mag.com",[27,28,29,30,31]],["icivil.ir",27],["plus.ir",28],["beautyhome.ir",[29,283]],["arzcenter.com",32],["asandl.com",[33,34]],["alldriver.ir",[33,270]],["cafejozve.ir",33],["khoshamoz.ir",33],["20file.org",[33,433]],["asbe-bokhar.com",35],["asemooni.com",36],["asriran.com",37],["avapedia.com",38],["bargozideha.com",39],["barsadic.com",40],["bazimag.com",41],["brain.be-teb.com",42],["behmusic.com",43],["benawa.com",44],["beytoote.com",45],["blogsazan.com",46],["boyernews.com",47],["bultannews.com",48],["charbzaban.com",49],["chetor.com",50],["chibepoosham.com",51],["delbaraneh.com",[52,53]],["rouzegar.com",[53,188]],["delgarm.com",[54,55]],["payamekhabar.ir",55],["deltapayam.com",56],["digiato.com",57],["digikala.com",58],["dlfox.com",59],["doctorwp.com",60],["donya-e-eqtesad.com",[61,62,63]],["ecoiran.com",[61,62]],["etemadonline.com",62],["fardanews.com",[62,86,87,88]],["khabarerooz.com",[62,124]],["khabarfoori.com",[62,126]],["khanefootball.com",[62,130,131]],["mojnews.com",[62,87]],["mosalasonline.com",[62,88,123,154]],["sharghdaily.com",[62,130,208]],["shayanews.com",[62,209,210]],["shomavaeghtesad.com",[62,74]],["varandaz.com",[62,88,239,240]],["55online.news",[62,130,239,425,426]],["sobhtazeh.news",[62,429]],["doostihaa.com",64],["downloadha.com",[65,66]],["uploadboy.com",[65,234]],["upsara.com",[65,236]],["uploadkon.ir",[65,396]],["androidina.net",[65,412]],["drdmag.com",67],["e-teb.com",68],["mehrnews.com",[68,142]],["mer30download.com",[68,143]],["salameno.com",68],["shabakeh-mag.com",[68,204]],["tasnimnews.com",[68,222]],["vipofilm.com",[68,242]],["4tools.ir",68],["imna.ir",[68,142,330]],["khabaronline.ir",[68,330,339]],["shahraranews.ir",[68,375]],["shmi.ir",[68,376]],["tebyan.net",68],["ravan.e-teb.com",69],["eghtesademeli.com",70],["eghtesadonline.com",72],["web.eitaa.com",73],["ejiga.com",[74,75]],["elmefarda.com",76],["elmevarzesh.com",77],["ensafnews.com",[78,79]],["netpaak.com",[78,159,160]],["bikarsho.ir",[78,284]],["wikihoax.org",[78,79,441]],["mag.khanoumi.com",79],["eramblog.com",80],["etelanews.com",[81,82]],["gahar.ir",[82,321]],["mihand.ir",82],["ezp30.com",83],["faaltarin.com",84],["faceit.ir",[84,314]],["fararu.com",85],["fastdic.com",90],["fileboro.com",91],["filimo.com",92],["footofan.com",93],["gameeroid.com",94],["gamefa.com",95],["en.gamefa.com",96],["gharbtv.com",97],["ghatreh.com",98],["gooyait.com",99],["graphiran.com",100],["hamgardy.com",101],["harfetaze.com",102],["honarfardi.com",103],["idehalmag.com",104],["idehaltech.com",105],["imvbox.com",106],["irancircle.com",107],["irannaz.com",108],["iranstar.com",109],["itarfand.com",110],["itbazar.com",111],["itgheymat.com",112],["itresan.com",113],["jabeh.com",114],["jafekri.com",115],["jahannews.com",116],["jalebamooz.com",117],["jesarat.com",118],["k2cod.com",119],["ketabesabz.com",120],["khabarban.com",121],["khabareazad.com",[122,123]],["khabarfarsi.com",125],["khabarpu.com",127],["khabarvarzeshi.com",[128,129]],["salamatnews.com",128],["hamshahrionline.ir",128],["irna.ir",128],["gostaresh.news",[130,425,427]],["khodrobank.com",132],["khodrotak.com",133],["kilipo.com",134],["kojaro.com",135],["lamtakam.com",136],["learnparsi.com",137],["lenzak.com",138],["magbazi.com",139],["magiran.com",140],["majalesalamat.com",141],["mihanfal.com",145],["mihangame.com",146],["mihanmarket.com",147],["news.mihanmarket.com",148],["minevisam.com",149],["miniroid.com",[150,151]],["p30day.ir",[151,359]],["mobomod.com",152],["moderndl.com",153],["movienama.com",155],["mybia4music.com",156],["namayesh.com",157],["namnak.com",158],["20tayi.ir",[160,260,261]],["niksalehi.com",161],["niloblog.com",162],["niniban.com",163],["ninisite.com",164],["nodud.com",165],["p30afzar.com",166],["p30konkor.com",167],["p30world.com",[168,169]],["zendegionline.ir",[169,407]],["forum.p30world.com",[170,171]],["parsipet.ir",[170,361]],["parsfootball.com",172],["parsnaz.com",173],["parstools.com",[175,176]],["taktemp.com",[176,221]],["peivast.com",177],["persiangfx.com",178],["persianv.com",180],["radiojavan-iran.com",[180,184]],["picofile.com",181],["podbean.com",182],["prozhedownload.com",183],["rajanews.com",185],["rayamag.com",186],["roozno.com",187],["rozblog.com",[189,190]],["sid.ir",[189,377]],["rozmusic.com",191],["sabtta.com",192],["saednews.com",193],["safarmarket.com",194],["sakhtafzar.com",195],["sakhtafzarmag.com",[196,197]],["seemorgh.com",[197,202]],["sargarme.com",198],["sariasan.com",199],["sarzamindownload.com",200],["sedayiran.com",201],["setare.com",203],["shahrekhabar.com",205],["shahrsakhtafzar.com",206],["shanbemag.com",207],["shereno.com",211],["shomanews.com",212],["simcart.com",213],["softgozar.com",214],["soorban.com",215],["sourceiran.com",[216,217]],["dolatebahar.ir",216],["tak3da.com",218],["takhfifan.com",219],["takhfife.com",220],["techfars.com",[223,224]],["varzesh3.com",[224,241]],["technews-iran.com",225],["techrato.com",226],["tejaratnews.com",227],["telewebion.com",228],["tiwall.com",229],["top2download.com",230],["topnaz.com",231],["torob.com",232],["trainbit.com",233],["upmusics.com",235],["vajehyab.com",237],["vananews.com",238],["webgozar.com",243],["wikisemnan.com",244],["wisgoon.com",245],["yasdl.com",[246,247]],["downloadsoftware.ir",[246,306]],["zibamoon.com",248],["icoff.ee",249],["konkur.in",250],["shirazsong.in",251],["konkur.info",252],["farnet.io",253],["rasm.io",254],["virgool.io",255],["zaya.io",256],["1000site.ir",257],["1da.ir",258],["1ea.ir",259],["androidzoom.ir",[260,275]],["7ganj.ir",262],["8pic.ir",[263,264]],["imgurl.ir",[263,329]],["uupload.ir",[263,399]],["abadis.ir",265],["aboutall.ir",266],["aftabnews.ir",267],["aftabyazdonline.ir",268],["alibaba.ir",269],["anaj.ir",271],["androidify.ir",[272,273]],["moddinggame.ir",272],["androidparsi.ir",274],["anzalweb.ir",276],["apktops.ir",277],["appreview.ir",278],["b2n.ir",[279,280]],["timecity.ir",[279,389]],["barato.ir",281],["bartarinha.ir",282],["softsaaz.ir",284],["youc.ir",284],["bils.ir",285],["bourse24.ir",286],["buzdid.ir",287],["citna.ir",288],["click.ir",289],["coffeeapps.ir",[290,291]],["sclinic.ir",290],["computeruser.ir",292],["dabi.ir",293],["dailymobile.ir",294],["dana.ir",295],["daneshchi.ir",296],["darkroid.ir",297],["dehlinks.ir",298],["digiboy.ir",299],["digiro.ir",300],["divar.ir",301],["dlrozaneh.ir",302],["download.ir",303],["download1music.ir",304],["downloadly.ir",305],["econews.ir",307],["eghtesadepooya.ir",308],["rastannews.ir",308],["emalls.ir",309],["emeil.ir",310],["emojo.ir",311],["enama.ir",312],["entekhab.ir",313],["farsnews.ir",315],["fastmobile.ir",316],["forsatnet.ir",317],["freedownload.ir",318],["freescript.ir",319],["ftdigital.ir",320],["games4online.ir",322],["gamesib.ir",323],["getandroid.ir",324],["gsm.ir",325],["hidoctor.ir",326],["imemar.icivil.ir",327],["iica.ir",328],["my.irancell.ir",331],["iranjib.ir",332],["isna.ir",333],["itna.ir",334],["jobinja.ir",335],["kafebook.ir",336],["kalakamuz.ir",337],["khaandaniha.ir",338],["khodropluss.ir",340],["languagedownload.ir",341],["lastsecond.ir",342],["listen2music.ir",343],["loudmusic.ir",344],["mashreghnews.ir",345],["mastertest.ir",346],["maxstars.ir",347],["mediat.ir",348],["mobile.ir",349],["modirnameh.ir",350],["montiego.ir",351],["moviemag.ir",352],["musicdays.ir",353],["musicdel.ir",354],["nabzefanavari.ir",355],["najiremix.ir",356],["nex11music.ir",357],["omidnamehnews.ir",358],["p30download.ir",360],["payju.ir",362],["pedal.ir",363],["pgnews.ir",364],["phonroid.ir",365],["plaza.ir",366],["pluginyab.ir",367],["qnama.ir",369],["rahnamato.ir",370],["rbiran.ir",371],["rond.ir",372],["rozup.ir",373],["sena.ir",374],["silasdl.ir",378],["skinak.ir",379],["smusic.ir",380],["snn.ir",381],["sornamusic.ir",382],["subf2m.ir",383],["subkade.ir",384],["tabnak.ir",385],["taknaz.ir",386],["tehranrasaneh.ir",387],["tejaratemrouz.ir",388],["iranart.news",390],["tinroid.ir",391],["top90.ir",392],["topseda.ir",393],["toranji.ir",394],["up44.ir",395],["uplod.ir",397],["uptrack.ir",398],["varoone.ir",[400,401]],["ariapix.net",400],["tarfandha.org",[400,438]],["my-film.pw",[400,444]],["vgdl.ir",402],["vista.ir",403],["webgoo.ir",404],["webii.ir",405],["yun.ir",406],["zohur12.ir",408],["zoomg.ir",409],["zoomit.ir",410],["filmino.me",411],["cooldl.net",413],["dlbook.net",414],["footballi.net",415],["jeyran.net",417],["par30games.net",418],["parsroid.net",419],["pichak.net",420],["rokna.net",421],["takblog.net",422],["yektablog.net",422],["article.tebyan.net",423],["uplooder.net",424],["mobo.news",428],["techna.news",430],["skyroom.online",431],["titr.online",432],["barcanews.org",434],["bazdeh.org",435],["gold-team.org",436],["talab.org",437],["texahang.org",439],["tgju.org",440],["zoomtech.org",442],["ana.press",443],["salamdl.rip",445],["oila.tj",446],["artmusics.top",447],["filmha.top",448]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["arongroups.site",[0]],["arongroups.co",[0]]]);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
