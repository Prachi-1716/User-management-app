const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
var methodOverride = require('method-override');
const path = require("path");
// const bcrypt = require('bcrypt');
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test',
    password: 'Prachi@1716'
});

app.listen(port, () => {
    console.log("Listening from port", port);
})

randomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password()
    ];
}

app.get("/", (req, res) => {
    let q = "SELECT count(id) FROM user";

    connection.query(q, (err, result) => {
        if (err) return res.send(err);
        let count = result[0]['count(id)'];
        return res.render("home.ejs", { count });
    });
});

app.get("/users", (req, res) => {
    let q = "SELECT * FROM user ORDER BY username";

    connection.query(q, (err, result) => {
        if (err) return res.send("database error");
        let users = result;
        return res.render("users.ejs", { users });
    });
});

app.get("/users/:id/edit", (req, res) => {
    let { id } = req.params;
    return res.render("edit.ejs", { id });
});

app.patch("/users/:id", (req, res) => {
    let { id } = req.params;
    let { username, password } = req.body;
    let q = `SELECT * FROM user WHERE id = ?`;

    connection.query(q, [id], (err, result) => {
        if (err) return res.send("database error");

        if (result.length === 0) return res.send("user not found");
        let user = result[0];
        let storedPass = user.password;

        // const match = await bcrypt.compare(password, storedPass);
        const match = (password ==storedPass);
        
        if (match) {
            let update = `UPDATE user SET username = ? WHERE id = ?`;

            connection.query(update, [username, id], (err, result) => {
                if (err) return res.send("database error");
                return res.redirect('/users');
            });
        } else {
            return res.send("incorrect password");
        }
    });
});

app.get("/users/add", (req, res) => {
    return res.render("usersDetail.ejs");
});

app.post("/users", (req, res) => {
    let id = faker.string.uuid();
    let { username, email, password } = req.body;
    // const hashedPassword = await bcrypt.hash(password, 10);
    let q = "INSERT INTO user (id, username, email, password) VALUES(?, ?, ?, ?)";

    connection.query(q, [id, username, email, password], (err, result) => {
        if (err) {
            console.log(err);
            return res.send("Database error");}
        return res.redirect("/users");
    })
});

app.get("/users/:id/delete", (req, res) => {
    let { id } = req.params;
    return res.render("delete.ejs", { id });
});

app.delete("/users/:id", (req, res) => {
    let { id } = req.params;
    let { password } = req.body;

    let q = "SELECT password FROM user WHERE id = ?";

    connection.query(q, [id], (err, result) => {
        if (err) return res.send("Database error");

        if (result.length === 0) return res.send("user not found");

        let storedPass = result[0]["password"];

        // const match = await bcrypt.compare(password, storedPass);
        const match = (password ==storedPass);
        if (match) {
            let d = "DELETE FROM user WHERE id = ?";

            connection.query(d, [id], (err, result) => {
                if (err) return res.send("Database error");
                return res.redirect("/users");
            });
        } else {
            return res.send("incorrect password");
        }
    });
});
