function marriageEligibility(gender, age) {
  console.log(` Gender= ${gender} , Age= ${age}`);
  if (age <= 0 || age == null || age == undefined || isNaN(age)) {
    console.log(` You have entered ivalid input`);
  } else {
    if ((gender == "Male" && age >= 21) || (gender == "Female" && age >= 18)) {
      console.log(` You are eligible for marriage`);
    } else {
      console.log(` You are not eligible for marriage`);
    }
  }
}
marriageEligibility("Male", 17);
marriageEligibility("Male", 25);
marriageEligibility("Female", 28);
marriageEligibility("Female", 16);
marriageEligibility("Other", 35);
marriageEligibility("Other", 41);
