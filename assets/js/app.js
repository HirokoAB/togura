setInterval("goFlash()",9000);

function goFlash() {
    $('.keybox').addClass('holizonal_sec');
    setTimeout("removeFlash()",1000);
}

function removeFlash() {
    $('.keybox').removeClass('holizonal_sec');
}

