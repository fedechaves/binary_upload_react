import React from 'react';
import Main from './components/Main.jsx';

export default function Profile(props) {
	return (
		<Main>
			<div class="container">
				<div class="row mt-5">
					<div class="col-6">
						<div>
							<p><strong>User Name</strong>: {props.user.userName}</p>
							<p><strong>Email</strong>: {props.user.email}</p>
							<a href="/logout" class="col-3 btn btn-primary">Logout</a>
						</div>
						<div class="mt-5">
							<h2>Add a post</h2>
							<form action="/post/createPost" enctype="multipart/form-data" method="POST">
								<div class="mb-3">
									<label for="title" class="form-label">Title</label>
									<input type="text" class="form-control" id="title" name="title" />
								</div>
								<div class="mb-3">
									<label for="caption" class="form-label">Caption</label>
									<textarea class="form-control" id="caption" name="caption"></textarea>
								</div>
								<div class="mb-3">
									<label for="imgUpload" class="form-label">Image</label>
									<input type="file" class="form-control" id="imageUpload" name="file" />
								</div>
								<button type="submit" class="btn btn-primary" value="Upload">Submit</button>
							</form>
						</div>
					</div>
					<div class="col-6">
						<ul class="row list-unstyled">
							{props.posts.map(post =>
								<li className="col-6 justify-content-between mt-5">
									<a href={`/post/${post._id}`}>
										<img class="img-fluid" src={post.image} />
									</a>
								</li>
							)}
						</ul>
						<div class="row justify-content-center mt-5">
							<a class="btn btn-primary" href="/feed">Return to Feed</a>
						</div>
					</div>
				</div>
			</div>
		</Main >
	)
}