import { Component, OnInit } from '@angular/core';
//Lấy mã phim từ url đưa xuống
import { ActivatedRoute } from "@angular/router";
import { MovieService } from "src/app/core/service/movie.service";
import { MovieDetail } from "src/app/core/models/movie";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movieDetail: MovieDetail | null = null;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        console.log(params);
       this.movieService.getMovieDetail(params.maPhim).subscribe({
         next: (result) => {
            this.movieDetail = result;
         }
       })
      },
    })

  }

}
