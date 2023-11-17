// New post functionality
const newPostHandler = async function(event) {
  event.preventDefault(0);

  const topic = document.querySelector('.newPostTitle').value;
  const post_body = document.querySelector('.newBody').value;


  await fetch('/api/post', {
    method: 'POST',
    body: JSON.stringify({
      topic,
      post_body,
    }),
    headers: { 'Content-Type': 'application/json'},
  });

  document.location.replace('/dashboard');
};

// Event listener
document.querySelector('.newPostForm').addEventListener('submit', newPostHandler);