window.addEventListener('DOMContentLoaded', () => {
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    salary.addEventListener('input',function () {
        output.textContent = salary.value; 
    });  
});

window.addEventListener('DOMContentLoaded', () => {
    const name = document.querySelector('#name');
    const nameError = document.querySelector('.name-error');
    const validName = document.querySelector(".valid-name");
    name.addEventListener('input', function() {
        if(name.value.length === 0){
            nameError.textContent = "";
            validName.textContent = "";
            return;
        } 
        try{
            (new Employee()).name = name.value;
                nameError.textContent = "";
                validName.textContent = 'Valid';
                document.querySelector(".submitButton").disabled = false;
            } catch (error) {
                nameError.textContent = error;
                validName.textContent = "";
                document.querySelector(".submitButton").disabled = true;
            }    
    });
});    

window.addEventListener('DOMContentLoaded', () => {
    const startDateError = document.querySelector(".startDate-error");
    const validStartDate = document.querySelector(".valid-startDate");
    startDate.addEventListener('input', function() {
        try {
            let dateString = document.querySelector("#year").value + "-" + document.querySelector("#month").value + "-" + document.querySelector("#day").value;
            (new Employee()).startDate = new Date(dateString);
            startDateError.textContent = "";
            validStartDate.textContent = 'Valid.';
            document.querySelector(".submitButton").disabled = false;
        } catch (error) {
            startDateError.textContent = error;
            validStartDate.textContent = "";
            document.querySelector(".submitButton").disabled = true;
        }
    });
});

const save = () => {
    try{
        let employeeData = createEmployee();
        storeEmployee(employeeData);
        resetForm();
    }
    catch(error)
    {
        alert(error);
        return;
    }
    
};

const createEmployee = () => {
    let employeeData = new Employee();
    employeeData.name = getInputValue('#name');
    employeeData.profilePic = getSelectedValues('[name=profile]').pop();
    employeeData.gender = getSelectedValues('[name=gender]').pop();
    employeeData.salary = getInputValue('#salary');
    employeeData.note = getInputValue('#notes');
    let dateString = document.querySelector("#month").value + "/" + document.querySelector("#day").value + "/" + document.querySelector("#year").value;
    employeeData.startDate = new Date(dateString);
    try {
        employeeData.departments = getSelectedValues('[name=department]');
    } catch (error) {
        alert(error);
        return;
    }
    alert("Employee added: " + employeeData.toString());
    return employeeData;
}

const getInputValue = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const getSelectedValues = (property) => {
    let allItems = document.querySelectorAll(property);
    let selectItems = [];
    allItems.forEach(item => {
        if (item.checked)
            selectItems.push(item.value);
    });
    return selectItems;
}

function storeEmployee(employeeData){
    let employeeList = JSON.parse(localStorage.getItem("Employee List: "));

    if(employeeList != undefined){
        employeeList.push(employeeData);
    }
    else{
        employeeList = [employeeData];
    }
    alert("Employee stored: " + employeeList.toString());
    localStorage.setItem("Employee List: ",JSON.stringify(employeeList));
}

const resetForm = () => {
    setDefaultValue("#name", "");
    setDefaultMessage(".name-error");
    setDefaultMessage(".valid-name");
    unsetSelectedValues("[name=profile]");
    unsetSelectedValues("[name=gender]");
    unsetSelectedValues("[name=department]");
    resetSalary("#salary", ".salary-output");
    setDefaultValue("#day", "1");
    setDefaultValue("#month", "January");
    setDefaultValue("#year", "2020");
    setDefaultMessage(".startDate-error");
    setDefaultMessage(".valid-startDate");
    setDefaultValue("#notes", "");
};

const setDefaultValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
};

const unsetSelectedValues = (name) => {
    allValues = document.querySelectorAll(name);
    allValues.forEach(input => input.checked == false);
};

const resetSalary = (id, output) => {
    const rangeElement = document.querySelector(id);
    rangeElement.value = 400000;
    const outputElement = document.querySelector(output);
    outputElement.textContent = rangeElement.value;
};

const setDefaultMessage = (id) => {
    const contentElement = document.querySelector(id);
    contentElement.textContent = "";
};


