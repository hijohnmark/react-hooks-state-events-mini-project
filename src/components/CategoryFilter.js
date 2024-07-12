import React from "react";

function CategoryFilter({categories, selectedCategory, setSelectedCategory }) {

  
const handleButton = (category) => {
    setSelectedCategory(category)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {
      categories.map(category => {
        return(
          <button 
          key={category} 
          onClick={() => handleButton(category)} 
          className={selectedCategory === category ? "selected" : ""}>
            {category}
          </button>
        )
      })
      }
    </div>
  );
}

export default CategoryFilter;
