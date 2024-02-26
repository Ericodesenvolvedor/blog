function filterPosts(input, posts) {
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

export default filterPosts;