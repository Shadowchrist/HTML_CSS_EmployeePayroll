window.addEventListener('DOMContentLoaded', (event) => {
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input',function () {
        output.textContent = salary.value; 
    });
    
});

window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
        if(name.value.length == 0){
            textError.textContent = "";
            return;
        } 
        try{
            (new Employee()).name = name.value;
            textError.textContent = "";
        }catch(e){
            textError.textContent = e;
        }
    });
});

const save = () => {
    let employeeData;
    try{
        employeeData = createEmployee();
        storeEmployee(employeeData);
    }catch(e){
        return;
    }
}

const createEmployee = () => {
    let employeeData = new Employee();
    employeeData.name = getInputValueById('#name');
    employeeData.profilePic = getSelectedValues('[name=profile]').pop();
    employeeData.gender = getSelectedValues('[name=gender]').pop();
    employeeData.department = getSelectedValues('[name=department]');
    employeeData.salary = getInputValueById('#salary');
    employeeData.note = getInputValueById('#notes');
    let year = getInputValueById('#year');
    let month = parseInt(getInputValueById('#month'))-1;
    let day = getInputValueById('#day');
    employeeData.startDate = new Date(year,month,day);
    alert(employeeData.toString());
    return employeeData;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const getSelectedValues = (propertyValue) => {
    let allEmployees = document.querySelectorAll(propertyValue);
    let selectEmployees = [];
    allEmployees.forEach(employee => {
        if(employee.checked)
        selectEmployees.push(employee.value);
    });
    return selectEmployees;
}

function storeEmployee(employeePayrollData){
    let employeeList = JSON.parse(localStorage.getItem("Employee List: "));

    if(employeeList != undefined){
        employeeList.push(EmployeeData);
    }
    else{
        employeeList = [employeeData];
    }

    alert(employeeList.toString());
    localStorage.setItem("Employee List: ",JSON.stringify(employeeList));
}

