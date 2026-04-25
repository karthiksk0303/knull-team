cat <<EOF > script.js
/* SYSTEM LOG - BACKUP FRAGMENT #404 
   FRAGMENT: 55464e4f51554e465648744253454849495639494d33497a5831646c5a575666515764684d573539
   NOTE: Recovery steps: 1. Hex to Text | 2. Base64 Decode
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
