# Fix Your Posture 🪑

## Instructions

- Fork and clone [this repository](https://github.com/JoinCODED/Task-RN-M6-LocalNotifications) to your `Development` folder.

1. Install the `notifee` package.

```shell
expo install @notifee/react-native
```

2. Add the `notifee` package to your `app.json` file.

```json
{
  "plugins": ["@notifee/react-native"]
}
```

3. Run this command in your terminal:

```shell
expo prebuild
```

It will ask for a package name, enter: `Posture.App`.

4. Run this command in your terminal depending on your platform:

   - iOS: `expo build:ios`
   - Android: `expo build:android`

5. Import the `notifee` package.

```js
import notifee, { EventType } from '@notifee/react-native';
```

6. Create a trigger notification that runs every 40 mins.
7. Create an android channel for the notification.
8. Pass the android ios and android object.
9. In the android object, add the channel. and the small icon.
10. Make sure that clicking the notification will open the app.
11. Pass this function to the start button.

### 🍋 Stop Notifications

Add a cancel button that cancels the notification trigger.

Hint: [documentation](https://notifee.io/docs/react-native/notifications/notification-triggers)

### 🤼‍♂️ Customize Notifications

Customize the notification by adding the `assets/posture.gif` image to the notification.

Hint: [documentation](https://notifee.io/docs/react-native/notifications/notification-customization)

### 🌶 Changing The Sound

In the assets folder, you have a sound file called `sound.wav`. Change the notification sound to `sound.wav`.

Hint: [documentation](https://notifee.io/docs/react-native/notifications/notification-customization)
