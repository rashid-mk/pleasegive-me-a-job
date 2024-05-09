// Array of skills
const skills = ["HTML", "CSS", "JavaScript", "Node.js", "Python", "Java", "C++"];
// Get the skill list element
const skillList = document.getElementById("skillList");
// Loop through the skills array and create list items
skills.forEach(skill => {
const li = document.createElement("li");
li.textContent = skill;
skillList.appendChild(li);
});
// Add an event listener to the "Hire Me Now" button
const hireBtn = document.getElementById("hireBtn");
hireBtn.addEventListener("click", () => {
alert("Thank you for your interest! I'll be in touch soon.");
});
