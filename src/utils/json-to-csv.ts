// Import csv-writer

import { createObjectCsvWriter } from 'csv-writer';

export function exportToCsv(
  header: any[],
  data: any[],
  fileName: string,
): Boolean {
  const csvWriter = createObjectCsvWriter({
    path: `${fileName}.csv`,
    header: header,
  });

  csvWriter
    .writeRecords(data)
    .then(() => true)
    .catch((error) => {
      throw error;
    });

  return false;
}
