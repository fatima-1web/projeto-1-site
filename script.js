/* ======o mundo em Detalhes ======*/

/* ======DADOS DOS PAÍSES ====*/

const countries = [

    {
        name: "Brasil",
        flag: "🇧🇷",
        lat: -14, lng: -51, /*coordenadas do globo*/
        cont: "americas", /* continentes (para o filtro)*/
        desc: " O gigante da America do Sul, com praias, florestas e culturas vibrantes",
        tags: [" Natureza", "Praias", "Cultura"],
        icon: "🌴",
        links: [
            { l: "Visit Brasil", u: "https://www.visitbrasil.com" },
            { l: "Amazonia", u: "https://www.amazon.com.br" },
            { l: "Rio de Janeiro", u: "https://www.viajantes.com.br" }
        ]
    },
    {
        name: "frança",
        flag: "🇫🇷",
        lat: 46, lng: 2, /*coordenadas do globo*/
        cont: "europa", /* continentes (para o filtro)*/
        desc: " O país do romantismo , da gastronomia e da  arte sem igual.",
        tags: [" Arte", "Gastronomia", "Romance"],
        icon: "🗼",
        links: [
            { l: "Paris turismo", u: "https://www.paransinfo.com" },
            { l: "Costa Azul", u: "https://www.cotedazur.eu" },
            { l: "Rio de Janeiro", u: "https://www.valdeloide.org" }
        ]

    },
    {
        name: "Japão",
        flag: "🇯🇵",
        lat: 36, lng: 138, /*coordenadas do globo*/
        cont: "asia", /* continentes (para o filtro)*/
        desc: " Tradição milenar e tecnologia de ponta em perfeitas harmonia.",
        tags: [" Tradição", "Tecnologia ", "Natureza"],
        icon: "⛩️",
        links: [
            { l: "kyoto", u: "https://kyoto.travel" },
            { l: "Kyoto", u: "https://www.gotokyo.org" },
            { l: "Tokyo", u: "https://www.fuisan.or.jp" }
        ]
    },
    {
        name: "Italia ",
        flag: "🇮🇹",
        lat: 41, lng: 12,
        cont: "europa",
        desc: " Artes renascentistas, gastronomia  inigualável e história vivaz e vibrante  .",
        tags: [" Arte", "Gastronomia", "Historia"],
        icon: "🏛️",
        links: [
            { l: "Roma", u: "https://www.turismoroma.it" },
            { l: "Veneza", u: "https://www.veneziaunica.it" },
            { l: "florença", u: "https://www.firenzeturismo.it" }
        ]
    },
    {
        name: "Peru",
        flag: "🇵🇪",
        lat: -9, lng: -75,
        cont: "americas",
        desc: " Inca, Amazânia e uma gastronomia reconhecida mundialmente.",
        tags: [" Histórias", "Natureza", " Gastronomia"],
        icon: "🦙",
        links: [
            { l: "Machu Picchu", u: "https://www.peru.travel" },
            { l: "Lago Titicaca", u: "https://www.peru.travel" },
            { l: "Lima", u: "https://www.peru.travel" }
        ]

    },
    {
        name: "Marrocos",
        flag: "🇲🇦",
        lat: 31, lng: -7,
        cont: "africa",
        desc: " Cores vibrantes, o deserto do Saara e medinas encantadoras.",
        tags: [" Cultura", "Deserto", "Arquitetura"],
        icon: "🏜️",
        links: [
            { l: "Marrakech", u: "https://www.visitmorocco.com" },
            { l: "saara", u: "https://www.visitmorocco.com" },
            { l: "Fes", u: "https://www.visitmorocco.com" }
        ]
    },
    {
        name: "Austrália",
        flag: "🇦🇺",
        lat: -25, lng: 133,
        cont: "oceania",
        desc: " Natureza selvagem, praias paradisiácas e fauna única.",
        tags: [" Natureza", "Praias", "Aventura"],
        icon: "🦘",
        links: [
            { l: "Sydney", u: "https://www.sydney.com" },
            { l: "Grande Barreira ", u: "https://www.queensland.com" },
            { l: "Uluru", u: "https://www.parksaustralia.gov.au" }
        ]
    },
    {
        name: "Egito",
        flag: "🇪🇬",
        lat: 26, lng: 30,
        cont: "africa",
        desc: " Civilizaçao milenar, pirâmides  e o majestoso Rio Nilo .",
        tags: [" História", "Arqueologia ", "Cultura"],
        icon: "🏛️",
        links: [
            { l: "Pirâmides", u: "https://www.egypt.travel" },
            { l: "Luxor", u: "https://www.egypt.travel" },
            { l: " Mar Vermelho ", u: "https://www.egypt.travel" }
        ]

    },

    {
        name: "India ",
        flag: "🇮🇳",
        lat: 20, lng: 78,
        cont: "asia",
        desc: " Cores, espaciarias , monumnetos eternos e espiritualidade",
        tags: [" Cultura", "Esperitualidade", "Gastronomia"],
        icon: "🕍",
        links: [
            { l: "Taj Mahal", u: "https://www.incredibleindia.com" },
            { l: "Goa ", u: "https://www.goatourism.gov.in" },
            { l: "Uluru", u: "https://www.tourism.rajasthan.gov.in" }
        ]
    },
    {
        name: "Portugual",
        flag: "🇵🇹",
        lat: 39, lng: -8,
        cont: "europa",
        desc: " Saudade, Pastéis  e uma costa atlâtica de encher os olhos.",
        tags: [" Cultura", "Gastronomia", "Praias"],
        icon: "🐟",
        links: [
            { l: "Lisboa", u: "https://www.visitlisboa.com" },
            { l: "Porto", u: "https://www.visitporto.travel" },
            { l: "Algave", u: "https://www.visitaalgave.pt" }
        ]
    },
    {
        name: "México",
        flag: "🇲🇽",
        lat: 23, lng: 102,
        cont: "americas",
        desc: " Civilizações antigas, Praias caribenhas , e  culinarias vibrantes.",
        tags: [" História", "Praias ", "Gastronomia"],
        icon: "🌮",
        links: [
            { l: "Cidade do Mexico", u: "https://www.mexico.com" },
            { l: "Cancún", u: "https://www.cancun.com" },
            { l: "Oaxaca", u: "https://www.oaxaca.travel" }
        ]
    },
    {
        name: "Tailândia",
        flag: "🇹🇭",
        lat: 15, lng: 101,
        cont: "asia",
        desc: " Templo dourados, praias tropicais e culinárias de rua inesqueciveís.",
        tags: [" Templos", "Praias", "Gastronomia"],
        icon: "🏯",
        links: [
            { l: "Bangkok", u: "https://www.tourismthailand.org" },
            { l: "Chiang Mai", u: "https://www.turismothailand.org" },
            { l: "Phi Phi", u: "https://www.turismothailand.org" }
        ]
    },
];

// FUNÇÃO DO GLOBO//
//==== Criar um globo  ====//

function makeGlobe(canvasId, R, onCountryClick) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;

    /* Estado de rotação e arrasto*/
    let rotY = 0, rotX = 0.25;
    let drag = false;
    let lastX, lastY;
    let velX = 0, velY = 0;

    /* Converte latitude / longitude em coordenadas 3D*/
    function latLng3D(lat, lng) {
        const phi = (90 - lat) * Math.PI / 180;
        const theta = (lng + 180) * Math.PI / 180;
        return {
            x: -Math.sin(phi) * Math.cos(theta),
            y: Math.cos(phi),
            z: Math.sin(phi) * Math.sin(theta)
        };
    }
    /* proteja coordenadas 3D em pixel (2D na tela*/
    function project(v) {
        const cx = Math.cos(rotX), sx = Math.sin(rotX);
        const cy = Math.cos(rotY), sy = Math.sin(rotY);
        const y1 = v.y * cx - v.z * sx;
        const z1 = v.y * sx + v.z * cx;
        const x2 = v.x * cy + z1 * sy;
        const z2 = -v.x * sy + z1 * cy;
        return {
            sx: W / 2 + x2 * R,
            sy: H / 2 - y1 * R,
            depth: z2
        };
    }

    /* Desenha o globo completo */

    function draw() {
        ctx.clearRect(0, 0, W, H);
        /*Fundo do globo - gradiente verde*/
        const bg = ctx.createRadialGradient(W / 2 - R * 0.3, H / 2 - R * 0.3, R * 0.05, W / 2, H / 2, R);
        bg.addColorStop(0, "#4a7a4c");
        bg.addColorStop(1, "#1e3e20");
        ctx.beginPath();
        ctx.arc(W / 2, H / 2, R, 0, Math.PI * 2);
        ctx.fillStyle = bg;
        ctx.fill();

        /* Grade de meridianos e paralelos */
        ctx.strokeStyle = 'rgba(245, 240, 232, 0.12)';
        ctx.lineWidth = 0.6;

        /* paralelos (Linhas horinzontais )*/

        for (let lat = -75; lat <= 75; lat += 30) {
            ctx.beginPath();
            let first = true;
            for (let lng = -180; lng <= 180; lng += 4) {
        const v = latLng3D(lat, lng);
        const p = project(v);
                if (p.depth > 0) {
                    first ? ctx.moveTo(p.sx, p.sy) : ctx.lineTo(p.sx, p.sy);
                    first = false;
                } else {
                    first = true;

                }
            }
            ctx.stroke();
        }

        /* meridianos (linhas verticais)*/
        for (let lng = -150; lng <= 180; lng += 30) {
            ctx.beginPath();
            let first = true;
            for (let lat = -85; lat <= 85; lat += 4) {
                const v = latLng3D(lat, lng);
                const p = project(v);
                if (p.depth > 0) {
                    first ? ctx.moveTo(p.sx, p.sy) : ctx.lineTo(p.sx, p.sy);
                    first = false;
                } else {
                    first = true;
                }
            }
            ctx.stroke();
        }
        /* pontos dos paises */
        countries.forEach(o => {
const v = latLng3D(o.lat, o.lng);
const p = project(v);
if (p.depth > 0) {
    const brightness = Math.max(0,p.depth);

    /* circulo terracota*/
    ctx.beginPath();
    ctx.arc(p.sx, p.sy,5,0,  Math.PI * 2);
    ctx.fillStyle = `rgba(184, 92, 56, ${0.5+brightness*0.5})`;
    ctx.fill();
    
   /* Anel ao redor */
   ctx.beginPath();
   ctx.arc(p.sx, p.sy, 9,0, Math.PI*2);
   ctx.strokeStyle = `rgba(245, 240, 232, ${0.15+brightness*0.3})`;
   ctx.lineWidth = 1;
   ctx.stroke();

   /* Nome do paìs (só no globo grande )*/
   if (R > 100&& brightness>0.3) {
       ctx.font = `${Math.round(R * 0.055)}px Inter, sans-serif`;
       ctx.fillStyle = `rgba(245, 240, 232, ${0.6+brightness*0.4})`;
       ctx.textAlign = "center";
       ctx.fillText(o.name, p.sx,p.sy-12);
}
        
        }
    });
        /* Brilho do Globo */
        const shine=ctx.createRadialGradient(W/2-R*0.35, H/2-R*0.35, R*0.05, W/2, H/2, R);
        shine.addColorStop(0, "rgba(255,255,255,0.08)");
        shine.addColorStop(0.5, 'transparent');
        ctx.beginPath();
        ctx.arc(W/2, H/2, R, 0, Math.PI*2);
        ctx.fillStyle = shine;
        ctx.fill();
}
/*  Eventos de mouses (arrasto)*/
canvas.addEventListener("mousedown", e => {
    drag = true;
    lastX = e.clientX;
    lastY = e.clientY;
    velX = velY=0;
});
window.addEventListener("mouseup", () => { drag = false; });
window.addEventListener("mousemove", e => {
    if (!drag) return; 
    velX = (e.clientY - lastY)*0.005;
    velY = (e.clientX - lastX)*0.005;
    rotX += velX;
    rotY += velY;
    lastX = e.clientX;
    lastY = e.clientY;
    draw();

});
/*      Evento de cliques nos países */
canvas.addEventListener("click", e => {
    if (!onCountryClick) return;
    const rect=canvas.getBoundingClientRect();
    const mx=e.clientX-rect.left;
    const my=e.clientY-rect.top;
    let best=null,minDist=18;
    countries.forEach(c => {
        const v= latLng3D(c.lat, c.lng);
        const p = project(v);
        if (p.depth > 0) {
            const dist = Math.hypot(p.sx - mx ,p.sy-my);
            if (dist < minDist) {
                minDist = dist;
                best = c;
            }
        }
    });
    if (best) onCountryClick(best);
});
/* Eventos de toques (mobile0)*/
canvas.addEventListener("touchstart", e => {
    drag = true;
    lastX = e.touches[0].clientX;
    lastY = e.touches[0].clientY;
    velX = velY =0;
}, {passive: true});
    canvas.addEventListener("touchend", () => {drag = false;});
    canvas.addEventListener("touchmove", e  => {
        if (!drag) return;
        velX = (e.touches[0].clientY - lastY)*0.005;
        velY = (e.touches[0].clientX - lastX)*0.005;
        rotX += velX;
        rotY += velY;
        lastX = e.touches[0].clientX;
        lastY = e.touches[0].clientY;
        draw(); 
    }, {passive: true});
     /* Logo de animação (gira sozinho) */
     (function loop() {
         velX *= 0.95;
         velY *= 0.95;
         if(! drag){
         rotX += velX;
         rotY += velY;
         }
         rotY += 0.002;/* rotaçãpo automática*/
         draw();
         requestAnimationFrame(loop);
        
     })();
    }
        
/* Inicialização dos dois globos */

makeGlobe('hero-globe', 168, null);
/* Globo principaal com interação */
makeGlobe('main-globe', 168,function (country) {
    /* Atualiza o painel lateral ao clicar*/
    document.getElementById("ci-flag").textContent = country.flag;
    document.getElementById("ci-name").textContent= country.name;
    document.getElementById("ci-desc").textContent = country.desc;
    document.getElementById("ci-links").innerHTML = country.links
    .map(l => `<a href="${l.u}" target="_blank" rel="noopener">🔗 ${l.l}</a>`)
   .join('');
        });
    
/* Renderizar os cards */


    function renderDests(list) {
    document.getElementById('dest-grid').innerHTML = list.map(c => `
        <div class="dest-card">
            <div class="dest-card-icon">${c.icon}</div>
            <div class="dest-card-body">
                <div class="dest-card-flag">${c.flag}</div>
                <div class="dest-card-name">${c.name}</div>
                <div class="dest-card-desc">${c.desc}</div>
                <div class="dest-card-tags">
                    ${c.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
                <div style="margin-top:1rem;display:flex;flex-direction:column;gap:5px">
                    ${c.links.map(l => `
                        <a href="${l.u}" target="_blank" rel="noopener"
                        style="font-size:.78rem;color:#5a8c5c;text-decoration:none;">
                        → ${l.l}</a>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function filterDest(cont) {
    document.getElementById('destinos')
        .scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
        const filtrados = cont === 'all' ? countries : countries.filter(c => c.cont === cont);
        renderDests(filtrados);
    }, 400);
}
/* ============================================
   PARTE 5 — NEWSLETTER
   ============================================ */

function nlSubscribe() {
    const email = document.getElementById('nl-email').value.trim();
    const msg = document.getElementById('nl-msg');

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailValido) {
        msg.style.color = '#b85c38';
        msg.textContent = 'Por favor, insira um e-mail válido.';
        return;
    }

    msg.style.color = '#2c4a2e';
    msg.textContent = '✓ Perfeito! Você será o primeiro a saber das novidades.';
    document.getElementById('nl-email').value = '';
}

document.getElementById('nl-email').addEventListener('keydown', e => {
    if (e.key === 'Enter') nlSubscribe();
});
    
/* ============================================
   PARTE 6 — MENU
   ============================================ */

window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

function toggleMenu() {
    document.getElementById('nav').classList.toggle('open');
}


   














