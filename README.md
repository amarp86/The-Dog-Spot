# The-Dog-Spot

Schema:
```
const User = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password_digest: { type: String, required: true }
  },
  { timestamps: true }
)


const Dog = new Schema(
  {
    name: { type: String, required: true },
    breed: { type: String, required: true },
    age: { type: Number, required: true },
    imgURL: [{ type: String, required: true }],
    location: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: Boolean, required: true }
    
    
  },
  { timestamps: true }
)


```

Front-End Structure: 
![Whimsical Diagram](https://github.com/amarp86/The-Dog-Spot/blob/dev/Screen%20Shot%202021-03-08%20at%201.57.32%20PM.png)


Team Expectations:
[Google Doc Link](https://docs.google.com/document/d/e/2PACX-1vRJvBFhamLdhd8FuCzWC0053Q8ADoPnr4qJiDSAVrL8B2Awl28F5DWS5smkcC5bglCkZc4lsrpLuKSA/pub)


App Overview:
1. Web App for local animal shelters to list available dogs that are seeking permanent homes.
2. Web App will display all necessary imformation about each dog.
3. App will allow logged in users to edit listed dogs and mark them as adopted or avaialble.
4. App will utlilize soft-delete to trigger a flag change for dog status(adopted/available - true/false).


MVP Board:
[MVP Board](https://github.com/amarp86/The-Dog-Spot/projects/1)

Post MVP: 
1. Email System for Adopter
2. External API call for Dog Breed Facts based on string matching Dog Breed Schema.
3. Add multiple user roles - allow CRUD access depending on user role.


