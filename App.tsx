import React, { useState, useEffect, useCallback, useMemo } from "react";
import { SafeAreaView, View, Text, StyleSheet, Alert, Pressable, Modal, Dimensions } from "react-native";
import { PostGrid } from "./src/components/PostCard";
import { fetchPostsPaginated, Post } from "./src/data/posts";
import { requestNotifPermissions, scheduleReminder, addResponseListener } from "./src/notifications";
import { Image } from "expo-image";
import { formatZar } from "./src/utils/money";

const { width } = Dimensions.get("window");

export default function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [openedId, setOpenedId] = useState<string | null>(null);

  useEffect(() => {
    requestNotifPermissions().catch(() => {});
    const sub = addResponseListener((postId) => setOpenedId(postId));
    return () => sub.remove();
  }, []);

  const handleRemind = useCallback(async (post: Post) => {
    const when = post.dueAt ? new Date(post.dueAt) : new Date(Date.now() + 5000);
    await scheduleReminder(post.id, post.title, when);
    Alert.alert("Reminder Set", `A reminder for "${post.title}" has been scheduled.`);
  }, []);

  const selected = useMemo(() => posts.find(i => i.id === openedId) || null, [posts, openedId]);

  return (
    <SafeAreaView style={styles.container}>
      <PostGrid
        posts={posts}
        setPosts={setPosts}
        onRemind={handleRemind}
        onOpen={(post) => setOpenedId(post.id)}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={!!selected}
        onRequestClose={() => setOpenedId(null)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            {selected && (
              <>
                <Image
                  style={styles.modalImage}
                  source={{ uri: selected.imageUrl }}
                  placeholder={{ uri: selected.thumbnailUrl }}
                  transition={200}
                  cachePolicy="disk"
                  contentFit="cover"
                />
                <View style={styles.textContainer}>
                  <Text style={styles.modalTitle}>{selected.title}</Text>
                  <Text style={styles.modalSupplier}>{selected.supplier}</Text>
                  <Text style={styles.modalAmount}>{formatZar(selected.amountZar)}</Text>
                </View>
                <Pressable onPress={() => setOpenedId(null)} style={styles.closeBtn}>
                  <Text style={styles.closeBtnText}>Close</Text>
                </Pressable>
              </>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f6f8fa" },
  modalBackground: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
  modalContainer: { backgroundColor: '#fff', borderRadius: 16, padding: 20, width: width * 0.5 },
  modalImage: { width: '100%', aspectRatio: 4 / 3, borderRadius: 12, marginBottom: 10 },
  textContainer: { gap: 10 },
  modalTitle: { fontSize: 16, fontWeight: 'bold', color: '#222', textAlign: 'center' },
  modalSupplier: { fontSize: 12, color: '#666', textAlign: 'center' },
  modalAmount: { fontSize: 14, fontWeight: 'bold', color: '#43b0a1', textAlign: 'center' },
  closeBtn: { backgroundColor: '#43b0a1', borderRadius: 8, alignSelf: 'center', paddingHorizontal: 15, paddingVertical: 8, marginTop: 15 },
  closeBtnText: { color: '#fff', fontWeight: '600', fontSize: 12 },
});
