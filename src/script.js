const input = document.querySelector(".search-field input");
const posts = document.querySelectorAll("article");

input.addEventListener("input", filterPosts);

function filterPosts() {
  if(input.value !== "") {
    for(let post of posts) {
      let title = post.querySelector(".bottom h2")
      title = title.textContent.toLowerCase();
      
      const filterText = input.value.toLowerCase();
      
      if(!title.includes(filterText)) {
        post.style.display = "none";
      } else {
        post.style.display = "block";
      }
    }
  }
}