!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.ColumbidaeJS = t();
}(this, function() {
    "use strict";
    function e(e, t) {
        if ("undefined" != typeof navigator.sendBeacon) return navigator.sendBeacon(e, t);
        var n = /*@cc_on @if (@_jscript_version < 10) window.XDomainRequest || @end @*/ window.XMLHttpRequest;
        if (void 0 === n) return flase;
        var r = new n();
        return r.open("POST", e, !0), r.send(t), !0;
    }
    function t(e) {
        var t = null;
        return "string" == typeof e.stack && (t = n(e.stack)), {
            type: "Error",
            value: e.message,
            stacktrace: t
        };
    }
    function n(e) {
        var t = [];
        return [ i, o ].forEach(function(n) {
            if (!(t.length > 0)) for (var r = null; null != (r = n.exec(e)); ) {
                var i = r[1].trim();
                0 == i.length && (i = "?"), t.unshift({
                    "function": i,
                    filename: r[2],
                    lineno: parseInt(r[3]),
                    colno: parseInt(r[4])
                });
            }
        }), 0 == t.length ? null : {
            frames: t
        };
    }
    function r(e) {
        /*@cc_on
  @if (@_jscript_version < 5.8) throw new Error('This library does not support IE8-'); @end
  @if (@_jscript_version < 10) if (window.location.protocol !== 'https:') throw new Error('Sentry.io supports https only'); @end
  @*/
        if ("undefined" == typeof e.uuidv4) throw new Error("uuidv4 is required");
        this.start = new Date().getTime(), this.uuidv4 = e.uuidv4, this.sendBeacon = e.sendBeacon, 
        this.url = "//sentry.io/api/" + e.projectId + "/store/?sentry_version=7&sentry_client=ColumbidaeJS%2F" + a + "&sentry_key=" + e.key, 
        this.payload = {
            project: e.projectId,
            logger: "javascript",
            platform: "javascript",
            request: {
                headers: {
                    "User-Agent": navigator.userAgent
                },
                url: window.location.href
            },
            exception: {
                values: []
            },
            extra: {
                "session:duration": 0
            }
        };
    }
    var i = /at(.*) \(?(.+):(\d+):(\d+)/g, o = /(.*)@(.+):(\d+):(\d+)/g, a = "0.0.1";
    return r.prototype.send = function(n) {
        var r = this.uuidv4();
        return this.payload.exception.values.push(t(n)), this.payload.extra["session:duration"] = new Date().getTime() - this.start, 
        this.payload.event_id = r, e(this.url, JSON.stringify(this.payload)), r;
    }, {
        Sentry: r
    };
});
//# sourceMappingURL=columbidae.js.map