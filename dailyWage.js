
function dailyWage(hours_worked) {
    var daily_pay = 1000 * hours_worked;
    var extra_pay = 200;
    var total_pay = 0;
    if (hours_worked>4) {
        extra_hours = hours_worked - 4;
        const bonus = extra_hours * extra_pay;
        total_pay = (daily_pay + (bonus));
        console.log("Your daily wage is " + total_pay);
    } else {
        total_pay = (daily_pay);
        console.log("Your daily wage is " + total_pay);
    }
}

dailyWage(8);
