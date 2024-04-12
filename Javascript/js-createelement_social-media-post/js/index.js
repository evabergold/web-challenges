console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.


const article= document.createElement('article');
article.classList.add('post');

const oldContent = document.querySelector('.post__content');
const content = document.createElement('p');
content.classList.add('post__content');
//content.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.';
content.textContent=oldContent.textContent;
article.append(content);

const footer = document.createElement('footer');
footer.classList.add('post__footer');

const username = document.createElement('span');
username.classList.add('post__username');
username.textContent = '@username';
footer.append(username);

const newLikeButton = document.createElement('button');
newLikeButton.classList.add('post__button');
newLikeButton.textContent =' ♥ Like'
newLikeButton.addEventListener("click", handleLikeButtonClick);
footer.append(newLikeButton);

article.append(footer);

document.body.append(article);