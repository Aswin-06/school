const {insertSchool,getSchools}=require("../repository/schoolRepo")

function findDis(lat1,long1,lat2,long2)
{
    const r=6371;
    const dlat=((lat2-lat1)*Math.PI)/180;
    const dlon=((long2-long1)*Math.PI)/180;
    const lat3=(lat1*Math.PI)/180;
    const lat4=(lat2*Math.PI)/180
    const a=Math.sin(dlat/2)**2+Math.cos(lat3)*Math.cos(lat4)*Math.sin(dlon/2)**2;
    const c=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
    return r*c;
}

exports.getSchools=async (req,res) => {
    try {
        if(!res || !res.body || !res.body.latitude || !res.body.longitude)
        {
            const {latitude,longitude}=req.body;
            const dis=[];
            const data=await getSchools();
            for(let i=0;i<data.length;i++)
            {
                dis.push(findDis(latitude,longitude,data[i].latitude,data[i].longitude));
            }
            console.log(dis);
            let dist=[...dis];
            dis.sort();
            const schools=[];
            for(let i=0;i<dis.length;i++)
            {
                schools.push(data[(dist.indexOf(dis[i]))]);
            }
            res.status(200).json(schools);
        }
        else
            return res.status(400).send("data insufficient");
    } 
    catch (error) {
        res.status(404).json("something went wrong")
        console.log(error);
    }
}

exports.postSchools=async (req,res) => {
    try {
        if(!req || !req.body)
            return res.status(400).send("required body");
        if(!req.body.name || !req.body.address || !req.body.latitude || !req.body.longitude)
            return res.status(400).send("give all the values")
        if(typeof req.body.name !=="string" || typeof req.body.address !=="string" || typeof req.body.latitude !=="number" || typeof req.body.longitude !=="number")
            return res.status(400).send("give the correct values")
        const schools=await insertSchool(req.body);
        return res.status(200).json(schools);
    } catch (error) {
        console.log(error);
        return res.status(400).send("something went wrong");
    }
}