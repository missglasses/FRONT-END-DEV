fun main() {
  println("-- 1st for loop output --")
  for (i in 5 downTo 1) {
    println("i = $i")
  }
  println("\n-- 2nd for loop output --")
  for (j in 1 until 5) {
    println("j = $j")
  }
  println("\n-- 3rd for loop output --")
  for (k in 1..5 step 2) {
    println("k = $k")
  }
}

/*-- 1st for loop output --
i = 5
i = 4
i = 3
i = 2
i = 1

-- 2nd for loop output --
j = 1
j = 2
j = 3
j = 4

-- 3rd for loop output --
k = 1
k = 3
k = 5*/
