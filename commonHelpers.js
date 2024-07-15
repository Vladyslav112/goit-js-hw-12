import{a as g,S as p,i as n}from"./assets/vendor-b0d10f48.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();function m(t){const r=document.getElementById("gallery"),a=t.map(s=>`
    <a href="${s.largeImageURL}" class="gallery-item">
      <img src="${s.webformatURL}" alt="${s.tags}" loading="lazy"/>
      <div class="info">
        <p class="info-item"><b>Likes</b> ${s.likes}</p>
        <p class="info-item"><b>Views</b> ${s.views}</p>
        <p class="info-item"><b>Comments</b> ${s.comments}</p>
        <p class="info-item"><b>Downloads</b> ${s.downloads}</p>
      </div>
    </a>
  `).join("");r.insertAdjacentHTML("beforeend",a)}function h(){const t=document.getElementById("gallery");t.innerHTML=""}const b="44812074-4f691c7d06d5961145b89341f",w="https://pixabay.com/api/";async function u(t,r){return(await g.get(w,{params:{key:b,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}const E=document.getElementById("search-form"),L=document.getElementById("search-input"),I=document.getElementById("gallery"),i=document.getElementById("load-more"),v=document.getElementById("loader");let c=1,l="",y=new p(".gallery a");E.addEventListener("submit",async t=>{if(t.preventDefault(),l=L.value.trim(),!l){n.error({title:"Error",message:"Please enter a search term"});return}c=1,h(),i.style.display="none";try{d(!0);const r=await u(l,c);r.hits.length===0?n.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}):(m(r.hits),y.refresh(),i.style.display="block")}catch{n.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{d(!1)}});i.addEventListener("click",async()=>{c+=1;try{d(!0);const t=await u(l,c);m(t.hits),y.refresh();const{height:r}=I.firstElementChild.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"}),t.hits.length<15&&(i.style.display="none",n.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}))}catch{n.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{d(!1)}});function d(t){v.style.display=t?"block":"none"}
//# sourceMappingURL=commonHelpers.js.map
