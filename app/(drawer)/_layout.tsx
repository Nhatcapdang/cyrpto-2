/** @format */

import {
  AntDesign,
  EvilIcons,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { router, useNavigation, usePathname } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button, Stack, Box, Center } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <DrawerContentScrollView
      {...props}
      style={{
        height: '100%',
        backgroundColor: 'navy',
      }}
    >
      {/* <View style={styles.userInfoWrapper}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/women/26.jpg' }}
          width={80}
          height={80}
          style={styles.userImg}
        />
        <View style={styles.userDetailsWrapper}>
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userEmail}>john@email.com</Text>
        </View>
      </View> */}
      <LinearGradient
        // Background Linear Gradient
        colors={['red']}
        style={{
          height: '100%',
          width: '100%',
        }}
      >
        {['Account', 'Get help', 'Send feed back', 'Perferences'].map(
          (item, index) => (
            <DrawerItem
              key={index}
              label={item}
              icon={({ color, size }) => (
                <EvilIcons name="user" size={size + 10} color={color} />
              )}
              labelStyle={[styles.navItemLabel]}
              onPress={() => {
                router.push('/');
              }}
            />
          )
        )}

        <Stack
          direction="row"
          mb="2.5"
          mt="1.5"
          space={3}
          justifyContent={'space-evenly'}
        >
          <Center>
            <Ionicons name="wallet-outline" size={24} color="black" />
            Wallet
          </Center>
          <Center>
            <MaterialCommunityIcons
              name="rotate-orbit"
              size={24}
              color="black"
            />
            Swap
          </Center>
          <Center>
            <MaterialCommunityIcons
              name="professional-hexagon"
              size={24}
              color="black"
            />
            Settings
          </Center>
        </Stack>
      </LinearGradient>
    </DrawerContentScrollView>
  );
};

export default function Layout() {
  const navigation = useNavigation();
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerPosition: 'right',
        headerLeft(props) {
          return null;
        },
        headerRight(props) {
          return (
            <AntDesign
              {...props}
              name="menufold"
              size={24}
              color="black"
              onPress={() => {
                navigation.dispatch(DrawerActions.openDrawer());
              }}
            />
          );
        },
      }}
    />
  );
}

const styles = StyleSheet.create({
  navItemLabel: {
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  userInfoWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  userImg: {
    borderRadius: 40,
  },
  userDetailsWrapper: {
    marginTop: 25,
    marginLeft: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 16,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
});
