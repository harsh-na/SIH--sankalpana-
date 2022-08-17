import 'package:flutter/material.dart';
import 'package:neeti_app/profile_form.dart';
import 'package:neeti_app/profilee.dart';
import 'package:neeti_app/schemes.dart';

void main() {
  runApp(MaterialApp(
    title: "Hello World",
    home: login(),
  ));
}

class login extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Login Page"),
        ),
        body: Container(
          child: IconButton(
              icon: const Icon(
                Icons.arrow_forward,
                size: 28,
              ),
              onPressed: () {
                Navigator.push(context,
                    MaterialPageRoute(builder: (context) => profile()));
              }),
        ));
  }
}
