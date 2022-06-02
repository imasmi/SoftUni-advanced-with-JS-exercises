function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
            let textarea = document.getElementsByTagName("textarea")[0].value;
            let items = JSON.parse(textarea);
            const result = {}

            for ( const item of items){
               let totalSalary = 0;
               let restaurant = item.split(" - ")[0];
               let workers = item.split(" - ")[1].split(", ");
               if (!result[restaurant]){ result[restaurant] = {};} 
               if (!result[restaurant]["workers"]){ result[restaurant]["workers"] = [];} 
               
               for (const worker of workers) {
                  let [name, salary] = [...worker.split(" ")];
                  result[restaurant]["workers"].push({name,salary});
                  totalSalary += Number(salary);
               }

               result[restaurant].totalSalary = result[restaurant].totalSalary ? result[restaurant].totalSalary += totalSalary : totalSalary;
            }
            
            let bestRestaurant = "";
            let maxAverage = 0;

            for (const restaurant in result) {
               let average = result[restaurant].totalSalary / result[restaurant].workers.length;

               if (average > maxAverage) {
                  maxAverage = average;
                  bestRestaurant = restaurant;
               }

               result[restaurant]["workers"].sort((a, b) => Number(b.salary) -  Number(a.salary));
            }

            document.querySelector("#bestRestaurant p").textContent = `Name: ${bestRestaurant} Average Salary: ${Number(maxAverage).toFixed(2)} Best Salary: ${Number(result[bestRestaurant]["workers"][0].salary).toFixed(2)}`;
            
            const bestWorker = [];
            for (const worker of result[bestRestaurant]["workers"]) {
               bestWorker.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
            }

            document.querySelector("#workers p").textContent = bestWorker.join(" ");
      }
}