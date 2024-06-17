function calculate() {
  let day;
  let month;
  let year;

  // let sample=cd.value;
  // console.log(sample);
  let currentday = parseInt(cd.value.slice(8, 10));
  let currentmonth = parseInt(cd.value.slice(5, 7));
  let currentyear = parseInt(cd.value.slice(0, 4));

  // console.log(currentday,currentmonth,currentyear);

  let birthday = parseInt(dob.value.slice(8, 10));
  let birthmonth = parseInt(dob.value.slice(5, 7));
  let birthyear = parseInt(dob.value.slice(0, 4));

  // console.log(birthday,birthmonth,birthyear);

  if (currentday >= birthday) {
    day = currentday - birthday;
  } else {
    day =
      currentday + new Date(currentyear, currentmonth, 0).getDate() - birthday; // how many days
    currentmonth--;
  }

  if (currentmonth >= birthmonth) {
    month = currentmonth - birthmonth;
  } else {
    month = currentmonth + 12 - birthmonth;
    currentyear--;
  }

  year = currentyear - birthyear;

  if (year < 0) {
    ageText.innerHTML = "Bhai kya mazak kar rahe yaar ,sahi date dalo";
  } else {
    ageText.innerHTML = year + "  year, " + month + "  month,  " + day + "  day.";
  }
}
