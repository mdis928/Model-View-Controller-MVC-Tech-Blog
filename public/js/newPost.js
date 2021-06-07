const newFormHandler = async function (event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;
    
    await fetch(`/api/newPostRoutes`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            body,
        }),
        headers: {'Content-Type': 'newPostData/json'},
    });
    
    document.location.replace('/dashboard');

};

document    
    .querySelector('#post-title')
    .addEventListener('submit', newFormHandler)

