import 'dart:convert';
import 'dart:developer';
import 'package:flutter/material.dart';
import 'package:neeti_app/profile_form.dart';
import 'package:neeti_app/profilee.dart';
import 'package:neeti_app/schemes.dart';
import 'package:http/http.dart' as http;
import 'package:neeti_app/signup.dart';

void main() {
  runApp(MaterialApp(
    title: "Hello World",
    home: Login(),
  ));
}
class LoginData {
  final Object user;
  final String token;

  const LoginData({
    required this.user,
    required this.token,
  });

  factory LoginData.fromJson(Map<String, dynamic> json) {
    return LoginData(
      user: json['user'],
      token: json['token'],
    );
  }
}


Future<LoginData> loginUser(email,password) async {
  final response = await http
      .post(Uri.parse('http://localhost:3000/users/login'),
        headers: <String, String>{
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: jsonEncode(<String, String>{
     "email":email,
     "password":password,
    }));

    print(response);
    print(jsonDecode(response.body));

  if (response.statusCode == 200) {
    // If the server did return a 200 OK response,
    // then parse the JSON.
    return LoginData.fromJson(jsonDecode(response.body));
  } else {
    // If the server did not return a 200 OK response,
    // then throw an exception.
    throw Exception('Failed to load album');
  }
}

class Login extends StatelessWidget {
  late Future<LoginData> authenticatedUser;
  @override
  Widget build(BuildContext context) {
     final usernameController=TextEditingController();
    final passwordController=TextEditingController();
    return Scaffold(
      appBar: AppBar(
        title: Text('SignIn'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Form(
          child: ListView(children: <Widget>[
            TextFormField(
              decoration: InputDecoration(labelText: 'Username'),
              textInputAction: TextInputAction.next,
               keyboardType: TextInputType.emailAddress,
              controller: usernameController,
            ),
            TextFormField(
              obscureText: true,
              decoration: InputDecoration(labelText: 'Password'),
              textInputAction: TextInputAction.next,
              keyboardType: TextInputType.visiblePassword,
              controller: passwordController,
            ),
            Container(
                alignment: Alignment.center,
                height: 50,
                margin: const EdgeInsets.fromLTRB(10, 40, 10, 0),
                child: ElevatedButton(
                  child: const Text(
                    'Login',
                    style: TextStyle(fontSize: 23),
                  ),
                  onPressed: () {
                    
                      print("on login called");
                       loginUser(usernameController.text,passwordController.text);
                        // if(authenticatedUser['token']){

                        // }
                          //print(jsonDecode(authenticatedUser));
                       
                    // Navigator.push(context,
                    //     MaterialPageRoute(builder: (context) => homepage()));
                    // print(nameController.text);
                    // print(passwordController.text);
                  },
                )),
            Container(
                alignment: Alignment.center,
                height: 50,
                padding: const EdgeInsets.fromLTRB(10, 10, 10, 0),
                child: ElevatedButton(
                  child: const Text(
                    'Register',
                    style: TextStyle(fontSize: 23),
                  ),
                  onPressed: () {
                    Navigator.push(context,
                        MaterialPageRoute(builder: (context) => signup()));
                    // print(nameController.text);
                    // print(passwordController.text);
                  },
                )),
          ]),
        ),
      ),
    );
  }
}