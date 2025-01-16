
import { createContext, useReducer } from "react";


export const PostList =createContext({postListm:[],
    addInitialPosts:()=>{},
    addPost:()=>{},
    deletePost:()=>{},
});

const postListReducer =(currPostList,action)=>{
   let newPostList = currPostList;
    if(action.type ==="DELETE_POST"){
    newPostList.filter((ite) => ite.id !== action.payload.ID)  
    }
    else if(action.type==='CREATE_POST'){
    newPostList= [action.payload,...currPostList]  
     }    
    else if(action.type==='ADD_INITIAL_POST'){
      newPostList = action.payload.posts; 
 }   
    return newPostList
}



const PostListProvider=({children})=>{
const[postListm,dispatchPostList]=useReducer(postListReducer,[]);

const addInitialPosts=(posts)=>{
    dispatchPostList({
    type:'ADD_INITIAL_POST',
    payload:{
     posts:posts
    }
})
}
const addPost=(userId,postTitle,postBody,Reactions,Tags)=>{
// console.log(postListm);
    dispatchPostList({
        type:'CREATE_POST',
        payload:{
            id:userId,
            title:postTitle,
            body:postBody,
            views:Reactions,
            tags:Tags,
            
        }
    })
}
const deletePost=(postId)=>{
    console.log(postId)
    dispatchPostList({
    type:"DELETE_POST",
    payload:{
        ID:postId,
    },
});  
}


return (<PostList.Provider value={{postListm,addInitialPosts,addPost,deletePost}}>{children}
</PostList.Provider>)

}

const Default_v =[
    {
    id:1,
    title:"postTitle",
    body:"postBody",
    views:80,
    tags:['Tags','Tags2'],
},
{
    id:2,
    title:"postTitlebhjh",
    body:"postBody",
    views:80,
    tags:['Tags','mm'],
}
]

export default PostListProvider;