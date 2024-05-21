// TODO: Create a `name` variable

// TODO: Create a `thoughts` variable
// This should be a string regarding what you think of React

function JSXVariables() {
  const data={
    name: 'Khoi Phan',
    thoughts: ['I love React', 'I want to pratice more on react']
  }



  return (
    <div className="main-container">
      <div className="container">
        <div className="p-5 mb-4 bg-light">
          {/* TODO: Add your name variable */}
          <h1>Hi! My name is {data.name}</h1>
          {/* TODO: Add your number of letters variable */}
          <h2>My name has {data.name.length} letters</h2>
          {/* TODO: Add your thoughts variable */}
          <ul>
            {data.thoughts.map(thought =>(
              <h2>  <li>{thought}</li>  </h2>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
