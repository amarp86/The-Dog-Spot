# The-Dog-Spot

[Deployed Site](https://the-dog-spot.netlify.app/)

Creators: Hanna Boorom, Jason Quizhpi, Amar Patel

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
    images: [],
    location: { type: String, required: true },
    description: { type: String, required: true },
    isAdopted: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);


```

Front-End Structure:
![Whimsical Diagram](https://github.com/amarp86/The-Dog-Spot/blob/dev/Screen%20Shot%202021-03-08%20at%201.57.32%20PM.png)

Adobe XD Demos:
![Front Page](https://github.com/amarp86/The-Dog-Spot/blob/dev/Adobe%20XD%20FrontPage.png)

![Dog List](https://github.com/amarp86/The-Dog-Spot/blob/dev/AdobeXD%20Dog%20List.png)

![Dog Detail](https://github.com/amarp86/The-Dog-Spot/blob/dev/AdobeXD%20Detail.png)

![Sample Form](https://github.com/amarp86/The-Dog-Spot/blob/dev/AdobeXD%20Form.png)

![Actual Frontpage](https://github.com/amarp86/The-Dog-Spot/blob/dev/app%20screenshot.png)

App Overview:

1. Web App for local animal shelters to list available dogs that are seeking permanent homes.
2. Web App will display all necessary imformation about each dog.
3. App will allow logged in users to edit listed dogs and mark them as adopted or avaialble.
4. App will utlilize soft-delete to trigger a flag change for dog status(adopted/available - true/false).

MVP Board:
[MVP Board](https://github.com/amarp86/The-Dog-Spot/projects/1)

Post MVP:

1. Email System for Adopter - complete
2. External API call for Dog Breed Facts based on string matching Dog Breed Schema. - complete
3. Implement Sort and Search into Dog's List. - complete
4. Add CSS Animation to adopted status. - complete
