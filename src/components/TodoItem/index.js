import './index.css'

const TodoItem = props => {
  const {eachTodo, removeItem} = props
  const {id, title} = eachTodo
  console.log(id)

  const onClickDeleteButton = () => {
    removeItem(id)
  }

  return (
    <div className="todo-item">
      <h5>{title}</h5>
      <button
        className="delete-button"
        type="button"
        onClick={onClickDeleteButton}
      >
        Delete
      </button>
    </div>
  )
}

export default TodoItem
