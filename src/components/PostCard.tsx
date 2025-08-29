import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  View, Text, StyleSheet, TextInput, ActivityIndicator, TouchableOpacity, RefreshControl, Dimensions
} from "react-native";
import { FlashList } from "@shopify/flash-list";
import { Image } from "expo-image";
import { Post } from "../data/posts";
import { fetchPosts, Page } from "../api/mockApi";
import { isDueWithin24h } from "../utils/time";
import { formatZar } from "../utils/money";

function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debounced;
}

const { width } = Dimensions.get("window");
const SPACING = 12;
const CARD_WIDTH = (width - SPACING * 3) / 2;
const CARD_HEIGHT = 300;

type PostCardProps = {
  post: Post;
  onRemind?: (post: Post) => void;
  onOpen?: (post: Post) => void;
};

const PostCard: React.FC<PostCardProps> = React.memo(({ post, onRemind, onOpen }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <View style={[styles.cardWrapper, { width: CARD_WIDTH, height: CARD_HEIGHT }]}>
      <TouchableOpacity activeOpacity={0.9} onPress={() => onOpen?.(post)} style={styles.card}>
        <View style={styles.imageWrap}>
          {!loaded && <View style={styles.placeholder}><ActivityIndicator /></View>}
          <Image
            source={{ uri: post.imageUrl }}
            placeholder={{ uri: post.thumbnailUrl }}
            contentFit="cover"
            style={styles.image}
            onLoad={() => setLoaded(true)}
            cachePolicy="disk"
          />
        </View>
        <View style={styles.meta}>
          <Text style={styles.title} numberOfLines={1}>{post.title}</Text>
          <Text style={styles.sub} numberOfLines={1}>{post.supplier} • {formatZar(post.amountZar)}</Text>
        </View>
        {isDueWithin24h(post.dueAt) && (
          <TouchableOpacity style={styles.remindBtn} onPress={() => onRemind?.(post)}>
            <Text style={styles.remindTxt}>Remind me</Text>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </View>
  );
});

type PostGridProps = {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
  onRemind?: (post: Post) => void;
  onOpen?: (post: Post) => void;
};

export const PostGrid: React.FC<PostGridProps> = ({ posts, setPosts, onRemind, onOpen }) => {
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState<number | null>(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);

  const loadPostsInternal = useCallback(async (p: number = page) => {
    if (!nextPage || loading) return;
    setLoading(true);
    try {
      const data: Page = await fetchPosts(p);
      setPosts(p === 1 ? data.items : [...posts, ...data.items]);
      setNextPage(data.nextPage);
      setPage(p + 1);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [nextPage, loading, page, posts, setPosts]);

  const handleRefresh = useCallback(async () => {
    setRefreshing(true);
    setPage(1);
    setNextPage(1);
    await loadPostsInternal(1);
    setRefreshing(false);
  }, [loadPostsInternal]);

  const filteredPosts = useMemo(() => {
    const lower = debouncedSearch.toLowerCase();
    return posts.filter(p => p.title.toLowerCase().includes(lower) || p.supplier.toLowerCase().includes(lower));
  }, [posts, debouncedSearch]);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.searchWrapper}>
        <View style={styles.searchInputContainer}>
          <TextInput placeholder="Search posts..." value={search} onChangeText={setSearch} style={styles.searchInput}/>
          {search.length > 0 && (
            <TouchableOpacity onPress={() => setSearch("")} style={styles.clearBtn}>
              <Text style={styles.clearTxt}>×</Text>
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.headerTitle}>Media Feed</Text>
      </View>
      <FlashList
        data={filteredPosts}
        renderItem={({ item }) => <PostCard post={item} onRemind={onRemind} onOpen={onOpen}/>}
        keyExtractor={item => item.id}
        numColumns={2}
        estimatedItemSize={CARD_HEIGHT}
        onEndReached={() => loadPostsInternal()}
        onEndReachedThreshold={0.1}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
        ListFooterComponent={loading ? <ActivityIndicator style={{ padding: 20 }} /> : null}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  cardWrapper: { margin: SPACING / 2 },
  card: { flex: 1, borderRadius: 16, overflow: "hidden", backgroundColor: "#fff", shadowColor: "#000", shadowOpacity: 0.08, shadowRadius: 4, shadowOffset: { width: 0, height: 2 }, elevation: 2 },
  imageWrap: { width: "100%", height: CARD_HEIGHT - 100, backgroundColor: "#eee" },
  placeholder: { ...StyleSheet.absoluteFillObject, justifyContent: "center", alignItems: "center" },
  image: { width: "100%", height: "100%" },
  meta: { padding: 8 },
  title: { fontSize: 16, fontWeight: "700", color: "#222" },
  sub: { fontSize: 13, color: "#666" },
  remindBtn: { marginTop: 8, paddingVertical: 6, paddingHorizontal: 12, backgroundColor: "#43b0a1", borderRadius: 16, alignSelf: "flex-start" },
  remindTxt: { color: "#fff", fontWeight: "600", fontSize: 13 },
  searchWrapper: { margin: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  searchInputContainer: { flex: 0.7, flexDirection: "row", alignItems: "center" },
  searchInput: { flex: 1, paddingHorizontal: 16, paddingVertical: 10, borderRadius: 16, backgroundColor: "#f0f0f0", fontSize: 16 },
  headerTitle: { fontSize: 20, fontWeight: "bold", marginLeft: 12 },
  clearBtn: { position: "absolute", right: 8, height: 32, width: 32, justifyContent: "center", alignItems: "center", borderRadius: 16, backgroundColor: "#ddd" },
  clearTxt: { fontSize: 18, color: "#555", fontWeight: "600" },
});
