const newFormHandler = async function (event) {
    event.preventDefault();

    // const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;
    
    await fetch(`/api/commentRoutes`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            body,
        }),
        headers: {'Content-Type': 'comment/json'},
    });
    
    document.location.replace('/main');

};

document    
    .querySelector('#new-post-form')
    .addEventListener('submit', newFormHandler)