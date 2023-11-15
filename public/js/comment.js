const addCommentHandler = async function(event) {
  event.preventDefault();

  const post_id = parseInt(window.location.pathname.split('/').pop());
  const comment_body = document.querySelector('.newComment').value;

  if (comment_body) {
    const response = await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({comment_body, post_id }),
      headers: { 'Content-Type': 'application/json'},
  });

  if(response.ok){
    document.location.reload();
  }
}
};

document.querySelector('.commentForm').addEventListener('submit', addCommentHandler)