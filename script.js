
var container = document.querySelector(".box");

function GetAllAPIs(){
    fetch('https://api.publicapis.org/entries', {
    method: 'GET'
    })
	.then(response => response.json()) // lấy respone và chuyển response sang dạng json.
	.then(response => DisplayAllAPIs(response)) // sau khi chuyển sang dạng json xong thì lấy ra hiển thị lên console.
	.catch(err => console.error(err));
}

function DisplayAllAPIs(respone){
    var s = "";
    respone.entries.forEach(element => {
        s = s + "<tr>"+
            "<td>"+element.API+"</td>"+
            "<td><a target href='"+element.Link+"'>Link</a></td>"+
            "<td>"+element.Category+"</td>"+
            "<td>"+element.Description+"</td>"+
            "<td>"+element.Auth+"</td>"+
            "<td>"+element.HTTPS+"</td>"+
            "<td>"+element.Cors+"</td>"+
        "</tr>";
    });
    container.innerHTML = s;
}


GetAllAPIs();