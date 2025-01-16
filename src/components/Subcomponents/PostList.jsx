import { useContext, useEffect, useState } from "react";
import Cpost from "./SinglePost";
import{PostList as Postlistdata} from "../../store/post-list-store";
import LoadingSpinner from "./LoadingSoinner";

const PostList =()=>{
  const {postListm, addInitialPosts} = useContext(Postlistdata);
  const[datafetched, setdatafetched] =useState(false);
  // if(!datafetched){
  //   fetch("https://dummyjson.com/posts")
  //   .then((res)=> res.json())
  //   .then((data) =>{addInitialPosts(data.posts)});
  //   setdatafetched(true);
  // }
    useEffect(()=>{
      setdatafetched(true);
      fetch("https://dummyjson.com/posts")
       .then((res)=> res.json())
         .then((data) =>{addInitialPosts(data.posts)
          setdatafetched(false);
         });
    },[])

  const handleGetPostsClick =()=>{
    console.log("iam")
  }
 
return(<>
{datafetched && <LoadingSpinner/>}
{!datafetched &&postListm.length ===0 &&<div><h1>there is no post</h1><button
 onClick={()=>handleGetPostsClick()}>Fetch Api</button></div>}

{!datafetched &&postListm.map((post) => <Cpost key={post.id} item={post}/>)}



</>)


}
export default PostList;