let commentsArr = [];
let postData;
function openSignUpBox() {
    $('#signInBox').modal('hide');
    $('#signUpBox').modal('show');
}

function renderEditPostDiv() {
    postData = JSON.parse(localStorage.getItem('item-to-edit'));
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
    let subDiv = document.getElementsByClassName('edit-sub-header')[0];
    let editButton = document.getElementById('edit-button');
    editButton.style.display = 'none';
    subDiv.innerHTML = '<span id="edit-sub-header-el">' + postData.writer  +'</span>\n' +
        '<button id="save-button" class="btn post-page-btn" onclick="savePost()">Save\n' +
        '                    <i class="fa fa-floppy-o icon-left-align" aria-hidden="true"></i>\n' +
        '                </button>';

}

function savePost() {
    console.log('in save post @#@#@#@');
    document.getElementById('edit-header').removeAttribute("contenteditable");
    document.getElementById('edit-header').classList.remove('editable-box-border');
    document.getElementById('edit-header').style.textAlign = 'center';
    postData.heading = 'UPDATED : ' + postData.heading;
    document.getElementById('edit-header').innerText = postData.heading;
    let contentDiv = document.getElementById('post-content');
    contentDiv.innerHTML = '<div>UPDATED : </div>\n' + postData.content;
    document.getElementById('post-content').removeAttribute("contenteditable");
    document.getElementById('post-content').classList.remove('editable-box-border');
    let saveBtn = document.getElementById('save-button');
    saveBtn.remove();
    let subDiv = document.getElementsByClassName('edit-sub-header')[0];
    subDiv.innerHTML = '<span id="edit-sub-header-el">' + postData.writer  +'</span>\n' +
        '                <button id="edit-button" class="btn post-page-btn" onclick="editPost()">Edit\n' +
        '                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>\n' +
        '                </button>'
}
