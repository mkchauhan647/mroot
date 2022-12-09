
import React from "react";

function Post({post}) {

return (
        <React.Fragment>
        <p>{post.content}</p>
          {
            post.image &&
            <img
              alt="good"
              src={URL.createObjectURL(post.image)}
              style={{ height: 100, width: 200, objectFit: 'cover' }}
            />
          }
         
        </React.Fragment>
      
)
}

export default Post;
