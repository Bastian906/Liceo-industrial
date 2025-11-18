/* =========================================================
   Configurable Data (CMS-lite): edita acá para actualizar
========================================================= */
const siteData = {
  hero: [
    { img: "img/IMG_20250912_081359.jpg", title: "Formación Técnica con Excelencia", text: "Aprendizajes significativos conectados con la industria y el territorio." },
    { img: "img/IMG_20250915_165326.jpg", title: "Inclusión y Dignidad", text: "Un liceo público para todas y todos, sin discriminación." },
    { img: "img/IMG_20250923_073916.jpg", title: "Innovación Pedagógica", text: "Metodologías activas y proyectos con sentido." }
  ],
  academico: [
    {
      titulo: "Especialidades TP",
      slug: "especialidades-tp",
      media: { img: "https://www.ovejeronoticias.cl/wp-content/uploads/2024/11/Evaluaciones-practicas-2.jpg", caption: "Talleres y laboratorios • Referencial" },
      contenido: `
        <ul>
          <li>Electricidad</li>
          <li>Telecomunicaciones</li>
          <li>Mecánica Automotriz</li>
          <li>Mecánica Industrial</li>
          <li>Instalaciones Sanitarias</li>
          <li>Construcción</li>
          <li>Construcciones Metálicas</li>
        </ul>
        <p>Articulación con empresas locales, liceos y CFT/IP/Universidades.</p>
        <p>Puedes insertar fotos, videos (iframe) y más en esta página.</p>
      `
    },
    {
      titulo: "Asignaturas & Plan Común",
      slug: "asignaturas-plan-comun",
      media: { img: "https://elmagallanico.com/wp-content/uploads/2024/12/2024-12-23-escuelas-edelmag.jpg", caption: "Plan común • Referencial" },
      contenido: `
        <ul>
          <li>Lengua y Literatura</li>
          <li>Inglés</li>
          <li>Química</li>
          <li>Física</li>
          <li>Biología</li>
          <li>Matemáticas</li>
          <li>Educación Física y Salud</li>
          <li>Laboratorio Vocacional</li>
          <li>Orientación</li>
          <li>Música</li>
          <li>Historia</li>
        </ul>
        <p>Recursos descargables y vínculos curriculares.</p>
      `
    },
    {
      titulo: "Apoyos al Aprendizaje",
      slug: "apoyos-aprendizaje",
      media: { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIINHMniseAFCTOplZORAGICqUwDgBf_sfUQ&s", caption: "Acompañamiento • Referencial" },
      contenido: `
        <ul>
          <li>PIE: Programa de Integración Escolar</li>
          <li>ACLE: Talleres extraprogramáticos</li>
          <li>Convivencia Escolar & Orientación</li>
        </ul>
        <p>Protocolos, derivaciones y redes de apoyo.</p>
      `
    }
  ],
  estudiantes: [
    { icon: "📄", titulo: "Reglamento Interno", url: "#", desc: "Descarga en PDF" },
    { icon: "🗓️", titulo: "Horarios", url: "#", desc: "Jornadas y módulos" },
    { icon: "🧭", titulo: "Convivencia Escolar", url: "#", desc: "Protocolos de actuación" },
    { icon: "🧰", titulo: "Práctica Profesional", url: "#", desc: "Requisitos y convenios" },
    { icon: "💻", titulo: "Recursos Digitales", url: "#", desc: "Links útiles y plataformas" },
    { icon: "📝", titulo: "Documentos", url: "#", desc: "Formatos y solicitudes" }
  ],
  noticias: [
    {
      titulo: "Torneo De Futsal",
      slug: "torneo-de-futsal",
      fecha: "2025-03-03",
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRq8okiCfdbFbnLz9dgIwRaqdHYJa11rvG-T3O2XsHyMQPCeqiYb03kOlryV7FyEJ-bEVyc6E5PNnq2pd8onuXCFXPfIrXJU7zidbzt2DbJGSyW6EycTXvpn794KnMjzb9EoLMYZpiEjmw6JRSH_lfMselAlAQlH18PeYO6NhDG6d1pup3VMyGWhxfCkJg/w1600/Selecci%C3%B3n%20de%20Futsal%20Masculino%20del%20Liceo%20Polit%C3%A9cnico%20Cardenal%20Ra%C3%Bal%20Silva%20Henr%C3%ADquez%20obtiene%20el%20segundo%20lugar%20en%20campeonato%20interliceal.jpeg",
      resumen: "Estudiantes del liceo industrial brillan en el campeonato de futsal.",
      detalle: "La selección de futsal del Liceo Industrial Bicentenario de Excelencia Armando Quezada Acharán participó con entusiasmo en un torneo interliceano..."
    },
    {
      titulo: "Entrega Reconocimiento Academico",
      slug: "entrega-reconocimiento-academico",
      fecha: "2025-04-10",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpn-Al5F_RIXBU9zaa9jIjUDiOwrj01Gvq9w&s",
      resumen: "Establecimiento reconoce a estudiantes destacados del liceo.",
      detalle: "El Liceo Industrial Bicentenario de Excelencia AQ Acharán realizó una emotiva ceremonia..."
    },
    {
      titulo: "Fortaleciendo Habilidades Laborales",
      slug: "fortaleciendo-habilidades-laborales",
      fecha: "2025-05-22",
      img: "https://www.subirfoto.es/get/sRdVW5.jpg",
      resumen: "Ceremonia de inauguración del Programa Fortaleciendo Habilidades para el Mundo Laboral con ONG Canales y HIF.",
      detalle: "Contenido extendido (placeholder) para el detalle..."
    }
  ]
};

/* Páginas internas (detalle) de Quiénes Somos */
const qsPages = {
  "85-anios": {
    title: "+85 años de historia",
    body: "El Liceo Industrial de Punta Arenas (hoy Liceo Industrial Bicentenario de Excelencia Armando Quezada Acharán ) se remonta al   1 de junio de 1940, cuando abrió como Escuela de Artes y Oficios para formar técnicos para la industria regional, hito documentado por la prensa local y el Mineduc. A lo largo de más de ocho décadas ha mantenido matrícula TP y modernizado su oferta —hoy con   Electricidad, Telecomunicaciones y Construcción (mención terminaciones) — en coordinación con instituciones del entorno y de educación superior. En 2023 ingresó a la Red de Liceos Bicentenario , reforzando estándares y vínculos con el mundo productivo mediante su Consejo Asesor Empresarial reactivado desde 2022.En 2024 celebró 84 años y en 2025 sus 85 años de trayectoria, reafirmando su rol histórico en la formación técnico-profesional de Magallanes y su compromiso con la educación pública regional.",
    img: "data:image/png;base64,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",
    caption: "Archivo histórico institucional • Fotografía referencial"
  },
  "tp-excelencia": {
    title: "TP de Excelencia",
    body: "En el año 2025, el Liceo Industrial Bicentenario de Excelencia “Armando Quezada Acharán” de Punta Arenas imparte las especialidades técnico-profesionales de Electricidad, Telecomunicaciones, Mecánica Industrial (mención Mecánica Automotriz), Construcción mención Terminaciones y Instalaciones Sanitarias, todas orientadas a responder a las demandas del mercado regional y a promover la inserción laboral de sus egresados.",
    img: "https://elpinguino.com/uploads/images/large/5b7b7bb99e701bdde8410752876aaf53.jpeg",
    caption: "Laboratorio y equipamiento • Fotografía referencial"
  },
  "pie-acle": {
    title: "PIE & ACLE",
    body: "El **Proyecto de Integración Escolar (PIE)** del Liceo Industrial Bicentenario de Excelencia Armando Quezada Acharán cumple un rol esencial en la promoción de una educación inclusiva, brindando apoyos especializados a estudiantes con diversas necesidades educativas mediante el trabajo conjunto de docentes, asistentes y profesionales del área psicosocial. Este enfoque se complementa con una variada oferta de **Actividades Curriculares de Libre Elección (ACLE)** que fomentan el desarrollo integral de los jóvenes, fortaleciendo sus habilidades artísticas, deportivas, tecnológicas y sociales. Ambas instancias —PIE y ACLE— se articulan como espacios de acompañamiento y crecimiento personal, favoreciendo la participación, la autoestima y la formación valórica de los estudiantes, asegurando que cada uno pueda desplegar sus talentos y potencialidades en un ambiente de respeto, inclusión y trabajo colaborativo.",
    img: "https://www.elmagallanews.cl/sites/elmagallanews.cl/files/imagecache/380x285/imagen_noticia/capacitacioin_punta_arenas.jpg",
    caption: "Inclusión y participación • Fotografía referencial"
  },
  "vinculacion": {
    title: "Vinculación con Empresas",
    body: "La iniciativa tiene como propósito fortalecer el vínculo entre el liceo y el entorno productivo regional, actuando como un apoyo directo a la gestión de la dirección del establecimiento. A través de esta instancia, se busca identificar nuevas oportunidades laborales que amplíen el campo de acción de los estudiantes, facilitando su acceso a pasantías y prácticas profesionales en empresas e instituciones vinculadas a sus especialidades. De este modo, el Liceo Industrial Bicentenario Armando Quezada Acharán refuerza su compromiso con la formación técnico-profesional de excelencia, promoviendo una educación conectada con el mundo real y enfocada en la inserción laboral efectiva de sus egresados.",
    img: "https://energia.gob.cl/sites/default/files/styles/noticia_interior_525x310/public/field/image/foto_ppal_nota.jpg?itok=rbT7Xbju&c=1f215ad4df6b5b0499cb4729ecdbf030",
    caption: "Visitas técnicas • Fotografía referencial"
  }
};

/* =========================================================
   Helpers
========================================================= */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("es-CL", { year: "numeric", month: "long", day: "numeric" });
}
const slugify = (s) => s.toLowerCase()
  .normalize("NFD").replace(/[\u0300-\u036f]/g,"")
  .replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");

/* Asegurar slugs si faltan */
siteData.noticias.forEach(n => { if(!n.slug) n.slug = slugify(n.titulo); });
siteData.academico.forEach(a => { if(!a.slug) a.slug = slugify(a.titulo); });

/* =========================================================
   Theme toggle (persistente)
========================================================= */
const themeKey = "lic-institucional-theme";
function setTheme(mode) {
  document.documentElement.setAttribute("data-theme", mode);
  localStorage.setItem(themeKey, mode);
}
(function initTheme() {
  const saved = localStorage.getItem(themeKey);
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(saved || (prefersDark ? "dark" : "light"));
})();
$("#themeToggle")?.addEventListener("click", () => {
  const now = document.documentElement.getAttribute("data-theme");
  setTheme(now === "dark" ? "light" : "dark");
});

/* =========================================================
   Menú responsive
========================================================= */
const navToggle = $("#navToggle");
const mainnav = $("#mainnav");
navToggle?.addEventListener("click", () => {
  const open = mainnav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open ? "true" : "false");
});
$$(".mainnav a").forEach(a => a.addEventListener("click", (e) => {
  e.preventDefault();
  const slug = a.getAttribute("href").replace("/", "");
  navigate(slug);
}));

/* =========================================================
   SPA Router con History API (modo slash)
========================================================= */
const ROUTES = {
  "": "inicio",
  "inicio": "inicio",
  "quienes-somos": "quienes-somos",
  "academico": "academico",
  "estudiantes": "estudiantes",
  "noticias": "noticias",
  "contacto": "contacto",
  "gracias": "gracias",
  // subrutas
  "qs/85-anios": "qs-detail",
  "qs/tp-excelencia": "qs-detail",
  "qs/pie-acle": "qs-detail",
  "qs/vinculacion": "qs-detail",
  // dinámicas:
  // noticias/<slug> -> news-detail
  // academico/<slug> -> acad-detail
};
const VIEWS = Object.values(ROUTES).map(id => document.getElementById(id)).filter(Boolean);
VIEWS.push(document.getElementById("news-detail"));
VIEWS.push(document.getElementById("acad-detail"));
VIEWS.forEach(sec => sec.classList.add("view"));

function showView(id) {
  VIEWS.forEach(sec => {
    const active = sec.id === id;
    sec.classList.toggle("is-active", active);
    sec.setAttribute("aria-hidden", active ? "false" : "true");
  });
  window.scrollTo({ top: 0, behavior: "auto" });
}
function setActiveNav(path) {
  $$(".mainnav a").forEach(a => a.classList.remove("active"));
  const root = "/" + (path.split("/")[0] || "");
  const link = document.querySelector(`.mainnav a[href='${root}']`);
  if (link) link.classList.add("active");
}

/* =========================================================
   Turnstile: render explícito cuando la vista está visible
========================================================= */
function mountTurnstileIfVisible() {
  const contactView = document.getElementById("contacto");
  if (!contactView) return;

  const isActive = contactView.classList.contains("is-active");
  const el = contactView.querySelector(".cf-turnstile");

  if (!isActive || !el) return;
  if (!window.turnstile) return; // librería aún no cargada

  // Evitar render duplicado
  if (el.dataset.tsRendered === "1") return;

  const sitekey = el.getAttribute("data-sitekey");
  if (!sitekey || sitekey === "TURNSTILE_SITE_KEY") {
    console.warn("Turnstile: data-sitekey no configurado.");
    return;
  }

  try {
    window.turnstile.render(el, {
      sitekey,
      theme: el.getAttribute("data-theme") || "auto",
    });
    el.dataset.tsRendered = "1";
  } catch (err) {
    console.error("Turnstile render error:", err);
  }
}

// callback global (desde el script con ?onload=onTurnstileLoaded)
window.onTurnstileLoaded = function() {
  mountTurnstileIfVisible();
};

function navigate(slug, replace = false) {
  // QS
  if (slug?.startsWith("qs/")) {
    const key = slug.split("/")[1];
    renderQSDetail(key);
    showView("qs-detail");
  }
  // Noticias detalle
  else if (slug?.startsWith("noticias/")) {
    const newsSlug = slug.split("/")[1];
    renderNewsDetail(newsSlug);
    showView("news-detail");
  }
  // Académico detalle
  else if (slug?.startsWith("academico/")) {
    const acadSlug = slug.split("/")[1];
    renderAcadDetail(acadSlug);
    showView("acad-detail");
  }
  else {
    const id = ROUTES[slug] || "inicio";
    showView(id);
  }

  setActiveNav(slug || "inicio");
  document.title = `Liceo Industrial – ${slug || "inicio"}`;
  const url = "/" + (slug || "");
  if (replace) history.replaceState({ slug }, "", url);
  else history.pushState({ slug }, "", url);
  mainnav?.classList.remove("open");
  navToggle?.setAttribute("aria-expanded", "false");

  // 🔹 Si estamos en /contacto, renderiza Turnstile ahora
  if ((slug || "inicio") === "contacto") {
    setTimeout(mountTurnstileIfVisible, 0);
  }
}

window.addEventListener("popstate", (e) => {
  const slug = e.state?.slug || location.pathname.replace("/", "") || "inicio";
  if (slug.startsWith("qs/")) renderQSDetail(slug.split("/")[1]);
  if (slug.startsWith("noticias/")) renderNewsDetail(slug.split("/")[1]);
  if (slug.startsWith("academico/")) renderAcadDetail(slug.split("/")[1]);
  const id =
    slug.startsWith("qs/") ? "qs-detail" :
    slug.startsWith("noticias/") ? "news-detail" :
    slug.startsWith("academico/") ? "acad-detail" :
    (ROUTES[slug] || "inicio");
  showView(id);
  setActiveNav(slug);

  // 🔹 También al navegar con back/forward
  setTimeout(mountTurnstileIfVisible, 0);
});

(function bootRouter() {
  VIEWS.forEach(v => v.setAttribute("aria-hidden", "true"));
  const slug = location.pathname.replace("/", "");
  if (slug.startsWith("qs/")) renderQSDetail(slug.split("/")[1]);
  if (slug.startsWith("noticias/")) renderNewsDetail(slug.split("/")[1]);
  if (slug.startsWith("academico/")) renderAcadDetail(slug.split("/")[1]);
  const id =
    slug.startsWith("qs/") ? "qs-detail" :
    slug.startsWith("noticias/") ? "news-detail" :
    slug.startsWith("academico/") ? "acad-detail" :
    (ROUTES[slug] || "inicio");
  navigate(slug || "inicio", true);
  showView(id);

  // 🔹 Intento inicial (por si abriste directo /contacto y el script ya cargó)
  setTimeout(mountTurnstileIfVisible, 0);
})();

/* =========================================================
   Reveal on scroll
========================================================= */
const revealer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
}, { threshold: 0.12 });
$$(".reveal").forEach(el => revealer.observe(el));

/* =========================================================
   Hero Carousel
========================================================= */
function createCarousel({ root, slides, autoplay = true, interval = 6000 }) {
  const track = root.querySelector(".carousel-track");
  const indicators = root.querySelector(".carousel-indicators");
  let idx = 0, timer = null, isHover = false;

  track.innerHTML = "";
  indicators.innerHTML = "";
  slides.forEach((s, i) => {
    const li = document.createElement("div");
    li.className = "slide";
    li.innerHTML = `
      <img src="${s.img}" alt="${s.title}" loading="lazy">
      <div class="slide-caption">
        <h1>${s.title}</h1>
        <p>${s.text}</p>
      </div>
    `;
    track.appendChild(li);

    const dot = document.createElement("button");
    dot.addEventListener("click", () => go(i));
    indicators.appendChild(dot);
  });

  function update() {
    track.style.transform = `translateX(${-idx * 100}%)`;
    $$(".carousel-indicators button", root).forEach((b, i) => {
      b.setAttribute("aria-selected", i === idx ? "true" : "false");
    });
  }
  function next(dir = 1) { idx = (idx + dir + slides.length) % slides.length; update(); }
  function go(i) { idx = i % slides.length; update(); }

  root.querySelector(".prev").addEventListener("click", () => next(-1));
  root.querySelector(".next").addEventListener("click", () => next(1));

  function play() { if (!autoplay) return; stop(); timer = setInterval(() => { if (!isHover) next(1); }, interval); }
  function stop() { if (timer) clearInterval(timer); }
  root.addEventListener("mouseenter", () => { isHover = true; });
  root.addEventListener("mouseleave", () => { isHover = false; });

  update(); play();
  document.addEventListener("visibilitychange", () => document.hidden ? stop() : play());

  return { next, go, stop, play };
}

/* =========================================================
   Académico: Tarjetas -> Subpágina
========================================================= */
function renderAcademicCards(root, items) {
  if (!root) return;
  root.innerHTML = items.map((it) => `
    <article class="acad-card" role="link" tabindex="0" data-slug="${it.slug}" aria-label="Abrir ${it.titulo}">
      <span class="acad-card__title">${it.titulo}</span>
    </article>
  `).join("");

  root.querySelectorAll(".acad-card").forEach(card => {
    const slug = card.dataset.slug;
    const go = () => navigate(`academico/${slug}`);
    card.addEventListener("click", go);
    card.addEventListener("keydown", (e) => { if (e.key === "Enter") go(); });
  });
}

/* Subpágina Académico */
function renderAcadDetail(slug) {
  const item = siteData.academico.find(a => a.slug === slug);
  const fallback = { titulo: "Información", contenido: "<p>Contenido no disponible.</p>", media: {} };
  const data = item || fallback;

  $("#acadDetailTitle").textContent = data.titulo || "Académico";
  $("#acadDetailBody").innerHTML = data.contenido || "<p>Contenido no disponible.</p>";

  const img = $("#acadDetailImg");
  if (data.media?.img) {
    img.src = data.media.img;
    img.alt = data.titulo || "Imagen académica";
    $("#acadDetailCaption").textContent = data.media.caption || "";
  } else {
    img.src = "";
    img.alt = "";
    $("#acadDetailCaption").textContent = "";
  }
}

/* =========================================================
   Estudiantes Quicklinks
========================================================= */
function renderStudentLinks(root, items) {
  root.innerHTML = items.map(it => `
    <a class="qcard" href="${it.url}">
      <span class="qicon">${it.icon}</span>
      <strong>${it.titulo}</strong>
      <span class="muted">${it.desc}</span>
    </a>
  `).join("");
}

/* =========================================================
   Noticias: Cards -> Subpágina
========================================================= */
function renderNews(root, items) {
  const sorted = [...items].sort((a,b) => new Date(b.fecha) - new Date(a.fecha));
  root.innerHTML = sorted.map((n) => `
    <article class="news-card" role="link" tabindex="0" data-slug="${n.slug}">
      <img src="${n.img}" alt="${n.titulo}" loading="lazy" />
      <div class="news-body">
        <h3>${n.titulo}</h3>
        <time datetime="${n.fecha}">${formatDate(n.fecha)}</time>
        <p>${n.resumen}</p>
      </div>
    </article>
  `).join("");

  root.querySelectorAll(".news-card").forEach(card => {
    const slug = card.dataset.slug;
    const go = (ev) => {
      const isTime = ev.target?.closest?.("time");
      if (isTime) return; // la fecha no navega
      navigate(`noticias/${slug}`);
    };
    card.addEventListener("click", go);
    card.addEventListener("keydown", (e) => { if (e.key === "Enter") navigate(`noticias/${slug}`); });
  });
}

/* Subpágina Noticias */
function renderNewsDetail(slug) {
  const item = siteData.noticias.find(n => n.slug === slug);
  const fallback = { titulo: "Noticia", fecha: new Date().toISOString(), img: "", resumen: "", detalle: "" };
  const data = item || fallback;

  $("#newsDetailTitle").textContent = data.titulo || "Noticia";
  $("#newsDetailSummary").textContent = data.resumen || "";
  $("#newsDetailBody").innerHTML = data.detalle ? `<p>${data.detalle}</p>` : "<p>Contenido no disponible.</p>";

  const img = $("#newsDetailImg");
  img.src = data.img || "";
  img.alt = data.titulo || "Imagen de la noticia";
  $("#newsDetailDate").textContent = formatDate(data.fecha);
}

/* =========================================================
   QS: navegación (se mantiene)
========================================================= */
function wireQSBadges() {
  $("#qsBadges")?.addEventListener("click", (e) => {
    const btn = e.target.closest(".badge-link");
    if (!btn) return;
    const key = btn.dataset.qs;
    navigate(`qs/${key}`);
  });
}
function renderQSDetail(key) {
  const data = qsPages[key] || { title: "Información", body: "Contenido no disponible.", img: "", caption: "" };
  $("#qsDetailTitle").textContent = data.title;
  $("#qsDetailBody").textContent = data.body;
  const img = $("#qsDetailImg");
  img.src = data.img || "";
  img.alt = data.title || "Imagen";
  $("#qsDetailCaption").textContent = data.caption || "";
}

/* =========================================================
   Contacto: validación, Turnstile y envío a /api/contact
========================================================= */

// Validación de formato de e-mail (cliente)
function looksLikeEmail(email){
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  return re.test(String(email).trim());
}

/* =========================================================
   Boot
========================================================= */
window.addEventListener("DOMContentLoaded", () => {
  const hero = $("#heroCarousel");
  if (hero) {
    createCarousel({
      root: hero,
      slides: siteData.hero,
      autoplay: hero.dataset.autoplay === "true",
      interval: Number(hero.dataset.interval || 6000)
    });
  }
  renderMobileQuickNav();
  renderAcademicCards($("#academicoCards"), siteData.academico);
  renderStudentLinks($("#studentLinks"), siteData.estudiantes);
  renderNews($("#newsGrid"), siteData.noticias);
  wireQSBadges();

  // Botones Volver en páginas de detalle
  $("#newsBack")?.addEventListener("click", () => navigate("noticias"));
  $("#acadBack")?.addEventListener("click", () => navigate("academico"));
  $("#qsBack")?.addEventListener("click", () => navigate("quienes-somos"));
  $("#backHome")?.addEventListener("click", () => navigate("inicio")); // Para /gracias

  // CONTACTO: manejo del formulario
  const form = $("#contactForm");
  if(form){
    const msg = $("#formMsg");
    const emailInput = $("#correoInput");
    const emailHint = $("#emailHint");

    // UX validación en vivo del correo
    emailInput?.addEventListener("input", (e) => {
      const val = e.currentTarget.value;
      emailInput.classList.remove("error");
      if(!val){ emailHint.textContent = ""; return; }
      emailHint.textContent = looksLikeEmail(val) ? "Formato válido ✓" : "Revisa el formato del correo";
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      msg.className = "form-msg";
      msg.textContent = "";

      const data = Object.fromEntries(new FormData(form));
      const nombre = (data.nombre || "").trim();
      const correo = (data.correo || "").trim();
      const mensaje = (data.mensaje || "").trim();

      // Validación básica
      if(!nombre || nombre.length < 2){
        msg.textContent = "Por favor, escribe tu nombre.";
        msg.classList.add("error");
        return;
      }
      if(!looksLikeEmail(correo)){
        msg.textContent = "Por favor, ingresa un correo válido.";
        msg.classList.add("error");
        emailInput?.classList.add("error");
        emailHint.textContent = "Ejemplo: nombre@dominio.cl";
        return;
      }
      if(!mensaje || mensaje.length < 10){
        msg.textContent = "El mensaje es muy corto.";
        msg.classList.add("error");
        return;
      }

      // Token Turnstile (el widget inserta un input hidden con este name)
      const captchaToken = form.querySelector('input[name="cf-turnstile-response"]')?.value;
      if(!captchaToken){
        msg.textContent = "Por favor, completa el CAPTCHA.";
        msg.classList.add("error");
        return;
      }

      msg.textContent = "Enviando…";

      try{
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type":"application/json" },
          body: JSON.stringify({ nombre, correo, mensaje, token: captchaToken })
        });
        const json = await res.json();

        if(!res.ok){
          msg.textContent = json?.error || "No se pudo enviar. Intenta nuevamente.";
          msg.classList.add("error");
          if(window.turnstile?.reset) turnstile.reset(); // reset captcha
          return;
        }

        // Éxito → navegar a /gracias
        form.reset();
        if(window.turnstile?.reset) turnstile.reset();
        navigate("gracias");
      }catch(err){
        console.error(err);
        msg.textContent = "Ocurrió un error inesperado.";
        msg.classList.add("error");
        if(window.turnstile?.reset) turnstile.reset();
      }
    });
  }

  // 🔹 Intento de montaje al final del boot
  setTimeout(mountTurnstileIfVisible, 0);
});

// Re-render accesos rápidos al cambiar tamaño
function renderMobileQuickNav() {
  const wrap = $(".mobile-quick-nav");
  if (!wrap) return;
  const isMobile = window.matchMedia("(max-width: 720px)").matches;
  if (!isMobile) { wrap.innerHTML = ""; return; }
  wrap.innerHTML = `
    <div class="quick-nav">
      <button class="quick-nav__btn" data-go="inicio">Inicio</button>
      <button class="quick-nav__btn" data-go="quienes-somos">Quiénes Somos</button>
      <button class="quick-nav__btn" data-go="academico">Académico</button>
      <button class="quick-nav__btn" data-go="estudiantes">Estudiantes</button>
      <button class="quick-nav__btn" data-go="noticias">Noticias</button>
      <button class="quick-nav__btn" data-go="contacto">Contacto</button>
    </div>
  `;
  wrap.querySelectorAll(".quick-nav__btn").forEach(b => b.addEventListener("click", () => navigate(b.dataset.go)));
}
window.addEventListener("resize", renderMobileQuickNav);
