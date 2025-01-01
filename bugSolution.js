```javascript
// Solution using $or operator
db.collection.find({ $or: [{field: {$exists: true}}, {field: {$exists: false}}] });

//Alternatively, if you want to return all documents irrespective of the 'field' existing or not:
//db.collection.find({});
```