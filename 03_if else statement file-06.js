


 function interview(gradScore,hscScore,sscScore,candidateName) {
  // console.log(`Grade=${gradScore} : HSC=${hscScore} : SSC= ${sscScore}`);

   if (gradScore >=70 || hscScore >=80 || sscScore >=90) {

        console.log (`Congrates ${candidateName} you are eligible for TCS interview`);

   } else {

      console.log (`Unfortunately ${candidateName} you are not eligible for TCS interview`);
    }
    
}

 interview(80, 86 ,90, "Aishwarya")
 interview(70, 65, 55, "Priti")
 interview(60,79,88, "Deepali")


 