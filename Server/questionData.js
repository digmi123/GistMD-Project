const questionData = 
{
    gender:{
        type: "select",
        text: "Patient gender",
        options: ["Male", "Female"],
        required: true
    },
    name:{
        type: "text",
        text: "Patient name",
        required: true
    },
    age:{
        type: "number",
        text: "Patient age",
        required: true
    },
    language:{
        type: "text",
        text: "Patient language",
        required: true
    },
    procedure:{
        type: "text",
        text: "Procedure name",
        required: true
    },
     mikolo:{
        type: "text",
        text: "kakiPopen",
        required: true
    },
    kaki:{
        type: "text",
        text: "kakiPopen",
        required: true
    },
}

module.exports = questionData