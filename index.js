let date = document.querySelector("input");
button = document.querySelector("button");

let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

button.onclick = (check);

function check() {
  let today = new Date();
  let birthDate = new Date(date.value);

  // Birthday Date 
  let BirthdayDate = {
    birthYear: birthDate.getFullYear(),
    birthMonth: birthDate.getMonth() + 1,
    birthDate: birthDate.getDate()
  }
  
     // Current Date
  
     currentYear = today.getFullYear();
     currentMonth = today.getMonth() + 1;
     currentDate = today.getDate();

    checker(currentYear)
     
  let day,months,years;

  if (
    BirthdayDate.birthYear > currentYear ||
     ((BirthdayDate.birthMonth > currentMonth && BirthdayDate.birthYear > currentYear) ) ||
    (BirthdayDate.birthDate > currentDate && BirthdayDate.birthMonth == currentMonth && BirthdayDate.birthYear == currentYear))
    {
    window.alert("Not Born Yet")
  }

  years = currentYear - BirthdayDate.birthYear;

  if (BirthdayDate.birthMonth > currentMonth) {
    years--;
    months = (12 + currentMonth ) - BirthdayDate.birthMonth ;
  } else {
    months = currentMonth - BirthdayDate.birthMonth;
  }


  if (BirthdayDate.birthDate > currentDate) {
    months--;
    days = months[currentDate] + currentDate - BirthdayDate.birthDate;
  } else {
    days = currentDate - BirthdayDate.birthDate;
  }

  document.querySelector(".years span").innerHTML = years;
  document.querySelector(".months span").innerHTML = months;
  document.querySelector(".days span").innerHTML = days;

}

function checker(year) {

  if (currentYear % 4 == 0 || (currentYear % 100 == 0 && currentYear % 400 == 0)) {
    months[1] = 29;
  } else {
    months[1] = 28;
  }
}