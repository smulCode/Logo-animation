const button = document.querySelector(".cta-btn")
const spans = document.querySelectorAll("span")

const tl = gsap
  .timeline({ defaults: { duration: 0.8, ease: "elastic.out(1.2, 1)" } })

  .fromTo(spans, {opacity:0 , scale:1}, { opacity:1 ,scale:1.3, ease:"bounce.in"})
  
  .fromTo(".cta1", { x: 0, opacity: 0 }, { x: "100%", opacity: 1 }, "<20%")
  .fromTo(".cta3", { x: 0, opacity: 0 }, { x: "-100%", opacity: 1 }, "<20%")
  .fromTo(".cta2", { y: "100%", opacity: 0 }, { y: 0, opacity: 1 }, "<20%")
  .fromTo(".cta4", { x: 0, opacity: 0 }, { x: "100%",y:"100%", opacity: 1 }, "<20%")
  .fromTo(".cta6", { x: "-100%", opacity: 0 }, { y:"100%" , opacity: 1 }, "<20%")
  .fromTo(".cta5", { y: "100%", opacity: 0 }, { y: 0, opacity: 1 }, "<20%")

.fromTo(spans, {opacity:1 , scale:1.3}, { opacity:1 ,scale:1.5, ease:"bounce.in"})

  .fromTo(".cta1", { x: "100%", opacity: 0 }, { y: "100%", opacity: 1 }, )
  .fromTo(".cta6", { y: "100%", opacity: 0 }, { y:0 , opacity: 1 }, "<20%")
  .fromTo(".cta3", { x: "-100%", opacity: 0 }, { y: "100%", opacity: 1 }, "<20%")
  .fromTo(".cta4", { x: "100%",y:"100%", opacity: 0 }, { x: "100%",y:0, opacity: 1 }, "<20%")
  .fromTo(".cta2", { y: 0, opacity: 0 }, { y: "100%", opacity: 1 }, "<20%")

  .fromTo(spans, {opacity:1 , scale:1.5}, { opacity:1 ,scale:2.5, ease: "elastic.out(1.5, 0.1)"},"<20%")
  .to(spans, {color:"transparent" ,ease:"power3"})
  .to("body", {backgroundColor:"transparent"},)

  .fromTo(".cta-btn", { y: 20, opacity: 0 }, { y: "100%", opacity: 1 }, "<");



button.onclick = () =>{
  tl.reverse()
}