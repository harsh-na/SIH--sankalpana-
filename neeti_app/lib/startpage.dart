import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    title: "Hello World",
    home: const startpage(),
  ));
}

class startpage extends StatelessWidget {
  const startpage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
      title:const Text("Grameen Neeti"),
    ));
  }
}
