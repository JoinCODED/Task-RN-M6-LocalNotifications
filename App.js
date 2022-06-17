import { StyleSheet, Button, View, Image } from 'react-native';
import notifee, {
  TriggerType,
  TimeUnit,
  AndroidStyle,
} from '@notifee/react-native';

export default function App() {
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
      },
      {
        type: TriggerType.INTERVAL,
        interval: 40,
        timeUnit: TimeUnit.MINUTES,
      }
    );
  }
  return (
    <View style={styles.container}>
      <Image source={require('./assets/posture.gif')} />
      <Button title="Start" onPress={onCreateTriggerNotification} />
      <Button
        title="Cancel"
        onPress={() => {
          notifee.cancelTriggerNotification('posture_alert');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#95c4ce',
    alignItems: 'center',
  },
});
