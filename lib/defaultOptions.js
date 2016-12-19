'use strict';

module.exports = (server, nick) => {
    return {
        server: server,
        nick: nick,
        password: null,
        userName: 'MrNodeBot',
        realName: 'MrNodeBot IRC Bot',
        port: 6667,
        localAddress: null,
        localPort: null,
        debug: false,
        showErrors: false,
        autoRejoin: false,
        autoConnect: true,
        channels: [],
        retryCount: null,
        retryDelay: 2000,
        secure: false,
        selfSigned: false,
        certExpired: false,
        floodProtection: false,
        floodProtectionDelay: 1000,
        sasl: false,
        stripColors: false,
        channelPrefixes: '&#',
        messageSplit: 512,
        encoding: false,
        webirc: {
            pass: '',
            ip: '',
            host: ''
        },
        millisecondsOfSilenceBeforePingSent: 15 * 1000,
        millisecondsBeforePingTimeout: 8 * 1000
    };
};