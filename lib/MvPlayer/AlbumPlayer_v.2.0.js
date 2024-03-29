// Album Music Player v.2.0 - © 2022 | Designed & licenced for Mix Vibe Records | Developed : (Codix.dev) Mix Vibe Rec. Developers
$(".aBm-Ptop").append(
  "<ul class='pL-Gp'><li class='my-1' style='display: block;'><div class='d-flex align-items-center'><div class='col-md-1 lite-title-color'>#</div><div class='col-md-6 lite-title-color' style='max-width: 75%;'>TITLE</div><div class='ml-auto' style='margin-right: 20px;'><div class='d-lg-block'><svg class='line' width='20' height='20' viewBox='0 0 25 25' xmlns='http://www.w3.org/2000/svg'><circle fill='none' stroke-width='1.1' cx='10' cy='10' r='9'></circle><rect x='9' y='4' width='1' height='7'></rect><path fill='none' stroke-width='1.1' d='M13.018,14.197 L9.445,10.625'></path></svg></div></div></div></li></ul>"
);
for (var i = 0; i < tracklist.length; ++i)
  $(".aBm-Plist").append(
    "<li class='pL-Gp-itm my-1 up-next' data-playtrkid='" +
      i +
      "'><div class='d-flex align-items-center'><div class='col-btn'><svg class='line' width='30' height='30' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><polygon fill='none' points='6.5,5 14.5,10 6.5,15'></polygon></svg></div><div class='col-md-6 pL-mTa'><span class='songtitle'>" +
      tracklist[i].song +
      "</span> - <span class='songtitle'>" +
      tracklist[i].artist +
      "</span></div><div class='ml-auto' style='margin-right: 20px;'>" +
      tracklist[i].length +
      "</div></div></li>"
  );
function detectIE() {
  var t = window.navigator.userAgent,
    a = t.indexOf("MSIE "),
    e = t.indexOf("Trident/"),
    t = t.indexOf("Edge/");
  (0 < a || 0 < e || 0 < t) && $("body").addClass("ie");
}
function audioPlayer() {
  var t,
    a = $("#audio"),
    e = document.getElementById("audio"),
    s = $("#time"),
    l = $("#volume"),
    r = l.val(),
    i = $(".play"),
    o = $(".playText"),
    n = tracklist.length,
    c = 0;
  function d() {
    return !e.paused;
  }
  function u() {
    d()
      ? (i.addClass("paused"),
        o.html(
          '<svg enable-background="new 0 0 64 64" height="64px" id="PAUSE" version="1.1" viewBox="0 0 64 64" width="64px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M39,17.563c-2.75,0-5,2.25-5,5v18.875c0,2.75,2.25,5,5,5s5-2.25,5-5V22.563C44,19.813,41.75,17.563,39,17.563z M41,41.438   c0,1.1-0.9,2-2,2s-2-0.9-2-2V22.563c0-1.1,0.9-2,2-2s2,0.9,2,2V41.438z"></path><path d="M25,17.563c-2.75,0-5,2.25-5,5v18.875c0,2.75,2.25,5,5,5s5-2.25,5-5V22.563C30,19.813,27.75,17.563,25,17.563z M27,41.438   c0,1.1-0.9,2-2,2s-2-0.9-2-2V22.563c0-1.1,0.9-2,2-2s2,0.9,2,2V41.438z"></path></g></svg> PAUSE'
        ),
        $("section.player").addClass("player--active"))
      : (i.removeClass("paused"),
        o.html(
          '<svg width="30" height="30" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#FFF" points="6.5,5 14.5,10 6.5,15"></polygon></svg> PREVIEW'
        ),
        $(".add-recent-btn").trigger("click"),
        $("section.player").removeClass("player--active"));
  }
  s.on("mousedown", function () {
    e.pause();
  }),
    s.on("mouseup", function () {
      e.play();
    });
  $("#getlink").val();
  function p() {
    d() ? e.pause() : (e.play(), launch_toastFetch());
  }
  function h() {
    e.pause(),
      (e.currentTime = 0),
      s.css("background", "rgba(120, 130, 140, 0.2)"),
      s.val(0),
      s.attr("value", 0),
      a.attr("src", tracklist[c].source),
      a.attr(
        "onclick",
        "openDownloadlink('" +
          tracklist[c].Tdownloadlink +
          "','" +
          tracklist[c].song +
          " - " +
          tracklist[c].artist +
          " [Mix Vibe Rec]." +
          tracklist[c].Tdownloadformat +
          "')"
      ),
      $("section.flex.player .artwork").attr("src", tracklist[c].artwork),
      $("section.flex.player .song").html(tracklist[c].song),
      $("section.flex.player .artist").html(tracklist[c].artist),
      $("section.flex.player > .right .buttontext").html(
        tracklist[c].buttontext
      ),
      $(".up-next").removeClass("active"),
      $(".up-next:nth-child(" + (c + 1) + ")").addClass("active"),
      $(".aBm-PGbg").css(
        "background-image",
        "url(" + tracklist[c].artwork + ")"
      ),
      $(".coverart").attr("src", tracklist[c].artwork),
      $(".aBm-tLe").html(tracklist[c].song),
      $(".aBm-aTst").html(tracklist[c].artist),
      $(".aBm-aTst-lnk").attr("href", tracklist[c].artistlink),
      $(".aBm-cPsr").html(tracklist[c].composer),
      $(".aBm-pRod").html(tracklist[c].producer),
      $(".aBm-lYst").html(tracklist[c].lyricist),
      $(".aBm-lAng").html(tracklist[c].language),
      $(".aBm-RDte").html(tracklist[c].releasedate),
      $(".aBm-duTin").html(tracklist[c].length),
      $(".buttonlink").attr("href", tracklist[c].buttonlink),
      $(".Tdownloadlink").attr("href", tracklist[c].Tdownloadlink),
      $(".aBm-id").html(tracklist[c].musicID),
      $("#copy_url").attr({ "data-clipboard-text": tracklist[c].shorturl }),
      $(".shrturl").attr("value", tracklist[c].shorturl),
      $("#TrackType").html(
        "<i class='far fa-file-audio' style='color:teal;'></i> Type: " +
          tracklist[c].tracktype
      ),
      u();
  }
  function m() {
    var t = 100 * r;
    (e.volume = l.val()),
      (r = l.val()),
      l.css(
        "background",
        "linear-gradient(to right, #1eb1b3 0%, #11dc9a " +
          t +
          "%, rgba(120, 130, 140, 0.2) " +
          t +
          "%, rgba(120, 130, 140, 0.2) 100%)"
      );
  }
  a.on("play playing pause", function () {
    u();
  }),
    a.on("canplay", function () {
      var t = this.duration;
      s.attr("max", t);
    }),
    a.on("timeupdate", function () {
      var t = this.currentTime,
        a = this.duration,
        e = (t / a) * 100;
      s.val(t),
        s.attr("value", t),
        s.css(
          "background",
          "linear-gradient(to right, #1eb1b3 0%, #11dc9a " +
            e +
            "%, rgba(120, 130, 140, 0.2) " +
            e +
            "%, rgba(120, 130, 140, 0.2) 100%)"
        ),
        a - 30 <= t && c != n - 1
          ? $(".n:empty").html(
              "<audio id='audio-next' preload='metadata' src='" +
                tracklist[c + 1].source +
                "'></audio>"
            )
          : t < a - 30 && !$(".n").is(":empty") && $(".audio-next").html("");
    }),
    h(),
    a.on("ended", function () {
      $(".repeat").hasClass("repeat-one")
        ? ((e.currentTime = 0),
          s.css("background", "rgba(120, 130, 140, 0.2)"),
          s.val(0),
          s.attr("value", 0),
          e.play())
        : $(".repeat").hasClass("repeat-all") && c == n - 1
        ? ((c = 0), h(), e.play(), launch_toastFetch())
        : c == tracklist.length - 1
        ? ((c = 0), h())
        : (c++, h(), e.play(), launch_toastFetch());
    }),
    s.on("input", function () {
      var t = $(this).val(),
        a = e.duration,
        a = (parseInt(t) / a) * 100;
      $(this).trigger("change"),
        (e.currentTime = t),
        s.css(
          "background",
          "linear-gradient(to right, #1eb1b3 0%, #11dc9a " +
            a +
            "%, rgba(120, 130, 140, 0.2) " +
            a +
            "%, rgba(120, 130, 140, 0.2) 100%)"
        );
    }),
    l.on("input", function () {
      $(this).trigger("change"),
        m(),
        0 == r
          ? $(".volume").addClass("muted")
          : $(".volume").removeClass("muted");
    }),
    $(".volume").on("click", function () {
      $(this).toggleClass("muted"),
        (r =
          0 == r
            ? (l.val(t), (e.volume = t))
            : ((t = r), l.val(0), (e.volume = 0))),
        m();
    }),
    i.on("click", function () {
      p();
    }),
    $(window).keypress(function (t) {
      (0 !== t.keyCode && (32 !== t.keyCode || $("input").is(":focus"))) ||
        (t.preventDefault(), p(), $(".add-recent-btn").trigger("click"));
    }),
    $(".repeat").on("click", function () {
      $(this).hasClass("repeat-one")
        ? ($(this).removeClass("repeat-one"),
          $(this).addClass("repeat-all"),
          launch_toastRepeatAll())
        : $(this).hasClass("repeat-all")
        ? $(this).removeClass("repeat-all")
        : ($(this).addClass("repeat-one"), launch_toastRepeat());
    }),
    $(".previous")
      .unbind()
      .click(function () {
        !(e.currentTime < 5 && 0 == c) && e.currentTime < 5
          ? ((c -= 1), h(), e.play(), launch_toastFetch())
          : (e.currentTime = 0);
      }),
    $(".next1").on("click", function () {
      c == tracklist.length - 1 && $(".repeat").hasClass("repeat-one")
        ? ((c = 0), h(), $(".repeat").removeClass("repeat-one"))
        : c == tracklist.length - 1 && $(".repeat").hasClass("repeat-all")
        ? ((c = 0), h(), e.play())
        : $(".repeat").hasClass("repeat-one")
        ? (c++, h(), e.play())
        : c == tracklist.length - 1
        ? ((c = 0), h())
        : a.trigger("ended");
    }),
    $(".up-next").on("click", function () {
      (c = $(this).data("playtrkid")),
        h(),
        e.play(),
        launch_toastFetch(),
        $(".add-recent-btn").trigger("click");
    });
}
function mobileFooter() {
  $(window).width() < 600
    ? $("section.flex.player").addClass("mobile")
    : $("section.flex.player").removeClass("mobile");
}
function launch_toastFetch() {
  $("#FetchToast").html(
    '<div id="toastFetch" class="toast">One moment, as we fetch your music..</div>'
  );
  var t = document.getElementById("toastFetch");
  (t.className = "toast show"),
    setTimeout(function () {
      (t.className = t.className.replace("show", "toast")),
        $("#FetchToast").empty();
    }, 5e3);
}
function launch_toastRepeat() {
  $("#FetchToast").html(
    '<div id="toastRepeat" class="toast">Current Track Repeat Enabled.</div>'
  );
  var t = document.getElementById("toastRepeat");
  (t.className = "toast show"),
    setTimeout(function () {
      (t.className = t.className.replace("show", "toast")),
        $("#FetchToast").empty();
    }, 5e3);
}
function launch_toastRepeatAll() {
  $("#FetchToast").html(
    '<div id="toastRepeatAll" class="toast">All Track Repeat Enabled.</div>'
  );
  var t = document.getElementById("toastRepeatAll");
  (t.className = "toast show"),
    setTimeout(function () {
      (t.className = t.className.replace("show", "toast")),
        $("#FetchToast").empty();
    }, 5e3);
}
detectIE(),
  audio.addEventListener(
    "error",
    function (t) {
      switch (t.target.error.code) {
        case t.target.error.MEDIA_ERR_ABORTED:
          Swal.fire("Oops...", "You aborted the audio playback.", "info");
          break;
        case t.target.error.MEDIA_ERR_NETWORK:
          Swal.fire(
            "Oops...",
            "A network error caused the audio download to fail.",
            "error"
          );
          break;
        case t.target.error.MEDIA_ERR_DECODE:
          Swal.fire(
            "Oops...",
            "The audio playback was aborted due to a corruption problem or features your browser did not support.",
            "error"
          );
          break;
        case t.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
          Swal.fire(
            "Oops...",
            "The audio not be loaded, either because the server or network failed.",
            "error"
          );
          break;
        default:
          Swal.fire("Oops...", "An unknown error occurred.", "error");
      }
    },
    !0
  ),
  audioPlayer(),
  mobileFooter(),
  $(window).resize(function () {
    mobileFooter();
  });
