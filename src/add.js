function addRow () {
  var table = document.getElementById('mytable');
  var index = table.rows.length;
  var newRow = table.insertRow(index);
  var newCell1 = newRow.insertCell(0);
  var newCell2 = newRow.insertCell(1);
  var newCell3 = newRow.insertCell(2);
  var newCell4 = newRow.insertCell(3);
  var newText = document.createTextNode(index); 
  newCell1.appendChild(newText);
  newCell2.appendChild(document.createTextNode('Issue Placeholder'));
  newCell3.appendChild(document.createTextNode('Type Placeholder'));
  newCell4.appendChild(document.createTextNode('Description goes here'));
  window.location.href = './add.html';
}

function post () {
}