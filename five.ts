function whichMonths(season: string): string {
    let monthsInSeason: string;
  
    switch (season) {
      case "Fall":
        monthsInSeason = "September to November";
        break;
  
      case "Winter":
        monthsInSeason = "December to February";
        break;
  
      case "Spring":
        monthsInSeason = "March to May";
        break;
  
      case "Summer":
        monthsInSeason = "June to August";
        break;
  
      default:
        monthsInSeason = "Invalid season";
        break;
    }
  
    return monthsInSeason;
  }
  
  console.log(whichMonths("Fall")); 