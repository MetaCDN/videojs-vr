const generate = require('./videojs-vr-generate-rollup-config');

// see https://github.com/videojs/videojs-generate-rollup-config
// for options
const config = generate({});

// console.log("KJSL: config=" + config);
// for (var i in config) {
//   console.log("KJSL: i=" + i + " config[i]=" + config[i]);
// }

// export the builds to rollup
export default Object.values(config.builds);
