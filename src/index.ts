import { writeFile } from "fs";
import cron from "node-cron";

const getDateFormatted = () => {
    const date = new Date();

    const ss = String(date.getSeconds()).padStart(2, '0');
    const mm = String(date.getMinutes()).padStart(2, '0');
    const hh = String(date.getHours()).padStart(2, '0');

    const DD = String(date.getDate()).padStart(2, '0');
    const MM = String(date.getMonth() + 1).padStart(2, '0');
    const YY = String(date.getFullYear());

    const formatted = `${ss}:${mm}:${hh}_${DD}-${MM}-${YY}`;

    return formatted;

}


// Every 10 sec
const cronExpression = "*/10 * * * * *";
const db = "./src/db";

const isValid = cron.validate(cronExpression);

const backUp = async () => {
    const fileName = `${db}/backup_${getDateFormatted()}`;
    writeFile(fileName, `backup created at ${getDateFormatted()}`, { flag: "w+" }, (err: any) => {
        if (err) {
            console.error(err);
        } else {
            console.log("backup created");
        }
    });
}


const task = cron.schedule(cronExpression, () => {
    backUp();

});


task.start();
