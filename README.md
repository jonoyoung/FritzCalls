# FritzCalls
FritzCalls is an iOS app that I made to pull phone call data from a FritzBox router and display it neatly in an app. This was created
so that my family and I could see who has recently rung our home phone without needing to login to our router’s admin page everytime to
check.

I created the app using ‘react-native’, so it could theoretically run on an Android device. However this was purpose made for iOS and
to be displayed on an iPad.

The main purpose of this application was to test out iOS development and have a bit of fun with some networking. This is all for
educational purposes so don't take it too seriously.

## Install
You would be fairly lucky to get this to work properly. This requires a FritzBox router to function otherwise the app won't load.
However open the 'ios/FritzCalls.xcodeproj' file in XCode and run it through the simulator if you would like to test it.

## Config
In the file: 'nodejs-assets/nodejs-project/package.json' You can specify the settings for the fritz box. Changing the username,
password and server would be the most common changes, so make sure this is all correct before starting the app.
```
"options": {
	"protocol": "http",
	"server": "fritz.box",
	"username": "admin",
	"password": "admin",
	"callmonitorport": "1012",
	"debug": false
},
```

## Screenshots
Here are some screenshots to show what the app looks like running on a simulator. I was going for a simple and clean design approach
when creating this app. Much like alot of the work that I create, I like ease of use and clutter free designs.

<img src="https://i.imgur.com/tfMocGG.png" width="32%" />
<img src="https://i.imgur.com/sx7pSkB.png" width="32%"/>
<img src="https://i.imgur.com/ocS9ZMF.png" width="32%"/>
