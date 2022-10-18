// Thêm class vào cho li
// li.className = "checked";
function kiemTraHoanThanh() {
    let ul = document.getElementById("myUL");
    let mangLi = ul.children;
    for (let i = 0; i < mangLi.length; i++) {
        mangLi[i].addEventListener("click", function() {
            this.classList.toggle("checked");
        })
    }
}
kiemTraHoanThanh();
// text = ............value lấy giá trị trong thẻ input
// tạo text node document.creatTextNode("....")
// tạo mới li <li> Text </li>
// thêm text node vào li
// ul = ........ 
// thêm li vào ul
function newElement() {
    let text = document.getElementById("myInput").value;
    let newInput = document.createTextNode(text);
    let newLi = document.createElement("li");
    newLi.appendChild(newInput);
    let ul = document.getElementById("myUL");
    ul.appendChild(newLi);
}

function xoaList() {
    let ul = document.getElementById("myUL");
    let mangLi = ul.children;
    for (let i = 0; i < mangLi.length; i++) {
        mangLi[i].addEventListener("click", function() {
            this.classList.toggle("close");
        })
    }
}
xoaList();

function removeElement() {
    let listDone = document.getElementsByTagName("li");
    listDone.addEventListener("click", function () {
        let ul = document.getElementsByTagName("ul");
        let li = ul.children;
        li.remove();
    }
    )
}


// js tạo nút x để xóa li
