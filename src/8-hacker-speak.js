export const hackerSpeak = (words) => {
  return words.replace(/a/gi, "4").replace(/e/gi, "3").replace(/i/gi, "1").replace(/o/gi, "0").replace(/s/gi, "5")


}


// let replacedA = words.replace(/a/gi, "4")
//   let replacedE = replacedA.replace(/e/gi, "3")
//   let replacedI = replacedE.replace(/i/gi, "1")
//   let replacedO = replacedI.replace(/o/gi, "0")
//   let replacedS = replacedO.replace(/s/gi, "5")
//   return replacedS