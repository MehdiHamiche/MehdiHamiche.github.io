import"./hoisted.CvN_TNCx.js";function s(e,o){e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("visible"),o.unobserve(t.target))})}const r={threshold:.5},i=new IntersectionObserver(s,r);document.querySelectorAll(".timeline-item").forEach(e=>{i.observe(e)});
