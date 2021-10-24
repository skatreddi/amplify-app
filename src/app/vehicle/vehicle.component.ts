import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupName } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import gql from "graphql-tag";
import Auth from '@aws-amplify/auth';
import API from '@aws-amplify/api';
import PubSub from '@aws-amplify/pubsub';

import { APIService } from 'src/app/API.service';
import { AppsyncService } from '../appsync.service';
// import { createVehicle } from 'src/graphql/mutations';
// import { listVehicles } from 'src/graphql/queries';
// import { createVehicleInput } from 'src/graphql/inputs';
// import { buildMutation } from "aws-appsync";
import { Vehicle } from './../types/vehicle'


@Component({
  selector: 'vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  vehicles!: Array<Vehicle>;
  // loading = true;
  public createForm!: FormGroup;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: APIService,
    private fb: FormBuilder) { 
      Auth.currentAuthenticatedUser().then(console.log)
    }

  ngOnInit() {
    this.createForm = this.fb.group({
      'VIN': ['', Validators.required],
      'Manufacturer': ['', Validators.required],
      'ModelYear': ['', Validators.required],
      'EngSerialNum': ['', Validators.required],
      'EngManufacturer': ['', Validators.required],
      'EngModel': ['', Validators.required],
      'EngModelYear': ['', Validators.required],
      'TransmissonType': ['', Validators.required],
      'TransManufacturer': ['', Validators.required],
      'TransModel': ['', Validators.required]
    });

    // this.loading = true;

    // this.api.ListVehicles().then(event => {
    //   // debugger;
    //   // this.loading = false;
    //   this.vehicles = event.items;
    // });

    this.api.OnCreateVehicleListener.subscribe( (event: any) => {
      const newVehicle = event.value.data.onCreateVehicle;
      this.vehicles = [newVehicle, ...this.vehicles];
    });
    this.api.OnDeleteVehicleListener.subscribe( (event: any) => {
      const deletedVehicle = event.value.data.OnDeleteVehicle
      if (deletedVehicle) {
        this.vehicles = this.vehicles.filter((v) => v.id != deletedVehicle.id);
      }
    });
  }

  public onCreate(vehicle: any){
    this.api.CreateVehicle(vehicle).then(event => {
      console.log('item created');
      this.createForm.reset();
    })
    .catch(e => {
      console.log('error creating vehicle...', e)
    });
  }

  public onDelete(vehicle: any){
    const { id } = vehicle;
    const v = { id };
    this.api.DeleteVehicle(v).then(event => {
      console.log('item deleted');
      this.vehicles = this.vehicles.filter((v) => v.id != vehicle.id)
    })
    .catch(e => {
      console.log('error deleting vehicle...', e)
    });
  }
}

  //   this.route.params.subscribe(params => {
  //     this.editMode = 'id' in params;
  //     if (this.editMode) {
  //      this.loadVehicle(params['id']);
  //     }
  //   })
  // }

  // loadVehicle(id: string) {
  //   this.api.GetVehicle(id).then((vehicle: GetVehicleQuery) => {
  //     this.form.patchValue({
  //       id: vehicle.id,
  //       vin: vehicle.VIN,
  //       manufacturer: vehicle.Manufacturer
  //     })
  //   });
  // }
  
  // add() {
  //   this.api.CreateVehicle(this.form.value).then(() => {
  //     this.router.navigate(['vehicles']);
  //   })
  // }

  // update() {
  //   this.api.UpdateVehicle(this.form.value).then(() => {
  //     this.router.navigate(['vehicles']);
  //   })
  // }

  // delete() {
  //   this.api.DeleteVehicle({ id: this.form.value['id']}).then(() => {
  //     this.router.navigate(['Vehicle']);
  //   })
//   }
// }
