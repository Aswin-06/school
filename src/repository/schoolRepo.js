const schools=require("../models/schoolmodel")

exports.getSchools=async()=>
{
    const data=await schools.findAll();
    return data;
}

exports.insertSchool=async (data) => {
    const school=await schools.create(data)
    return school;
}