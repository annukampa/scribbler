let commentsArr = [];
let postData;
let likes = 0;
let alreadyEdited = false;
function openSignUpBox() {
    $('#signInBox').modal('hide');
    $('#signUpBox').modal('show');
}

function renderEditPostDiv() {
    postData = JSON.parse(localStorage.getItem('item-to-edit'));
    let headerEl = document.getElementById('edit-header');
    let subHeaderEl = document.getElementById('edit-sub-header-el');
    let contentDiv = document.getElementById('post-content');
    let likeDiv = document.getElementById('like-text');
    headerEl.innerText = postData.heading;
    subHeaderEl.innerText = postData.writer;
    contentDiv.innerHTML = postData.content;
    likeDiv.innerHTML = 'Be the first one to like this!';
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
    document.getElementById('edit-header').removeAttribute("contenteditable");
    document.getElementById('edit-header').classList.remove('editable-box-border');
    document.getElementById('edit-header').style.textAlign = 'center';
    let contentDiv = document.getElementById('post-content');
    if (alreadyEdited) {
        postData.heading = document.getElementById('edit-header').innerText;
    } else {
        postData.heading = 'UPDATED : ' + document.getElementById('edit-header').innerText;
        contentDiv.innerHTML = '<div class="text-left">UPDATED : </div>\n' + contentDiv.innerHTML;
    }
    document.getElementById('edit-header').innerText = postData.heading;
    document.getElementById('post-content').removeAttribute("contenteditable");
    document.getElementById('post-content').classList.remove('editable-box-border');
    let saveBtn = document.getElementById('save-button');
    saveBtn.remove();
    let subDiv = document.getElementsByClassName('edit-sub-header')[0];
    subDiv.innerHTML = '<span id="edit-sub-header-el">' + postData.writer  +'</span>\n' +
        '                <button id="edit-button" class="btn post-page-btn" onclick="editPost()">Edit\n' +
        '                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>\n' +
        '                </button>'
    alreadyEdited = true;
}

function hitLike() {
    likes ++;
    if (likes === 1) {
        document.getElementById('like-text').innerHTML = '1 person likes this!';
    } else if (likes > 1) {
        document.getElementById('like-text').innerHTML = likes + ' people like this!';
    }
    document.getElementsByClassName('like-btn')[0].innerHTML = '<i class="fa fa-thumbs-up" aria-hidden="true"></i>\n' +
        '                Liked';
}

function addComment() {
    let commentsDiv = document.getElementById('added-comments-list');
    let comment = document.getElementsByClassName('comment-box')[0].value;
    commentsArr.push(comment);
    let commentEl = document.createElement('div');
    commentEl.innerHTML = comment;
    document.getElementsByClassName('comment-box')[0].value = '';
    commentsDiv.insertBefore(commentEl, commentsDiv.children[0]);
}
