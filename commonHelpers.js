import{S as d,i as c}from"./assets/vendor-f3f87f24.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const u="41883234-6691d5bcae5feebb5d3051225",f=document.getElementById("searchForm"),l=document.getElementById("searchInput"),n=document.querySelector(".loader"),p=document.querySelector(".gallery");var m=new d(".gallery a",{captionDelay:250,captionsData:"alt",captionPosition:"bottom"});f.addEventListener("submit",function(o){o.preventDefault();const s=l.value.trim();s!==""&&(n.style.display="block",p.innerHTML="",fetch(`https://pixabay.com/api/?key=${u}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>e.json()).then(e=>{n.style.display="none",e.hits.length>0?y(e.hits):c.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again."})}).catch(e=>{n.style.display="none",console.error("Error fetching data:",e),c.error({position:"topRight",message:"An error occurred. Please try again later."})}))});function y(o){const s=o.map(e=>`
      <div class="image-container">
        <a href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags}">
        </a>
        <div class="image-panel">
          <div class="statistic">
            <p>Likes</p>
            <p>${e.likes}</p>
          </div>
          <div class="statistic">
            <p>Views</p>
            <p>${e.views}</p>
          </div>
          <div class="statistic">
            <p>Comments</p>
            <p>${e.comments}</p>
          </div>
          <div class="statistic">
            <p>Downloads</p>
            <p>${e.downloads}</p>
          </div>
        </div>
      </div>
      `).join("");p.innerHTML=s,l.value="",m.refresh()}
//# sourceMappingURL=commonHelpers.js.map
