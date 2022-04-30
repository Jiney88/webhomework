var num = 0; //总数

$('#sec3').on('click', '.m-add', (e) => {
    doAdd(e);
})

$('#sec3').on('click', '.u-del', (e) => {
    doDel(e);
})

function doAdd(e) {
    let t = e.currentTarget;
    let item = `<div class="u-content"><div class="u-no">${++num}</div><div class="u-info"></div><div class="u-del">Delete</div></div>`
    $(t).prev().append(item);
}

function doDel(e) {
    let t = e.currentTarget;
    $(t).parent().remove();
    num--;
    upload();
}

//修改编号
function upload() {
    let contentList = $('.m-data').children();
    let i = num;
    contentList.map((index, item) => {
        $(item).find('.u-no').text(num - (--i));
    })
}