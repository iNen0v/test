const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const crypto = require('crypto');

const url = 'https://your-website.com'; // Replace 'your-website.com' with the actual URL

// Function to extract data rows from the table
const extractDataRows = (html) => {
    const $ = cheerio.load(html);
    const dataRows = [];
    $('table[summary="Спот търговия на банките с чуждестранна валута срещу левове"] tr').each((index, row) => {
        if (index !== 0) {
            const rowData = [];
            $(row).find('td').each((index, col) => {
                rowData.push($(col).text().trim());
            });
            dataRows.push(rowData);
        }
    });
    return dataRows;
};

// Function to sort data rows by 'обем продадени'
const sortDataRows = (dataRows) => {
    return dataRows.sort((a, b) => {
        const volumeA = parseFloat(a[5].replace(/\s/g, '').replace(',', '.'));
        const volumeB = parseFloat(b[5].replace(/\s/g, '').replace(',', '.'));
        return volumeB - volumeA;
    });
};

// Function to save sorted data rows to CSV file
const saveToCSV = (dataRows) => {
    const csvRows = dataRows.map(row => row.join(',')).join('\n');
    fs.writeFileSync('interbank_forex_market.csv', csvRows);
};

// Function to compare current data with saved data
const compareWithSavedData = (currentData) => {
    try {
        const savedData = fs.readFileSync('interbank_forex_market.csv', 'utf-8');
        const currentHash = crypto.createHash('md5').update(JSON.stringify(currentData)).digest('hex');
        const savedHash = crypto.createHash('md5').update(savedData).digest('hex');
        return currentHash !== savedHash;
    } catch (error) {
        return true;
    }
};

// Main function
const main = async () => {
    try {
        const response = await axios.get(url);
        const dataRows = extractDataRows(response.data);
        const sortedDataRows = sortDataRows(dataRows);

        if (compareWithSavedData(sortedDataRows)) {
            saveToCSV(sortedDataRows);
            console.log("New data saved to CSV.");
        } else {
            console.log("No changes in data. CSV not updated.");
        }
    } catch (error) {
        console.error("Failed to fetch webpage:", error.message);
    }
};

main();
