import React, { useState } from 'react';

function SetGoals() {
  // Declare state variables for each goal
  const [weightGoal, setWeightGoal] = useState('');
  const [exerciseGoal, setExerciseGoal] = useState('');
  const [dietGoal, setDietGoal] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the goal data (e.g. save it to a database)
  }

  return (
    <div>
      <h1>Set Your Fitness Goals</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Weight Goal:
          <input
            type="text"
            value={weightGoal}
            onChange={(event) => setWeightGoal(event.target.value)}
          />
        </label>
        <label>
          Exercise Goal:
          <input
            type="text"
            value={exerciseGoal}
            onChange={(event) => setExerciseGoal(event.target.value)}
          />
        </label>
        <label>
          Diet Goal:
          <input
            type="text"
            value={dietGoal}
            onChange={(event) => setDietGoal(event.target.value)}
          />
        </label>
        <button type="submit">Set Goals</button>
      </form>
    </div>
  );
}

export default SetGoals;