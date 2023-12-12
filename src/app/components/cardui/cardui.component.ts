import { Component, OnInit } from '@angular/core';
import { PerfilesService } from '../../services/perfiles.service';

@Component({
  selector: 'app-cardui',
  templateUrl: './cardui.component.html',
  styleUrls: ['./cardui.component.scss']
})
export class CarduiComponent implements OnInit {

  constructor(private perfilesProgramador : PerfilesService) { }

  listaUsuarios: any = [];

  ngOnInit(): void {
    this.initData();
  }

  target = {
    clicked: 0,
    currentFollowers: 90,
    btn: document.querySelector("a.btn"),
    fw: document.querySelector("span.followers")
};

  initData(){
		this.perfilesProgramador.getUsuarios().subscribe(
			(res) => {
				this.responsegetUsuarios(res);
      },
			(err) => console.log(err)
    );
  }

  responsegetUsuarios(res){
    console.log("Lista de usuarios", res)
    this.listaUsuarios = res;
  }


}
