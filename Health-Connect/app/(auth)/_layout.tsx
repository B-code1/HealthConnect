import React, { useEffect } from 'react';
import { Stack, useRouter, useSegments } from 'expo-router';


export default function AuthLayout() {
  const { isAuthenticated } = useAuthStore();
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    // If the user is authenticated, redirect to the home screen
    if (isAuthenticated) {
      router.replace('/(tabs)');
    }
  }, [isAuthenticated, router]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="signup" />
    </Stack>
  );
}

function useAuthStore(): { isAuthenticated: any; } {
    throw new Error('Function not implemented.');
}
