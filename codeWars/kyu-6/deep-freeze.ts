// https://www.codewars.com/kata/52ed80dfe7bf9ae61d000056/javascript

function deepFreeze(obj: any) {
  Object.freeze(obj);
  for (const key in obj) {
    if (typeof obj[key] === "object") deepFreeze(obj[key]);
  }
}
