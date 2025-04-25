// 1

const user = {
    name: "John",
    age: 30,
    hobby: "reading",
    premium: true
  };
  
  user.mood = "happy";
  user.hobby = "skydiving";
  user.premium = false;
  
  for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
  }

//  2

function countProps(obj) {
    return Object.keys(obj).length;
  }
  
  console.log(countProps({ name: "John", age: 30}));

//  3

function findBestEmployee(employees) {
    let best = "";
    let maxTasks = 0;
  
    for (const name in employees) {
      if (employees[name] > maxTasks) {
        maxTasks = employees[name];
        best = name;
      }
    }
  
    return best;
  }
  
  console.log(findBestEmployee({
    Anna: 29,
    David: 35,
    Helen: 1
  }));

// 4

function countTotalSalary(employees) {
    let total = 0;
  
    for (const name in employees) {
      total += employees[name];
    }
  
    return total;
  }
  
  console.log(countTotalSalary({
    Anna: 1000,
    David: 1500,
    Helen: 500
  })); 

// 5

function getAllPropValues(arr, prop) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (prop in arr[i]) {
        result.push(arr[i][prop]);
      }
    }
  
    return result;
  }
  

  const usersArray = [
    { name: 'Alice', age: 25, role: 'admin' },
    { name: 'Bob', age: 30, role: 'user' },
    { name: 'Charlie', age: 35, role: 'moderator' }
  ];
  
  console.log(getAllPropValues(usersArray, 'role'));
  console.log(getAllPropValues(usersArray, 'age')); 
  console.log(getAllPropValues(usersArray, 'name')); 
//   6

function calculateTotalPrice(allProducts, productName) {
    let total = 0;
  
    for (const item of allProducts) {
      if (item.name === productName) {
        total = item.price * item.quantity;
        break;
      }
    }
  
    return total;
  }
  
  const store = [
    { name: "Apple", price: 10, quantity: 5 },
    { name: "Banana", price: 3, quantity: 10 }
  ];
  
  console.log(calculateTotalPrice(store, "Banana"));