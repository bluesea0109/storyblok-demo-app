import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-snap-carousel';

interface Props {
  data: [];
  setUrl: () => {};
  setFlag: () => {};
}

const ProductCard: React.FC<Props> = ({data, setUrl, setFlag}) => {
  const ref = useRef(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const _renderItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            setUrl(item?.url);
            setFlag(true);
          }}>
          <Image style={styles.logo} source={{uri: item.filename}} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            fontWeight: '500',
            marginTop: 20,
          }}>
          {item.name}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        layout={'default'}
        ref={ref}
        data={data}
        sliderWidth={300}
        itemWidth={300}
        renderItem={_renderItem}
        onSnapToItem={(index: number) => setActiveIndex(index)}
      />
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 20,
    marginVertical: 8,
    paddingHorizontal: 8,
    paddingVertical: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flex: 1,
  },
  details: {
    marginLeft: 8,
    justifyContent: 'space-between',
    flex: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  logo: {
    height: 300,
    width: '100%',
  },
});
