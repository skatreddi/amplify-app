import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupName } from '@angular/forms';
import { APIService, GetVehicleQuery, Vehicle, UpdateVehicleInput, DeleteVehicleInput } from 'src/app/doeapp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit{
  public vehicleForm!: FormGroup;
  public vehicles: Array<Vehicle> = [];
  showNew: Boolean = false;
  addNewButton: Boolean = true;
  submitType: string = 'Save';
  fueltypes = ["Gas", "Diesel"];
  transtypes = ["Manual", "Automatic"];
  
    
  constructor(
    private api: APIService,
    private fb: FormBuilder,
    private router:Router) { 
      this.vehicleForm = this.fb.group({
        'id': ['', Validators.required],
        'VIN': ['', Validators.required],
        'Manufacturer': ['', Validators.required],
        'ModelYear': ['', Validators.required],
        'OdoMiles': ['', Validators.nullValidator],
        'Region': ['', Validators.nullValidator],
        'Vocation': ['', Validators.nullValidator],
        'FleetName': ['', Validators.nullValidator],
        'AdditionalParameter': ['', Validators.nullValidator],
        'EngSerialNum': ['', Validators.required],
        'EngManufacturer': ['', Validators.required],
        'EngModel': ['', Validators.required],
        'EngModelYear': ['', Validators.required],
        'FuelType': ['', Validators.nullValidator],
        'Displacement': ['', Validators.nullValidator],
        'EngAdditionalParameter': ['', Validators.nullValidator],
        'TransmissonType': ['', Validators.required],
        'TransManufacturer': ['', Validators.required],
        'TransModel': ['', Validators.required],
        'Hybrid': ['', Validators.nullValidator],
        'DOC': ['', Validators.nullValidator],
        'TWC': ['', Validators.nullValidator],
        'SCR': ['', Validators.nullValidator],
        'PMTrap': ['', Validators.nullValidator],
       });
      }
      

    // private subscription: Subscription | null = null;
    async ngOnInit(){
        /* fetch vehicles when app loads */
      this.api.ListVehicles().then((event) => {
        this.vehicles = event.items as Vehicle[];
      });
    }
      
    onNew(){
      this.vehicleForm.reset();
      this.submitType = 'Save';
      this.showNew = true;
      this.addNewButton = false;
    }

    onSave(vehicle: Vehicle) {
      if (this.submitType === 'Save'){
        debugger
        this.api
          .CreateVehicle(vehicle)
          .then((event) => {
            console.log("item created!");
            // this.vehicleForm.reset();
          })
          .catch((e) => {
            console.log("error creating vehicle...", e);
          });
      } else {
        this.api
        .UpdateVehicle(vehicle)
        .then((event) => {
          console.log("item updated!");
          // this.vehicleForm.reset();
        })
        .catch((e) => {
          console.log("error updating vehicle...", e);
        });
      }
      this.showNew = false;
      this.addNewButton = true;
      this.vehicleForm.reset();
      // this.ngOnInit
    }

    onEdit(vehicle: Vehicle){
      this.showNew = true;
      this.submitType = 'Update';
      this.addNewButton = false;
      // this.api.GetVehicle(vehicle.id)
      this.vehicleForm.setValue({'id': vehicle.id, 
                                  'VIN': vehicle.VIN, 
                                  'Manufacturer': vehicle.Manufacturer,
                                  'ModelYear': vehicle.ModelYear, 
                                  'OdoMiles': vehicle.OdoMiles, 
                                  'Region': vehicle.Region,
                                  'Vocation': vehicle.Vocation, 
                                  'FleetName': vehicle.FleetName,
                                  'AdditionalParameter': vehicle.AdditionalParameter,
                                  'EngSerialNum': vehicle.EngSerialNum,
                                  'EngManufacturer': vehicle.EngManufacturer,
                                  'EngModel': vehicle.EngModel,
                                  'EngModelYear': vehicle.EngModelYear,
                                  'FuelType': vehicle.FuelType,
                                  'Displacement': vehicle.Displacement,
                                  'EngAdditionalParameter': vehicle.EngAdditionalParameter,
                                  'TransmissonType': vehicle.TransmissonType,
                                  'TransManufacturer': vehicle.TransManufacturer,
                                  'TransModel': vehicle.TransModel,
                                  'Hybrid': vehicle.Hybrid,
                                  'DOC': vehicle.DOC,
                                  'TWC': vehicle.TWC,
                                  'SCR': vehicle.SCR,
                                  'PMTrap': vehicle.PMTrap})
    }

    onDelete(vehicle: DeleteVehicleInput) {
      debugger
      this.api
      .DeleteVehicle(vehicle)
        .then((event) => {
          console.log("item deleted!");
        })
        .catch((e) => {
          console.log("error deleting vehicle...", e);
        });
    }

    onCancel(){
      this.showNew = false;
      this.addNewButton = true;
    }
}

// export class VehicleComponent implements OnInit{
//   public createForm!: FormGroup;
//   showNew: Boolean = false;

//   /* declare vehicles variable */
//   public vehicles: Array<Vehicle> = [];
  
//   constructor(
//     private api: APIService,
//     private fb: FormBuilder) { 
//       this.createForm = this.fb.group({
//         'id': ['', Validators.required],
//         'VIN': ['', Validators.required],
//         'Manufacturer': ['', Validators.required],
//         'ModelYear': ['', Validators.required],
//         'OdoMiles': ['', Validators.nullValidator],
//         'Region': ['', Validators.nullValidator],
//         'Vocation': ['', Validators.nullValidator],
//         'FleetName': ['', Validators.nullValidator],
//         'AdditionalParameter': ['', Validators.nullValidator],
//         'EngSerialNum': ['', Validators.required],
//         'EngManufacturer': ['', Validators.required],
//         'EngModel': ['', Validators.required],
//         'EngModelYear': ['', Validators.required],
//         'FuelType': ['', Validators.nullValidator],
//         'Displacement': ['', Validators.nullValidator],
//         'EngAdditionalParameter': ['', Validators.nullValidator],
//         'TransmissonType': ['', Validators.required],
//         'TransManufacturer': ['', Validators.required],
//         'TransModel': ['', Validators.required],
//         'Hybrid': ['', Validators.nullValidator],
//         'DOC': ['', Validators.nullValidator],
//         'TWC': ['', Validators.nullValidator],
//         'SCR': ['', Validators.nullValidator],
//         'PMTrap': ['', Validators.nullValidator],
//        });
//       }

//     // private subscription: Subscription | null = null;
//     async ngOnInit(){
//       /* fetch vehicles when app loads */
//     this.api.ListVehicles().then((event) => {
//       this.vehicles = event.items as Vehicle[];
//     });
//   }
      
//     // /* subscribe to new restaurants being created */
//     // this.subscription = <Subscription>(
//     //   this.api.OnCreateVehicleListener.subscribe((event: any) => {
//     //     const newVehicle = event.value.data.onCreateVehicle;
//     //     this.vehicles = [newVehicle, ...this.vehicles];
//     //   })
//     // );
//     // }
//     // ngOnDestroy() {
//     //   if (this.subscription) {
//     //     this.subscription.unsubscribe();
//     //   }
//     //   this.subscription = null;
//     // }

//     public onNew(){
//       this.showNew = true;
//     }

//     public onCreate(vehicle: Vehicle) {
//         this.api
//           .CreateVehicle(vehicle)
//           .then((event) => {
//             console.log("item created!");
//             this.createForm.reset();
//           })
//           .catch((e) => {
//             console.log("error creating vehicle...", e);
//           });
//       }

//     public onEdit(vehicle: Vehicle) {
//       this.api
//         .UpdateVehicle(vehicle)
//         .then((event) => {
//           console.log("item updated!");
//           this.createForm.reset();
//         })
//         .catch((e) => {
//           console.log("error updating vehicle...", e);
//         });
//     }

//     public onDelete(vehicle: Vehicle) {
//       this.api
//         .DeleteVehicle(vehicle)
//         .then((event) => {
//           console.log("item deleted!");
//           this.createForm.reset();
//         })
//         .catch((e) => {
//           console.log("error deleting vehicle...", e);
//         });
//     }

//     public onCancel(){
//       this.showNew = false;
//     }
// }
    
  
