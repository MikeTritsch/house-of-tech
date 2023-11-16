const editPostHandler = async function(event) {
  event.preventDefault();

  const post_id = window.location.pathname.split('/').pop();
  const topic = document.querySelector('.newPostTitle').value;
  const post_body = document.querySelector('.newBody').value;

  const response = await fetch(`/api/post/${post_id}`, {
    method: 'PUT',
    body: JSON.stringify({
      topic,
      post_body,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });



  console.log(response);
  
  if (response.ok) {
    window.location.href = '/dashboard';
    console.log('Post successfully updated!')
  } else {
    console.error('Error during fetch:', error);
    alert('Failed to update your post');
  }

  document.location.replace('/dashboard');
};

document.querySelector('.save-edit-btn').addEventListener('click', editPostHandler);