// /* 
//   Recreate Object.entries method
//   Given an object,
//   return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
//   Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
// */

// const obj1 = {
//     name: "Pizza",
//     calories: 9001,
//   };
  
//   const expected1 = [
//     ["name", "Pizza"],
//     ["calories", 9001],
//   ];
  
//   const proto = { inheritance: "inherited key", keyOnProto: "val from proto" };
  
//   // This object contains inherited key value pairs from the above proto obj.
//   // hint: hasOwnProperty
//   const obj2 = Object.assign(Object.create(proto), {
//     firstName: "Foo",
//     lastName: "Bar",
//     age: 13,
//   });
  
//   const expected2 = [
//     ["firstName", "Foo"],
//     ["lastName", "Bar"],
//     ["age", 13],
//   ];
  
//   function entries(obj) {
//     console.log(obj)
//     let arr2D =[]
//     for (let key in obj){
//       obj.hasOwnProperty(key)&&
//       arr2D.push([key,obj[key]])
    
//     }
//     return arr2D
//     //given an object, return a 2d array of key value pairs. 
//     // expected return array: [[key1, val1], [key2, val2] ...]
//     // Do not inherit the inherited proto
//   }
//   console.log(entries(obj2))
  //  obj.hasOwnProperty('inheritance')  === false
  // obj.hasOwnProperty('(firstname') === true
  
  // Erik's attempt ********************************
  // function entries(obj) {
  //     console.log(obj)
  //     let arr2D = []
  //     let i = 0
  //     for (i in obj){
  //         arr2D.push([i , obj[i]])
  //         console.log(arr2D);
  //         i++
  //     }
  //     return arr2D
  // }
  // entries(obj1)
  
  const table = "users";
  const insertData1 = { first_name: "John", last_name: "Doe" };
  const expected1 =
    "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";
  
  // Bonus:
  const insertData2 = {
    first_name: "John",
    last_name: "Doe",
    age: 30,
    is_admin: false,
  };
  const expected2 =
    "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";
  // Explanation: no quotes around the int or the bool, technically in SQL the bool would become a 0 or 1, but don't worry about that here.
  
  
  function insert(tableName, columnValuePairs) {
      
      let keys =""
      let value=""
    for (let key in columnValuePairs){
        keys += key
        keys += " , "
        value += columnValuePairs[key]
        value += " , "

    }
    keys1 = keys.split(" ")
    keys1.splice(-2,2)
    keys = keys1.join("")
    value1 = value.split(" ")
    value1.splice(-2,2)
    value = value1.join("")
    console.log(value1);
    return `INSERT INTO ${tableName} (${keys}) VALUES (${value})`
  }
  //Generates a SQL insert statement from the inputs
  // Tip: string interpolation (`) will make it easy to add variables into a string or to add quotations without needing to escape them.
    
  console.log(insert(table,insertData1));
  function insertFunctional(tableName, columnValuePairs) {
    //Bonus: Write a 2nd solution focusing on functional programming using built in methods
  }