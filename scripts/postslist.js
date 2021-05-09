let indexToDelete;
let allPosts = [
    {
        writer: 'Srishti Gupta',
        heading: '\'let\' me be a \'const\'(ant), not a \'var\'(iable) !',
        content: 'Since JavaScript does not have any type-checking, either of these keywords can be used to declare a variable of any type (datatype) in JavaScript. Though all the three keywords are used for the same purpose,' +
            'they are different.'
    },
    {
        writer: 'Colby Fayock',
        heading: 'What is linting and how can it save you time?',
        content: 'One of the biggest challenges in software development is time.It\'s something we can\'t easily get more of, but linting can help us make the most out of the time we have.'
    },
    {
        writer: 'Yazeed Bzadough',
        heading: 'How to Get More Views on Your Tech Blog',
        content: 'If you\'re a developer with a Twitter account, you\'ve already seen everyone and their cat start a blog, YouTube channel, or Patreon. We all want to become stars, or at the very least, a recognizable name in the industry.'
    },
    {
        writer: 'Cedd Burge',
        heading: 'How to write easily describable code',
        content: 'When code is not describable using words, most people have to do some mental mapping to turn it in to words. This wastes mental energy, and you run the risk of getting the mapping wrong. Different people will map to different words, which leads to confusion when discussing the code.'
    },
    {
        writer: 'Srishti Gupta',
        heading: 'Everything you should know about \'module\' & \'require\' in Node.js',
        content: 'Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you\'ve created a module named xyz.'
    }
];

function renderPosts(posts) {
    let countItems = 0;
    let postsArr = posts ? posts : allPosts;
    const mainDiv = document.getElementsByClassName('posts-list-div')[0];
    postsArr.forEach(function (item, index) {
            countItems ++;
            let postsDiv = document.createElement('div');
            let idName = 'delete' + index;
            postsDiv.id = 'post'+ index;
           if (countItems % 2 !== 0 && index === allPosts.length - 1) {
              postsDiv.classList.add('post-div', 'last-odd-post');
           } else {
              postsDiv.className = 'post-div';
           }
            postsDiv.innerHTML = '<div class="post-user">\n' +
                '                    <p>'+ item.writer +'</p>\n' +
                '                </div>\n' +
                '                <div class="posts-detail">\n' +
                '                    <div class="post-header-div">\n' +
                '                        <p class="post-header">' + item.heading + '</p>\n' +
                '                        <span>\n' +
                '                            <i class="fa fa-trash" id="'+idName+'" aria-hidden="true" data-toggle="modal"\n' +
                '                               data-target="#deletePostModal" onclick="getPostToDelete(this.id)"></i>\n' +
                '                        </span>\n' +
                '                    </div>\n' +
                '                    <p class="post-detail-para">' + item.content + '</p>\n' +
                '                    <span class="ellipsis-span">\n' +
                '                        <i class="fa fa-ellipsis-h" aria-hidden="true"></i>\n' +
                '                </span>\n' +
                '                </div>';
            mainDiv.appendChild(postsDiv);
    });
}

function openSignUpModalBox() {
    $('#signInModalBox').modal('hide');
    $('#signUpModalBox').modal('show');
}

function getPostToDelete(postIndex) {
    indexToDelete = parseInt(postIndex.split('delete')[1], 10);
}

function deletePost() {
    let idReq = 'post' + indexToDelete;
    let elToDelete = document.getElementById(idReq);
    elToDelete.remove();
    $('#deletePostModal').modal('hide');
    const afterDeleteLen = document.getElementsByClassName('post-div').length;
    let el = document.getElementsByClassName('post-div')[afterDeleteLen - 1];
    if (afterDeleteLen % 2 === 0 && el.classList.contains('last-odd-post')) {
        el.classList.remove('last-odd-post');
    } else if (afterDeleteLen % 2 !== 0 && !el.classList.contains('last-odd-post')) {
        el.classList.add('last-odd-post');
    }
}
