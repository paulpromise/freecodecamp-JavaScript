const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: []
};

function runSequence(config, cycles) {
  // 1. Check if phases array is empty
  if (!config.phases || config.phases.length === 0) {
    console.log("No phases found");
    return;
  }

  // 2. Check if the config is faulted before running
  if (config.fault) {
    console.log("Faulted phase!");
    return;
  }

  // 3. Loop through the given number of cycles
  for (let c = 0; c < cycles; c++) {
    for (const phase of config.phases) {
      if (phase.duration <= 0) {
        console.log("Invalid phase detected");
      } else {
        console.log(`Switching to ${phase.color} for ${phase.duration} s`);
      }
    }
  }
}

function generateTimeline(config, cycles) {
  const timeline = [];
  let runningTotal = 0;

  // Process all phases across the cycles without fault/duration validation
  for (let c = 0; c < cycles; c++) {
    for (const phase of config.phases) {
      runningTotal += phase.duration;
      timeline.push(runningTotal);
    }
  }

  return timeline;
}