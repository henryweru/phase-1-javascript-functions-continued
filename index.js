// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  }
  
  function wrapAdjective(highlight = '*') {
    return function(adjective = 'special') {
      return `You are ${highlight}${adjective}${highlight}!`;
    }
  }
  
  // Test cases
  const saturdayActivity = saturdayFun('bake a cake');
  console.log(saturdayActivity); // Output: "This Saturday, I want to bake a cake!"
  
  const mondayActivity = mondayWork('work from home');
  console.log(mondayActivity); // Output: "This Monday, I will work from home."
  
  const wrappedAdjective = wrapAdjective('||')('a dedicated programmer');
  console.log(wrappedAdjective); // Output: "You are ||a dedicated programmer||!"
  
  const defaultWrappedAdjective = wrapAdjective()();
  console.log(defaultWrappedAdjective); // Output: "You are *special*!"
  