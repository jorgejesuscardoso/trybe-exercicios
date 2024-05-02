char = open("personagens.txt", mode="w")

char.write("Gandalf\n")
char.write("Aragorn\n")
char.write("Legolas\n")

print("Ironman", file=char)

more_chars = ["Hulk\n", "Thor\n", "Capitão América\n"]

char.writelines(more_chars)

char.close()