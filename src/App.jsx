
import { useState, useMemo } from "react";
const PHONE="918438695455";

/* ---------- DATA (unga real menu inga maathunga) ---------- */
const MENU=[
 {id:1,name:"Unlimited Meals",desc:"Rice, sambar, rasam, 2 poriyal, kootu, curd, appalam",price:100,cat:"Meals",emoji:"🍽️",c:["#2f6b3a","#8bc34a"],img:"/images/meals.jpg",tag:"EVERYDAY SPECIAL"},
 {id:2,name:"Fish Fry Meals",desc:"Full meals with fish fry & fish kuzhambu",price:160,cat:"Meals",emoji:"🐟",c:["#0b7285","#3bc9db"],img:"/images/fish-meals.jpg",tag:"FROM THE SEA"},
 {id:3,name:"Chicken Biryani",desc:"Seeraga samba, juicy chicken, raita & brinjal gravy",price:150,cat:"Biryani",emoji:"🍗",c:["#c92a2a","#ff922b"],img:"/images/chicken-biryani.jpg",tag:"HOUSE SPECIAL"},
 {id:4,name:"Mutton Biryani",desc:"Slow cooked mutton with aromatic masala",price:220,cat:"Biryani",emoji:"🍛",c:["#862e9c","#f06595"],img:"/images/mutton-biryani.jpg",tag:"SIGNATURE"},
 {id:5,name:"Parotta & Salna",desc:"Soft layered parotta with hot salna (2 pcs)",price:50,cat:"Tiffin",emoji:"🥞",c:["#e8590c","#fcc419"],img:"/images/parotta.jpg",tag:"FRESH & HOT"},
 {id:6,name:"Idli · Dosa · Pongal",desc:"Morning tiffin with chutney & sambar",price:30,cat:"Tiffin",emoji:"🥘",c:["#d9480f","#ffd43b"],img:"/images/tiffin.jpg",tag:"MORNING"},
 {id:7,name:"Filter Coffee",desc:"Fresh, strong, frothy kaapi",price:15,cat:"Drinks",emoji:"☕",c:["#5f3dc4","#a5d8ff"],img:"/images/coffee.jpg",tag:"FILTER KAAPI"},
 {id:8,name:"Tea",desc:"Hot masala tea",price:12,cat:"Drinks",emoji:"🍵",c:["#2b8a3e","#b2f2bb"],img:"/images/tea.jpg",tag:"MASALA CHAI"},
];
const CATS=["All","Meals","Biryani","Tiffin","Drinks"];
const REVIEWS=[
 {n:"Karthik",t:"Meals semma taste, price romba reasonable. Daily lunch inga dhaan!"},
 {n:"Priya",t:"Family-oda poitom. Clean-a irukku, biryani super."},
 {n:"Suresh",t:"Parotta salna combo vera level. Service fast."},
];

/* ---------- COMPONENTS ---------- */
const Logo=({s=48})=>(
 <svg width={s} height={s} viewBox="0 0 64 64" aria-label="Eswaran logo">
  <circle cx="32" cy="32" r="30" fill="#d9480f"/><circle cx="32" cy="32" r="25" fill="none" stroke="#ffe066" strokeWidth="2"/>
  <path d="M14 38h36a18 18 0 0 0-36 0z" fill="#ffe066"/><rect x="12" y="38" width="40" height="3.5" rx="1.7" fill="#ffe066"/>
  <circle cx="32" cy="18.5" r="2.6" fill="#ffe066"/><path d="M20 46h24" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
  <path d="M25 50h14" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity=".7"/>
 </svg>);

const Navbar=()=>{
 const [open,setOpen]=useState(false);
 const links=[["Menu","#menu"],["Why Us","#why"],["Reviews","#reviews"],["Contact","#contact"]];
 return(
 <nav className="sticky top-0 z-40 backdrop-blur bg-amber-50/85 dark:bg-stone-900/85 border-b border-orange-100 dark:border-stone-800">
  <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
   <a href="#" className="flex items-center gap-2.5">
    <Logo s={42}/>
    <span className="leading-none"><b className="block tracking-[2px] text-orange-700 dark:text-orange-400 text-lg">ESWARAN</b><small className="text-[10px] tracking-[4px] font-semibold text-stone-500">RESTAURANT</small></span>
   </a>
   <div className="hidden md:flex items-center gap-7 text-sm font-semibold">
    {links.map(([l,h])=><a key={l} href={h} className="hover:text-orange-600">{l}</a>)}
    <a href={"tel:+"+PHONE} className="bg-orange-600 text-white px-4 py-2 rounded-full">📞 Call Now</a>
   </div>
   <button onClick={()=>setOpen(!open)} className="md:hidden text-2xl w-10 h-10" aria-label="menu">{open?"✕":"☰"}</button>
  </div>
  {open&&<div className="md:hidden px-4 pb-4 flex flex-col gap-3 font-semibold">
   {links.map(([l,h])=><a key={l} href={h} onClick={()=>setOpen(false)}>{l}</a>)}
   <a href={"tel:+"+PHONE} className="bg-orange-600 text-white text-center py-2.5 rounded-full">📞 Call Now</a>
  </div>}
 </nav>);
};

const HERO_IMG="/images/hero.jpg";
const Hero=()=>(
 <header className="relative overflow-hidden text-white flex items-center justify-center text-center px-5 py-16" style={{minHeight:"calc(100svh - 4rem)",background:HERO_IMG?`linear-gradient(rgba(60,15,5,.65),rgba(60,15,5,.8)),url(${HERO_IMG}) center/cover`:"linear-gradient(135deg,#7a1f0b 0%,#d9480f 55%,#f59f00 100%)"}}>
  <div className="absolute -top-40 -left-32 w-[28rem] h-[28rem] rounded-full bg-white/10"/>
  <div className="absolute -bottom-40 -right-24 w-[26rem] h-[26rem] rounded-full bg-white/10"/>
  <span className="fl absolute top-[12%] right-[8%] text-4xl sm:text-6xl">🍛</span>
  <span className="fl absolute bottom-[22%] left-[5%] text-4xl sm:text-6xl" style={{animationDelay:"1s"}}>🍗</span>
  <span className="fl absolute top-[48%] right-[3%] text-4xl hidden sm:block" style={{animationDelay:"2s"}}>🌶️</span>
  <span className="fl absolute top-[20%] left-[4%] text-4xl hidden sm:block" style={{animationDelay:"3s"}}>🥘</span>
  <div className="relative max-w-3xl w-full">
   <span className="inline-block bg-white/20 border border-white/40 rounded-full px-4 py-1 text-xs sm:text-sm font-semibold">⭐ Family Restaurant • Veg & Non-Veg</span>
   <p className="tracking-[8px] text-xs sm:text-sm mt-8 opacity-90">WELCOME TO</p>
   <h1 className="text-6xl sm:text-8xl font-extrabold leading-none my-3 drop-shadow-lg">Eswaran <span className="text-yellow-300">Restaurant</span></h1>
   <p className="max-w-xl mx-auto opacity-95 mb-8 mt-4 text-base sm:text-lg">Veetu saapadu feel, hotel taste! Fresh, hygienic, budget-friendly meals – biryani, parotta, tiffin & unlimited meals daily.</p>
   <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
    <a href="#menu" className="bg-yellow-300 text-red-950 font-semibold px-8 py-3.5 rounded-xl w-full max-w-[260px] sm:w-auto">🍽️ Order Now</a>
    <a href="#contact" className="border-2 border-white font-semibold px-8 py-3.5 rounded-xl w-full max-w-[260px] sm:w-auto">📍 Find Us</a>
   </div>
   <div className="flex justify-center gap-6 sm:gap-12 flex-wrap mt-12 pt-6 border-t border-white/25">
    {[["100%","Fresh Daily"],["₹12+","Starting Price"],["4.8★","Customer Rating"],["3 Times","Open Daily"]].map(([a,b])=>
     <div key={b}><b className="block text-2xl sm:text-3xl text-yellow-300">{a}</b><span className="text-xs opacity-90">{b}</span></div>)}
   </div>
  </div>
  <a href="#menu" aria-label="scroll down" className="fl absolute bottom-5 left-1/2 -translate-x-1/2 text-2xl opacity-80">⌄</a>
 </header>);

const DishImg=({d})=>(
 <div className="relative h-48 overflow-hidden bg-stone-800">
  <img src={d.img} alt={d.name} loading="eager" className="w-full h-full object-cover transition duration-500 hover:scale-105"/>
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none"/>
  {d.tag&&<span className="absolute bottom-3 left-4 text-[11px] tracking-[2px] font-mono font-bold text-amber-300 bg-black/50 px-2.5 py-1 rounded-md backdrop-blur-sm border border-amber-400/30">{d.tag}</span>}
 </div>);

const Menu=({cart,setCart})=>{
 const [cat,setCat]=useState("All");
 const items=useMemo(()=>MENU.filter(m=>cat==="All"||m.cat===cat),[cat]);
 const add=(id,n)=>setCart(c=>{const q=Math.max(0,(c[id]||0)+n);const x={...c};q?x[id]=q:delete x[id];return x;});
 return(
 <section id="menu" className="max-w-5xl mx-auto px-4 py-12">
  <h2 className="text-3xl font-bold">Our Menu</h2>
  <p className="text-stone-500 dark:text-stone-400 mb-5">Simple food, great taste, fair price.</p>
  <div className="flex gap-2 overflow-x-auto pb-2 mb-4">
   {CATS.map(c=><button key={c} onClick={()=>setCat(c)} className={"px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap border "+(cat===c?"bg-orange-600 text-white border-orange-600":"bg-white dark:bg-stone-800 border-orange-200 dark:border-stone-700")}>{c}</button>)}
  </div>
  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
   {items.map(d=>(
    <div key={d.id} className="bg-white dark:bg-stone-800 rounded-2xl overflow-hidden border border-orange-100 dark:border-stone-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
     <DishImg d={d}/>
     <div className="p-4">
      <div className="flex justify-between items-start gap-2"><h3 className="font-serif font-bold text-xl">{d.name}</h3><span className="font-bold text-orange-600 dark:text-orange-400">₹{d.price}</span></div>
      <p className="text-sm text-stone-500 dark:text-stone-400 mt-1 min-h-[40px]">{d.desc}</p>
      <div className="mt-3">
       {cart[d.id]?<div className="flex items-center justify-between bg-orange-50 dark:bg-stone-700 rounded-xl p-1">
         <button onClick={()=>add(d.id,-1)} className="w-9 h-9 rounded-lg bg-white dark:bg-stone-800 font-bold">−</button>
         <b>{cart[d.id]}</b>
         <button onClick={()=>add(d.id,1)} className="w-9 h-9 rounded-lg bg-orange-600 text-white font-bold">+</button>
        </div>
       :<button onClick={()=>add(d.id,1)} className="w-full py-2 rounded-xl border-2 border-orange-600 text-orange-600 dark:text-orange-400 dark:border-orange-400 font-semibold">+ Add</button>}
      </div>
     </div>
    </div>))}
  </div>
 </section>);
};

const CartBar=({cart,setCart})=>{
 const lines=MENU.filter(m=>cart[m.id]);
 if(!lines.length)return null;
 const total=lines.reduce((s,m)=>s+m.price*cart[m.id],0);
 const count=lines.reduce((s,m)=>s+cart[m.id],0);
 const msg="Hi Eswaran Restaurant, I want to order:%0A"+lines.map(m=>`${m.name} x ${cart[m.id]} = ₹${m.price*cart[m.id]}`).join("%0A")+`%0ATotal: ₹${total}`;
 return(
 <div className="fixed left-0 right-0 z-50 px-3" style={{bottom:"calc(env(safe-area-inset-bottom,0px) + 12px)"}}>
  <div className="max-w-xl mx-auto bg-green-700 text-white rounded-2xl shadow-2xl px-4 py-3 flex items-center justify-between gap-3">
   <div><b>{count} items • ₹{total}</b><button onClick={()=>setCart({})} className="block text-xs underline opacity-80">Clear</button></div>
   <a href={`https://wa.me/${PHONE}?text=${msg}`} target="_blank" rel="noreferrer" className="bg-white text-green-800 font-bold px-5 py-2.5 rounded-xl">Order on WhatsApp →</a>
  </div>
 </div>);
};

const Why=()=>(
 <section id="why" className="bg-orange-100/60 dark:bg-stone-800/50 py-12">
  <div className="max-w-5xl mx-auto px-4">
   <h2 className="text-3xl font-bold text-center mb-8">Why Eswaran?</h2>
   <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
    {[["🧼","Clean Kitchen","Hygienic cooking daily"],["💰","Budget Price","Pocket-friendly meals"],["⚡","Quick Service","Hot food, no waiting"],["👨‍👩‍👧","Family Seating","Comfortable for all"]].map(([e,t,s])=>
     <div key={t} className="bg-white dark:bg-stone-800 rounded-2xl p-5 border border-orange-100 dark:border-stone-700"><div className="text-4xl">{e}</div><b className="block mt-2">{t}</b><small className="text-stone-500 dark:text-stone-400">{s}</small></div>)}
   </div>
  </div>
 </section>);

const Reviews=()=>(
 <section id="reviews" className="max-w-5xl mx-auto px-4 py-12">
  <h2 className="text-3xl font-bold mb-6">Customers Sollrathu</h2>
  <div className="grid md:grid-cols-3 gap-4">
   {REVIEWS.map(r=><div key={r.n} className="bg-white dark:bg-stone-800 rounded-2xl p-5 border border-orange-100 dark:border-stone-700">
    <div className="text-yellow-500">★★★★★</div><p className="my-2 text-sm">“{r.t}”</p><b className="text-orange-600 dark:text-orange-400 text-sm">— {r.n}</b></div>)}
  </div>
 </section>);

const Contact=()=>(
 <section id="contact" className="max-w-5xl mx-auto px-4 pb-14">
  <h2 className="text-3xl font-bold">Visit Us</h2>
  <p className="text-stone-500 dark:text-stone-400 mb-5">Vaanga, saapidunga! Warm welcome to Nagapattinam's authentic food destination.</p>
  <div className="grid md:grid-cols-3 gap-4">
   <div className="bg-white dark:bg-stone-800 rounded-2xl p-5 border border-orange-100 dark:border-stone-700 shadow-sm flex flex-col justify-between">
    <div>
     <div className="text-3xl mb-2">📍</div>
     <b className="text-lg">Address</b>
     <p className="text-stone-600 dark:text-stone-300 mt-2 text-sm leading-relaxed font-medium">
      No 19, GH Road,<br/>
      Near Indian Petrol Bunk,<br/>
      Nagapattinam - 611001
     </p>
    </div>
    <a href="https://maps.google.com/?q=GH+Road+Nagapattinam" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-orange-600 dark:text-orange-400 font-semibold mt-4 hover:underline">
     🗺️ Open in Google Maps →
    </a>
   </div>
   <div className="bg-white dark:bg-stone-800 rounded-2xl p-5 border border-orange-100 dark:border-stone-700 shadow-sm flex flex-col justify-between">
    <div>
     <div className="text-3xl mb-2">🕒</div>
     <b className="text-lg">Restaurant Timings</b>
     <p className="text-stone-600 dark:text-stone-300 mt-2 text-sm leading-7">
      <b>Breakfast:</b> 6:30 AM – 10:30 AM<br/>
      <b>Lunch:</b> 12:00 PM – 3:30 PM<br/>
      <b>Dinner:</b> 7:00 PM – 10:30 PM
     </p>
    </div>
    <span className="inline-block mt-4 text-xs bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full font-semibold w-fit">
     🟢 Open All 7 Days
    </span>
   </div>
   <div className="bg-white dark:bg-stone-800 rounded-2xl p-5 border border-orange-100 dark:border-stone-700 shadow-sm flex flex-col justify-between">
    <div>
     <div className="text-3xl mb-2">📞</div>
     <b className="text-lg">Order / Enquiry</b>
     <p className="text-orange-600 dark:text-orange-400 font-bold text-xl mt-1">+91 84386 95455</p>
     <p className="text-xs text-stone-500 mt-0.5">WhatsApp ordering available on this number</p>
    </div>
    <div className="flex gap-2 mt-4">
     <a href={"tel:+"+PHONE} className="flex-1 text-center bg-orange-600 hover:bg-orange-700 text-white py-2.5 rounded-xl text-sm font-semibold transition">📞 Call</a>
     <a href={`https://wa.me/${PHONE}?text=Hi%20Eswaran%20Restaurant,%20I%20want%20to%20place%20an%20order`} target="_blank" rel="noreferrer" className="flex-1 text-center bg-green-700 hover:bg-green-800 text-white py-2.5 rounded-xl text-sm font-semibold transition">💬 WhatsApp</a>
    </div>
   </div>
  </div>
 </section>);

const Footer=()=>(
 <footer className="bg-stone-900 text-stone-300 pt-14 pb-28 border-t border-stone-800">
  <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
   <div className="md:col-span-1">
    <a href="#" className="flex items-center gap-3 mb-3">
     <Logo s={40}/>
     <span className="leading-none">
      <b className="block tracking-[2px] text-orange-500 text-xl font-extrabold">ESWARAN</b>
      <small className="text-[10px] tracking-[4px] font-semibold text-stone-400">RESTAURANT</small>
     </span>
    </a>
    <p className="text-xs text-stone-400 leading-relaxed mt-2">
     Veetu saapadu feel, hotel taste! Authentic South Indian Veg & Non-Veg delicacies served on fresh green banana leaf.
    </p>
    <div className="mt-4 inline-flex items-center gap-2 text-xs text-amber-400 bg-stone-800 px-3 py-1.5 rounded-full border border-stone-700">
     <span>⭐ 4.8 Rating</span> • <span>Nagapattinam</span>
    </div>
   </div>

   <div>
    <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-3 text-orange-400">Quick Links</h4>
    <ul className="space-y-2 text-sm text-stone-400">
     <li><a href="#menu" className="hover:text-orange-400 transition">🍽️ Today's Menu</a></li>
     <li><a href="#why" className="hover:text-orange-400 transition">✨ Why Choose Us</a></li>
     <li><a href="#reviews" className="hover:text-orange-400 transition">⭐ Customer Reviews</a></li>
     <li><a href="#contact" className="hover:text-orange-400 transition">📍 Contact & Location</a></li>
    </ul>
   </div>

   <div>
    <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-3 text-orange-400">Opening Hours</h4>
    <ul className="space-y-2 text-xs text-stone-400">
     <li className="flex justify-between border-b border-stone-800 pb-1.5"><span>Breakfast:</span><b className="text-stone-200">6:30 AM – 10:30 AM</b></li>
     <li className="flex justify-between border-b border-stone-800 pb-1.5"><span>Lunch:</span><b className="text-stone-200">12:00 PM – 3:30 PM</b></li>
     <li className="flex justify-between border-b border-stone-800 pb-1.5"><span>Dinner:</span><b className="text-stone-200">7:00 PM – 10:30 PM</b></li>
     <li className="text-emerald-400 font-semibold pt-1">✓ Open All 7 Days</li>
    </ul>
   </div>

   <div>
    <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-3 text-orange-400">Contact Us</h4>
    <p className="text-xs text-stone-300 leading-relaxed mb-2">
     📍 No 19, GH Road,<br/>
     Near Indian Petrol Bunk,<br/>
     Nagapattinam - 611001
    </p>
    <p className="text-xs text-stone-400 mb-3">
     📞 Phone / WhatsApp:<br/>
     <a href={"tel:+"+PHONE} className="text-orange-400 font-bold text-sm hover:underline">+91 84386 95455</a>
    </p>
    <a href={`https://wa.me/${PHONE}?text=Hi%20Eswaran%20Restaurant`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition shadow-lg shadow-emerald-950/50">
     💬 Order on WhatsApp
    </a>
   </div>
  </div>

  <div className="max-w-5xl mx-auto px-4 mt-12 pt-6 border-t border-stone-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-stone-500">
   <p>© 2026 Eswaran Restaurant. All rights reserved.</p>
   <p className="text-stone-400">Parcel, Catering & Party Orders Available • Nagapattinam</p>
  </div>
 </footer>);

const App=()=>{
 const [cart,setCart]=useState({});
 return(<>
  <Navbar/><Hero/><Menu cart={cart} setCart={setCart}/><Why/><Reviews/><Contact/><Footer/><CartBar cart={cart} setCart={setCart}/>
 </>);
};
export default App;
