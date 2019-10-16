setInterval("goFlash()",9000);

function goFlash() {
    $('.keybox').addClass('vertical_sec');
    setTimeout("removeFlash()",1000);
}

function removeFlash() {
    $('.keybox').removeClass('vertical_sec');
}

