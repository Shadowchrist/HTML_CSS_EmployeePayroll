class Employee{

    id;
    name;
    profilePic;
    gender;

    get id()
    {
        return this._id;
    }

    set id(id)
    {
        let idRegex = RegExp('[0-9]{1,}');
        if(idRegex.test(id))
        this._id = id;
        else
        throw 'ID incorrect';
    }

    get name()
    {
        return this._name;
    }

    set name(name)
    {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if(nameRegex.test(name))
        this._name = name;
        else 
        throw 'Name is incorrect';
    }

    get profilePic()
    {
        return this._profilePic;
    }

    set profilePic(profilePic)
    {
        this._profilePic = profilePic;
    }

    get gender()
    {
        return this._gender;
    }

    set gender(gender)
    {
        this._gender = gender;
    }

    get department()
    {
        return this._department;
    }

    set department(department)
    {
        this._department = department;
    }

    get salary()
    {
        return this._salary;
    }

    set salary(salary)
    {
        this._salary = salary;
    }

    get note()
    {
        return this._note;
    }

    set note(note)
    {
        this._note = note;
    }

    get startDate()
    {
        return this._startDate;
    }

    set startDate(startDate)
    {
        let date = new Date();
        if(startDate<=date)
        {
        this._startDate = startDate;
        }
        else
        throw 'Start Date incorrect';
    }

    toString()
    {
        const dateFormat = {year:'numeric', month:'long', day:'numeric'};
        const date = (this.startDate === undefined) ? "undefined" :
                     this.startDate.toLocaleDateString("en-US",dateFormat);
        return "Id = "+this.id+", Name = "+this.name+", Gender = "+this.gender+", ProfilePic = "+this.profilePic+", Department = "+this.department+", Salary = "+this.salary+
                ", StartDate = "+date+", Note = "+this.note;
    }

}