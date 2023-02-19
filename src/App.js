import React, {useState} from "react";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/Ui/button/MyButton";
import MyInput from "./components/Ui/input/MyInput";


function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript 1', body: 'JavaScript - язык программирования'},
        {id: 2, title: 'JavaScript 2', body: 'JavaScript - язык программирования'},
        {id: 3, title: 'JavaScript 3', body: 'JavaScript - язык программирования'}
    ])

    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault()
        setPosts([...posts, {...post, id: Date.now()}])
        setPost({title: '', body: ''})
    }

    return (
        <div className='App'>
            <form>
                <MyInput
                    value={post.title}
                    onChange={e => setPost ({...post, title: e.target.value})}
                    type="text"
                    placeholder='Название поста'/>

                <MyInput
                    value={post.body}
                    onChange={e => setPost ({...post, body: e.target.value})}
                    type="text"
                    placeholder='Описание поста'/>

                <MyButton onClick={addNewPost}>
                    Создать пост
                </MyButton>
            </form>
            <PostList posts={posts} title={"Список постов 1"}/>
        </div>
    );
}

export default App;
