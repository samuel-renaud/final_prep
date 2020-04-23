
let count =0;

function increment() {
if (count%2==0)
{let header = document.getElementsByTagName("h1");
header.item(0).append("-word");
}
let pa = document.createElement("p");
pa.append(document.createTextNode("count: "+count));
document.body.append(pa);
count = count+1;
}

function usercheck() {
    const rule = /[a-zA-Z]+/;
    let user = document.getElementById("user").value;
    if(rule.test(user))
    {document.getElementsByTagName("input").item(0).style.backgroundColor="blue";}
    else
    {document.getElementsByTagName("input").item(0).style.backgroundColor="red";}
}

person_array = []; //to store a list of people

//a constructor to build people objects
function person(name, age){
    this.name = name;
    this.age = age;
    return this;
}

function objectstuff() {
   let name = "john";
   let age = 15;
   var template = person(name, age);
//   create a table if one is not there and append the new person to it
    if(document.getElementsByTagName("table").length ==0)
    {
        //create elements
        let new_table= document.createElement("table");
        new_table.border= "1px";
        new_table.style.borderWidth= "1px";
        let new_row = document.createElement("tr");
        let new_header_name = document.createElement("th");
        new_header_name.innerText = "Name";
        let new_header_age = document.createElement("th");
        new_header_age.innerText = "Age";

        //create spot for new person and attach said persons row
        let sub_row = document.createElement("tr");
        let sub_row_name = document.createElement("td");
            sub_row_name.innerText = template.name;
        let sub_row_age = document.createElement("td");
            sub_row_age.innerText = template.age;
        sub_row.appendChild(sub_row_name);
        sub_row.appendChild(sub_row_age);



        //attach elements
        new_row.appendChild(new_header_name);
        new_row.appendChild(new_header_age);
        new_table.append(new_row);
        new_table.append(sub_row);
       document.body.append(new_table);
    }
    else //table already exists now input the new person
        {
        //create spot for new person and attach said persons row
        let sub_row = document.createElement("tr");
        let sub_row_name = document.createElement("td");
            sub_row_name.innerText = template.name;
        let sub_row_age = document.createElement("td");
            sub_row_age.innerText = template.age;
        sub_row.appendChild(sub_row_name);
        sub_row.appendChild(sub_row_age);

        //append to end of table
        let tabe = document.getElementsByTagName("table")[0];
        table.appendChild(sub_row);


    }


}




