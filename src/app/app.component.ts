import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts=[
    {
      title: "Mon premier post",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.saepe eaque esse consequatur, dolore",
      created_at: new Date()
    },
    {
      title: "Mon deuxième post",
      content: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore ab reprehenderit beatae ullam maiores? ",
      created_at: new Date()
    },
    {
      title: "Encore un post",
      content: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus magni atque distinctio officia, magnam voluptatem quae non aut aliquam amet, dolore perspiciatis, expedita porro eum nisi quod at cumque sunt!",
      created_at: new Date()
    }
  ]
  
}
