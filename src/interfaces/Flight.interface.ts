export interface FlightDataInterface {
  
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    from: string;
    to: string;
    departure: string;
    return: string;
    image: string;
    bookedCount: number;
  }

  export interface FlightInterface {
  
    searchData?:FlightDataInterface[]
  }

 