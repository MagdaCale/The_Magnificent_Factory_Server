export const addMachineController = async (req, res) => {
    try{
        const machine = req.body
        const ading = await addMachineService(machine)
        console.log(ading)
        res.status(200).json(ading)

    }catch(error){
        res.status(500).json({error: error})
    }
}


export const addAllFreeMachineController = async (req, res) => {
    try{
        const result = await getAllFreeMachinesService()
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({error: error})
    }
}