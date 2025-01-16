import { useContext, useRef } from 'react';
import style from '../Subcomponents/CreatePost.module.css'
import {PostList as Postlistdata} from '../../store/post-list-store';

function CreatePost(){
  const {addPost} =useContext(Postlistdata);


const userID = useRef();
const PostTitle = useRef();
const PostBody = useRef();
const reactions = useRef();
const tags = useRef();

const handleSubmit=(event)=>{
event.preventDefault();
const userId = userID.current.value;
const postTitle = PostTitle.current.value;
const postBody = PostBody.current.value;
const Reactions = reactions.current.value;
const Tags = tags.current.value.split(/(\s+)/);
addPost(userId,postTitle,postBody,Reactions,Tags);
userID.current.value='';
PostTitle.current.value='';
PostBody.current.value='';
reactions.current.value='';
tags.current.value='';
}


return(<>
    <form className={style.form} onSubmit={handleSubmit}>
    <div className="mb-3">
    <label htmlFor="user_id" className="form-label">User_ID</label>
    <input type="text" ref={userID} className="form-control" id="Title" 
    aria-describedby="emailHelp" placeholder='Enter the UserID'/>
  </div>
  <div className="mb-3">
    <label htmlFor="Title" className="form-label">Title</label>
    <input type="text" ref={PostTitle} className="form-control" id="Title" 
    aria-describedby="emailHelp" placeholder='Enter the title'/>
  </div>
  <div className="mb-3">
    <label htmlFor="content" className="form-label">Content</label>
    <textarea type="text" ref={PostBody} className="form-control" id="content"/>
  </div>
  <div className="mb-3">
    <label htmlFor="Reactions" className="form-label">Reactions</label>
    <input type="number" ref={reactions} className="form-control" id="Reactions" 
    aria-describedby="emailHelp" placeholder='Enter the Reactions'/>
  </div>
  <div className="mb-3">
    <label htmlFor="Tags" className="form-label">Tags</label>
    <input type="text" ref={tags} className="form-control" id="Tags" 
    aria-describedby="emailHelp" placeholder='Enter the tags using space'/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </>)
}

export default CreatePost;