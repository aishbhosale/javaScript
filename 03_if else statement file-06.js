


 function interview(gradScore,hscScore,sscScore,candidateName) {

   if (gradScore <=70 || hscScore <=80 || sscScore <=90) {

        console.log (` Congrates ${candidateName} you are eligible for TCS interview`);

   } else {

      console.log (`Unfortunately  you are not eligible for interview`)
    }
    
}

 interview(80, 86 ,90, "Aishwarya")
 interview(69, 65, 55, "Deepali")


