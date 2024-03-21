void printPattern(int rows) {

  for (int i = 1; i <= rows; i++) {
    for (int j = 1; j <= i; j++) {
      print('*');
    }
    print('');
  }


  for (int i = rows - 1; i >= 1; i--) {
    for (int j = 1; j <= i; j++) {
      print('*');
    }
    print('');
  }
}

void main() {
  printPattern(5); 
}
