// import React from 'react';
import React, {useState} from 'react';
import { Dimensions, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Animated, ColorPropType,} from 'react-native';
import { Icon } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from './colors';
import { hotels } from './Hotels';
// import Hotels from 'Hotels';

const {width} = Dimensions.get('screen');
const cardWidth = width / 1.8;



const Home = ({navigation}) => {
  const categories = ['Hotels'];
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  const [activeCardIndex, setActiveCardIndex] = React.useState(0);
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const CategoryList = ({navigation}) => {
    return (
      <View style={style.categoryListContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View>
              <Text
                style={{
                  ...style.categoryListText,
                  color:  COLORS.grey
                    // selectedCategoryIndex == index
                    //   ? COLORS.primary
                    //   : COLORS.grey,
                }}>
                {item}
              </Text>
              {/* {selectedCategoryIndex == index && (  
                <View
                  style={{
                    height: 3,
                    width: 30,
                    backgroundColor: '#E3AC1E',
                    marginTop: 2,
                  }}
                />
              )} */}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  const Card = ({hotel, index}) => {
    const inputRange = [
      (index - 1) * cardWidth,
      index * cardWidth,
      (index + 1) * cardWidth,
    ];
    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.7, 0, 0.7],
    });
    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.8, 1, 0.8],
    });
    return (
      <TouchableOpacity
        disabled={activeCardIndex != index}
        activeOpacity={1}
        onPress={() => navigation.navigate('DetailsScreen', hotel)}>
        <Animated.View style={{...style.card, transform: [{scale}]}}>
          <Animated.View style={{...style.cardOverLay, opacity}} />
          {/* <View style={style.priceTag}>
            <Text
              style={{color: COLORS.white, fontSize: 20, fontWeight: 'bold'}}>
              R{hotel.price}
            </Text>
          </View> */}
          <Image source={hotel.image} style={style.cardImage} />
          <View style={style.cardDetails}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 17}}>
                  {hotel.name}
                </Text>
                <Text style={{color: COLORS.grey, fontSize: 12}}>
                  {hotel.location}
                </Text>
              </View>
            
            </View>
            {/* <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}> */}
              {/* <View style={{flexDirection: 'row'}}>
                <Icon name="star" size={15} color={COLORS.orange} />
                <Icon name="star" size={15} color={COLORS.orange} />
                <Icon name="star" size={15} color={COLORS.orange} />
                <Icon name="star" size={15} color={COLORS.orange} />
                <Icon name="star" size={15} color={COLORS.grey} />
              </View>
              <Text style={{fontSize: 10, color: COLORS.grey}}>365 reviews</Text> */}
            {/* </View> */}
          </View>
        </Animated.View>
      </TouchableOpacity>
    );
  };
  const TopHotelCard = ({hotel}) => {
    return (
      <View style={style.topHotelCard}>
        <View
          style={{
            position: 'absolute',
            top: 5,
            right: 5,
            zIndex: 1,
            flexDirection: 'row',
          }}>
          {/* <Icon name="star" size={15} color={COLORS.orange} />
          <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 15}}>
            5.0
          </Text> */}
        </View>
        <Image style={style.topHotelCardImage} source={hotel.image} />
        <View style={{paddingVertical: 5, paddingHorizontal: 10}}>
          <Text style={{fontSize: 10, fontWeight: 'bold'}}>{hotel.name}</Text>
          <Text style={{fontSize: 7, fontWeight: 'bold', color: COLORS.grey}}>
            {hotel.location}
          </Text>
        </View>
      </View>
    );
  };
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const searchFilterFunction = (text) => {
      
    if (text) {
      
          const newData = masterDataSource.filter(
          function (item) {
          const itemData = item.title
            ? item.title.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
     
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <View style={{paddingBottom: 15}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>
            Find your hotel
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>in </Text>
            <Text
              style={{fontSize: 30, fontWeight: 'bold', color: '#E3AC1E'}}>
              SA
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                        <Icon name='notifications' size={22} color='#000000' style={{ marginTop: 20, marginRight: 10 }}></Icon>
        </TouchableOpacity>
        {/* <Icon name="notifications" size={38} color= {COLORS.grey} /> */}
      </View>
     
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <View style={style.searchInputContainer}> */}
          
        <TextInput
            style={style.textInputStyle}
            onChangeText={(text) => searchFilterFunction(text)}
            value={search}
            underlineColorAndroid="transparent"
            placeholder="Search Here"
          />
          
        {/* </View> */}
        <CategoryList />
        <View>
          <Animated.FlatList
            onMomentumScrollEnd={(e) => {
              setActiveCardIndex(
                Math.round(e.nativeEvent.contentOffset.x / cardWidth),
              );
            }}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: true},
            )}
            horizontal
            data={hotels}
            contentContainerStyle={{
              paddingVertical: 30,
              paddingLeft: 20,
              paddingRight: cardWidth / 2 - 40,
            }}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => <Card hotel={item} index={index} />}
            snapToInterval={cardWidth}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <Text style={{fontWeight: 'bold', color: COLORS.grey}}>
            Top hotels
          </Text>
         
        </View>
        <FlatList
          data={hotels}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 20,
            marginTop: 20,
            paddingBottom: 30,
          }}
          renderItem={({item}) => <TopHotelCard hotel={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  textInputStyle: {
    height: 40,
    width: 410,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderRadius: 5,
    borderColor: '#dcdcdc',
    backgroundColor: '#dcdcdc',
    marginLeft: 20,
    
  },
 
  searchInputContainer: {
    height: 60,
    width: 600,
    backgroundColor: COLORS.light,
    marginTop: 10,
    marginLeft: 40,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 30,
  },
  categoryListText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  card: {
    height: 280,
    width: cardWidth,
    elevation: 15,
    marginRight: 20,
    borderRadius: 15,
    backgroundColor: COLORS.white,
  },
  cardImage: {
    height: 200,
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  priceTag: {
    height: 60,
    width: 80,
    backgroundColor: '#E3AC1E',
    position: 'absolute',
    zIndex: 1,
    right: 0,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardDetails: {
    height: 100,
    borderRadius: 15,
    backgroundColor: COLORS.white,
    position: 'absolute',
    bottom: 0,
    padding: 20,
    width: '100%',
  },
  cardOverLay: {
    height: 280,
    backgroundColor: COLORS.white,
    position: 'absolute',
    zIndex: 100,
    width: cardWidth,
    borderRadius: 15,
  },
  topHotelCard: {
    height: 120,
    width: 120,
    backgroundColor: COLORS.white,
    elevation: 15,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  topHotelCardImage: {
    height: 80,
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});

export default Home;