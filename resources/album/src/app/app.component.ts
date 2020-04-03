import { Component } from '@angular/core';
import {Post} from "./post";
import {MatDialog} from "@angular/material/dialog";
import {PostDialogComponent} from "./post-dialog/post-dialog.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})

export class AppComponent {
    title = 'album';
    posts: Post[] = [
      new Post("Alex Botelho 1", "Meu post", "Sub Alex", "alex@hotmail.com", "Minha msg"),
      new Post("Luciana Botelho 1", "Meu post", "Sub Luciana", "luciana@hotmail.com", "Minha msg"),
      new Post("Marcel Botelho 1", "Meu post", "Sub Marcel", "marcel@hotmail.com", "Minha msg"),
      new Post("Ítalo Botelho 1", "Meu post", "Sub Ítalo", "italo@hotmail.com", "Minha msg"),
      new Post("Alex Botelho 2", "Meu post", "Sub Alex", "alex@hotmail.com", "Minha msg"),
      new Post("Luciana Botelho 2", "Meu post", "Sub Luciana", "luciana@hotmail.com", "Minha msg"),
      new Post("Marcel Botelho 2", "Meu post", "Sub Marcel", "marcel@hotmail.com", "Minha msg"),
      new Post("Ítalo Botelho 2", "Meu post", "Sub Ítalo", "italo@hotmail.com", "Minha msg")
    ];

    constructor (public dialog: MatDialog) {};

    openDialog() {
        const dialogRef = this.dialog.open(PostDialogComponent, {
            width: '600px'
        });

        dialogRef.afterClosed().subscribe(
            result => {
                if (result) {
                    console.log(result);
                }
            }
        );
    }
}
