/*
  Your job is to write a function which increments a string, to create a new string.

  If the string already ends with a number, the number should be incremented by 1.
  If the string does not end with a number. the number 1 should be appended to the new string.
  Examples:

  foo -> foo1

  foobar23 -> foobar24

  foo0042 -> foo0043

  foo9 -> foo10

  foo099 -> foo100

  Attention: If the number has leading zeros the amount of digits should be considered.
*/

function incrementString (str) {
  const pattern = /\d+$/g
  const number = str.match(pattern)

  if (!number) {
    return str + "1"
  }

  const incrementNumber =  String((+number[0] + 1)).padStart(number[0].length, 0)


  return str.replace(pattern, incrementNumber)
}


incrementString("foobar000")// foobar001
incrementString("foobar999")// foobar1000
incrementString("foobar00999")// foobar01000
incrementString("foo")// foo1
incrementString("foobar001")// foobar002
incrementString("foobar1")// foobar2
incrementString("1")// 2
incrementString("009")// 010
incrementString("fo99obar99"// fo99obar100