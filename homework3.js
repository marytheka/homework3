const mult = function (x, y, z) {
    return x * y * z;
};

const add = function (x, y, z) {
    return x + y + z;
};

const test = function (x, y, z) {
    return add(10, 4, mult(x, y, z))
};

/////////////////////////////////

const noVal = function () {
    return "text";
};


/////////////////////////////////

const printToConsole = function (str) {
    console.log(str);
};
//////////////////////////////////


const fullName = function (fName, lName) {
    return fName + ' ' + lName;
};


////////////////////////////////////


const strings = function (str1, str2, str3) {
    const length1 = str1.length;
    const length2 = str2.length;
    const length3 = str3.length;
    
    
    if (length1 > length2 && length1 > length3) {
        return str1;
    }
    else if (length1 < length2 && length2 > length3) {
        return str2;
    }
    else {
        return str3;
    }
};


//////////////////////////////////////

const numbers = function (a, b) {
    if (a === b) {
        return 0;
    }
    else if (a > b) {
        return 1;
    }
    else {
        return -1;
    }
};


//////////////////////////////

const firstTruthy = function (a, b, c) {
    if (a) {
        return a;
    }
    else if (b) {
        return b;
    }
    else {
        return c;
    }
};


