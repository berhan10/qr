import {Text, SafeAreaView, View, FlatList, TextInput} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from '@/assets';
import {useDispatch, useSelector} from 'react-redux';
import {actions} from '@/redux/reducer/ThemeRedux';
import {useColorScheme} from 'nativewind';

import BottomSheet, {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from '@gorhom/bottom-sheet';

const App = () => {
  const dispatch = useDispatch();

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['25%'], []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.snapToIndex(0);
  }, []);

  const {colorScheme, toggleColorScheme} = useColorScheme();
  const persons = [
    {
      id: '1',
      name: 'Earnest Green',
    },
    {
      id: '2',
      name: 'Winston Orn',
    },
    {
      id: '3',
      name: 'Carlton Collins',
    },
    {
      id: '4',
      name: 'Malcolm Labadie',
    },
    {
      id: '5',
      name: 'Michelle Dare',
    },
    {
      id: '6',
      name: 'Carlton Zieme',
    },
    {
      id: '7',
      name: 'Jessie Dickinson',
    },
    {
      id: '8',
      name: 'Julian Gulgowski',
    },
    {
      id: '9',
      name: 'Ellen Veum',
    },
    {
      id: '10',
      name: 'Lorena Rice',
    },

    {
      id: '11',
      name: 'Carlton Zieme',
    },
    {
      id: '12',
      name: 'Jessie Dickinson',
    },
    {
      id: '13',
      name: 'Julian Gulgowski',
    },
    {
      id: '14',
      name: 'Ellen Veum',
    },
    {
      id: '15',
      name: 'Lorena Rice',
    },
  ];

  return (
    <SafeAreaView className="flex-1 flex bg-white dark:bg-black">
      <View className="ml-1">
        <TouchableOpacity
          onPress={() => {
            toggleColorScheme();
            actions.setDarkTheme(dispatch, colorScheme === 'dark');
          }}>
          {colorScheme === 'light' ? (
            <Icon.Light width={40} height={40} />
          ) : (
            <Icon.Dark width={40} height={40} />
          )}
        </TouchableOpacity>
      </View>
      <View className="flex-1 items-center">
        <View className="flex-1">
          <FlatList
            data={persons}
            renderItem={({item, index}) => (
              <Text
                className={`text-black dark:text-white ${
                  index === persons.length ? '' : 'mb-2'
                }`}>
                {item.name}
              </Text>
            )}
          />
        </View>
      </View>
      <View className="items-center justify-center">
        <TouchableOpacity onPress={() => handlePresentModalPress()}>
          <Text className="text-black dark:text-white">Yeni Ekle</Text>
        </TouchableOpacity>
      </View>
      <BottomShet
        sheetRef={bottomSheetModalRef}
        snapPoints={snapPoints}
        className="bg-black dark:bg-white "
      />
    </SafeAreaView>
  );
};

const BottomShet = ({style, sheetRef, snapPoints}: any) => {
  return (
    <BottomSheetModalProvider>
      <BottomSheet
        ref={sheetRef}
        backgroundStyle={style}
        snapPoints={snapPoints}
        index={0}
        enableHandlePanningGesture
        enablePanDownToClose>
        <BottomSheetView className="">
          <View className="w-full h-full  justify-center items-center">
            <View className="flex-row justify-center items-center">
              <TouchableOpacity onPress={() => sheetRef.current?.close()}>
                <Text className="text-white dark:text-black">Kapat</Text>
              </TouchableOpacity>
              <TextInput className="w-7/12 h-30 border-2 rounded-lg ml-1 p-2" />
            </View>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </BottomSheetModalProvider>
  );
};

export default App;
