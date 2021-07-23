import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService, GetVehicleQuery, CreateVehicleMutation } from 'src/app/API.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  editMode!: boolean;
  form!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: APIService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null),
      address: new FormControl(null),
      siret: new FormControl(null),
    });

    this.route.params.subscribe(params => {
      this.editMode = 'id' in params;
      if (this.editMode) {
       this.loadVehicle(params['id']);
      }
    })
  }

  loadVehicle(id: string) {
    this.api.GetVehicle(id).then((vehicle: GetVehicleQuery) => {
      this.form.patchValue({
        id: vehicle.id,
        vin: vehicle.VIN,
        manufacturer: vehicle.Manufacturer
      })
    });
  }
  
  add() {
    this.api.CreateVehicle(this.form.value).then(() => {
      this.router.navigate(['vehicles']);
    })
  }

  update() {
    this.api.UpdateVehicle(this.form.value).then(() => {
      this.router.navigate(['vehicles']);
    })
  }

  delete() {
    this.api.DeleteVehicle({ id: this.form.value['id']}).then(() => {
      this.router.navigate(['Vehicle']);
    })
  }
}