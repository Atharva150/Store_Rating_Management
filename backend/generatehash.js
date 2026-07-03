const bcrypt = require("bcrypt");

const hashPassword = async () => {
    try {
        // Change this to the password you want to hash
        const plainPassword = "Admin@123";

        const hashedPassword = await bcrypt.hash(plainPassword, 10);

        console.log("\nPlain Password:");
        console.log(plainPassword);

        console.log("\nHashed Password:");
        console.log(hashedPassword);
    } catch (error) {
        console.error("Error hashing password:", error);
    }
};

hashPassword();