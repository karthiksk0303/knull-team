cat <<EOF > script.js
/* SYSTEM LOG - BACKUP FRAGMENT #404 
   FRAGMENT: 9353754d686457516656575a6c6431587a49334d49643956495348455342487442464e514e4655
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
EOF
