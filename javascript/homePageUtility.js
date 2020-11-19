let employeeList;
window.addEventListener("DOMContentLoaded", () => {
    employeeList = getEmployeesFromStorage();
    document.querySelector(".emp-count").textContent = employeeList.length;
    createInnerHtml();
});

const getEmployeesFromStorage = () => {
    return localStorage.getItem("Employee List: ") ?
        JSON.parse(localStorage.getItem("Employee List: ")) : [];
};

const createInnerHtml = () => {
    const headerHtml =
        "<th></th>" +
        "<th>Name</th>" +
        "<th>Gender</th>" +
        "<th>Department</th>" +
        "<th>Salary</th>" +
        "<th>Start Date</th>" +
        "<th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    if (employeeList.length == 0) {
        return;
    }
    for (let employeeData of employeeList) {
        innerHtml = `${innerHtml}
        <tr>
            <td><img class="profile" alt="" src="${employeeData._profilePic}"></td>
            <td>${employeeData._name}</td>
            <td>${employeeData._gender}</td>
            <td>${getDepartmentHtml(employeeData._departments)}</td>
            <td>${employeeData._salary}</td>
            <td>${dateString(employeeData._startDate)}</td>
            <td>
                <img id="${employeeData._id}" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                <img id="${employeeData._id}" onclick="update(this)" alt="edit" src="../assets/icons/create-black-18dp.svg">
            </td>
        </tr>
        `;
    }
    document.querySelector("#display").innerHTML = innerHtml;
};

const getDepartmentHtml = (departments) => {
    let departmentHtml = "";
    for (let department of departments) {
        departmentHtml = `${departmentHtml} <div class="dept-label">${department}</div>`;
    }
    return departmentHtml;
};

const dateString = (date) => {
    let startDate= new Date(date);
    return startDate.toLocaleDateString();
};

let site_properties = {
    home_page: "../pages/homePage.html",
    add_emp__page: "../pages/employeeDataInput.html"
};