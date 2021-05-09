let commentsArr = [];
function openSignUpBox() {
    $('#signInBox').modal('hide');
    $('#signUpBox').modal('show');
}

function renderEditPostDiv() {
    const postData = JSON.parse(localStorage.getItem('item-to-edit'));
    let headerEl = document.getElementById('edit-header');
    let subHeaderEl = document.getElementById('edit-sub-header-el');
    let contentDiv = document.getElementById('post-content');
    headerEl.innerText = postData.heading;
    subHeaderEl.innerText = postData.writer;
    contentDiv.innerHTML = postData.content;
}
