
export function generateRandomName() {
    const names = [
      'Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Henry',
      'Isabel', 'Jack', 'Katie', 'Liam', 'Mia', 'Noah', 'Olivia', 'Peter',
      'Quinn', 'Rachel', 'Sam', 'Taylor', 'Uma', 'Victor', 'Wendy', 'Xavier',
      'Yara', 'Zoe'
    ];
  
    // Generate a random index to select a name from the array
    const randomIndex = Math.floor(Math.random() * names.length);
  
    // Get the name at the randomly generated index
    const randomName = names[randomIndex];
  
    return randomName;
  }