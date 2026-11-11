function shopping(list1, list2) {
  return new Promise((resolve, reject) => {

    const sorted1 = [...list1].sort();
    const sorted2 = [...list2].sort();

    
    const isIdentical =
      sorted1.length === sorted2.length &&
      sorted1.every((value, index) => value === sorted2[index]);

    if (isIdentical) {
      resolve("Good Work");
    } else {
      reject("You forgot some products");
    }
  });
}


const userList = ["חלב", "לחם", "ביצים"];
const targetList = ["לחם", "חלב", "ביצים"];


shopping(userList, targetList)
  .then((message) => {
    console.log(message); 
  })
  .catch((error) => {
    console.log(error); 
  });


async function verifyShopping() {
  try {
    const result = await shopping(userList, targetList);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

verifyShopping();