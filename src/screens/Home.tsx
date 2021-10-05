import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import {WebView} from 'react-native-webview';
import StoryblokClient from 'storyblok-js-client';
import {useGetPostsQuery, useGetProductsQuery} from '../generated/graphql';

import ProductCard from '../common/components/ProductCard';

const Home = () => {
  const {data: carouselData, loading: carouselLoading} = useGetProductsQuery();
  const {data: productData, loading: productLoading} = useGetPostsQuery();
  const Storyblok = new StoryblokClient({
    accessToken: 'sOeIVZFu1rwLtcR4iPrdzwtt',
  });

  const [products, setProducts] = useState([]);
  const [url, setUrl] = useState('');
  const [richText, setRichText] = useState('');
  const [imgSrc, setImgSrc] = useState('');

  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (carouselData) {
      const temp = carouselData?.ProductItems?.items.map(item => {
        return {
          name: item?.content?.name,
          // description: item?.content?.description?.content[0]?.content[0]?.text,
          filename: item?.content?.images[0]?.filename,
          url: item?.content?.url,
        };
      });

      setProducts(temp);
    }
  }, [carouselData]);

  if (carouselLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="#32B768" size="large" />
      </View>
    );
  }

  const RichText = longText => {
    const html = Storyblok.richTextResolver.render(longText);
    return html;
  };

  const _renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setFlag(true);
          setRichText(RichText(item.content.long_text));
          setImgSrc(item.content.image);
        }}>
        <View style={styles.itemContainer}>
          <View style={styles.details}>
            <Text style={styles.text}>{item.content.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const goToChameleon = value => {
    setFlag(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      {flag && (
        <>
          <Button
            title="Back"
            onPress={() => {
              goToChameleon(false);
              setRichText('');
              setUrl('');
              setImgSrc('');
            }}
          />
          {url !== '' ? <WebView source={{uri: `https://${url}`}} /> : <></>}
          {richText !== '' ? (
            <>
              <WebView
                scalesPageToFit={false}
                originWhitelist={['*']}
                source={{
                  html:
                    imgSrc !== ''
                      ? `<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body><img src=https:${imgSrc} style="width:100%;height:300px;">${richText}</body></html>`
                      : `<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body>${richText}</body></html>`,
                }}
              />
            </>
          ) : (
            <></>
          )}
        </>
      )}
      {!flag && (
        <FlatList
          ListHeaderComponent={
            <>
              <Text style={styles.text}>Storyblok Demo App</Text>
              <ProductCard data={products} setUrl={setUrl} setFlag={setFlag} />
            </>
          }
          data={productData?.PostItems?.items}
          renderItem={_renderItem}
          contentContainerStyle={styles.productList}
          nestedScrollEnabled
        />
      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  productList: {
    padding: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  details: {
    marginLeft: 8,
    justifyContent: 'space-between',
    flex: 1,
  },
  itemContainer: {
    width: '100%',
    borderRadius: 20,
    marginVertical: 8,
    paddingHorizontal: 8,
    paddingVertical: 24,
    backgroundColor: '#F0F0F0',
    flexDirection: 'row',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    height: 300,
    width: '90%',
  },
});
