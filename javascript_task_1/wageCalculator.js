function Calculate() {
    var hours_worked = document.getElementById("workHours").value;      
    var daily_pay = 1000 * hours_worked;
    var extra_pay = 200;
    var total_pay = 0;
    if (hours_worked>4) {
        extra_hours = hours_worked - 4;
        const bonus = extra_hours * extra_pay;
        total_pay = (daily_pay + (bonus));
        document.getElementById("test").innerHTML = total_pay;
    } else {
        total_pay = (daily_pay);
        document.getElementById("test").innerHTML = total_pay;
    }    
}