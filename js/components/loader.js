export function loader(domElement) {
    domElement.classList.add('flex', 'justify-center', 'items-center', 'h-screen');

    const loader = document.createElement('div');
    loader.classList.add('loader');

    const style = document.createElement('style');
    style.innerHTML = `

      .loader {
        width: 85px;
        height: 35px;
        --g1:conic-gradient(from  90deg at 3px  3px ,#0000 90deg,#fff 0);
        --g2:conic-gradient(from -90deg at 22px 22px,#0000 90deg,#fff 0);
        background:var(--g1),var(--g1),var(--g1), var(--g2),var(--g2),var(--g2);
        background-size: 25px 25px;
        background-repeat: no-repeat;
        animation: l6 1s infinite alternate;
      }
      @keyframes l6 {
        0%   {background-position:0 50% ,50% 50% ,100% 50% }
        20%  {background-position:0 0   ,50% 50% ,100% 50% }
        40%  {background-position:0 100%,50%  0  ,100% 50% }
        60%  {background-position:0 50% ,50% 100%,100% 0   }
        80%  {background-position:0 50% ,50% 50% ,100% 100%}
        100% {background-position:0 50% ,50% 50% ,100% 50% }
      }
      `;

    domElement.appendChild(style);
    domElement.appendChild(loader);
}
