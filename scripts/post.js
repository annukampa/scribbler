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

function editPost() {
    document.getElementById('edit-header').setAttribute("contenteditable", "true");
    document.getElementById('edit-header').className = 'editable-box-border';
    document.getElementById('post-content').setAttribute("contenteditable", "true");
    document.getElementById('post-content').className = 'editable-box-border';
}
