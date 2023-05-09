const { getTypes } = require("../../controllers/typesControllers/getTypes")


const getTypesHandler = async (req,res) => {
    try {
        const getAllTypes = await getTypes()
        res.status(200).json(getAllTypes)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {getTypesHandler}