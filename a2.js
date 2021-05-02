function addRow(){
  var tableData = document.getElementById('b_table');
  //var a1 = document.getElementById('a1');
  var row = tableData.insertRow(-1);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);


  cell1.innerHTML ="<td>건물</td>";
  cell2.innerHTML ="<td>주택</td>";
  cell3.innerHTML = "<td>분양면적</td>";
  cell4.innerHTML = "<td></td>";

}
function deleteRow(){
  var my_table = document.getElementById('b_table');
  my_table.deleteRow(-1);
}

function execDaumPostcode(){
  new daum.Postcode({
    oncomplete:function(data){
      var roadAddr = data.roadAddress;
      document.getElementById("roadAddress11").value = roadAddr;
    }
  }).open();
}
function show(){
  var sh = document.getElementById('index_container');

  if(sh.style.display == 'none'){
    sh.style.display = "block";

  }
  else{
    sh.style.display = "none";
  }
}

function show1(){index_list.style.display = "block";}

function show2(){body_content.style.display = "block";}
function show3(){b_table.style.display = "block";}
