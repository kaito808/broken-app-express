const fs = require('fs');
const axios = require('axios');

fs.readFile("urls.txt", "utf8", function(err, data) {
    if (err) {
        console.log("error", err);
    } else {
        const urls = data.split("\n").filter(Boolean);
        urls.forEach(async (url) => {
            try {
                const filename = url.replace(/^https?:\/\//, "");
                const response = await axios.get(url);
            
                fs.writeFileSync(filename, response.data);
                
                console.log(`Wrote to file ${filename}`);
            } catch (error) {
                console.error(`Couldn't download ${url}`);
            }
        });
    }
});
