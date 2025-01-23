function create(words) {
   
   let content = document.getElementById('content');

   for (let word of words) {

      let div = document.createElement('div');

      let para = document.createElement('p');

      para.textContent = word;

      para.style.display = 'none';

      div.appendChild(para);

      div.addEventListener('click', reveal)

      content.appendChild(div);

      function reveal(e) {
         console.log(e.target);
         console.log(e.currentTarget);
         e.currentTarget.children[0].style.display = 'block';
      }

   }

}