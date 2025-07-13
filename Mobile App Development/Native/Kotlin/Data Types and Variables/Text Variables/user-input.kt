//user-input
fun main() {
  println("Please type your name and hit Enter.")

  
  val myName = readLine() //<---
  println("Your name is $myName!")
}

//in terminal: kotlinc yourFile.kt -include-runtime -d yourFile.jar
//java -jar yourFile.jar
