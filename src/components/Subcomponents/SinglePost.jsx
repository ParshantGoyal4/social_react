import { useContext } from 'react';
import {AiFillDelete} from 'react-icons/ai';
import {PostList} from '../../store/post-list-store';

function Cpost({item})
{
const {deletePost} = useContext(PostList);

return(<>

 <div className="card" style={{width: '18rem'}}>
  <div className="card-body">
    <h5 className="card-title"> `{item.title}{item.id}`

    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
    onClick={()=>deletePost(item.id)}
    >
    <AiFillDelete />
    {/* <span class="visually-hidden">unread messages</span> */} 
   </span>


    </h5>
    <p className="card-text">`{item.body}`</p>
    <a href="#" className="btn btn-primary">ADD</a>
    <div class="alert alert-success" role="alert">
  {item.views}
</div>
 
     {item.tags.map((ta)=><span key={ta} class ="badge text-bg-primary">{ta}</span>)}
  </div>
</div>
</>)  

}

export default Cpost;