
interface City {
    name: string;
    population: number;
    crimeLevel: "low" | "high" | "medium";
  }
  

  interface Capital extends City {
    isCapital: boolean;
  }
  

  const provincialCapital: Capital = {
    name: "NameOfYourCapital",
    population: 1000000, 
    crimeLevel: "medium", 
    isCapital: true,
  };
  
  console.log(provincialCapital);
  