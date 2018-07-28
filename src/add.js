function addRow () {
  var table = document.getElementById('mytable');
  var index = table.rows.length;
  var newRow = table.insertRow(index);
  var newCell1 = newRow.insertCell(0);
  newCell1.id = 'newCell1';
  var newCell2 = newRow.insertCell(1);
  newCell2.id = 'newCell2';
  var newCell3 = newRow.insertCell(2);
  newCell3.id = 'newCell3';
  var newCell4 = newRow.insertCell(3);
  newCell4.id = 'newCell4';
  var newText = document.createTextNode(index); 
  newCell1.appendChild(newText);

  var nameInput = document.createElement('input');
  nameInput.type = 'file';
  nameInput.name = 'Upload file';
  nameInput.id = 'nameInput';
  newCell2.appendChild(nameInput);

  var typeInput = document.createElement('select');
  typeInput.id = 'typeInput';
  var option1 = document.createElement('option');
  var option2 = document.createElement('option');
  var option3 = document.createElement('option');
  var option4 = document.createElement('option');
  var option5 = document.createElement('option');
  option1.text = 'Feature';
  option2.text = 'Moderate';
  option3.text = 'Warning';
  option4.text = 'Error';
  option5.text = 'Severe';
  typeInput.add(option1);
  typeInput.add(option2);
  typeInput.add(option3);
  typeInput.add(option4);
  typeInput.add(option5);
  newCell3.appendChild(typeInput);
  var description = document.createElement('input');
  description.id = 'description';
  newCell4.appendChild(description);
  var save = document.createElement('input');
  save.id = 'save';
  save.type = 'button';
  save.value = 'Save';
  save.onclick = post;
  table.appendChild(save);
}

function post () {
  var table = document.getElementById('mytable');
  var databaseRef = firebase.databaseRef().ref('issues/');
  var newCell2 = document.getElementById('newCell2');
  var newCell3 = document.getElementById('newCell3');
  var newCell4 = document.getElementById('newCell4');
  
  var uid = firebase.databaseRef().ref().child('issues').push().key;

  var data = {
    issueID: document.getElementById('newCell1').value,
    name: document.getElementById('nameInput').value,
    type: document.getElementById('typeInput').selectedIndex,
    description: document.getElementById('description').value
  }

  var updates = {}; 
  updates['/issues/' + uid] = data;
  firebase.database().ref().update(updates);
  window.alert('Saved!');
  table.removeChild(document.getElementById('save'));
  window.location.reload();
}