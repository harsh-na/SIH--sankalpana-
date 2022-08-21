import 'package:flutter/material.dart';
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
          title: Text("Grameen Neeti"),
        ),
        body: Row(
          children: [
            Row(
              children: [
                Column(
                  children: [
                    Container(
                        height: 240,
                        width: 180,
                        margin: const EdgeInsets.fromLTRB(100, 100, 7, 0),
                        child: (Image.asset(
                          "assets/Rectangle 34.png",
                          height: 400,
                          width: 400,
                        ))),
                    ElevatedButton(
                      style: ButtonStyle(
                        fixedSize:
                            MaterialStateProperty.all(const Size(250, 2)),
                        shape: MaterialStateProperty.all(
                          RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(30),
                          ),
                        ),
                      ),
                      onPressed: () {},
                      child: const Text(
                        'Factories',
                        style: TextStyle(
                            fontSize: 22,
                            fontWeight: FontWeight.w500,
                            color: Colors.white),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ],
        ));
  }
}
