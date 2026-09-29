// ==========================================
// EMPLOYEE ADMIN PORTAL
// Professional Admin Dashboard
// ==========================================


// ==========================================
// DATA
// ==========================================

let employees = [
    {
        id: "EMP001",
        name: "Kushi",
        department: "Development",
        role: "Web Developer"
    },
    {
        id: "EMP002",
        name: "Priya",
        department: "Finance",
        role: "Finance Executive"
    },
    {
        id: "EMP003",
        name: "Neha",
        department: "Testing",
        role: "Tester"
    },
    {
        id: "EMP004",
        name: "Rahul",
        department: "Development",
        role: "Software Developer"
    },
    {
        id: "EMP005",
        name: "Ananya",
        department: "Marketing",
        role: "Marketing Executive"
    },
    {
        id: "EMP006",
        name: "Arjun",
        department: "Development",
        role: "Frontend Developer"
    },
    {
        id: "EMP007",
        name: "Sneha",
        department: "Testing",
        role: "QA Engineer"
    },
    {
        id: "EMP008",
        name: "Rohan",
        department: "Finance",
        role: "Accountant"
    },
    {
        id: "EMP009",
        name: "Divya",
        department: "Marketing",
        role: "Content Executive"
    },
    {
        id: "EMP010",
        name: "Vikram",
        department: "Development",
        role: "Backend Developer"
    }
];


let attendance = [
    {
        name: "Kushi",
        date: "29-09-2026",
        status: "Present"
    },
    {
        name: "Priya",
        date: "29-09-2026",
        status: "Present"
    },
    {
        name: "Neha",
        date: "29-09-2026",
        status: "Absent"
    },
    {
        name: "Rahul",
        date: "29-09-2026",
        status: "Present"
    },
    {
        name: "Ananya",
        date: "29-09-2026",
        status: "Present"
    },
    {
        name: "Arjun",
        date: "29-09-2026",
        status: "Present"
    },
    {
        name: "Sneha",
        date: "29-09-2026",
        status: "Absent"
    },
    {
        name: "Rohan",
        date: "29-09-2026",
        status: "Present"
    },
    {
        name: "Divya",
        date: "29-09-2026",
        status: "Present"
    },
    {
        name: "Vikram",
        date: "29-09-2026",
        status: "Present"
    }
];


let tasks = [
    {
        employee: "Kushi",
        task: "Website Design",
        status: "Completed"
    },
    {
        employee: "Priya",
        task: "Database Update",
        status: "Pending"
    },
    {
        employee: "Neha",
        task: "Application Testing",
        status: "In Progress"
    },
    {
        employee: "Rahul",
        task: "API Development",
        status: "In Progress"
    },
    {
        employee: "Ananya",
        task: "Social Media Campaign",
        status: "Pending"
    },
    {
        employee: "Arjun",
        task: "Frontend Development",
        status: "Completed"
    },
    {
        employee: "Sneha",
        task: "Test Case Preparation",
        status: "Pending"
    },
    {
        employee: "Rohan",
        task: "Monthly Report",
        status: "Completed"
    },
    {
        employee: "Divya",
        task: "Content Planning",
        status: "In Progress"
    },
    {
        employee: "Vikram",
        task: "Server Development",
        status: "Pending"
    }
];


let leaves = [
    {
        employee: "Kushi",
        date: "30-09-2026",
        status: "Approved"
    },
    {
        employee: "Neha",
        date: "01-10-2026",
        status: "Pending"
    },
    {
        employee: "Sneha",
        date: "02-10-2026",
        status: "Pending"
    },
    {
        employee: "Rahul",
        date: "05-10-2026",
        status: "Approved"
    },
    {
        employee: "Ananya",
        date: "07-10-2026",
        status: "Pending"
    }
];


// ==========================================
// CURRENT DATE
// ==========================================

function showCurrentDate() {

    let header = document.querySelector("header");

    if (!header) {
        return;
    }

    let dateElement =
        document.createElement("small");

    dateElement.id = "currentDate";

    let today = new Date();

    let options = {
        day: "2-digit",
        month: "short",
        year: "numeric"
    };

    dateElement.textContent =
        today.toLocaleDateString(
            "en-GB",
            options
        );

    dateElement.style.display = "block";
    dateElement.style.marginTop = "5px";
    dateElement.style.color = "#666";

    let title = header.querySelector("h1");

    title.appendChild(dateElement);
}


// ==========================================
// DASHBOARD
// ==========================================

function updateDashboard() {

    let cards =
        document.querySelectorAll(".card p");

    if (cards.length < 3) {
        return;
    }


    let totalEmployees =
        employees.length;


    let presentEmployees =
        attendance.filter(function(person) {

            return person.status === "Present";

        }).length;


    let absentEmployees =
        attendance.filter(function(person) {

            return person.status === "Absent";

        }).length;


    let pendingTasks =
        tasks.filter(function(task) {

            return task.status === "Pending";

        }).length;


    let pendingLeaves =
        leaves.filter(function(leave) {

            return leave.status === "Pending";

        }).length;


    cards[0].textContent =
        totalEmployees;

    cards[1].textContent =
        presentEmployees;

    cards[2].textContent =
        pendingTasks;


    // Add professional summary

    let dashboard =
        document.querySelector("#dashboard");


    let oldSummary =
        document.getElementById(
            "professionalSummary"
        );


    if (oldSummary) {
        oldSummary.remove();
    }


    let summary =
        document.createElement("div");

    summary.id =
        "professionalSummary";


    summary.innerHTML = `

        <div>
            <strong>${absentEmployees}</strong>
            <span>Absent Today</span>
        </div>

        <div>
            <strong>${pendingLeaves}</strong>
            <span>Pending Leaves</span>
        </div>

        <div>
            <strong>${tasks.filter(
                function(task) {
                    return task.status === "Completed";
                }
            ).length}</strong>
            <span>Completed Tasks</span>
        </div>

        <div>
            <strong>${Math.round(
                (presentEmployees /
                totalEmployees) * 100
            )}%</strong>
            <span>Attendance Rate</span>
        </div>

    `;


    summary.style.display =
        "grid";

    summary.style.gridTemplateColumns =
        "repeat(4, 1fr)";

    summary.style.gap =
        "15px";

    summary.style.marginTop =
        "20px";


    let boxes =
        summary.querySelectorAll("div");


    boxes.forEach(function(box) {

        box.style.background =
            "#f1f3f4";

        box.style.padding =
            "15px";

        box.style.borderRadius =
            "8px";

        box.style.textAlign =
            "center";

    });


    boxes.forEach(function(box) {

        let strong =
            box.querySelector("strong");

        strong.style.display =
            "block";

        strong.style.fontSize =
            "22px";

        strong.style.color =
            "#2f3e46";

    });


    boxes.forEach(function(box) {

        let span =
            box.querySelector("span");

        span.style.display =
            "block";

        span.style.marginTop =
            "5px";

        span.style.fontSize =
            "13px";

        span.style.color =
            "#666";

    });


    dashboard.appendChild(summary);
}


// ==========================================
// EMPLOYEES
// ==========================================

function displayEmployees(data = employees) {

    let table =
        document.querySelector(
            "#employees table"
        );


    table.innerHTML = `

        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Role</th>
            <th>Action</th>
        </tr>

    `;


    data.forEach(function(employee) {

        let row =
            table.insertRow();


        let index =
            employees.indexOf(employee);


        row.innerHTML = `

            <td>${employee.id}</td>

            <td>
                <strong>
                    ${employee.name}
                </strong>
            </td>

            <td>${employee.department}</td>

            <td>${employee.role}</td>

            <td>

                <button
                    onclick="deleteEmployee(${index})">
                    Delete
                </button>

            </td>

        `;
    });


    styleButtons();
}


// ==========================================
// EMPLOYEE SEARCH
// ==========================================

function createEmployeeSearch() {

    let section =
        document.querySelector(
            "#employees"
        );


    let search =
        document.createElement("input");


    search.id =
        "employeeSearch";


    search.placeholder =
        "Search employees by name, department or role";


    search.style.width =
        "100%";

    search.style.padding =
        "11px";

    search.style.marginBottom =
        "15px";

    search.style.border =
        "1px solid #ccc";

    search.style.borderRadius =
        "5px";


    section.insertBefore(
        search,
        section.querySelector("table")
    );


    search.addEventListener(
        "input",
        function() {

            let value =
                search.value.toLowerCase();


            let result =
                employees.filter(
                    function(employee) {

                        return (

                            employee.name
                                .toLowerCase()
                                .includes(value)

                            ||

                            employee.department
                                .toLowerCase()
                                .includes(value)

                            ||

                            employee.role
                                .toLowerCase()
                                .includes(value)

                        );

                    }
                );


            displayEmployees(result);
        }
    );
}


// ==========================================
// ADD EMPLOYEE FORM
// ==========================================

function showEmployeeForm() {

    if (document.getElementById("employeeForm")) {
        return;
    }


    let form =
        document.createElement("div");


    form.id =
        "employeeForm";


    form.innerHTML = `

        <div>

            <h3>Add New Employee</h3>

            <input
                type="text"
                id="newEmployeeName"
                placeholder="Employee Name">

            <select id="newEmployeeDepartment">

                <option value="">
                    Select Department
                </option>

                <option>
                    Development
                </option>

                <option>
                    Testing
                </option>

                <option>
                    Finance
                </option>

                <option>
                    Marketing
                </option>

            </select>

            <input
                type="text"
                id="newEmployeeRole"
                placeholder="Employee Role">

            <div>

                <button onclick="saveEmployee()">
                    Add Employee
                </button>

                <button onclick="closeEmployeeForm()">
                    Cancel
                </button>

            </div>

        </div>

    `;


    form.style.background =
        "#f5f6fa";

    form.style.padding =
        "20px";

    form.style.marginBottom =
        "20px";

    form.style.borderRadius =
        "8px";


    let inputs =
        form.querySelectorAll(
            "input, select"
        );


    inputs.forEach(function(input) {

        input.style.width =
            "100%";

        input.style.padding =
            "10px";

        input.style.marginBottom =
            "10px";

        input.style.border =
            "1px solid #ccc";

        input.style.borderRadius =
            "5px";

    });


    let heading =
        document.querySelector(
            "#employees h2"
        );


    heading.after(form);

    styleButtons();
}


// ==========================================
// SAVE EMPLOYEE
// ==========================================

function saveEmployee() {

    let name =
        document.getElementById(
            "newEmployeeName"
        ).value.trim();


    let department =
        document.getElementById(
            "newEmployeeDepartment"
        ).value;


    let role =
        document.getElementById(
            "newEmployeeRole"
        ).value.trim();


    if (!name || !department || !role) {

        alert(
            "Please fill all employee details."
        );

        return;
    }


    let id =
        "EMP" +
        String(employees.length + 1)
            .padStart(3, "0");


    employees.push({

        id: id,

        name: name,

        department: department,

        role: role

    });


    closeEmployeeForm();

    displayEmployees();

    updateDashboard();

    updateDepartments();
}


// ==========================================
// CLOSE EMPLOYEE FORM
// ==========================================

function closeEmployeeForm() {

    let form =
        document.getElementById(
            "employeeForm"
        );


    if (form) {
        form.remove();
    }
}


// ==========================================
// DELETE EMPLOYEE
// ==========================================

function deleteEmployee(index) {

    let employee =
        employees[index];


    let answer =
        confirm(
            "Are you sure you want to remove " +
            employee.name +
            "?"
        );


    if (!answer) {
        return;
    }


    employees.splice(
        index,
        1
    );


    displayEmployees();

    updateDashboard();

    updateDepartments();
}


// ==========================================
// ATTENDANCE
// ==========================================

function displayAttendance() {

    let table =
        document.querySelector(
            "#attendance table"
        );


    table.innerHTML = `

        <tr>

            <th>Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>Admin Action</th>

        </tr>

    `;


    attendance.forEach(
        function(person, index) {

            let row =
                table.insertRow();


            row.innerHTML = `

                <td>
                    <strong>
                        ${person.name}
                    </strong>
                </td>

                <td>
                    ${person.date}
                </td>

                <td>
                    ${person.status}
                </td>

                <td>

                    <button
                        onclick="setAttendance(${index}, 'Present')">
                        Present
                    </button>

                    <button
                        onclick="setAttendance(${index}, 'Absent')">
                        Absent
                    </button>

                </td>

            `;
        }
    );


    styleButtons();
}


// ==========================================
// SET ATTENDANCE
// ==========================================

function setAttendance(index, status) {

    attendance[index].status =
        status;


    displayAttendance();

    updateDashboard();
}


// ==========================================
// TASKS
// ==========================================

function displayTasks() {

    let table =
        document.querySelector(
            "#tasks table"
        );


    table.innerHTML = `

        <tr>

            <th>Employee</th>
            <th>Task</th>
            <th>Status</th>
            <th>Admin Action</th>

        </tr>

    `;


    tasks.forEach(
        function(task, index) {

            let action =
                "";


            if (
                task.status ===
                "Pending"
            ) {

                action =
                    "Start Task";

            }

            else if (
                task.status ===
                "In Progress"
            ) {

                action =
                    "Mark Completed";

            }

            else {

                action =
                    "Completed";

            }


            let row =
                table.insertRow();


            row.innerHTML = `

                <td>${task.employee}</td>

                <td>${task.task}</td>

                <td>
                    ${task.status}
                </td>

                <td>

                    <button
                        onclick="updateTask(${index})"
                        ${task.status === "Completed"
                            ? "disabled"
                            : ""}>

                        ${action}

                    </button>

                </td>

            `;
        }
    );


    styleButtons();
}


// ==========================================
// UPDATE TASK
// ==========================================

function updateTask(index) {

    if (
        tasks[index].status ===
        "Pending"
    ) {

        tasks[index].status =
            "In Progress";

    }

    else if (
        tasks[index].status ===
        "In Progress"
    ) {

        tasks[index].status =
            "Completed";

    }


    displayTasks();

    updateDashboard();
}


// ==========================================
// ADD TASK FORM
// ==========================================

function showTaskForm() {

    if (
        document.getElementById(
            "taskForm"
        )
    ) {
        return;
    }


    let form =
        document.createElement("div");


    form.id =
        "taskForm";


    let employeeOptions = "";


    employees.forEach(
        function(employee) {

            employeeOptions += `
                <option>
                    ${employee.name}
                </option>
            `;

        }
    );


    form.innerHTML = `

        <div>

            <h3>Add New Task</h3>

            <select id="taskEmployee">

                <option value="">
                    Select Employee
                </option>

                ${employeeOptions}

            </select>

            <input
                type="text"
                id="taskName"
                placeholder="Task Name">

            <div>

                <button onclick="saveTask()">
                    Add Task
                </button>

                <button onclick="closeTaskForm()">
                    Cancel
                </button>

            </div>

        </div>

    `;


    form.style.background =
        "#f5f6fa";

    form.style.padding =
        "20px";

    form.style.marginBottom =
        "20px";

    form.style.borderRadius =
        "8px";


    let inputs =
        form.querySelectorAll(
            "input, select"
        );


    inputs.forEach(
        function(input) {

            input.style.width =
                "100%";

            input.style.padding =
                "10px";

            input.style.marginBottom =
                "10px";

            input.style.border =
                "1px solid #ccc";

            input.style.borderRadius =
                "5px";

        }
    );


    let heading =
        document.querySelector(
            "#tasks h2"
        );


    heading.after(form);

    styleButtons();
}


// ==========================================
// SAVE TASK
// ==========================================

function saveTask() {

    let employee =
        document.getElementById(
            "taskEmployee"
        ).value;


    let task =
        document.getElementById(
            "taskName"
        ).value.trim();


    if (!employee || !task) {

        alert(
            "Please enter all task details."
        );

        return;
    }


    tasks.push({

        employee: employee,

        task: task,

        status: "Pending"

    });


    closeTaskForm();

    displayTasks();

    updateDashboard();
}


// ==========================================
// CLOSE TASK FORM
// ==========================================

function closeTaskForm() {

    let form =
        document.getElementById(
            "taskForm"
        );


    if (form) {
        form.remove();
    }
}


// ==========================================
// LEAVES
// ==========================================

function displayLeaves() {

    let table =
        document.querySelector(
            "#leaves table"
        );


    table.innerHTML = `

        <tr>

            <th>Employee</th>
            <th>Leave Date</th>
            <th>Status</th>
            <th>Admin Action</th>

        </tr>

    `;


    leaves.forEach(
        function(leave, index) {

            let action =
                "";


            if (
                leave.status ===
                "Pending"
            ) {

                action = `

                    <button
                        onclick="approveLeave(${index})">
                        Approve
                    </button>

                    <button
                        onclick="rejectLeave(${index})">
                        Reject
                    </button>

                `;

            }

            else {

                action =
                    leave.status;

            }


            let row =
                table.insertRow();


            row.innerHTML = `

                <td>
                    ${leave.employee}
                </td>

                <td>
                    ${leave.date}
                </td>

                <td>
                    ${leave.status}
                </td>

                <td>
                    ${action}
                </td>

            `;
        }
    );


    styleButtons();
}


// ==========================================
// APPROVE LEAVE
// ==========================================

function approveLeave(index) {

    leaves[index].status =
        "Approved";


    displayLeaves();

    updateDashboard();
}


// ==========================================
// REJECT LEAVE
// ==========================================

function rejectLeave(index) {

    leaves[index].status =
        "Rejected";


    displayLeaves();

    updateDashboard();
}


// ==========================================
// ADD LEAVE FORM
// ==========================================

function showLeaveForm() {

    if (
        document.getElementById(
            "leaveForm"
        )
    ) {
        return;
    }


    let form =
        document.createElement("div");


    form.id =
        "leaveForm";


    let employeeOptions =
        "";


    employees.forEach(
        function(employee) {

            employeeOptions += `
                <option>
                    ${employee.name}
                </option>
            `;

        }
    );


    form.innerHTML = `

        <div>

            <h3>Add Leave Request</h3>

            <select id="leaveEmployee">

                <option value="">
                    Select Employee
                </option>

                ${employeeOptions}

            </select>

            <input
                type="date"
                id="leaveDate">

            <div>

                <button onclick="saveLeave()">
                    Submit Request
                </button>

                <button onclick="closeLeaveForm()">
                    Cancel
                </button>

            </div>

        </div>

    `;


    form.style.background =
        "#f5f6fa";

    form.style.padding =
        "20px";

    form.style.marginBottom =
        "20px";

    form.style.borderRadius =
        "8px";


    let inputs =
        form.querySelectorAll(
            "input, select"
        );


    inputs.forEach(
        function(input) {

            input.style.width =
                "100%";

            input.style.padding =
                "10px";

            input.style.marginBottom =
                "10px";

            input.style.border =
                "1px solid #ccc";

            input.style.borderRadius =
                "5px";

        }
    );


    let heading =
        document.querySelector(
            "#leaves h2"
        );


    heading.after(form);

    styleButtons();
}


// ==========================================
// SAVE LEAVE
// ==========================================

function saveLeave() {

    let employee =
        document.getElementById(
            "leaveEmployee"
        ).value;


    let date =
        document.getElementById(
            "leaveDate"
        ).value;


    if (!employee || !date) {

        alert(
            "Please enter all leave details."
        );

        return;
    }


    let formattedDate =
        date.split("-")
            .reverse()
            .join("-");


    leaves.push({

        employee: employee,

        date: formattedDate,

        status: "Pending"

    });


    closeLeaveForm();

    displayLeaves();

    updateDashboard();
}


// ==========================================
// CLOSE LEAVE FORM
// ==========================================

function closeLeaveForm() {

    let form =
        document.getElementById(
            "leaveForm"
        );


    if (form) {
        form.remove();
    }
}


// ==========================================
// DEPARTMENT COUNTS
// ==========================================

function updateDepartments() {

    let cards =
        document.querySelectorAll(
            ".department-card"
        );


    cards.forEach(
        function(card) {

            let department =
                card.querySelector(
                    "h3"
                ).textContent;


            let count =
                employees.filter(
                    function(employee) {

                        return employee.department ===
                            department;

                    }
                ).length;


            card.querySelector(
                "p"
            ).textContent =
                count + " Employees";

        }
    );
}


// ==========================================
// ADMIN BUTTONS
// ==========================================

function createAdminButtons() {

    // Employee

    let employeeHeading =
        document.querySelector(
            "#employees h2"
        );


    let addEmployee =
        document.createElement(
            "button"
        );


    addEmployee.textContent =
        "+ Add Employee";


    addEmployee.onclick =
        showEmployeeForm;


    employeeHeading.appendChild(
        addEmployee
    );


    // Attendance

    let attendanceHeading =
        document.querySelector(
            "#attendance h2"
        );


    let refreshAttendance =
        document.createElement(
            "button"
        );


    refreshAttendance.textContent =
        "Refresh";


    refreshAttendance.onclick =
        displayAttendance;


    attendanceHeading.appendChild(
        refreshAttendance
    );


    // Tasks

    let taskHeading =
        document.querySelector(
            "#tasks h2"
        );


    let addTask =
        document.createElement(
            "button"
        );


    addTask.textContent =
        "+ Add Task";


    addTask.onclick =
        showTaskForm;


    taskHeading.appendChild(
        addTask
    );


    // Leaves

    let leaveHeading =
        document.querySelector(
            "#leaves h2"
        );


    let addLeave =
        document.createElement(
            "button"
        );


    addLeave.textContent =
        "+ Add Leave";


    addLeave.onclick =
        showLeaveForm;


    leaveHeading.appendChild(
        addLeave
    );


    styleButtons();
}


// ==========================================
// BUTTON STYLE
// ==========================================

function styleButtons() {

    let buttons =
        document.querySelectorAll(
            "button"
        );


    buttons.forEach(
        function(button) {

            button.style.padding =
                "7px 11px";

            button.style.margin =
                "3px";

            button.style.border =
                "none";

            button.style.borderRadius =
                "5px";

            button.style.cursor =
                "pointer";

            button.style.backgroundColor =
                "#52727c";

            button.style.color =
                "white";

        }
    );
}


// ==========================================
// RESPONSIVE TABLES
// ==========================================

function makeTablesResponsive() {

    let tables =
        document.querySelectorAll(
            "table"
        );


    tables.forEach(
        function(table) {

            let wrapper =
                document.createElement(
                    "div"
                );


            wrapper.style.width =
                "100%";

            wrapper.style.overflowX =
                "auto";


            table.parentNode.insertBefore(
                wrapper,
                table
            );


            wrapper.appendChild(
                table
            );

        }
    );
}


// ==========================================
// SIDEBAR NAVIGATION
// ==========================================

document
    .querySelectorAll(
        ".sidebar a"
    )
    .forEach(
        function(link) {

            link.addEventListener(
                "click",
                function(event) {

                    event.preventDefault();


                    let target =
                        document.querySelector(
                            link.getAttribute(
                                "href"
                            )
                        );


                    if (target) {

                        target.scrollIntoView({
                            behavior: "smooth"
                        });

                    }

                }
            );

        }
    );


// ==========================================
// START PORTAL
// ==========================================

displayEmployees();

displayAttendance();

displayTasks();

displayLeaves();

updateDashboard();

updateDepartments();

createEmployeeSearch();

createAdminButtons();

makeTablesResponsive();

showCurrentDate();