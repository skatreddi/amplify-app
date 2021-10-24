export const getVehicle = `query GetVehicle($id: ID!){
    getVehicle(id: $id){
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
}`;

export const listVehicles = `query ListVehicles(
    $filter: ModelVehicleFilterInput
    $limit: Int
    $nextToken: String
){
    listVehicles(filter: $filter, limit: $limit, nextToken: $nextToken){
        items{
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
        nextToken
    }

}`