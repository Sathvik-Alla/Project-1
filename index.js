function countItems() {
    const numItems = parseInt(document.getElementsByClassName('badge bg-primary rounded-pill').value)
    fetch('/item-list', {
        method: 'POST',
        headers: { 'Content-Type': 'applciation.json' },
        body: JSON.stringify([numItems])
    })
    .then(response => response.json())
    .then(data => {
        document.getElementsByClassName('badge bg-primary rounded-pill').textContent = data.items;
    })
    .catch(error => {
        console.error('Error: ', error);
    });
}