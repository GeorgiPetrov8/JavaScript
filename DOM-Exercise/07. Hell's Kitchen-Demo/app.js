// DEMO 54/100

function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = document.querySelector('#inputs textarea').value;
      input = input.slice(2, input.length - 2);;
      let restaurans = input.split(/",\n*"/g);
      let result = [];
      for (const currRestaurant of restaurans) {
         let restAndWorkers = currRestaurant.split(' - ');

         //1. name done
         let restName = restAndWorkers[0];

         let workers = restAndWorkers[1].split(', ');
         //4. workers
         let arrWorkers = [];
         for (const worker of workers) {
            let [workerName, workerSalary] = worker.split(' ');
            arrWorkers.push({ 'name': workerName, 'salary': Number(workerSalary) })
         }

         //2. average salary NOT DONE
         let sum = 0;
         for (const worker of arrWorkers) {
            sum += worker.salary;
         }
         let averageSalary = sum / arrWorkers.length;

         //3. best salary DONE
         let bestSalary = arrWorkers.reduce((acc, curr) => {
            if (curr.salary >= acc) {
               return curr.salary;
            }
            return acc;
         }, 0);

         let isExists = false;
         for (let rest of result) {
            if (rest.name === restName) {
               rest["average salary"] = averageSalary.toFixed(2);
               rest["best salary"] = bestSalary.toFixed(2);
               rest.workers = arrWorkers;
               isExists = true;
               break
            }
         }

         if (!isExists) {
            result.push({
               'name': restName,
               'average salary': averageSalary.toFixed(2),
               'best salary': bestSalary.toFixed(2),
               'workers': arrWorkers
            });
         }

      }

      //sort by avg salary
      result.sort((a, b) => {
         if (a["average salary"] >= ["average salary"]) {
            return -1;
         }
         return 1;
      })

      let bestRest = result[0];
      bestRest.workers.sort((a, b) => {
         if (a.salary >= b.salary) {
            return -1;
         }
         return 1;
      })

      document.querySelector('#bestRestaurant>p')
      .textContent = `Name: ${bestRest.name} Average Salary: ${bestRest['average salary']} Best Salary: ${bestRest['best salary']}`;

      let output = '';
      for (const worker of bestRest.workers) {
         output += `Name: ${worker.name} With Salary: ${worker.salary} `;
      }

      document.querySelector('#workers>p').textContent = output.trim();
   }
}