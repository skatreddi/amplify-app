export const createVehicle = `mutation CreateVehicle($input: CreateVehicleInput!){
    createVehicle(input: $input) {
        id
        vin
        manufacturer
        modelYear
        engSerialNum
        engManufacturer
        engModel
        engModelYear
        fuelType
        transmissonType
        transManufacturer
        transModel
    }
}`

export const updateVehicle = `mutation UpdateVehicle($input: UpdateVehicleInput!){
    updateVehicle(input: $input) {
        id
        vin
        manufacturer
        modelYear
        engSerialNum
        engManufacturer
        engModel
        engModelYear
        fuelType
        transmissonType
        transManufacturer
        transModel
    }
}`

export const deleteVehicle = `mutation DeleteVehicle($input: DeleteVehicleInput!){
    deleteVehicle(input: $input) {
        id
        vin
        manufacturer
        modelYear
        engSerialNum
        engManufacturer
        engModel
        engModelYear
        fuelType
        transmissonType
        transManufacturer
        transModel
    }
}`