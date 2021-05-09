let indexToDelete;
let allPosts = [
    {
        writer: 'Srishti Gupta',
        heading: '\'let\' me be a \'const\'(ant), not a \'var\'(iable) !',
        content: 'Since JavaScript does not have any type-checking, either of these keywords can be used to declare a variable' +
            'of any type (datatype) in JavaScript. Though all the three keywords are used for the same purpose,' +
            'they are different.There are many variations of passages of Lorem Ipsum available, but the majority have suffered ' +
            'alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. ' +
            'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.' +
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
    },
    {
        writer: 'Colby Fayock',
        heading: 'What is linting and how can it save you time?',
        content: 'One of the biggest challenges in software development is time.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.It\'s something we can\'t easily get more of, but linting can help us make the most out of the time we have.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
    },
    {
        writer: 'Yazeed Bzadough',
        heading: 'How to Get More Views on Your Tech Blog',
        content: 'If you\'re a developer with a Twitter account, you\'ve already seen everyone and their cat start a blog, YouTube channel, or Patreon. We all want to become stars, or at the very least, a recognizable name in the industry.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
    },
    {
        writer: 'Cedd Burge',
        heading: 'How to write easily describable code',
        content: 'When code is not describable using words, most people have to do some mental mapping to turn it in to words. This wastes mental energy, and you run the risk of getting the mapping wrong. Different people will map to different words, which leads to confusion when discussing the code.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
    },
    {
        writer: 'Srishti Gupta',
        heading: 'Everything you should know about \'module\' & \'require\' in Node.js',
        content: 'Node.js treats each JavaScript file as a separate module. ' +
            'For instance, if you have a file containing some code and this file is named xyz.js, ' +
            'then this file is treated as a module in Node, and you can say that you\'ve created a module named xyz.' +
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical ' +
            'Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at ' +
            'Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, ' +
            'from a Lorem Ipsum passage, and going through the cites of the word in classical literature, ' +
            'discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de ' +
            'Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. ' +
            'This book is a treatise on the theory of ethics, very popular during the Renaissance. ' +
            'The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.' +
            'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration ' +
            'in some form, by injected humour, or randomised words which don\'t look even slightly believable. ' +
            'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing ' +
            'hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat ' +
            'predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.'
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
            let spanId = 'ellipsis' + index;
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
                '                        <i class="fa fa-ellipsis-h" id="'+spanId+'" aria-hidden="true" onclick="goToPostPage(this.id)"></i>\n' +
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

function goToPostPage(spanId) {
    console.log('current id is', parseInt(spanId.split('ellipsis')[1], 10));
    let spanItemIndex = parseInt(spanId.split('ellipsis')[1], 10);
    console.log('items from post is', allPosts[spanItemIndex]);
    localStorage.setItem('item-to-edit', JSON.stringify(allPosts[spanItemIndex]));
    let prevHREF = window.location.href.split('html');
    window.location.href = prevHREF[0] + 'html/post.html';
}
