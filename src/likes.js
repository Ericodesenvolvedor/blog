if(localStorage.getItem("likes") === null) {
  localStorage.setItem("likes", "[]");
}

function getLikesFromLocalStorage() {
  return JSON.parse(localStorage.getItem("likes")) || [];
}

export function applyLikesToPosts(posts) {
  const likesDabase = getLikesFromLocalStorage();

  likesDabase.forEach(({ index }) => {
    const post = posts[index];
    const icon = post.querySelector(".ph-heart");
    icon.className = "ph-fill ph-heart";
  })
}

export function addLike(index, posts) {
  const post = posts[index];
  const icon = post.querySelector(".ph-heart");
  const title = post.querySelector("h2").innerText;
  const likesDabase = getLikesFromLocalStorage();
  const data = {index, title};
  
  const includesLike = likesDabase.find(like => {
    return like.index === index;
  })

  if(icon.className === 'ph ph-heart') {
    icon.className = 'ph-fill ph-heart';
    
    if(!includesLike) {
      likesDabase.push(data);
      localStorage.setItem("likes", JSON.stringify(likesDabase));
    }
  } else {
    icon.className = 'ph ph-heart';
    const indexLocalStorage = likesDabase.findIndex(obj => obj.index === data.index);
    console.log(indexLocalStorage)
    likesDabase.splice(indexLocalStorage, 1);
    localStorage.setItem("likes", JSON.stringify(likesDabase));
  }
}