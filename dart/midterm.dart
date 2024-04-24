import 'dart:io';

class Email {
  String sender;
  String recipient;
  String subject;
  String body;
  bool isDeleted;

  Email({
    required this.sender,
    required this.recipient,
    required this.subject,
    required this.body,
    this.isDeleted = false,
  });

  @override
  String toString() {
    if (isDeleted) {
      return "This email has been deleted.";
    }
    return "From: $sender\nTo: $recipient\nSubject: $subject\nBody: $body\n";
  }
}

class EmailApp {
  List<Email> inbox = [
    Email(
        sender: "alice@example.com",
        recipient: "user@example.com",
        subject: "Hello!",
        body: "How are you?"),
    Email(
        sender: "bob@example.com",
        recipient: "user@example.com",
        subject: "Meeting Reminder",
        body: "Don't forget our meeting."),
    Email(
        sender: "carol@example.com",
        recipient: "user@example.com",
        subject: "See you soon",
        body: "Looking forward to our lunch."),
  ];

  void displayInbox() {
    print("Inbox:");
    for (var i = 0; i < inbox.length; i++) {
      if (!inbox[i].isDeleted) {
        print("${i + 1}. ${inbox[i]}");
      }
    }
  }

  void sendEmail() {
    print("Compose a new email:");
    stdout.write("To: ");
    String recipient = stdin.readLineSync()!;
    stdout.write("Subject: ");
    String subject = stdin.readLineSync()!;
    stdout.write("Body: ");
    String body = stdin.readLineSync()!;
    inbox.add(Email(
        sender: "user@example.com",
        recipient: recipient,
        subject: subject,
        body: body));
    print("Email sent!");
  }

  void moveToTrash() {
    print("Enter the number of the email you want to delete:");
    displayInbox();
    int emailNumber = int.parse(stdin.readLineSync()!);
    if (emailNumber - 1 < inbox.length) {
      inbox[emailNumber - 1].isDeleted = true;
      print("Email moved to trash.");
    } else {
      print("Invalid email number.");
    }
  }

  void startApp() {
    while (true) {
      print("\nWelcome to Email Application");
      print("1. Check received emails");
      print("2. Send an email");
      print("3. Move an email to trash");
      print("4. Exit");
      stdout.write("Enter your choice: ");
      String? input = stdin.readLineSync();

      switch (input) {
        case '1':
          displayInbox();
          break;
        case '2':
          sendEmail();
          break;
        case '3':
          moveToTrash();
          break;
        case '4':
          print("Exiting application.");
          return;
        default:
          print("Invalid choice, please try again.");
          break;
      }
    }
  }
}

void main() {
  stdout.write("Input password: ");
  String password = stdin.readLineSync()!;
  if (password == "202139045") {
    EmailApp app = EmailApp();
    app.startApp();
  } else {
    print("You are not an authorized user.");
  }
}
 // hw1