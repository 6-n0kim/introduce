var birthY = prompt("태어난 연도를 입력하세요.", "YYYY");
var currentY= 2022;
var age;
age = currentY - birthY + 1;
document.write("현재 년도는 <b><big>" + currentY +"</big></b>이며 <br>");
document.write("나이는 <b><big>" + age + "세</big></b>입니다.");
