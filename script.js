/* =====================================================
   Omar Shawqi — Portfolio  |  script.js
   ===================================================== */

/* ── TYPING EFFECT ── */
const text = "Omar Shawqi";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 150);
    }
}

window.onload = () => {
    if (document.getElementById("typing-text")) {
        typeEffect();
    }

    /* ── BACKGROUND MULTI-ORB INJECTION ── */
    injectBgOrbs();
};

/* ── PAGE TRANSITION ── */
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (href && !href.startsWith("#") && !href.startsWith("http")) {
            e.preventDefault();
            document.body.classList.add("fade-out");
            setTimeout(() => { window.location.href = href; }, 500);
        }
    });
});

/* ── SMOOTH SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({ top: target.offsetTop - 40, behavior: "smooth" });
        }
    });
});

/* ── INJECT EXTRA BACKGROUND ORBS ──
   Adds multiple floating radial-gradient orbs into .bg-animation
   so all pages get a richer, more dynamic background.
   Each orb uses a CSS animation defined in style.css.
---------------------------------------------------- */
function injectBgOrbs() {
    const bg = document.querySelector(".bg-animation");
    if (!bg) return;

    const orbs = [
        /* Bottom-left blue-cyan large orb */
        {
            w: 650, h: 650,
            color: "rgba(14, 165, 233, 0.16)",
            blur: 100,
            left: "-12%", top: "45%",
            anim: "orbFloat2", dur: "18s"
        },
        /* Center-bottom indigo orb */
        {
            w: 500, h: 500,
            color: "rgba(99, 102, 241, 0.11)",
            blur: 85,
            left: "28%", top: "62%",
            anim: "orbFloat3", dur: "23s"
        },
        /* Center-top subtle cyan orb */
        {
            w: 420, h: 420,
            color: "rgba(56, 189, 248, 0.09)",
            blur: 95,
            left: "55%", top: "15%",
            anim: "orbFloat1", dur: "15s"
        },
        /* Right-bottom teal accent */
        {
            w: 320, h: 320,
            color: "rgba(20, 184, 166, 0.08)",
            blur: 70,
            left: "78%", top: "68%",
            anim: "orbFloat2", dur: "21s"
        }
    ];

    orbs.forEach(o => {
        const el = document.createElement("div");
        el.style.cssText = `
            position: absolute;
            width: ${o.w}px;
            height: ${o.h}px;
            background: radial-gradient(circle, ${o.color} 0%, transparent 68%);
            filter: blur(${o.blur}px);
            left: ${o.left};
            top: ${o.top};
            animation: ${o.anim} ${o.dur} ease-in-out infinite alternate;
            pointer-events: none;
            will-change: transform;
        `;
        bg.appendChild(el);
    });
}
