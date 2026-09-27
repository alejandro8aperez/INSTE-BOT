(function () {
  "use strict";

  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  var ICONS = {
    caret: '<svg class="tomo-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>'
  };

  /* ---------- block renderers ---------- */
  function renderBloque(b) {
    switch (b.tipo) {
      case "parrafo":
        return "<p>" + esc(b.texto) + "</p>";
      case "subtitulo":
        return "<h4>" + esc(b.texto) + "</h4>";
      case "lista":
        return "<ul>" + b.items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul>";
      case "listaNumerada":
        return "<ol>" + b.items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ol>";
      case "destacado":
        return '<aside class="callout"><strong>' + esc(b.titulo) + "</strong><p>" + esc(b.texto) + "</p></aside>";
      case "cita":
        return "<blockquote>" + esc(b.texto) + "</blockquote>";
      case "diagrama":
        return (
          '<figure class="diagram"><figcaption>' + esc(b.titulo) +
          "</figcaption><pre>" + esc(b.lineas.join("\n")) + "</pre></figure>"
        );
      case "tabla":
        return (
          '<div class="table-wrap"><table><thead><tr>' +
          b.encabezados.map(function (h) { return "<th>" + esc(h) + "</th>"; }).join("") +
          "</tr></thead><tbody>" +
          b.filas
            .map(function (r) {
              return "<tr>" + r.map(function (c) { return "<td>" + esc(c) + "</td>"; }).join("") + "</tr>";
            })
            .join("") +
          "</tbody></table></div>"
        );
      case "especificaciones":
        return (
          '<dl class="specs">' +
          b.items
            .map(function (i) {
              return '<div class="spec"><dt>' + esc(i.label) + "</dt><dd>" + esc(i.valor) + "</dd></div>";
            })
            .join("") +
          "</dl>"
        );
      case "columnas":
        return (
          '<div class="cols">' +
          b.items
            .map(function (i) {
              return '<div class="col-card"><h5>' + esc(i.titulo) + "</h5><p>" + esc(i.texto) + "</p></div>";
            })
            .join("") +
          "</div>"
        );
      default:
        return "";
    }
  }

  /* ---------- cover + footer ---------- */
  function renderCover(m) {
    document.title = m.titulo + " · " + m.proyecto;
    document.getElementById("coverBadge").textContent = m.proyecto;
    document.getElementById("coverTitle").textContent = m.titulo;
    document.getElementById("coverSub").textContent = m.subtitulo;

    var fields = [
      ["Autor", m.autor],
      ["Dirección", m.direccion],
      ["Versión", m.version],
      ["Clasificación", m.clasificacion],
      ["Fecha", m.fecha],
      ["Estado", m.estado]
    ];
    document.getElementById("metaGrid").innerHTML = fields
      .map(function (f) {
        return '<div class="meta-item"><dt>' + esc(f[0]) + "</dt><dd>" + esc(f[1]) + "</dd></div>";
      })
      .join("");

    document.getElementById("footMeta").textContent = "v" + m.version + " · " + m.fecha;
    document.getElementById("footAuthor").textContent = m.autor;
    document.getElementById("footDir").textContent = m.direccion;
    document.getElementById("footRight").innerHTML =
      esc(m.proyecto) + "<br>" + esc(m.clasificacion) + " · " + esc(m.fecha);
  }

  /* ---------- sidebar index ---------- */
  function renderToc(tomos) {
    var html = tomos
      .map(function (t) {
        var caps = t.capitulos
          .map(function (c) {
            return (
              '<a class="cap-link" href="#' + esc(c.id) + '" data-cap="' + esc(c.id) + '" data-tomo="' + esc(t.id) + '">' +
              '<span class="cn">' + esc(c.numero) + "</span><span>" + esc(c.titulo) + "</span></a>"
            );
          })
          .join("");
        return (
          '<details class="tomo-group" data-tomo="' + esc(t.id) + '">' +
          "<summary>" +
          '<span class="tomo-num">' + esc(t.numero) + "</span>" +
          '<span class="tomo-title">' + esc(t.titulo) + "</span>" +
          ICONS.caret +
          "</summary>" +
          '<div class="cap-list">' + caps + "</div>" +
          "</details>"
        );
      })
      .join("");
    document.getElementById("toc").innerHTML = html;
  }

  /* ---------- book ---------- */
  function renderBook(tomos) {
    var html = tomos
      .map(function (t) {
        var caps = t.capitulos
          .map(function (c) {
            return (
              '<section class="capitulo" id="' + esc(c.id) + '">' +
              "<h3>" + '<span class="cn">Cap. ' + esc(c.numero) + "</span>" + esc(c.titulo) + "</h3>" +
              c.bloques.map(renderBloque).join("") +
              "</section>"
            );
          })
          .join("");
        return (
          '<article class="tomo" id="' + esc(t.id) + '">' +
          '<header class="tomo-head">' +
          '<div class="tomo-roman">' + esc(t.numero) + "</div>" +
          "<div><h2>" + esc(t.titulo) + "</h2>" +
          '<p class="tomo-resumen">' + esc(t.resumen) + "</p></div>" +
          "</header>" +
          '<div class="tomo-body">' + caps + "</div>" +
          "</article>"
        );
      })
      .join("");
    document.getElementById("book").innerHTML = html;
  }

  /* ---------- interactions ---------- */
  function setupNav() {
    var body = document.body;
    var menuBtn = document.getElementById("menuBtn");
    var overlay = document.getElementById("overlay");

    function closeNav() {
      body.classList.remove("nav-open");
      menuBtn.setAttribute("aria-expanded", "false");
    }
    function toggleNav() {
      var open = body.classList.toggle("nav-open");
      menuBtn.setAttribute("aria-expanded", String(open));
    }
    menuBtn.addEventListener("click", toggleNav);
    overlay.addEventListener("click", closeNav);

    document.getElementById("toc").addEventListener("click", function (e) {
      if (e.target.closest(".cap-link")) closeNav();
    });

    // scroll spy
    var links = {};
    document.querySelectorAll(".cap-link").forEach(function (a) {
      links[a.dataset.cap] = a;
    });
    var current = null;
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            var id = en.target.id;
            if (id === current) return;
            current = id;
            for (var k in links) links[k].classList.remove("active");
            var link = links[id];
            if (link) {
              link.classList.add("active");
              var group = link.closest("details.tomo-group");
              if (group && !group.open) group.open = true;
              var r = link.getBoundingClientRect();
              var nav = document.getElementById("toc");
              var nr = nav.getBoundingClientRect();
              if (r.top < nr.top + 8 || r.bottom > nr.bottom - 8) {
                link.scrollIntoView({ block: "nearest" });
              }
            }
          }
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );
    document.querySelectorAll(".capitulo").forEach(function (s) { spy.observe(s); });

    // search filter
    var search = document.getElementById("search");
    var empty = document.getElementById("sidebarEmpty");
    search.addEventListener("input", function () {
      var q = search.value.trim().toLowerCase();
      var any = false;
      document.querySelectorAll(".tomo-group").forEach(function (g) {
        var matchGroup = false;
        g.querySelectorAll(".cap-link").forEach(function (a) {
          var hit = !q || a.textContent.toLowerCase().indexOf(q) !== -1;
          a.style.display = hit ? "" : "none";
          if (hit) matchGroup = true;
        });
        g.style.display = matchGroup ? "" : "none";
        if (q && matchGroup) g.open = true;
        if (matchGroup) any = true;
      });
      empty.hidden = any;
    });

    // progress bar + to-top
    var progress = document.getElementById("progress");
    var toTop = document.getElementById("toTop");
    function onScroll() {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      progress.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
      toTop.classList.toggle("show", h.scrollTop > 600);
    }
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- boot ---------- */
  function boot(data) {
    if (!data || !data.tomos) throw new Error("Datos del libro no disponibles");
    renderCover(data.metadata);
    renderToc(data.tomos);
    renderBook(data.tomos);
    setupNav();

    if (location.hash) {
      var target = document.getElementById(location.hash.slice(1));
      if (target) {
        var root = document.documentElement;
        var prev = root.style.scrollBehavior;
        root.style.scrollBehavior = "auto";
        target.scrollIntoView();
        root.style.scrollBehavior = prev;
      }
    }
  }

  if (window.LIBRO_DATA) {
    boot(window.LIBRO_DATA);
  } else {
    fetch("libro-blanco-data.json")
      .then(function (r) { return r.json(); })
      .then(boot)
      .catch(function (err) {
        document.getElementById("book").innerHTML =
          '<div class="loading">No se pudo cargar el contenido: ' + esc(err.message) + "</div>";
      });
  }
})();
