function whatCanIDoLegally(age) {
    if (age < 18) {
        return "you can't do anything."
    
    } else if (age >=18 && age <= 20) {
        return "You can drive but don't drink."
    
    } else if (age >= 21) {
        return "You can do either but don't do both at the same time.";
    }
}

module.exports = whatCanIDoLegally;

