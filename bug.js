```javascript
//Incorrect usage of $inc operator in MongoDB update query
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{field1:1,field2:value}});
//This will increment the field1 by 1 and field2 by the value of variable value, but if value is not a number,it will throw an error
```