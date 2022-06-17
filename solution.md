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

3. Run this command in your terminal depending on your platform:

   - iOS: `expo run:ios`
   - Android: `expo run:android`

It will ask for a package name, enter: `Posture.App`.

4. Run this command in your terminal:

```shell
expo prebuild
```

5. Import the `notifee` package.

```js
import notifee, { EventType } from '@notifee/react-native';
```

6. Create a trigger notification that runs every 40 mins.

```js
async function onCreateTriggerNotification() {
  await notifee.createTriggerNotification(
    {
      id: 'posture_alert',
      title: 'Reminder',
      body: 'Fix your posture!',
    },
    {
      type: TriggerType.INTERVAL,
      interval: 40,
      timeUnit: TimeUnit.MINUTES,
    }
  );
}
```

7. Create an android channel for the notification.

```js
async function onCreateTriggerNotification() {
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });
  [...]
}
```

8. Pass the android ios and android object.

```js
async function onCreateTriggerNotification() {
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });
  await notifee.createTriggerNotification(
    {
      id: 'posture_alert',
      title: 'Reminder',
      body: 'Fix your posture!',
      android: {},
      ios: {},
    },
    {
      type: TriggerType.INTERVAL,
      interval: 40,
      timeUnit: TimeUnit.MINUTES,
    }
  );
}
```

9. In the android object, add the channel. and the small icon.

```js
android: {
          channelId,
          style: {
            type: AndroidStyle.BIGPICTURE,
            picture:
              'https://149362086.v2.pressablecdn.com/wp-content/uploads/2019/12/healthy-posture.jpg',
          },
          pressAction: {
            id: 'default',
          },
        },
```

10. Make sure that clicking the notification will open the app.

```js
          pressAction: {
            id: 'default',
          },
```

11. Pass this function to the start button.

```js
<Button title="Start" onPress={onCreateTriggerNotification} />
```

### 🍋 Stop Notifications

```js
<Button
  title="Cancel"
  onPress={() => {
    notifee.cancelTriggerNotification('posture_alert');
  }}
/>
```

### 🤼‍♂️ Customize Notifications

```js
android: {
          channelId,
          style: {
            type: AndroidStyle.BIGPICTURE,
            picture:
              'https://149362086.v2.pressablecdn.com/wp-content/uploads/2019/12/healthy-posture.jpg',
          },
          pressAction: {
            id: 'default',
          },
        },
        ios: {
          attachments: [
            {
              url: 'https://149362086.v2.pressablecdn.com/wp-content/uploads/2019/12/healthy-posture.jpg',
            },
          ],
          pressAction: {
            id: 'default',
          },
        },
```
