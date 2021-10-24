export const createVehicleInput = `input CreateVehicleInput {
    id: ID
    vin: String!
    manufacturer: String!
    modelYear: String!
    engSerialNum: int!
    engManufacturer: String!
    engModel: String!
    engModelYear: String!
    fuelType: String
    transmissonType: String
    transManufacturer: String
    transModel: String
}`;