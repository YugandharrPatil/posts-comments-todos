import { useEffect, useState } from "react";

export default function App() {
	const [resourceType, setResourceType] = useState("posts");
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
			.then((res) => res.json())
			.then((data) => {
				setItems(data);
				console.log(data);
			});
	}, [resourceType]);

	return (
		<>
			<div className="flex gap-4 m-4">
				<button className="btn" onClick={() => setResourceType("posts")}>
					Posts
				</button>
				<button className="btn" onClick={() => setResourceType("comments")}>
					Comments
				</button>
				<button className="btn" onClick={() => setResourceType("todos")}>
					Todos
				</button>
			</div>

			{/* POSTS */}

			{items.map((item) => (
				<div key={item.id} className="my-4">
					{resourceType === "posts" && (
						<>
							<h3 key={item.id} className="text-xl font-bold">
								{item.title}
							</h3>
							<p className="text-sm">{item.body}</p>
						</>
					)}

					{/* COMMENTS */}

					{resourceType === "comments" && (
						<>
							<h3 key={item.id} className="text-xl font-bold">
								{item.name}
							</h3>
							<small>{item.email}</small>
							<p className="text-sm">{item.body}</p>
						</>
					)}

					{/* TODOS */}

					{resourceType === "todos" && (
						<>
							<h3 key={item.id} className="text-xl font-bold">
								{item.name}
							</h3>
							<small>{item.email}</small>
							<p className="text-sm">{item.body}</p>
						</>
					)}
					{resourceType === "todos" && (
						<>
							<h3 key={item.id} className="text-xl font-bold">
								{item.title}
							</h3>
							<div className={`${item.completed ? "bg-green-600" : "bg-red-600"} w-4 h-4`}></div>
						</>
					)}
				</div>
			))}
		</>
	);
}
