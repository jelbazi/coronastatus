import express from 'express';

import { CovidReportRepository } from '../repository/CovidReportRepository';
import { aggregateCovidReports } from '../util/report-aggregator';

const router = express.Router();
const reportRepo = new CovidReportRepository();

router.get('/aggregated', async (req, res) => {
  const reports = await reportRepo.getLatestCovidReports();
  const aggregated = aggregateCovidReports(reports);
  res.send(aggregated);
});

router.get('/', (req, res) => {
  return res.render('pages/map');
});

export default router;
