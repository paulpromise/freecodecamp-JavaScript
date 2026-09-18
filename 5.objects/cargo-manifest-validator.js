function normalizeUnits(manifest) {
  const newManifest = { ...manifest };
  if (newManifest.unit === "lb") {
    newManifest.weight *= 0.45;
    newManifest.unit = "kg";
  }
  return newManifest;
}

function validateManifest(manifest) {
  const errors = {};
  
  // containerId check (must be a positive integer: 1, 2, 3...)
  if (!Object.prototype.hasOwnProperty.call(manifest, "containerId")) {
    errors.containerId = "Missing";
  } else if (
    typeof manifest.containerId !== "number" ||
    Number.isNaN(manifest.containerId) ||
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId < 1
  ) {
    errors.containerId = "Invalid";
  }

  // destination check (must be a non-empty string after trimming)
  if (!Object.prototype.hasOwnProperty.call(manifest, "destination")) {
    errors.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    errors.destination = "Invalid";
  }

  // weight check (must be a strictly positive number > 0)
  if (!Object.prototype.hasOwnProperty.call(manifest, "weight")) {
    errors.weight = "Missing";
  } else if (
    typeof manifest.weight !== "number" ||
    Number.isNaN(manifest.weight) ||
    manifest.weight <= 0
  ) {
    errors.weight = "Invalid";
  }

  // unit check (must be "lb" or "kg")
  if (!Object.prototype.hasOwnProperty.call(manifest, "unit")) {
    errors.unit = "Missing";
  } else if (manifest.unit !== "lb" && manifest.unit !== "kg") {
    errors.unit = "Invalid";
  }

  // hazmat check (must be a boolean)
  if (!Object.prototype.hasOwnProperty.call(manifest, "hazmat")) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}

function processManifest(manifest) {
  const errors = validateManifest(manifest);
  
  if (Object.keys(errors).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);
    const normalized = normalizeUnits(manifest);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(errors);
  }
}
