// 1️⃣ Working with Objects
let student = { name: "Asma", grade: "A", subject: "Science" };
document.getElementById("objectDisplay").innerHTML =
  "Student: " + student.name + ", Grade: " + student.grade;

// 2️⃣ Working with Arrays
let fruits = ["Apple", "Banana", "Mango", "Orange"];
document.getElementById("arrayDisplay").innerHTML =
  "Fruits: " + fruits.join(", "); // join() makes them into a single string

fruits.pop(); // removes the last item (Orange)
document.getElementById("arrayAfterPop").innerHTML =
  "After pop(): " + fruits.join(", ");

// 3️⃣ Copy text from one node to another
function copyText() {
  let sourceText = document.getElementById("source").innerHTML;
  document.getElementById("target").innerHTML = sourceText;
}
