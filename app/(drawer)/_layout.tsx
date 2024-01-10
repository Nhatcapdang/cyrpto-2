/** @format */

import {
  AntDesign,
  EvilIcons,
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
import { Button, Stack, Box } from 'native-base';

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <DrawerContentScrollView
      {...props}
      style={{
        backgroundColor: 'red',
        padding: 0,
        margin: 0,
        gap: 0,
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
      {['Account', 'Get help', 'Send feed back', 'Perferences'].map(
        (item, index) => (
          <DrawerItem
            label={(props) => (
              <Stack
                justifyContent={'space-between'}
                flexDirection={'row'}
                alignItems={'center'}
                width={'full'}
                w={'full'}
                maxWidth={'full'}
                maxW={'full'}
                style={{
                  backgroundColor: 'yellow',
                  width: '100%',
                  padding: 0,
                  margin: 0,
                }}
              >
                <EvilIcons name="user" size={30} color="black" />
                <Text>{item}</Text>
                <MaterialIcons
                  {...props}
                  name="keyboard-arrow-right"
                  size={20}
                  color="black"
                />
              </Stack>
            )}
            labelStyle={[styles.navItemLabel]}
            style={{
              backgroundColor: 'navy',
              padding: 0,
              margin: 0,
              gap: 0,
            }}
            onPress={() => {
              router.push('/');
            }}
          />
        )
      )}
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
  navItemLabel: {},
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
