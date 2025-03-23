// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarLabelStyle: { fontSize: 14, fontWeight: "bold" },
        
      }}
    >
      <Tabs.Screen
        name="makanan"
        options={{
          title: "Makanan",
          // Tambahkan ikon
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="restaurant" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="minuman"
        options={{
          title: "Minuman",
          // Tambahkan ikon
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="beer" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
    name="index"
    options={{
      href: null,
    }}
  />
    </Tabs>
  );
}
