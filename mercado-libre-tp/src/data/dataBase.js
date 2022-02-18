let fs = require('fs');
const path = require('path');

module.exports = {
    getProducts : JSON.parse(fs.readFileSync(path.join(__dirname, './productsDataBase.json'), 'utf-8')),
    writeJson : (dataBase, file) => {
        fs.writeFileSync(path.join(__dirname, `./${file}.json`), JSON.stringify(dataBase), "utf-8")
    },
}
