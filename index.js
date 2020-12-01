const cliSpinners = require('cli-spinners');
const Ora = require('ora');
module.exports.create = function(text, ms, spinnerName) {
const spinner = new Ora({
	text: text,
	spinner: spinnerName || cliSpinners.random
});
spinner.start();
setTimeout(() => {
	spinner.succeed();
}, ms);
}

