import { useContext } from "react";
import Cpost from "./SinglePost";
import{PostList as Postlistdata} from "../../store/post-list-store";

const PostList =()=>{
  const {postListm, addInitialPosts} = useContext(Postlistdata);

  const handleGetPostsClick =()=>{
    fetch("https://dummyjson.com/posts")
    .then((res)=> res.json())
    .then((data) =>{addInitialPosts(data.posts)})
    console.log("iam")
  }
 
return(<>
{postListm.length ===0 &&<div><h1>there is no post</h1><button
 onClick={()=>handleGetPostsClick()}>Fetch Api</button></div>}

{postListm.map((post) => <Cpost key={post.id} item={post}/>)}



</>)


}
export default PostList;