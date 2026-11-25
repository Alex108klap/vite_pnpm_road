const welcome = { greeting:'Hey', title: 'React',}; // объект JS

export const App = () => {
  
  return (
    <div>
      <h1>{welcome.greeting} {welcome.title}</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}


