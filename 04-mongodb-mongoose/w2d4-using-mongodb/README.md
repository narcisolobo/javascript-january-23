# Using MongoDB

## Expand the spoiler text to view the answers.

<details>
  <summary>1. Create a database called 'myFirstDb'.</summary>

  The `use <db>` helper will switch to the `<db>` you specify. If it does not exist, it will be created.
  ```
  use myFirstDb
  ```
</details>

<details>
  <summary>2. Create students collection.</summary>

  The `db.createCollection(<name>)` method creates a new collection in the current database.
  ```
  db.createCollection('students')
  ```
</details>

Each document you insert into this collection should have the following format: `({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})`


<details>
  <summary>3. Create 5 students with the appropriate info.</summary>

  `db.collection.insertOne()` inserts a single document into a collection. 
  ```
  db.students.insertOne(
    {
      name: 'Fozzie Bear',
      home_state: 'California',
      lucky_number: 1,
      birthday: {
        month: 12,
        day: 23,
        year: 1976
      }
    }
  )
  ```

  Alternatively, you may use `db.collection.insertMany()` to insert more than one document at a time. It accepts an array of documents as its argument.
  ```
  db.students.insertMany(
    [
      {
        name: "Miss Piggy",
        home_state: "Washington",
        lucky_number: 4,
        birthday: {
          month: 7,
          day: 7,
          year: 2001,
        },
      },
      {
        name: "Kermit the Frog",
        home_state: "Illinois",
        lucky_number: 10,
        birthday: {
          month: 9,
          day: 12,
          year: 1995,
        },
      }
    ]
  )
```
</details>

<details>
  <summary>4. Get all students.</summary>

  To read all documents in the collection, pass an empty document as the query filter parameter to the `db.collection.find()` method.
  ```
  db.students.find()
  ```
</details>

<details>
  <summary>5. Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).</summary>

  Use the `$or` operator to specify a compound query with an array of documents.
  ```
  db.students.find(
    {
      $or: [
        {
          home_state: 'California'
        },
        {
          home_state: 'Washington'
        }
      ]
    }
  )
  ```
</details>

<details>
  <summary>6. Get all students whose lucky number is greater than 3.</summary>

  Use the `$gt` (greater than) comparison query operator to query selectively on numerical-valued fields.
  ```
  db.students.find({ lucky_number: { $gt: 3 }})
  ```
</details>

<details>
  <summary>7. Get all students whose lucky number is less than or equal to 10.</summary>

  Use the `$lte` (less than or equal to) comparison query operator to query selectively on numerical-valued fields.
  ```
  db.students.find({ lucky_number: { $lte: 10 }})
  ```
</details>

<details>
  <summary>8. Get all students whose lucky number is between 1 and 9 (inclusive).</summary>

  Implicitly, a logical AND conjunction connects the clauses of a compound query so that the query selects the documents in the collection that match all the conditions.
  ```
  db.students.find(
    {
      lucky_number: { $gte: 1 },
      lucky_number: { $lte: 9 },
    }
  )
  ```
</details>

<details>
  <summary>9. Add a field to each student collection called 'interests' that is an ARRAY. It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.</summary>

  Use `db.collection.updateMany()` to update more than one document that match a specified filter. To update all documents in a collection, pass an empty document as the filter.

  The `$set` operator replaces the value of a field with the specified value. If the field does not exist, `$set` will add a new field with the specified value.
  ```
  db.students.updateMany(
    {},
    { $set: { interests: ["coding", "brunch", "MongoDB"] }}
  )
  ```
</details>

<details>
  <summary>10. Add some unique interests for each particular student into each of their interest arrays.</summary>

  The `$push` operator appends a specified value to an array. Here we add the 'ukulele' interest to the student with ID '63cc66ceee617506f16b89ab'.
  ```
  db.students.updateOne(
    { _id: ObjectId("63cc66ceee617506f16b89ab") },
    { $push: { interests: "ukulele" } }
  )
  ```
</details>

<details>
  <summary>11. Add the interest 'taxes' into someone's interest array.</summary>

  The `$push` operator appends a specified value to an array.
  ```
  db.students.updateOne(
    { _id: ObjectId("63cc66ceee617506f16b89ab") },
    { $push: { interests: "taxes" } }
  )
  ```
</details>

<details>
  <summary>12. Remove the 'taxes' interest you just added.</summary>

  The `$pop` operator removes the first or last element of an array. Pass `$pop` a value of -1 to remove the first element of an array and 1 to remove the last element in an array.
  ```
  db.students.updateOne(
    { _id: ObjectId("63cc66ceee617506f16b89ab") },
    { $pop: { interests: 1 } }
  )
  ```
</details>

<details>
  <summary>13. Remove all students who are from California.</summary>

  The `db.collection.deleteMany()` method removes all documents that match the filter from a collection.
  ```
  db.students.deleteMany({ home_state: 'California' })
  ```
</details>

<details>
  <summary>14. Remove a student by name.</summary>

  The `db.collection.deleteOne()` method removes a single document that matches the filter from a collection.
  ```
  db.students.deleteOne({ name: 'Kermit the Frog' })
  ```
</details>

<details>
  <summary>15. Remove a student whose lucky number is greater than 5 (JUST ONE).</summary>

  The `db.collection.deleteOne()` method removes a single document that matches the filter from a collection. It deletes the first document that matches the filter.
  ```
  db.students.deleteOne({ lucky_number: { $gt: 5 } })
  ```
</details>

<details>
  <summary>16. Add a field to each student collection called 'number_of_belts' and set it to 0.</summary>

  Use `db.collection.updateMany()` to update more than one document that match a specified filter. To update all documents in a collection, pass an empty document as the filter.

  The `$set` operator replaces the value of a field with the specified value. If the field does not exist, `$set` will add a new field with the specified value.
  ```
  db.students.updateMany(
    {},
    { $set: { number_of_belts: 0 }}
  )
  ```
</details>

<details>
  <summary>17. Increment this field by 1 for all students in Washington (Seattle Dojo).</summary>

  Use `db.collection.updateMany()` to update more than one document that match a specified filter.

  The `$inc` operator increments a field by a specified value.
  ```
  db.students.updateMany(
    { home_state: "Washington" },
    { $inc: { number_of_belts: 1 }}
  )
  ```
</details>

<details>
  <summary>18. Rename the 'number_of_belts' field to 'belts_earned'.</summary>

  Use `db.collection.updateMany()` to update more than one document that match a specified filter. To update all documents in a collection, pass an empty document as the filter.

  The `$rename` operator updates the name of a field.
  ```
  db.students.updateMany(
    {},
    { $rename: { 'number_of_belts': 'belts_earned' }}
  )
  ```
</details>

<details>
  <summary>19. Remove the 'lucky_number' field.</summary>

  Use `db.collection.updateMany()` to update more than one document that match a specified filter. To update all documents in a collection, pass an empty document as the filter.

  The `$unset` operator deletes a particular field. It's value is an empty string.
  ```
  db.students.updateMany(
    {},
    { $unset: { 'lucky_number': '' }}
  )
  ```
</details>

<details>
  <summary>20. Add a 'updated_on' field, and set the value as the current date.</summary>

  Use `db.collection.updateMany()` to update more than one document that match a specified filter. To update all documents in a collection, pass an empty document as the filter.

  The `$currentDate` operator sets the value of a field to the current date. Pass a value of `true`to set the field value to the current date as a `Date`.

  If the field does not exist, `$currentDate` adds the field to a document.
  ```
  db.students.updateMany(
    {},
    { $currentDate: { updated_on: true }}
  )
  ```
</details>
