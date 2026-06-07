let employeesArr = [
  { name : "Joey" , id: 1 , age: 26},
  { name : "Lily" , id: null , age: 24},
  { name : "Alice" , id: 7 , age: null},
  { name : "Sam" , id: 8 , age: 24},
  { name : "Ray" , id: null , age: null}
  ]

employeesArr.forEach(emp => {
    const checkId = emp.id ?? "miss id";
    const checkAge = emp.age ?? "miss age";

    if (checkId === "miss id" || checkAge === "miss age") {
        console.log(`${emp.name} id - ${checkId} and age - ${checkAge}`);
    }
});

