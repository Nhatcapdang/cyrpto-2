/** @format */

import {
  AntDesign,
  Feather,
  Ionicons,
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

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.userInfoWrapper}>
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
      </View>
      <DrawerItem
        icon={({ color, size }) => (
          <Feather
            name="list"
            size={size}
            color={pathname == '/feed' ? '#fff' : '#000'}
          />
        )}
        label={'Feed'}
        labelStyle={[
          styles.navItemLabel,
          { color: pathname == '/feed' ? '#fff' : '#000' },
        ]}
        style={{ backgroundColor: pathname == '/feed' ? '#333' : '#fff' }}
        onPress={() => {
          router.push('/');
        }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <AntDesign
            name="user"
            size={size}
            color={pathname == '/profile' ? '#fff' : '#000'}
          />
        )}
        label={'Profile'}
        labelStyle={[
          styles.navItemLabel,
          { color: pathname == '/profile' ? '#fff' : '#000' },
        ]}
        style={{ backgroundColor: pathname == '/profile' ? '#333' : '#fff' }}
        onPress={() => {
          router.push('/');
        }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <MaterialIcons
            name="favorite-outline"
            size={size}
            color={pathname == '/favourites' ? '#fff' : '#000'}
          />
        )}
        label={'Favourites'}
        labelStyle={[
          styles.navItemLabel,
          { color: pathname == '/favourites' ? '#fff' : '#000' },
        ]}
        style={{ backgroundColor: pathname == '/favourites' ? '#333' : '#fff' }}
        onPress={() => {
          router.push('/favourites');
        }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Ionicons
            name="settings-outline"
            size={size}
            color={pathname == '/settings' ? '#fff' : '#000'}
          />
        )}
        label={'Settings'}
        labelStyle={[
          styles.navItemLabel,
          { color: pathname == '/settings' ? '#fff' : '#000' },
        ]}
        style={{ backgroundColor: pathname == '/settings' ? '#333' : '#fff' }}
        onPress={() => {
          router.push('/settings');
        }}
      />
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
    marginLeft: -20,
    fontSize: 18,
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
