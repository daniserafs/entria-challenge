//* TODO: write the delete function on HandleToDoInput into a Component *//

interface ToDo {
  id: string;
  task: string;
}

const HandleToDoDelete: React.FC = () => {
  const handleDelete = (id: string) => {
    const newToDo = toDos.filter((todo) => todo.id !== id);

    setToDos(newToDo);
    console.log(newToDo);
  };
  return <button type="button" onClick={() => handleDelete(toDo.id)}></button>;
};

export default HandleToDoDelete;
