if(localStorage.getItem("likes") === null) {
  localStorage.setItem("likes", "[]");
}

export function addLike(index, posts) {
  const post = posts[index];
  const like = post.querySelector(".ph-heart");
  const title = post.querySelector("h2").innerText;
  const likesDabase = JSON.parse(localStorage.getItem("likes"));
  const data = {index, title};
  
  const includesLike = likesDabase.find(like => {
    return like.index === index;
  })

  if(like.className === 'ph ph-heart') {
    like.className = 'ph-fill ph-heart';
    
    if(!includesLike) {
      likesDabase.push(data);
      localStorage.setItem("likes", JSON.stringify(likesDabase));
    }
  } else {
    like.className = 'ph ph-heart';
    const indexLocalStorage = likesDabase.findIndex(obj => obj.index === data.index);
    console.log(indexLocalStorage)
    likesDabase.splice(indexLocalStorage, 1);
    localStorage.setItem("likes", JSON.stringify(likesDabase));
  }
}

export function checkLike(posts) {
  const likesDabase = JSON.parse(localStorage.getItem("likes"));

  likesDabase.forEach(({ index }) => {
    const post = posts[index];
    const icone = post.querySelector(".ph-heart");
    icone.className = "ph-fill ph-heart";
  })
}