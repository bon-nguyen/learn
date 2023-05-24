const contacts = new Map()

contacts.set("Bon", { phone: '123-456', address: '123 N 1st ' })

contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });

console.log("contacts", contacts)
console.log("size", contacts)
contacts.delete("Bon")


console.log("contacts", contacts)