
function dailyWage(hours_worked) {

    let daily_pay = 1000 * hours_worked;
    let extra_pay = 200;
    let total_pay = 0;
    if (hours_worked>4) {
        extra_hours = hours_worked - 4;
        const bonus = extra_hours * extra_pay;
        return total_pay = (daily_pay + (bonus));
    } else {
        return total_pay = (daily_pay);
    }
}
let show_wage = dailyWage(8);
console.log("Daily Wage")
console.log(show_wage);