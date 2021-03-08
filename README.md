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
    description: { type: String, required: true }
    
  },
  { timestamps: true }
)


```

Whimsical: 
![Whimsical Diagram](https://github.com/amarp86/The-Dog-Spot/blob/dev/Screen%20Shot%202021-03-08%20at%201.57.32%20PM.png)


Team Expectations:
![expectations](https://docs.google.com/document/d/e/2PACX-1vRJvBFhamLdhd8FuCzWC0053Q8ADoPnr4qJiDSAVrL8B2Awl28F5DWS5smkcC5bglCkZc4lsrpLuKSA/pub)

