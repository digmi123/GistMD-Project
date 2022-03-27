const questionData = require('../questionData');

const questionDataAsList = []
for (const [key, value] of Object.entries(questionData)) {
  questionDataAsList.push({...value, id:key})
}

console.log(questionDataAsList);

module.exports.getQuestionData = async (req,res)=>{
    try{
        res.json(questionDataAsList);
    }catch(err){
        res.json({message: err});
    }
}