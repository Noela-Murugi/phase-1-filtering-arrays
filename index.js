//filtering-arrays practice

const users = [
    {
      firstName: "Niky",
      lastName: "Morgan",
      favoriteColor: "Blue",
      favoriteAnimal: "Jaguar",
    },
    {
      firstName: "Tracy",
      lastName: "Lum",
      favoriteColor: "Yellow",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Josh",
      lastName: "Rowley",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Kate",
      lastName: "Travers",
      favoriteColor: "Red",
      favoriteAnimal: "Jaguar",
    },
    {
      firstName: "Avidor",
      lastName: "Turkewitz",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Drew",
      lastName: "Price",
      favoriteColor: "Yellow",
      favoriteAnimal: "Elephant",
    },
  ];

  function firstNamePrinter(collection) {
    for (const users of collection) {
      console.log(users.firstName);
    }
  }

  firstNamePrinter(users);
