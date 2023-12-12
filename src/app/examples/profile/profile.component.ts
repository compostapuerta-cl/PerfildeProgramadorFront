import { Component, OnInit } from '@angular/core';
import { PerfilesService } from '../../services/perfiles.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    listaPerfiles: any = [];
    perfilAlexander: any = [];
    perfilAlexanderNombre: any;
    perfilAlexanderApellido1: any;
    perfilAlexanderApellido2: any;
    perfilAlexanderBio: any;
    perfilAlexanderPais: any = [];
    perfilAlexanderProyectos: any = [];
    perfilAlexanderRedesSociales: any = [];

    constructor( private perfilesService: PerfilesService) { }

    ngOnInit() {
        this.initData();
    }

    initData(){
		this.perfilesService.getUsuarios().subscribe(
			(res) => {
				this.responsegetUsuarios(res);
               

      },
			(err) => console.log(err)
    );
  }

  responsegetUsuarios(res){
    
    this.listaPerfiles = res;
    this.perfilAlexander = this.listaPerfiles.filter((item) => item.apellido_paterno == "Príncipe");

    this.perfilAlexanderNombre = this.perfilAlexander[0].nombre
    this.perfilAlexanderApellido1 = this.perfilAlexander[0].apellido_paterno
    this.perfilAlexanderApellido2 = this.perfilAlexander[0].apellido_paterno
    this.perfilAlexanderBio = this.perfilAlexander[0].bio

    this.perfilAlexanderPais = this.perfilAlexander[0].id_pais
    this.perfilAlexanderProyectos = this.perfilAlexander[0].listProyectos
    this.perfilAlexanderRedesSociales = this.perfilAlexander[0].listRedesSociales
    console.log("Lista de usuarios", this.listaPerfiles)
    console.log("Redes Sociales", this.perfilAlexanderRedesSociales)
    console.log("Proyectos", this.perfilAlexanderProyectos)
    
  }

}
