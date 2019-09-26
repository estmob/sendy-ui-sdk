export default (function() {
    let callback = null;
    const myDomain = `${window.location.protocol}//${window.location.hostname}${window.location.port.length > 0 ? ':' + window.location.port : ''}`;
    const targetDomain = 'https://sendy.jp';

    const handleMessage = e => {
        if (e.origin === targetDomain && e.data && e.data.type === 'send-link') {
            callback && callback(e.data.link);
        }
    };
    const init = cb => {
        window.addEventListener('message', handleMessage);
        callback = cb;
    };
    const final = _ => {
        window.removeEventListener('message', handleMessage);
    };
    const launch = (userKey, name = 'sendy') => {
        const url =
            `${targetDomain}/extension/main?target=${encodeURIComponent(myDomain)}` +
            (userKey && userKey.length > 0 ? `&userKey=${encodeURIComponent(userKey)}` : '');
        window.open(
            url,
            name,
            'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no width=342, height=572',
        );
    };

    return {
        handleMessage,
        init,
        final,
        launch,
    };
})();
