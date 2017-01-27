/**
 * # Variable declaration
**/

// some utility functions here
def printArray[K](array: Array[K]) = "Array(" + array.deep.mkString(", ") + ")"

// mutable values
var int = 1 // var is a mutable value
var int1: Int = 2 // type inference works but you can also add the type

// constants (inmutable, final, whatever you want to call it)
val const = 3 // this fails => z = 3

// desctructuring
var (d1, d2, d3, d4, d5, d6) = (1, 2, 3, 4, 5, 6)

/**
 * # Types
 * See http://www.scala-lang.org/api/current/scala/index.html for a complete list
**/

// ## Basics

println(s"(1).+(2) = ${(1).+(2)}") // i.e. Int has a method "+"
println(s"12345678.toString = ${12345678.toString}") // casting

// ## String
// In Scala they are Array[String] just like in javascript

val string = "string"
println(s"\nString (which can be literal too)")
println(s"$string * 3 = ${string * 3}") // repeat
println(s"$string.reverse = ${string.reverse}") // methods do not have to be called using parens

// ## Range
val range = 1 to 10 // inclusive range
val range1 = (0 until 10 by 2) // exclusive range
println(s"\nRange (comprehension)")
println(s"$range.filter(_ * 2) = ${range.map(_ * 2)}") // calling a method
println(s"$range1.filter(_ > 4) = ${range1.filter(_ > 5)}") // calling a method

// ## Array
println("\nArrays are mutable but cannot change size once created. But FP!")
println("Array elements can be of any type, but the Array's final type will be the lowest common denominator")

println(s"1 +: Array(2) = ${printArray(1 +: Array(2))}")
println(s"Array(2) :+ 3 = ${printArray(Array(2) :+ 3)}")
println(s"Array(1, 2, 3).indexOf(1) = ${Array(1, 2, 3).indexOf(1)}")
println(s"Array(1, 2, 3).indexOf(0) = ${Array(1, 2, 3).indexOf(0)}")
println(s"Array(1, 2) ++ Array(2, 3) = ${printArray(Array(1, 2) ++ Array(2, 3))}")
println(s"Array(1, 2, 3).diff(Array(2)) = ${printArray(Array(1, 2, 3).diff(Array(2)))}")

// ## List
val list = List(1, 2)
val list1 = List(3, 4)
val mutList = collection.mutable.ArrayBuffer(1, 2)
val mutList1 = collection.mutable.ArrayBuffer(3, 4)

println("\nLists are immutable, use List to create and (index) to get an element")
println(s"get $list = ${list(0)}")
println(s"concat $list::$list1 = ${list::list1}")
println(s"append $list :+ $list1 = ${list :+ list1}") // not eficient for immutable lists
println(s"prepend 0::$list = ${0::list}")
println(s"difference $list diff $list1 = ${$list diff $list1}")

// ## Mutable List
println("\nMutable lists with import collection.mutable package")

// ## Set
val set = Set(1, 2, 3, 3, 2, 1)
println("\nSet are immutable, and cannot have repeated elements")
println(s"Set(1, 2, 3, 3, 2, 1) = ${set}")
println("check existence by accessing values")
println(s"$set(0) = ${set(0)}")
println(s"$set(1) = ${set(1)}")
println("same operations as arrays: concat, diff, etc.")

// ## Map
val map = Map("one" -> 1, "two" -> 2, "three" -> 3)
val mapEl = map("one")
val mapOption = map.get("one")

println(s"$map")
println(s"$map(\"one\") = ${mapEl}")
println(s"$map.get(\"one\") = ${mapOption}")

// ## Function
def add(x: Int, y: Int): Int = {
  return x + y
}

def add1(x: Int, y: Int) = {
  x + y
}

def add2(x: Int, y: Int) = x + y

println(s"add($int, $int1) = ${add(int, int1)}")
println(s"add1($int, $int1) = ${add1(int, int1)}")
println(s"add2($int, $int1) = ${add2(int, int1)}")

// ## Anonymous functions
// (x: Int) => x * x // type is: Int => Int, e.g. gets an Int and returns an Int
println(s"((x: Int) => x * x)(2) = ${((x: Int) => x * x)(2)}")

/**
 * Control flow
**/

// if else blocks
if (true)
  println("One line if")

if (false) {
  println("if block")
} else {
  println("else block")
}

// pattern matching
var matchValue = 0

matchValue match {
  case 1 => println("one matched")
  case 2 => println("two matched")
  case _ => println("none matched")
}

// while
var whileIndex, whileSum = 0

while (whileIndex < 10) {
  whileSum += whileIndex
  whileIndex += 1
}

println("whileSum = $whileSum")
println("whileIndex = $whileIndex")

// for using a range
var forSum = 0

for (forIndex <- 0 until 10) {
  forSum += forIndex
}

println("forSum = $forSum")
println("forIndex = $forIndex")

/**
 * # Assignment
**/

// ## Destructuring
def swap(x: String, y: String) = (y, x)
println("swap(\"hello\", \"world\") = " + swap("hello", "world"))

// ## with control flow
val ternaryCondition = false
val ternaryExpression =
  if (ternaryCondition == true) "1st ternary"
  else if(ternaryCondition == false) "2nd ternary"
  else "3rd ternary"

println("ternaryExpression", ternaryExpression)

// ## Classes
// To be continue

