import { Component, OnInit } from '@angular/core';
import { categoria } from 'src/app/models/categoria';
import { CategoriasService } from 'src/app/services/Categorias/categorias.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  hidden: boolean =false;
  URL = environment.api
  categorias: any = []
  categoria: categoria = {
    // id_categoria: 0,
    nombre_categoria: '',
    color: ''
  }
  constructor(private categriaService: CategoriasService) { }

  ngOnInit(): void {
    this.getAllCategorias();
  }

  getAllCategorias() {
    this.categriaService.getAllCategorias().subscribe(
      res => {
        this.categorias = res
      }, err => {
        console.log(err);
      }
    )
  }

  updateCategoria(x: any, y: any, z: any) {
    this.categoria.id_categoria = x;
    this.categoria.nombre_categoria = y;
    this.categoria.color = z;
    this.categriaService.updateCategoria(this.categoria).subscribe(
      (res: any) => {
        const message = res.message
        console.log(this.categoria);
        alert(message);
      }, err => {
        console.log(err);
      }
    )
  }

  deleteCategoria(id_categoria: number) {
    this.categriaService.deleteCategoria(id_categoria).subscribe(
      (res: any) => {
        const message = res.message
        alert(message)
        document.location.reload();
      }, err => {
        console.log(err);
      }
    );
  }

  agregarCategoria(categoria: categoria) {
    this.categriaService.agregarCategoria(categoria).subscribe(
      (res: any) => {
        console.log(res);
        alert(res.message)
        document.location.reload()
      }, err => {
        console.log(err);
      }
    )
  }

  form() {
    this.hidden = true;
  }
  formHidden() {
    this.hidden = false;
  }
}
