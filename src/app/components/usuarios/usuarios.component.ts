import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/Usuarios/usuarios.service';
import { CategoriasService } from 'src/app/services/Categorias/categorias.service';
import { EstadosService } from 'src/app/services/Estados/estados.service';
import { user } from 'src/app/models/user';
import { tarea } from 'src/app/models/tarea';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private UsuariosService: UsuariosService,
    private CategoriasService: CategoriasService,
    private estadosService: EstadosService) { }
  user: any = []
  id_user: any
  hidden: boolean = false
  hiddenM: boolean = false
  hiddenT: boolean = true
  hiddenA: boolean = false

  displayedColumns: string[] = ['ID', 'NOMBRE', 'CORREO', 'TELEFONO', 'ACCIONES'];
  usuarios: any = []
  usuario: any = {
    id: '',
    nombre: '',
    telefono: '',
    correo: '',
  }

  tarea: tarea = {
    id_usuario_t: '',
    id_estado_t: '',
    id_categoria_t: '',
    fecha_fin: new Date(),
    fecha_inicio: new Date(),
    descripcion_tarea: '',
  }
  categorias: any = []
  estados: any = []
  tareas: any = []
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAll();
    this.getAllCategorias();
    this.getAllEstados();
  }

  getAll() {
    this.UsuariosService.getAllUser().subscribe(
      res => {
        //this.usuarios = res
        this.user = res;
      }, err => {
        console.log(err);
      }
    );
  }

  getAllCategorias() {
    this.CategoriasService.getAllCategorias().subscribe(
      res => {
        this.categorias = res
      }, err => {
        console.log(err);
      }
    )
  }

  getAllEstados() {
    this.estadosService.getAllEstados().subscribe(
      res => {
        this.estados = res
      }, err => {
        console.log(err);
      }
    )
  }

  createUsuario(usuario: user) {
    this.UsuariosService.createUsuario(usuario).subscribe(
      (res: any) => {
        alert(res.message)
        document.location.reload()
        console.log(res);
      }, err => {
        console.log(err);
      }
    )
  }

  deleteUser(id: any) {
    this.UsuariosService.deleteUsuario(id).subscribe(
      (res: any) => {
        console.log(res);

        alert(res.message)
        document.location.reload()
      },
      err => {
        console.log(err);
      }
    )

  }

  asignarTarea(tarea: tarea) {
    this.UsuariosService.asignarTarea(tarea).subscribe(
      (res: any) => {
        alert(res.message)
        document.location.reload()
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }

  getUsuario(id: any) {
    let today = new Date();
    this.UsuariosService.getUser(id).subscribe(
      (res: any) => {
        this.tareas = res[0].tareas
        this.usuarios = res[0].usuario
        for (let i = 0; i <= this.tareas.length; i++) {
          if (this.tareas[i].fecha_fin <= today.toISOString() && this.tareas[i].id_estado_t !=2) {
            this.tareas[i]['alert'] = 'El plazo para terminar la tarea ha finalizado'
            this.tareas[i]['color'] = '#ff5470'
            this.tareas[i]['hidden'] = true
          }
        }

      }, err => {
        console.log(err);
      }
    )
  }

  updateUsuario(usuario: user) {
    this.UsuariosService.updateUsuario(usuario).subscribe(
      (res: any) => {
        alert(res.message)
        console.log(res);
      }, err => {
        console.log(err);
      }
    )
  }

  deleteTarea(id: string) {
    this.UsuariosService.deleteTarea(id).subscribe(
      (res: any) => {
        alert(res.message);
        document.location.reload();
      }, err => {
        console.log(err);
      });
  }

  updateTarea(tarea: tarea) {
    this.UsuariosService.updatarea(tarea).subscribe((res: any) => {
      alert(res.message);
    }, err => {
      console.log(err);
    })
  }

  form() {
    this.hidden = true;
  }
  hiddenTable() {
    this.hiddenT = false
  }
  formA() {
    this.hiddenA = true;
  }
  formHiddenA() {
    this.hiddenA = false;
  }
  formHidden() {
    this.hidden = false;
  }
}
