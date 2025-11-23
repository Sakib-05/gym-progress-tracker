import axios from "axios";

const ExerciseForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newExerciseData = {
      exerciseName: form.exerciseName.value,
      muscleGroup: form.muscleGroup.value,
      sets: parseInt(form.sets.value),
      reps: parseInt(form.reps.value),
      weight: parseFloat(form.weight.value),
      date: form.date.value,
    };
    axios
      .post("http://localhost:5001/api/exercise-logs/add", newExerciseData)
      .then((res) => {
        console.log(res.data); // Should log "Exercise log added!"
        form.reset();
      })
      .catch((err) => console.log("Error: " + err));
    alert("Exercise Added!");
  };

  return (
    <div className="ExerciseForm" style={{ marginInline: "50px"}}>
      <h1>hello there this is the Exercise form area</h1>

      <form
        onSubmit={handleSubmit}
        style={{ border: "1px solid black", margin: "0px" }}
      >
        <label htmlFor="exerciseName">Exercise Name:</label>
        <input type="text" id="exerciseName" name="exerciseName" required />
        <br />
        <label htmlFor="muscleGroup">Muscle Group:</label>
        <select name="muscleGroup" id="muscleGroup" required>
          <option value="" disabled selected>
            Select your option
          </option>
          <option value="chest">Chest</option>
          <option value="triceps">triceps</option>
          <option value="back">Back</option>
          <option value="biceps">biceps</option>
          <option value="legs">Legs</option>
          <option value="shoulders">Shoulders</option>
          <option value="core">Core</option>
        </select>
        <br />
        <label htmlFor="sets">Sets:</label>
        <input type="number" id="sets" name="sets" required />
        <br />
        <label htmlFor="reps">Reps:</label>
        <input type="number" id="reps" name="reps" required />
        <br />
        <label htmlFor="weight">Weight (Kg):</label>
        <input type="number" id="weight" name="weight" required />
        <br />
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" required />
        <br />
        <button type="submit">Add Exercise</button>
      </form>
    </div>
  );
};

export default ExerciseForm;

