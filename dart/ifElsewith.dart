void main() {
  int number = 18;

  String output; 

  if (number % 10 == 0) {
    output = "It is a multiple of 10"; 
  } else if (number % 5 == 0) {
    output = "It is a multiple of 5";
  } else {
    output = "it some wrong number"; 
  }

  print(output);
}

