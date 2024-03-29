class Notebook {
  String specs;
  String modelName;
  String manufacturer;

  Notebook(this.specs, this.modelName, this.manufacturer);

  void powerOn() {
    print('$modelName by $manufacturer is powering on...');
  }

  void powerOff() {
    print('$modelName is powering off...');
  }

  void launchSoftware(String softwareName) {
    print('Launching $softwareName on $modelName...');
  }
}

void main() {
  Notebook myNotebook = Notebook('Pro 13', 'Macbook Pro', 'Apple Inc.');

  myNotebook.powerOn();
  myNotebook.launchSoftware('VS Code Editor');
  myNotebook.powerOff();
}
