const Todo = ({ todo, deleteTodo, completeTodo }) => {
	const handleDelete = () => deleteTodo(todo)
	const handleComplete = () => completeTodo(todo)

	return (
		<div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }}>
			<span>
				{todo.text}
			</span>
			{todo.done ? (
				<>
					<span>This todo is done</span>
					<button onClick={handleDelete}>Delete</button>
				</>
			) : (
				<>
					<span>This todo is not done</span>
					<button onClick={handleDelete}>Delete</button>
					<button onClick={handleComplete}>Set as done</button>
				</>
			)}
		</div>
	)
}

export default Todo