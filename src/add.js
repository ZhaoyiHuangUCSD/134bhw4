var form = document.getElementById('newIssue');

form.addEventListener('submit', function(e){
  e.preventDefault();
  localStorage.setItem("item" + document.getElementById('newName').value, JSON.stringify({
    'issueName':document.getElementById('newName').value,
    'issueType':document.getElementById('newType').value,
    'issueDescription':document.getElementById('newDescription').value,
    'issueFile':document.getElementById('newFile')
  }));
})
/*
function insertData () {
  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyDylU22y4KBSC7NtdPcurxMu-1uJid67i0',
    authDomain: 'bhw4-af7bc.firebaseapp.com',
    databaseURL: 'https://bhw4-af7bc.firebaseio.com',
    projectId: 'bhw4-af7bc',
    storageBucket: '',
    messagingSenderId: '435052500774'
  }
  var formData = {
    'issueName': document.getElementById('newName').value,
    'issueType': document.getElementById('newType').value,
    'issueDescription': document.getElementById('newDescription').value,
    'issueFile': document.getElementById('newFile').value
  }
  form.submit(function (e) {
    window.alert('Here')
    e.preventDefault()
    firebase.initializeApp(config)
    firebase.database().ref('/issues').push(formData)
  })*/
}
