
// Editable plan config: change amounts, limits and flags here once approved.
var PLANS=[
{n:"Starter",p:5000,f:["Core school management","QR attendance","Student and fee records"]},
{n:"Growth",p:10000,f:["Everything in Starter","Parent notifications","Exams and results"]},
{n:"Professional",p:15000,f:["Everything in Growth","QR gatekeeper and tracking","Analytics dashboard"]},
{n:"Premium AI",p:20000,f:["Everything in Professional","Access to supported AI features and integrations","AI usage billed separately"]}
];
var el=document.getElementById("plans");
PLANS.forEach(function(x){
var d=document.createElement("article");d.className="card pl";
var ul=x.f.map(function(t){return "<li>"+t+"</li>"}).join("");
d.innerHTML="<h3>"+x.n+"</h3><div class=price>PKR "+x.p.toLocaleString("en-US")+"<small style='font-size:.9rem;color:var(--mu);font-weight:400'>/month</small></div><ul>"+ul+"</ul><a class='btn' href='#demo'>Ask about "+x.n+"</a>";
el.appendChild(d)});
// QR illustration
var q=document.getElementById("qr"),s=7;
for(var i=0;i<81;i++){var r=Math.floor(i/9),c=i%9,corner=(r<3&&c<3)||(r<3&&c>5)||(r>5&&c<3);
var on=corner?!(r%3==1&&c%3==1&&false):((i*s+r*3)%5<2);var e=document.createElement("i");if(!on)e.className="o";q.appendChild(e)}
// smooth scroll (works even when the OS has animations turned off)
document.addEventListener("click",function(e){var a=e.target.closest("a[href^='#']");if(!a||a.hasAttribute("data-login"))return;var h=a.getAttribute("href");if(h.length<2)return;var t=document.getElementById(h.slice(1));if(!t)return;e.preventDefault();
var y0=window.scrollY,y1=t.getBoundingClientRect().top+y0-72,d=y1-y0,t0=null,dur=Math.min(1100,500+Math.abs(d)/4);
function ease(k){return k<.5?4*k*k*k:1-Math.pow(-2*k+2,3)/2}
function step(ts){if(!t0)t0=ts;var k=Math.min((ts-t0)/dur,1);window.scrollTo(0,y0+d*ease(k));if(k<1)requestAnimationFrame(step)}
requestAnimationFrame(step);history.replaceState(null,"",h)});
// icons
var IC={chart:"M4 20V10M10 20V4M16 20v-8M22 20H2",bot:"M12 3v3M7 8h10a3 3 0 013 3v5a3 3 0 01-3 3H7a3 3 0 01-3-3v-5a3 3 0 013-3zM9 13h.01M15 13h.01M9 17h6",qr:"M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h3v3h-3zM20 14v7M14 20h3",cash:"M3 6h18v12H3zM12 9a3 3 0 100 6 3 3 0 000-6z",cap:"M2 9l10-5 10 5-10 5zM6 11.5V16c3 2.5 9 2.5 12 0v-4.5",users:"M9 11a4 4 0 100-8 4 4 0 000 8zM2 21v-1a6 6 0 0112 0v1M17 11a3 3 0 100-6M22 21v-1a5 5 0 00-4-5",globe:"M12 21a9 9 0 100-18 9 9 0 000 18zM3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18",user:"M12 12a4 4 0 100-8 4 4 0 000 8zM4 21a8 8 0 0116 0",brief:"M3 8h18v12H3zM8 8V5h8v3",book:"M2 5c4-1 7 0 10 2 3-2 6-3 10-2v14c-4-1-7 0-10 2-3-2-6-3-10-2z",arrow:"M5 12h14M13 6l6 6-6 6",bolt:"M13 2L4 14h7l-1 8 9-12h-7z",play:"M12 21a9 9 0 100-18 9 9 0 000 18zM10 8.5l6 3.5-6 3.5z"};
document.querySelectorAll("[data-i]").forEach(function(e){e.innerHTML='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="'+IC[e.getAttribute("data-i")]+'"/></svg>'});
// solutions dropdown
(function(){var d=document.querySelector(".dd"),b=d.querySelector(".dd-b");b.onclick=function(){b.setAttribute("aria-expanded",d.classList.toggle("open"))};document.addEventListener("click",function(e){if(!e.target.closest(".dd")||e.target.closest(".sm a")){d.classList.remove("open");b.setAttribute("aria-expanded",false)}})})();
// theme toggle
var rt=document.documentElement,tg=document.getElementById("tg");
function sync(){var l=rt.getAttribute("data-theme")=="light";tg.setAttribute("aria-label",l?"Switch to dark theme":"Switch to light theme");document.querySelector('meta[name=theme-color]').content=l?"#f4f2ff":"#050507"}
tg.onclick=function(){var n=rt.getAttribute("data-theme")=="light"?"dark":"light";rt.setAttribute("data-theme",n);try{localStorage.setItem("ev-theme",n)}catch(e){}sync()};sync();
// live background: drifting connected particles that react to the pointer
(function(){var c=document.getElementById("bg"),x=c.getContext("2d"),W,H,P=[],m={x:-999,y:-999},dpr=Math.min(window.devicePixelRatio||1,2);
function rs(){W=innerWidth;H=innerHeight;c.width=W*dpr;c.height=H*dpr;x.setTransform(dpr,0,0,dpr,0,0);var n=Math.round(Math.min(90,W*H/15000));P=[];for(var i=0;i<n;i++)P.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,r:Math.random()*1.8+.9,h:Math.floor(Math.random()*3)})}
addEventListener("resize",rs);addEventListener("pointermove",function(e){m.x=e.clientX;m.y=e.clientY});
function f(){var l=rt.getAttribute("data-theme")=="light",C=l?["147,51,234","37,99,235","219,39,119"]:["216,120,255","96,165,250","34,211,238"],i,j,a,b,d,col;x.clearRect(0,0,W,H);
for(i=0;i<P.length;i++){a=P[i];a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>W)a.vx*=-1;if(a.y<0||a.y>H)a.vy*=-1;
d=Math.hypot(a.x-m.x,a.y-m.y)||1;if(d<150){a.x+=(a.x-m.x)/d*1.4;a.y+=(a.y-m.y)/d*1.4}
col=C[a.h];x.fillStyle="rgba("+col+","+(l?.7:.9)+")";x.beginPath();x.arc(a.x,a.y,a.r,0,6.283);x.fill();
for(j=i+1;j<P.length;j++){b=P[j];d=Math.hypot(a.x-b.x,a.y-b.y);if(d<135){x.strokeStyle="rgba("+col+","+(.3*(1-d/135))+")";x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}}}
requestAnimationFrame(f)}
rs();f()})();
// mobile nav
var mb=document.getElementById("mb"),nv=document.getElementById("nav");
mb.onclick=function(){var o=nv.classList.toggle("open");mb.setAttribute("aria-expanded",o)};
nv.addEventListener("click",function(e){if(e.target.closest("a"))nv.classList.remove("open"),mb.setAttribute("aria-expanded",false)});
// login dialog
var dl=document.getElementById("dl");
document.querySelector("[data-login]").onclick=function(e){e.preventDefault();nv.classList.remove("open");dl.showModal()};
document.getElementById("dc").onclick=function(){dl.close()};
// demo form validation
document.getElementById("demoForm").addEventListener("submit",function(e){
e.preventDefault();var f=e.target,ok=true;
function bad(i,m){i.setAttribute("aria-invalid",true);i.parentNode.querySelector(".er").textContent=m;ok=false}
["name","school","phone","size"].forEach(function(k){var i=f.elements[k];i.removeAttribute("aria-invalid");i.parentNode.querySelector(".er").textContent="";
var v=i.value.trim();
if(!v)return bad(i,"This field is required.");
if(k=="phone"&&!/^(\+92|0092|0)?3\d{9}$/.test(v.replace(/[\s-]/g,"")))bad(i,"Enter a valid Pakistani mobile number, for example 03XXXXXXXXX.");
if((k=="name"||k=="school")&&v.length<2)bad(i,"Enter at least 2 characters.")});
if(!ok)return;
var m="Hello Educate Verse, I would like to book a demo.\nName: "+f.name.value.trim()+"\nSchool: "+f.school.value.trim()+"\nPhone: "+f.phone.value.trim()+"\nStudents: "+f.size.value;
window.open("https://wa.me/923232625973?text="+encodeURIComponent(m),"_blank","noopener")});