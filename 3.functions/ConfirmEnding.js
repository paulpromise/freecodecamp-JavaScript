function confirmEnding(str, target) {
  const ending = str.slice(str.length - target.length);

  if (ending === target) {
    return true;
  } else {
    return false;
  }
}

