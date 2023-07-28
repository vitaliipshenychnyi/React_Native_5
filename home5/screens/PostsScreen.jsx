import { FlatList, Image, Text } from 'react-native';
import { View, ScrollView } from 'react-native';
import { globalStyles } from '../globalStyles';
import Post from '../components/Post';
import { useSelector } from 'react-redux';
import { selectPosts } from '../redux/selectors';

export const PostsScreen = () => {
  const posts = useSelector(selectPosts);
  console.log(posts);
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View
        style={[
          globalStyles.container,
          {
            flexDirection: 'column',
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 32,
          },
        ]}
      >
        <View style={{ gap: 8, flexDirection: 'row', marginBottom: 32 }}>
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: '#F6F6F6',
              borderRadius: 16,
            }}
          >
            <Image source={require('../assets/images/user.png')} />
          </View>
          <View style={{ marginTop: 16 }}>
            <Text
              style={{
                fontFamily: 'Roboto-Medium',
                lineHeight: 15.23,
                fontSize: 13,
              }}
            >
              Natali Romanova
            </Text>
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                lineHeight: 12.89,
                fontSize: 11,
                color: '#212121CC',
              }}
            >
              email@example.com
            </Text>
          </View>
        </View>
        <FlatList
          data={posts}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Post
              way={item.imageUrl}
              name={item.name}
              commentsNumber={item.commentsNumber}
              country={item.location}
              coords={item.coords}
            />
          )}
        ></FlatList>
      </View>
    </ScrollView>
  );
};
