import { useRef, useState } from "react";

function CreatePost({ user, setPosts, posts }) {


    // UseStates
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);

    // useRef

    const imageRef = useRef(null);
    const inputRef = useRef("");

    function handleOnSubmit(e) {
        e.preventDefault();
        const post = {
            content, image, user
        }
        const newPost = [post, ...posts];
        setPosts(newPost);
        imageRef.current.value = null;
        inputRef.current.value = "";

    }

    return (
        <div>
            <h1>Create New Post</h1>
            <form onSubmit={handleOnSubmit}>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Add New Post"
                    onChange={event => setContent(event.target.value)} />
                <input type="file"
                    ref={imageRef}
                    onChange={event => setImage(event.target.files[0])} />
                <button type="submit" >Submit Post</button>


            </form>

            {/* {
            image && (
                <>
                <img src={URL.createObjectURL(image)} style={{height:100,width:200,objectFit:'cover'}}></img>
                <p>{content}</p>
               </>
            )
          } */}
        </div>
    )

}

export default CreatePost;