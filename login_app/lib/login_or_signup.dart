import 'package:flutter/material.dart';

import './login.dart';
import './signup.dart';

class LoginOrSignup extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          Center(
            child: MaterialButton(
              child: const Text("Login"),
              onPressed: () {
               Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => Login()),
                );
              },
            ),
          ),
          Center(
            child: MaterialButton(
              child: Text("Sign up"),
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => Signup()),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}