// app/(tabs)/index.tsx
import { Redirect } from "expo-router";

// Tujuan: ketika user akses "/(tabs)",
// kita arahkan ke "/(tabs)/makanan" misalnya
export default function TabsIndex() {
  return <Redirect href="/tabs/makanan" />;
}
