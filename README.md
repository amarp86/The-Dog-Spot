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
