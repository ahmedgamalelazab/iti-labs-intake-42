class UserBuilder{

    constructor(userObjectPayLoad){
        //destructing the pay load 
        //[✅]
        const {id, name, username, email, address,company,phone,website} = userObjectPayLoad;
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address; //object
        this.company = company; //object
        this.phone = phone;
        this.website = website;
    };

    getSimpleUser(){
        return [this.id, this.name,this.username,this.email,this.phone,this.website];
    }

    getComplexAddress(){
        return `${this.address.street} ${this.address.zipcode} ${this.address.street} ${this.address.city}`
    }

    getComplexCompany(){
        return `${this.company.name} ${this.company.catchPhrase} ${this.company.bs}`
    }

}



export {UserBuilder};