const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#project-name').value.trim();
    // const needed_funding = document.querySelector('#project-funding').value.trim();
    const description = document.querySelector('#project-desc').value.trim();
  
    if (name && description) {
      const response = await fetch(`/api/newPost`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create new tech blog post');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  
  document
    .querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.project-list')
    .addEventListener('click', delButtonHandler);



// const newFormHandler = async function (event) {
//     event.preventDefault();

//     const title = document.querySelector('input[name="post-title"]').value;
//     const body = document.querySelector('textarea[name="post-body"]').value;
    
//     await fetch(`/api/newPostRoutes`, {
//         method: 'POST',
//         body: JSON.stringify({
//             title,
//             body,
//         }),
//         headers: {'Content-Type': 'newPostData/json'},
//     });
    
//     document.location.replace('/dashboard');

// };

// document    
//     .querySelector('#post-title')
//     .addEventListener('submit', newFormHandler)

