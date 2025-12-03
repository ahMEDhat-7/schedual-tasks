import cron from "node-cron";


const cronExpression = "*/5 * * * * *";

const isValid = cron.validate(cronExpression);


const getReports = (name:string)=>{
    console.log(`${name} is schedualled`);
} 

const names: string[] = ["Report1","Report2","Report3"];
let runs = 0;

const task = cron.schedule(cronExpression,()=>{  
    getReports(names[runs] as string);
    runs = (runs +1 ) % names.length;
});


task.start();


setTimeout(()=>{
    task.stop();
    console.log("Task Stopped");
    
},6000)

