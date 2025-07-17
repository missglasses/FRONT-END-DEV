fun main() {
  var momaPaintings = mutableMapOf("Les Demoiselles d'avignon" to "Pablo Picasso", "The Starry Night" to "Vincent Van Gogh", "Mona Lisa" to "Leonardo Da Vinci", "The Persistance of Memory" to "Salvador Dali")

  if (!momaPaintings.containsValue("Claude Monet")) {
    //to put
    momaPaintings.put("Water Lillies", "Claude Monet")
  }

    // remove
  momaPaintings.remove("Mona Lisa")
  println(momaPaintings) /*{Les Demoiselles d'avignon=Pablo Picasso, The Starry Night=Vincent Van Gogh, The Persistance of Memory=Salvador Dali, Water Lillies=Claude Monet}*/
}
