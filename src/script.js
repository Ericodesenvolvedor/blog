import filterPosts from "./filterPosts.js";
import { addLike, applyLikesToPosts } from "./likes.js";

const input = document.querySelector(".search-field input");
const posts = document.querySelectorAll("article");

input.addEventListener("input", () => filterPosts(input, posts));

posts.forEach((element, index) => {
  element.addEventListener('click', () => addLike(index, posts));
})

applyLikesToPosts(posts);