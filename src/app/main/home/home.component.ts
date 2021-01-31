import { Component, OnInit } from '@angular/core';
import { MovieService } from "src/app/core/service/movie.service";
import { Movie } from 'src/app/core/models/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading: boolean = false;
  error: string = "";


  movieList: Movie[] = [];

  constructor(private movieService: MovieService) { }



  //OnInit : lifecycle của Angular : chạy 1 lần sau khi render (Như componentDidMount bên React)

  ngOnInit(): void {
    // this.movieList = this.movieService.getMovieList()
    // this.movieService.getMovieListPromise().then(result => {
    //   this.movieList = result;
    // }).catch(error => console.log(error));

  //   this.movieService.getMovieListObservable().subscribe({
  //    // next : nhận kết quả từ Observable
  //     next: (result) => {
  //       this.movieList = result;
  //     },

  //     // Error : nhận lỗi
  //     error: (error) => {
  //       console.log(error);
        
  //     },

  //     // Complete : chạy khi kết thúc Observable
  //     complete: () => {
  //       console.log('Retching completed');
        
  //     }
  //   })
  // }
  this.loading = true;
    this.movieService.getMovieList().subscribe({
      next: (result) => {
        this.movieList = result;
      },
      error: (err) => {
        console.log('error');
        this.error= err.error;
        
      },
      complete: () => {
        this.loading = false;
        console.log('Fetching completed');
        
      }
    })

  }

}
