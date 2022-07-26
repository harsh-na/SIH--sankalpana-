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
                icon: const Icon(Icons.menu),
                onPressed: () {
                  Scaffold.of(context).openDrawer();
                },
                tooltip: MaterialLocalizations.of(context).openAppDrawerTooltip,
              );
            },
          ),
          title: Text('Schemes'),
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
                height: 140,
                width: 180,
                margin: const EdgeInsets.fromLTRB(8, 30, 10, 5),
                child: Image.asset("assets/Images/Rectangle 25.png"),
              ),
              Container(
                height: 140,
                width: 180,
                margin: const EdgeInsets.fromLTRB(3, 30, 10, 6),
                child: Image.asset("assets/Images/Rectangle 163.png"),
              ),
            ],
          ),
          Row(
            children: [
              Container(
                height: 140,
                width: 180,
                margin: const EdgeInsets.fromLTRB(8, 15, 10, 5),
                child: Image.asset("assets/Images/Rectangle 159.png"),
              ),
              Container(
                height: 140,
                width: 180,
                margin: const EdgeInsets.fromLTRB(3, 15, 10, 6),
                child: Image.asset("assets/Images/Rectangle 161.png"),
              ),
            ],
          ),
          Row(
            children: [
              Container(
                height: 140,
                width: 180,
                margin: const EdgeInsets.fromLTRB(8, 15, 10, 5),
                child: Image.asset("assets/Images/Rectangle 35.png"),
              ),
              Container(
                height: 140,
                width: 180,
                margin: const EdgeInsets.fromLTRB(3, 15, 10, 6),
                child: Image.asset("assets/Images/farmer.jpg"),
              ),
            ],
          ),
          Row(
            children: [
              Container(
                height: 140,
                width: 180,
                margin: const EdgeInsets.fromLTRB(8, 15, 10, 5),
                child: Image.asset("assets/Images/Rectangle 33.png"),
              ),
              Container(
                height: 140,
                width: 180,
                margin: const EdgeInsets.fromLTRB(3, 15, 10, 6),
                child: Image.asset("assets/Images/Rectangle 34.png"),
              ),
            ],
          ),
        ]));
  }
}
