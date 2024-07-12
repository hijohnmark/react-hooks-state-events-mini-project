import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [newCategory, setNewCategory] = useState("All")
  const [text, setText] = useState("")
  
  const handleCatChange = e => setNewCategory(e.target.value)
  
  const handleTextChange = e => setText(e.target.value)
  
  const newTask = {
    text: text,
    category: newCategory,
  }

  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit(newTask)}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleTextChange}/>
      </label>
      <label value={newCategory} onChange={handleCatChange}>
        Category
        <select name="category">
          {/* render <option> elements for each category here */
          categories.map(category => {
            return (
              <option key={category}>{category}</option>
            )
          })
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
