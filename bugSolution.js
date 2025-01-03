```javascript
//Correct usage of $inc operator
let value = 10; // ensure value is a number
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{field1:1,field2:value}});
//Alternatively, use $set operator if you want to update field2 to a non-numeric value
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$set:{field1:field1+1,field2:value}});
```