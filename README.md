# Netlife Ping

Netlife Research's digital receptionist

![image uploaded from ios](https://user-images.githubusercontent.com/4348783/29402148-310d1b06-8334-11e7-8694-97be0cd3ddce.jpg)

In this project we'll make a button board where each button is mapped to one of the company's employees. The idea is that when a visitor enters the reception, it's possible for this person to push the button of their Netlife contact, which then triggers a notification in Slack.

## Stuff we use for this project

* [Botkit](http://howdy.ai/botkit/) for sending messages to Slack (Could probably just use a regular http post)
* [Johnny Five](http://johnny-five.io/) for running Arduino with JavaScript on Node
* Administration in [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1geItk1iXyELsMgb76AH0Ze14juGdEu4mpx6RGjRmzCM/edit#gid=0)
* Arduino Uno (in Oslo) and Arduino Duemilanove (in Bergen)

## Get started

1. Install dependencies with `npm i`
2. Setup your logic board with Johnny Five
3. Configure a Slack webhook and add it to the .env file
4. Copy our Google Spreadsheet and fill it with your own stuff, the spreadsheet ID goes into the .env file
5. Run the server with ```npm run dev```

## TO DO:
* Figure out how to connect 60 buttons...
* Attach a WiFi-module, raspberry pi or something
* Do something cool with LEDs

![alt text](http://netliferesearch.com/assets/img/ansatte/anders.svg "Digital receptionist")

## Helpful links

* We needed to install a [driver](http://www.ftdichip.com/Drivers/VCP.htm) (like it's 1996) to get the Duemilanove up and running on El Capitan
