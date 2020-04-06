import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {Post} from "../post";

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.sass']
})
export class PostDialogComponent implements OnInit {

  dados = {
    post: new Post("", "", "", "", "", ""),
    arquivo: null
  };

  public nomearquivo: string;

  constructor(
      public dialogRef: MatDialogRef<PostDialogComponent>
  ) { }

  ngOnInit(): void {
  }

  mudouarquivo(event) {
    this.dados.arquivo = event.target.files[0];
    this.nomearquivo = event.target.files[0].name;
  }

  salvar() {
    this.dialogRef.close(this.dados);
  }

  cancelar() {
    this.dialogRef.close();
  }
}
