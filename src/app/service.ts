


import { Injectable } from '@angular/core';
import { Person } from './person';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {}
   
  loadData() {
   const data: Person[] = [
        {
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com",  
            age: 28,
            country: "USA"
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jane.smith@example.com", 
            age: 34,
            country: "Canada"
        },
        {
            id: 3,
            name: "Michael Brown",
            email: "michael.brown@example.com", 
            age: 45,
            country: "UK"
        },
        {
            id: 4,
            name: "Emily Davis",
            email: "emily.davis@example.com", 
            age: 23,
            country: "Australia"
        },
        {
            id: 5,
            name: "David Wilson",
            email: "david.wilson@example.com", 
            age: 31,
            country: "Germany"
        }
    ];
   return data
  }
}

