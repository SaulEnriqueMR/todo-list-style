function Todo({todo,index,remove}){
  function handle(){
    console.log('Ping:',index);
    remove(index);
  }
  return <div className="todo">{todo.text} <button className="btn badge bg-secondary" onClick={handle}><span className="btn-content">(-)</span></button></div>
}
