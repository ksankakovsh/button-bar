var loudlinks = function(e) {
    function t() {
        var e, t, r = this.getAttribute("data-sound") || this.getAttribute("data-src");
        r && (r.indexOf("{{type}}") > 0 ? (e = r.replace(c, "mp3"), t = r.replace(c, "ogg")) : (e = g + r + ".mp3", t = p + r + ".ogg"), l || (l = !0, u.addEventListener("error", function() {
            s.error("рџ¶ D'oh! The mp3 file URL is wrong!")
        }), d.addEventListener("error", function() {
            s.error("рџ¶ D'oh! The ogg file URL is wrong!")
        })), (u.src !== e || d.src !== t) && (u.setAttribute("src", e), d.setAttribute("src", t), a.load()), a.play())
    }

    function r() {
        a.pause(), a.currentTime = 0
    }

    function n(e) {
        e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", r), e.addEventListener("touchmove", r), e.addEventListener("click", r)
    }

    function o(e) {
        e.addEventListener("click", t)
    }

    function i() {
        var t, r = e.getElementsByClassName("loud-link-hover"),
            s = e.getElementsByClassName("loud-link-click"),
            a = r.length,
            u = s.length;
        for (t = 0; a > t; t++) n(r[t]);
        for (t = 0; u > t; t++) o(s[t]);
        return i
    }
    var s = window.console || {};
    if (s.log = s.log || function() {}, s.error = s.error || s.log, !e.createElement("audio").canPlayType) return s.error("Oh man рџ©! \nYour browser doesn't support audio awesomeness."),
        function() {};
    s.log("Audio works like a charm рџ‘Ќ");
    var a = e.createElement("audio"),
        u = e.createElement("source"),
        d = e.createElement("source"),
        l = !1,
        c = /{{type}}/gi,
        g = "",
        p = "";
    return a.setAttribute("preload", !0), u.setAttribute("type", "audio/mpeg"), d.setAttribute("type", "audio/ogg"), a.appendChild(u), a.appendChild(d), e.body.appendChild(a), i()
}(document);