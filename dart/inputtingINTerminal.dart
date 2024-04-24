import 'dart:io';

void main() {
  // Prompt the user to enter some text
  stdout.write('Please enter something: ');

  // Read the input from the user.
  String? input = stdin.readLineSync();

  // Output the input back to the terminal with a message
  print('You entered: $input');
}
