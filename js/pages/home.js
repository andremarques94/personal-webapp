function p(o){window.location.hash=o}function j(o){o.classList.add("flex","items-center","justify-center","bg-black","text-white","h-screen");let e=document.createElement("div");e.classList.add("flex-1","py-12","sm:py-16","lg:py-20"),o.appendChild(e);let c=document.createElement("div");c.classList.add("mx-auto","max-w-7xl","px-4","sm:px-6","lg:px-8"),e.appendChild(c);let a=document.createElement("div");a.classList.add("grid","grid-cols-1","gap-y-16","lg:grid-cols-2","lg:gap-x-8"),c.appendChild(a);let t=document.createElement("div");t.classList.add("lg:pr-8"),a.appendChild(t);let n=document.createElement("h1");n.classList.add("text-2xl","font-bold","tracking-tight","sm:text-5xl"),n.textContent="Hi, my name is",t.appendChild(n);let r=document.createElement("h1");r.classList.add("text-7xl","font-extrabold","text-white"),r.textContent="Andr\xE9 Marques",t.appendChild(r);let i=document.createElement("h1");i.classList.add("text-2xl","font-bold","tracking-tight","sm:text-5xl"),t.appendChild(i);let l=document.createElement("span");l.id="animate",i.appendChild(l);let d=document.createElement("div");d.classList.add("relative","h-72"),a.appendChild(d);let s=document.createElement("img");s.src="./assets/final-class.jpg",s.alt="Me teaching a class at Code For all",s.classList.add("absolute","inset-0","h-full","w-full","object-contain","rounded-lg"),s.width=1200,s.height=900,s.style.aspectRatio="1200 / 900",s.style.objectFit="cover",d.appendChild(s),h(o);let u=document.createElement("button");u.classList.add("mt-8","mr-4","px-4","py-2","text-lg","font-semibold","text-white","bg-red-500","rounded-lg","hover:bg-red-700","focus:outline-none","focus:ring-2","focus:ring-red-500","focus:ring-offset-2","focus:ring-offset-black"),u.textContent="Contact me",u.addEventListener("click",()=>{p("/contact")}),c.appendChild(u)}function h(o){let e=o.querySelector("#animate");e.classList.add("text-red-500"),e.style.fontWeight="bold",e.style.borderRight="2px solid #fff",e.style.animation="blinkingCursor 0.7s step-end infinite",e.style.whiteSpace="nowrap",e.style.overflow="hidden",e.style.width="fit-content";let c=document.createElement("style");c.innerHTML=m(),o.appendChild(c);let a=["FullStack Developer","Teacher","JavaScript Dev.","Java Dev.","React.js Dev.","Node.js Dev.","Mentor","Dancer","AKA NOZK","Speaker","Tech Enthusiast","Learner"],t=0,n=0,r=a[n],i="";function l(){t<r.length?(i+=r[t],e.innerHTML=i,t++,setTimeout(l,200)):setTimeout(d,1e3)}function d(){t>0?(i=r.substring(0,t-1),e.innerHTML=i,t--,setTimeout(d,200)):(n++,n>=a.length&&(n=0),r=a[n],setTimeout(l,500))}l()}function m(){return`
      @keyframes blinkingCursor {
        from, to {
          border-color: transparent;
        }
        50% {
          border-color: #fff;
        }
      }
    `}export{j as render};
