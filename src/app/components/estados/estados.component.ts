import { Component, OnInit } from '@angular/core';
import { EstadosService } from 'src/app/services/Estados/estados.service';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})
export class EstadosComponent implements OnInit {

  constructor(private estadosService: EstadosService) { }
  estados: any = []
  hidden: boolean = false
  estado = {

    descripcion_estado: ''
  }
  ngOnInit(): void {
    this.getEstados()
  }

  getEstados() {
    this.estadosService.getAllEstados().subscribe(
      (res: any) => {
        this.estados = res
      }, err => {
        console.log(err);

      }
    )
  }

  createEstado(estado: any) {
    this.estadosService.createEstado(estado).subscribe(
      (res: any) => {
        alert(res.message);
        document.location.reload();
      }, err => {
        console.log(err);
      }
    )
  }

  deleteEstado(id_estado: number) {
    this.estadosService.deleteEstado(id_estado).subscribe((res:any) => {
      alert(res.message);
      document.location.reload();
    }, err => {
      console.log(err);
    })
  }
  updateEstado(estado:any){
    this.estadosService.updateEstado(estado).subscribe(
      (res:any)=>{
        alert(res.message)
        document.location.reload();

      },err=>{
        console.log(err);

      }
    )
    console.log(estado);

  }

  form() {
    this.hidden = true
  }
  formHidden() {
    this.hidden = false
  }
}
