const fs = require('fs');
const pathFn = require('path');
// const chalk = require('chalk');
// const mkdirp = require('mkdirp');
// const tildify = require('tildify');

module.exports = function(dest, fileName, templPath, replaceq) {
  const fullPath = pathFn.join(dest, fileName);
  try {
    if (fs.existsSync(fullPath)) {
      console.info(`${fullPath} 已存在`);
      return false;
    } else {
      let template = templPath ? String(fs.readFileSync(templPath)) : '';
      if (replaceq && Array.isArray(replaceq)) {
        replaceq.forEach(query => {
          template = template.replace(query.match, query.replace);
        })
      }
      // mkdirp.sync(pathFn.dirname(fullPath));
      fs.writeFileSync(fullPath, template);
      console.info(`${fullPath} 成功生成`);
    }
  } catch (err) {
    throw err;
  }
}
