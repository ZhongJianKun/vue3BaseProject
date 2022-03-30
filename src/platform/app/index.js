const par = {
    active: 'active',
};
// 加载哩卡平台的图片
function sysImageHandler(img) {
    let path;
    if (img && img !== '') {
        path = `https://ourydcimage.ourydc.cn/${img}`;
    } else {
        path = 'https://ourydcimage.ourydc.cn/defaultHeadImage/1.jpg';
    }
    return path;
}

// 加载哩卡平台的用户头像
function setGiftUrl(img) {
    let imgX = img;
    if (!imgX.includes('defaultHeadImage')) {
        const str1 = img.slice(0, 4);
        const str2 = img.slice(4, 6);
        const str3 = img.slice(6, 8);
        imgX = `${str1}/${str2}/${str3}/${img}@!100w_100h`;
    }
    return sysImageHandler(imgX);
}

// 跳转到哩卡平台的支付页面
function playGeam() {
    // eslint-disable-next-line no-undef
    recordWebLogInit('余额不足前往充值弹窗按钮点击', '立即充值');
    // eslint-disable-next-line no-undef
    openRechargeGem();
}

function setAppWebTitle(title) {
    try {
        if (title && title !== '') {
            // eslint-disable-next-line no-undef
            if (browser.versions.ios) {
                try {
                    window.webkit.messageHandlers.navigation.postMessage({
                        title,
                    });
                } catch (err) {
                    // eslint-disable-next-line no-undef
                    setupWebViewJavascriptBridge((bridge) => {
                        // 处理 js 调用 oc
                        bridge.callHandler('navigation', {
                            title,
                        }, () => {
                            // 处理oc过来的回调
                        });
                    });
                }
            // eslint-disable-next-line no-undef
            } else if (browser.versions.android) {
                window.Yuebaobao.navigation(title);
            }
        }
    // eslint-disable-next-line no-empty
    } catch (err) {
    }
}
// 进入在线客服
function onlineService() {
    try {
        if (window.browser.versions.ios) {
            window.webkit.messageHandlers.onlineService.postMessage(par);
        } else if (window.browser.versions.android) {
            window.Yuebaobao.onlineService();
        }
    // eslint-disable-next-line no-empty
    } catch (err) {}
}

// 进入用户个人中心
function userCenter(uid) {
    if (window.browser.versions.ios) {
        if (!window.webkit) {
            window.location.href = `http://web.ourydc.cn/apiofficial/userNew/${uid}`;
            return;
        }
    }
    if (window.browser.versions.android) {
        if (!window.Yuebaobao) {
            window.location.href = `http://web.ourydc.cn/apiofficial/userNew/${uid}`;
            return;
        }
    }
    try {
        if (window.browser.versions.ios) {
            try {
                window.webkit.messageHandlers.personalCenter.postMessage({
                    userId: uid,
                });
            } catch (err) {
                try {
                    window.setupWebViewJavascriptBridge((bridge) => {
                        // 处理 js 调用 oc
                        bridge.callHandler('personalCenter', {
                            userId: uid,
                        }, () => {
                            // 处理oc过来的回调
                        });
                    });
                    window.top.location.href = window.uid && window.uid !== '' ? `/apiofficial/userNew/${window.uid}` : 1;
                } catch {
                    window.top.location.href = uid && uid !== '' ? window.top.location.href = `/apiofficial/userNew/${uid}` : 1;
                }
            }
        } else if (window.browser.versions.android) {
            window.Yuebaobao.personalCenter(uid);
        }
    } catch (err) {
        // uid && uid != '' ? top.location.href = `/apiofficial/userNew/${uid}` : 1;
        window.top.location.href = uid && uid !== '' ? `/apiofficial/userNew/${uid}` : '';
    }
}

// eslint-disable-next-line keyword-spacing
export default{
    userCenter,
    onlineService,
    playGeam,
    setAppWebTitle,
    setGiftUrl,
};
