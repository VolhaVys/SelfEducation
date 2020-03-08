let Person = function (height, weight, age) {

    return {
        getWeight: function() {
            return weight + " кг";
        },
        getHeight: function () {
            return height + " см";
        },
        getAge: function () {
            return age + " лет";
        },
        birthday: function () {
            ++age;
        }
    }
};

let olya = new Person(162, 49, 25);