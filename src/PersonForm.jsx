function PersonForm(props) {
  const { newName, setNewName, newNumber, setNewNumber, persons, setPersons } =
    props;

  const handleNameChange = (event) => {
    event.preventDefault();
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    event.preventDefault();
    setNewNumber(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
      display: "on",
    };
    const duplicateCheck = (persons, name) => {
      let isDuplicate = false;
      persons.map((currentPerson) => {
        if (currentPerson.name.toLowerCase() === name.toLowerCase()) {
          return (isDuplicate = true);
        }
      });
      return isDuplicate;
    };

    if (duplicateCheck(persons, newName) !== false) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons([...persons, newPerson]);
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <div>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
}

export default PersonForm;
