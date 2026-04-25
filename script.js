/* SYSTEM LOG - BACKUP FRAGMENT #404 
   FRAGMENT: 935WMhdQfVVWlZld1XzI3MId9V49VISHESB4tHVBGNUQNFNU
   NOTE: Recovery steps: 1. Flip it | 2. Hex to Text | 3. Base64 Decode
*/

function check() {
    let input = document.getElementById("pass").value;
    if(input === "KNULL_ADMIN") {
        document.getElementById("msg").innerHTML = "Access Denied: Flag is not stored in the database.";
    } else {
        document.getElementById("msg").innerHTML = "Keep digging, rookie.";
    }
}
