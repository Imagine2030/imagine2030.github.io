(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"id":"rootPlayer","backgroundColor":["#FFFFFF"],"minHeight":0,"data":{"locales":{"en":"locale/en.txt"},"defaultLocale":"en","textToSpeechConfig":{"rate":1,"speechOnTooltip":false,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"volume":1,"speechOnInfoWindow":false,"pitch":1},"name":"Player736","history":{}},"minWidth":0,"left":861.65,"start":"this.init()","backgroundColorRatios":[0],"watermark":false,"defaultMenu":["fullscreen","mute","rotation"],"scrollBarColor":"#000000","scrollBarMargin":2,"hash": "c7419772546c778d80ae217c3c506f39883d0467b0e0596fd83b2c7a700209f4", "definitions": [{"id":"panorama_8354D3C9_9073_6D6E_41E2_0F226BA46E41","label":trans('panorama_8354D3C9_9073_6D6E_41E2_0F226BA46E41.label'),"vfov":180,"hfovMin":"150%","hfovMax":130,"hfov":360,"thumbnailUrl":"media/panorama_8354D3C9_9073_6D6E_41E2_0F226BA46E41_t.jpg","class":"Panorama","data":{"label":"fundo-do-bot\u00e3o_sobre"},"frames":[{"thumbnailUrl":"media/panorama_8354D3C9_9073_6D6E_41E2_0F226BA46E41_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"height":512,"rowCount":1,"colCount":6,"tags":["ondemand","preload"],"url":"media/panorama_8354D3C9_9073_6D6E_41E2_0F226BA46E41_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":3072},{"height":512,"rowCount":1,"colCount":6,"url":"media/panorama_8354D3C9_9073_6D6E_41E2_0F226BA46E41_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","width":3072}]}}]},{"id":"panorama_8354D3C9_9073_6D6E_41E2_0F226BA46E41_camera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"enterPointingToHorizon":true,"initialSequence":"this.sequence_834F4827_9073_7B22_41DA_3960B314D8C9","class":"PanoramaCamera"},{"viewerArea":"this.MainViewer","id":"MainViewerPanoramaPlayer","touchControlMode":"drag_rotation","arrowKeysAction":"translate","displayPlaybackBar":true,"mouseControlMode":"drag_rotation","aaEnabled":true,"class":"PanoramaPlayer"},{"id":"MainViewer","playbackBarBorderColor":"#FFFFFF","playbackBarBorderRadius":0,"minHeight":50,"progressBottom":10,"class":"ViewerArea","toolTipFontColor":"#606060","minWidth":100,"progressHeight":2,"playbackBarProgressBorderColor":"#000000","playbackBarHeadBorderRadius":0,"surfaceReticleColor":"#FFFFFF","progressBorderSize":0,"progressBarBorderRadius":2,"playbackBarHeadBorderColor":"#000000","progressBarBorderSize":0,"subtitlesTop":0,"playbackBarBorderSize":0,"playbackBarHeadShadowBlurRadius":3,"playbackBarLeft":0,"subtitlesTextShadowVerticalLength":1,"playbackBarBackgroundOpacity":1,"vrPointerColor":"#FFFFFF","vrPointerSelectionColor":"#FF6600","playbackBarHeadHeight":15,"subtitlesGap":0,"playbackBarHeadShadowColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadBorderSize":0,"subtitlesTextShadowColor":"#000000","progressBorderRadius":2,"subtitlesBackgroundColor":"#000000","data":{"name":"Main Viewer"},"playbackBarHeadShadow":true,"subtitlesBottom":50,"firstTransitionDuration":0,"subtitlesFontSize":"3vmin","subtitlesBackgroundOpacity":0.2,"toolTipPaddingTop":4,"progressLeft":"33%","height":"100%","playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesTextShadowOpacity":1,"playbackBarBottom":5,"subtitlesBorderColor":"#FFFFFF","toolTipBorderColor":"#767676","toolTipFontSize":"1.11vmin","playbackBarBackgroundColor":["#FFFFFF"],"subtitlesTextShadowHorizontalLength":1,"playbackBarHeight":10,"toolTipTextShadowColor":"#000000","toolTipPaddingBottom":4,"propagateClick":false,"toolTipShadowColor":"#333138","toolTipFontFamily":"Arial","playbackBarBackgroundColorDirection":"vertical","subtitlesFontColor":"#FFFFFF","playbackBarHeadWidth":6,"playbackBarRight":0,"progressBackgroundColorRatios":[0],"playbackBarProgressBorderSize":0,"progressRight":"33%","toolTipPaddingLeft":6,"playbackBarProgressBackgroundColor":["#3399FF"],"vrPointerSelectionTime":2000,"playbackBarProgressBorderRadius":0,"width":"100%","progressOpacity":0.7,"toolTipBackgroundColor":"#F6F6F6","progressBarBackgroundColorDirection":"horizontal","progressBarBackgroundColorRatios":[0],"progressBarBorderColor":"#000000","playbackBarHeadShadowOpacity":0.7,"progressBarBackgroundColor":["#3399FF"],"progressBorderColor":"#000000","subtitlesFontFamily":"Arial","progressBackgroundColor":["#000000"],"playbackBarProgressBackgroundColorRatios":[0],"toolTipPaddingRight":6},{"id":"mainPlayList","class":"PlayList","items":[{"media":"this.panorama_8354D3C9_9073_6D6E_41E2_0F226BA46E41","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","camera":"this.panorama_8354D3C9_9073_6D6E_41E2_0F226BA46E41_camera","class":"PanoramaPlayListItem"}]},{"id":"sequence_834F4827_9073_7B22_41DA_3960B314D8C9","movements":[{"yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence"}],"width":"100%","layout":"absolute","height":"100%","scripts":{"updateDeepLink":TDV.Tour.Script.updateDeepLink,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getMediaByName":TDV.Tour.Script.getMediaByName,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"shareSocial":TDV.Tour.Script.shareSocial,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"downloadFile":TDV.Tour.Script.downloadFile,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"initAnalytics":TDV.Tour.Script.initAnalytics,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"mixObject":TDV.Tour.Script.mixObject,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getComponentByName":TDV.Tour.Script.getComponentByName,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setValue":TDV.Tour.Script.setValue,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getKey":TDV.Tour.Script.getKey,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getOverlays":TDV.Tour.Script.getOverlays,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"initQuiz":TDV.Tour.Script.initQuiz,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"init":TDV.Tour.Script.init,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"registerKey":TDV.Tour.Script.registerKey,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"translate":TDV.Tour.Script.translate,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setLocale":TDV.Tour.Script.setLocale,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"showPopupImage":TDV.Tour.Script.showPopupImage,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"unregisterKey":TDV.Tour.Script.unregisterKey,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"existsKey":TDV.Tour.Script.existsKey,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"clone":TDV.Tour.Script.clone,"showWindow":TDV.Tour.Script.showWindow,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"isPanorama":TDV.Tour.Script.isPanorama,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setMapLocation":TDV.Tour.Script.setMapLocation,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getMainViewer":TDV.Tour.Script.getMainViewer,"historyGoForward":TDV.Tour.Script.historyGoForward,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"textToSpeech":TDV.Tour.Script.textToSpeech,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"createTween":TDV.Tour.Script.createTween,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"resumePlayers":TDV.Tour.Script.resumePlayers,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"playAudioList":TDV.Tour.Script.playAudioList,"quizFinish":TDV.Tour.Script.quizFinish,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"cloneBindings":TDV.Tour.Script.cloneBindings,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"executeJS":TDV.Tour.Script.executeJS,"quizStart":TDV.Tour.Script.quizStart,"openLink":TDV.Tour.Script.openLink,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"quizShowScore":TDV.Tour.Script.quizShowScore,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"startMeasurement":TDV.Tour.Script.startMeasurement,"historyGoBack":TDV.Tour.Script.historyGoBack,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getPixels":TDV.Tour.Script.getPixels,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio},"children":["this.MainViewer"],"downloadEnabled":true,"gap":10,"propagateClick":false,"class":"Player"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.1.17.js.map
})();
//Generated with v2023.1.17, Fri Nov 10 2023