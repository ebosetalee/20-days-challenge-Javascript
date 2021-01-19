const fs = require("fs");

fs.readFile(__dirname + "/file1.txt", (err, data1) => {
    if (err) {
        console.log(err);
    }
    data1 = data1.toString().split("\n");
    fs.readFile(__dirname + "/file2.txt", (err, data2) => {
        if (err) {
            console.log(err);
        }
        data2 = data2.toString().split("\n");
        for (let i = 0; i < data2.length; i++) {
            const items = data1[i] + " " + data2[i];
            fs.appendFile(__dirname + "/file3.txt", items + "\n", (err) => {
                if (err) {
                    console.log(err);
                }
                console.log(items);
            });
        }
    });
});
