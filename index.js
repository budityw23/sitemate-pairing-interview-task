// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  const [hours, minutes] = time.split(":").map(Number);

  if (hours === 0 && minutes === 0) return "midnight";
  if (hours === 12 && minutes === 0) return "midday";

  const numberToWords = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "quarter",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    21: "twenty one",
    22: "twenty two",
    23: "twenty three",
    24: "twenty four",
    25: "twenty five",
    26: "twenty six",
    27: "twenty seven",
    28: "twenty eight",
    29: "twenty nine",
    30: "half",
  };

  let hour = hours > 12 ? hours - 12 : hours;
  console.log("hour", hour);
  let hourWord = numberToWords[hour];

  console.log("hourWord", hourWord);

  if (minutes === 0) {
    return `${hourWord} o'clock`;
  }

  if (minutes <= 30) {
    let minutesToWord = numberToWords[minutes];
    return `${minutesToWord} past ${hourWord}`;
  }

  if (minutes > 30) {
    hour += 1;
    let hourWord = numberToWords[hour];
    let minutesLeft = 60 - minutes;
    let minutesToWord = numberToWords[minutesLeft];
    return `${minutesToWord} to ${hourWord}`;
  }
}

module.exports = { convertTimeToWords };
