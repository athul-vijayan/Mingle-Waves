// Reference to the collection
const dataCollection = firestoredb.collection("MingleWaves Users Details");

// Form for adding data

const regNameInput = document.getElementById("regName");
const regUsernameInput = document.getElementById("regUsername");
const dobInput = document.getElementById('dob')

function addDataToFirestore1(){
    // e.preventDefault();
    console.log('eventlisteer called');
    console.log(regNameInput);
    console.log(regUsernameInput);
    console.log(dobInput);
        
   
}

function addDataToFirestore(){
    // e.preventDefault();
    console.log('eventlisteer called');
    dataCollection.add({
        name: regNameInput.value || 'unkonown',
        usename: regUsernameInput.value || 'unkonown' ,
        dob: dobInput.value || 'unkonown'
    }).then((returnedData) => {
        console.log(returnedData);
        nameInput.value = "";
        emailInput.value = "";
        
    }).catch((error)=>{
        console.error();
    });
    window.location.href='../Chat List/chatlist.html'

}
