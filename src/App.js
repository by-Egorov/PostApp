import React, { useState } from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";


function App() {

	const [posts, setPosts] = useState([
		{ id: 1, title: 'JavaScript 1', body: 'JavaScript - язык программирования' },
		{ id: 2, title: 'JavaScript 2', body: 'JavaScript - язык программирования' },
		{ id: 3, title: 'JavaScript 3', body: 'JavaScript - язык программирования' }
	])

	const createPost = (newPost) => {
		setPosts([...posts, newPost])
	}

	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	return (
		<div className='App'>
			<PostForm create={createPost} />
			{posts.length !== 0
				? <PostList remove={removePost} posts={posts} title={"Список постов 1"} />
				: <div className='post_not_found'>
					Посты не найдены!
					<span>
						:/
					</span>
				</div>
			}

		</div>
	);
}

export default App;
