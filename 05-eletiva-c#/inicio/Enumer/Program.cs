﻿/* namespace namespaceExample;

enum CardinalPoints
{
  Norte,
  Sul,
  Leste,
  Oeste
};

class Program
{
  public static void Main()
  {
    CardinalPoints direction = CardinalPoints.Norte;
    Console.WriteLine("Ponto Cardeal: " + direction);
  }
} */

// Variáveis com tipo implicito 

  //esta variável será compilada como string
var school = "Trybe";

//esta variável será compilada como int
var semester = 1;

//esta variável será compilada como um tipo anônimo
var student = new { name = "Jorge", age = 30 };

Console.WriteLine("Olá! Me chamo " + student.name + " " +
                  "sou um estudante da escola " + school + " " +
                  "estou no " + semester + "º semestre " +
                  "e tenho " + student.age + " anos"); 