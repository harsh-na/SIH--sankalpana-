import 'package:flutter/material.dart';
import 'package:neeti_app/profilee.dart';
import 'package:neeti_app/signup.dart';
import 'login.dart';


void main() {
  runApp(MaterialApp(
    title: "Hello World",
    home: startpage(),
  ));
}

class startpage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          "Grameen Neeti",
          style: TextStyle(
            fontSize: 30,
            fontWeight: FontWeight.w500,
          ),
        ),
      ),
      body: Center(
        child: Column(children: <Widget>[
          Padding(
            padding: EdgeInsets.fromLTRB(50, 150, 50, 20),
            child: ClipRRect(
              borderRadius: BorderRadius.circular(30.0),
              child: Image.asset("assets/logo.jpeg"),
            ),
          ),
          ElevatedButton(
            style: ButtonStyle(
              fixedSize: MaterialStateProperty.all(const Size(200, 2)),
              shape: MaterialStateProperty.all(
                RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(30),
                ),
              ),
            ),
            onPressed: () {
              Navigator.push(
                  context, MaterialPageRoute(builder: (context) => profile()));
            },
            child: const Text(
              'Lets Go',
              style: TextStyle(
                  fontSize: 22,
                  fontWeight: FontWeight.w500,
                  color: Colors.white),
            ),
          ),
        ]),
      ),
    );
  }
}
