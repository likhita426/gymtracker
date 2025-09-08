const form = document.getElementById('fitnessForm');
const stepsInput = document.getElementById('steps');
const caloriesInput = document.getElementById('calories');
const sleepInput = document.getElementById('sleep');
const analysis = document.getElementById('analysis');
const progressChart = document.getElementById('progressChart');

let fitnessData = [];

form.addEventListener('submit', function(e) {
  e.preventDefault();

  
  const steps = parseInt(stepsInput.value);
  const calories = parseInt(caloriesInput.value);
  const sleep = parseInt(sleepInput.value);


  fitnessData.push({
    steps: steps,
    calories: calories,
    sleep: sleep,
    date: new Date()
  });

  
  const totalSteps = fitnessData.reduce((total, data) => total + data.steps, 0);
  const totalCalories = fitnessData.reduce((total, data) => total + data.calories, 0);
  const totalSleep = fitnessData.reduce((total, data) => total + data.sleep, 0);
  const averageSteps = totalSteps / fitnessData.length;
  const averageCalories = totalCalories / fitnessData.length;
  const averageSleep = totalSleep / fitnessData.length;

  
  analysis.innerHTML = `
    Total Steps: ${totalSteps}<br>
    Total Calories Burned: ${totalCalories}<br>
    Total Hours Slept: ${totalSleep}<br>
    Average Steps per Day: ${averageSteps.toFixed(2)}<br>