import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Women',
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          leading: Builder(
            builder: (BuildContext context) {
              return IconButton(
                icon: const Icon(Icons.arrow_back),
                onPressed: () {
                  Scaffold.of(context).openDrawer();
                },
                tooltip: MaterialLocalizations.of(context).openAppDrawerTooltip,
              );
            },
          ),
          title: Text('Women'),
          actions: <Widget>[
            IconButton(
              icon: Icon(
                Icons.mic,
                color: Colors.white,
              ),
              onPressed: () {
                // do something
              },
            ),
            IconButton(
              icon: Icon(
                Icons.search,
                color: Colors.white,
              ),
              onPressed: () {
                // do something
              },
            ),
          ],
        ),
        body: Column(children: [
          Row(
            children: [
              Container(
                height: 300,
                width: 170,
                margin: const EdgeInsets.fromLTRB(15, 10, 5, 10),
                child: Image.asset(
                  "assets/Images/Rectangle 31.png",
                  height: 300,
                ),
              ),
              Container(
                height: 300,
                width: 170,
                margin: const EdgeInsets.fromLTRB(15, 10, 5, 10),
                child: Image.asset(
                  "assets/Images/Rectangle 159.png",
                  height: 300,
                ),
              ),
            ],
          ),
          Row(
            children: [
              Container(
                height: 300,
                width: 170,
                margin: const EdgeInsets.fromLTRB(15, 10, 5, 10),
                child: Image.asset(
                  "assets/Images/Rectangle 161.png",
                  height: 300,
                ),
              ),
              Container(
                height: 300,
                width: 170,
                margin: const EdgeInsets.fromLTRB(15, 10, 5, 10),
                child: Image.asset(
                  "assets/Images/Rectangle 163.png",
                  height: 300,
                ),
              ),
            ],
          ),
        ]));
  }
}
