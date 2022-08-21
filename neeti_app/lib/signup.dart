import 'package:flutter/material.dart';
import 'package:neeti_app/homepage.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

void main() => runApp(const signup());

class SignupData {
 final Object user;
  final String token;

  const SignupData({
   required this.user,
    required this.token,
  });

  factory SignupData.fromJson(Map<String, dynamic> json) {
    return SignupData(
      user:json['user'],
      token: json['token'],
    );
  }
}

Future<SignupData> signUpUser(name,email,password) async {
  final response = await http
      .post(Uri.parse('http://localhost:3000/users'),
        headers: <String, String>{
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: jsonEncode(<String, String>{
    "name":name,
    "email":email,
    "password":password
    }));

    print(response);
    print(jsonDecode(response.body));

  if (response.statusCode == 201) {
    // If the server did return a 200 OK response,
    // then parse the JSON.
    return SignupData.fromJson(jsonDecode(response.body));
  } else {
    // If the server did not return a 200 OK response,
    // then throw an exception.
    throw Exception('Failed to load album');
  }
}



class signup extends StatelessWidget {
  const signup({Key? key}) : super(key: key);

  static const String _title = 'Grameen Neeti';

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: _title,
      home: Scaffold(
        appBar: AppBar(
            title: const Text(
          _title,
          style: TextStyle(fontSize: 25),
        )),
        body: const MyStatefulWidget(),
      ),
    );
  }
}



class MyStatefulWidget extends StatefulWidget {
  const MyStatefulWidget({Key? key}) : super(key: key);

  @override
  State<MyStatefulWidget> createState() => _MyStatefulWidgetState();
}

class _MyStatefulWidgetState extends State<MyStatefulWidget> {
  final  nameController = TextEditingController();
  final passwordController = TextEditingController();
  final emailController = TextEditingController();
  String dropdownvalue = 'Language';
  var items = [
    'Language',
    'English',
    'हिंदी',
  ];

  @override
  Widget build(BuildContext context) {
    return Padding(
        padding: const EdgeInsets.fromLTRB(20, 70, 20, 20),
        child: Form(
          child: ListView(children: <Widget>[
            TextFormField(
              decoration: InputDecoration(labelText: 'Name'),
              textInputAction: TextInputAction.next,
               keyboardType: TextInputType.name,
              controller: nameController,
            ),
            TextFormField(
              decoration: InputDecoration(labelText: 'Email'),
              textInputAction: TextInputAction.next,
               keyboardType: TextInputType.emailAddress,
              controller: emailController,
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
                padding: const EdgeInsets.fromLTRB(10, 10, 10, 0),
                child: ElevatedButton(
                  child: const Text(
                    'Register',
                    style: TextStyle(fontSize: 23),
                  ),
                  onPressed: () {
                    // Navigator.push(context,
                    //     MaterialPageRoute(builder: (context) => signup()));
                    print('signup called');
                    bool executed=false;

                    if(!executed){
                       signUpUser(nameController.text,emailController.text,passwordController.text);
                      executed=true;
                    }
                                       
                    // print(nameController.text);
                    // print(passwordController.text);
                  },
                )),
          ]),
        ));
  }
}
