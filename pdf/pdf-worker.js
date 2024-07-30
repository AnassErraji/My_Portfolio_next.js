if (process.env.NODE_ENV === "production") {
  // use minified verion for production
  module.exports = require("//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js");
} else {
  module.exports = require("//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js");
}
