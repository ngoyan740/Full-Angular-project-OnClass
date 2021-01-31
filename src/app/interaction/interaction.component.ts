import { Component, OnInit, ViewChild } from '@angular/core';
import {MovieListComponent} from './movie-list/movie-list.component'

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss']
})
export class InteractionComponent implements OnInit {

  //movieAdd chứa giá trị bộ phim được tạo mới
  newMovie : any;


    @ViewChild("movieList") movieListComponent !: MovieListComponent;

  constructor() { };

  handleAddMovie(movie : any) {

    // TODO Cách 1: truyền inputs
    // console.log(movie);    
    // this.newMovie = movie;
    

    //Cách 2 : viewChild
    this.movieListComponent.movieList.push(movie);

  }

  ngOnInit(): void {
  }

}
