function addData(){
    var bookName = document.getElementById("book_name");
    var issuedTo = document.getElementById("issued_to")
    var tr = document.createElement('tr');
    var id = document.getElementById("id")

    var td = tr.appendChild(document.createElement('ol'));
    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    
    td.innerHTML = id;
    td1.innerHTML = bookName.value;
    td2.innerHTML = issuedTo.value;

    document.getElementById("tbl").appendChild(tr);
}