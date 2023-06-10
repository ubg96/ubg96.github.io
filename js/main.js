var main = {
    trackingCodeGA: "G-LEXCE416N2",
    trackingCodeGTM: "",
    init: function () {
      if (
        window.location.href.indexOf("localhost") == -1 &&
        window.location.href.indexOf("127.0.0.1") == -1
      ) {
        this.loadGA();
      }
    },
    loadGA: function () {
      var r = document.createElement("script");
      r.setAttribute(
        "src",
        `https://www.googletagmanager.com/gtag/js?id=${main.trackingCodeGA}`
      ),
        r.setAttribute("type", "text/javascript"),
        r.setAttribute("crossOrigin", "anonymous"),
        r.setAttribute("async", "true"),
        (r.onload = function () {
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", main.trackingCodeGA);
        }),
        document.head.appendChild(r);
    },
    loadGTM: function () {
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, "script", "dataLayer", main.trackingCodeGTM);
    },
    loadAdsense:function(){
      var r = document.createElement("script");
      r.setAttribute(
        "src",
        `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1577180757652394`
      ),
        r.setAttribute("type", "text/javascript"),
        r.setAttribute("crossOrigin", "anonymous"),
        r.setAttribute("async", "true"),
        document.head.appendChild(r);
    },
    initEventDetail: function () {
      document
        .getElementById("playButton")
        .addEventListener("click", function () {
          let src = this.dataset.src;
          let html = `<iframe  class="iframe-game" id="mainGame" src="${src}" width="1000" height="650" scrolling="none" frameborder="0" allowfullscreen="" tabindex="0"></iframe>`;
          let iframe = document.getElementById("gameLoad");
          iframe.innerHTML = html;
          document.getElementById("gameBar").classList.remove("hidden");
        });
  
      document
        .getElementById("fullScreen")
        .addEventListener("click", () => main.openFullScreen());
    },
    loading:function(){
      let gameLoad = document.getElementById("gameLoad");
      if(gameLoad != null){
        gameLoad.classList.remove("loading");
      }
    }
  };
  main.init();
  