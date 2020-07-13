const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adReporterSchema = new Schema({
  title: String,
  num: Number,
  date: {
    type: String,
    default: Date.now(),
  },
});

//Model
const AdReportModel = mongoose.model("AdReportModel", adReporterSchema);

module.exports = AdReportModel;
