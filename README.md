# Ravelry
A web app for maintaining knit and crochet patterns and projects, written with Vue, Express, and MongoDB. 

## Routes
* **GET /**                 
  * the landing page
* **GET /patterns**         
  * view all patterns
* **GET /patterns/:id**     
  * view a more detailed page for a single pattern 
* **POST /patterns**        
  * save a new pattern
* **GET /currentProject**   
  * view the project set as your current project
  
## How to run locally
1. Start MongoDB
```
mongo
```
2. Start Express server
```
node index.js
```
3. Start Vue
```
npm run serve
```
4. Visit localhost:8080 

## Structure of data
Data is stored in a MongoDB collection named "patterns"
```
{
  "pattern":
    [{"_id":"5ecea4d6cd9137de8533016a",
      "name":"C2C Eyelet Baby Blanket",
      "ravelryLink":"https://www.ravelry.com/patterns/library/corner-to-corner-hug-me-blanket",
      "description":"Simple corner to corner knitted blanket",
      "projects":[
        {"date":"2020-05-12",
        "comment":"I used cotton yarn. Works up quickly and I really like the outcome so far. This will be a gift for my new          niece.",
        "pictures":["https://i.imgur.com/W5zsFRB.jpg","https://i.imgur.com/lzNIwgo.jpg"]}
      ]
    }]
 }

```
