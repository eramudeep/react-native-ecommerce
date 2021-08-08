# react-native-redux-starter
A starter boilerplate for a mobile app using React Native and Redux.
## Requirements
- [Node](https://nodejs.org) `6.x` or newer
- [React Native](http://facebook.github.io/react-native/docs/getting-started.html) for development
- [Xcode](https://developer.apple.com/xcode/) for iOS development
- [Android Studio](https://developer.android.com/studio/index.html) for Android development
- [Android SDK](https://developer.android.com/sdk/) `23.0.1` or newer for Android development
- [Android Marshmallow](https://www.android.com/versions/marshmallow-6-0/) or newer on your Android device to test properly

See [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) to install requirement tools.

## Stack
- [React JS](https://reactjs.org/) is a JavaScript library
- [React Native](https://facebook.github.io/react-native/) `0.63.2` for building native apps using react
- [Redux](https://redux.js.org) `4.0.5` a predictable state container for Javascript apps
- [Redux-persist](https://github.com/rt2zz/redux-persist) `6.0.0` Persist and rehydrate a redux store. Javascript apps
- [Alert](https://github.com/testshallpass/react-native-dropdownalert) `4.3.0` An alert to notify users 
- [Babel](http://babeljs.io/) `7.2.3` for ES6+ support
- [Bottom-Tabs](https://github.com/react-navigation/react-navigation) `5.11.11` for Bottom Navigations 
- [Navigation for React Native](https://reactnavigation.org/) a router based on new React Native Navigation API

## Libraries
 - [@react-native-community/masked-view](https://github.com/react-native-community/react-native-masked-view) `0.1.10`
 - [@react-navigation/native](https://github.com/react-navigation/react-navigation) `5.7.3`
 - [@react-navigation/stack](https://github.com/react-navigation/react-navigation) `5.9.0`
 - [Bottom-Tabs](https://github.com/react-navigation/react-navigation) `5.11.11` 
 - [react-native-gesture-handler](https://github.com/software-mansion/react-native-gesture-handler) `1.7.0`
 - [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated) `1.13.0`
 - [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context) `3.1.7`
 - [react-native-screens](https://github.com/software-mansion/react-native-screens) `2.10.1`
 - [react-redux](https://react-redux.js.org/) `7.2.1`
 - [redux](https://redux.js.org/) `4.0.5`
 - [redux-saga](https://redux-saga.js.org/) `1.1.3`
 - [Alert](https://github.com/testshallpass/react-native-dropdownalert) `4.3.0` 
 - [Redux-persist](https://github.com/rt2zz/redux-persist) `6.0.0`
 - [Touch-ripple](https://github.com/noddy1996/react-native-touch-ripple) `0.0.0`
 
## Get Started


#### 1. Installation

On the command prompt run the following commands

```sh
$ git clone https://github.com/noddy1996/react-native-redux-starter.git

$ cd react-native-redux-starter/

$ npm install
```
#### 2. Simulate for iOS
```sh
$ cd ios && pod install
```

**Method One**

*	Open the project in Xcode from **ios/react_native_redux_starter.xcodeproj**.

*	Hit the play button.


**Method Two**

*	Run the following command in your terminal.

```sh
$ react-native run-ios
```

#### 3. Simulate for Android

*	Make sure you have an **Android emulator** installed and running.

*	Run the following command in your terminal.

```sh
$ react-native run-android
```
#### 4. How to Decide the Navigation

*	Navigation is decided By  **navigationTypeTabs** Key definend in [app.json](./app.json).
*	**navigationTypeTabs** :  true, will give you the bottom Tabs and vice versa.
## Debugger
- [React Native Debugger](https://github.com/jhen0409/react-native-debugger) : The standalone app based on official debugger of React Native, and includes React Inspector / Redux DevTools
- [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension) `2.13.5`

## Rename Project
Rename react-native app with just one command

![react-native-rename](https://cloud.githubusercontent.com/assets/5106887/24444940/cbcb0a58-149a-11e7-9714-2c7bf5254b0d.gif)

> This package assumes that you created your react-native project using `react-native init`.

#### Installation
```
yarn global add react-native-rename
or
npm install react-native-rename -g
```

Switch to new branch first
>better to have back-up

```
git checkout -b rename-app
```

#### Usage
```
react-native-rename <newName>
```

> With custom Bundle Identifier (Android)
```
react-native-rename <newName> -b <bundleIdentifier>
```

#### Example
```
react-native-rename "Travel App"
```
> With custom Bundle Identifier
```
react-native-rename "Travel App" -b com.junedomingo.travelapp
```


