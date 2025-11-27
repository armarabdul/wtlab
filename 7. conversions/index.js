// Import crypto module
const crypto = require("crypto");

// 1️ JSON → Object
let jsonText = '{"name":"John","age":25}';
let obj = JSON.parse(jsonText);
console.log("Name:", obj.name, "Age:", obj.age);

// 2️ JSON → Date
let dateObj = JSON.parse('{"date":"2025-10-07T10:00:00Z"}');
console.log("Converted Date:", new Date(dateObj.date).toString());

// 3️ JSON → CSV
let data = [{ name: "John", age: 25 }, { name: "Alice", age: 30 }];
let csv = data.map(r => Object.values(r).join(",")).join("\n");
console.log("\nJSON ➜ CSV:\n" + csv);

// 4️ CSV → JSON
let csvText = "name,age\nJohn,25\nAlice,30";
let [head, ...rows] = csvText.split("\n");
let keys = head.split(",");
let json = rows.map(r => {
  let v = r.split(",");
  return keys.reduce((o, k, i) => (o[k] = v[i], o), {});
});
console.log("\nCSV ➜ JSON:\n", json);

// 5️ Hash using crypto.createHash()
let text = "hello";
let hash = crypto.createHash("sha256").update(text).digest("hex");
console.log("\nSHA256 Hash of 'hello':", hash);