var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://example.com', true);

xhr.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        console.log(this.responseText);
    }
};

xhr.send();
