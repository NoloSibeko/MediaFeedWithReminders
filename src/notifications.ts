import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
    shouldShowAlert: true,
  }),
});

export const requestNotifPermissions = async () => {
  if (Platform.OS === "web") return true;
  const { status } = await Notifications.requestPermissionsAsync();
  return status === "granted";
};

export const scheduleReminder = async (postId: string, title: string, fireDate: Date) => {
  if (Platform.OS === "web") {
    if ("Notification" in window) {
      if (Notification.permission === "default") {
        await Notification.requestPermission();
      }
      if (Notification.permission === "granted") {
        new Notification("Reminder", { body: title });
      } else {
        alert(`Reminder: ${title}`);
      }
    } else {
      alert(`Reminder: ${title}`);
    }
    return;
  }

  return Notifications.scheduleNotificationAsync({
  content: {
    title: "Reminder",
    body: title,
    data: { postId },
  },
  trigger: {
    type: Notifications.SchedulableTriggerInputTypes.DATE,
    date: fireDate,
  },
});

};

export const addResponseListener = (cb: (postId: string) => void) => {
  if (Platform.OS === "web") return { remove: () => {} };
  return Notifications.addNotificationResponseReceivedListener((resp) => {
    const postId = resp.notification.request.content.data?.postId as string | undefined;
    if (postId) cb(postId);
  });
};
