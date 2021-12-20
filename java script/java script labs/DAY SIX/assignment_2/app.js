window.addEventListener('load', function () {
    for (var i = 0; i < 10; i++) {
        (function (i) {
            var createbtn = this.document.createElement('input');
            createbtn.setAttribute("type", "button");
            createbtn.setAttribute("value", "Click Button : " + i);
            createbtn.onclick = function () {
                alert("You Clicked Button Number : " + i);
            };
            this.document.body.appendChild(createbtn);
        }(i));
    }
});