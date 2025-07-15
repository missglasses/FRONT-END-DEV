fun main() {

  val planets = mutableListOf("Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto")
  
  println("Primary list: ")
  println(planets)
  planets.remove("Pluto")
  planets.add("Earth")
  println("Random pick:")
  println(planets.random())
  println("Final list: ")
  println(planets)
}
