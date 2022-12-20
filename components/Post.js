import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import { color } from "react-native-elements/dist/helpers";

const postFooterIcons = [
  {
    name: "Like",
    imageUrl: require("../assets/like.png"),
    likeImageUrl: require("../assets/Savelike.png"),
  },
  {
    name: "commment",
    imageUrl: require("../assets/comment.png"),
  },
  {
    name: "Share",
    imageUrl: require("../assets/share.png"),
  },
  {
    name: "Save",
    imageUrl: require("../assets/save.png"),
    SaveImageUrl: require("../assets/savesave.png"),
  },
];

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter />
        <Likes post={post} />
        <Caption post={post} />
        <CommentSection post={post}/>
        <Comments post={post}/>
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 5,
      alignItems: "center",
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={{ uri: post.profile_picture }} style={styles.story} />
      <Text style={{ marginLeft: 5 }}>{post.user}</Text>
    </View>
    <Text style={{ fontWeight: "900" }}>...</Text>
  </View>
);

const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 450 }}>
    <Image source={{ uri: post.imageUrl }} style={styles.Postimage} />
  </View>
);

const PostFooter = () => (
  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
    <View style={styles.leftFooterContainer}>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl} />
    </View>
    <View>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl} />
    </View>
  </View>
);

const Icon = ({ imgStyle, imgUrl }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={imgUrl}></Image>
  </TouchableOpacity>
);

const Likes = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 4 }}>
    <Text style={{ fontWeight: "600" }}>
      {post.likes.toLocaleString("en")} likes
    </Text>
  </View>
);

const Caption = ({ post }) => (
  <View style={{marginTop:5}}>
    <Text>
      <Text style={{ fontWeight: "700" }}>{post.user}</Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
);

const CommentSection=({post})=>(
  <View style={{marginTop:5}}>
    {!!post.comments.length &&(
    <Text style={{color:'gray',fontWeight:'550'}}>View {post.comments.length>1?'all':''} {post.comments.length}{' '}
    {post.comments.length>1?'comments':'comment'}
  </Text>
  )}
  
  </View>
  
)

const Comments=({post})=>(
 <>
 {
  post.comments.map((comment,index)=>(
    <View key={index} style={{marginTop:5}}>
      <Text>
        <Text style={{fontWeight:'600'}}>
          {comment.user}
        </Text>
     {' '}{comment.comment}

      </Text>
    </View>
  ))
 }
 </>

)
export default Post;

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    margin: 5,
    borderWidth: 1.6,
    borderColor: "#ff8501",
  },
  Postimage: {
    height: "100%",
    resizeMode: "cover",
  },
  footerIcon: {
    width: 33,
    height: 33,
  },
  leftFooterContainer: {
    flexDirection: "row",
    width: "32%",
    justifyContent: "space-between",
  },
});
