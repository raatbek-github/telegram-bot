console.log('hello world');
const token = '5027662149:AAFOP9zGAo0_aN_dDCPoh0fIaufjLIGZDnY';
const url = 'https://appi.telegram.org/bot' + token + '/sendMessage';

function scheduleMessage() {
    let text = document.getElementById('textMessage').value;
    let chatId = 1024210862;
    const fullUrl = url + '?chat_id=' + chatId + "&text=" + text;
    setTimeout(function () {
        fetch(fullUrl, { method: 'Post' });
    }, 4000);
}