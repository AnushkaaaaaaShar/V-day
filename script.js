function hearts(){
  const container = document.querySelector('.container');
  const creat = document.createElement("div");
  creat.classList.add('hearts');

  creat.style.left = Math.random() * 100 + "vw";
  creat.style.animationDuration = Math.random() * 4 + 3 + "s";
  creat.innerHTML =`❤️`;
  container.appendChild(creat)
   console.log(creat)

   setTimeout(() => {
      creat.remove();
      }, 9000);
}

setInterval(hearts,1000);